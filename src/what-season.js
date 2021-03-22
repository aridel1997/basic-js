const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date == undefined || date == "") {
    return ('Unable to determine the time of year!');
  }

  let type = Object.prototype.toString.call(date);

  if (type != "[object Date]") {
    throw new Error('THROWN');
  }

  let month = date.getMonth();

  if (month < 2 || month === 11) {
    return ("winter");
  }
  else if (month < 5) {
    return ("spring");
  }
  else if (month < 8) {
    return ("summer");
  }
  else if (month < 11) {
    return ("fall");
  }

};
