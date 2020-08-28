let demoFunction = (arr) => {

    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = number.reduce((total, curV) => {
        return total + curV;
    })
    let avg = sum / arr.length;

    return {
        maximum: max,
        min,
        sum,
        avg
    }
}

const number = [2, 4, 4.7, 8, 9.2, 6, 5.8, 2.1];
const result = demoFunction(number);
console.log(result);