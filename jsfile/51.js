// filter method
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const iseven = (number) => {
  return number % 2 === 0;
};
const res = arr.filter(iseven);
console.log(res);

const isOdd = (number) => {
  return number % 2 !== 0;
};
const res1 = arr.filter(isOdd);
console.log(res1);
