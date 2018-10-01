const common_dems = (arr) => {
  const myLCM =  arr.reduce((result, el) => lcm(result, el[1]), 1);
  return arr.map(el => "(" + myLCM / el[1] * el[0] + "," +  myLCM + ")").join('');
}

const gcd = (a, b) => {
  if (b === 0) return a;
  else {
    return gcd(b, a % b);
  }
}

const lcm = (a, b) => {
  return a * b / gcd(a, b);
}

module.exports.common_dems = common_dems;