class Calculator {

  add(numbers) {

    if (numbers.length === 0) {
      return 0;
    } else {
      return parseInt(numbers);
    }

  };

}

module.exports = Calculator;