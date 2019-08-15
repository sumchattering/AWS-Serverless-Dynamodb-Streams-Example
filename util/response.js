'use strict';

module.exports = {
    ok,
    badRequest,
    serverError,
    redirect,
    unauthorized,
    forbidden
}

function ok(body) {
    return encode(200, body);
}

function badRequest(body) {
    return encode(400, body);
}

function serverError(body) {
    return encode(500, body);
}

function redirect(url) {
    return {
        headers: {
            Location: url
        },
        statusCode: 302,
        body: ''
    };
}

function unauthorized(body) {
    return encode(401, body || {});
}

function forbidden(body) {
    return encode(403, body || {});
}

function encode(statusCode, body) {
    return {
        statusCode: statusCode,
        body: JSON.stringify(body)
    };
}