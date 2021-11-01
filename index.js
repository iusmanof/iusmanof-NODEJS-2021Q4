const { encodeCaeser, decodeCaeser } = require("./cipher/caesar");
const { encodeAtbash, decodeAtbash } = require("./cipher/atbash");
const { encodeROT13, decodeROT13 } = require("./cipher/rot13");

// const dc = decodeCaeser('abc s s  sDOIHNQOUDH98h923hd9 23dh 9238d98*(**( *');
// const ec = encodeCaeser('def idOOJ)#JD)@HF)f 0239f 02');
// console.log(dc)
// console.log(ec)

const da = decodeAtbash('abc s s  sDOIHNQOUDH98h923hd9 23dh 9238d98*( ');
const ea = encodeAtbash('abc s s  sDOIHNQOUDH98h923hd9 23dh 9238d98*(');
console.log(da)
console.log(ea)

// const dr = decodeROT13("Why did the chicken cross the road?");
// const er = encodeROT13("Gb trg gb gur bgure fvqr!");
// console.log(dr);
// console.log(er);
