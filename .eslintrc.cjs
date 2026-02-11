/* eslint-env node */

module.exports = {
    ignorePatterns: ['dist'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    env: {
        browser: true,
        es2020: true,
    },
    plugins: ['@typescript-eslint', 'react-hooks'],
    rules: {},
}
