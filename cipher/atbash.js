const { alphabet } = require("./alphabet");
const { checkLetter } = require('../helpers/checkLetter')
const { checkUpperCase } = require('../helpers/checkUpperCase')
const decodedAlphabet = alphabet.slice().reverse();

function decodeAtbash(text) {
  const decodeText = Array.from(text).map((letter) => {
    if (checkLetter(letter)) return letter
    const letterIndexAlphabet = decodedAlphabet.indexOf(letter.toLowerCase());
    const decodeLetter = checkUpperCase(letter) ? alphabet[letterIndexAlphabet].toUpperCase() : alphabet[letterIndexAlphabet];
    return decodeLetter;
  });
  return decodeText.join("");
}

function encodeAtbash(text) {
  const decodeText = Array.from(text).map((letter) => {
    if (checkLetter(letter)) return letter
    const letterIndexAlphabet = alphabet.indexOf(letter.toLowerCase());
    const decodeLetter = checkUpperCase(letter) ? alphabet[letterIndexAlphabet].toUpperCase() : alphabet[letterIndexAlphabet];
    return decodeLetter;
  });
  return decodeText.join("");
}

module.exports = {
  decodeAtbash,
  encodeAtbash,
};