// destructuring of objects
let obj1 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// let { key1, key2 } = obj1;
// console.log(key2);

let { key1: myvar1, key2: myvar2, ...resProp } = obj1;
console.log(resProp);
