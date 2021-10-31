const { alphabet } = require("./alphabet");
const decodedAlphabet = alphabet.slice().reverse();

function decodeAtbash(text) {
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

function encodeAtbash(text) {
  const decodeText = Array.from(text).map((letter) => {
    let upLetter = false;

    if (letter.match(/[^a-zA-Z]+$/)) {
      return letter;
    }

    if (letter === letter.toUpperCase()) {
      upLetter = true;
    }

    const letterIndexAlphabet = alphabet.indexOf(letter.toLowerCase());
    const decodeLetter = alphabet[letterIndexAlphabet];

    if (upLetter) {
      return decodeLetter.toUpperCase();
    }

    return decodeLetter;
  });

  return decodeText.join("");
}

module.exports = {
  decodeAtbash,
  encodeAtbash,
};