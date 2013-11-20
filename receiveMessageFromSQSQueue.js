var AWS = require('aws-sdk');
    AWS.config.loadFromPath('./config.json');

var sqs = new AWS.SQS();

var queueUrl = "https://sqs.eu-west-1.amazonaws.com/XXXXXXXXXXXX/dummy-queue";

var receiveMessageParams = {
  QueueUrl: queueUrl
};

sqs.receiveMessage(receiveMessageParams, receiveMessageCallback);

function receiveMessageCallback(err, data) {
  console.log("received message");
  console.log(data);

  if (data.Messages && data.Messages.length > 0) {

    console.log("do something with the message here...");

    // Delete the message when we've successfully processed it
    var deleteMessageParams = {
      QueueUrl: queueUrl,
      ReceiptHandle: data.Messages[0].ReceiptHandle
    };

    sqs.deleteMessage(deleteMessageParams, deleteMessageCallback);
  }
}

function deleteMessageCallback(err, data) {
  console.log("deleted message");
  console.log(data);
}