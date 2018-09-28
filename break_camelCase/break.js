function break_camel(str) {
  return str.replace(/([A-Z])/g, ' $1');
}

module.exports.break_camel = break_camel;