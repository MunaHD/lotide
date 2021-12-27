const eqArrays = require("./eqArrays");
const eqObjects = function(obj1, obj2) {
  let obj1Key = Object.keys(obj1);
  let obj2Key = Object.keys(obj2);

  if (obj1Key.length !== obj2Key.length || Array.isArray(obj1) || Array.isArray(obj1)) {
    return false;
  }
  for (let val of obj1Key) {
    if (typeof obj1[val] === 'object' || typeof obj2[val] === 'object') {
      return eqArrays(obj1[val], obj2[val]);

    } else if (obj1[val] !== obj2[val]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;



