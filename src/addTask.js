"use strict";

const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const middy = require("@middy/core");
const httpJsonBodyParser = require("@middy/http-json-body-parser");

const addTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  // Si Middy no funciona, esto evitará errores
  const body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;

  const { title, description } = body;

  if (!title || !description) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Both 'title' and 'description' are required." }),
    };
  }

  const createdAt = new Date().toISOString();
  const id = uuidv4();

  const newTask = {
    id,
    title,
    description,
    createdAt,
    done: false,
  };

  await dynamodb
    .put({
      TableName: process.env.TASKS_TABLE || "TaskTable-dev", // <- Usa variable de entorno o nombre por defecto
      Item: newTask,
    })
    .promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Task created successfully!",
      task: newTask,
    }),
  };
};

module.exports = {
  addTask: middy(addTask).use(httpJsonBodyParser()),
};





