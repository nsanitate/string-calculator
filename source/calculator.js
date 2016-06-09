class Calculator {

  add(numbers) {

    if (typeof (numbers) !== 'string')
      this.invalidArgumentException();

    if (numbers.length === 0) 
      return 0;

    let separator = new RegExp(',|\n');

    if (numbers.indexOf('//') === 0) {
      
      let parts = numbers.split('\n')[0];
        separator = parts.replace(/^\/\//, '').replace('\n', '');

        numbers = parts.slice(1);

        console.log(numbers);
    }
    
    let total = numbers.split(separator)
      .map((item) => parseInt(item))
      .reduce((memo, item) => memo + item);

    if (isNaN(total))
      this.invalidArgumentException();

    return total;

  }

  invalidArgumentException() {
    throw Error('Invalid argument')
  }

}

module.exports = Calculator;