"use strict";

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.deleteTask = async (event) => {
  try {
    const { id } = event.pathParameters;

    await dynamodb
      .delete({
        TableName: process.env.TASKS_TABLE,
        Key: { id },
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Task deleted successfully!",
        deletedId: id,
      }),
    };
  } catch (error) {
    console.error("Error deleting task:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error deleting task", error }),
    };
  }
};
