class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        console.log(this.name +  " is running");
    }

    sound() {
        console.log("Meow! Meow!");
    }

    getColor() {
        console.log(this.color);
    }
}
class myCat extends Cat{
    constructor(name,color) {
        super(name,color);
    }
    run() {
        console.log(this.name + ' is too lazy to run')
    }
}
const Sasha = new myCat('Sasha','Grey');
Sasha.sound();
Sasha.run();
Sasha.getColor();