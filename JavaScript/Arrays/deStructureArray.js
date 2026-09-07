let arr=[1,2,3,4,5,6,7];

// if we want to access first 3 elements without index values, we can destructure the array as follows:

const [first,second,third]=[...arr];

console.log(first,second,third);        //1 2 3

// after 3 elemnts, if we want to group the remaining elements, we use rest operator, syntax same as spread operator

let arr2=[1,2,3,4,5,6,7];

const[first1, second1, third1, ...remaing]=[...arr2];       

console.log(remaing);           //[ 4, 5, 6, 7 ]

// Left hand: rest operator
// Right hand: spread operator