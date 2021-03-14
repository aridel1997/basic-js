const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || /[A-Z -]/gi.test(sampleActivity) || sampleActivity.trimStart().length == 0 || sampleActivity <= 0 || sampleActivity > HALF_LIFE_PERIOD || sampleActivity > MODERN_ACTIVITY) {
    return false;
  }

  let ln2 = 0.693;
  let k = ln2 / HALF_LIFE_PERIOD;
  let t = (Math.log(MODERN_ACTIVITY / sampleActivity)) / k;
  return Math.ceil(t);

};
