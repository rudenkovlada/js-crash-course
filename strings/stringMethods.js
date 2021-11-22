const sentence = 'Joe waited for the train, but the train was late';

const word = 'Joe';
const hasWord = sentence.includes(word); // true
const hasntWord = sentence.includes('Mary'); // false

console.log(`The word ${word} ${hasWord ? 'is' : 'is not'} in the sentence`);

const text = 'Every child likes an ice cream.';
const newArr = text.split('');
console.log(newArr);
console.log(text.indexOf('child'));

const text1 = 'Cats hate water.';
const text2 = text1.slice(4,9);
console.log(text2);

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found)

const text3 = 'I love my new pets.';
const regex3 = /new/g;
const text4 = text3.replace(regex3, '');
console.log(text4);