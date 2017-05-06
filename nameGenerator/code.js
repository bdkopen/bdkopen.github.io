var outputBox = document.getElementById("output");
var generateTownName = document.getElementById("generateTownName");

var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


var randomLetter = function(letterCase) {
	if(letterCase === "C") {
		return alphabet[1/*(Math.random() * (alphabet.length-1))*/];
	} else if(letterCase === "L") {
		return alphabet[1/*(Math.random() * (alphabet.length-1))*/];
	} else {
		console.log("randomLetter function failed to generate a random letter. No set case")
	}
};

var townNameStart = ["Ji", "Ri", "Li", "We", "Wete", "Lakeside Zi", "Za", "Mount "+randomLetter("C")+randomLetter("L")];
var townNameMiddle = ["vin", "zin", "zil", "arian"];
var townNameEnd = ["ia", "oria", "land", "orp", "aria"];

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