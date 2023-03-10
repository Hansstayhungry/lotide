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


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs1"); // ensure second element is "Labs"