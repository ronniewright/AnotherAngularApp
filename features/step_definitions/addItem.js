module.exports = function(){

    this.Given(/^I am viewing my to do list$/, function () {
        browser.url('http://localhost:8000/app/index.html')
    });

    this.When(/^I populate the (.*) field with "([^"]*)"$/, function (field, arg1) {
        browser.setValue('input[name="' + field + '"]', arg1);
    });

    this.When(/^I click the (.*) button$/, function (field) {
        browser.click('input[name="' + field + '"]');
    });

    this.Then(/^"([^"]*)" is added to the list$/, function (newItemVal) {
        browser.waitForExist('div=' + newItemVal);
    });
};