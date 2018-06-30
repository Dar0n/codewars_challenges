const { anagrams } = require('./anagrams');
const test = require('tape');

test('Find anagrams of word in array of words', function (t) {
  t.deepEqual(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa'], "Should be ['aabb', 'bbaa']");
  t.deepEqual(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer'], "Should be ['carer', 'racer']");
  t.deepEqual(anagrams('ahah', ['haha', 'asdasd', 'hhaa', 'aahh']), [ 'haha', 'hhaa', 'aahh' ], "Should be [ 'haha', 'hhaa', 'aahh' ]");
  t.end();
});