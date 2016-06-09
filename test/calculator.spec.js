const expect = require('chai').expect;
const Calculator = require('../source/calculator');

describe('Calculator', () => {

  it('should return zero with empty string', () => {

    let calculator = new Calculator();
    let actual = calculator.add('');

    expect(actual).to.equal(0);

  });

  it('should sum with just one number', () => {

    let calculator = new Calculator();
    let actual = calculator.add('1');

    expect(actual).to.equal(1);

  });


});
