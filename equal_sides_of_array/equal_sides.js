const equal_sides = (arr) => {
  for (const el, i of arr) {
    console.log(el, i);
  }
}

const sum = (arr) => {
  return arr.reduce((a,b) => a+b, 0);
}

module.exports.equal_sides = equal_sides;