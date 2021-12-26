const flatten = function(arr) {
  let newArr = [];
  for (let item in arr) {
    //create variable to hold element value
    let value = arr[item];
    // if the item in the array is an not array push the element
    if (!Array.isArray(value)) {
      newArr.push(value);
    } else {
      //map over the array and push the elements
      value.map(x => newArr.push(x));
    }
  }
  return newArr;
};
module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]]));
