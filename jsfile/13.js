//  Nested if else

// use case winningNumber=19;
//  if user guess =19
//  winner
//  19>you guess low
//  19<you guess hign

let winningNumber = 19;
let guessedNumber = +prompt("Enter your Number");

if (guessedNumber == winningNumber) {
  console.log(`you guess right number and you are Winner!!`);
} else {
  if (guessedNumber >= 19) {
    console.log(`you are guess Hign number!!`);
  } else {
    console.log(`you are guess a low Number`);
  }
}
