let arr = [
    {name: "A", age: 14, gender: "M"}, 
    {name: "B", age: 34, gender: "M"}, 
    {name: "C", age: 24, gender: "F"}, 
    {name: "D", age: 44, gender: "F"}, 
    {name: "E", age: 44, gender: "M"}, 
    {name: "I", age: 28, gender: "F"}, 
    {name: "G", age: 36, gender: "M"}, 
    {name: "H", age: 47, gender: "F"}
]

// ages of all the ladies [24, 44, 28, 47]

let res = arr.filter(function(v, i , oarr){
    if(v.gender == 'F')
    {
        return true;
    }
    else{
       return false;
    }
});

let lages = res.map(function(v, i , oarr){
    return v.age;
})
console.log(lages);

//other way to present
let lage = arr.filter(function(v, i , oarr){
    if(v.gender == 'F')
    {
        return true;
    }
    else{
       return false;
    }
}).map(function(v, i , oarr){
    return v.age;
})
console.log(lage);

//using arrow function

