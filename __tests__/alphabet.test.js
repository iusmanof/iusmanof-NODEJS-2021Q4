const { alphabet } = require("../cipher/alphabet");

for (let i = 97; i < 123; i++){
  test('alphabet', () => {
    expect(alphabet[Math.abs(97- i)]).toContain(String.fromCharCode(i))
  })
}

