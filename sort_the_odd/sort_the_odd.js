function sort_the_odd(array) {
  let odds_sorted = array.filter(el => (el % 2 === 1)).sort((a, b) => a - b);
  return array.map(el => el % 2 === 1 ? odds_sorted.shift() : el)
}

module.exports.sort_the_odd = sort_the_odd;