const { defaults } = require("jest-config");

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy",
    "^lodash-es$": "lodash",
  },
};
