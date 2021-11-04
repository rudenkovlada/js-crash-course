//primitive data types
let numOne = 12;
let numTwo = 10;
let num = 2;
let empty1 = null;
let empty2; //undefined
const firstName = 'Nana';
const lastName = 'Ivanova';
let city1;
city1 = 'Kyiv';
let isTrue = true;
let isFalse = false;
// object
let fruits = ['apple','orange','pineapple','lemon'];
let person = {
    name: 'Anna',
    gender: 'female',
    age: 30
};
console.log(typeof(numOne));
console.log(typeof(numTwo));
console.log(typeof(empty1));
console.log(typeof(fruits));

//Assignment operators
let addition = numOne += numTwo;
console.log(addition);
let subtraction = numOne -= numTwo;
console.log(subtraction);
let multiplication = numOne *= numOne;
console.log(multiplication);
let division = numOne /= num;
console.log(division);

// Comparison operators
console.log(isTrue > isFalse);
console.log(numOne < numTwo);
console.log(numTwo >= num);
console.log(isTrue != num);
console.log(empty1 === city1);