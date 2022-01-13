//my custom reduce() function

Array.prototype.myReduce = function(cb){
    let oarr = this;
    let pv;

    if(pv == undefined)
    {
        pv = oarr[0];
        for(let i = 1; i < oarr.length; i++)
        {
            let cv = oarr[i];
            pv = cb(pv, cv, i, oarr)
        }

    }
    else{
        pv = iv;
        for(let i = 0; i < oarr.length; i++)
        {
            let cv = oarr[i];
            pv = cb(pv, cv, i, oarr);
        }
    }
    return pv;
}

//using myReduce function
let arr = [10, 20, 30, 40, 50];

let sum1 = arr.myReduce(function(pv, cv, ci, oarr){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
})
console.log(sum1);
