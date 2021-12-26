const assert = require('chai').assert;
const flatten   = require('../flatten');


describe("#flatten", () => {
  it("should return an empty array when passed []", () => {
    assert.deepEqual(flatten([]), []);
  });
  it("should flatten 1 level nested arrays", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});
