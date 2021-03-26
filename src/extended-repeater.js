const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    str = String(str);
    let array = [];
    array[0] = str;
    if (options.repeatTimes !== undefined) {
        for (let i = 1; i < options.repeatTimes; i++) {
            array[i] = str;
        }
        console.log(array)
    }

    console.log(array[0])

    let arrayAddition = [];
    if (options.addition !== undefined) {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
            arrayAddition[i] = String(options.addition);
        }
        console.log(arrayAddition)
    }

    if (options.additionSeparator === undefined) {
        options.additionSeparator = '|';
    }

    let strAddition;
    if (options.additionRepeatTimes !== undefined) {
        for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
            arrayAddition[i] = arrayAddition[i] + options.additionSeparator;
        }
        strAddition = arrayAddition.join('');
    }
    else if (options.addition !== undefined) {
        strAddition = options.addition;
    }

    console.log(strAddition)
    if (options.separator === undefined) {
        options.separator = "+";
    }

    if (options.repeatTimes !== undefined) {
        for (let i = 0; i < options.repeatTimes; i++) {
            if (options.addition !== undefined) {
                array[i] = array[i] + strAddition;
            }
            // console.log(array[i])
        }
    }
    else {
        array[0] = array[0] + strAddition;
    }
    console.log(array)
    let result = array.join(options.separator);
    return (result)
};
