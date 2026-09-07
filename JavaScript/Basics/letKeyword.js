// we use let keyword to declare a variable in JavaScript. The let keyword was introduced in ES6 (ECMAScript 2015) and provides block scope for variables, which means that the variable is only accessible within the block in which it is defined. This is different from the var keyword, which has function scope and can lead to unexpected behavior in certain situations.

let name="Vinay";

let age=24;

let gender="Male";

let address="Tempe"

console.log(name,age,gender,address);

//let keyowrd also allows us to declare variables that can be reassigned later in the code. This means that we can change the value of a variable declared with let at any point in our program.

age=25;

console.log(age);

console.log(typeof(name)); // Output: string
console.log(typeof(age)); // Output: number