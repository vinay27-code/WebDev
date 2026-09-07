// since the type of an array is object, we can change the contents of an array with the help of another arrray

let arr1=[1,2,3,4,5,6,7,8,9,10];        //here, arr1 stores the address of the array, suppose address=1000

let arr2=arr1;      //now arr2 also stores the same address 1000. so, both are actually pointing to one array

arr2[3]=10;

console.log(arr1);

// output
// [
//   1, 2, 3, 10,  5,
//   6, 7, 8,  9, 10
// ]