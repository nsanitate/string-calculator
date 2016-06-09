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
        checkError(calculator.add.bind(calculator), 'Invalid argument');
    });

    it('should throw exception if pass not well formed string', () => {
        checkError(calculator.add.bind(calculator, 'a1b2c3'), 'Invalid argument');
        checkError(calculator.add.bind(calculator, '1,\n'), 'Invalid argument');
    });

    it('should sum with n numbers', () => {
        checkIO('1,2,10,20', 33);
    });

    it('should sum with n numbers separated by comma and \\n', () => {
        checkIO('1\n2,3', 6);
    });

    it('should define delimiter', () => {
        checkIO('//;\n1;2', 3);
    });

    it('should throw exception if pass negative values', () => {
        checkError(calculator.add.bind(calculator, '1,-4'), "Negatives not allowed");
    });

    it('should ignore value grather then 1000', () => {
        checkIO('1000,2', 2);
    });

    it('should support advanced delimiters', () => {
        checkIO('//***\n1***2', 3);
        checkIO('//[*][%]\n1*2%3', 6);
    });

    function checkIO(input, output) {
        let actual = calculator.add(input);
        expect(actual).to.equal(output);
    }

    function checkError(input, errorMessage) {
        expect(input).to.throw(Error, errorMessage);
    }

});
