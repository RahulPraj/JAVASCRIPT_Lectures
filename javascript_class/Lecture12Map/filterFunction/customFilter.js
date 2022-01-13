Array.prototype.myFilter = function(callback){
    let oarr = this;
    let res = [];

    for(let i =0; i < oarr.length; i++)
    {
        let v = oarr[i];
        let rbv = callback(v , i , oarr);
        if(rbv == true){
            res.push(v);
        }
    }
    return res;
}

//question by using myFilter
let arr = [2, 5, 9, 8, 15, 11, 6];
let oarr = arr.myFilter(function(v, i , oarr)
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