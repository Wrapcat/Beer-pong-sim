var cups = [];
function setUpCups(num) {
	for (var i = 1; i <= num; i++) {
		cups.push("cup # " + i)
	}
	displayCups();
}
function displayCups() {
	var elem = document.getElementById("cups");
	while (elem.firstChild) {
		elem.removeChild(elem.firstChild);
	}
	for (var i in cups) {
		var btn = document.createElement("button");
		var node = document.createTextNode(cups[i])
		btn.appendChild(node);
		btn.onclick = aimedCup;
		elem.appendChild(btn);
	}
}
setUpCups(6);
function beerPong(cup) {
	var toss = Math.random() * 10;
	toss = Math.floor(toss);
	var result = "";
	if (toss <= 5) {
		madeCup = whichCup();
		result = "made it in " + madeCup;
		pullCup(madeCup);
	} else if (toss > 5 && toss <= 8) {
		result = "missed!";
	} else {
		var cup1 = whichCup();
		var cup2 = whichCup();
		while (cup1 == cup2 && cups.length > 1) {
			cup2 = whichCup();
		}
		pullCup(cup1);
		if (cups.length == 0) {
			result = "double bounced into the last cup!"
		} else {
			pullCup(cup2);
			result = "double bounced and made " + cup1 + " and I pulled " + cup2;
		}
	} 
	var words = "I threw for " + cup + " and I " + result;
	displayResults(words);
	displayCups();
}
function displayResults(words) {
	document.getElementById("results").innerHTML = words;
}
function whichCup() {
	return cups[Math.floor(Math.random()*cups.length)];
}
function aimedCup() {
	console.log(this.innerHTML);
	var cup = this.innerHTML;
	beerPong(cup);
}
function pullCup(cup) {
	var idx = cups.indexOf(cup);
	cups.splice(idx,1);
	}
