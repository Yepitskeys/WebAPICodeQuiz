var CountdownTimer = document.getElementById('countdown');
var StartButton = document.getElementById('start');
var StartUp = document.getElementById('startup');
var Results = document.getElementById('results');
var Choices = document.getElementById('choices');
var Questions = document.getElementById('questions');
var currentQuestionIndex = 0;
var timeLeft = 31;

StartButton.addEventListener('click', function() {
    // hides the startup intro paragraph
    document.getElementById('startup').hidden = true;
    document.getElementById('start').hidden = true;
    // hides the questions until the start button is clicked
    document.getElementById('questions').hidden = false;
    getQuestion();
	
	var timerId = setInterval(function() {
        timeLeft--;
        CountdownTimer.textContent = "Time Left: " + timeLeft;
    
    if (timeLeft <= 0) {
        clearInterval(timerId);
        sendMessage();
        quizOver();
    }
	}, 1000);
});

function sendMessage(){
    CountdownTimer.textContent = "GAME OVER!!";
}

function score(){
    Results.textContent = "Your Score is " + " !!!";
}

function quizOver(){
    clearInterval(timerId);
    sendMessage();
    saveHighscore()

    var finalScore = document.getElementById('final-score');

    questions.setAttribute('class', 'hide')
}

function saveHighScore(){
    var initials = initials.value.trim();

    if (initials !== '') {
    
    var highscores =
        JSON.parse(window.localStorage.getitem('highscores')) || [];
    
    var newScore = {
        score: timeLeft,
        initials: initials,
    }
    
    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(highscores));

    window.location.href = 'highscores.html';

    }
}

// Function to pull questions to the quizbox div
function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
  
    var Title = document.getElementById('question-title');
    Title.textContent = currentQuestion.title;
  
    Choices.innerHTML = '';
  
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      var choice = currentQuestion.choices[i];
      var choiceNode = document.createElement('button');
      choiceNode.setAttribute('class', 'choices');
      choiceNode.setAttribute('value', choice);
  
      choiceNode.textContent = i + 1 + '. ' + choice;
  
      // display on the page
      Choices.appendChild(choiceNode);
    }
  }

// Function to check what answer is clicked
function questionClick(event) {
    var buttonEl = event.target;
    console.log(buttonEl.value);

    if (!buttonEl.matches('.choices')) {
        return;
    }

    if (buttonEl.value !== questions[currentQuestionIndex].answer) {
        timeLeft -= 5;
        feedback.textContent = 'Wrong';
    }

    if (timeLeft < 0) {
        timeLeft = 0;
    }

    else {
        feedback.textContent = "Correct";
    }

    CountdownTimer.textContent = timeLeft;
    currentQuestionIndex++;

    if(timeLeft <= 0 || currentQuestionIndex === questions.length) {
        sendMessage();
        score();
    } else {
        getQuestion();
    }

}

var questions = [
{
    title: 'Where is JavaScript placed within the DOM?',
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
},
{
    title: 'JavaScript is a ____ - side programming language',
    choices: [
        'Client', 
        'Server',
        'Both',
        'None',
    ],
    answer: 'Both',
},
{
    title: 'Which JavaScript label catches all the values, except for the ones specified?',
    choices: [
        'Catch', 
        'Label',
        'Try',
        'Default',
    ],
    answer: 'Default',
},
{
    title: 'Which of the following type of variable is visible only within a function where it is defined?',
    choices: [
        'Global Variable',
        'Local',
        'Both',
        'None',
    ],
    answer: 'Default',
},
{
    title: 'Which of the following purpose, JavaScript is designed for ?',
    choices: [
        'To Execute Query Related to DB on Server',
        'To Style HTML Pages',
        'To Perform Server Side Scripting Opertion',
        'To add interactivity to HTML Pages',
    ],
    answer: 'To add interactivity to HTML Pages',
},
{
    title: 'JavaScript code can be called by using',
    choices: [
        'RMI',
        'Preprocessor',
        'Function / Method',
        'None of the above',
    ],
    answer: 'Function / Method',
},
]

// User clicks on choices
Choices.onclick = questionClick;


// ByteLengthQueuingStrategy.addEventListener("click", startGame) 
// Different way to write event Listeners
