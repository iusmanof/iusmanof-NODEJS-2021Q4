const { alphabet } = require("../cipher/alphabet");

for (let i = 97; i < 123; i++) {
  test("alphabet", () => {
    expect(alphabet[Math.abs(97 - i)]).toContain(String.fromCharCode(i));
  });
}

test("alphabet contain a", () => {
  expect(alphabet).toContain("a");
});

test("alphabet contain b", () => {
  expect(alphabet).toContain("b");
});

test("alphabet contain c", () => {
  expect(alphabet).toContain("c");
});
