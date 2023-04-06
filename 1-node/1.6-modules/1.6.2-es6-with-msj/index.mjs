import { sum, substract } from './modules/sum-substract.js';
import * as Operations from './modules/multipli-divide.js';

function main() {
    let numero1 = 10;
    let numero2 = 40;

    const resultSum = sum(numero1, numero2);
    const resultSubs = substract(numero1, numero2);
    const resultMult = Operations.multiply(numero1, numero2);
    const resultDiv = Operations.divideNumbers(numero1, numero2);

    console.log('suma: ', resultSum);
    console.log('resta: ', resultSubs);
    console.log('multiplicacion: ', resultMult);
    console.log('division: ', resultDiv);

}

main();