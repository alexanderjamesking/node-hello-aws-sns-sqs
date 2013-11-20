var AWS = require('aws-sdk');
    AWS.config.loadFromPath('./config.json');

var sns = new AWS.SNS();

var publishParams = { 
  TopicArn : "arn:aws:sns:eu-west-1:XXXXXXXXXXXX:dummy-topic-arn",
  Message: "Hello World" 
};

sns.publish(publishParams, publishCallback);

function publishCallback(err, data) {
  console.log("published message");
  console.log(data);
}