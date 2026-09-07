//case 1

let obj1={
    name:"Vinay",
    age:24
};

let obj2=obj1;      //obj2 points to the same address avlue of obj1

console.log(obj1==obj2);    //it compares the addresses of obj1 and obj2. Both are same, so it return TRUE

//case 2

let obj3={              //even tho contents of obj1 and obj3 are smae, the addresses are different.
    name:"Vinay",
    age:24
};

console.log(obj1==obj3);        //it compares the addresses of obj1 and obj3. Both are not same, so it return FALSE