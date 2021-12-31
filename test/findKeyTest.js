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
  it("should return the key of the passed in value", () => {
    assert.strictEqual(findKey(test, x => x.stars === 2), "noma");
  });
  it("should return undefined if the value passed isn't assigned to key", () => {
    assert.strictEqual(findKey(test,x => x.stars === 4), undefined);
  });
});