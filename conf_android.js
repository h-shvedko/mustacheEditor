exports.config = {
    framework: 'jasmine',
    specs: ['login.js'],

    capabilities: {
        browserName: 'chrome',
        platformName: 'Android',
        platformVersion: '7.0',
        deviceName: 'Protractor',
    },

    baseUrl: 'http://10.0.2.2:8000',


    seleniumAddress: 'http://localhost:4723/wd/hub',


    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 360000
    },

    allScriptsTimeout: 1000,
    getPageTimeout: 1000
};