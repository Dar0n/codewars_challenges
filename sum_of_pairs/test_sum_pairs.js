const test = require('tape');
const { sum_pairs } = require('./sum_pairs');

test('Sum pairs in array to certain number, return first pair', function(t){
  t.deepEqual(sum_pairs([1, 2, 3, 4, 5], 6), [2, 4]);
  t.deepEqual(sum_pairs([7, 2, -1, 4, 5], 6), [7, -1]);
  t.end();
})