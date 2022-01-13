//include function gives true or false value
//its checks ki vo chij hai ya nhi

let a1 = [10, 30, 50, 70, 90];
let a2 = [63, 34, 50, 90, 80, 10, 60];
// 10, 50, 90

console.log(a2.includes(80));
console.log(a2.includes(88));

//find the intersection element btw these two arrays
let inter = a1.filter(v => a2.includes(v));
console.log(inter);