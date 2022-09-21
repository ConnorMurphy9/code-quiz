var timerElement = document.querySelector(".time");

// Selects element by id
var mainElement = document.getElementById("main");
var startBtn = document.getElementById("startButton");
var presentQuestion = document.getElementById("question");



// var answerset1 = document.getElementById("button1");
// var answerset2 = document.getElementById("button2");
// var answerset3 = document.getElementById("button3");
// var answerset4 = document.getElementById("button4");
// var answerset5 = document.getElementById("button5");

var allQuestions = [
  
// allQuestions[0].question;
// allQuestions[0].choices;

// 2
{
question: "Commonly used data types DO NOT include:", 
choices: "string","booleans","alerts","numbers"},
// 2
{
question: "The condition in a if/else statement in enclosed within:",
choices: "quotes", "curly brackets", "parentheses", "square brackets"},
// 3
{
question: "Arrays in Javascript can be used to store:", 
choices: "numbers and strings", "other arrays", "booleans", "all of the above"},
// 2
{
question: "String values must be enclosed within __ when being assigned to variables.", 
choices: "commas", "curly brackets", "quotes", "parentheses"},
// 3
{
question: "A very useful tool used during development and debugging for printing content to the debugger is:",
choices: "Javacript", "terminal/bash", "for loop", "console log"}
];




function makeButton() {
allQuestions[0].choices.forEach(element=> { 
  let btn = document.createElement('button');
  btn.innerHTML = element;
  document.getElementById(container).appendChild(btn);
});}

makeButton();



console.log(question1);
console.log(question2);
console.log(question3);
console.log(question4);
console.log(question5);





// function for wrong answer?
// function wrongAnswer() {}

function askQuestion() {



}

var secondsLeft = 75;


// Define event to occur when timer ends
// timerEnd(); {
    
// }

// Function that will update the user's high score
function updateCorrect() {
    
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
  }

startBtn.addEventListener("click", startTimer); 


function startTimer() {
   

  
    startBtn.disabled = true;
    // startBtn.style.display = "none"; 
    timer();
}





// This is the timer.
function timer() {
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

 
  


 

  // sendMessage(); {

// }





