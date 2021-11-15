const checkLetter = (l) => (l.match(/[^a-zA-Z]+$/) ? true : false);

module.exports = {
  checkLetter,
};
