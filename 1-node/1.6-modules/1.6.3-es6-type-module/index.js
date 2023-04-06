import { sum, substract } from './modules/sum-substract.js';
import * as Operations from './modules/multipli-divide.js';

function main() {

    const operando_one = 56;
    const operando_dos = 4; 

    const resultSum = sum(operando_one, operando_dos);
    const resultSubstract = substract(operando_one, operando_dos);
    const resultMultiply = Operations.multiply(operando_one, operando_dos)
    const resultDivide = Operations.divide(operando_one, operando_dos);

    console.log('resultSum: ', resultSum);
    console.log('resultSubstract: ', resultSubstract);
    console.log('resultMultiply: ', resultMultiply);
    console.log('resultDivide: ', resultDivide);

}

main();