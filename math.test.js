// math.test.js
const sum = require('./math');

test('soma de dois números positivos', () => {
  expect(sum(2, 3)).toBe(5);
});

test('soma de dois números negativos', () => {
  expect(sum(-2, -3)).toBe(-5);
});

test('soma de um número positivo com zero', () => {
  expect(sum(5, 0)).toBe(5);
});
