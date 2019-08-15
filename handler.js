const response = require('./util/response-lib');
const TaskService = require('./services/taskservice');
const taskService = new TaskService();

module.exports = {
    createTask
};

async function createTask(event, context, callback) {
    try {
        const data = JSON.parse(event.body);
        const taskName = data.name;
        const result = await taskService.createNewTask(taskName);
        callback(null, response.ok({ data: result }));
    } catch(err) {
        callback(err, response.serverError(err));
    }
};