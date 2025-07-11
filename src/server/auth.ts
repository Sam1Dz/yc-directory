import axios from 'axios';
import { createServerFn } from '@tanstack/react-start';
import {
  getWebRequest,
  setCookie,
  getCookie,
  deleteCookie,
} from '@tanstack/react-start/server';

import { env } from '~/configs/env';
import { sessionKey } from '~/configs/key';
import { decryptData, encryptData } from '~/server/encryption';
import {
  type CookieData,
  type GithubAccessToken,
  type GithubUser,
} from '~/types/auth';

export const getLoginUrl = createServerFn({
  method: 'GET',
}).handler(() => {
  const { headers } = getWebRequest();
  const referer = headers.get('referer') || headers.get('origin');
  const redirectUri = referer
    ? `&redirect_uri=${new URL(referer)}auth/callback`
    : '';

  return `https://github.com/login/oauth/authorize?client_id=${env.AUTH_GITHUB_CLIENT_ID}${redirectUri}&scope=user:email`;
});

export const getCredentials = createServerFn({
  method: 'POST',
}).handler(async () => {
  const { url } = getWebRequest();
  const code = new URL(url).searchParams.get('code');
  const userData = await getUserData();

  if (!code) console.error('[ERROR] No code provided in the request');
  if (userData.status === 'empty') {
    await axios
      .post<GithubAccessToken>(
        'https://github.com/login/oauth/access_token',
        {
          client_id: env.AUTH_GITHUB_CLIENT_ID,
          client_secret: env.AUTH_GITHUB_CLIENT_SECRET,
          code,
        },
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      .then(async (response) => {
        const { access_token } = response.data;

        return await axios.get<GithubUser>('https://api.github.com/user', {
          headers: { Authorization: `Bearer ${access_token}` },
        });
      })
      .then(async (userResponse) => {
        const userData: GithubUser = {
          id: userResponse.data.id,
          login: userResponse.data.login,
          name: userResponse.data.name,
          avatar_url: userResponse.data.avatar_url,
        };
        const encryptedUserData = await encryptData({
          data: JSON.stringify(userData),
        });

        setCookie(sessionKey, encryptedUserData, {
          httpOnly: true,
          secure: true,
          sameSite: 'lax',
          maxAge: 24 * 60 * 60, // 1 day
        });
      })
      .catch((error) => {
        console.error('[ERROR] Authentication failed:', error);
      });
  } else {
    if (userData.status === 'invalid') {
      await logoutUser();
    }
  }
});

export const getUserData = createServerFn({
  method: 'GET',
}).handler(async (): Promise<CookieData> => {
  const sessionCookie = getCookie(sessionKey);

  if (sessionCookie) {
    const decryptedData = await decryptData({ data: sessionCookie });

    if (!decryptedData) {
      console.error('[ERROR] Session is invalid');
      return {
        status: 'invalid',
        data: null,
      };
    }

    return {
      status: 'valid',
      data: JSON.parse(decryptedData),
    };
  } else {
    return {
      status: 'empty',
      data: null,
    };
  }
});

export const logoutUser = createServerFn({
  method: 'POST',
}).handler(() => {
  deleteCookie(sessionKey);
});
