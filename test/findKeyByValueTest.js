const assert = require('chai').assert;
const findKeyByValue   = require('../findKeyByValue');


describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };
  it("should return the key of the passed in value", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("should return undefined if the value passed isn't assigned to key ", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Doctors"), undefined);
  });
});
