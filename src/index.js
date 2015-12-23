var uniqueRandomArray = require('unique-random-array');
var loveLiveCharacterNames = require('./lovelive-character-names.json');

module.exports = {
  all: loveLiveCharacterNames,
  random: uniqueRandomArray(loveLiveCharacterNames),
};
