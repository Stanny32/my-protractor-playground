'use strict';

const { After, BeforeAll, Status } = require('cucumber');

After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, 'image/png')
    }
});

BeforeAll(async function () {
    if (await browser.params.environment === 'test') {
        await browser.get(browser.params.baseUrl);
    }
    // if (await browser.params.environment === 'someOtherEnv') {
    //     await browser.get(browser.params.someOtherEnvBaseUrl);
    // }
});
