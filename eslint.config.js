import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'no-unused-vars': 'warn', // Disallow unused variables
      'no-redeclare': 'warn', // Disallow variable redeclaration
      eqeqeq: ['warn', 'always'], // Enforce strict equality (=== and !==)
      'consistent-return': 'warn', // Enforce consistent return statements
      curly: ['warn', 'all'], // Require curly braces for all control statements
      'no-duplicate-imports': 'warn', // Disallow duplicate imports
      'prefer-const': 'warn', // Require `const` for variables that are not reassigned
      'prefer-template': 'warn', // Require template literals over string concatenation

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
