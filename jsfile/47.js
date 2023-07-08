// call back fuction in java script
function func2(name) {
  console.log(`func2 call inside this`);
  console.log(name);
}

function myfunction(callback) {
  console.log(`this is my function`);
  console.log(func2);
  callback("rohit");
}

myfunction(func2);

function func3(num) {
  console.log(`func3 value ${num}`);
}

function myfunction2(callback1) {
  console.log(`this is the main function `);
  callback1(4);
}

const ans = myfunction2(func3);
console.log(ans);
