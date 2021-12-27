const assert = require('chai').assert;
const eqObjects   = require('../eqObjects');


describe("#eqObjects", () => {
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it("should return  false when the objects don't match", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
  it("should return true if objects match", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it("should return true if objects match", () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
});
