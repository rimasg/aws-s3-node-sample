var AWS = require('aws-sdk');
var s3 = new AWS.S3();

var bucketName = 'node-sdk-sample-qs154awsderq1785';
var keyName = 'hello.txt';

s3.createBucket({Bucket: bucketName}, function() {
  var params = {Bucket: bucketName, Key: keyName, Body: 'Hi guys! Nice to meet you.\nSee you soon.'};
  s3.putObject(params, function(err, data) {
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
    console.log(data.Body.toString());
  });
};
