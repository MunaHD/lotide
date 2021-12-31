
const without = function(source, itemRem) {
  // ** return without making a variable
  //filter array element and only return those
  //that are not part of the other array
  return source.filter(element => !itemRem.includes(element));

};

module.exports = without;

