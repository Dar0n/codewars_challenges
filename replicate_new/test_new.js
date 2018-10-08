const { nouveau } = require('./new');
const test = require('tape');

test('Replicate new function', function(t){
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.introduce = function(){
    return 'Hello, my name is ' + this.name;
  }
  
  let mike = nouveau(Person, 'Mike', 19);
  t.equal(mike.name, 'Mike');
  t.equal(mike.age, 19);
  t.equal(mike.introduce(), 'Hello, my name is Mike');
  t.end()
})