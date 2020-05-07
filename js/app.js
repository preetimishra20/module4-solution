(function () {

var names = ["Yaakov","Paavo","Jabin","Jason","Jace","Frank","Larry","Poco","Laura","Jaco"];

for (var i = 0;i<names.length;i++) {
	var firstLetter = names[i].charAt(0).toLowerCase();
	if (firstLetter === 'j') {
		byeSomeone.say(names[i]);
  } else {
    helloSomeone.say(names[i]);
  }
}

})();
