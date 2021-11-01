
const eqArrays = function (arr1, arr2){
  // .every checks every value of the array to see if it passes the test which in this case
  // looking at the 'value' in array1 and check if it is equal to the  'value' of array2 at the same index
  if (arr1.every((val, index) => val === arr2[index])){
    return true;
  } else {
  
    return false;
  }
}


// TEST CODE
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

module.exports = eqArrays;
