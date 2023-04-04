const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(index);
        index++;
      } else {
        results[letter] = [index]; //use [index] instead of index.
        index++;
      }
    } else {
      index++;
    }
  }
  // logic to update results here
  return results;
};


// TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]);