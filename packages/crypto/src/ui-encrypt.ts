import crypto from 'crypto';

// Refs: https://github.com/brix/crypto-js/issues/468#issuecomment-2060562277
export const UiAESEncrypt= (phrase: string, secret: string) => {
  const salt = crypto.randomBytes(8)
  const password = Buffer.concat([Buffer.from(secret), salt])
  const hash = []
  let digest = password
  for (let i = 0; i < 3; i++) {
    hash[i] = crypto.createHash('md5').update(digest).digest()
    digest = Buffer.concat([hash[i], password])
  }
  const keyDerivation = Buffer.concat(hash)
  const key = keyDerivation.subarray(0, 32)
  const iv = keyDerivation.subarray(32)
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)
  return Buffer.concat([
    Buffer.from('Salted__', 'utf8'),
    salt,
    cipher.update(phrase),
    cipher.final(),
  ]).toString('base64')
}