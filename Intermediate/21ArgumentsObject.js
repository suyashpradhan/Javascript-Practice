function sum() {

    const args = [...arguments];
    return args.reduce((total, curVal) => {
        return total + curVal;
    })
}

console.log(sum(1, 2, 3, 4, 5));