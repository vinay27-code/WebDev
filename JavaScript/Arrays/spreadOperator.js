// we can also concatenate multiple arrays using spread operator

let str1=[1,2,3,4,5];

let str2=[6,7,8,9,10];

let str3=[11,12,13,14,15];

let concatArr=[...str1,...str2,...str3];

console.log(concatArr);

// [
//    1,  2,  3,  4,  5,  6,
//    7,  8,  9, 10, 11, 12,
//   13, 14, 15
// ]