import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {FlatCompat} from '@eslint/eslintrc';
import noInlineStyles from 'eslint-plugin-no-inline-styles';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    plugins: {noInlineStyles},
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      'noInlineStyles/no-inline-styles': 1,
      // note you must disable the base rule as it can report incorrect errors
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'none',
        },
      ],
    },
  },
];

export default eslintConfig;
