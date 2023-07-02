"use strict";
// String method

let firstName = "Rohit";
let lastName = "Kushwaha";
console.log(firstName);
console.log(lastName);

let fullName = "    Rohit Kushwaha rohit kushwaha ";
console.log(fullName);

console.log(firstName + lastName);

console.log(fullName.trim()); // trim function are used to remove whitespace;
console.log(fullName.length);
fullName = fullName.trim();
console.log(fullName.length);

let newfullName = fullName.toUpperCase(); // this toUppercase() function are used to convert all character in lower to uppercase;
console.log(newfullName);

let newfullName1 = fullName.toLowerCase(); // this toLowercase() function are used to convert all charcter in lowercase
console.log(newfullName1);

console.log(fullName.slice(0, 3)); // slice (0,3) represent that we cut the nane from 0 to 2 examlple rohit on 0-->r and going towords the roh 0 ,1,2 index its not inculde the index number 3
let newvar = "mohitSharma";
console.log(newvar.toLocaleUpperCase());
let newvar2 = "nainaverma";
console.log(newvar2.toLocaleLowerCase());

console.log(fullName.lastIndexOf("h"));

/* ***************************method of String*******************************

1.trim()
2. toLocaleLowerCase();
3 toLocaleUpperCase();
4 slice(startindex,endindex);
5. lastIndexOf() ;
6.firsrIndexOf() */
