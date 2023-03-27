import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
//   testDir: './tests',
  testMatch : 'newtest.ts',

  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
  },
};

export default config;
