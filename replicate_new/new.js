function nouveau(Constructor, ...args){
  let instance = {};
  let result = Constructor.apply(instance, args);
  Object.setPrototypeOf(instance, Constructor.prototype);
  if ((typeof result === 'object' || typeof result === 'function') && result !== null) return result;
  return instance;
}

module.exports.nouveau = nouveau;