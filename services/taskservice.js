const Task = require('../models/Task');
const dynamoDBLib = require('../util/dynamodb-lib');
const uuid = require('uuid');

function TaskService(opts) {
    Object.assign(this, opts);
}

module.exports = TaskService;

TaskService.prototype = {
    createNewTask
};

const tasksTableName = "tasks";

async function createNewTask(taskName) {

    const taskId = uuid.v1();
    const task = new Task({
        'id': taskId,
        'name': taskName
    });

    const call = "put";
    const taskItem = {
        id: task.id,
        name: task.name,
        createdAt: Date.now()
    };
    const params = {
        TableName: tasksTableName,
        Item: taskItem
    };

    const result = await dynamoDBLib.call(call, params);
    console.log(result);
    return taskItem;
}
