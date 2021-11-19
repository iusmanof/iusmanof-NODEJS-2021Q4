let regexpOptionParams = /^([CR][01]|[A])(-[CR][01]|[A]-)(-([CR][01]|[A]))*$/gm;
let regExpDecodeEncode = /([A])|([CR][01])/gm;

let checkOptionParams = (args) =>
  args.some((e) => regexpOptionParams.test(e) || regExpDecodeEncode.test(e));

const configParam = (args) => {
  let result;
  args.reduce((a, c) => {
    let regExp = /([A])|([CR][01])/gm;
    let flag = regExp.test(c);
    if (flag) {
      result = c;
    }
  });
  return result;
};

module.exports = {
  checkOptionParams,
  regExpDecodeEncode,
  configParam,
};
