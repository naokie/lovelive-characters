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
      var randamItem = loveLiveCharacterNames.random();
      expect(loveLiveCharacterNames.all).to.include(randamItem);
    });
  });
});
