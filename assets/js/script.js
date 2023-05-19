var CountdownTimer = document.getElementById('countdown');
var StartButton = document.getElementById('start');

StartButton.addEventListener('click', function() {
	var timeLeft = 31;
	
	var timerId = setInterval(function() {
        timeLeft--;
        CountdownTimer.textContent = timeLeft + " Seconds Left!";

    if (timeLeft === 0) {
        clearInterval(timerId);
        sendMessage()
    }
	}, 1000);
});

function sendMessage(){
    CountdownTimer.textContent = "GAME OVER!!";
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