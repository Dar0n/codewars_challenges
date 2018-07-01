const { PaginationHelper } = require('./PaginationHelper');
const test = require('tape');

test('Describe PaginationHelper class', function (t) {
  let arr = new Array(25);
  let helper = new PaginationHelper(arr, 10);
  t.equal(helper.page_count(), 3, 'page_count is returning incorrect value.');
  t.end();
});