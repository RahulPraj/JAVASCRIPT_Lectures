//reduce function passes the one value
//its callback function takes 3 parameters (pv, cv, ci, oarr).
//we can give saperate privious value.

let arr = [10, 20, 30, 40, 50];

let sum1 = arr.reduce(function(pv, cv, ci, oarr){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
})
console.log(sum1);

//if we give pv 
let sum2 = arr.reduce(function(pv, cv, ci, oarr){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
}, 0)
console.log(sum2);