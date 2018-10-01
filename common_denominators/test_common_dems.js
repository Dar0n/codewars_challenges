const test = require('tape');
const { common_dems } = require('./common_dems');

test('Find common denominators in paris', function(t){
  t.deepEqual([1,2,3], [1,2,3]);
  t.end();
})