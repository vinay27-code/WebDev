// Objects store the data in key-value pairs. 
// The key is a string (also called a property name), and the value can be any data type, including other objects. 
// Objects are used to represent real-world entities and their attributes.

let person={
    name:"Vinay",
    age:24,
    gender:"Male"
}

console.log(person);

// We can access the values of an object using dot notation or bracket notation.
console.log(person.name); // Output: Vinay
console.log(person["age"]); // Output: 24

// We can also add new properties to an object or modify existing ones.

person.address="Tempe";
person.age=25;

console.log(person);

console.log(typeof(person));    // object