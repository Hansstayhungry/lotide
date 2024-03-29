const assert = require('chai').assert;
const middle = require('../middle.js');


describe("#middle", () => {
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [1, 2] for []", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});