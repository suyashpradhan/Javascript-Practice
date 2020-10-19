//! Regex Chracter Sets [Brackets]
re = /gr[ae]y/; // ? Must contain a or e character

re = /[GF]ray/ // ? Must Contain Capital G or F Character

re = /[^GF]ray/ // ? Exclude G or F

re = /[A-Z]ray/ // ?  Only Uppercase Needed

re = /[a-z]ray/ // ?  Only Lowercase Needed

re = /[A-Z a-z]ray/ // ?  Both Cases Needed

re = /[A-Z a-z 0-9]ray/ // ?  Numeric + Both Cases Needed


//! Regex Chracter Sets [Curly Braces] -- Quantifiers

re = /hel{2}o/; //? Must occur exactly 2 times

re = /hel{2,4}o/; //? Must occur exactly in the range

re = /hel{2,}o/; //? Must Occur minimum 2 times


//String
let str = "hello";


//function to check regex
let checkRegex = ((re, str) => {

    if (re.test(str)) {
        console.log(`Matches ${re.source}`);
    } else {
        console.log(`Doesn't Match ${re.source}`);
    }
})

checkRegex(re, str);