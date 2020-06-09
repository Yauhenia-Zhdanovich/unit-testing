const isPrime = require('./is-prime');

test('test isPrime function', () => {
  // common matchers
  expect(isPrime(14)).toBe(false);

  expect({a: 'a'}).toBe({a: 'a'});

  expect({a: 'a'}).toEqual({a: 'a'});

  // truthiness
  let undefinedVariable;

  expect(null).toBeNull();

  expect(undefinedVariable).toBeUndefined();

  undefinedVariable = null;

  expect(undefinedVariable).toBeDefined();

  expect(undefinedVariable).toBeTruthy();

  expect(undefinedVariable).toBeFalsy();

  const iceCreamFlavors = ['vanilla', 'chocolate', 'strawberry', 'banana'];

  expect(iceCreamFlavors).toContain('banana');

  expect(iceCreamFlavors).toContain('oreo');

  const value = 2 + 2;

  expect(value).toBeGreaterThan(3);

  expect(value).toBeGreaterThanOrEqual(3.5);

  expect(value).toBeLessThan(5);

  expect(value).toBeLessThanOrEqual(4.5);

  expect(value).toBe(4);

  expect(value).toEqual(4);

  const value = 0.1 + 0.2;

  expect(value).toBe(0.3);

  expect(value).toBeCloseTo(0.3);

});
