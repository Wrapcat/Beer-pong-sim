function pong() {
	var toss = Math.random() * 10;
	toss = Math.floor(toss);
	var result = "";
	if (toss <= 5) {
		result = "made it!";
	} else if (toss > 5 && toss <= 8) {
		result = "missed!";
	} else {
		result = "double bounced!";
	} 
	console.log("I " + result);
	console.log("I rolled a " + toss);
	var words = "I threw for a cup and I " + result;
	displayResults(words);
}
pong();

function displayResults(words) {
	document.getElementById("results").innerHTML = words;
} 
