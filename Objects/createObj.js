//Obj 1
const Dog = {
    name: 'Lucky',
    age: 4,
    weight: 5.3,
    color: 'cream-white',
    favoriteToy: 'bear'
};
const asMomCalls = 'asMomCalls';
Dog[asMomCalls] = 'Lalik';
console.log(Dog);
Dog.joinFamily = null;
if (Dog.joinFamily !== 2020){
    Dog.joinFamily = 2020
}
console.log(Dog);
//Obj 2
const Cat = {
    name: 'Sunshine',
    asDadCalls: 'Sasha',
    age: 5,
    weight: 3.6,
    color: 'gray',
    favoriteToy: null
};
Cat.joinFamily = 2020;
if(Cat.joinFamily !== 2016){
    Cat.joinFamily = 2016
}
console.log(Cat);
//Obj 3
const person = {};
person.gender = 'male';
person.age = 35;
person.name = 'Ivan';

let res = Object.entries(person);
console.log(res);
//Obj 4
const movie ={
    title: 'The Holiday',
    releaseDate: 2006,
    genre: 'romantic comedy',
    directedBy: 'Nancy Meyers'
}
let romanticMovie = Object.keys(movie);
console.log(romanticMovie);
//Obj 5
const dogCharacteristics = {
    breed: 'Pomeranian Spitz',
    lifeExpectancy: '12 to 16 years',
    height: '6 to 7 inches',
    weight: '3 to 7 pounds'
}
const Lalik = Object.values(dogCharacteristics);
console.log(Lalik);
//Obj 6
const meal = {
    salad: 'Caprese',
    meatDish: 'Chicken Tabaka',
    fishDish: 'Baked Dorado',
    sauces: 'Garlic Sauce',
    dessert: 'Honey Cake'
}
const drink = {
    tea: ' Black tea',
    coffee: 'Latte',
    wine: 'Rose'
}
const menu = Object.assign(meal,drink);
console.log(menu);
//Obj 7
const trip ={
    country: 'Austria',
    cite: 'Vienna',
    dateTrip: '10.01.2022',
}
trip.members = 2;
console.log(trip);
//Obj 8
const cosmeticBag = {
    BbCream: 'Dr.Jart',
    blush: 'YSL',
    mascara: 'Cabare',
    eyeShadow: 'Tarte',
}
console.log(cosmeticBag);
//Obj 9
const booksList = {
    book1: 'Алиса в Стране чудес',
    book2: 'Гарри Поттер и кубок огня',
    book3: 'Дюна'
}
const authorList = {
    author1: 'Льюис Кэрролл',
    author2: 'Джоан Роулинг',
    author3: 'Фрэнк Герберт'
}
const niceBooks = Object.assign(booksList,authorList);
console.log(niceBooks);