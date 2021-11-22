// Task 1 - sort an array with numbers
console.log('task 1');
const arrayNums = [7,101,3,1,9,11,100,111]
 function sortArray(array) {
    return array.sort(
       (a, b) =>{
           if(a < b){
               return -1;
           }else {
               return 'error';
           }
       }
   );
}
console.log(sortArray(arrayNums));

// Task 2 - filter an array of strings and keep only
// a string, that doesn't contain the word 'test'
console.log('task 2');
 const stringsArray = [
  'one-test', 'cat', 'parrot',
   'banana', 'test-dog', 'dog'
];
 function filterStringsArray(array) {
     return array.filter((str) => !str.includes("test"));
 }
console.log(filterStringsArray(stringsArray))
//console.log(filterStringsArray(stringsArray))
// Task 3 - find sum of numbers in array using .reduce()
console.log('task 3');
 const numsArray = [
   1, 3, 5, 10, 19, 100, 200, 33,
 ];
function sumNumbersInArray(array) {
 return array.reduce((a,b) => a + b ,0)
}
console.log(sumNumbersInArray(numsArray));
// Task 4 - filter items, where a > 5 and extend with
// new field *sum* with value a + b
console.log('task 4');
const arrayItems = [
    {a: 1, b: 3},
    {a: 3, b: 3},
    {a: 6, b: 3},
    {a: 10, b: 10},
    {a: 41, b: 1},
    {a: 0, b: 4}
];
function filterAndExtendArrayItems(array) {
    return array.reduce((acc, item) => {
        if (item.a > 5) {
            acc.push({
                a: item.a,
                b: item.b,
                sum: item.a + item.b,
            })
        }
        return acc;
    }, []);
}
console.log(filterAndExtendArrayItems(arrayItems));
// Task 5 - merge arrays and remove duplicates
console.log('task 5');
 const arNum = [1, 2, 3, 4, 5, 6];
 const arNum2 = [15, 6, 3, 20, 11];
 function mergeArraysWithoutDuplicates(array1, array2) {
     return array1.concat(array2.filter((i) => array1.indexOf(i) < 0))
 }
console.log(mergeArraysWithoutDuplicates(arNum,arNum2));

const stringsArray2 = [
    'one-test', 'cat', 'parrot',
    'banana', 'test-dog', 'dog'
];
 function convertToUppercase(array) {
     return array.map((a) => {
         return a.toUpperCase();
     });}

console.log(convertToUppercase(stringsArray2))
// return array.map((a =>{ return a.toUpperCase()}));