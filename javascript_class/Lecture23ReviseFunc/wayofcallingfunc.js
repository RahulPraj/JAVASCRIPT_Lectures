//ways of calling function
let obj = {
    fun1: function(frnd1, frnd2){
        console.log("This person is called " + this.fullName + ". His/Her age is " + this.age + ".");
        console.log(this.fullName + " says hello to " + frnd1 + ".");
        console.log(this.fullName + " says hello to " + frnd2 + ".");

        console.log(arguments);
    },
    fullName: "Sumeet Malik",
    age: 34
};

// obj.fun1("Navdeep", "Vikas"); //normal calling method
let o2 = {
    fullName: "Neha",
    age: 33
};
//second method-> call
// call is a function. it is available on all functions. it can be used to call the functions.
// the use case is, if you want to override the default this
// obj.fun1.call(o2, "Mehwish", "Shailja");

//3rd method -> apply
// apply is similar to call. It just uses an array to pass arguments
// obj.fun1.apply(o2, ["Mehwish", "Shailja", "Supriya"]);

//4th method -> bind
// bind is dis-similar. It doesn't make a call. It gives you a new function to call.
let boundFunction = obj.fun1.Bind(o2, "Mehwish", "Shailja", "Supriya");
boundFunction("Sumeet");






