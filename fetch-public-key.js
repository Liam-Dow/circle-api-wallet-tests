// Import and configure the developer-controlled wallet SDK
const { initiateDeveloperControlledWalletsClient } = require('@circle-fin/developer-controlled-wallets');
const circleDeveloperSdk = initiateDeveloperControlledWalletsClient({
  apiKey: '<API_KEY>',
  entitySecret: '<ENTITY_SECRET>' // Make sure to enter the entity secret from the step above.
});

const response = await circleDeveloperSdk.getPublicKey({});
