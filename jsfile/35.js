// object inside arrays
// very usefull method used in real world project
const users = [
  { user_id: "1", firsrName: "Rohit kushwaha", phoneNumber: 43234444 },
  { user_id: "2", firsrName: "Shohit kushwaha", phoneNumber: 454455 },
  { user_id: "3", firsrName: "Mohit kushwaha", phoneNumber: 6545645 },
];
console.log(users);

for (let user of users) {
  console.log(user);
}

for (let user of users) {
  console.log(user.user_id);
}
