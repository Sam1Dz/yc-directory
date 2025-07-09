import { z } from 'zod';
import { createEnv } from '@t3-oss/env-core';

export const env = createEnv({
  server: {
    AUTH_GITHUB_ID: z.string().min(1),
    AUTH_GITHUB_SECRET: z.string().min(1),
    BETTER_AUTH_SECRET: z.string().min(1),
    BETTER_AUTH_URL: z.string().url(),
  },
  runtimeEnv: process.env,
});
