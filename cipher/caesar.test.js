const { decodeCaeser, encodeCaeser } = require("./caesar");

test('decodeCaeser', () => {
  expect(decodeCaeser('abc')).toBe('zab')
})

test('encodeCaeser', () => {
  expect(encodeCaeser('abc')).toBe('bcd')
})

test('decodeCaeser', () => {
  expect(decodeCaeser('132')).toBe('132')
})

test('encodeCaeser', () => {
  expect(encodeCaeser('123')).toBe('123')
})

test('decodeCaeser', () => {
  expect(decodeCaeser('ABC')).toBe('ZAB')
})

test('encodeCaeser', () => {
  expect(encodeCaeser('ABC')).toBe('BCD')
})