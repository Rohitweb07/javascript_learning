// default parameter

// function add(number1, number2) {
//   console.log(number1 + number2);
// }
// add(3);

function add(number1, number2) {
  if (number2 == undefined) {
    number2 = 1;
  }
  console.log(number1 + number2);
}
add(3); // old method

function add2(number1, number2 = 9) {
  // if (number2 == undefined) {
  //   number2 = 1;
  // }
  console.log(number1 + number2);
}
add2(3); // old method
