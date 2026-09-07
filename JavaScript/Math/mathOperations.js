// Only positive

let a=-12.22;
console.log(Math.abs(a));       // 12.22

// log10
console.log(Math.LN10);         // 2.302585092994046

// log2 base e

console.log(Math.LOG2E);        // 1.4426950408889634

//floor value: lower bound

console.log(Math.floor(10.7));  // 10

console.log(Math.floor(-10.7));  // -11

//ceil value: upper bound

console.log(Math.ceil(10.7));       // 11

console.log(Math.ceil(-10.7));      // -10

// generating random number between [0,1)

console.log(Math.random());     //0.62926372154805
console.log(Math.random());     //0.6598226751273542
console.log(Math.random());     //0.0673481265056336

// if we want to generate any random numbers between [0,10) without any decimal points

console.log(Math.floor(Math.random()*10));      //1
console.log(Math.floor(Math.random()*10));      //9
console.log(Math.floor(Math.random()*10));      //1
console.log(Math.floor(Math.random()*10));      //2
console.log(Math.floor(Math.random()*10));      //2


// if we want to generate any random numbers between [0,100) without any decimal points

console.log(Math.floor(Math.random()*100));     //1
console.log(Math.floor(Math.random()*100));     //32
console.log(Math.floor(Math.random()*100));     //71    
console.log(Math.floor(Math.random()*100));     //45
console.log(Math.floor(Math.random()*100));     //9

// if we want to generate any random numbers between [0,5] without any decimal points

console.log(Math.floor(Math.random()*5)+1);     //5
console.log(Math.floor(Math.random()*5)+1);     //2
console.log(Math.floor(Math.random()*5)+1);     //3
console.log(Math.floor(Math.random()*5)+1);     //5
console.log(Math.floor(Math.random()*5)+1);     //2

// Formula: Math.floor(Math.random()*(max-min+1)+min);

//from 13 to 22
console.log(Math.floor(Math.random()*(22-13+1)+13));    //19
console.log(Math.floor(Math.random()*(22-13+1)+13));    //18
console.log(Math.floor(Math.random()*(22-13+1)+13));    //22
console.log(Math.floor(Math.random()*(22-13+1)+13));    //21
console.log(Math.floor(Math.random()*(22-13+1)+13));    //13