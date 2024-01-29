const assert = require('assert');
const calculator = require('../lab2_mocha_test/app/calculator')

//Adding two numbers
describe('Validating Add function', function () {
    it('should return the sum of the numbers', function () {
      assert.equal(calculator.add(5,2), 7);
    });
});
describe('Validating Add function', function () {
  it('should return the sum of the numbers', function () {
    assert.equal(calculator.add(5,2), 8);
  });
});

//Substracting two numbers 
describe('Validating sub function', function () {
  it('should return the sub of the numbers', function () {
    assert.equal(calculator.sub(5,2), 3);
  });
});
describe('Validating sub function', function () {
  it('should return the sub of the numbers', function () {
    assert.equal(calculator.sub(5,2), 5);
  });
});

//multiplying two numbers
describe('Validating mul function', function () {
  it('should return the multuplication of the numbers', function () {
    assert.equal(calculator.mul(5,2), 10);
  });
});
describe('Validating mul function', function () {
  it('should return the multuplication of the numbers', function () {
    assert.equal(calculator.mul(5,2), 12);
  });
});

//dividing two numbers 
describe('Validating div function', function () {
  it('should return the division of the numbers', function () {
    assert.equal(calculator.div(10,2), 5);
  });
});
describe('Validating div function', function () {
  it('should return the division of the numbers', function () {
    assert.equal(calculator.div(10,2), 2);
  });
});

