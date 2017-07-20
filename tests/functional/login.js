let constants = require("./constants.js");
let screenshot = require("./screenshot.js");
let request = require('request');
let xmlhttprequest = require('xmlhttprequest');
let http = require('http');
let async = require("async");
let urlapi = require('url');
let querystring = require('querystring');

describe('Login ', function () {

    var idOfPage = '';
    // var idOfPage = '#NAVIn497';

    /**
     *
     */
    function getRandomPage() {
        return new Promise((resolve, reject) => {
            let pageId = '';
            element.all(By.css('.NAVInodeLevel4')).then(function (items) {
                let randomKey = Math.floor(Math.random() * (items.length));
                items[randomKey].getAttribute('id').then(function (id) {
                    pageId = id;
                    return resolve(pageId);
                }).catch(error => {
                    console.log(error);
                });
            }).catch(error => {
                console.log(error);
            });
        });
    }

    /**
     *
     */
    const EC = protractor.ExpectedConditions;

    /**
     *
     * @param options
     * @returns {Promise.<Promise|Promise<T>>}
     */
    async function doGetRequest(options) {
        return new Promise((resolve, reject) => {
            let req = http.get(options);
            req.on('response', res => {
                resolve(res);
            });
            req.on('error', err => {
                reject(err);
            });
        });
    }

    /**
     *
     * @param options
     * @returns {Promise.<Promise|Promise<T>>}
     */
    async function doPostRequest(options) {
        return new Promise((resolve, reject) => {
            let req = http.request(options);
            req.on('response', res => {
                resolve(res);
            });
            req.on('error', err => {
                reject(err);
            });
        });
    }

    /**
     *
     */
    beforeAll(async function () {
        const browserName = '';
        browser.driver.getCapabilities().then(function (caps) {
            browser.sleep(1000);
            browser.browserName = caps.get('browserName');
        });
        browser.waitForAngularEnabled(false);
        // browser.get('http://localhost:12345');
        browser.get('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    });

    beforeEach(function () {
    });

    afterAll(function () {
        browser.driver.close();
    });

    afterEach(function () {
    });

    it('should render login page', function () {
        browser.sleep(1000);

        expect(element(By.linkText('Login')).isPresent()).toBeTruthy();
    });

    it('should sign in', function () {

        browser.switchTo().frame(element(by.css('#page_content>iframe')).getWebElement());

        let userNameField = element(By.css('input[name="user"]'));
        let userPassField = element(By.css('input[name="passwd"]'));
        let userLoginBtn = element(By.css('#administrator_iframe_loginarea_form_submit'));

        userNameField.sendKeys(constants.LOGIN);
        userPassField.sendKeys(constants.PASSWD);

        expect(userNameField.getAttribute('value')).toEqual(constants.LOGIN);
        expect(userPassField.getAttribute('value')).toEqual(constants.PASSWD);

        userLoginBtn.click().then(function () {
            browser.sleep(2000);

            browser.switchTo().defaultContent();

            expect(element(By.css('#co_administrator_menu_userinfo_logout')).getText()).toEqual('LOGOUT');

            browser.waitForAngular();
        }, 10000);
    });

    it('should go to Content Manager', function () {
        let cmLink = element(By.xpath("//*[text()[normalize-space() = 'Content Manager']]"));

        cmLink.click().then(function () {
            var elem = {};
            getRandomPage().then(id => {
                console.log(id);
                idOfPage = id;

                elem = element(By.css('#' + idOfPage));
                browser.wait(EC.presenceOf(elem));
                expect(elem.isPresent()).toBeTruthy();
                // return Promise.reject();
            }).catch(error => {
                console.log(error);
            });

            // browser.sleep(1000);
            // browser.wait(EC.presenceOf(element(By.css(idOfPage))));
            // expect(element(By.css(idOfPage)).isPresent()).toBeTruthy();
        }).catch(error => {
            console.log(error);
        });
    });

    it('should go to journal\'s page', function () {
        // let journalLink = element(By.css('#NAVIn497'));
        let journalLink = element(By.css('#' + idOfPage + ' .NAVInodeContent'));

        journalLink.click().then(function () {
            let elem = element(By.css("#co_pages"));
            browser.wait(EC.presenceOf(elem));
            expect(elem.isPresent()).toBeTruthy();
        });

    });

    it('should go to pages', function () {
        let pageslLink = element(By.css('#co_pages'));

        pageslLink.click().then(function () {
            let eleme = element(By.css('#outputOverwrite .co_table tbody tr:last-child td:nth-child(2)'));
            browser.wait(EC.textToBePresentInElement(eleme, 'Create new page'));
            expect(element(By.css(".co_table>tbody>tr:last-child>td:last-child>a")).isPresent()).toBeTruthy();
        });

    });

    it('should fill page form and save it', function () {
        let newPagelLink = element(By.css('.co_table>tbody>tr:last-child>td:last-child>a'));

        newPagelLink.click().then(function () {
            let internalNameField = element(By.css('input[name="page[new][identifier]"]'));
            let publicNameField = element(By.css('input[name="page[new][title]"]'));
            let descriptionField = element(By.css('input[name="page[new][description]"]'));
            let submitChangesBtn = element(By.css('#formsubmit>input[type="submit"]'));

            internalNameField.sendKeys(constants.internalName);
            publicNameField.sendKeys(constants.publicName);
            descriptionField.sendKeys(constants.description);

            let parentId = 0;
            let parentText = '';
            element.all(By.css('select[name="page[new][parent]"]>option')).then(function (options) {
                options[1].getAttribute('value').then(function (value) {
                    parentId = value;
                    options[1].getText().then(function (text) {
                        let parentTextArray = text.split(" - ");
                        parentText = parentTextArray[0].replace(/ \s/g,'');
                    });
                    element(By.css('select[name="page[new][parent]"]>option[value="' + parentId + '"]')).click().then(function () {
                        submitChangesBtn.click().then(function () {
                            let neededText = '(' + parentText + '\\' + constants.publicName + ')';
                            let eleme = element(By.xpath('//*[contains(text(),' + neededText + ')]'));
                            browser.wait(EC.textToBePresentInElement(eleme, neededText));

                            expect(element(By.xpath('//*[contains(text(),' + neededText + ')]')).isPresent()).toBeTruthy();
                        });
                    }).catch(error => {
                        console.log('No parent element found');
                    });
                });
            }).catch(error => {
                console.log('No parent options with element found');
            });


        });

    });

    it('should go to new page', function () {
        let newPagelLink = element(By.xpath("//*[text()[normalize-space() = '" + constants.expectedLinkText + "']]"));

        newPagelLink.click().then(function () {
            browser.wait(EC.presenceOf(element(By.xpath("//*[text()[normalize-space() = '(Create new window)']]"))));
            expect(element(By.xpath("//*[text()[normalize-space() = '(Create new window)']]")).isPresent()).toBeTruthy();
        });

    });

    it('should go to new window with expected title', async function () {
        let newWindowlLink = element(By.xpath("//*[text()[normalize-space() = '(Create new window)']]"));
        let title = '';
        newWindowlLink.getAttribute('href').then(async function (href) {
            let url = urlapi.parse(href);
            let id = url.search.split("=");

            const options = {
                hostname: url.hostname,
                path: constants.pathToAPI + id[1],
            };

            let result = await doGetRequest(options);
            let body = '';
            result.on('data', function (chunk) {
                body += chunk;
            });
            result.on('end', function () {
                body = JSON.parse(body);
                title = body['title'];
            });
        });

        newWindowlLink.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[1]).then(function () {
                    browser.sleep(2000);
                    expect(browser.getTitle()).toContain(constants.publicName);
                    expect(browser.getTitle()).toContain(title);
                    browser.switchTo().window(handles[0]);
                });
            });

        });

    });

    it('should sign out', function () {

        let logOutLink = browser.findElement(By.css('#co_administrator_menu_userinfo_logout'));

        logOutLink.click().then(function () {
            browser.sleep(2000);
            expect($('input[value="Login"]').isPresent()).toBeTruthy();
        }, 10000);
    });
})
;