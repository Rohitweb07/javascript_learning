// *******************functions************************
"use strict";

function sayHappyBirthday() {
  console.log("Happy Birthday to You........");
}

sayHappyBirthday();

function sum() {
  console.log(3 + 7);
}
sum();

function multiply(number1, number2, number3) {
  return number1 * number2 * number3;
}
let result = multiply(2, 3, 4);
console.log(result);

function divide(number1, number2) {
  console.log(number1 / number2);
}

console.log(divide(10, 2));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isEven(4));
console.log(isEven(45));

function solve(str) {
  console.log(str.slice(0, 1));
}
solve("rohit");

function firstcharcters(name) {
  return name[0];
}
console.log(firstcharcters("Kushwaha"));

function arrIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(arrIndex([2, 3, 4, 5, 7, 8], 4));
