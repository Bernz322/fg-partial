module.exports = {
  preset: "test-jest",
  testEnvironment: "node",
  clearMocks: true,
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.js",
  ],
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/components/*.{js,jsx,ts,tsx}",
    "src/hooks/*.{js,jsx,ts,tsx}",
    "src/layouts/*.{js,jsx,ts,tsx}",
    "src/store/*.{js,jsx,ts,tsx}",
    "src/utilities/*.{js,jsx,ts,tsx}",
    "src/pages/*.{js,jsx,ts,tsx}",
    "src/views/*.{js,jsx,ts,tsx}",
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 50,
      functions: 80,
      lines: 80,
    },
  },
};
