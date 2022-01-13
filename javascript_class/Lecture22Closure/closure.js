//closure-> in this we a have one outer func and one inner function and if outer function stack se haat jaaye to jo inner
//function hai vo outer function ke variables ko access kr skta hai .isye hi closure bolte hn.

// function outer(first) {
//     console.log("Inside outer")
//     return function inner(second) {
//         console.log("Inside inner");
//         return first * second;
//     }
// }
// let rVal = outer(2);
// console.log("Before calling rVal that contains inner");
// let ans = rVal(4);
// console.log(ans);




// practical example


function enterFirstName(first) {
    return function enterLastName(lastName) {
        return function enterAge(age) {
            return function printDetails() {
                console.log("Your name is " + first+" " + lastName + " and your age is " + age);
            }
        }
    }
}
console.log("Kindly Enter your first Name");
let enterLastName = enterFirstName("Jasbir");
console.log("Kindly Enter your last Name");
let enterAge = enterLastName("Singh");
console.log("Kindly Enter Your Age");
let printDetails = enterAge(25);
console.log("Doing random stuff");
printDetails();

//output
// Kindly Enter your first Name
// Kindly Enter your last Name
// Kindly Enter Your Age
// Doing random stuff
// Your name is Jasbir Singh and your age is 25