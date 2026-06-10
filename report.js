const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports",
  reportPath: "reports/html",
  displayDuration: true,
  openReportInBrowser: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "latest"
    },
    device: "Local test machine",
    platform: {
      name: process.platform
    }
  }
});