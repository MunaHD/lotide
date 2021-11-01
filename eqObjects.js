const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");



const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key in obj1) {
    if (Object.keys(obj1[key]).length !== Object.keys(obj2[key]).length) {
      return false;
    }
    if (Array.isArray(obj1[key]) &&  Array.isArray(obj2[key])) { 
      
      if (eqArrays(obj1[key], obj2[key]) === false) {
        return false;
      }

    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}



module.exports = eqObjects;

// Testing
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertEqual(eqObjects(cd, cd2), false);
// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false


