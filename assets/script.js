var timerElement = document.querySelector(".time");

// Selects element by id
var mainElement = document.getElementById("main");
var startBtn = document.getElementById("startButton");
var displayQuestion = document.getElementById("questionBox");
var choiceBtn = document.getElementById("answerButtons")
let currentQuestionIndex = 0;
// global var called index that is set to 0 by default, every time they get a question right, increment it
// move through questions as it increases
let answersCorrect = 0;


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
  let question = allQuestions[currentQuestionIndex];

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
// Function to remove buttons
function removeButtons() {
  let answerButtons = document.getElementById("answerButtons");
  answerButtons.replaceChildren();
}
// Function to make buttons populate to HTML
function makeAnswerButton() {
  allQuestions[currentQuestionIndex].choices.forEach(element=>{ 
    let btn = document.createElement('button');
    btn.textContent = element;
    document.getElementById("answerButtons").appendChild(btn);
    
});}



function answerCheck (event) {
  console.log(event.target.textContent);
    if (event.target.textContent == allQuestions[currentQuestionIndex].answer) {
      // Function for adding to score should go here?
      answersCorrect++;
      // Also a message saying user is correct

      console.log("right");
    } else {
      secondsLeft = secondsLeft-10
    }
    currentQuestionIndex++; 
    askQuestion();
    
}

// Checks 
choiceBtn.addEventListener('click', answerCheck, false, )




// // function for correct answer
// function userCorrect( ) {
//   choiceBtn.addEventListener('click', "button", function(event){

var secondsLeft = 75;


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

 
  

console.log(answersCorrect);
// askQuestion();
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