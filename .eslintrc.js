module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["react-app"],
  rules: {
    "no-unused-vars": "warn",
    "react/prop-types": "off",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
