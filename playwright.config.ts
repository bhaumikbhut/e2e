import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: [['html',{outputFolder:'test-report'}]],
   
//   // Glob patterns or regular expressions to ignore test files. 
//    testIgnore: '*test-assets',

//     // Glob patterns or regular expressions that match test files. 
//     testMatch: '*todo-tests/*.spec.ts',

     // Folder for test artifacts such as screenshots, videos, traces, etc.
  outputDir: 'test-results',

//   // path to the global setup files.
//   globalSetup: require.resolve('./global-setup'),

//   // path to the global teardown files.
//   globalTeardown: require.resolve('./global-teardown'),

  // Each test is given 30 seconds.
  timeout: 500000,

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    // baseURL: 'https://www.coachoutlet.com/',

    // Collect trace when retrying the failed test.
    trace: 'on',
    video: 'on',
    screenshot : 'on',
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      
    },
    // {
    //     name: 'firefox',
    //     use: { ...devices['Desktop Firefox'] },
    //   },
    // {
    //     name: 'webkit',
    //     use: { ...devices['Desktop Safari'] },
    // },
    //  /* Test against mobile viewports. */
    //  {
    //     name: 'Mobile Chrome',
    //     use: { ...devices['Pixel 5'] },
    //   },
    //   {
    //     name: 'Mobile Safari',
    //     use: { ...devices['iPhone 12'] },
    //   },
  
    //   /* Test against branded browsers. */
    //   {
    //     name: 'Microsoft Edge',
    //     use: { 
    //       ...devices['Desktop Edge'], 
    //       channel: 'msedge' 
    //     },
    //   },
    //   {
    //     name: 'Google Chrome',
    //     use: { 
    //       ...devices['Desktop Chrome'], 
    //       channel: 'chrome' 
    //     },
    //   },


  ],

  // Run your local dev server before starting the tests.
//   webServer: {
//     command: 'npm run start',
//     url: 'http://127.0.0.1:3000',
//     reuseExistingServer: !process.env.CI,
//   },
});