// important array method

/*Foreach method take callback function as parameter
● Map method
● Filter
● Reduce
● Sort
● Find
● Every
● Some
● Fill method
● Splice method */

// const arr = [4, 2, 6, 8, 5, 7];

// function mulByNumber(number, index) {
//   console.log(`multipy if index ${index}`);
//   console.log(`${number}*2 ${number * 2}`);
// }

// mulByNumber(arr[0], 0);
// mulByNumber(arr[1], 1);
// mulByNumber(arr[2], 2);

// for (let i = 0; i < arr.length; i++) {
//   mulByNumber(arr[i], i);
// }

// arr.forEach(mulByNumber);

// arr.forEach(function (number, index) {
//   console.log(`multipy if index ${index}`);
//   console.log(`${number}*2 ${number * 2}`);
// });

const details = [
  { firstName: "Person1", age: 20, gender: "male" },
  { firstName: "Person2", age: 21, gender: "male" },
  { firstName: "Person3", age: 22, gender: "male" },
  { firstName: "Person4", age: 23, gender: "male" },
];

function printdetails(details) {
  //   for (let detail of details) {
  console.log(`firstName ${details.firstName}`);
  //   }
}

// printdetails(details);
// details.forEach(printdetails);
details.forEach(printdetails);

details.forEach((user) => {
  console.log(`${user.firstName}`);
});
