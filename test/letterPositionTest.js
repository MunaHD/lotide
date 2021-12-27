const assert = require('chai').assert;
const letterPosition   = require('../letterPositions');


describe("#letterPositions", () => {
  let messageObj = {
    l: [0],
    i: [1, 11],
    g: [2],
    h: [3, 5, 15, 18],
    t: [4, 14],
    o: [6, 19],
    u: [7, 20],
    s: [8, 21],
    e: [9, 16, 22],
    n: [12]
  };
  it(`should return an object with key/value as letter/position when given a string`, () => {
    assert.deepEqual(letterPosition("lighthouse in the house"), messageObj);
  });
  it("should return [1, 11] for  the letter i in 'lighthouse in the house' ", () => {
    assert.deepEqual(letterPosition("lighthouse in the house").i, [1, 11]);
  });
});
