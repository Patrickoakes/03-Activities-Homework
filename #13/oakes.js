
var bands = ["replacements", "bob dylan", "led zeppelin", 'jay z'];

var userGuess = prompt("Which band do you like?");

var userGuessLower = userGuess.toLowerCase();

if (bands.indexOf(userGuessLower) > -1) {


    alert("YEAH I LOVE THEM");

} else {
    alert("Nah. They're pretty lame.");

}
