//Nested destructuring
const users = [
  { user_id: "1", firstName: "Rohit kushwaha", phoneNumber: 43234444 },
  { user_id: "2", firstName: "Shohit kushwaha", phoneNumber: 454455 },
  { user_id: "3", firstName: "Mohit kushwaha", phoneNumber: 6545645 },
];
//   console.log(users);

//   for (let user of users) {
//     console.log(user);
//   }

//   for (let user of users) {
//     console.log(user.user_id);
//   }
const [user1, user2, user3] = users;
console.log(user1);

const [{ firstName }, , { phoneNumber }] = users;
console.log(firstName);
console.log(phoneNumber);

const [{ firstName: user1firstname }, , { phoneNumber: user3phonenumber }] =
  users;
console.log(user1firstname);
console.log(user3phonenumber);
