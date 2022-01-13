//write custom myevery() function 
Array.prototype.MyEvery = function(cb)
{
    let oarr = this;
    for(let i = 0; i < oarr.length; i++)
    {
        let v = oarr[i];
        let rv = cb(v, i, oarr);
        if(rv == false)
        {
            return false;
        }
    }
    return true;
}


// if every callback return true then "Every" return true otherwise false
// Are all Female Candidates Valid

let arr = [
    {name: "A", age: 14, gender: "M"}, 
    {name: "B", age: 34, gender: "M"}, 
    {name: "C", age: 24, gender: "F"}, 
    {name: "D", age: 44, gender: "F"}, 
    {name: "E", age: 44, gender: "M"}, 
    {name: "I", age: 28, gender: "F"}, 
    {name: "G", age: 36, gender: "M"}, 
    {name: "H", age: 47, gender: "F"}
];

let allFemaleCandidatesValid = arr.filter(c => c.gender == 'F').MyEvery(fc => fc.age <= 20 && fc.age >= 30);
console.log(allFemaleCandidatesValid);