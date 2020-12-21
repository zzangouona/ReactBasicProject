module.exports = {
  "env": {
    browser: true,
    es6: true,
    node: true,
  },
  "extends" : ["react-app", "airbnb",  "prettier"],
  "rules": {
    "no-console": "off",
    "no-unused-vars": "off",
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx",".svg"] }]
  }
};
