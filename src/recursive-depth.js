const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    let self = this;
    return 1 + (array instanceof Array ? array.reduce(function (max, item) {
      return Math.max(max, self.calculateDepth(item));
    }, 0) : -1);
  }
};