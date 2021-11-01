const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");



//TEST 
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false
