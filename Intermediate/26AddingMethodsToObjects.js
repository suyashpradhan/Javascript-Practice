const cars = {
    wheels: function (wheels) {
        return `Wheels Are ` + wheels;
    },
    speed: function (speed) {
        return `Speed Is  ` + speed;
    }
}

console.log(cars.wheels(4));
console.log(cars.speed('0-200 in 30 secs'));

//Using Arrow Function
const bikes = {
    bikeInfo(bikeName, bikePrice) {
        return `Bike : ` + bikeName + ` Price : ` + bikePrice
    },
    bikeLicense: (license) => {
        return `License Number ` + license;
    }
}

console.log(bikes.bikeInfo('Ducati Monster', '125KUSD'));
console.log(bikes.bikeLicense('LICDHU7890'));