// push pop array ====> is work from the last of the array
// shift unshift method in array
let fruits = ["mango", "apple", "graps"];
console.log(fruits);

fruits.push("bananas");
console.log(fruits);

fruits.pop();
console.log(fruits);

// we can also store the vlue from the pop
let poopedfruits = fruits.pop();
console.log(poopedfruits);
console.log(fruits);

// unshift and shift =====> workfor begning of the array

let students = ["Student1", "Student2", "Student3", "Student4", "Student5"];
console.log(students);

students.unshift("student0");
console.log(students);

let shiftstudent = students.shift();
console.log(students);
console.log(shiftstudent);

// ************************important**********************
// push and pop is more fast than shift and unshift
