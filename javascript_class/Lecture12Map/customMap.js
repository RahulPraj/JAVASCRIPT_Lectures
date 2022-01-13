Array.prototype.myMap = function(callback){ //myMap hmara custom map hai jisme function pass ho raha hai or vo fun callback pass kr raha hai.

    let res = [];
    for(let i = 0; i < this.length; i++){ //this . is used a array in this function 
        let val = this[i];
        let rv = callback(val , i  , this);//ye eak eak val ke liye call hoga
        res.push(rv);//rv ko res mai push krdiya 
    }
    return res;
}

//using normal map 
let arr = [2, 3, 4, 5, 6, 7, 8];

let sqarr1 =arr.map(function(v , i , oarr){
    return v * v;
});

console.log(sqarr1);

//using custom  myMap
//let arr = [2, 3, 4, 5, 6, 7, 8];

let sqarr2 =arr.myMap(function(v , i , oarr){
    return v * v;
});

console.log(sqarr2);  


//custom map question 2
let arr1 = [
    "Sumeet Malik",
    "Amit Malik",
    "Inderjit Malik",
    "Daya Malik",
    "Kunal Malik",
    "Aryan Malik"
];

// Use the map function to produce the below output
//["S.M.", "A.M.", "I.M.", "D.M.", "K.M.", "A.M."];

let narr = arr1.map(function(v, i , orr){
    let nameparts = v.split(" ");//split is used to spit the space jaha space hai waha se split krdega 
    let firstName = nameparts[0];
    let lastName = nameparts[1];

    let fnfc = firstName[0];
    let snfc = lastName[0];
    let initials = fnfc + "." + snfc + ".";
    return (initials);

})

console.log(narr);