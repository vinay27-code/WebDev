// Symbol is a primitive data type in JavaScript that represents a unique identifier.
// It is often used as a key for object properties to ensure they are unique and not accidentally overwritten.

let sym1 = Symbol("symbol1");
let sym2 = Symbol("symbol2");

console.log(sym1); // Output: Symbol(symbol1)
console.log(sym2); // Output: Symbol(symbol2)

// Symbols are unique, even if they have the same description.
console.log(sym1 === sym2); // Output: false

console.log(typeof(sym1)); // Output: symbol