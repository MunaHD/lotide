const letterPositions = function(sentence) {
  //create empty object
  let results = {};
  //loop over letters in the string
  for (let i = 0; i < sentence.length; i ++) {
    //condition to see if its a letter
    if ((/[a-zA-Z]/).test(sentence[i])) {
      // add lett as key and count how many times it appears
      results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i];
    }
  }
  //return results
  return results;
};


//log the value to the screen
console.log(letterPositions("lighthouse in the house"));




assertArraysEqual(letterPositions("hello").e, [1]);