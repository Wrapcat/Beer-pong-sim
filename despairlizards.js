function beerPong() {
	var cup = document.getElementById("cup").value;
	var toss = Math.random() * 10;
	toss = Math.floor(toss);
	var result = "";
	if (toss <= 5) {
		result = "made it in cup # " + (toss + 1);
	} else if (toss > 5 && toss <= 8) {
		result = "missed!";
	} else {
		result = "double bounced!";
	} 
	var words = "I threw for cup # " + cup + " and I " + result;
	displayResults(words);
}
beerPong();

function displayResults(words) {
	document.getElementById("results").innerHTML = words;
}
