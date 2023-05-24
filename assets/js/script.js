var CountdownTimer = document.getElementById('countdown');
var StartButton = document.getElementById('start');
var StartUp = document.getElementById('startup');
var Results = document.getElementById('results');
var Choices = document.getElementById('choices');
var Questions = document.getElementById('questions');
var currentQuestionIndex = 0;

StartButton.addEventListener('click', function() {
    // hides the startup intro paragraph
    document.getElementById('startup').hidden = true;
    document.getElementById('start').hidden = true;
    // hides the questions until the start button is clicked
    document.getElementById('questions').hidden = false;
    getQuestion();

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

// function startQuiz () {
//     StartUp.setAttribute('class', 'hide');

//     Questions.removeAttribute('class', 'hide');


// }

function sendMessage(){
    CountdownTimer.textContent = "GAME OVER!!";
}

function score(){
    Results.textContent = "Your Score is " + " !!!";
    // MAKE SURE TO CREATE FUNCTION TO CALCULATE SCORE

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
    var currentQuestion = questions[currentQuestionIndex];

    if (!buttonEl.matches('.choice')) {
        return;
    }

    if (buttonEl.value !== questions[currentQuestionIndex].answer) {
        timeLeft -= 5;

    if (timeLeft < 0) {
        timeLeft = 0;
    }

    CountdownTimer.textContent = timeLeft;

    }
    currentQuestion++;

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
}
]

// User clicks on choices
Choices.onclick = questionClick;