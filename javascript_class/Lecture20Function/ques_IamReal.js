//ques => who is the real ?
//here according to memory allocation pehle function pass hoyega with addres to jb second fun ayega to vo first
//func ke address ko replace krdega (same name of function). to second function call hoga
//memory for the function are allocated before the code is executed
//func are created in heap and
//there address are store in stack

console.log("script started");

iamReal();

function iamReal(){
    console.log("i am real");
}

function iamReal()
{
    console.log("he isnt real, i am real");
}
iamReal();

//output
// script started
// he isnt real, i am real
// he isnt real, i am real