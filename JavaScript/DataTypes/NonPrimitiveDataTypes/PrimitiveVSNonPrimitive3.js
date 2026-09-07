//behaviour of 'const' in case of objects

//case 1

const obj1={
    name:"Vinay",
    age:24
};

obj1.name="Machha"; //Here, obj1 holds the address. We are changing the xontents of object, 
// So it allows us to change the contents even tho it is declared with const keyword

console.log(obj1.name);     // Machha

//case 2

obj1={
    name:"Babu",
    age:22
};

console.log(obj1);      //error

//since obj1 holds the memory address, now when we are trying to create a new object, you want it to point to another address,
//  which is not allowed since obj1 is declared with const keyword

// Simply, contents of object can be changed but not the address.