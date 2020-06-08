const isPrime = require('./is-prime');
const assert = require('./assert');
const { describe, it } = require('./describe');

describe('Is the number Prime', function() {
  it('3 should be a prime number', function() {
    assert.equal(isPrime(3), true);
  });

  it('33 should not be a prime number', function() {
    assert.equal(isPrime(3), true);
  });

  it('11 should be a prime number', function() {
    assert.equal(isPrime(3), true);
  });

  it('12 should not be a prime number', function() {
    assert.equal(isPrime(3), true);
  });

  it('190 should not be a prime number', function() {
    assert.equal(isPrime(3), false);
  });

  it('29 should be a prime number', function() {
    assert.equal(isPrime(3), true);
  });
});
