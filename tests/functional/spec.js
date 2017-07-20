describe('Mustache editor', function () {

    var analyzeButton = element(by.css('button'));
    var inputArea = element(by.css('textarea'));
    var constants = require('./constants.js');

    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:12345');
    });

    it('should have a title', function() {
        expect(element(by.css('.title')).getText()).
        toEqual('Test Mustache Editor:');
    });

    it('should show hint message', function() {
        inputArea.sendKeys('{{!');
        // analyzeButton.click();
        var text = constants.T_COMMENT_NAME;

        expect(element(by.css('.hint')).getText()).
        toEqual(text);
    });

});