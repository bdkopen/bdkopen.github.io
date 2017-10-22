var lava_lamp = [
"               88888888",
"              8888888888",
"             88        88",
"            88          88",
"           88            88",
"          88              88",
"         88     ::.        88",
"        88      ·:·         88",
"       88           .::.     88",
"      88           .::::      88",
"     88            ·:::·       88",
"    88 .:::.  .:.         .:    88",
"   88  :::::  ·:·        ·:·     88",
"   88   ·:::·       .::.         88",
"   88        .::.  .:::::     .:.88",
"   88        ·::·  :::::·     ·:·88",
"   88            .:::::  .::.    88",
"    88         .:::::·  :::::   88",
"     88        ::::::.  ·:::·  88",
"      88       ::::::::.      88",
"       88   .:. ::::::::.    88",
"        88  ·::.::::::::::..88",
"         88 .::::::::::::::88",
"          88::::::::::::::88",
"           88::::::::::::88",
"           88::::::::::::88",
"          888888888888888888",
"         888%%%%%%%%%%%%%%888",
"        888%%%%%%%%%%%%%%%%888",
"       888%%%%%%%%%%%%%%%%%%888",
"      888%%%%%%%%%%%%%%%%%%%%888",
"     888%%%%%%%%%%%%%%%%%%%%%%888",
"    888888888888888888888888888888"
];

var output = document.getElementById("output");

var updateLavaLamp = function() {
    for(var a = 0; a < lava_lamp.length; a++) {
        for(var b = 0; b < lava_lamp[a].length; b++) {
            if(lava_lamp[a][b] === ":" || lava_lamp[a][b] === "." || lava_lamp[a][b] === "·") {
                var i = Math.floor(Math.random()*4);
                var char = lava_lamp[a][b];
                /*
                0 == left,
                1 == up,
                2 == right,
                3 == down
                */
                if(i === 0) {
                    if(lava_lamp[a][b-1] === " ") {
                        lava_lamp[a] = lava_lamp[a].substr(0, b-1) + char + lava_lamp[a].substr(b);
                        lava_lamp[a] = lava_lamp[a].substr(0, b) + ' ' + lava_lamp[a].substr(b + 1);
                    }
                } else if(i === 1) {
                    if(lava_lamp[a+1][b] === " ") {
                        lava_lamp[a+1] = lava_lamp[a+1].substr(0, b) + char + lava_lamp[a+1].substr(b + 1);
                        lava_lamp[a] = lava_lamp[a].substr(0, b) + ' ' + lava_lamp[a].substr(b + 1);
                    }
                } else if(i === 2) {
                    if(lava_lamp[a][b+1] === " ") {
                        //console.log(lava_lamp[a][b+1]);
                        lava_lamp[a] = lava_lamp[a].substr(0, b+1) + char + lava_lamp[a].substr(b + 2);
                        lava_lamp[a] = lava_lamp[a].substr(0, b) + ' ' + lava_lamp[a].substr(b + 1);
                    }
                } else if(i === 3) {
                    if(lava_lamp[a-1][b] === " ") {

                        lava_lamp[a-1] = lava_lamp[a-1].substr(0, b) + char + lava_lamp[a-1].substr(b + 1);
                        lava_lamp[a] = lava_lamp[a].substr(0, b) + ' ' + lava_lamp[a].substr(b + 1);
                    }
                }
            }
        }
        //console.log(lava_lamp[a]);
    }
    displayLavaLamp();
    setTimeout(updateLavaLamp, 5000);
}

var displayLavaLamp = function() {
    output.innerHTML = "";
    for(var a = 0; a < lava_lamp.length; a++) {
        var t = "<div class='line'>";
        
        for(var b = 0; b < lava_lamp[a].length; b++) {
            
            if(lava_lamp[a][b] === " ") {
                t += "&nbsp;";
            } else {
                t += lava_lamp[a][b];
            }
        }
        output.innerHTML += t;
        
    }
    
}



//First call
updateLavaLamp();
console.log(output.innerHTML);