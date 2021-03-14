const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(names) {
  if (names === null || names === undefined) {
    return false;
  }
  let arrayNames = [];
  arrayNames = names;
  let f = [];
  let str = [];
  for (let i = 0; i < arrayNames.length; i++) {
    if (typeof (arrayNames[i]) === 'string') {
      f = arrayNames[i].trimStart().split("");
      str.push(f[0]);
      str.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });
    }
  }
  str = str.join("").toUpperCase();
  if (str.length === 0) {
    return false;
  }
  else {
    return str;
  }

};
