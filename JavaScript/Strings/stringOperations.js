let s1=`Vinay 
is a good boy`;

// length of the string
console.log(s1.length);         //20

// Traversing string

for(let i=0;i<s1.length;i++){
    console.log(s1[i]);
}

// Vinay 
// is a good boy

// String concatenation
let fName="Vinay Babu";
let lName="Machha";

console.log("Full name is: "+fName+ " "+lName);  
// Full name is: Vinay Babu Machha

// string characters to lowercase
console.log(fName.toLowerCase());
// vinay babu

// string characters to uppercase
console.log(fName.toUpperCase());
// VINAY BABU

// check if any character/s is included in the string
console.log(fName.includes('nay'));     
// true

// check substring 

let s2='Vinay is a good guy is';
console.log(s2.indexOf('is'));      //returns first index of the substring, else -1 if not present
// 6
console.log(s2.indexOf('babu'));
// -1

// to any substring is present multiple times, and we want to return the last index 
console.log(s2.lastIndexOf('is'));
// 20

// Extract Substring from a string
let s3='Vinay Babu is gonna get a job in BofA';
// Method 1: slice(startIndex, endIndex)
console.log(s3.slice(6,10));        // Babu
console.log(s3.slice(6));           // Babu is gonna get a job in BofA
console.log(s3.slice(-4))           // BofA

// Method 2: substring(startIndex, endIndex). Does not support negative indices
console.log(s3.substring(6,10));    // Babu
console.log(s3.substring(6));       // Babu is gonna get a job in BofA
console.log(s3.substring(-4));      // Vinay Babu is gonna get a job in BofA

// Replace a substring from the string
let s4='Vinay Babu is gonna get a job in BofA';
console.log(s4.replace('BofA','JPMC'));
// Vinay Babu is gonna get a job in JPMC
let s5='Vinay Babu is gonna get a job in BofA, Vinay Babu is a good guy';
console.log(s5.replaceAll('Vinay Babu','Vinay'));
// Vinay is gonna get a job in BofA, Vinay is a good guy


// Remove unwanted spaces from the string using trim()
let s6="   Vinay Babu Machha        ";
console.log(s6.trim());
// Vinay Babu Machha

// Split data in string
let s7="Vinay, Machha, Babu";
console.log(s7.split(','));
// [ 'Vinay', ' Machha', ' Babu' ]
