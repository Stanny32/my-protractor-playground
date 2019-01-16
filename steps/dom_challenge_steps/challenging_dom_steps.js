'use strict';
const DomPage = require('./../../pages/pageobjects/ChallengingDomPage');
const domPage = new DomPage();

this.World = require('./../../pages/support/world');

const { Given, When, Then, And } = require('cucumber');

Given('I navigate to challenging_dom page', async () => {
    await domPage.openByUrl();
    await domPage.waitForUrl('challenging_dom');

});

Then('Table names should be', async (dataTable) => {
    let values = dataTable.hashes().map(column => column.columnNames);
    await domPage.getAllTanbleHeadValues().should.eventually.eql(values);

});

Then('all enteries in Diceret colum should be incremented', async () => {
    let i = 0;
    await domPage.getAllDicerectsValues()
        .then(dicerects => dicerects.forEach(dicerec => dicerec.should.equal(`Phaedrum${i++}`)));

});
