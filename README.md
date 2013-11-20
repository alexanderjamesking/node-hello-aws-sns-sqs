# node-hello-aws-sns-sqs

Node.js example to publish to SNS topic and consume via SQS queue

## Prerequisites

### AWS

Set up SNS Topic
Set up SQS Queue
Subscribe the Queue to the SNS Topic
Set up IAM User and give the user access to SNS and SQS

### Running locally

Update details in config.json
Update TopicArn in publishToSNSTopic.js
Update QueueUrl in receiveMessageFromSQSQueue.js

Install dependencies
```
npm install
```

Publish a message to the topic
```
node publishToSNSTopic.js
```

Check it appears in the list of messsages in SQS queue

Receive the message then delete
```
node receiveMessageFromSQSQueue.js
```
