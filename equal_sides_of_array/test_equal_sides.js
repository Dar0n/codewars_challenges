const test = require('tape');
const { equal_sides } = require('./equal_sides');

test('Find element in array with equal sum sides', function(t){
  t.equal(equal_sides([1,2,3,2,1]), 2);
  t.equal(equal_sides([1,2,-1,-2,10]), 4);
  t.equal(equal_sides([]), -1);
  t.equal(equal_sides([1,2,3,4,5]), -1);
  t.end();
})