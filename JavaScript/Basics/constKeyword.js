// const keyword is used to declare a variable that cannot be reassigned. It creates a read-only reference to a value. However, it does not make the value itself immutable. For example, if the value is an object or an array, the contents of the object or array can still be modified.

const name="Vinay";

console.log(name);

name="Vinay Machha"; // This will throw an error because we cannot reassign a value to a const variable.

console.log(name);  //error: Assignment to constant variable.