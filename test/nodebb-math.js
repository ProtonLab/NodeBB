var assert = require('assert');
var math   = require('./../dist/lib/math.js')
describe('Math', function() {
  describe('#add(a, b)', function() {
    it('should return 0 when giving 0 and 0 as arguments', function() {
      assert.equal(math.add(0, 0), 0);
    });
    it('should return 2 when giving 1 and 1 as arguments', function() {
      assert.equal(math.add(1, 1), 2);
    });
    it('should return 3 when giving 1 and 2 as arguments', function() {
      assert.equal(math.add(1, 2), 3);
    });
    it('should return 4 when giving 2 and 2 as arguments', function() {
      assert.equal(math.add(2, 2), 4);
    });
  });
  describe('#sub(a, b)', function() {
    it('should return 0 when giving 0 and 0 as arguments', function() {
      assert.equal(math.subtract(0, 0), 0);
    });
    it('should return 0 when giving 1 and 1 as arguments', function() {
      assert.equal(math.subtract(1, 1), 0);
    });
    it('should return -1 when giving 0 and 1 as arguments', function() {
      assert.equal(math.subtract(0, 1), -1);
    });
  });
});
