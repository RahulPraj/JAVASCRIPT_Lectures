//this question gives array = 3 , 3, 3 but we want 0,1,2
// function outer(){
//     var arr = [];
//     for(var i = 0; i < 3; i++)
//     {
//         arr.push(function(){
//             console.log(i);
//         })
//     }
//     return arr;

// }

// console.log("before calling outer");
// var arr = outer();
// arr[0]();
// arr[1]();
// arr[2]();
// console.log("after calling outer");

//output
// before calling outer
// 3
// 3
// 3
// after calling outer


//ques 2 -> array will -> 0, 1, 2
function outer() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        function outer1() {
            // j ke liye har baar aap alag se variable banate ho 
            var j = i;
            return function () {
                console.log(j);
            }
        }
        arr.push(outer1());
    }
    return arr;
}
console.log("Before calling outer");
var arr = outer();
arr[0]();
arr[1]();
arr[2]();
console.log("After calling outer");

//output
// Before calling outer
// 0
// 1
// 2
// After calling outer