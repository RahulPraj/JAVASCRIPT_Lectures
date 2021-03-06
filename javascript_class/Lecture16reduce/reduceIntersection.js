//find the intersection of the 2darray
let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60], // 50, 90, 100, 60
    [10, 51, 70, 80, 90, 100, 30, 60], // 90, 100, 60
    [11, 50, 75, 85, 92, 100, 34, 60], // 100, 60
    [10, 50, 70, 80, 90, 100, 30, 61], // 100
];

let inter1 = arr2d.reduce(function(pv , cv, ci, oarr)
{
    console.log(pv + " ###" + cv);
    let inter = pv.filter(v => cv.includes(v));
    return inter;
})
console.log(inter1);

//output   
//  pv                                      cv                                   inter                                                 
// [10, 50, 70, 80, 90, 100, 30, 60]      [11, 50, 75, 85, 90, 100, 34, 60] =>   [50, 90, 100, 60]
// [50, 90, 100, 60]                      [10, 51, 70, 80, 90, 100, 30, 60] =>   [90, 100, 60]
// [90, 100, 60]                          [11, 50, 75, 85, 92, 100, 34, 60] =>   [100, 60]
// [100, 60]                              [10, 50, 70, 80, 90, 100, 30, 61] =>   [100]

// [100]