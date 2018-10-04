function escape (carpark) {
  let currentFloor = carpark.findIndex(floor => floor.includes(2));
  let position = carpark[currentFloor].indexOf(2);
  let result = [];
  const stores = carpark.length;
  const exit = carpark[0].length - 1;
  let count = 0;
  while (!(position === exit && currentFloor === stores - 1)) {
    let stairs = carpark[currentFloor].indexOf(1);
    let lastItem;
    if (stairs >= 0) {
      if (stairs > position) {
        result.push("R" + (stairs - position).toString());
      }
      else if (stairs < position) {
        result.push("L" + (position - stairs).toString());
      }
      position = stairs;
      currentFloor++;
      lastItem = result[result.length - 1];
      if (lastItem) {
        if (lastItem.charAt(0) !== "D"){
          result.push("D1");
        }
        else {
          let count = parseInt(lastItem.substr(1));
          count++;
          result[result.length - 1] = "D" + count.toString();
        }
      }
    }
    else {
      result.push("R" + (exit - position).toString());
      position = exit;
    }
    count++;
    if (count > 20) break;
  }
  return result;
}

module.exports.escape = escape;