const { find_n } = require('./find_n');

var test = require('tape');

test('Find number of cubes', function(t) {
  t.equal(typeof find_n, 'function', 'Type of find_n is function');
  t.equal(find_n(4183059834009), 2022, 'find_n(4183059834009) is 2022');
  t.equal(find_n(24723578342962), -1, 'find_n(24723578342962) is -1');
  t.equal(find_n(135440716410000), 4824, 'find_n(135440716410000) is 4824');
  t.equal(find_n(40539911473216), 3568, 'find_n(40539911473216) is 3568');
  t.equal(find_n(26825883955641), 3218, 'find_n(26825883955641) is 3218');
  t.end();
})