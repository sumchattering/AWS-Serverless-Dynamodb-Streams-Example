import { success, failure } from "./util/response-lib";
import TaskService from './services/taskservice';

const taskService = new TaskService();

export async function createTask(event, context) {
    try {
        const data = JSON.parse(event.body);
        const taskName = data.name;
        const result = await taskService.createNewTask(taskName);
        return success({ 'result': result });
    } catch(err) {
        console.error(err);
        return failure(err);
    }
};

export async function listTasks(event, context) {
    try {
        const result = await taskService.listTasks();
        return success({ 'result': result });
    } catch (err) {
        console.error(err);
        return failure(err);
    }
};

export async function processTasksStream(event, context) {
    console.log(event);
    console.log(context);
}