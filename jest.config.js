module.exports = {
  "collectCoverageFrom": [
    "src/Component/**/*.{tsx,jsx}",
    "src/DataProvider/**/*.{tsx,jsx}",
    "src/Util/**/*.{tsx,jsx}",
    "src/app/**/*.{tsx,jsx}"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/jest/setup.js",
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.(j|t)s?(x)",
    "<rootDir>/src/**/?(*.)(spec|test).(j|t)s?(x)"
  ],
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  "moduleNameMapper": {
    '^.+\\.css$': '<rootDir>/jest/cssTransform.js'
  },
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/(?!(ol|antd))"  
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json"
  ],
  "globals": {
    "ts-jest": {
      "tsConfig": "<rootDir>/tsconfig.prod.json"
    }
  }
};
