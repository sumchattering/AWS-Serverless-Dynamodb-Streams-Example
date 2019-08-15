'use strict';

const requiredEnvVars = [
    'SOME_ENV_VAR'
];

if(
    requiredEnvVars
    .map(envVarName => process.env[envVarName])
    .filter(envVar => envVar !== undefined).length < requiredEnvVars.length
) {
    throw new Error('Missing required env var');
}

module.exports = {
    someEnvVar: process.env.SOME_ENV_VAR
}