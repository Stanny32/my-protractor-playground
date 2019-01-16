'use strict';
const AbstractPage = require('./../abstract/AbstractPage');
const ptor = require('protractor');

module.exports = class Challenging_Dom extends AbstractPage {
    constructor() { super('challenging_dom'); }

    get $$allColumnNames() { return ptor.$$('table thead th'); }
    get $$allDicerets() { return ptor.$$('table tbody tr td:nth-child(6)'); }

    countDicerects() { return this.$$allDicerets.count(); }
    getAllTanbleHeadValues() { return this.$$allColumnNames.getText().then(item => item.filter(item => item)); }
    getAllDicerectsValues() { return this.$$allDicerets.map(iban => iban.getText()); }

};
