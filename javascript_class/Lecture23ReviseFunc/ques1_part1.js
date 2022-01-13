//function expression
//part1
fun(); //calling fun function

var fun = function(){
    gun();
}

var gun = function(){
    console.log("I am inside gun");
}

// print or line of error and what the error is
//error-> fun() is not a function -> because it call first

//part2



var fun = function(){
    gun(); //calling gun func
}
fun(); //calling fun function

var gun = function(){
    console.log("I am inside gun");
}
// print or line of error and what the error is
//error-> gun() is not a function -> because it call first

//part3
var fun = function(){
    gun(); //calling gun func
}

var gun = function(){
    console.log("I am inside gun");
}
fun(); //calling fun function

//output
//I am inside gun