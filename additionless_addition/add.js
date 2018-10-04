function add (x, y) {

  function toBinary(num) {
    let result = '';
    let res = 0;
    let rem = 0;
    do{
      res = (num / 2) >> 0;
      rem = num % 2;
      result = rem.toString() + result;
      num = res;
    } while (res !== 0);
    return parseInt(result, 2);
  }
  let binaryX = parseInt(x.toString(2), 2);
  let binaryY = parseInt(y.toString(2), 2);
  
  function sum(x, y) {
    let uncommonBits = x ^ y;
    let commonBits = x & y;
    
    if (commonBits === 0) return uncommonBits;
    return sum(uncommonBits, commonBits << 1);
  }
  return sum(binaryX, binaryY);
}

console.log(add(1,1));
console.log(add(2,3));