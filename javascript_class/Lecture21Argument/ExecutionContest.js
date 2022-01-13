//note
//for execution of code there are two steps -> 1. memory allocation -> if function  and 2. for variable -> undefined
//any code that is run  in js , it runs in execution contest
//it creates by 2way -> 1. deafult golbal execution contest when there is no function
//2.it create when a func is call.

// GEC -> global execution contest
// console.log("Before declaration ", a);//it will give undefined because it calls globaly without any function
// var a;
// console.log("After declaration ", a);//it will give undefined because it calls globaly without any function
// a = 10;
// console.log("After intialization ", a);

//output
// Before declaration  undefined 
// After declaration  undefined
// After intialization  10

//for function
// GEC
console.log("Before declaration 2", a)
var a;
console.log("After declaration 4", a);
a = 10;
console.log("After intialization 6", a);
function fn() {
    console.log("Before declaration 8", a)
    var a;
    console.log("After declaration 10", a);
    a = 20;
    console.log("After intialization 12", a);
}
fn();
//output
// Before declaration 2 undefined
// After declaration 4 undefined
// After intialization 6 10
// Before declaration 8 undefined
// After declaration 10 undefined
// After intialization 12 20