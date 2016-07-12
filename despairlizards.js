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
	//var cup = document.getElementById("cup").value;
	var toss = Math.random() * 10;
	toss = Math.floor(toss);
	var result = "";
	if (toss <= 2) {
		result = "made it in " + cup;
		pullCup(cup);
	} else if (toss <= 5) {
		madeCup = cups[Math.floor(Math.random()*cups.length)];
		result = "made it in " + madeCup;
		pullCup(madeCup);
	} else if (toss > 5 && toss <= 8) {
		result = "missed!";
	} else {
		var cup1 = whichCup();
		var cup2 = whichCup();
		while (cup1 == cup2) {
			cup2 = whichCup();
		}
			result = "double bounced and made it in cup # " + cup1 + " and I pulled cup # " + cup2;
	} 
	var words = "I threw for " + cup + " and I " + result;
	displayResults(words);
}

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
function aimedCup() {
	console.log(this.innerHTML);
	var cup = this.innerHTML;
	beerPong(cup);
}
function pullCup(cup) {
	var idx = cups.indexOf(cup);
	cups.splice(idx,1);
	displayCups();
}
