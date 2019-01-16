'use strict';
const testUsers = require('./../../test-data/testUsers');
const HomePage = require('./../../pages/pageobjects/HomePage');
const home = new HomePage();
const LoginPage = require('./../../pages/pageobjects/LoginPage');
const loginPage = new LoginPage();
const Messages = require('./../../pages/common/Messages');
const genericMessage = new Messages();

this.World = require('./../../pages/support/world');

const { Given, When, Then, And } = require('cucumber');

Given('I navigate to login page', async () => {
    await loginPage.openByUrl();
    await loginPage.waitForLoginWidget();

});

Given('I enter username {string}', async (username) => {
    await loginPage.enterUsername(username);

});

Given('I enter password {string}', async (password) => {
    await loginPage.enterPassword(password);

});

Given('I choose to login', async () => {
    await loginPage.clickLoginButton();

});

Given('I login as user {string}', async (user) => {
    await loginPage.login(testUsers[user]);

});
