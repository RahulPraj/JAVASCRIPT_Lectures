let sarr = ["hello", "bello", "bye", "there", "pep", "nados"];
let narr = [21, 54, 12, 33, 98, 200, 76, 100, 11, 291, 34];

// sort and reverse
//sort() -> its sort the element of array alphabetical order
//for numberical there is other method to sort


sarr.sort();
console.log(sarr);

//for numerical
narr.sort((a, b) => a - b);
console.log(narr);

//reverse() ->it reverse the element of array.
narr.reverse();
console.log(narr);

sarr.reverse();
console.log(sarr);