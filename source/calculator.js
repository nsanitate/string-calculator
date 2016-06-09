class Calculator {

    add(inputString) {
        if (this.isNotString(inputString))
            this.invalidArgumentError();

        if (inputString.length === 0)
            return 0;

        let {numbersString, separator} = this.splitSeparator(inputString);

        if (this.isNotWellFormed(numbersString, separator))
            this.invalidArgumentError();

        let numbers = this.extractNumbers(numbersString, separator);

        if (this.containsNegativeNumber(numbers)) {
            this.negativesNotAllowedError();
        }

        return this.getTotal(numbers, separator);
    }

    isNotString(inputString) {
        return typeof (inputString) !== 'string';
    }

    isNotWellFormed(numbers, separator) {
        let regexp = new RegExp(`^(-)?\\d+((${separator})(-)?\\d+)*$`);
        return !regexp.test(numbers);
    }

    splitSeparator(inputString) {
        if (!/^\/\/.*\n/.test(inputString))
            return { numbersString: inputString, separator: ',|\n' };

        let [head, ...tail] = inputString.split('\n');
        let separator = this.getSeparator(head.substring(2, head.length));
        return { numbersString: tail.join(), separator };
    }

    getSeparator(separatorString) {
        return separatorString
            .replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
            .replace(/\\\]\\\[/g, '|')
            .replace(/^\\\[/, '')
            .replace(/\\\]$/, '');
    }

    extractNumbers(numbersString, separator) {
        return numbersString.split(new RegExp(separator))
            .map((item) => parseInt(item));
    }

    containsNegativeNumber(numbers) {
        return numbers.some((item) => item < 0);
    }

    getTotal(numbers, separator) {
        return numbers
            .filter((item) => item < 1000)
            .reduce((memo, item) => memo + item);
    }

    invalidArgumentError() {
        throw Error('Invalid argument');
    }

    negativesNotAllowedError() {
        throw Error('Negatives not allowed');
    }
}

module.exports = Calculator;