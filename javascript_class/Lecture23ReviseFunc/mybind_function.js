Function.prototype.myBind = function(){
    let orgFun = this;
    let args = Array.from(arguments);

    let boundFun = function(){
        let thisForOrgFun = args[0];
        let argsForOrgFun = args.slice(1);
        let argsFromInvocation = Array.from(arguments);
        argsForOrgFun = argsForOrgFun.concat(argsFromInvocation);

        orgFun.apply(thisForOrgFun, argsForOrgFun);
    }

    return boundFun;
}


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
let boundFunction = obj.fun1.Bind(o2, "Mehwish", "Shailja", "Supriya");
boundFunction("Sumeet");
