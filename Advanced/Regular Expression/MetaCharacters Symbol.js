//! Regex Metacharacters
re = /^h/i; // ?(Carrot Sign) Starts with h (case sensitive must provide flag)

re = /d$/; // ?(Dollar Sing) Ends With d (case sensitive must provide flag);

re = /^hello world$/i // * Must begin with hello and should ends with world

re = /h.llo/i // ! Wildcard should match only one character

re = /h*llo/i // ! Wildcard should match any character 0 or more times

re = /gra?y?/i; // ? Optional Character

re = /gra?y?\s/ // ? Optional Character with including one character to be compulsory so that we need to include blackslash



//String
let str = "Hello World";
let strOne = "gray"; // ? For Option Characters



//exec() --> To log out values
let found = re.exec(str);
console.log(found);




//function to check regex
let checkRegex = ((re, str) => {

    if (re.test(str)) {
        console.log(`Matches ${re.source}`);
    } else {
        console.log(`Doesn't Match ${re.source}`);
    }
})

checkRegex(re, str);