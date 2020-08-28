const role = "host";
const person = "John Doe";

const role2 = "director";
const person2 = "Jane Doe";

const userRoles = {
    [role]: person,
    [role2]: person2,
};

console.log(userRoles);

//Computed Properties in which Function takes the object
const addProp = (obj, k, v) => {
    return {
        ...obj,
        [k]: v,
    };
};

console.log(addProp(userRoles, "language", "JavaScript"));