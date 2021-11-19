const { pushArrayOfParams } = require("../helpers/pushArrayOfParams");
const { encodeCaeser, decodeCaeser } = require("../cipher/caesar");
const { encodeAtbash, decodeAtbash } = require("../cipher/atbash");
const { encodeROT8, decodeROT8 } = require("../cipher/rot8");

test("should encodeCaeser", () => {
  expect(
    pushArrayOfParams([
      "cipher-cli.js",
      "-c",
      "C1",
      "-i",
      "input.txt",
      "-o",
      "output.txt",
    ])
  ).toContain(encodeCaeser);
});

test("should decodeCaeser", () => {
  expect(
    pushArrayOfParams([
      "cipher-cli.js",
      "-c",
      "C0",
      "-i",
      "input.txt",
      "-o",
      "output.txt",
    ])
  ).toContain(decodeCaeser);
});

test("should encodeAtbash", () => {
  expect(
    pushArrayOfParams([
      "cipher-cli.js",
      "-c",
      "C1-A",
      "-i",
      "input.txt",
      "-o",
      "output.txt",
    ])
  ).toContain(encodeAtbash);
});

test("should decodeCaeser", () => {
  expect(
    pushArrayOfParams([
      "cipher-cli.js",
      "-c",
      "A-A",
      "-i",
      "input.txt",
      "-o",
      "output.txt",
    ])
  ).toContain(decodeAtbash);
});

test("should encodeCaeser", () => {
  expect(
    pushArrayOfParams([
      "cipher-cli.js",
      "-c",
      "C1-R1",
      "-i",
      "input.txt",
      "-o",
      "output.txt",
    ])
  ).toContain(encodeROT8);
});

test("should decodeCaeser", () => {
  expect(
    pushArrayOfParams([
      "cipher-cli.js",
      "-c",
      "C0-R0",
      "-i",
      "input.txt",
      "-o",
      "output.txt",
    ])
  ).toContain(decodeROT8);
});
