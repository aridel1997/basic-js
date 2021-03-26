const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(DirectMachine = true) {
    this.DirectMachine = DirectMachine;
  }

  encrypt(message, key) {
    return this.VigenereCipher(message, key, 1);
  }

  decrypt(message, key) {
    return this.VigenereCipher(message, key, -1);
  }

  VigenereCipher(message, key, num) {

    if (message == undefined || key == undefined) {
      throw new Error("THROWN");
    }

    let resultStr = "";
    message = message.toUpperCase();
    key = key.toUpperCase();
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (/^[A-Z]$/.test(message[i])) {
        let keyCount = (i - j) % key.length;
        let codeLetter =
          message.charCodeAt(i) + (key.charCodeAt(keyCount) - 65) * num;
        if (codeLetter < 65 || codeLetter > 90) {
          codeLetter =
            num == 1
              ? (codeLetter % 91) + 65
              : 90 - (64 - (codeLetter % 65));
        }
        resultStr = resultStr + String.fromCharCode(codeLetter);
      }
      else {
        resultStr = resultStr + message[i];
        j++;
      }
    }

    return this.DirectMachine
      ? resultStr
      : resultStr.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
