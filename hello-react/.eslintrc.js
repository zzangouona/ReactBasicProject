module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["react-app", "airbnb", "prettier"],
  rules: {
    "react/prefer-stateless-function": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-console": "off",
    "no-unused-vars": "off",
    "arrow-body-style": "off",
    "react/jsx-filename-extension": [
      "warn",
      { extensions: [".js", ".jsx", ".svg"] },
    ],
  },
};
