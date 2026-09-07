// we use slice() method, to return a sub array[start index, end index)

let arr=[1,2,3,4,5,6];

let slicedArr=arr.slice(1,4);

console.log(slicedArr);     //[ 2, 3, 4 ]

// slice does not change the original array, it just creates a new copy of sub array