// @ts-check

import eslint from '@eslint/js';
import tslint from 'typescript-eslint';

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/.output/**',
      '**/.tanstack/**',
      '**/.nitro/**',
      '**/dist/**',
      '**/build/**',
    ],
  },
  ...tslint.config(
    eslint.configs.recommended,
    tslint.configs.recommended,
    tslint.configs.stylistic,
    {
      rules: {
        'no-console': ['warn', { allow: ['error', 'warn'] }],
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
  ),
];
