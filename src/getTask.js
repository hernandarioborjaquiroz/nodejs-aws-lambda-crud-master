"use strict";

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.getTask = async (event) => {
  try {
    const { id } = event.pathParameters;

    const result = await dynamodb
      .get({
        TableName: process.env.TASKS_TABLE,
        Key: { id },
      })
      .promise();

    if (!result.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Task not found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ task: result.Item }),
    };
  } catch (error) {
    console.error("Error getting task:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error getting task", error }),
    };
  }
};
