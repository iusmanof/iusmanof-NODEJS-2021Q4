const { decodeROT8, encodeROT8 } = require("../cipher/rot8");

test('decodeROT8', () => {
  expect(decodeROT8('abc')).toBe('stu')
})

test('encodeROT8', () => {
  expect(encodeROT8('abc')).toBe('ijk')
})

test('decodeROT8', () => {
  expect(decodeROT8('132')).toBe('132')
})

test('encodeROT8', () => {
  expect(encodeROT8('123')).toBe('123')
})

test('decodeROT8', () => {
  expect(decodeROT8('ABC')).toBe('STU')
})

test('encodeROT8', () => {
  expect(encodeROT8('ABC')).toBe('IJK')
})