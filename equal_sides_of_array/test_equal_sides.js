const test = require('tape');
const equal_sides = require('./equal_sides');

test('Find element in array with equal sum sides', function(t){
  t.equal(equal_sides([1,2,3,2,1]), 2);
  t.end();
})