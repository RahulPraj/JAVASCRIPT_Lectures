// condition => 1.without return

//defining the function
function sayHello(name)
{
    console.log("Hello", name);

}
//calling the function ->by this our code will run
sayHello("rahul");
//Hello rahul


//to print a function , it print the function name 
console.log(sayHello);
//[Function: sayHello]

//print the function after calling it -?>returned value
let res = sayHello("jasbir");
console.log(res);
//Hello jasbir
//undefined -> it print undefined because we didnt reuturned any value in function

//if we didnt pass any value in the function => it return undefined
sayHello();
//Hello undefined => function ko call kra isliye hello print hua but name nhi becuse hmne koyi paramter pass nhi kra 


//2.when we return  a value

function saybro(name)
{
    console.log("hello", name);
    return " how are u" //here we return something in the function
}
let rval = saybro("rahul")
console.log(rval);//here we print the retun value

//hello rahul
//how are u
