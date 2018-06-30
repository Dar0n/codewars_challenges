'use strict';

function PaginationHelper(collection, items_per_page) {
  this.collection = collection;
  this.items_per_page = items_per_page;
  this.item_count = item_count;
  this.page_count = page_count;
  this.page_item_count = page_item_count;
  this.page_index = page_index;

  function item_count() {
    return this.collection.length;
  }

  function page_count() {
    return Math.floor(this.collection.length / this.items_per_page) + 1;
  }

  function page_item_count(page_index) {
    if (page_index >= 0 && page_index < (this.page_count() - 1)) {
      return this.items_per_page;
    }
    else if (page_index === (this.page_count() - 1)) {
      return this.item_count() % this.items_per_page
    }
    else {
      return -1;
    }
  }

  function page_index(item_index) {
    if (item_index >= 0 && item_index < this.item_count()) {
      return Math.floor(item_index / this.items_per_page);
    }
    return -1;
  }
}

module.exports.PaginationHelper = PaginationHelper;