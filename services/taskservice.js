import Task from '../models/Task';
import * as dynamoDBLib from "../util/dynamodb-lib";
import uuid from 'uuid';

function TaskService(opts) {
    Object.assign(this, opts);
}

TaskService.prototype = {
    createNewTask,
    listTasks
};

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
        TableName: process.env.tableName,
        Item: taskItem
    };

    await dynamoDBLib.call(call, params);
    return taskItem;
}

async function listTasks() {
    const call = "scan";
    const params = {
        TableName: process.env.tableName
    };
    const result = await dynamoDBLib.call(call, params);
    return result.Items;
}

export default TaskService;