// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("happy", "Happy");// I guess its not like the === and it's like the ==
// assertEqual(1, 15);

module.exports = assertEqual;
