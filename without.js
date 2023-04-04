const without = function(source, itemsToRemove) {
  let filteredArr = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element)){
      filteredArr.push(element);
    };
  }
  return filteredArr;
}


// // const assertArraysEqual = require('./assertArraysEqual');
// // TEST CODE
// // assertArrayEqual([1, 2, 3], [1, 2, 3]);
// without([1, 2, 3], [1]);
// without(["1", "2", "3"], [1, 2, "3"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);