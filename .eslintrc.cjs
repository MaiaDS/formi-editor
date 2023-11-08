module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'unused-imports'],
  parserOptions: { project: './tsconfig.json' },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parserOptions: { project: ['./tsconfig.json'] },
        },
    ],
    rules: {
        'no-unused-vars': 'error',
        'unused-imports/no-unused-imports': 'error',
        'prettier/prettier': 'error',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'no-console': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
    },
}
