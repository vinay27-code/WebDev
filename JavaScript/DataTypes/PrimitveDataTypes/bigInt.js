// bigInt is a primitive data type in JavaScript that represents whole numbers larger than 2^53 - 1, which is the maximum safe integer in JavaScript. 
// It allows you to work with arbitrarily large integers.

// You can create a BigInt by appending 'n' to the end of an integer literal or by using the BigInt() constructor.

let bigInt1 = 1234567890123456789012345678901234567890n;

console.log(bigInt1); // Output: 1234567890123456789012345678901234567890n

// You can also create a BigInt using the BigInt() constructor.
let bigInt2 = BigInt("1234567890123456789012345678901234567890");

console.log(bigInt2); // Output: 1234567890123456789012345678901234567890n

// BigInts can be used in mathematical operations, but they cannot be mixed with regular numbers.
let bigIntSum = bigInt1 + bigInt2;

console.log("Sum of BigInts:", bigIntSum); // Output: Sum of BigInts: 2469135780246913578024691357802469135780n

console.log(typeof bigInt1); // Output: bigint
console.log(typeof bigInt2); // Output: bigint
console.log(typeof bigIntSum); // Output: bigint


console.log(typeof(bigInt1)); // Output: bigint