require('babel-core/register');
exports.config = {
    framework: 'jasmine',
    specs: ['login.js'],
    multiCapabilities: [
        {
            name: 'Chrome',
            logName: 'Chrome',
            browserName: 'chrome'
        },
        // {
        //     name: 'Firefox',
        //     logName: 'Firefox',
        //     browserName: 'firefox'
        // },
        // {
        //     name: 'ChromeIphone',
        //     logName: 'Chrome Iphone',
        //     browserName: 'chrome',
        //     chromeOptions: {
        //         'args': ['user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4']
        //     },
        //     mobileEmulationEnabled: true
        // },
        // {
        //     name: 'ChromeAndroid',
        //     logName: 'Chrome Android',
        //     platformName: 'android',
        //     browserName: 'chrome',
        //     newCommandTimeout: 60,
        //     chromeOptions: {
        //         'args': ['user-agent=Mozilla/5.0 (Linux; Android 4.4.4; Samsung Galaxy S4 - 4.4.4 - API 19 - 1080x1920 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36']
        //     }
        // },
        // {
        //     name: 'Opera',
        //     logName: 'Opera',
        //     browserName: 'chrome',
        //     newCommandTimeout: 60,
        //     chromeOptions: {
        //         'args': ['user-agent=Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36 OPR/46.0.0.259726201']
        //     }
        // },
        // {
        //     browserName: 'internet explorer',
        //     'ignoreProtectedModeSettings': true,
        //     'ignoreZoomSetting': true
        // }
    ],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 360000
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 1000,
    getPageTimeout: 1000
};