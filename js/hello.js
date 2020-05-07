(function (window) {

var helloSomeone = {};
var Somewords = "Hello";


helloSomeone.say = function (name) {
	console.log(Somewords + " " + name);
}

window.helloSomeone = helloSomeone;

})(window);

