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
 
 
  

  // => OLD CODE BUT STILL WORKS JUST TRYING ANOTHER WAY //
  // filter array element and only return those 
  //that are not part of the other array
  
  // let newArr = source.filter(element => !itemRem.includes(element));
  // console.log(newArr);
   // => OLD CODE BUT STILL WORKS JUST TRYING ANOTHER WAY //
  
  //create variable to hold the value of the item we want
  //to remove
  let item = 0;
  for (let val of itemRem){
    item = val
  }
  
  //create empty arrary to put our new array the
  // we remove value from
  let newArr = [];
  
  //create a loop to add the elements to the new array and only 
  //the elements that we want
  for (let i = 0; i < source.length; i ++){
     
     if (source[i] !== item){
      newArr.push(source[i]);
     }
  }

  //console out new array
  console.log(newArr);
  
}

module.exports = without;

