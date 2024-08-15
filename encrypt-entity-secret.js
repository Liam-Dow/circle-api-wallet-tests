const forge = require('node-forge')

const entitySecret = forge.util.hexToBytes('<ENTITY_SECRET>')
const publicKey = forge.pki.publicKeyFromPem('<PUBLIC_KEY>')
const encryptedData = publicKey.encrypt(entitySecret, 'RSA-OAEP', {
  md: forge.md.sha256.create(),
  mgf1: {
    md: forge.md.sha256.create(),
  },
})

console.log(forge.util.encode64(encryptedData))
