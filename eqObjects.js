const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  if (key1.length === key2.length) {
    for (let key of key1) {
      if (object1[key] === object2[key]) {
        continue;
      } else if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      }
    } return false;
  } else return false;
};



// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

module.exports = eqObjects;
