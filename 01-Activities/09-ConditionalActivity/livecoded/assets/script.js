var likesSteak = confirm("Do you like steak?");
var birthYear = prompt("What year were you born?");

if (likesSteak) {
  document.write("Here's a steak sandwich!");
} else {
  document.write("Here's a tofy stir-fry!");
}

if ((2019 - parseInt(birthYear)) < 21) {
  alert("No Sake for you!")
}