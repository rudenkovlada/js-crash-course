const nums = [10, 20, 30, 40, 50, 60];
const newNums = nums.map((arrayElement, index) => {
    return arrayElement + 1;
});
console.log(newNums)

const books = [{
    name: 'Преступление и наказание',
    genre: 'проза',
}, {
    name: 'Война и мир',
    genre: 'проза'
}, {
    name: 'Маленький принц',
    genre: 'проза',
}];

const newBooks = books.reduce((acc, currBooks, index) => {
    if (currBooks.genre === 'проза') {
        acc.push({
            ...currBooks,
            numberIn: '1' + index,
        });
    }
    return acc;
}, []);
console.log(newBooks);


const quote = ['Ничто', 'так', 'не', 'отпугивает', 'ночные', 'кошмары.','Как','горячий','шоколад','и','крепкие','объятия.'];
const sentence = quote.join(' ');

console.log('Joined quote - ', sentence);

const str = 'test-error';

console.log('Includes ', str.includes('cat'));
console.log('Includes in array ', quote.includes('шоколад'));