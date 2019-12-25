

var questions = [
{q:"11TH CENTURY IS WHEN LEIF ERICKSON FLOURISHED AND THEN DIED?", a: "t"},

{q:"IS IT THE 3RD CENTURY BC IN WHICH ALEXANDER THE GREAT RULED?", a: "f"},

{q:"EGYPT IS WHERE THE OLDEST HOMO SAPIEN BONES WERE FOUND?", a: "t"},

{q:"1999 WAS THE YEAR JAVASCRIPT WAS CREATED?", a:"f"},

{q:"JAMES POLK WAS THE 14TH PRESIDENT OF THE U.S?",a:"f"},

{q:"GODFATHER 2 WON FOR BEST PICTURE IN 1974?", a:"t"},

{q:"FRITZ LANG'S 'M' WAS THE FIRST BEST PICTURE WINNER",a:"f"},

{q:"DID GEORGE WASHINGTON DIE IN THE 1700'S?",a:"t"},

{q:"FRANKLIN DELANO ROOSEVELT WAS ELECTED PRESIDENT 3 TIMES?",a:"f"},

{q:"ALAN TURING'S CAUSE OF DEATH WAS SUICIDE?",a:"t"}];


var score = 0;
// Variable to hold the index of current question.
var questionIndex = 0;
var questionContainer = document.querySelector("#question");
var scoreContainer = document.querySelector("#score");
var notificationContainer = document.querySelector("#notification");

function renderQuestion() {
    // If there are still more questions, render the next one.
    if (questionIndex < questions.length) {
      questionContainer.innerHTML = questions[questionIndex].q;
    }
    // If there aren't, render the end game screen.
    else {
      questionContainer.innerHTML = "Game Over!";
      scoreContainer.innerHTML = "Final Score: " + score + " out of " + questions.length;
    }
  }

  // Function that updates the score...
  function updateScore() {
    scoreContainer.innerHTML = "Score: " + score;
  }
// MAIN PROCESS
    // ==============================================================================

    // Calling functions to start the game.
    renderQuestion();
    updateScore();

    // When the user presses a key, it will run the following function...
    document.onkeyup = function(event) {

      // If there are no more questions, stop the function.
      if (questionIndex === questions.length) {
        return;
      }

      // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
      var userInput = event.key.toLowerCase();

      // Only run this code if "t" or "f" were pressed.
      if (userInput === "t" || userInput === "f") {

        // If they guess the correct answer, increase and update score, alert them they got it right.
        if (userInput === questions[questionIndex].a) {
          notificationContainer.innerHTML = "Correct!";
          score++;
          updateScore();
        }
        // If wrong, alert them they are wrong.
        else {
          notificationContainer.innerHTML = "Wrong!";
        }

        // Increment the questionIndex variable and call the renderQuestion function.
        questionIndex++;
        renderQuestion();

      }

    };