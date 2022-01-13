//functions are variables

//fn defination
function fn(param){
    console.log("iam function defination", param);
    //execute chota fn
    param();
}

// //boolean -> return value
// fn(true);

// //pass address -> because they are call by reference 
// //string
// fn("hello");

// //object
// let obj = {name:"rahul"};
// fn(obj);

// //array
// let arr = [10,20,30];
// fn(arr);

//output
// iam function defination true
// iam function defination hello
// iam function defination { name: 'rahul' }
// iam function defination [ 10, 20, 30 ]

//function are also a variable
function chotafn()
{
    console.log("i am a chota fn");
}
fn(chotafn);//fnc can also be passed as an argument in a function because it is a variable type

//output
// iam function defination [Function: chotafn]
// i am a chota fn