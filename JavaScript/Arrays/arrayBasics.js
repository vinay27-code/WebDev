let marks=[10,20,30,40,50];

console.log(marks);

// [ 10, 20, 30, 40, 50 ]

// Size of the array
console.log(marks.length);
// 5

// Accessing array elements using index
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

// 10
// 20
// 30
// 40
// 50

// Accessing array elements using for loop
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

// 10
// 20
// 30
// 40
// 50

// Arrays in Js can contain different data types unlike other programming languages

let student1=["Vinay", 24, "Male", true];
console.log(student1);

// [ 'Vinay', 24, 'Male', true ]

console.log(typeof student1);
// object
console.log(typeof(student1));
// object

// Push and pop operations(Inserting and deleting elements from the end of an array)
let arr1=[1,2,3,4,5];
console.log(arr1);
// [1,2,3,4,5]

arr1.push(6);
console.log(arr1);
// [ 1, 2, 3, 4, 5, 6 ]

arr1.push(7,8,9);
console.log(arr1);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

arr1.pop();
console.log(arr1);
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// Unshift and Shift operations(Inserting and deleting elements from the start of an array)
let arr2=[1,2,3,4,5];
console.log(arr2);
// [1,2,3,4,5]

arr2.unshift(0);
console.log(arr2);
// [ 0, 1, 2, 3, 4, 5 ]

arr2.unshift(0.5);
console.log(arr2);
// [ 0.5, 0, 1, 2, 3, 4, 5 ]

arr2.shift();
console.log(arr2);
// [ 0, 1, 2, 3, 4, 5 ]

// Print array elements using for-of loop
let arr3=[1,2,3,4,5,6,7,8,9,10];

for(let x of arr3){
    console.log(x);
}
// 1,2,3,4,5,6,7,8,9,10

// slice(), extracts elements from the array as copies, no changes on the original array. [startIndex, endindex)
let arr4=[1,2,3,4,5,6,7,8,9,10];
let slicedArr4=arr4.slice(2,6);
console.log(slicedArr4);
// [ 3, 4, 5, 6 ]
console.log(arr4);
// [1,2,3,4,5,6,7,8,9,10]

// Splice(), extracts the elements from the array, it works on the original array, splice(startIndex, Number of elements to be removed)
let arr5=[1,2,3,4,5,6,7,8,9,10];
let splicedArr5=arr5.splice(2,6);
console.log(splicedArr5);
// [ 3, 4, 5, 6, 7, 8 ]
console.log(arr5);
// [ 1, 2, 9, 10 ]

// note: splice() is also used to insert elements at the given index from which the elements are to be removed
// splice(startIndex, Number of elements to be removed, newElement1, newElement2,........ )
let arr6=[1,2,3,4,5,6,7,8,9,10];
let splicedArr6=arr6.splice(2,6,11,12,13,14,15);
console.log(splicedArr6);
// [ 3, 4, 5, 6, 7, 8 ]
console.log(arr6);
// [ 1, 2, 11, 12, 13, 14, 15, 9, 10 ]

// It is recommended to use splice to insert or remove elements from an array from any position

let arr7=[1,2,3,4,5,6,7,8,9,10];

// Lets remove 5 from the array
arr7.splice(4,1);
console.log(arr7);
// [1,2,3,4,6,7,8,9,10]

// Lets insert 5 at index 4
arr7.splice(4,0,5);
console.log(arr7);
// [1,2,3,4,5,6,7,8,9,10]

// concatenating arrays using concat(). It returns a new array
let arr8=[1,2,3,4,5];
let arr9=[6,7,8,9,10];

let concatArr1=arr8.concat(arr9);
console.log(concatArr1);
// [1,2,3,4,5,6,7,8,9,10]

// we can also concatenate multiple arrays
let arr10=[11,12,13,14,15];
let concatArr2=arr8.concat(arr9,arr10);
console.log(concatArr2);
// // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// Alternatively we can also use spread operator to concatenate arrays

let arr11=[...arr8,...arr9,...arr10];
console.log(arr11);
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// Note: spread operator does not work on concatenating 2d arrays

// Destructuring an array

let newArr=[1,2,3,4,5,6,7,8,9,10];

// assume we want to print first 2 elements

let [first, second]=newArr;

console.log(first,second);
// 1 2

// if we want to store remaining array elements, we can use rest operator

let [one, two, ...remaining]=newArr;
console.log(one, two, remaining);
// 1 2 [3,4,5,6,7,8,9,10]

// left=rest
// right=spread

// Join operator: joins all the elements of the array using any differentiator and returns it as string
let names=['Vinay','Babu','Machha'];

console.log(names.join(','));
// Vinay,Babu,Machha

// indexof: returns 1st index of an element in an array

console.log(names.indexOf('Babu'));
// 1

// if there's multiple same elements in an array, and we want to find the last index, then we use
let newNames=['Vinay','Babu','Machha','Vinay'];
console.log(newNames.lastIndexOf('Vinay'));
// 3

// includes: returns true if an element is present in an array
console.log(newNames.includes('Vinay'));
// true