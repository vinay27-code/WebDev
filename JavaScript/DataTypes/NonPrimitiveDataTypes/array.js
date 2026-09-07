// array is a non-primitive data type in JavaScript that represents a collection of values.
// It is ordered and can contain elements of different types.

let arr = [1, 2, 3, 4, 5, "hello", true, null, undefined];

console.log(arr); // Output: [1, 2, 3, 4, 5, "hello", true, null, undefined]

// You can access elements of an array using their index.
console.log(arr[0]); // Output: 1
console.log(arr[2]); // Output: 3

// You can modify elements of an array using their index.
arr[0] = 10;
console.log(arr); // Output: [10, 2, 3, 4, 5, "hello", true, null, undefined]

// Arrays have a length property that indicates the number of elements in the array.
console.log(arr.length); // Output: 9

console.log(typeof(arr)); // object

// Type of array is object