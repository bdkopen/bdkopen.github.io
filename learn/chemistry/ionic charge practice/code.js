//Place to insert element in question
var questionElement = document.getElementById("questionElement");
//Box to input charge
var questionCharge = document.getElementById("questionCharge");
//Submit
var questionSubmit = document.getElementById("questionSubmit");
//Output success/error message
var questionOutput = document.getElementById("questionOutput");

//statistics
var totalRight = document.getElementById("totalRight");
var totalWrong = document.getElementById("totalWrong");
var totals = {right: 0, wrong: 0};


var questionVariables = [];

var elements = [
	[-3, "Nitrogen", "Phosphorus", "Arsenis"], //-3
	[-2, "Oxygen", "Sulfur", "Selenium"], //-2
	[-1, "Fluroine", "Chlorine", "Bromine", "Iodine", "Hydride"], //-1
	[+1, "Hydrogen", "Lithium", "Sodium", "Potassium", "Rubidium", "Francium"], //+1
	[+2, "Beryllium", "Magnesium", "Calcium", "Strontium", "Barium"], //+2
	[+3, "Aluminum"] //+3
	
];

//Update right/wrong stats
function updateStats() {
	totalRight.innerHTML = totals.right;
	totalWrong.innerHTML = totals.wrong;
};

//Give out new question
function newQuestion() {
	questionVariables[0] = Math.ceil(Math.random()*(elements.length-1));
	questionVariables[1] = Math.ceil(Math.random()*(elements[questionVariables[0]].length-1));
	questionElement.innerHTML = elements[questionVariables[0]][questionVariables[1]];
	updateStats();
};

//reset values and call for new question
function nextQuestion() {
	newQuestion();
	questionOutput.innerHTML = [];
	document.getElementById("questionSubmit").disabled = false;
};

//see if submitted answer is correct
function testAnswer() {
	questionCharge = document.getElementById("questionCharge");
	if(Number(questionCharge.value) < -3 || Number(questionCharge.value) > 3 || questionCharge.value === "") {
		questionOutput.innerHTML = "The charge value must be between -3 and +3. Try again!";
	} else if(Number(questionCharge.value) === elements[questionVariables[0]][0]) {
		questionOutput.innerHTML = "Correct! <button id='nextQuestion'>Next question!</button>";

		document.getElementById("questionSubmit").disabled = true;

		totals.right++;
		document.getElementById("nextQuestion").addEventListener("click", nextQuestion);
	} else {
		questionOutput.innerHTML = ("Incorrect! <br> The correct answer was " + elements[questionVariables[0]][0] + ". <br><button id='nextQuestion'>Next question!</button>");

		totals.wrong++;
		document.getElementById("questionSubmit").disabled = true;
		document.getElementById("nextQuestion").addEventListener("click", nextQuestion);
	}
	
	
};


//start off with a fresh question
newQuestion();

//add event listener to the submit button.
questionSubmit.addEventListener("click", testAnswer);