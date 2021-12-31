const assert = require('chai').assert;
const without   = require('../without');


describe("#without", () => {
 
  it("should return all the elements excluding the 2", () => {
    assert.deepEqual(without([2, 3, 4, 5, 1], [2]),[3, 4, 5, 1]);
  });
  it("should return the elements excluding the [3, 4, 5]", () => {
    assert.deepEqual(without([2, 3, 4, 5, 1, 4, 5, 4, 3 ,2, 1 ,1], [3, 4, 5]), [2, 1, 2, 1 ,1]);
  });
  
});