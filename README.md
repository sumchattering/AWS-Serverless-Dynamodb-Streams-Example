# Serverless Dynamodb Streams Example

 An example to demonstrate how to work with DynamoDB Streams with serverless

## Deployment 

To deploy the stack on your own aws account just run "sls deploy"

## Unit Testing 

To run unit tests run "sls export-env" and then "npm test"

## Testing 

The stack is currently deployed with the public endpoints GET **https://bxvd61lx0l.execute-api.eu-central-1.amazonaws.com/dev/listTasks** and POST **https://bxvd61lx0l.execute-api.eu-central-1.amazonaws.com/dev/createTask**

#### To create a new task run the following command

```shell
curl -d '{"name": "my test task with lots of spaces"}' -H "Content-Type: application/json" -X POST https://bxvd61lx0l.execute-api.eu-central-1.amazonaws.com/dev/createTask
```
Sample Result:
> {"result":{"id":"869c8c20-bfd0-11e9-bb02-e3b1cf2577fd","name":"my test task with lots of spaces","createdAt":1565923794403}}

#### To list all the tasks run the following command

```shell
curl https://bxvd61lx0l.execute-api.eu-central-1.amazonaws.com/dev/listTasks
```
Sample Result
> {"result":[{"slug":"Huuullooo_**world**!","createdAt":1565923392786,"id":"973a8100-bfcf-11e9-bb02-e3b1cf2577fd","name":"Huuullooo **world**!"},{"slug":"my_test_task_with_lots_of_spaces","createdAt":1565923794403,"id":"869c8c20-bfd0-11e9-bb02-e3b1cf2577fd","name":"my test task with lots of spaces"}]}

You should see that the slug has an underscore 🎉😎🎱