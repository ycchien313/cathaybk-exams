module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // 設定測試環境
  testEnvironment: "jsdom", // 適用於 React
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy" // 避免測試時解析 CSS 出錯
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest" // 讓 Jest 支援 ES6+ 語法
  },
  transformIgnorePatterns: ["/node_modules/(?!(some-esm-library)/)"]
};