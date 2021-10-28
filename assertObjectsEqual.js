

const eqArrays = function (arr1, arr2) {
  if (arr1.every((val, index) => val === arr2[index])) {
    return true;
  } else {
  
    return false;
  }
}

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

const assertObjectsEqual = function (obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`)
  }
}



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba);// true

const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, abc); // false





const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);// true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);// false