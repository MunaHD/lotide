const assert = require('chai').assert;
const middle = require('../middle');



describe("#middle", () => {
  it("returns 2 for [1, 5, 3, 4, 7]", () => {
    assert.deepEqual(middle([1, 5, 3, 4, 7]), [3]);
  });
  it("returns [5, 3] for [1, 5, 3, 7]", () => {
    assert.deepEqual(middle([1, 5, 3, 7]), [5, 3]); 
  });
  it("returns [] for [1, 5]", () => {
    assert.deepEqual(middle([1, 5]), []); 
  });
});
