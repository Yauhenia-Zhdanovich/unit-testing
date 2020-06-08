module.exports = {
  equal(actual, expected, message) {
    if (actual !== expected) {
      throw new Error(message);
    }
  }
};
