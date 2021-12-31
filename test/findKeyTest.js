const assert = require('chai').assert;
const findKey   = require('../findKey');


describe("#findKey", () => {
  const test = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  it("should return the first key that matches the callback function", () => {
    assert.strictEqual(findKey(test, x => x.stars === 2), "noma");
  });
  it("should return undefined if the callback doesnt find matching key", () => {
    assert.strictEqual(findKey(test,x => x.stars === 4), undefined);
  });
});