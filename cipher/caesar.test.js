const { alphabet } = require("./alphabet");
const { checkLetter } = require("../helpers/checkLetter");
const { checkUpperCase } = require("../helpers/checkUpperCase");
const shift = 1;
const decodedAlphabet = alphabet
  .slice(-shift)
  .concat(alphabet.slice(0, -shift));
const encodedAlphabet = alphabet.slice(shift).concat(alphabet.slice(-0, shift));

function encodeCaeser(text) {
  const decodeText = Array.from(text).map((letter) => {
    if (checkLetter(letter)) return letter;
    const letterIndexAlphabet = decodedAlphabet.indexOf(letter.toLowerCase());
    const decodeLetter = checkUpperCase(letter)
      ? alphabet[letterIndexAlphabet].toUpperCase()
      : alphabet[letterIndexAlphabet];
    return decodeLetter;
  });
  return decodeText.join("");
}

function decodeCaeser(text) {
  const decodeText = Array.from(text).map((letter) => {
    if (checkLetter(letter)) return letter;
    const letterIndexAlphabet = encodedAlphabet.indexOf(letter.toLowerCase());
    const decodeLetter = checkUpperCase(letter)
      ? alphabet[letterIndexAlphabet].toUpperCase()
      : alphabet[letterIndexAlphabet];
    return decodeLetter;
  });
  return decodeText.join("");
}

module.exports = {
  decodeCaeser,
  encodeCaeser,
};
