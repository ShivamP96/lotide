
const assert = require('chai').assert;
const tail = require('../tail');
const words = [1,2,3,4];

describe('#tail', () => {
  it('should return [2, 3, 4]', () => {
    assert.strictEqual(tail(words).length, 3)
  });
})

