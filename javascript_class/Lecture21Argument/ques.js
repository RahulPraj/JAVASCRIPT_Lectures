//Description:
// Find output of the following:

function f() {
  console.log(arguments);
}

function f(a, b) {
  return a + b;
}

console.log(f(2, 3, 4, 5));//14

function f(x, y, z, t) { //this function acording to memory allocation so this function will give the output 
    return x + y + z + t;
}
console.log(f(2, 3, 4, 5));//14

//output
//14
//14

