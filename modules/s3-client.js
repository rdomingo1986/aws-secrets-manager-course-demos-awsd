const { S3 } = require('@aws-sdk/client-s3');

module.exports.S3Client = function (secret) {
  return new S3({
    credentials: {
      accessKeyId: secret.AccessKeyId,
      secretAccessKey: secret.SecretAccessKey
    },
    region: 'us-east-1'
  });
};