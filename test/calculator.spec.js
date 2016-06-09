const expect = require('chai').expect;

describe('Calculator', () => {

  it('should return zero with empty string', () => {

    let calculator = new Calculator();
    let actual = calculator.add('');

    expect(actual).to.equal(0);

  });

});

class Calculator {

  add() {
    return 0;
  };

}