const fetch = require('node-fetch');

const url = 'https://api.circle.com/v1/w3s/developer/walletSets';
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'X-Request-Id': '2adba88e-9d63-44bc-b975-9b6ae3440dde',
    'content-type': 'application/json',
    authorization: 'Bearer <API_KEY>'
  },
  body: JSON.stringify({
    entitySecretCiphertext: '<ENTITY_SECRET_CIPHER_TEXT>',
    idempotencyKey: 'a95e00a2-7df6-4881-a6d6-0ba47fb08349',
    name: 'dev-controlled-wallet-set'
  })
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));