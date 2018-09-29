const {sort_the_odd} = require('./sort_the_odd');
const test = require('tape');

test('Sort the odd numbers in array', function(t){
  t.deepEqual(sort_the_odd([3,2,1]), [1,2,3]);
  t.deepEqual(sort_the_odd([0, 5, 2, 4, 3]), [0, 3, 2, 4, 5]);
  t.deepEqual(sort_the_odd([]), []);
  t.deepEqual(sort_the_odd([4, 6, 0, 2, 2, 10]), [4, 6, 0, 2, 2, 10]);
  t.deepEqual(sort_the_odd([9, 7, 5, 3, 1]), [1, 3, 5, 7, 9]);
  t.deepEqual(sort_the_odd([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [10, 1, 8, 3, 6, 5, 4, 7, 2, 9]);
  t.end();
})