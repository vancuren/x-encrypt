# X-Collect

A helper encryption package to quickly encrypt, decrypt, and generate keys on the fly.

## Installation

### Package Manager

#### NPN

Install x-encrypt using NPM 

```bash
npm install x-encrypt
```

Include x-encrypt in your application

```js
const XEncrypt = require('./index');
const { encrypt, decrypt, keygen } = XEncrypt;

let input = 'Hello, World!';
let key = keygen();
let encrypted = encrypt(key, input);
let decrypted = decrypt(key, encrypted);
```

## Usage

### encrypt()

```js
let encrypted = encrypt(key, input);
```

### decrypt()

```js
let decrypted = decrypt(key, encryptedText);
```

### keygen()

```js
let key = keygen();
```

