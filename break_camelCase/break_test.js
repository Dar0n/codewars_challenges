const {break_camel} = require('./break');
const test = require('tape');

test('Break the camel case', (t) => {
  t.equal(break_camel('camelCase'), 'camel Case', 'simple test');
  t.equal(break_camel(''), '', 'simple test');
  t.equal(break_camel('onlysmallletters'), 'onlysmallletters', 'simple test');
  t.equal(break_camel('aLotOfCamelCase'), 'a Lot Of Camel Case', 'simple test');
  t.end();
})