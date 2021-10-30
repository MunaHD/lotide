// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const eqArrays = function (arr1, arr2){
  if (arr1.every((val, index) => val === arr2[index])){
    return true;
  } else {
  
    return false;
  }
}
const eqObjects = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let value = 0; value < array1.length; value += 1) {
    if ((Array.isArray(array1[value]) || Array.isArray(array2[value])) && eqArrays(array1[value], array2[value]) === false) {
      return false;
    } else if (Array.isArray(array1[value]) || Array.isArray(array2[value])) {
      eqArrays(array1[value], array2[value]);
    } else if (array1[value] !== array2[value]) {
      return false;
    }
  }
  return true;
};




// const eqObjects = function(obj1, obj2) {

//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }

//   for (let key in obj1) {
//     if (Array.isArray(obj1[key]) &&  Array.isArray(obj2[key])) { 
      
//       if (eqArrays(obj1[key], obj2[key]) === false) {
//         return false;
//       }

//     } else if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
  
// }



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

eqObjects(ab, ba);

// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };eqO
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);
