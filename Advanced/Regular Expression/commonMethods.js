//exec() --> Matches the pattern, return in array format or null
let re = /ab+c/;
console.log(re.exec('abc'));


//test() --> Boolean Function
console.log(re.test('abc'));


//match() --> Same as exec() but in opposite direction
let str = "abc";
let found = str.match(re);
console.log(found);


//search() --> Return index of matched input
let strOne = "Hello World abc";
let foundOne = strOne.search(re);
console.log(foundOne);


//Replace() --> Return new string with replaced input
let reg = /hello world/i;
let strThree = "hello";
let newString = strThree.replace(reg, "New");
console.log(newString);