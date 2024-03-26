const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const iv = crypto.randomBytes(16);

function encrypt(key, text) {

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(key, text) {
    const textParts = text.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

function keygen() {
    // Generate a random key of 32 bytes (256 bits)
    return crypto.randomBytes(32);
}

module.exports = { encrypt, decrypt, keygen };