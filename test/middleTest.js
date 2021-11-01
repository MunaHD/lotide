const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual")


assertArraysEqual(middle([1, 5, 3, 4, 7]), 2); // 2
assertArraysEqual(middle([1, 5, 3, 7]), [5, 3]); // 5, 3
assertArraysEqual(middle([1, 5]), []); // []
