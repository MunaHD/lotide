const findKey = function(object, callback) {

  // the function findKey which takes in an object and a callback.
  // It should scan the object
  for (let key in object) {
    let subObj = object[key];
    //return the first key for which
    // the callback returns a truthy value. If no key is found,
    // then it should return undefined.
    subObj.find(callback(subObj))
    // if (callback(subObj)) {
    //   return key;
    //}
  }
};



module.exports = findkey;
//personal test 
//const findKey = (obj, callback) => Object.keys(obj).find(key => cb(obj[key]));
