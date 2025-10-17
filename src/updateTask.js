"use strict";

const AWS = require("aws-sdk");
const middy = require("@middy/core");
const httpJsonBodyParser = require("@middy/http-json-body-parser");

const updateTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;
  const body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;
  const { title, description, done } = body;

  const params = {
    TableName: process.env.TASKS_TABLE,
    Key: { id },
    UpdateExpression: "set title = :t, description = :d, done = :done",
    ExpressionAttributeValues: {
      ":t": title,
      ":d": description,
      ":done": done ?? false,
    },
    ReturnValues: "ALL_NEW",
  };

  try {
    const result = await dynamodb.update(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Task updated successfully!",
        task: result.Attributes,
      }),
    };
  } catch (error) {
    console.error("Error updating task:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error updating task", error }),
    };
  }
};

module.exports = {
  updateTask: middy(updateTask).use(httpJsonBodyParser()),
};
