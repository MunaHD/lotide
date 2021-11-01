const assertEqual = require('./assertEqual');


const head = function (array) {

  /// return (condition) if true then return value at array index 0 else return undefined
  return array[0] ? array[0] : undefined;
};

module.exports = head;
