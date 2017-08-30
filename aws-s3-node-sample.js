var aws = require('aws-sdk');
var s3 = new aws.S3({region: 'eu-central-1'});

var bucketName = 'node-sample-qs154awsderq1785';
var keyName = 'hello.txt';

s3.createBucket({Bucket: bucketName}, () => {
  var params = {Bucket: bucketName, Key: keyName, Body: 'Hi guys! Nice to meet you.\nSee you soon.'};
  s3.putObject(params, (err, data) => {
    if (err)
      console.log(err)
    else
      console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
      getObject();
  });
});

const getObject = () => {
  var params = {
    Bucket: bucketName,
    Key: keyName
  };
  s3.getObject(params, (err, data) => {
    console.log("Dwonloaded data:");
    console.log(data.Body.toString());
  });
};
