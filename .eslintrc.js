module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // This setting is required if you want to use rules which require type information
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'react'],
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:prettier/recommended',
    'airbnb-base',
    'airbnb-typescript'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "class-methods-use-this": ["error", { "exceptMethods": ["getHello"] }]
  },
};
