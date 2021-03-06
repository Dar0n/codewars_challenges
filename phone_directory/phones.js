function phones(str, num) {
  let lines = str.split('\n');
  if (lines[lines.length-1] === '') lines.pop();
  let phonebook = [];
  lines.forEach((line) => {
    let numberRegex = /\+(\d{1,2}-\d{3}-\d{3}-\d{4})/g;
    let nameRegex = /<.+>/g;
    let trailingSpaces = /^\s+|\s+$/g;
    let specials = /\,|\;|\*|\/|\$|\?|\:|\!/g;
    let number = line.match(numberRegex);
    let name = line.match(nameRegex);
    let address = line.replace(numberRegex, '').replace(nameRegex, '').replace(specials, '').replace(/\s+/g, ' ').replace(/_/, ' ').replace(trailingSpaces, '');
    if (name && number && address) {
      phonebook.push({
        name: name[0].substr(1, name[0].length-2),
        number: number[0].substr(1),
        address: address,
      })
    }
  })
  let result = phonebook.filter(note => note.number === num);
  switch (result.length){
    case 0:
      return `Error => Not found: ${num}`;
    case 1:
      return `Phone => ${result[0].number}, Name => ${result[0].name}, Address => ${result[0].address}`;
    default:
      return `Error => Too many people: ${num}`;
  }
}



module.exports.phones = phones;