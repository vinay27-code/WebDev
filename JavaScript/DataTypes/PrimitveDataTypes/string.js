// String is a primitive data type in JavaScript that represents a sequence of characters. 
// It is used to store and manipulate text. 
// Strings can be created using single quotes, double quotes, or backticks (for template literals).

let singleQuoteString = 'Hello, World!'; // Using single quotes
let doubleQuoteString = "Hello, JavaScript!"; // Using double quotes
let templateLiteralString = `Hello, ${singleQuoteString}`; // Using backticks and template literals

console.log(singleQuoteString);
console.log(doubleQuoteString);
console.log(templateLiteralString);

// Strings can be concatenated using the + operator or template literals.
let firstName = "Vinay";
let lastName = "Machha";
let fullName = firstName + " " + lastName; // Concatenation using +
let fullNameTemplateLiteral = `${firstName} ${lastName}`; // Concatenation using template literals

console.log(fullName);
console.log(fullNameTemplateLiteral);