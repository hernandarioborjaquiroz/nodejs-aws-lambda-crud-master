"use strict";

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.getTasks = async () => {
  try {
    const result = await dynamodb
      .scan({
        TableName: process.env.TASKS_TABLE,
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        tasks: result.Items || [],
      }),
    };
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error fetching tasks", error }),
    };
  }
};
