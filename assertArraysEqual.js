
const eqArrays = require("./eqArrays");


const assertArraysEqual = function (arr1, arr2){
  // uses the eqArray function to see if the arrays are equal
  if (eqArrays(arr1, arr2)) {
    //if the test passes
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
  } else{
    //if the test fails
    console.log(`❌❌❌ Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`)
  }
}



module.exports = assertArraysEqual;
