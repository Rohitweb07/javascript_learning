// break and continue
let num = 10;
for (let i = 0; i <= num; i++) {
  if (i === 5) break;
  console.log(i);
} // this give the output like 0 1 2 3 4

num = 10;
for (let i = 0; i <= num; i++) {
  if (i === 5) continue;
  console.log(i);
} // this give the output like 0 1 2 3 4 6 7 8 9 10
