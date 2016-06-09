class Calculator {

  add(numbers) {

    if (numbers.length === 0) {
      return 0;
    } else {

      return numbers.split(',')
        .map((item)=> parseInt(item))
        .reduce((memo, item) => memo + item);
    }

  };

}

module.exports = Calculator;