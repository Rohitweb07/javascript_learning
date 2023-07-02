// switch case statement

let day = +prompt("Enter daynumber to check day");

switch (day) {
  case 1:
    console.log(`Sunday`);
    break;
  case 2:
    console.log(`monday`);
    break;
  case 3:
    console.log(`tuesday`);
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log(`thusday`);
    break;
  case 6:
    console.log(`friday`);
    break;
  case 7:
    console.log("saturday");
    break;
  default:
    console.log(`you enter wrong day`);
    break;
}
