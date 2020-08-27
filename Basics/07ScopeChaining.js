let master = 'Main Master';

console.log(master);

function functionOne() {
    let master = "FunctionOne Is Master";
    console.log("Line No 7", master);

    function functionTwo() {
        console.log("Line No 13", master);
    }
    functionTwo();
}

functionOne();