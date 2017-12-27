module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    "no-console": 1
  },
  globals: {
    ReactDOM: true,
    React: true
  }
};
