const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require('./script');

test('capitalization', () => {
  expect(capitalize('monobanana')).toEqual('Monobanana');
});

test('reverseString', () => {
  expect(reverseString('caminando habiamos camino')).toEqual(
    'onimac somaibah odnanimac'
  );
});

test('calculator', () => {
  expect(calculator.add(8, 10)).toEqual(18);
  expect(calculator.subtract(290, 11)).toEqual(279);
  expect(calculator.divide(99, 11)).toEqual(9);
  expect(calculator.multiply(99, 10)).toEqual(990);
});

test('caesar is hiding something', () => {
  expect(caesarCipher('txlhuhv vhu pl rqlfkdq?', 23)).toEqual(
    'quieres ser mi onichan?'
  );
});

const object = analyzeArray([1, 8, 3, 4, 2, 6]);

test('Analyze array', () => {
  expect(object.average).toBe(4);
  expect(object.min).toBe(1);
  expect(object.max).toBe(8);
  expect(object.length).toBe(6);
});
