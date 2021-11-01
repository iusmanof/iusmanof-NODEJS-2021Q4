const { alphabet } = require("./alphabet");
const decodedAlphabet = alphabet.slice(-alphabet.length/2).concat(alphabet.slice(0, alphabet.length/2));
const { checkLetter } = require('../helpers/checkLetter')
const { checkUpperCase } = require('../helpers/checkUpperCase')


function decodeROT13(text) {
  const decodeText = Array.from(text).map((letter) => {
    if (checkLetter(letter)) return letter
    const letterIndexAlphabet = decodedAlphabet.indexOf(letter.toLowerCase());
    const decodeLetter = checkUpperCase(letter) ? alphabet[letterIndexAlphabet].toUpperCase() : alphabet[letterIndexAlphabet];
    return decodeLetter;
  });
  return decodeText.join("");
}

function encodeROT13(text) {
  const decodeText = Array.from(text).map((letter) => {
    if (checkLetter(letter)) return letter
    const letterIndexAlphabet = alphabet.indexOf(letter.toLowerCase());
    const decodeLetter = checkUpperCase(letter) ? alphabet[letterIndexAlphabet].toUpperCase() : alphabet[letterIndexAlphabet];
    return decodeLetter;
  });
  return decodeText.join("");
}

module.exports = {
  decodeROT13,
  encodeROT13,
};
