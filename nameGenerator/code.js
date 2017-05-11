var outputBox = document.getElementById("output");
var generateTownName = document.getElementById("generateTownName");

var randomNumber = function(highNum) {
	return Math.floor((Math.random() * (highNum+1)));
	//console.log(randomNumber);
};

//Letters in alphabet in order to generate more random outputs.
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Selects a random letter and outputs a return value.
var randomLetter = function(letterCase) {
	
	var letterID = randomNumber(alphabet.length-1);
	console.log(letterID);
	
	if(letterCase === "C") {
		return alphabet[letterID];
		
	} else if(letterCase === "L") {
		return alphabet[letterID].toLowerCase();

	} else {
		console.log("randomLetter function failed to generate a random letter. No set letter case.");
	}
};

//Base names for town name generations.
var townNameStart = ["Ji", "Ri", "Li", "We", "Wete", "Lakeside Zi", "Za", "Mount "+randomLetter("C")+randomLetter("L")];
var townNameMiddle = ["vin", "zin", "zil", "tor", "set"];
var townNameEnd = ["ia", "oria", "land", "orp", "aria", "ia", "ria"];

//Output town names.
function getTownName(num) {
	outputBox.innerHTML = "";
	var names = [];
	for (var a = 0; a < num; a++) {
		var randomStart = randomNumber((townNameStart.length-1));
		var randomMiddle = randomNumber((townNameMiddle.length-1));
		var randomEnd = randomNumber((townNameEnd.length-1));
		names.push(townNameStart[randomStart]+townNameMiddle[randomMiddle]+townNameEnd[randomEnd]);
		console.log(names);
	}
	for(var a = 0; a < names.length; a++) {
		outputBox.innerHTML += "<p>"+names[a]+"</p>";
	}
};

//Detect town names output button click.
generateTownName.addEventListener("click", function() {getTownName(10);});