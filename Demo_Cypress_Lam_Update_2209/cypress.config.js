const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

//config data
module.exports = (on, config) => {

  // data will be stored here
  const data = {};
  // configuring tasks
  on('task', {
    setValue: (params) => {
      const { key, value } = params;
      data[key] = value;
      return value;
    },
    getValue: (params) => {
      const { key } = params;
      return data[key] || null;
    }
  })        
},
module.exports = defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 100000,
  pageLoadTimeout: 150000,
  viewportWidth: 1000,
  viewportHeight: 600,
  waitForAnimations: false,
  animationDistanceThreshold: 50,
  watchForFileChanges: false,
  chromeWebSecurity: false,
  retries: 1,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
          reportDir: "cypress/reports/mocha",
          quite: true,
          overwrite: true,
          html: true,
          json: true
      }
  },
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 500,
    viewportHeight: 500,
  },
  e2e: {
    defaultCommandTimeout: 100000,
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
   specPattern: "cypress/e2e/features/*/*.feature",
  // specPattern:
  // ["**/*.feature","cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    baseUrl: "https://unsplash.com/",
    chromeWebSecurity: true,
  },
 
});

