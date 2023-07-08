// aerrow function important for real world
// const sayHappyBirthday = function () {
//     console.log("happy Birthday to you !!!!");
//   };
const sayHappyBirthday = () => {
  console.log("happy Birthday to you !!!!");
};

sayHappyBirthday();

// function add(number1, number2) {
//   return number1 + number2;
// }

// const add = function (number1, number2) {
//   return number1 + number2;
// };

const add = (number1, number2) => {
  return number1 + number2;
};
console.log(add(23, 34));

/* ************function decleration**************** */
function iseven(number) {
  return number % 2 === 0;
}
console.log(iseven(87));

/************************  function expression ****************************************8*/

const iseven1 = function (number) {
  return number % 2 === 0;
};
console.log(iseven1(88));

/************************ aerrow function ****************************************8*/

const iseven2 = (number) => {
  return number % 2 === 0;
};
console.log(iseven2(89));

/************************ aerrow function optimazation ******************************************/
const iseven3 = (number) => number % 2 === 0;

console.log(iseven3(90));
