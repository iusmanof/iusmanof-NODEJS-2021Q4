const optionC = require("../global/constData");
const optionConfig = require("../global/constData");
const optionInput = require("../global/constData");
const optionOutput = require("../global/constData");

test("Test -c", () => {
  expect(optionC.optionC).toBe("-c");
});

test("Test --config", () => {
  expect(optionConfig.optionConfig).toBe("--config");
});

test("Test -i", () => {
  expect(optionInput.optionInput).toBe("-i");
});

test("Test -o", () => {
  expect(optionOutput.optionOutput).toBe("-o");
});
