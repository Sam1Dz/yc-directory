import React from 'react';

import { type GithubUser } from '~/types/auth';
import { getLoginUrl, getUserData, logoutUser } from '~/server/auth';

export interface IAuthContext {
  session: GithubUser | null;
  status: 'loading' | 'authenticated' | 'unauthenticated';
  login: () => void;
  logout: () => void;
}

const AuthContext = React.createContext<IAuthContext | null>(null);
export function AuthProviderContext({ children }: React.PropsWithChildren) {
  const [session, setSession] = React.useState<IAuthContext['session'] | null>(
    null,
  );
  const [status, setStatus] = React.useState<IAuthContext['status']>('loading');

  const login = React.useCallback(async () => {
    const data = await getLoginUrl();

    if (data) window.location.href = data;
  }, []);

  const logout = React.useCallback(async () => {
    await logoutUser();
    setSession(null);

    window.location.href = '/';
  }, []);

  React.useEffect(() => {
    const getSessionData = async () => {
      const userData = await getUserData();

      if (userData.status === 'valid' && userData.data) {
        setSession(userData.data);
        setStatus('authenticated');
      } else {
        setSession(null);
        setStatus('unauthenticated');
      }
    };

    getSessionData();
  }, []);

  return (
    <AuthContext.Provider value={{ session, status, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProviderContext');
  }

  return context;
};
