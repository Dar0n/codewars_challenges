const { phones } = require('./phones');
const test = require('tape');

test('Lets find some numbers', function(t){
  t.equal(phones(`<John> +1-453-453-1234 trhdthty\n
    rt +23-342-534-5345 <Rehanna> gretg\n
    f+234-234-2342werr\nerfref\n`, '+1-453-453-1234'), 'Phone => +1-453-453-1234, Name => John, Address => trhdthty', 'Found the name');
    t.equal(phones(`<John> +1-453-453-1234 trhdthty\n
    rt +23-342-534-5345 <Rehanna> gretg\n
    f+234-234-2342werr\nerfref\n`, '+1-453-453-123'), `Error => Not found: +1-453-453-123`, 'No match for the number');
    t.equal(phones(`<John> +1-453-453-1234 trhdthty\n
    rt +1-453-453-1234 <Rehanna> gretg\n
    f+234-234-2342werr\nerfref\n`, '+1-453-453-1234'), `Error => Too many people: +1-453-453-1234`, 'More than one found');
  t.end();
})