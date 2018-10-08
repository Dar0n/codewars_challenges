function nouveau(Constructor, ...args){
  let instance = {};
  Constructor.apply(instance, args);
  Object.setPrototypeOf(instance, Constructor.prototype);
  return instance;
}

module.exports.nouveau = nouveau;