const { alphabet } = require("./alphabet");
const shift = 3;
const decodedAlphabet = alphabet
  .slice(-shift)
  .concat(alphabet.slice(0, -shift));
const encodedAlphabet = alphabet.slice(shift).concat(alphabet.slice(-0, shift));

function decodeCaeser(text) {
  const decodeText = Array.from(text).map((letter) => {
    let upLetter = false;

    if (letter.match(/[^a-zA-Z]+$/)) {
      return letter;
    }

    if (letter === letter.toUpperCase()) {
      upLetter = true;
    }

    const letterIndexAlphabet = decodedAlphabet.indexOf(letter.toLowerCase());
    const decodeLetter = alphabet[letterIndexAlphabet];

    if (upLetter) {
      return decodeLetter.toUpperCase();
    }

    return decodeLetter;
  });

  return decodeText.join("");
}

function encodeCaeser(text) {
  const decodeText = Array.from(text).map((letter) => {
    let upLetter = false;

    if (letter.match(/[^a-zA-Z]+$/)) {
      return letter;
    }

    if (letter === letter.toUpperCase()) {
      upLetter = true;
    }

    const letterIndexAlphabet = encodedAlphabet.indexOf(letter.toLowerCase());
    const decodeLetter = alphabet[letterIndexAlphabet];

    if (upLetter) {
      return decodeLetter.toUpperCase();
    }

    return decodeLetter;
  });

  return decodeText.join("");
}

module.exports = {
  decodeCaeser,
  encodeCaeser,
};
