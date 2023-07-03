// for of loop

let fruits = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];
for (let fruit of fruits) {
  console.log(fruit);
}

for (let fruit in fruits) {
  // in let fruit give index of the item
  console.log(fruits[fruit]);
}
