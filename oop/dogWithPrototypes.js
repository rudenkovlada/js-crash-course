function Dog(name,color){
    this.name = name;
    this.color = color;
}
Dog.prototype.walking = function (){
    console.log('I’m walking twice a day.')
}
Dog.prototype.sound = function (){
    console.log('Woof woof!')
}
const Lucky = new Dog('Lucky','white')
console.log(Lucky);
Lucky.walking();
Lucky.sound();