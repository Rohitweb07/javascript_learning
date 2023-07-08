// sort method for array
const arr = [50, 1000, 300, 20, 500];

const res = arr.sort();
console.log(res);

const personName = ["rohit", "mohit", "kumar", "abc"];
const res2 = personName.sort();
console.log(res2);

const expectres = arr.sort((a, b) => {
  return a - b;
});
console.log(expectres);
