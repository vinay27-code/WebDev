// It is not recommended to use var keyword. It is prone for developing a lot of bugs.

// case 1

console.log(a);         //output: undefined
var a=10;

// Here we are trying to access 'a', even before initializing it. Instead of giving error, it returns undefined, which might create bugs

//case 2

if(true){
    var b=20;
}

console.log(b);     //output: 20

// Here, we are able to access "b" outside of it's scope, which is not a good programming practice.


//IT IS RECOMMENDED TO USE let INSTEAD OF var.