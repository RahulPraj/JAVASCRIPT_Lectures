let arr = [51, 23, 37, 44, 73, 82, 97, 45];

// count all primes using reduce
//pv is here to tell  how many number of prime get so far


let cp = arr.reduce(function(pv, cv, ci, oarr)
{
    let flag = true;
    console.log(pv + "-" + cv);
    for(let div = 2; div * div <= cv; div++)
    {
        if(cv % div == 0)
        {
            flag = false;
            break;
        }
    }
    if(flag == true)
    {
        return pv + 1; //if we found prime to pv increase hota rahega
    }
    else
    {
        return pv;//aagr nhi milta to return pv
    }

}, 0);//passing intial value zero because starting mai eak bhi prime nhi mila
console.log(cp);