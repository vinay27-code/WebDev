// AND: only true if both are true
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

// true
// false
// false
// false

// exception:
console.log(true&&"Vinay"); //output: Vinay. 
// if 1st condition is true, then return whatever be the 2nd condition. here 2nd is: "vinay".

// OR: only false if both are false
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);
console.log(true||"Vinay");     //output: true. return true is atleast one is true.

// true
// true
// true
// false

// NOT; reverse the value
console.log(!true);
console.log(!false);

// false
// true