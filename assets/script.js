var timerElement = document.querySelector(".time");
var secondsLeft = 75;
// Selects element by id
var mainElement = document.getElementById("main");
var startBtn = document.getElementById("startButton");
var displayQuestion = document.getElementById("questionBox");
var choiceBtn = document.getElementById("answerButtons")
var currentQuestionIndex = 0;
// global var called index that is set to 0 by default, every time they get a question right, increment it
// move through questions as it increases
var score = 0;


var allQuestions = [

// 2
{
question: "Commonly used data types DO NOT include:", 
choices: ["string","booleans","alerts","numbers"],
answer: "alerts"
},
// 2
{
question: "The condition in an if/else statement is enclosed within:",
choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
answer: "parentheses"
},

// 3
{
question: "Arrays in Javascript can be used to store:", 
choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
answer: "all of the above"
},
// 2
{
question: "String values must be enclosed within __ when being assigned to variables.", 
choices: ["commas", "curly brackets", "quotes", "parentheses"],
answer: "quotes"
},
// 3
{
question: "A very useful tool used during development and debugging for printing content to the debugger is:",
choices: ["Javacript", "terminal/bash", "for loop", "console.log()"],
answer: "console.log()"
}

];

function askQuestion() {
  var currentQuestion = allQuestions[currentQuestionIndex];
// if currentQuestionindex is undefined, end quiz
  if(!currentQuestion) {
    console.log("Ending Quiz")
    score = secondsLeft * 1000;
    console.log(score);
    stopTimer();
    // NEED to 
    // NEED to put score into storage
    return
  }
  // Display my new question text
  document.getElementById("questionBox").textContent = currentQuestion.question;

  // Remove the old buttons
  var answerButtons = document.getElementById("answerButtons");
  answerButtons.replaceChildren();

  // Add the new buttons
  currentQuestion.choices.forEach(choice =>  {
    var answerButton = makeAnswerButton(choice);
    answerButtons.appendChild(answerButton);
  });
    // array.forEach(function(currentValue, index, arr), thisValue)
}
// Function to remove buttons
// function removeButtons() {
//   var answerButtons = document.getElementById("answerButtons");
//   answerButtons.replaceChildren();
// }

// Function to make buttons populate to HTML
function makeAnswerButton(choice) {
 
    var btn = document.createElement('button');
    btn.textContent = choice;
    return btn
    
}



function answerCheck (event) {
  console.log(event.target.textContent);
    if (event.target.textContent == allQuestions[currentQuestionIndex].answer) {
      // Function for adding to score should go here?
    
      // Also a message saying user is correct

      console.log("right");
    } else {
      secondsLeft = secondsLeft-10
    }
    currentQuestionIndex++; 
    askQuestion();
    
}

// Adds the functionality of advancing the questions if the user chooses an incorrect answer
choiceBtn.addEventListener('click', answerCheck, false, )








startBtn.addEventListener("click", startTimer); 

// This function starts the timer.
function startTimer() {
    startBtn.disabled = true;
    startBtn.style.display = "none"; 
    timer();
    makeAnswerButton();
    askQuestion();
    
}





// This is function that describes the timer.
function timer() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerElement.textContent = secondsLeft + " seconds left.";

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
    //   sendMessage();
    }

  }, 1000);
}

function stopTimer() {
  secondsLeft = 1;
}








//  function test() {
//   return 2+2;
//  }
 
// var pikachu = test();
// console.log(pikachu);
// console.log(answersCorrect);
// // askQuestion();
// console.log(askQuestion);
// console.log(allQuestions[0].question);

// Define event to occur when timer ends
// timerEnd/loseGame(); {
    
// }

// Function that will update the user's high score
// function updateCorrect() {
    
//     win.textContent = winCounter;
//     localStorage.setItem("winCount", winCounter);
//   }




// When saving items in local storage you will need to retrieve the previously saved scores and combine the new score with the array of previous before the are saved back to local storage