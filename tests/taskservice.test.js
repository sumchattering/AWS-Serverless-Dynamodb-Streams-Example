'use strict';

const AWS = require("aws-sdk");
AWS.config.update({ region: 'eu-central-1' });

const TaskService = require('../services/taskservice')

test('test-createtask', async () => {
    let taskName = "Sample Task"
    const taskService = new TaskService();
    const result = await taskService.createNewTask(taskName)
    expect(result)
});

