//Area to take input from
var input = document.getElementById("input");
//Area output encyrpted message.
var output = document.getElementById("output");
//Button to run encryption
var buttonEncrypt = document.getElementById("buttonEncrypt");
//Button to run decryption
var buttonDecrypt = document.getElementById("buttonDecrypt");
var inputEncryptionID = document.getElementById("inputEncryptionID");

//fromCharCode
function textToCode(text, multiplier) {
	return String.fromCharCode(text.charCodeAt()*multiplier);
};

function codeToText(text, multiplier) {
	return String.fromCharCode(text.charCodeAt()/multiplier);

};

function encryptCode(string, multiplier) {
	output.value="";
	for(var a = 0; a < string.length; a++) {
		output.value += textToCode(string[a], multiplier);
	}
};

function decryptCode(string, multiplier) {
	output.value="";
	for(var a = 0; a < string.length; a++) {
		output.value += codeToText(string[a], multiplier);
	}
};

buttonEncrypt.addEventListener('click', function() {encryptCode(input.value, inputEncryptionID.value)} );
buttonDecrypt.addEventListener('click', function() {decryptCode(input.value, inputEncryptionID.value)} );