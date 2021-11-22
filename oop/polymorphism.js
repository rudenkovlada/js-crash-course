class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(' ');
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    sound() {
        console.log('Meow meow!');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    sound() {
        return console.log('Woof woof!');
    }
}

const Sasha = new Cat('Sasha');
Sasha.sound();
const Lalik = new Dog('Lalik');
Lalik.sound();

