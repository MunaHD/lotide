
const eqArrays = function (arr1, arr2){
  if (arr1.every((val, index) => val === arr2[index])){
    return true;
  } else {
  
    return false;
  }
}


// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

module.exports = eqArrays;
