// 2D arrays is an array inside another array

let arr=[[1,2,3],[4,5,6],[7,8,9]];

// we can access any element by: arrayName[row][column];

console.log(arr[2][1]);     //8
console.log(arr[1][2]);     //6

// iterating through 2D array: normal for loop

for(let row=0;row<arr.length;row++){
    for(let col=0;col<arr[row].length;col++){
        console.log(arr[row][col]);
    }
}

// output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9


// iterating through 2D array: for - of loop

for(let row of arr){
    for(let col of row){
        console.log(col);
    }
}

// output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9