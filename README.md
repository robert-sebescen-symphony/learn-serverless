# Simple Serverless app

## Setup 
- [Install Serverless framework cli](https://www.serverless.com/framework/docs/providers/aws/guide/installation)
- [Configure AWS credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/)
- [Install Node.js 6.x or later](https://nodejs.org/en/download/)

## Deploy

Run _**sls deploy**_

## Testing

Import **Blog - Serverless.postman_collection** in Postman.
Update **baseUrl** variable under imported collection.
Try Creating new task and fetching created task (created task ID can be found within a Location header)