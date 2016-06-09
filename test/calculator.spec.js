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

  it('should sum with two numbers separated by comma', () => {

    checkIO('1,2', 3);

  });

  it('should throw exception if pass undefined', () => {

    checkError(calculator.add.bind(calculator));

  });

  it('should throw exception if pass not well formed string', () => {

    checkError(calculator.add.bind(calculator, 'a1b2c3'));
    checkError(calculator.add.bind(calculator, '1,\n'));

  });

  it('should sum with n numbers', () => {

    checkIO('1,2,10,20', 33);

  });

  it('should sum with n numbers separated by comma and \\n', () => {

    checkIO('1\n2,3', 6);

  });

  function checkIO(input, output) {

    let actual = calculator.add(input);
    expect(actual).to.equal(output);

  }

  function checkError(input) {
    
    expect(input).to.throw(Error, 'Invalid argument');
  
}

});
