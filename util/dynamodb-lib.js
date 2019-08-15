const AWS =require("aws-sdk");

module.exports = {
    call
};

function call(action, params) {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    return dynamoDB[action](params).promise();
}