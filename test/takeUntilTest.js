const assert = require('chai').assert;
const takeUntil   = require('../takeUntil');


describe("#takeUntil", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  const numbers = [300, 400, 700, 600, 700, 1000, 500, 2000, 1300];

  it("should return all the elements before 'major'", () => {
    assert.deepEqual(takeUntil(words, word => word === 'major'),["ground", "control", "to"]);
  });
  it("should return the elements under 1000", () => {
    assert.deepEqual(takeUntil(numbers, num => num >= 1000), [300, 400, 700, 600, 700]);
  });
  it("should return the elements before 500", () => {
    assert.deepEqual(takeUntil(numbers, num => num === 500), [300, 400, 700, 600, 700, 1000]);
  });
});