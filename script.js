function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  let arr = str.split('');
  return arr.reverse().join('');
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(str, factor) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + factor) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + factor) % 26) + 97);
    } else {
      result += char;
    }
  }
  return result;
}

function analyzeArray(arr) {
  arr = arr.sort();

  let arrSum = 0;

  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }

  let average = arrSum / arr.length;

  let min = arr[0];
  let max = Math.max(...arr);
  let length = arr.length;

  return { average, min, max, length };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
