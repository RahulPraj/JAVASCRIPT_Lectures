//part1

fun();

function fun(){//function declaration
    gun();
}

var gun = function(){ //function expression
    console.log("I am inside gun");
}

// print or line of error and what the error is
//gun is not a function

//part2

function fun(){//function declaration
    gun();
}
fun();
var gun = function(){ //function expression
    console.log("I am inside gun");
}

// print or line of error and what the error is
//gun is not a function

//part3
function fun(){
    gun();
}

var gun = function(){
    console.log("I am inside gun");
}

fun();

// print or line of error and what the error is -> no error
//output
//Iam inside a gun