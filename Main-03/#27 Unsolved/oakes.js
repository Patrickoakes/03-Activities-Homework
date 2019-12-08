// FUNCTIONS
// ================================================================================

// Create a Function called "adder" that take three arguments (x, y, z).
// The function should add the arguments together, and log the result to the console.



function adder(x, y, z) {

      console.log(x + y + z)

}


// Create a Function called "multiplier" that takes three arguments (x, y, z).
// The function should multiply the arguments, and log the result to the console.

function multiplier(x, y, z) {

      console.log(x * y * z);
}


// Create a Function called "isString" that takes three arguments (x, y, z).
// "isString" determines if all three arguments are strings and logs an appropriate response to the console.

function isString(x, y, z) {

      if (typeof x !== 'string') {
            console.log(x + ' is not a string');
      }
      if (typeof y !== 'string') {
            console.log(y + ' is not a string');
      }
      if (typeof z !== 'string') {
            console.log(z + ' is not a string');
      }

      if (typeof x === 'string' && typeof y === 'string' && typeof z === 'string') {
            console.log('All three values are strings');
      }
}

// Create a Function called "vowelChecker" that takes in a single argument (x).
// "vowlChecker" logs whether or not the input is a vowel.


// BONUS
// Creates a version of "adder" that returns its result. Function is called "adderReturn".


// Creates a version of "multiplier" that returns its result. Function is called "multiplierReturn".


// FUNCTION EXECUTION
// ================================================================================

// Add in the lines of code below necessary to call the functions we created above.


// Call the adder function here.
adder(2, 4, 6);
adder(5, 4, 9);
adder(11, 4, 6);
adder(2, 2, 8);
adder(2, 2, 2);
adder(2, 19, 6);
adder(101, 4, 6);



console.log("-------------------");


// Call the multiplier function here.
multiplier(2, 4, 6);
multiplier(5, 4, 9);
multiplier(11, 4, 6);
multiplier(2, 2, 8);
multiplier(2, 2, 2);
multiplier(2, 19, 6);
multiplier(101, 4, 6);


console.log("-------------------");


// Call the isString function here.

isString('a', 5, 70);
isString(169, 'b', 'c');
isString(5, 'b', 8);
isString('a', 125, 'c');
isString(11, 5, 'c');
isString('a', 3000, 'c');


console.log("-------------------");


// Call the vowelChecker function here.


console.log("-------------------");


// BONUS
// Call the adderReturn function here and set it equal to a variable. Then log that variable to the console.


console.log("-------------------");


      // Call the multiplierReturn function here and set it equal to a variable. Then log that variable to the console.
