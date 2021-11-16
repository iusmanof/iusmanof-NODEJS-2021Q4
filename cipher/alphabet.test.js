const {alphabet }  = require('./alphabet')

for (let i = 97; i < 123; i++){
  test('alphabet', () => {
    expect(alphabet[Math.abs(97- i)]).toBe(String.fromCharCode(i))
  })
}

test('alphabet', () => {
  expect(alphabet).toContain('b')
})
