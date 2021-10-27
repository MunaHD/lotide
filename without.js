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


const without = function (source, itemRem){
  
  let newArr = source.filter(element => !itemRem.includes(element));

  console.log(newArr);
  
}

without([1, 2, 3], [2]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



// TEST CODE

//assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
//assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false