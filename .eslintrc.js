module.exports = {
  extends: ['mantine'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/semi": "off",
    "arrow-body-style": "off",
  },
};
