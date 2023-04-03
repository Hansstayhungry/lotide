const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  } else {
    console.log(`Assertation Passed: ${arr1} === ${arr2}`)
  }
}


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