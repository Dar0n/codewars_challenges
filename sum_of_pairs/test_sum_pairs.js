const test = require('tape');
const { sum_pairs } = require('./sum_pairs');

test('Sum pairs in array to certain number, return first pair', function(t){
  t.equal(sum_pairs([1, 2, 3, 4, 5], 6), [2, 4]);
  t.end();
})