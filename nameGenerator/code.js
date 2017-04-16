var outputBox = document.getElementById("output");
var generateTownName = document.getElementById("generateTownName");
var townNameStart = ["Ji", "Ri", "Ripp"];
var townNameMiddle = ["vin", "il", "el"];
var townNameEnd = ["ia", "oria", "land", "orp", ""];

function getTownName(num) {
	outputBox.innerHTML = "";
	var names = [];
	for (var a = 0; a < num; a++) {
		var randomStart = Math.round(Math.random()*(townNameStart.length-1));
		var randomMiddle = Math.round(Math.random()*(townNameMiddle.length-1));
		var randomEnd = Math.round(Math.random()*(townNameEnd.length-1));
		names.push(townNameStart[randomStart]+townNameMiddle[randomMiddle]+townNameEnd[randomEnd]);
		console.log(names);
	}
	for(var a = 0; a < names.length; a++) {
		outputBox.innerHTML += "<p>"+names[a]+"</p>";
	}
};

generateTownName.addEventListener("click", function() {getTownName(10);});