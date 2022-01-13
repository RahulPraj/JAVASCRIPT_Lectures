let products = [
    { name: "T-Shirt", price: 25 },
    { name: "Headphones", price: 125 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 200 },
];

// return names of all products in uppercase who has price >= 100
//TOUpperCase() function is used to convert words in uppwecase

//Using arrow function
let fpdc = products.filter(p => p.price >= 100).map(p => p.name.toUpperCase());
console.log(fpdc);

//normal function

let fpdc1 = products.filter(function(v, i, oarr) {
    if(v.price >= 100)
    {
        return true;
    }
    else{
        return false;
    }
    //return v.price >= 100 ; //its a sort method of writing 
}).map(function(v, i , oarr){
    return v.name.toUpperCase();
})
console.log(fpdc1);
