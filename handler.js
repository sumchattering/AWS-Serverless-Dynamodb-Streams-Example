import { success, failure } from "./util/response-lib";
import TaskService from './services/taskservice';
import Task from './models/task';

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
    try {
        const eventDict = event["Records"][0];
        if (eventDict["eventName"] == "INSERT") {
            const eventDynamoDBDict = eventDict["dynamodb"];

            const newEventDict = eventDynamoDBDict["NewImage"];
            const taskId = newEventDict["id"]["S"];
            const taskName = newEventDict["name"]["S"];
            const taskSlug = taskName.replace(/ /g, "_");

            const task = new Task({
                id: taskId,
                name: taskName,
                slug: taskSlug
            });

            const result = await taskService.updateTask(task);
            console.log("Record Updated " + JSON.stringify(result, null, 2));
        }
    } catch (err) {
        console.error("Error while processing tasks stream: " + err);
    }
};