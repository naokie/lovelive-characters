var expect = require('chai').expect;
var loveLiveCharacterNames = require('./index');

describe('lovelive-character-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(loveLiveCharacterNames.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `園田 海未`', function() {
      expect(loveLiveCharacterNames.all).to.include('園田 海未');
    });
  });

  describe('random', function() {
    it('should return a random item from the loveLiveCharacterNames.all', function() {
      var randomItem = loveLiveCharacterNames.random();
      expect(loveLiveCharacterNames.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = loveLiveCharacterNames.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(loveLiveCharacterNames.all).to.include(item);
      });
    });
  });
});
