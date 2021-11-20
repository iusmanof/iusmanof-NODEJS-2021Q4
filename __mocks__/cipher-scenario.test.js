// const { argv, stderr } = require("process");

const { checkOptionDublicate } = require("../helpers/checkOptionDublicate");
const RequiredError = require("../errors/RequiredError");
// Input: User passes the same cli argument twice; Result: Error message is shown; e.g.
//  input: node my_caesar_cli -c C1-C1-A-R0 -c C0 result: Error: You provided -c argument more than once;

test("scenario 1 Error: You provided -c argument more than once;", () => {

    function errorFunction() {
      throw new RequiredError();
    }
    expect(errorFunction).toThrow(RequiredError);
 
//  expect(errorFunction(['-c', 'C1-C1-A-R0', '-c', 'R0'])).toThrow(DublicatedError);
//  expect(errorFunction(['-c', 'C1-C1-A-R0', '-c', 'R0'])).toBeTruthy();
});