class Calculator {

  add(numbers) {

    if (typeof (numbers) !== 'string') return this.invalidArgumentException();

    if (numbers.length === 0) {
      return 0;
    }

    let separator = new RegExp(',|\n');

    let total = numbers.split(separator)
      .map((item) => parseInt(item))
      .reduce((memo, item) => memo + item);

    if (isNaN(total)) return this.invalidArgumentException();

    return total;

  }

  invalidArgumentException() {
    throw Error('Invalid argument')
  }

}

module.exports = Calculator;