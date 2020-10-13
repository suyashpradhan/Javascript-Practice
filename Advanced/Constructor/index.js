//Constructor
function Myself(name, designation, dob) {
    this.name = name;
    this.designation = designation;
    this.age = new Date(dob); //---> Creating new Date Object
    this.getAge = function () {

        //Difference between present date and date which will be provided
        const diff = Date.now() - this.age.getTime();

        //Creating new age from the difference
        const myAge = new Date(diff);

        //Getting Absolute age 
        return Math.abs(myAge.getUTCFullYear() - 1970);
    }
}

let personOne = new Myself('Suyash', 'Frontend Developer', '10-13-1996');
console.log(personOne.getAge());