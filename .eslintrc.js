module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": "off",
    quotes: ["error", "double"],
    "comma-dangle": "off",
    semi: "off",
    "no-use-before-define": ["error", { variables: false }],
    "no-unused-vars": "off",
  },
};
