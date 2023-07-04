// iteration on object
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

// for in loop
// obkect.keys

for (let key in person) {
  console.log(person.key); // this is given as undefined
}

for (let key in person) {
  //   console.log(person[key]);
  console.log(`${key} ${person[key]}`);
}

// object.keys

for (let key of Object.keys(person)) {
  console.log(person[key]);
}
