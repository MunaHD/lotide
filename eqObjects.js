const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");



const eqObjects = function(obj1, obj2) {

  let obj1Key  = Object.keys(obj1)
  let obj2Key = Object.keys(obj2)

  if (obj1Key.length !== obj2Key.length || Array.isArray(obj1) ||  Array.isArray(obj1)) {
    return false;
  }

  for (let val of obj1Key) {
    if (typeof obj1[val] === 'object' || typeof obj2[val] === 'object' ) {
      return eqObjects(obj1[val], obj2[val]);

    } else if (obj1[val] !== obj2[val]) {
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


