// let array = 0;

const head = function(array) {
  let actual = array[0];
  return actual;
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(head([5,6,7]), 5);

assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
