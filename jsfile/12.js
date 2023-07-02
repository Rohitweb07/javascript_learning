// && and or operator

let age = 18;
let proof = false;
let drink = "kingfisher";
if (age >= 18 && proof) {
  console.log(`you are eligible for ${drink}`);
} else {
  console.log(`you are not eligible`);
}

// in && (and) operator if the both condition is true than the whole true and execute further Syntax

if (age >= 18 || proof) {
  console.log(`you are eligible for the ${drink}`);
} else {
  console.log(`you are not eligible`);
}

// in || (or) operator if the any one of  condition is true than the whole true and execute further Syntax
