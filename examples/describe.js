module.exports = {
  describe(message, fn) {
    console.log(message);
    fn();
  },
  it(message, fn) {
    console.log(`\t - ${message}`);
    fn();
  }
};
