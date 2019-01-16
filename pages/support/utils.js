'use strict';
const moment = require('moment');
const today = moment();
let format = 'DD/MM/YYYY';

module.exports = {

    getToday(date = today, dateFormat = format) {
        return date.format(dateFormat);

    }

};