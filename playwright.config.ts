import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  //testDir: 'tests',
  
  testMatch: ["newwindow.ts"],
  timeout:    60  * 2000,
  fullyParallel: true,
  workers: process.env.TZ ? 10 : undefined,
  use: {
      headless: true,
      browserName: 'chromium',
      launchOptions: {
          args: ['--start-maximized'],
      }
  }
};

export default config;
// import { chromium, PlaywrightTestConfig } from '@playwright/test';
// import { Config } from '@playwright/test';
// import { defineConfig } from '@playwright/test';
// import { PlaywrightTestConfig} from '@playwright/test';
// // export default defineConfig({
//   const config : PlaywrightTestConfig={
//   testDir : ['tests'],
//   reportSlowTests: { max: 0, threshold: 600001 },
//   reporter: [ ['line'],
//               ['list'],
//               ['json', {  outputFile: 'test-results.json' }],
//               ['html', { open: 'never' }],
//             ],
//  // testMatch: ["day15th.ts"],
//   use: 
//     {
//     browserName : 'chromium' ,
//     headless : true ,
//     screenshot : "off",
//     video : "off",  
//     trace : "on",
//     viewport: { width: 1280, height: 720 },
//     ignoreHTTPSErrors: true,
//     },
//   }


// /*

// const config : PlaywrightTestConfig = {
//   reportSlowTests: { max: 0, threshold: 60001 },
// testMatch : ["tests/day14th.ts"],
// use : 
// {
//   browserName : 'chromium' ,
//   headless : true,
//   screenshot : "off",
//   video : "off",  
//   trace : "off"
// }
// }
// export default config; */   
