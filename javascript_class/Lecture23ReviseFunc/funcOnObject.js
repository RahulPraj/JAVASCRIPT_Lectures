//here we used a this -> it is automatically called when we call object
let obj = {
    fun1: function(){
        console.log("This man is called " + this.fullName + ". His age is " + this.age);
    },
    fun2: function(){
        console.log("This man is called " + obj.fullName + ". His age is " + obj.age);
    },
    fun3: function(){
        console.log("This man is called " + fullName + ". His age is " + age);
    },
    fullName: "Sumeet Malik",
    age: 34
};

obj.fun1(); // this is same in java and js
obj.fun2(); // this works in js but not in java
obj.fun3(); // this works in java but not in JS


//output
// f1-> This man is called Sumeet Malik. His age is 34
// f2-> This man is called Sumeet Malik. His age is 34
// f3-> fullName is not defined