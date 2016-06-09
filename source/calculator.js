class Calculator {

  add(numbers) {

    if (typeof (numbers) !== 'string') {
      throw Error('Invalid argument');
    }

    if (numbers.length === 0) {
      return 0;
    }

    return numbers.split(',')
      .map((item) => parseInt(item))
      .reduce((memo, item) => memo + item);
  }

}

module.exports = Calculator;