require('./array_helpers');
const test = require('tape');

test('Create array helpers functions', function(t){
  const arr1 = [1, 2, 3, 4];
  t.deepEqual(arr1.square(), [1, 4, 9, 16]);
  t.deepEqual([].square(), []);
  t.deepEqual([1, 2, -3].cube(), [1, 8, -27]);
  t.equal([-1, 0, 1, 2, 4].average(), 1.2);
  t.equal([-1, 0, 1, 2, 4].sum(), 6);
  t.equal([].sum(), 0);
  t.deepEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].odd(), [1, 3, 5, 7, 9]);
  t.deepEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].even(), [2, 4, 6, 8, 10]);
  t.end();
})