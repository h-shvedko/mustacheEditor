var fs = require('fs');
var number = 0;

function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

module.exports.shot = function shot(browserName) {
    browser.takeScreenshot().then(function (png) {
        var timestamp = new Date();
        writeScreenShot(png, 'screenshots/' + browserName + '_screenshot_' + number + '_' + timestamp.getTime() + '.png');
        number++;
    });

}
