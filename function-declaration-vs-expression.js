
var greeting = function () {
    return "Hi there!";
};

var age = 4;

if (age <= 10) {                                 // age can be called from anywhere. if statements dont have to be underneath it
    var buildMenu = function () {
        return "Kids' Menu";
    };

    function wrongMenuBuilder() {
        return "Wrong Kids' Menu";
    }

    console.log(buildMenu());
    console.log(wrongMenuBuilder());
}