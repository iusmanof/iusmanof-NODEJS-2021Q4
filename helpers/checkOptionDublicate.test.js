const { checkOptionDublicate } = require("./checkOptionDublicate");

describe("Check Option Dublicate", () => {
  test("Test 1", () => {
    expect(checkOptionDublicate(["-c", "-c"])).toBeFalsy();
  });

  test("Test 2", () => {
    expect(checkOptionDublicate(["--config", "--config"])).toBeFalsy();
  });

  test("Test 3", () => {
    expect(checkOptionDublicate(["-c"])).toBeTruthy();
  });

  test("Test 4", () => {
    expect(checkOptionDublicate(["--config"])).toBeTruthy();
  });

  test("Test 5", () => {
    expect(checkOptionDublicate(["--config", "-c"])).toBeTruthy();
  });

  test("Test 6", () => {
    expect(checkOptionDublicate(["-i", "-i"])).toBeFalsy();
  });

  test("Test 7", () => {
    expect(checkOptionDublicate(["-o", "-o"])).toBeFalsy();
  });

  test("Test 8", () => {
    expect(checkOptionDublicate(["-i", "-o", "-c", "-c"])).toBeFalsy();
  });

  test("Test 9", () => {
    expect(
      checkOptionDublicate(["-i", "-o", "--config", "--config"])
    ).toBeFalsy();
  });

  test("Test 10", () => {
    expect(checkOptionDublicate(["-i", "-o", "-i", "-c"])).toBeFalsy();
  });

  test("Test 11", () => {
    expect(checkOptionDublicate(["-i", "-o", "-o", "-c"])).toBeFalsy();
  });

  test("Test 11", () => {
    expect(checkOptionDublicate(["-i", "-o", "-c"])).toBeTruthy();
  });

  test("Test 11", () => {
    expect(
      checkOptionDublicate([
        "-i",
        "-i",
        "-o",
        "-o",
        "--config",
        "--config",
        "-c",
        "-c",
      ])
    ).toBeFalsy();
  });
});
