function increment_string(str) {
  let num = str.match(/\d/g);
  let alpha = str.match(/\D/g).join('');
  let result = '';
  if (!num) {
    result = alpha + '1';
  }
  else {
    num = num.join('');
    const numLength = num.length;
    num = (parseInt(num) + 1).toString();
    const dif = numLength - num.length;
    if (dif > 0) {
      num = '0'.repeat(dif) + num;
    }
    result = alpha + num;
  }
  return result;
}

module.exports.increment_string = increment_string;