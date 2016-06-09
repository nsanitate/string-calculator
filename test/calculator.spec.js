const expect = require('chai').expect;
const Calculator = require('../source/calculator');

describe('Calculator', () => {

  let calculator;

  beforeEach(() => {

    calculator = new Calculator();

  });

  it('should return zero with empty string', () => {

    let actual = calculator.add('');

    expect(actual).to.equal(0);

  });

  it('should sum with just one number', () => {

    let actual = calculator.add('1');

    expect(actual).to.equal(1);

  });

  it('should sum with two numbers', () => {

    let actual = calculator.add('1,2');

    expect(actual).to.equal(3);

  });

});
