var timerElement = document.querySelector(".time");

// Selects element by id
var mainElement = document.getElementById("main");

var secondsLeft = 75;


// Define event to occur when timer ends
// timerEnd(); {
    
// }


function setCorrect() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
  }



// This is the timer.
function Timer() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerElement.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
    //   sendMessage();
    }

  }, 1000);
}

  Timer();
  


 

  // sendMessage(); {

// }






// Answers to questions
    //    question 1 </p>
    // <p>question 2 quotes, curly brackets, parentheses, square brackets</p>
    // <p>question 3 numbers and strings, other arrays, booleans, All of the above.</p>
    // <p>question 4 commas, quotations, curly brackets, parentheses. </p>
    // <p>question 5 JavaScript, terminal/bash, for loop, console log 