

const middle = function(arr){
  // conditional to check length of array is 
  // greater than 3

  if (arr.length < 3){
    return [];
  } 
  // make variabel to hold index of middle element

  let mid = Math.floor(arr.length / 2)
  let midValue = [];
   
  //ternary operator to return alues: checks the length of array
  //if array is not equal return the value at the middle
  //else return 2 values at the middle
  arr.length % 2 !== 0 ?
    midValue.push(arr[mid]) : 
    midValue.push(arr[mid - 1], arr[mid]);

  return midValue

}

module.exports = middle;
