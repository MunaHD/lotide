const takeUntil = function(array, callback) {
  // make array to hold new values
  let newArr = [];
  // loop over the array elements
  for (let item of array) {
    // as long as the condition in the function is false
    //push the elements into the new array
    if (!callback(item)) {
      newArr.push(item);
      //once the condition is true then we return what 
      // we added so far to the array so far
    } else {
      return newArr;
     
    }
  }
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]