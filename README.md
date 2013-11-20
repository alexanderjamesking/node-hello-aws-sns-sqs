# aws-sdk-js SQS SNS example

Very basic Node.js example to publish to SNS topic and consume via SQS queue.

### AWS Admin Console

1. Set up SNS Topic
2. Set up SQS Queue
3. Subscribe the Queue to the SNS Topic
4. Set up IAM User and give the user access to SNS and SQS
5. Create and download the IAM User credentials

### Running locally

1. Update credentials in config.json
2. Update TopicArn in publishToSNSTopic.js
3. Update QueueUrl in receiveMessageFromSQSQueue.js

4. Install dependencies
```
npm install
```

5. Publish a message to the topic
```
node publishToSNSTopic.js
```

6. Check it appears in the list of messsages in SQS queue (AWS Admin Console)

7. Receive the message then delete
```
node receiveMessageFromSQSQueue.js
```
