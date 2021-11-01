const countLetters = function(string) {
  //create empty object
  let results = {};
  //loop over letters in the string
  for (const letter of string) {
    //condition to see if its a letter
    if ((/[a-zA-Z]/).test(letter)) {
      // add lett as key and count how many times it appears
      results[letter] ? results[letter] += 1 : results[letter] = 1;
    }
  }
  //return results
  return results;
};


module.exports = countLetters;
//log the value to the screen
// console.log(countLetters("lighthouse in the house"));
