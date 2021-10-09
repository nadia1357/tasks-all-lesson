// task #1
for (let i = 10; i <= 50;  i = i+2) {
    console.log(i);
};

// task #2
let itsMe = {
    name: "John",
    surname: "Dou",
    age: 40,
    pets: true,
};

//task #3
const array = [
    ' я в Симбирск,',
    ' в трактире.',
    ' с утра',
    'В ту же ночь',
    ' Я остановился',
    ' для закупки', 
    ' что и было поручено Савельичу.',
    ' приехал',
    ' где должен был',
    ' нужных вещей,',
    ' отправился по лавкам.',
    ' пробыть сутки',
    ' Савельич'
];
let result = array[3] + array[7] + array[0] + array[8] + array[11] + array[5] + array[9] + array[6] + array[4] + array[1] + array[12] + array[2] + array[10];
console.log(result);

// task #4
const wholeName = (firstName, lastName) => {
const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
};
wholeName("John", "Dou");

// task #5
let i = 21;
while (i <= 67) {
    console.log(i);
    i = i + 2;
};
