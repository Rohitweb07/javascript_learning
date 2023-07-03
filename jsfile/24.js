// for loop on array
"use strict";
let fruits = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];
let upperfruit = [];
for (let i = 0; i < fruits.length; i++) {
  //   upperfruit[i] = fruits[i].toUpperCase();
  upperfruit.push(fruits[i].toUpperCase());
}
console.log(upperfruit);
