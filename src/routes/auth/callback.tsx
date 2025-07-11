import { createFileRoute, redirect } from '@tanstack/react-router';

import { getCredentials } from '~/server/auth';

export const Route = createFileRoute('/auth/callback')({
  component: () => null,
  loader: async () => {
    await getCredentials();

    throw redirect({
      to: '/',
    });
  },
});
