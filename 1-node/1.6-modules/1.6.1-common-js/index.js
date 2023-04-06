const operations = require('./functions');

function main() {

    const operando_one = 56;
    const operando_dos = 4; 

    const resultSum = operations.sum(operando_one, operando_dos);
    const resultSubstract = operations.substract(operando_one, operando_dos);
    const resultMultiply = operations.multiply(operando_one, operando_dos);
    const resultDivide = operations.divideNumbers(operando_one, operando_dos);

    console.log('resultSum: ', resultSum);
    console.log('resultSubstract: ', resultSubstract);
    console.log('resultMultiply: ', resultMultiply);
    console.log('resultDivide: ', resultDivide);

}

main();