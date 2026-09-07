let a=20;
let b=10;

console.log(a>b);
console.log(a>=b);
console.log(a<b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);

console.log(a===b);     //first check the type and then the value

// output
// true
// true
// false
// false
// false
// true
// false

// Exceptions

console.log("10"==10);  //output:true. It internally converts string into number, now 10 ==10. So, it return true

console.log(null==undefined);   //output=true. Remember, null is loosely equal to undefined, not to anyone

console.log(null==0);   //output: false

// when working with comparison operator, nulls is loosely equal to 0
console.log(null==0);
console.log(null>=0);
console.log(null<=0);
console.log(null>0);
console.log(null<0);
console.log(null!=0);

// output
// false
// true
// true
// false
// false
// true