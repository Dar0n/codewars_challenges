const { escape } = require('./car');
const test = require('tape');

test('Try to escape from parking', function(t){
  t.deepEqual(escape([[0,0,0,0,2]]), [], 'You are right at the entrance!');
  t.deepEqual(escape([
    [1,0,0,0,2],
    [0,0,0,0,0]
  ]), ["L4", "D1", "R4"], 'Nice move');
  t.deepEqual(escape([
    [1,0,0,0,2],
    [1,0,0,0,0],
    [0,0,0,0,0]
  ]), ["L4", "D2", "R4"], 'Nice move');
  t.deepEqual(escape([
    [1,0,0,0,2],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [0,0,0,0,0]
  ]), ["L4", "D3", "R4"], 'Nice move');
  t.deepEqual(escape([
    [1,0,0,0,2],
    [0,0,0,0,1],
    [1,0,0,0,0],
    [0,0,0,0,0]
  ]), ["L4", "D1", "R4", "D1", "L4", "D1", "R4"], 'Nice move');
  t.deepEqual(escape([
    [1,2,0,0,0],
    [0,0,1,0,0],
    [1,0,0,0,0],
    [0,0,0,0,0]
  ]), ["L1", "D1", "R2", "D1", "L2", "D1", "R4"], 'Nice move');
  t.end();
})