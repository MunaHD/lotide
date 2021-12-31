const findKey = function(object, callback) {

  //simplify code to use Object.keys
  return Object.keys(object).find(key => callback(object[key]));
};


module.exports = findKey;

