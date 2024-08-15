const fetch = require('node-fetch');

const url = 'https://api.circle.com/v1/w3s/developer/wallets';
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'X-Request-Id': '2adba88e-9d63-44bc-b975-9b6ae3440dde',
    'content-type': 'application/json',
    authorization: 'Bearer <API_KEY>'
  },
  body: JSON.stringify({
    entitySecretCiphertext: '<ENTITY_SECRET_CIPHERTEXT>',
    idempotencyKey: '199191f4-4c74-430c-9350-8e57f28a14e9',
    name: 'dev-controlled-wallet-set',
    accountType: 'EOA',
    blockchains: ['MATIC-AMOY'],
    count: 1,
    metadata: [{name: 'devs-first-wallet', refId: 'dev_wallet_01'}],
    walletSetId: '16a9cf91-c228-5b6f-99e5-f3427d6b5c0e'
  })
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));