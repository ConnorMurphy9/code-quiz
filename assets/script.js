var timerElement = document.querySelector(".time");

// Selects element by id
var mainElement = document.getElementById("main");
var startBtn = document.getElementById("startButton");
var displayQuestion = document.getElementById("questionBox");
let answersCorrect = 0;
let currentQuestionIndex = 0;
// global var called index that is set to 0 by default, every time they get a question right, increment it
// move through questions as it increases

// var answerset1 = document.getElementById("button1");
// var answerset2 = document.getElementById("button2");
// var answerset3 = document.getElementById("button3");
// var answerset4 = document.getElementById("button4");
// var answerset5 = document.getElementById("button5");


var allQuestions = [

// 2
{
question: "Commonly used data types DO NOT include:", 
choices: ["string","booleans","alerts","numbers"],
answer: "alerts"
},
// 2
{
question: "The condition in a if/else statement in enclosed within:",
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

/**
 * Asks the next question.  Clears buttons and creates new answer buttons.
 */
function askQuestion(questionIndex) {
  let question = allQuestions[questionIndex];

  // Display my new question text
  document.getElementById("questionBox").textContent = question.question;

  // Remove the old buttons
  let answerButtons = document.getElementById("answerButtons");
  answerButtons.replaceChildren();

  // Add the new buttons
  question.choices.forEach(choice => {
    let answerButton = makeAnswerButton(choice);
    answerButtons.appendChild(answerButton);
  });
    
}

// 
function makeAnswerButton(answer) {
  let answerButton = document.createElement("button");
  answerButton.textContent = answer;
  answerButton.addEventListener("click", checkAnswer, false);
  return answerButton;
}

// 
function checkAnswer(event) {
  let answer = event.target.textContent;

  console.log(answer);

  if (answer === allQuestions[currentQuestionIndex].answer) {
    console.log("right"); 
    answersCorrect++;
  } else {
    secondsLeft -= 10;
  }
  if (currentQuestionIndex === 4) {
    // display high score
  }
  else {
  askQuestion(++currentQuestionIndex);
}
}

// // function for correct answer
// function userCorrect( ) {
//   choiceBtn.addEventListener('click', "button", function(event){


// //   })
// //   if
//   });


// function for wrong answer?
// function wrongAnswer() {}



var secondsLeft = 75;


startBtn.addEventListener("click", startTimer); 

// This function starts the timer.
function startTimer() {
    startBtn.disabled = true;
    startBtn.style.display = "none"; 
    timer();
    askQuestion(currentQuestionIndex);
    // askQuestion?;
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

 
  



console.log(askQuestion);
console.log(allQuestions[0].question);

// Define event to occur when timer ends
// timerEnd/loseGame(); {
    
// }

// Function that will update the user's high score
// function updateCorrect() {
    
//     win.textContent = winCounter;
//     localStorage.setItem("winCount", winCounter);
//   }