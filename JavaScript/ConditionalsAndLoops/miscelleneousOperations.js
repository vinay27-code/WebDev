let num=10.92341;

// case 1

let toFixedNum=num.toFixed(2);      //displays only fixed given numbers after decimal point.

console.log(toFixedNum);
console.log(typeof toFixedNum);

// 10.92
// string

// case 2

let toPrecisionNum=num.toPrecision(2);      //rounds off the value according to the given number

console.log(toPrecisionNum);    // 11

console.log(typeof toPrecisionNum); // string

// case 3

console.log(num/0);     //Infinity

console.log(-num/0);     //-Infinity

console.log(0/0);       // NaN(Not a Number)