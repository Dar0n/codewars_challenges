'use strict';

function primeNumbers(n) {
  // let primes = generatePrimeNumbers(n/2);
  let resultDict = {};
  let result = '';
  let factor = 2;
  while (n !== 1) {
    let mod = n % factor;
    if (mod === 0) {
      resultDict[factor] = (resultDict[factor] + 1) || 1;
      n = n / factor;
    }
    else {
      factor++;
    }
  }
  for (let key in resultDict) {
    if (resultDict[key] > 1){
      result += `(${key}**${resultDict[key]})`;
    }
    else {
      result += `(${key})`;
    }
  }
  return result;
}

module.exports.primeNumbers = primeNumbers;