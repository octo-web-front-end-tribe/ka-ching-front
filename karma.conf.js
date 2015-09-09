module.exports = function (config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: ".",

    // list of files / patterns to load in the browser
    files: [
      "node_modules/jasmine-sinon/lib/jasmine-sinon.js",
      "app/bower_components/angular/angular.js",
      "app/bower_components/angular-mocks/angular-mocks.js",
      "app/bower_components/jquery/dist/jquery.js",
      "app/bower_components/ui-router/release/angular-ui-router.js",
      "app/app.module.js",
      "app/app.*.js",
      {pattern: "app/modules/**/*.module.js", watched: true, included: true, served: true},
      {pattern: "app/modules/**/*.ctrl.js", watched: true, included: true, served: true},
      {pattern: "app/modules/**/*.service.js", watched: true, included: true, served: true},
      {pattern: "app/modules/**/*.directive.js", watched: true, included: true, served: true},
      "app/templates.js",
      {pattern: "test/**/*.js", watched: true, included: true, served: true}
    ],

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: "dots", "progress", "junit", "growl", "coverage"
    reporters: ["progress"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,

    // frameworks to use
    frameworks: ["jasmine", "sinon", "chai"],

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine",
      "karma-sinon",
      "karma-chai"],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};