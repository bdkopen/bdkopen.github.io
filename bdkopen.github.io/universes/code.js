// import main body for editing.
var mainBody = document.getElementById("mainBody");
//window.console.log(mainBody.innerHTML);

//seed to be used in future generations.
var seed = Math.random(1, 10000);
var start_boxes = Math.round(Math.random() * 13);
window.console.log(start_boxes);

//Sources for images that will be imported later.
var tabDown = "images/Tab_Down.png";
var tabSide = "images/Tab_Side.png";

var world = [];

//generate basic universe start.
for (var a = 0; a < start_boxes; a++) {
	world.push([{Name: "Universe", Contains:[], Open: false} ]);
}
//Output basic universe info.
window.console.log(world);

//clear mainBody of javascript loading error.
mainBody.innerHTML = "";
//Display universe information.
for(var b = 0; b < world.length; b++) {
	//If tab is closed display this:
	if(world[b][0]["Open"] === false) {
		mainBody.innerHTML += "<div id='world"+b+"' class='multiworld-color'><img src='"+tabSide+"' class='tab-image'><span class='tab_text'>"+world[b][0]["Name"]+"</span></div>";
	//If tab is open display this:
	} else if(world[b][0]["Open"] === true) {
		mainBody.innerHTML += "<div id='world"+b+"' class='multiworld-color'><img src='"+tabDown+"' class='tab-image'><span class='tab_text'>"+world[b][0]["Name"]+"</span></div>";
	}
}

var openMultiworld = function() {
	
}
