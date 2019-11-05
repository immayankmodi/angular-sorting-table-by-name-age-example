module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('@angular/cli/plugins/karma'),
      require('karma-mocha-reporter'),
      require('karma-junit-reporter')
    ],
    client: {
      clearContext: false
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['mocha', 'junit'],
    port: 9876,
    colors: true,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity,
    junitReporter: {
      useBrowserName: false,
      outputFile: 'unit.xml',
      suite: 'unit'
    }
  });
};
