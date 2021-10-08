// task #1
let myCity = "NewYork";
let myCountry = "USA";
let people = 10000000;
let stadium = true;
console.log("my city: ", myCity, '\n', "my country: ", myCountry, '\n', "people: ", people, '\n', "stadium: ", stadium);

// task #2
let a = 40;
let b = 70;
let rectSquare = a * b;
console.log("rectangle square: ", rectSquare, " sq cm");

// task #3
let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;
let distance = time * (speedOfFirst + speedOfSecond);
console.log("distance between the cities: ", distance, " km");

// task #4
const randomNumber = Math.floor(Math.random() * 100);
if(randomNumber < 20) {
    console.log("randomNumber is less than 20");
} else if(randomNumber > 50) {
    console.log("randomNumber is more than 50");
} else {
    console.log("randomNumber is more than 20 and less than 50");
};

// task #5
const randomNewNumber = Math.floor(Math.random() * 100);
switch(true){
    case randomNewNumber < 20: 
        console.log("randomNewNumber is less than 20");
        break;
    case randomNewNumber > 50:
        console.log("randomNewNumber is more than 50");
        break;
    default:
        console.log("randomNewNumber is more than 20 and less than 50");
        break;
};

