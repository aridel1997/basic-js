const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let newArray = matrix.flat(Infinity);
  let counter = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === '^^') {
      counter++;
    }
  }
  return (counter);

};
