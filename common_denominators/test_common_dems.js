const test = require('tape');
const { common_dems } = require('./common_dems');

test('Find common denominators in paris', function(t){
  t.equal(common_dems([ [1, 2], [1, 3], [1, 4] ]), "6,12,4,12,3,12");
  t.end();
})