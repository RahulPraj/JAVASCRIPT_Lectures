
let arr = [
    "Sumeet Malik",
    "Amit Malik",
    "Inderjit Malik",
    "Daya Malik",
    "Kunal Malik",
    "Aryan Malik"
];

// Use the map function to produce the below output
//["S.M.", "A.M.", "I.M.", "D.M.", "K.M.", "A.M."];

let narr = arr.map(function(v, i , orr){
    let nameparts = v.split(" ");
    let firstName = nameparts[0];
    let lastName = nameparts[1];

    let fnfc = firstName[0];
    let snfc = lastName[0];
    let initials = fnfc + "." + snfc + ".";
    return (initials);

})

console.log(narr);