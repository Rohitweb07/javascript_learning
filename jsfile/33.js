// spread opetators in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: "value4",
};

const obj2 = {
  key5: "value5",
  key6: "value6",
};
console.log(obj1);
// let newObjets = [].concat(obj1);

const newObjets = { ...obj1, ...obj2 };
console.log(newObjets);
