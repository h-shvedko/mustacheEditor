exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',

    specs: [
        'login.js'
    ],

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // cucumberOpts: {
    //     require: ['features/step_definitions/*_steps.js', 'features/support/*.js'],
    //     format: 'pretty'
    //     //,tags: '@dev'
    // },

    capabilities: {
        // 'appium-version': '1.5.3',
        platformName: 'iOS',
        platformVersion: '9.3',
        deviceName: 'iPhone 6s Plus',
        browserName: "",
        autoWebview: true,
        fullReset: true,
        // app: appLocation
    },
    //baseUrl: 'http://10.0.2.2:8000',
    baseUrl: '',

    // configuring wd in onPrepare
    // wdBridge helps to bridge wd driver with other selenium clients
    // See https://github.com/sebv/wd-bridge/blob/master/README.md
    onPrepare: function () {
        var wd = require('wd'),
            protractor = require('protractor'),
            wdBridge = require('wd-bridge')(protractor, wd);

        wdBridge.initFromProtractor(exports.config);

        //To navigate using file:// rather than http://
        var defer = protractor.promise.defer();

        browser.ignoreSynchronization = true;

        browser.executeScript('return window.location;').then( function(location){
            browser.resetUrl = 'file://';
            browser.baseUrl = location.origin + location.pathname;
            defer.fulfill();
        });

        return defer.promise;
    }
};