'use strict';

const Model = require('../models/model');

function Service(opts) {
    Object.assign(this, opts);
}

module.exports = Service;

Service.prototype = {
    doSomething
};

function doSomething() {
    return Promise.resolve(
        new Task({ key: 'hello', value: 'world' })
    );
}