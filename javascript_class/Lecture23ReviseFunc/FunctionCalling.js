function fun(a, b){
    // console.log(a + " " + b);//normal print hoga 
    console.log(arguments[0] + " " + arguments[1] + " " + arguments[2]);
    console.log(arguments); // array like, not an array
    let res = Array.from(arguments); // how to make an array
    let sq = res.map(x => x * x);
    console.log(sq);
}

fun();
fun(10);
fun(10, 20);
fun(10, 20, 30); 

//output ->normal calling
// undefined undefined
// 10 undefined
// 10 20
// 10 20 //if we are not getting 30 because uske liye arrgument pass krna hoga

//output -> passing arrgument
// undefined undefined undefined
// [Arguments] {}
// 10 undefined undefined
// [Arguments] { '0': 10 }
// 10 20 undefined
// [Arguments] { '0': 10, '1': 20 }
// 10 20 30
// [Arguments] { '0': 10, '1': 20, '2': 30 }

//output if we want to argument mai array jesa kam ho
// undefined undefined undefined
// [Arguments] {}
// []
// 10 undefined undefined
// [Arguments] { '0': 10 }
// [ 100 ]
// 10 20 undefined
// [Arguments] { '0': 10, '1': 20 }
// [ 100, 400 ]
// 10 20 30
// [Arguments] { '0': 10, '1': 20, '2': 30 }
// [ 100, 400, 900 ]
