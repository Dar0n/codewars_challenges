const { PaginationHelper } = require('./PaginationHelper');
const test = require('tape');

test('Describe PaginationHelper class', function (t) {
  let arr = new Array(25);
  let helper = new PaginationHelper(arr, 10);
  t.equal(helper.page_count(), 3, 'page_count is returning incorrect value.');
  t.equal(helper.page_index(24), 2, 'page_index returned incorrect value');
  t.equal(helper.page_index(25), -1, 'page_index returned incorrect value');
  t.equal(helper.item_count(), 25, 'item_count returned incorrect value');
  t.equal(helper.page_item_count(1), 10, 'item_count returned incorrect value');
  t.equal(helper.page_item_count(2), 5, 'item_count returned incorrect value');
  t.equal(helper.page_item_count(3), -1, 'item_count returned incorrect value');
  t.equal(helper.page_item_count(-5), -1, 'item_count returned incorrect value');
  t.end();
});