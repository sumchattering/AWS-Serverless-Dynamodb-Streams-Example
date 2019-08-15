'use strict';

const Joi = require('joi');

function Model(opts) {
    const validationError = Joi.validate(opts, {
        key: Joi.string().required(),
        value: Joi.string().required()
    }).error;

    if(validationError !== null) {
        throw validationError;
    }

    Object.assign(this, opts);
}

module.exports = Model;