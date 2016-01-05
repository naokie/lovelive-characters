var uniqueRandomArray = require('unique-random-array');
var loveLiveCharacterNames = require('./lovelive-character-names.json');

var getRandomItem = uniqueRandomArray(loveLiveCharacterNames);

module.exports = {
  all: loveLiveCharacterNames,
  random: random,
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    return new Array(number).map(function() {
      return getRandomItem();
    });
  }
}
