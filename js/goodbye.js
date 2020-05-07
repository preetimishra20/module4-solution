(function (window) {

var byeSomeone = {};
var Someword= "Good Bye";


byeSomeone.say = function (name) {
	console.log(Someword + " " + name);
}

window.byeSomeone = byeSomeone;

})(window); 



