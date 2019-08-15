import { success, failure } from "./util/response-lib";
import TaskService from './services/taskservice';

const taskService = new TaskService();

export async function createTask(event, context) {
    try {
        const data = JSON.parse(event.body);
        const taskName = data.name;
        const result = await taskService.createNewTask(taskName);
        return success({ 'data': result });
    } catch(err) {
        return failure({ 'errorData': err });
    }
};