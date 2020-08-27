let testArr = [2, 12, 13, 16, 56, 76, 45, 78];
console.log(testArr.fill(4, 1, 3));
console.log(testArr);


let testArr2 = [2, 13, 21, 34, 43, 78, 98];
let result = testArr2.filter((e) => {
    return e % 2 === 0;
})

console.log(result);