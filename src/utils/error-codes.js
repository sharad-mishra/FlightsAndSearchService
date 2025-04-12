const ClientErrors = Object.freeze({
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
});

const ServerErrors = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    //SERVICE_UNAVAILABLE: 503,
    NOT_IMPLEMENTED: 501,
});

const SuccessCodes = Object.freeze({
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
});

module.exports = {
    ClientErrors,
    ServerErrors,
    SuccessCodes,
};