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
		var cup1 = whichCup();
		var cup2 = whichCup();
		result = "double bounced and made it in cup # " + cup1 + " and I pulled cup # " + cup2;
	} 
	var words = "I threw for cup # " + cup + " and I " + result;
	displayResults(words);
}
beerPong();

function displayResults(words) {
	document.getElementById("results").innerHTML = words;
}
function whichCup() {
	var cup1 = Math.random() * 10;
	cup1 = Math.floor(cup1);
	cup1 = cup1 + 1;
	cup1 = cup1 / 2;
	cup1 = Math.floor(cup1) + 1;
	return cup1;
}