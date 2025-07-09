// @ts-check

import mantine from 'eslint-config-mantine';
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
  ...tslint.config(...mantine, ...tslint.configs.stylistic),
];
