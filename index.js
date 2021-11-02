// const { encodeCaeser, decodeCaeser } = require("./cipher/caesar");
// const { encodeAtbash, decodeAtbash } = require("./cipher/atbash");
const { encodeROT8, decodeROT8 } = require("./cipher/rot8");

// const dc = decodeCaeser('abc s s  sDOIHNQOUDH98h923hd9 23dh 9238d98*(**( *');
// const ec = encodeCaeser('def idOOJ)#JD)@HF)f 0239f 02');
// console.log(dc)
// console.log(ec)

// const da = decodeAtbash('abc s s  sDOIHNQOUDH98h923hd9 23dh 9238d98*( ');
// const ea = encodeAtbash('abc s s  sDOIHNQOUDH98h923hd9 23dh 9238d98*(');
// console.log(da)
// console.log(ea)

const dr = encodeROT8("ab c");
const er = decodeROT8("Uryyb jbeyq");
console.log(dr);
console.log(er);

// let param = "A-C0-C1-A"

// let result = param.match(/([A])|([CR][01])/gm)
// let resultA = param.match(/[C|R][0|1]/gm)
// let resultCR = param.match(/[A]/gm)
// let resultAll = param.match(/^([CR][01]|[A])(-[CR][01]|[A]-)(-([CR][01]|[A]))*$/gm)

// console.log(result)
// console.log(resultA)
// console.log(resultCR)
// console.log(resultAll)

// 1. match (XY-)n

// let param = "A-C0-C1-A"

// let result = param.match(/([A])|([CR][01])/gm)
// let resultA = param.match(/[C|R][0|1]/gm)
// let resultCR = param.match(/[A]/gm)
// let resultAll = param.match(/^([CR][01]|[A])(-[CR][01]|[A]-)(-([CR][01]|[A]))*$/gm)

// console.log(result)
// console.log(resultA)
// console.log(resultCR)
// console.log(resultAll)

// 2. decode and encode by match 1.
