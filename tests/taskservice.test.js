import TaskService from '../services/taskservice'
import Task from '../models/task'

import AWS from "aws-sdk";
AWS.config.update({ region: 'eu-central-1' });

import dotenv from "dotenv"
dotenv.config({ path: ".env" });

test('test-createtask', async () => {
    let taskName = "Sample Task"
    const taskService = new TaskService();
    const result = await taskService.createNewTask(taskName)
    expect(result)
});

test('test-listtasks', async () => {
    const taskService = new TaskService();
    const result = await taskService.listTasks()
    expect(result)
});

test('test-updatetask', async () => {
    const taskService = new TaskService();
    const task = new Task({
        id: "id100",
        name: "Sample Task",
        slug: "Sample-Task"
    })
    const result = await taskService.updateTask(task)
    expect(result)
});
