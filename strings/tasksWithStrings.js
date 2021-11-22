// Tasks 1 -  convert array of strings
// from lowercase to uppercase
console.log('task 1')
const input = ["some string"];
function convertToUppercase(array) {
    return array.map(function (e) {
        return e.toUpperCase()
    });
}
console.log(convertToUppercase(input))
console.log('task 2')
// Task 2 - should calculate amount of provided letter in
// the provided string
// ('letter', 't') => 2
const input2 = "should calculate 'a' letter";

function calculateLetters(string, letter) {
    let q = string.match(new RegExp(letter, 'g'));
  return q.length;
}
console.log(calculateLetters(input2,'e'));
// Task 3 - replace numbers with spaces
// in the provided string
// 'I9like5JS' => 'I like JS'
console.log('task 3')
let ter = 'I9like5JS';
function replaceNumbers(string) {
    return string.replace(new RegExp(/[0-9]/g, 'g'), ' ');
}
console.log(replaceNumbers(ter))
console.log('task 4');
// Task 4 - sort strings in array
const input33 = [11, 2, 101, 3, 4, 5, 1, 6];
function sortArray(array) {
 return array.sort(function (a,b){
     return a-b;
 } );
}
console.log(sortArray(input33));
console.log('task 5');
// Task 5 - return a new string that should contain
// a letter taken by index argument from every string in array
// if index is bigger than string length - add space instead
let array43 = ["osmos", "uterque", "water", "crop",
        "&", "swap", "cat", "brew", "Esmeralda"]
//index - 1
// result "start wars"
function buildStringUsingIndex(array, index) {
    let res = '';
    array.forEach((a)=>{
        res += (a.length < index+1) ? ' ' : a.charAt(index)
    })
    return res;
}
console.log(buildStringUsingIndex(array43,1))
// Tasks 6 - check, if string is palindrome
// and return "The string is palindrome"
// or "The string is not palindrome"
const input44 = "danna";
function palindromeValidator(str) {
    if (str === str.split('').reverse().join('')){
        return "The string is palindrome"
    } else {
        return "The string is not palindrome"
    }
}
console.log(palindromeValidator(input44))