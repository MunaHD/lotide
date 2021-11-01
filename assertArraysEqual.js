
const eqArrays = require("./eqArrays");


const assertArraysEqual = function (arr1, arr2){
  // uses the eqArray function to see if the arrays are equal
  if (eqArrays(arr1, arr2)) {
    //if the test passes
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else{
    //if the test fails
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`)
  }
}



// TEST CODE

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false


module.exports = assertArraysEqual;
