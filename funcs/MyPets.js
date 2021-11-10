class MyPets {
    constructor(name,type) {
        this.name = name;
        this.type = type;
    }
    sayHello() {
        return "Hello! My name is " + this.name + " and I am a " + this.type;
    }
}

const Dog = new MyPets('Lalik','dog');
console.log(Dog.sayHello());

const Cat = new MyPets('Sasha','cat');
console.log(Cat.sayHello());