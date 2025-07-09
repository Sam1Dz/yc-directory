import { betterAuth } from 'better-auth';
import { reactStartCookies } from 'better-auth/react-start';

import { env } from '~/configs/env';

export const index = betterAuth({
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    },
  },
  plugins: [reactStartCookies()],
});
