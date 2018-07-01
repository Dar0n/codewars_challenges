const { primeNumbers } = require('./primeNumbers');
const test = require('tape');

test('Get prime factors of the numbers', function (t) {
  t.equal(primeNumbers(25), '(5**2)', '(5**2)');
  t.equal(primeNumbers(100), '(2**2)(5**2)', '(2**2)(5**2)');
  t.equal(primeNumbers(7775460), '(2**2)(3**3)(5)(7)(11**2)(17)', '(2**2)(3**3)(5)(7)(11**2)(17)');
  t.end();
});