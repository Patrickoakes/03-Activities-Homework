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

       // FUNCTIONS
      // ================================================================================

      // Creates a Function called "adder" that takes three arguments (x, y, z).
      function adder(x, y, z) {

            // The function should add the arguments together, and log the result to the console.
            console.log(x + y + z);
          }
    
          // We can also create a version of "adder" that returns its result.
          function adderReturn(x, y, z) {
            return x + y + z;
          }
    
          // Creates a Function called "multiplier" that takes three arguments (x, y, z).
          function multiplier(x, y, z) {
    
            // The function should multiply the arguments, and log the result to the console.
            console.log(x * y * z);
          }
    
          // We can also create a version of "multiplier" that returns its result.
          function multiplierReturn(x, y, z) {
            return x * y * z;
          }
    
          // Creates a Function called "isString" that takes three arguments (x, y, z).
          function isString(x, y, z) {
    
            // isString checks if each argument is a string using typeof.
    
            // If each argument is a string it will note that.
            if (typeof x === "string" && typeof y === "string" && typeof z === "string") {
              console.log("Yep. They are all strings");
            }
    
            // If anyone of them is NOT a string... it will note that.
            else {
              console.log("No... I don't believe these are strings.");
            }
          }
    
          // Creates a Function called "vowelChecker" that takes in a single argument (x).
          function vowelChecker(x) {
    
            // vowelChecker will grab the first letter (character)...
            var firstChar = x.toLowerCase().charAt(0);
    
            // Then check if that first letter is a vowel.
            if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u") {
    
              // If so... it will log that.
              console.log("OMG. The first letter is a vowel!");
    
            }
    
            else {
    
              // If not... it will log that.
              console.log("First letter is NOT a vowel. *sadface*");
    
            }
          }
    
          // FUNCTION EXECUTION
          // ================================================================================
    
          // Each of the below lines of code is what actually "calls" or "runs" the functions.
          // Without the below code, the functions above are like workers just waiting to be called into action.
    
     /*     // Calling our adder function.
          adder(1, 2, 3);
    
          console.log("-------------------");
    
          // If we use the version that returns its result:
          var result = adderReturn(1, 2, 3);
          console.log(result);
    
          console.log("-------------------");
    
          // Calling our multiplier function.
          multiplier(2, 3, 4);
    
          console.log("-------------------");
    
          // If we use the version that returns its result:
          result = multiplierReturn(2, 3, 4);
          console.log(result);
    
          console.log("-------------------");
    
          // Calling our isString function.
          isString("Ahmed", "Bad", "Monkey");
          isString(2, "Way", "Street");
    
          console.log("-------------------");
    
          // Calling our vowelChecker function.
          vowelChecker("Eek");
          vowelChecker("Nah");
    
      */
    