let str1="Vinay";
let str2='VINAY';

let age=24;

//we use `` to declare string in multiple lines
let str3=`My name is Vinay
Babu Machha.
My age is ${age}`;

console.log(str1);      //Vinay
console.log(str2);      //VINAY
console.log(str3);      //My name is Vinay
                        // Babu Machha.
                        // My age is 24.

                        // length of the string

                        console.log(str1.length);       //5
                        console.log(str2.length);       //5       
                        console.log(str3.length);       //42


                        //printing characters of string
                        for(let i=0;i<str1.length;i++){
                            console.log(str1[i]);
                        }

                        // output:
//                         V
                        // i
                        // n
                        // a
                        // y


                        // String conactenation using +
                        console.log(str1+" "+str2);             //Vinay VINAY


                        // to lowercase
                        str1lowerCase=str1.toLowerCase();
                        console.log(str1lowerCase);                 //vinay

                        // to uppercase
                        str1UpperCase=str1.toUpperCase();
                        console.log(str1UpperCase);                 //VINAY

                        // check if any character or any sequence of characters are present in the string
                        console.log(str1.includes('ina'));          //true



                        // starting index of substring
                        console.log(str3.indexOf("Babu"));      //17 is the starting index

                         // Last index of substring
                         console.log(str3.lastIndexOf("age"));  //33 


                        //  Slice (extract a part of the string) Last index is not included
                        console.log(str1.slice(2,4));       //na

                        //if no end index specified, it prints remaining characters until the last index

                        console.log(str1.slice(2));         //nay

                        // substring() is same as slice(), but substring does not accept negative values

                        console.log(str1.substring(2,4));   //na

                        //comaprison vs substring and splice
                        console.log(str1.substring(-1,2));      //error
                        console.log(str1.slice(-3,-1));          //na


                        // Replace a part of string
                        console.log(str1.replace("ina","INA"));     //VINAy


                        // Remove blank spaces at the start and the end
                        let str4="     vinayBabu   ";
                        console.log(str4);                  //     vinayBabu 
                        console.log(str4.trim());           //vinayBabu


                        // Split a string
                        let str5="Vinay,Babu,Machha";
                        console.log(str5.split(","));       //[ 'Vinay', 'Babu', 'Machha' ]

                        let str6="Vinay Babu Machha";
                        console.log(str6.split(" "));       //[ 'Vinay', 'Babu', 'Machha' ]
