const assert = require('chai').assert;
const eqArrays  = require('../eqArrays');


describe("#eqArrays", () => {
  it("should return true when passed match a flat array", () => {
    assert.strictEqual(eqArrays([1, 7, 12], [1, 7, 12]), true);
  });
  it("should return true when given a matching multi level nested array", () => {
    assert.deepEqual(eqArrays([5, 6, [2, [1, 8], 4, [[30], 79]], 40, 2], [5, 6, [2, [1, 8], 4, [[30], 79]], 40, 2]), true);
  });
  it("should return false when given a nested arrays that don't match", () => {
    assert.deepEqual(eqArrays([[1, 2, ][3, 4], 5, [6]], [1, 2, [3, 4]], [[3, 4], 5, [6]], [1, [3, 4]]), false);
  });
});
