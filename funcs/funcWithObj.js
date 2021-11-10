const favoriteAuthor = {
    author: 'Joël Dicker',
    genre: 'Thriller',
    countBooks: 5
};
function extendObj(obj,field,value) {
    const newObj = Object.assign({}, obj);
    newObj[field] = value;

    return newObj;
}

console.log(extendObj(favoriteAuthor,'book1','The Truth About the Harry Quebert Affair'));
