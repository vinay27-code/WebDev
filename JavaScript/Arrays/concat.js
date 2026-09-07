// we can concatenate multiple arrays using concat() method

let arr1=[1,2,3,4];

let arr2=[5,6,7,8];

let concatArr=arr1.concat(arr2);

console.log(concatArr);

// output
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]

// case 2: multiple arrays

let arr3=[9,10,11,12];

let concatArr2=arr1.concat(arr2,arr3);

console.log(concatArr2);

// [
//    1,  2, 3, 4,  5,
//    6,  7, 8, 9, 10,
//   11, 12
// ]