function spyOn(func) {
  let count = 0;
  let params = [];
  let returned = [];

  function execute(...args) {
    params.push(...args);
    count++;
    result = func.apply(this, args);
    returned.push(result);
    return result;
  }

  execute.callCount = () => count;
  execute.wasCalledWith = (num) => params.includes(num);
  execute.returned = (val) => returned.includes(val);
  return execute;
}


module.exports.spyOn = spyOn;