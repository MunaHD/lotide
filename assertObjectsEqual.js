const eqObjects = require('./eqObjects')






const assertObjectsEqual = function (obj1, obj2) {
 
  if (eqObjects(obj1, obj2)) {
    //add JSON.strigify to show the full object (read into JSON more)
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(obj1)} === ${JSON.stringify(obj2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${JSON.stringify(obj1)} !== ${JSON.stringify(obj2)}`)
  }
}



//TEST

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };


// assertObjectsEqual(ab, ba);// true
// assertObjectsEqual(ab, abc); // false
// assertObjectsEqual(cd, dc);// true
// assertObjectsEqual(cd, cd2);// false
