import { createServerFileRoute } from '@tanstack/react-start/server';

import { index } from '~/libs/auth';

export const ServerRoute = createServerFileRoute('/api/auth/$').methods({
  GET: ({ request }) => {
    return index.handler(request);
  },
  POST: ({ request }) => {
    return index.handler(request);
  },
});
