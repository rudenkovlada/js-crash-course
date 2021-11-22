// Task 1 - find sum of all number in 2 arrays
// 343 + 396
const arrayNums1 = [7,101,3,1,9,11,100,111] // 343
const arrayNums2 = [90,101,3,1,69,11,10,111] // 396
function sumNumsInArrays(array1, array2) {
    return  sumInArr(array1) + sumInArr(array2)
}
function sumInArr(array){
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
        console.log()
    }
    return result;
}
console.log(sumNumsInArrays(arrayNums1,arrayNums2));

// Task 2 - Using a 'for' loop print all even
// numbers up to and including n, as a comma separated string.
// Don’t include 0
// const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"
const n = 20;
function printEvenNumbers(n) {
    let evenNum = [];
    for (let i = 2; i <= n; i++){
        if(i % 2 === 0){
            evenNum.push(i);
        }
    }
    return evenNum.join(', ');
}
console.log(printEvenNumbers(n));

// Task 3 - Using a 'for' loop output the elements in reverse order
 const arr = [
   43, "what", 9, true, "cannot", false, "be", 3, true
 ];
 function reverseArrayItems(array) {
     let sentence = '';
    for (let i = array.length - 1; i >= 0; i--) {
        sentence += array[i] + ' ';
    }
    return sentence;
}
console.log(reverseArrayItems(arr))
console.log('task3');

// Task 4 - Add up each element in the same position and
// create a new array containing the sum of each pair.
// Assume both arrays are of the same length.
 let array1   = [4, 6, 7];
 let array2  = [8, 1, 9];
// Example output:
// [12, 7, 16]
function sumNumsSamePosition(array1, array2) {
      let sumArr = [];
      for (let i = 0; i < array1.length; i++){
          sumArr.push(array1[i] + array2[i])
    }
      return sumArr;
}
console.log(sumNumsSamePosition(array1,array2));

// Task 5 - find sum of all number in array using 'while' loop
const array43 = [4, 6, 7, 10];
function sumNums(array) {
    let n = 0;
    let sum = 0;
    while (n < array.length){
        sum = sum + array[n];
        n++;
    }
    return sum;
}
console.log(sumNums(array43))

// Task 6 - filter array of string using 'for' or 'while' loop
// and keep only elements where length > 4 and without the word 'error'
 const strArr = ['error01', 'in a galaxy', 'start-error', 'far far', 'away', '0994-error'];

 function filterArrayWithStrings(array) {
     let filtered = [];
     for(let i = 0; i < array.length; i++){
         if(array[i].length>4 && !array[i].includes('error')){
             filtered.push(array[i])
         }
     }
   return filtered;
 }
console.log(filterArrayWithStrings(strArr));

// Task 7 - given a number n calculate the factorial of
// the number using 'for' or 'while' loop
// n! => 1*2*3*4*5
function factorial(n) {
    let res = 1;
    let i = 1;
    while(i<=n){
        res *= i;
        i++;
    }
    return res;
}
console.log(factorial(5))