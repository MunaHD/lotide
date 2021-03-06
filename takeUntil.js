const takeUntil = function (array, callback) {
  // make array to hold new values
  let newArr = [];
  for (let item of array) {
    // as long as the condition in the function is false push the elements into the new array
    if (!callback(item)) {
      newArr.push(item);
      //once the condition is true then we return what we added so far to the array
    } else {
      return newArr;
    }
  }
};
module.exports = takeUntil;
