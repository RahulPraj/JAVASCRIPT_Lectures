let arr = [
    {
        gender: 'M',
        age: 24
    },
    {
        gender: 'F',
        age: 34
    },
    {
        gender: 'F',
        age: 28
    },
    {
        gender: 'M',
        age: 74
    },
    {
        gender: 'F',
        age: 31
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 26
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 47
    },
    {
        gender: 'F',
        age: 19
    },
    {
        gender: 'M',
        age: 20
    }
];

// Use the map function to produce the below output
// return an array with true and false for females between 20 and 30
// let us say xyz corp wants to hire females between age >= 20 and <= 30

let shorlist = arr.map(function(v, i, orr){
    if(v.gender == 'F' && v.age >= 20 && v.age <= 30)
    {
        return true;
    }
    else{
       return  false;
    }
});

console.log(shorlist);

//USING ARRAOW FUNCTION -> isme return krne kim zarurt nhi hoti by default krdeta hai
let s1 = arr.map((v, i, oarr) =>v.gender == 'F' && v.age >= 20 && v.age <= 30 );
console.log(s1);

//ISME FUNCTION WORD NHI LIKH RAHE BUT RETURN KR SKTE HN JESE FUNCTION MAI KRTE HN
let s2 = arr.map((v, i, oarr) =>
 {
    return v.gender == 'F' && v.age >= 20 && v.age <= 30
} );
console.log(s3);