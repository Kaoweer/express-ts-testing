/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  projects: [
    {
      displayName: "unit",
      testMatch: ["<rootDir>/src/**/*.test.ts"],
      testPathIgnorePatterns: ["<rootDir>/src/.*/.*\\.integration\\.test\\.ts"],
      testEnvironment: "node",
      transform: {
        "^.+\\.ts$": ["ts-jest", { tsconfig: "tsconfig.json" }],
      },
    },
    {
      displayName: "integration",
      testMatch: ["<rootDir>/src/**/*.integration.test.ts"],
      setupFilesAfterEnv: ["<rootDir>/src/yahtzee/tests/integrationSetup.ts"],
      testTimeout: 30000,
      testEnvironment: "node",
      transform: {
        "^.+\\.ts$": ["ts-jest", { tsconfig: "tsconfig.json" }],
      },
    },
  ],
  // Use forward slashes even on Windows
  transformIgnorePatterns: ["/node_modules/(?!your-module-to-transform)/"],
  // Add this to normalize paths across platforms
  modulePathIgnorePatterns: [],
  // Use posix paths for test matching
  testPathIgnorePatterns: [],
  // Ensure Windows paths are handled correctly
  watchPathIgnorePatterns: [],
};
