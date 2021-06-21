const { secretsManager } = require('./modules/secrets-manager-client.js');

const util = require('util');

const run = async function () {
  try {
    var response = await secretsManager.getSecretValue({
      SecretId: 'awsd-demo-secrets-manager'
    });
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();