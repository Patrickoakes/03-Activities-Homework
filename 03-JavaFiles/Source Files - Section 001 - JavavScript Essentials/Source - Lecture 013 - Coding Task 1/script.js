// Lecture - Coding Task 1

/*

*************************CODING TASK No 1*********************************

1. Create variables to represent scores of exams for John and Nick and set values   80 and 45;
2. Create variable to set the lower limit for passing an exam and assign to it value as 51;
3. Write the condition in if statement, which will check if both students have passed an exam and log 
   the result in console;
4. Use else if statement in order to check if one of the students has passed an exam and log the result 
   in console;
5. Use else statement in order to display in console that both students have failed;
6. In case of passing the exam by one of the students, find out which one was that and display in console 
   as an additional information the student name and his points
7. Test all the possible cases (a. both students passed; b. John passed and Nick failed; c. Nick passed and 
  John failed; d. both students failed).
*/

// SOLUTION:

var John = 80;
var Nick = 45;
var Pass = 50;
/*
if (studentJohn > 50 && studentNick > 50) {
  console.log(" condition is true");
} else {
  console.log(" Condition is false");
}

if (studentJohn < studentPass && studentNick < studentPass) {
  console.log(" Both Students have failed");
} else {
  console.log(" Condition is false");
}*/

if (John > Pass && Nick > Pass) {
  console.log(" Both Passed John with 80 points and Nick with 45 points ");

} else if (John > Pass) {
  console.log(" John passed with 80 points");
}










