//TODO: Error Handling In Javascript

//! Reference Error
try {

    myFunction();
} catch (e) {
    //Get Error Name
    console.log(e.name);

    //Get Error Message
    console.log(e.message);

    //Boolean Value of which type of error
    console.log(e instanceof ReferenceError);

} finally {

    console.log("Finally Running...")
}