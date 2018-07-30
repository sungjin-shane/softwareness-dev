// const sodium = require('sodium').api

module.exports = {
  // generate,
  // verify,
  generate,
  verify
}

// function generate (password) {
//   const passwordBuffer = Buffer.from(password, 'utf8')
//   return sodium.crypto_pwhash_str(
//     passwordBuffer,
//     sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
//     sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
//   )
// }

// function verify (hash, password) {
//   const passwordBuffer = Buffer.from(password, 'utf8')
//   return sodium.crypto_pwhash_str_verify(hash, passwordBuffer)
// }

function generate (password) {
  const crypto = require('crypto')
  const key = crypto.pbkdf2Sync(password, 'salt', 100000, 64, 'sha512')
  console.log(key.toString('hex')) // '3745e48...08d59ae'
  return key.toString('hex')
  // return key
}

function verify (hash, password) {
  const crypto = require('crypto')
  crypto.DEFAULT_ENCODING = 'hex'
  const key = crypto.pbkdf2Sync(password, 'salt', 100000, 512, 'sha512')
  console.log(key.toString('hex')) // '3745e48...aa39b34'
  if (hash === key) {
    console.log('true----------------')
    return true
  } else {
    console.log('false----------------')
    return false
  }
}
