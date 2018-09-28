const diamond = (n) => {
  if (n <= 0 || (n % 2 === 0)) {
    return null;
  }
  let result = '*'.repeat(n) + '\n';
  let spaces = 1;
  while (n > 1) {
    n -= 2;
    result = ' '.repeat(spaces) + '*'.repeat(n) + '\n' + result +  ' '.repeat(spaces) + '*'.repeat(n) + '\n';
    spaces ++;
  }
  console.log(result);
  return result;
}

module.exports.diamond = diamond;