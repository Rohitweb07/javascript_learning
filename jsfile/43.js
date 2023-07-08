// block scope vs function scope
// let and const are block scope
// var is the function scope

function app() {
  if (true) {
    let value = "Rohit";
    console.log(value);
  }
  console.log(value);
}
app();

function app1() {
  if (true) {
    var value = "Rohit";
    console.log(value);
  }
  console.log(value);
}
app1();
