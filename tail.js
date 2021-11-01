const assertEqual = require("./assertEqual");// 1 dot because file is in folder

const tail = function(array) {
  // return on the conndition that: the array length is greater than 1.
  // if true, it should return altered version of the array that contains the elements
  // starting from the first index till the end
  // if false, return an empty array
  return array.length > 1 ? array.slice(1) : [];
};

module.exports = tail;

