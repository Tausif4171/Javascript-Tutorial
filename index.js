// 1. Ways to print in JavaScript
console.log("Hello world");
//alert("Hello world");
document.write("Hello world");

// 2. Javascript console API
console.log("Hello", 3 + 2, "Star");
console.warn("This is warning");
console.error("This is an error");

// 3. Javascript variables
// What are variables? - Containers to store data values
var num1 = 20;
var num2 = 10;
// document.write(num1+num2);
console.log(num1 + num2);

//4. Data types in JavaScript
// Numbers
var num3 = 4171;
var num4 = 2.5;

// String
var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects
var marks = {
    Tausif: 99,
    Rehan: 95,
    Faizan: 90.99
}
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a, b);

// undefined
// var und = undefined;
var und;
console.log(und);

// null
var n = null;
console.log(n);

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

// Array
var arr = [1, 2, "Tausif", 4, 5];
console.log(arr);

// Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 20;
// console.log("The value of a+b is: ",a+b);
// console.log("The value of a-b is: ",a-b);
// console.log("The value of a*b is: ",a*b);
// console.log("The value of a/b is: ",a/b);

// Assignment Operators
var c = b;
// c += 2;
// c -= 2; // c = c -2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
var x = 10;
var y = 5;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

//Logical Operators

//Logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//Logical not
// console.log(!true);
// console.log(!false);

// Function in JavaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// DRY Principle - Do not repeat yourself
c1 = avg(6, 4);
c2 = avg(10, 20);
console.log(c1, c2);

// Conditionals in JavaScript
/*
var age = 18;
// Single if statement
// if (age >= 18) {
//     console.log("You are eligible for vote");
// }

// if - else statement
// if(age>=18){
//     console.log("You are eligible for vote");
// }
// else{
//     console.log("You are not eligible for vote");
// }

// if - else Ladder
// var i = 20
// if (i == 10) {
//     console.log("i is 10");
// }
// else if (i == 15) {
//     console.log("i is 15");
// }
// else if (i == 20) {
//     console.log("i is 20");
// }
// else {
//     console.log("i is not present");
// }
// console.log("End of ladder");
*/

//Loops in JavaScript
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
for(var i=0; i<arr.length; i++){
    if(i==2){
        // break;
        continue;
    }
    console.log(arr[i]);
}

// arr.forEach(function(element){
//     console.log(element);
// })

// const ac = 0;
// ac++;
// ac = ac+1;

// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);












