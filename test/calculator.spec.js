const expect = require('chai').expect;
const Calculator = require('../source/calculator');

describe('Calculator', () => {

  let calculator;

  beforeEach(() => {

    calculator = new Calculator();

  });

  it('should return zero with empty string', () => {

    checkIO('', 0);

  });

  it('should sum with just one number', () => {

    checkIO('1', 1);

  });

  it('should sum with two numbers', () => {

    checkIO('1,2', 3);

  });

  it('should throw exception if pass undefined', () => {

    expect(calculator.add).to.throw('Invalid argument');

  });

  // ^(\d(,\d)?)?$
  // xit('should throw exception if pass not well formed string', () => {
  //   expect(calculator.add.bind(calculator, 'a1b2c3')).to.throw('Invalid argument');
  // });

  it('should sum with n numbers', () => {

    checkIO('1,2,10,20', 33);

  });

  function checkIO(input, output) {

    let actual = calculator.add(input);
    expect(actual).to.equal(output);

  }

});
