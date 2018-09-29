function sum_pairs(ints, n) {
  let result = [];
  for (let i = 0; i < ints.length - 1; i++){
    const diff = n - ints[i];
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[j] === diff) {
        result.push([i, j]);
      }
    }
  }
  if (!result.length) return undefined;
  result.sort((arr1, arr2) => arr1[1] - arr2[1]);
  const [first, second] = result[0];
  return [ints[first], ints[second]];
}

module.exports.sum_pairs = sum_pairs;