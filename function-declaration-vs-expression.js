
var greeting = function () {
    return "Hi there!";        //this is a function expression
};

var age = 4;

if (age <= 10) {                                 // age can be called from anywhere. if statements dont have to be underneath it
    var buildMenu = function () {       //this is also an expression. use this format inside of {}
        return "Kids' Menu";
    };

    function wrongMenuBuilder() {           // this is a declaration and should not be used within {}
        return "Wrong Kids' Menu";
    }

    console.log(buildMenu());
    console.log(wrongMenuBuilder());
}