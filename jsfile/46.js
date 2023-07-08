// parameter destructuring

const person = {
  fistname: "Rohit kushwha",
  gender: "male",
  age: 20,
};

// function printDetails(obj) {
//   console.log(`${obj.fistname}`);
//   console.log(`${obj.gender}`);
//   console.log(`${obj.age}`);
// }

function printDetails({ fistname, gender, age }) {
  console.log(`${fistname}`);
  console.log(`${gender}`);
  console.log(`${age}`);
}

printDetails(person);
