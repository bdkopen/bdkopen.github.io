var headerbar = document.getElementById("header-bar");
var href = document.location.href;
var current_dir = href.substr(href.lastIndexOf('/'), 0);

headerbar.innerHTML = '<div class="dropdown"><a href=' + current_dir + '><button class="dropbtn">Home</button></a></div><div class="dropdown"><button class="dropbtn">Games</button><div class="dropdown-content"><a href="' + current_dir + '/universes/index.html">Universe Generator</a><a href="#">Coming soon...</a></div></div><div class="dropdown"><button class="dropbtn">Tools</button><div class="dropdown-content"><a href="' + current_dir + '/nameGenerator/index.html">Name Generator</a><a href="#">Coming soon...</a></div></div>';