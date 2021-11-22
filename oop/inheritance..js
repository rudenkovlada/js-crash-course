function Animal(name) {
    this.name = name;

    this.getName = () => this.name;
    this.owner = () => console.log("My owner Vlada");
}

const Lucky = new Animal("Lucky");
const Sasha = new Animal("Sasha");

Lucky.owner();
Sasha.owner();
console.log(Lucky.getName())
console.log(typeof Animal);
console.log(Sasha instanceof Animal);