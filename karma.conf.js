module.exports = function (config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      // Load the ES6 browser shim.
      'node_modules/core-js/client/shim.js',
      // Load the zone.js framework required by Angular.
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      // Load the test-init module first.
      'test-init.spec.ts',
      // Then include all other source files.
      'src/**/*.+(ts|html)'
    ],
    exclude: [
      // Exclude main module because it would interfere with the test-init module.
      'src/main.ts'
    ],
    proxies: {
      // Map requests to sources to the base path where Karma serves them.
      '/src/': '/base/src/'
    },
    preprocessors: {
      // Pass all TypeScript sources to the preprocessor.
      '**/*.ts': ['karma-typescript']
    },
    reporters: ['progress', 'karma-typescript','junit','html'],
    junitReporter: {
       outputDir: 'karma-results',
       outputFile: 'karma-results.xml'
      },
    
    htmlReporter: {
      outputFile: 'tests/units.html',
            
      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'A sample project description',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true,
      showOnlyFailed: false,
      colors: true
    },
    
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true
  })
}
