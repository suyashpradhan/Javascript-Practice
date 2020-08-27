let words = ['Suyash', 'Soham', 'Pratik'];
let result = words.map((e) => {
    return e.toUpperCase().split('').join('.');
})

console.log(result);