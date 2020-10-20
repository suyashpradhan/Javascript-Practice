//! Chracter Classes
re = /\w/; //Match Alphanumeric Character

re = /\W/; //?  Matches Special Characters

re = /\d/; // ? Matches Digit

re = /\D/; //? Non Digit

re = /\s/; //? Looks for whitespace

re = /\S/; // ?Non White Space

re = /Netherlands\b/ //Check for exact word

//String
let str = "Hello World, Welcome to Nether Netherlands";

const result = re.exec(str);
console.log(result)


//function to check regex
let checkRegex = ((re, str) => {

    if (re.test(str)) {
        console.log(`Matches ${re.source}`);
    } else {
        console.log(`Doesn't Match ${re.source}`);
    }
})

checkRegex(re, str);