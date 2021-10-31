const { alphabet } = require("./alphabet");
const decodedAlphabet = alphabet.slice(-alphabet.length/2).concat(alphabet.slice(0, alphabet.length/2));

function decodeROT13(text) {
  console.log(decodedAlphabet)
  console.log(alphabet)
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

function encodeROT13(text) {
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
  decodeROT13,
  encodeROT13,
};
