// function inside the function

const app = () => {
  const say = () => {
    console.log("Ram Ram!!");
  };

  const add = (number1, number2) => number1 + number2;
  const mul = (number1, number2) => number1 * number2;

  say();
  console.log(add(2, 3));
  console.log(mul(2, 3));
  console.log("inside app");
};
app();
