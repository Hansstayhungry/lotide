const tail = function(words) {
  let result = words.slice(1);
  return result;
};


const assertEqual = function(result, expected) {
  if (result === expected) {
    console.log(`Assertion Passed: ${result} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${result} !== ${expected}`);
  }
};

module.exports = tail;