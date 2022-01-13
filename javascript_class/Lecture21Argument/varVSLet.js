//var
// reassign. 
// function scope ,redeclare,you can acces a var variable before declaration ❌
// console.log(a);
// var a;
// a = 10;
// var a;

//let
// Temporal dead zone -> you can't acces a let  variable before declaration
// can't redeclare
// block scope -> 

// console.log(a);
// let a;
// // let a;
// console.log(a);

//ques
var a;
function fn() {
    console.log("Before declaration 8", a); //it will give a -> undefined, and also you can acces a var variable before declaration 
    var a;
    console.log("After declaration 10", a);//it also give a -> undefined
    a = 20;
    if(true)
    {
        let a = 30;
        console.log(a);//it will print 30
    }
    console.log("After intialization 12", a);//it will print 20
}
a = 10;
fn();

//output
// Before declaration 8 undefined
// After declaration 10 undefined
// 30
// After intialization 12 20