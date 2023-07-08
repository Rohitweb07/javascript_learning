// function call the function
function doing(a) {
  function add() {
    console.log(`i am capable to do add `);
  }
  return add;
}

const ans = doing();
console.log(ans);
ans();

function does() {
  return function mul() {
    // console.log(`i am capalble ti doing multiply work`);
    return "i am capable to doing mul work";
  };
}

const ans2 = does();
console.log(ans2());
