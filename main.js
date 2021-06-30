function checkGoodness() {
	var display = document.getElementById("result");
	var vowels = ["a","e","i","o","u"];
	var neword = document.getElementById("userinput");
	var letters = neword.value.toLowerCase().split("");

	if(letters.includes(" ")) {
		display.innerHTML = "Thats a phrase or sentence. You probably just want a word.";
		console.log("phrase");
	}
	else if(!letters.some(i=> vowels.indexOf(i) > -1)) {
		display.innerHTML = "If your making a new word for English.... Give it a few vowels!";
		console.log("garble");
	}
	else if(existing_words.some(m => m == neword.value.toLowerCase())) {
		display.innerHTML = "This word has matched another one in the large dictionary! Though the word you typed may be pretty wierd.";
		console.log("matches");
	}
	else {
		display.innerHTML = neword.value + " is a brand new word! Now you can use it in...... your \"crazy new words I just made up\" gallery?";
		console.log("unmatches");
	}
}
function enterPressed(e) {
	if(e.keyCode == 13) {
		checkGoodness();
	}
}