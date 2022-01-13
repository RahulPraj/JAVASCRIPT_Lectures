//question = comppund function
function f(x){
    return x * x;
}

function g(x){
    return x + 10;
}

function h(x){
    return 2*x;
}

let farr = [f, g, h] //[h ,g, f]

let cv = farr.reverse().reduce(function(pv, cv){ //reverse isliye kra because hme f(g(h(10))) nikalna tha
    return cv(pv);
}, x);
console.log(cv);

// 10, f
// f(10), g
// g(f(10)), h
// h(g(f(10)))


// 10, h
// h(10), g
// g(h(10)), f
// f(g(h(10)))


// f(g(h(x))) = f(g(2x)) = f (2x + 10) = 4x^2 + 100 + 40x = 900