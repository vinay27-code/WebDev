// Function is a non-primitive data type in JavaScript that allows you to define reusable blocks of code. 
// Functions can take parameters, perform operations, and return values. 
// They are a fundamental building block of JavaScript programming.

function f1(){
    console.log("This is f1 function");
}

f1(); // Output: This is f1 function

// since we call a function as a data type, we can assign it to a variable and call it later.
let f2 = function(){
    console.log("This is f2 function");
}

let f3 = function greet(){
    console.log("Hello from f3 function");
}

f2(); // Output: This is f2 function
f3(); // Output: Hello from f3 function

console.log(f1); // Output: [Function: f1]
console.log(f2); // Output: [Function: f2]
console.log(f3); // Output: [Function: greet]


console.log(typeof(f1));    // function
console.log(typeof(f2));    // function
console.log(typeof(f3));    // function