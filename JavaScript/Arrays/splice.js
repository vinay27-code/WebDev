// we use splice() method to remove a sub-array[start index, number of elements to be deleted] from an original array. 

let arr=[1,2,3,4,5,6];

let splicedArr=arr.splice(1,4);

console.log(splicedArr);    //[ 2, 3, 4, 5 ]
console.log(arr);           //[ 1, 6 ]

// splice directly works on the original array. So splicedArr is removed from original array.

// we can also simulataneously insert elements into the original array while removing the subarray as follows:
// syntax: arrayName.splice(startIndex, elementCount, newValue1, newValue2, newValue3, .......);

let arr2=[10,20,30,40,50];

let splicedArr2=arr2.splice(2,3,25,35,45);

console.log(splicedArr2);           //[ 30, 40, 50 ]

console.log(arr2);                  //[ 10, 20, 25, 35, 45 ]


// we can also use splice(), just to insert elements into the array

let arr3=[20,30,40,50,60];

// suppose i want to add elements 33, 36, 39 starting from index 2

let splicedArr3=arr3.splice(2,0,33,36,39);

console.log(splicedArr3);               //[]

console.log(arr3);                      

// // [
//   20, 30, 33, 36,
//   39, 40, 50, 60
// ]