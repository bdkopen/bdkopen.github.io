var headerbar = document.getElementById("header-bar");

//Old attempt at running the url clicks.
/*
var href = document.location.href;
//lastIndexOf determines the value inwhich the last / is placed.
//substr finds the range between two values.
var current_dir = href.substr(0, href.lastIndexOf('/index.html'));
console.log(current_dir);*/

//headerbar.innerHTML = '<div class="dropdown"><a href=' + current_dir + '><button class="dropbtn">Home</button></a></div><div class="dropdown"><button class="dropbtn">Games</button><div class="dropdown-content"><a href="' + current_dir + '/universes/index.html">Universe Generator</a><a href="#">Coming soon...</a></div></div><div class="dropdown"><button class="dropbtn">Tools</button><div class="dropdown-content"><a href="' + current_dir + '/nameGenerator/index.html">Name Generator</a><a href="#">Coming soon...</a></div></div>';

//Workinng url clicks header bar.
headerbar.innerHTML = '<div class="dropdown"><a href="/"><button class="dropbtn">Home</button></a></div><div class="dropdown"><button class="dropbtn">Games</button><div class="dropdown-content"><a href="/universes/index.html">Universe Generator</a><a href="#">Coming soon...</a></div></div><div class="dropdown"><button class="dropbtn">Tools</button><div class="dropdown-content"><a href="/nameGenerator/index.html">Name Generator</a><a href="#">Coming soon...</a></div></div><div class="dropdown"><button class="dropbtn">ELM</button><div class="dropdown-content"><a href="/elm/manyvery/index.html">The Many Very&#39;s</a><a href="#">Coming soon...</a></div></div>';