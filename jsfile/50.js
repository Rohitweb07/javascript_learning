// map method important method for react framework take callback function as parameter
// map method work like forech but there is the different between foreach and map is that map method always return somethig in the form of array so we neeed some variable to store them exmp======>

const arr = [3, 2, 5, 6, 7];

const res = arr.map((number) => {
  return number * number * number;
});
console.log(res);

function solve(number) {
  return number * number * number;
}

const res1 = arr.map(solve);
console.log(res1);
