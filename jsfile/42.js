// lexical scope
// treat as the enviroment of the function
let val = "value1";
function myapp() {
  const add = function () {
    // let val = "value2";
    console.log(`insode the add function ${val}`);
  };
  const mul = () => {
    let val = "value3";
    console.log(`inside the mul function ${val}`);
  };

  console.log(`inside the my app ${val}`);
  add();
  mul();
}

myapp();
