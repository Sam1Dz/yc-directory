// @ts-check

import mantine from 'eslint-config-mantine';
import tslint from 'typescript-eslint';

export default tslint.config(...mantine, ...tslint.configs.stylistic, {
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
});
