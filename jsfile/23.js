//Clone array & spread operator
let fruits1 = ["apple", "orange", "graps", "banana"];
let morefruit = ["mango", "kiwi"];
// let fruits2 = [].concat(fruits1); // method 1 for create copy
//let fruits2 = fruits1.slice(0);// method 2
// let fruits2 = [...fruits1]; // spread operator

// add more item rather than fruit1
// let fruits2 = [...fruits1, ...morefruit];
// let fruits2 = fruits1.slice(0).concat(morefruit);
// let fruits2 = [].concat(fruits1, morefruit);
let fruits2 = [].concat(fruits1, ["item1", "item2"]);

console.log(fruits1);
console.log(fruits2);

fruits1.push("papaya");
console.log(fruits1);
console.log(fruits2);
