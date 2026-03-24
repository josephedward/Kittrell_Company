const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  webServer: {
    command: 'node index.js',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:3000',
  },
});
