const { decodeAtbash, encodeAtbash } = require("../cipher/atbash");

test("decodeAtbash", () => {
  expect(decodeAtbash("abc")).toBe("zyx");
});

test("encodeAtbash", () => {
  expect(encodeAtbash("abc")).toBe("zyx");
});

test("decodeAtbash", () => {
  expect(decodeAtbash("132")).toBe("132");
});

test("encodeAtbash", () => {
  expect(encodeAtbash("123")).toBe("123");
});

test("decodeAtbash", () => {
  expect(decodeAtbash("ABC")).toBe("ZYX");
});

test("encodeAtbash", () => {
  expect(encodeAtbash("ABC")).toBe("ZYX");
});
