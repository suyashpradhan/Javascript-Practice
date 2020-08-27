let teamWinning = [
    'Liverpool',
    'Manchester City',
    'Tottenham',
    'Arsenal',
    'Manchester United',
    'Chelsea',
    'Stoke City'
]

const [numberOne, numberTwo, numberThree, numberFour, ...others] = teamWinning;
console.log(...others);


//Destructuring In Objects
let team = {
    name: 'Liverpool',
    winner: 'Premier League',
    country: 'England',
    slogan: 'You will never walk alone'
}

//With Basic Destructuring
const {
    name,
    winner,
    ...other
} = team

console.log(name);


//With remaining properties
console.log(other);


//With changing key name with other variable
const {
    slogan: teamSlogan
} = team
console.log(teamSlogan);


//Nested Destructuring
let books = [{
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    price: '4$'
}, {
    title: 'Deep Work',
    author: 'New Calport',
    price: '5$'
}]

const [...all] = books;
console.log(all);


//Param Destructuring In Arrays
const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
]

let responseFunction = ([protocol, status, contentType]) => {
    console.log(`Status:${status}`);
}


//Param Destructuring In Objects
let request = {
    title: "HTTP/1.1",
    status: "200 OK",
    contentType: "application/json"
}

let requestFunction = ({
    title,
}) => {
    console.log(`All:${title}`);
}

requestFunction(request);