
const findKeyByValue = function(object, value) {
  // loop through the keys and check for the value
  for (let key in object) {
    if (object[key] === value) {
      // return the key if found
      return key;
    }
  }
};

module.exports = findKeyByValue;
