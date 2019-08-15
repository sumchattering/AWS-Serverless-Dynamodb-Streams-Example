import AWS from "aws-sdk";

export function call(action, params) {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    return dynamoDB[action](params).promise();
}