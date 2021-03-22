const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let type = Object.prototype.toString.call(array);
  if (type != "[object Array]") {
    throw new Error("THROWN");
  }
  console.log(array)
  let resultArray = [];
  if (array.indexOf("--discard-next") == -1 && array.indexOf("--discard-prev") == -1 && array.indexOf("--double-next") == -1 && array.indexOf("--double-prev") == -1) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "--discard-next" || array[i] == "--discard-prev" || array[i] == "--double-next" || array[i] == "--double-prev") {
      switch (array[i]) {
        case "--discard-next":
          resultArray.push(array[i + 1]);
          delete resultArray[resultArray.length - 1];
          i = i + 1;
          break;
        case "--double-prev":
          console.log("double-p")
          if (resultArray.length != 0) {
            resultArray.push(resultArray[resultArray.length - 1]);
          }
          break;
        case "--double-next":
          console.log("double-n")
          if (array[i + 1] != undefined) {
            resultArray.push(array[i + 1]);
          }
          break;
        case "--discard-prev":
          console.log("discard-p");
          resultArray.pop();
          break;
      }
    }
    else {
      resultArray.push(array[i]);
    }
  }
  let result = [];
  resultArray.forEach(element => {
    if (element !== undefined) {
      result.push(element);
    }
  });
  return result;
};
