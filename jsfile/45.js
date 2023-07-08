// rest parameter

function number(a, b, c, ...rest) {
  console.log(`a ${a}`);
  console.log(`b ${b}`);
  console.log(`c ${c}`);
  console.log(`rest ${rest}`);
}

number(1, 2, 3, 4, 5, 6, 7, 8);

function addarr(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
addarr(1, 2, 3, 4);
