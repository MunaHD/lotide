

const middle = function(arr){
  // conditional to check length of array is 
  // greater than 3

  if (arr.length < 3){
    return [];
  } 
  // make variabel to hold index of middle element

  let mid = Math.floor(arr.length / 2)
  let value = [];
  //ternary operator to return values: 
  //if array is not equal return the value at the middle
  //else return 2 values at the middle

  arr.length % 2 !== 0 ?
    value.push(arr[mid]) : 
    value.push(arr[mid - 1], arr[mid]);

  return value

}

console.log(middle([1, 5, 3, 4, 7])); // 2
console.log(middle([1, 5, 3, 7])); // 5, 3
console.log(middle([1, 5])); // []
