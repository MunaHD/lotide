const assert = require('chai').assert;
const assertArraysEqual = require("../assertArraysEqual");




describe("#assertArraysEqual", () => {
  it("should return true for [1, 2, 3], ", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true );
  });
  it("should return false for ['1', '2', '3'], ['1', '2', 3]\ ", () => {
    assert.strictEqual(assertArraysEqual(['1', '2', '3'], ['1', '2', 3]), false); 
  });
});
