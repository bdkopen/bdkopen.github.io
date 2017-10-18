var line = [document.getElementById("line1"),document.getElementById("line2"),document.getElementById("line3"),document.getElementById("line4"),document.getElementById("line5"),document.getElementById("line6"),document.getElementById("line7"),document.getElementById("line8"),document.getElementById("line9")];

var expandLawn = function() {
	for(var a = 0; a < line.length; a++) {
		if(a > -1 && a < 7) {
			line[a].innerHTML = "&nbsp;" + line[a].innerHTML + "&nbsp;";
		} else if(a === 7){
			line[a].innerHTML = "&nbsp;" + line[a].innerHTML + "/";
		} else if(a === 8){
			line[a].innerHTML = "^" + line[a].innerHTML + "^";
		}
	}
	
	setTimeout(expandLawn, 100);
}


expandLawn();