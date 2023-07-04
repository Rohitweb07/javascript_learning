// access with dot. vs access with [] in object
let key = "email";
let person = {
  name: "Rohit", // by defaulty nsme are written as "name"
  age: 20,
  "person hobbies": [
    "playing crecket",
    "coding",
    "cooking0",
    "listining music",
  ],
  //   [key]: "rohitkushwaha@gmail.com",
};
console.log(person);

console.log(person.name);
console.log(person["name"]);
console.log(person["person hobbies"]); // this method to access the person hobbies

//add
person.gender = "male";
console.log(person);

person[key] = "rohit@gmil.com";
console.log(person);
