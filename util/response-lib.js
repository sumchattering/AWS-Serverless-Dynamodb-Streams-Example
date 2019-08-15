export function success(body) {
    return buildResponse(200, body);
}

export function failure(body) {
    return buildResponse(500, body);
}

export function buildResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        body: JSON.stringify(body)
    };
};