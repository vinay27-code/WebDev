// Let's get to knwo about the differences between Primitive and Non-primitive data types

// ---------------------------------------------------------

// Primitive data types are immutable. They share unique copies of data. COPY by value

let a=10;       //a points to a memory block with value 10

let b=a;        //since we initialized b with the value of a, it creates a separate block of memory with the value 10.

//so, a and b points to different addresses in the memory.

//now

a=25;       //now a points to a new memory location with the value 25, and it's previous value is unassigned by a. 
// Now that previous memory block is pointed by no variable. It simply exists.


// ---------------------------------------------------------


let obj1={                      //obj1 points to a block of memory containing name and age parameters
    name:"Vinay",
    age:24
};

console.log(obj1.name, obj1.age);           //Vinay 24

let obj2=obj1;

// Non-Primitive data types follow copy by reference. So obj2 will point to the same memory location as pointed by obj1.

//if we change any value using obj2, will reflect in obj1 since it is copy by reference
obj2.name="machha";
obj2.age=25;

console.log(obj1.name, obj1.age);           //machha 25
