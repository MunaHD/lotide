const assert = require('chai').assert;
const assertEqual = require('../assertEqual');





describe("#assertEqual", () => {
  it("should return true  for 'Bootcamp', 'Bootcamp'", () => {
    assert.strictEqual(assertEqual("Bootcamp", "Bootcamp"), true);
  });
  it("should return false for ['happy', 'Happy']", () => {
    assert.strictEqual(assertEqual(["happy", "Happy"]), false); 
  });
});
