const test = require('tape');
const { increment_string } = require('./string');

test('Lets increment some strings', function(t){
  t.equal(increment_string('foo05'), 'foo06', 'foo05->foo06');
  t.equal(increment_string('foo5'), 'foo6', 'foo5->foo6');
  t.equal(increment_string('foo'), 'foo1', 'foo->foo1');
  t.equal(increment_string('foo0009'), 'foo0010', 'foo0009->foo0010');
  t.equal(increment_string('foo9'), 'foo10', 'foo9->foo10');
  t.end();
})