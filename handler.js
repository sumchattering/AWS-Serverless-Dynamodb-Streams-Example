'use strict';

const config = require('./config/config');
const response = require('./util/response');
const Service = require('./services/service');

const service = new Service();

module.exports = {
    handler
}

async function handler(event, context, callback) {
    try {

        const result = await service.doSomething();
        callback(null, response.ok({ data: result }));
    
    } catch(err) {
    	
        callback(err, response.serverError(err));
    }
};