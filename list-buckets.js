const { getSecretValue } = require('./modules/get-secret-value-module.js');

const { S3Client } = require('./modules/s3-client.js');

const util = require('util');

const run = async function () {
  try {
    const secret = JSON.parse(await getSecretValue());

    const s3 = S3Client(secret);

    var response = await s3.listBuckets({});
    
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();