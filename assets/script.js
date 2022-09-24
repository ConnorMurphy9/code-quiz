var timerElement = document.querySelector(".time");
var secondsLeft = 75;
var mainElement = document.getElementById("main");
var startBtn = document.getElementById("startButton");
var displayQuestion = document.getElementById("questionBox");
var choiceBtn = document.getElementById("answerButtons");
var currentQuestionIndex = 0;
var playerName = document.getElementById("playerName");
var userScoreDisplayEl = document.getElementById("userScoreDisplay");
var submitScoreFormEl = document.getElementById("submitScoreForm");
submitScoreFormEl.style.display = "none";
var score = 0;
var userData; 
var submitButton = document.querySelector("#submitButton");

var allQuestions = [

{
question: "Commonly used data types DO NOT include:", 
choices: ["string","booleans","alerts","numbers"],
answer: "alerts"
},

{
question: "The condition in an if/else statement is enclosed within:",
choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
answer: "parentheses"
},

{
question: "Arrays in Javascript can be used to store:", 
choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
answer: "all of the above"
},

{
question: "String values must be enclosed within __ when being assigned to variables.", 
choices: ["commas", "curly brackets", "quotes", "parentheses"],
answer: "quotes"
},

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
    displayQuestion.textContent = "GAMEOVER--thank you for playing!";
    score = secondsLeft * 1000;
    console.log(score);
    submitScoreFormEl.style.display = "block";
    return
  };

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
}

// Function to make buttons populate to HTML
function makeAnswerButton(choice) {
 
    var btn = document.createElement('button');
    btn.textContent = choice;
    return btn  
};

function answerCheck (event) {
 
    if (event.target.textContent == allQuestions[currentQuestionIndex].answer) {
      // userCorrectDisplay();
      console.log("right");
    } else {
      secondsLeft = secondsLeft-10
    }
    currentQuestionIndex++; 
    askQuestion();
};

// Adds the functionality of advancing the questions if the user chooses an incorrect answer
choiceBtn.addEventListener('click', answerCheck, false, )

// Adds the functionality to start the timer via clicking the start button
startBtn.addEventListener("click", startTimer); 

// This function starts the timer.
function startTimer() {
    startBtn.disabled = true;
    startBtn.style.display = "none"; 
    timer();
    makeAnswerButton();
    askQuestion(); 
};

// This is function that describes the timer.
function timer() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerElement.textContent = secondsLeft + " seconds left.";
    if(secondsLeft <= 0 || !allQuestions[currentQuestionIndex]) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);
};

// Function to store user's local data for scores and retrieve it
function storeScore() {
  var userData = {
      name : playerName.value,
      userScore : score,
  };
  
  localStorage.setItem('userData', JSON.stringify(userData));
  
};




submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  storeScore();
  displayScore();
  });

  function displayScore() {

    var displayScore = JSON.parse(localStorage.getItem("userData"));
// Check if data is returned, if not exit out of the function
if (displayScore !== null) {
  document.getElementById("userScoreDisplay").innerHTML = "Your score is " + displayScore.userScore + ", " + displayScore.name + ". Thank you for taking this quiz!";

  } else {
    return;
  }

   

  };

