const equal_sides = (arr) => {
  if (!arr.length) {
    return -1;
  }
  //[1,2,3,2,1]
  let sum = arr.reduce((sum, el) => sum + el, 0);
  let left_sum = 0;
  let right_sum = sum;
  for (let i = 0; i < arr.length; i++) {
    right_sum -= arr[i];
    if (left_sum === right_sum) {
      return i;
    }
    left_sum += arr[i];
  }
  return -1;
}

module.exports.equal_sides = equal_sides;