const eqArrays = function(arr1, arr2) {
  // if the lengths of the arrays don't match return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    //check if  there are nested arrays
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      // recursion to test the nested arrays
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      // return false if the elements don't match
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;


