const XEncrypt = require('./index');
const { encrypt, decrypt, keygen } = XEncrypt;

let input = 'Hello, World!';
let key = keygen();
let encrypted = encrypt(key, input);
let decrypted = decrypt(key, encrypted);

console.log('Input:               ', input);
console.log('Key:                 ', key);
console.log('Key:                 ', Buffer.from(key.toString('hex'), 'hex'));
console.log('Encrypted Value:     ', encrypted);
console.log('Decrypted Value:     ', decrypted);
console.log('Test:                ', input === decrypted ? 'Passed' : 'Failed');
console.log('--------------------------------------------------');

input = 'Hello, World!';
key = keygen();
encrypted = encrypt(key, input);
decrypted = decrypt(key, encrypted);

console.log('Input:               ', input);
console.log('Key:                 ', key);
console.log('Encrypted Value:     ', encrypted);
console.log('Decrypted Value:     ', decrypted);
console.log('Test:                ', input === decrypted ? 'Passed' : 'Failed');
console.log('--------------------------------------------------');