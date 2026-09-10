// 2D array is defined as an array inside another array

let arr=[[1,2,3],[4,5,6],[7,8,9]];

console.log(arr.length);
// 3

// Access array elements
console.log(arr[0]);
// [ 1, 2, 3 ]
console.log(arr[1]);
// [ 4, 5, 6 ]
console.log(arr[2]);
// [ 7, 8, 9 ]
console.log(arr[0][0]);
// 1
console.log(arr[0][1]);
// 2
console.log(arr[0][2]);
// 3

// Array traversal using for loop
let arr1=[[1,2,3],[4,5,6],[7,8,9]];

// Regular for loop
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1[i].length;j++){
        console.log(arr1[i][j]);
    }
}
// 1 2 3 4 5 6 7 8 9

// for of loop
for(let x of arr1){
    for(let y of x){
        console.log(y);
    }
}