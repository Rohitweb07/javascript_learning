//Null, undefined, BigInt, typeof
let a = 7;
let b = "7";
console.log(typeof (a + b));
console.log(a + typeof a);
console.log(b + typeof b);

let new_a = a + "";
console.log(new_a + typeof new_a);

let new_b = +b;
console.log(new_b + typeof new_b);

console.log(+new_a + new_b);

let abc;
console.log(abc);
console.log(typeof abc);

let abd = null;
console.log(abd);
console.log(typeof abd); // this is bug in the js  which never be solve or never debug this say that this is the object type to the null;

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//bigInt
let myNumber = 12n;
let samemyNumber = BigInt(12);
console.log(myNumber);
console.log(samemyNumber);
console.log(myNumber + samemyNumber);
