
let a1 =  [10, 50, 70, 80, 90, 100, 30, 60];
let a2 = [11, 50, 75, 85, 90, 100, 34, 60];

let a2ma1 = a2.filter(v => a1.includes(v) == false);//we are findinf elements a2 which are not in a1 , by using a2 - a1;
 console.log(a2ma1);
 let union = a1.concat(a2ma1);//concat function is used to combine two arrays
console.log(union);


//union means jo elements do arrays mai same hai vo eak baar ayenge (means repeat nhi hongye ) but jo second mai elemntshai or vo first mai nhi hai vo include hongye

let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34]
    [10, 51, 70, 80, 90, 100, 30, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51]
    [11, 50, 75, 85, 92, 100, 34, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51, 92]
    [10, 50, 70, 80, 90, 100, 30, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51, 92]
];

//using reduce function
let union1 = arr2d.reduce(function(pv , cv, ci , oarr){
    cvmpv = cv.filter(v => pv.includes(v) == false);
    let ans = pv.concat(cvmpv);
    return ans;

})
console.log(union1);

//output
//[10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51, 92] (union of arrays)