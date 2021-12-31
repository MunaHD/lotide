const assert = require('chai').assert;
const map   = require('../map');


describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  const numbers = [300, 400, 500, 600, 700];

  it("should return the first letter of every element of the array", () => {
    assert.deepEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
  });
  it("should return the value of the element when divided by 10", () => {
    assert.deepEqual(map(numbers, num => num / 10), [30, 40, 50, 60, 70]);
  });
});