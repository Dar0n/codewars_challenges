'use strict';

function isInteresting(number, awesome_numbers) {
  if (number > 99 && isAwesome(number, awesome_numbers)) {
    return 2;
  }
  if (number > 97 && (isAwesome(number + 1, awesome_numbers) || isAwesome(number + 2, awesome_numbers))) {
    return 1;
  }
  return 0;
}

function isAwesome(number, awesome_numbers){
  if ((awesome_numbers.indexOf(number) >= 0) || 
  (parseInt(number.toString().slice(1)) === 0) ||
  ('1234567890 9876543210'.includes(number.toString())) ||
  (number.toString() === number.toString().split('').reverse().join(''))) {
    return true;
  }
  return false;
}

module.exports.isInteresting = isInteresting;