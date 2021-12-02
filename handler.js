"use strict";

const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

module.exports.hello = async () => {
  return {
    statusCode: 200,
    body: "Hello there!",
  };
};

module.exports.createTask = async (event) => {
  // the most elegant ID generator
  const id = new Date().getTime().toString();
  
  var params = {
    TableName: "tasksTable",
    Item: {
      id,
      data: JSON.parse(event.body),
    },
  };
  await documentClient.put(params).promise();
  return {
    statusCode: 201,
    headers: {
      Location: `/tasks/${id}`,
    },
  };
 };
  
 module.exports.getTaskById = async (event) => {
  const id = event.pathParameters.id;
  var params = {
    TableName: "tasksTable",
    Key: {
      id,
    },
  };
  
  const item = await documentClient.get(params).promise();
  return {
    statusCode: 200,
    body: JSON.stringify(item.Item.data),
  };
 };
 