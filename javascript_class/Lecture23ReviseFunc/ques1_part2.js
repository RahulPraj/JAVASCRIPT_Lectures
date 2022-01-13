//function declaration
//here we did function declaration in ehich var and function both are hoisting
fun();

function fun(){
    gun();
}

function gun(){
    console.log("I am inside gun");
}

//output
//I am inside gun

