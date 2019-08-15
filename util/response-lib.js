module.exports = {
    ok,
    badRequest,
    serverError,
    redirect,
    unauthorized,
    forbidden
};

function ok(body) {
    return buildResponse(200, body);
}

function badRequest(body) {
    return buildResponse(400, body);
}

function serverError(body) {
    return buildResponse(500, body);
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
    return buildResponse(401, body || {});
}

function forbidden(body) {
    return buildResponse(403, body || {});
}

function buildResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(body)
    };
}