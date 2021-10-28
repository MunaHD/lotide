// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(object, callback) {

  // the function findKey which takes in an object and a callback.
  // It should scan the object
  for (let key in object) {
    let subObj = object[key];
    //return the first key for which
    // the callback returns a truthy value. If no key is found,
    // then it should return undefined.
    if (callback(subObj)) {
      return key;
    }
  }
};



// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma"); // => "noma"