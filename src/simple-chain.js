const CustomError = require("../extensions/custom-error");

let str;
const chainMaker = {
  array: [],
  getLength() {
    str = this.array.join("");
    str = str.slice(1, str.length - 1)
    return str.length;
  },
  addLink(value) {
    this.array.push(`~( ${value} )~`)
    return this;
  },
  removeLink(position) {
    if (position > 0 && position <= this.array.length && typeof position == "number") {
      this.array.splice(position - 1, 1);
      return this;
    }
    else {
      this.array = [];
      throw new Error("THROWN")
    }
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    str = this.array.join("");
    str = str.slice(1, str.length - 1)
    this.array = [];
    return str;
  }

};

module.exports = chainMaker;
