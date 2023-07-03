// premitive vs reference type datatype

let num1 = 8;
let num2 = num1;
console.log(num1);
console.log(num2);
num1++;
console.log("after increment the value");
console.log(num1);
console.log(num2);
// all the primitive type of variable store in the stack ,and in the stack different variable have differnt value.

let array1 = ["item1", "item2", "item3"];
let array2 = array1;
console.log(array1);
console.log(array2);

array1.push("item4");
console.log("after push the value in  array1");
console.log(array1);
console.log(array2);

// the the type of array is thereference type of array
// and the array are stored in to the heap and the stack only contain the addersses of the array1
// as array2==array1 in this array2 has the same address of the arrray1 so if we make any changes in array1 so array2 has parrally updated due to same address in stack store
