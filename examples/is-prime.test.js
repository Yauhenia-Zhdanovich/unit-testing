const isPrime = require('./is-prime.js');
const assert = require('./assert');

assert.equal(isPrime(3), true, '3 is a prime number');
assert.equal(isPrime(11), true, '11 is a prime number');
assert.equal(isPrime(12), false, '12 is not a prime number');
assert.equal(isPrime(190), false, '190 is not a prime number');
assert.equal(isPrime(29), true, '29 is a prime number');
assert.equal(isPrime(33), false, '33 is not a prime number');
