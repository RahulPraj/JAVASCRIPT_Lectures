let arr = [5, 83, 24, 67, 71, 12, 24, 7];

// return cubes of values whose square <= 1000
// [5, 24, 12, 24, 7]

let cube = arr.filter(function(v , i , oarr) {
    if(v * v <= 1000)
    {
        return true;
    }
    else
    {
        return false;
    }
}).map(function(v, i, oarr){
    let ans  = v*v*v;
    return ans;
})
console.log(cube);

//using arrow function 
let cube1 = arr.filter(v => v * v <= 1000).map(v => v*v*v);
console.log(cube1);


let cube2 = arr.map(v => v*v*v).filter(v3 => v3 <= 10000);
console.log(cube2);