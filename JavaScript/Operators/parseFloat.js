// parseFloat is used to parse a float value from any data until it sees a number

let str="1000.001px";

let num=parseFloat(str);

console.log(num);                   // 1000.001

console.log(typeof num)             //Number