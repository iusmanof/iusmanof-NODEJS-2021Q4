let regexpOptionParams = /^([CR][01]|[A])(-[CR][01]|[A]-)(-([CR][01]|[A]))*$/gm;
let regExpDecodeEncode = /([A])|([CR][01])/gm;
// let resultA = param.match(/[C|R][0|1]/gm)
// let resultCR = param.match(/[A]/gm)

let checkOptionParams = (args) =>
  args.some((e) => regexpOptionParams.test(e) || regExpDecodeEncode.test(e));

const indexOfOtionsParam = (args) =>{
  args.reduce((a, c, i) => {
    if (checkOptionParams) return i;
  });
}
  
const configParam = (args) => {
  let result;
  args.reduce((a, c) => {
    let regExp = /([A])|([CR][01])/gm;
    let flag = regExp.test(c);
    if (flag){
      result = c
     }
  });
  return result
}


module.exports = {
  checkOptionParams,
  indexOfOtionsParam,
  regExpDecodeEncode,
  configParam
};
