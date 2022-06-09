/* 
1. Write a program that will convert integer decimal number to binary and vice versa
*/


// from binary to decimal
let binary = "1110";
let decimal = parseInt(binary, 2);
console.log("the Decimal of 1110 is " + decimal)

// from decimal to binary

let binary2 = decimal.toString(2);
console.log("the binary of " + decimal + " is " + binary2 + "\n");







/* 
2. Write a Program that will find out maximum number from any nested array.
Array example is [2,3,[5,6,[7,8],9]]
*/

let arr = [2, 3, [5, 6, [7, 8], 9]];

const arr2 = arr.flat(2)

// finding maximum value
const max = Math.max(...arr2)

// finding minimum value
const min = Math.min(...arr2)

console.log("the maximum number in this nested array is " + max)
console.log("the minimum number in this nested array is " + min + "\n")







/* 
3.Write a program to calculate the frequency of words in a string.
 */


let myString = "Hello there , This is an example sentence for testing my code.";

let string = myString.toLocaleUpperCase()

string = string.replace(".", "");
string = string.replace(",", "");
string = string.replace("  ", " ");

string = string.split(" ");



let frequency = [];

string.forEach((i) => {
    if (!frequency[i]) {
        frequency[i] = 0;
    }
    frequency[i] = frequency[i] + 1;
});
console.log(myString);
console.table(frequency);
