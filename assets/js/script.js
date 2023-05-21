var CountdownTimer = document.getElementById('countdown');
var StartButton = document.getElementById('start');
var StartUp = document.getElementById('startup');
var Results = document.getElementById('results');
var Choices = document.getElementById('choices');
var Questions = document.getElementById('questions');

StartButton.addEventListener('click', function() {
    // hides the startup intro paragraph
    document.getElementById('startup').hidden = true;
    document.getElementById('start').hidden = true;

    QuestionBox();
    var timeLeft = 31;
	
	var timerId = setInterval(function() {
        timeLeft--;
        CountdownTimer.textContent = "Time Left: " + timeLeft;
    
    if (timeLeft === 0) {
        clearInterval(timerId);
        sendMessage()
        score()
    }
	}, 1000);
});



function sendMessage(){
    CountdownTimer.textContent = "GAME OVER!!";
}

function score(){
    Results.textContent = "Your Score is " + " !!!";
    // MAKE SURE TO CREATE FUNCTION TO CALCULATE SCORE
}
// Function to pull questions
function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
  
    var Title = document.getElementById('question-title');
    Title.textContent = currentQuestion.title;
  
    Choices.innerHTML = '';
  
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      // create new button for each choice
      var choice = currentQuestion.choices[i];
      var choiceNode = document.createElement('button');
      choiceNode.setAttribute('class', 'choices');
      choiceNode.setAttribute('value', choice);
  
      choiceNode.textContent = i + 1 + '. ' + choice;
  
      // display on the page
      Answers.appendChild();
    }
  }

var questions = [
{
    title: 'Where is JavaScript placed with the DOM?',
    choices: [
        'The <body> section', 
        'The <head> section', 
        'Both the <head> and <body> are acceptable', 
        'JavaScript can be placed anywhere within the DOM'
    ],
    answer: 'Both the <head> and <body> are acceptable',
},
{
    title: 'Java is the same as JavaScript?',
    choices: [
        'True', 
        'False', 
    ],
    answer: 'False',
}
]