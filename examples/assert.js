module.exports = {
  equal(actual, expected) {
    if (actual !== expected) {
      throw new Error('test failed!!!');
    }
  }
};
