let startBtn = document.getElementById('start');
let greeting = document.getElementById('start-page')
let shownQuestion = document.getElementById('current-question');
let questionsPage = document.getElementById('questions');
let shownOptions = document.getElementById('options');
let questionIndex = 0;
let timeLeft = questions.length * 15;
let timeShown = document.getElementById('time-left');

function timer(){
    timeShown.textContent = timeLeft;
    timeLeft--;
}
function startQuiz() {
    greeting.setAttribute('class', 'hidden');
    questionsPage.removeAttribute('class');
    let startTime = setInterval(timer, 1000);
    startQuestions();
}
function startQuestions(){
    let currentQuestion = (questions[questionIndex]);
    shownQuestion.textContent = currentQuestion.title;
    for (let i = 0; i < currentQuestion.options.length; i++){
        let option = currentQuestion.options[i];
        let optionButton = document.createElement('button');
        optionButton.textContent = i + 1 + '. ' + option;
        shownOptions.appendChild(optionButton);
    }
}
function

    
    



startBtn.addEventListener('click', startQuiz);