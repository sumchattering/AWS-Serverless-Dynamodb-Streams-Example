import Task from '../models/Task';
import * as dynamoDBLib from "../util/dynamodb-lib";
import uuid from 'uuid';

const tasksTableName = "tasks";

function TaskService(opts) {
    Object.assign(this, opts);
}

TaskService.prototype = {
    createNewTask
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
        TableName: tasksTableName,
        Item: taskItem
    };

    await dynamoDBLib.call(call, params);
    return taskItem;
}

export default TaskService;