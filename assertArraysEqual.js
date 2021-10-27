// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2){
  if (arr1.every((val, index) => val === arr2[index])){
    return true;
  } else {
    return false;
  }
}

const assertArraysEqual = function (arr1, arr2){

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else{
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`)
  }
}


// TEST CODE

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false
