//we can pass no of argument parameters in function
// function  fn(parm1, parm2){
//     console.log("inside the function", parm1, parm2);
// }
// fn("hello" , "hi");

// //if  there is nothing in the parm then it will return undefind
// fn("hello");

// //output
// // inside the function hello hi
// // inside the function hello undefined

// fn();
// //inside the function undefined undefined

// //jitne marzi arguments pass kro program run krega
// fn("hello", "hi" , "by");

//Argument
//arguments are predefined in js
//all the parameters pass in the arguments

// function fn()
// {
//     console.log(arguments);//we are passing the arguments that has been called by function
// }
// fn("hello" , "hi");
// fn("hello");
// fn("hello", "hi" , "by");

//output
// [Arguments] { '0': 'hello', '1': 'hi' }
// [Arguments] { '0': 'hello' }
// [Arguments] { '0': 'hello', '1': 'hi', '2': 'by' }

//remember whatever passes in arguments, his copy is present in fn(params)

function fn(param1, param2)
{
    console.log(arguments);//we are passing the arguments that has been called by function
    console.log(param1,param2);
}
fn("hello" , "hi");
fn("hello");
fn("hello", "hi" , "by");
//output
// [Arguments] { '0': 'hello', '1': 'hi' }
// hello hi
// [Arguments] { '0': 'hello' }
// hello undefined
// [Arguments] { '0': 'hello', '1': 'hi', '2': 'by' }
// hello hi