// Filter is itself a fn
// Filter takes as input a callback fn 
// The callback fn takes 3 parameter (v, i, oarr)
// filter will call the callback multiple times (once for each value)
// for each run of callback, filter will pass v, i and original array to callback
// callback will process the value and index and return a single boolean value for each call to it from filte
// Single value returned by each run of callback will be used by filter
// Whenever a true is received by filter (returned by callback) then filter adds the v to a new array
// Filter returns that new array
// length of returned array is equal to number of trues returned by callback 

let arr = [2, 5, 9, 8, 15, 11, 6];
let oarr = arr.filter(function(v, i , oarr)
{
    if(v % 2 == 1)
    {
        return true;
    }
    else{
        return false;
    }
})
console.log(oarr);