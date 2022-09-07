let startBtn = document.getElementById('start');
let greeting = document.getElementById('start-page')
let shownQuestion = document.getElementById('question-name');
let questionsPage = document.getElementById('questions');
let shownOptions = document.getElementById('options');
let scorePage = document.getElementById('score-page');
let finalScore = document.getElementById('final-score');
let initials = document.getElementById('name');
let submitScore = document.getElementById('submit');
let questionIndex = 0;
let timeLeft = questions.length * 15;
let timeShown = document.getElementById('time-left');
let answerFeedback = document.getElementById('result');
let startTime;

function timer(){
    timeShown.textContent = timeLeft;
    timeLeft--;
    timeShown.textContent = timeLeft;
    if(timeLeft <= 0){
        timeLeft.textContent = 0;
        endQuiz();
    }
    
}
function startQuiz() {
    greeting.setAttribute('class', 'hidden');
    questionsPage.removeAttribute('class');
    startTime = setInterval(timer, 1000);
    startQuestions();
}
function startQuestions(){
    let currentQuestion = (questions[questionIndex]);
    shownOptions.innerHTML = '';
    shownQuestion.textContent = currentQuestion.title;
    
    for (let i = 0; i < currentQuestion.options.length; i++){
        let option = currentQuestion.options[i];
        let optionButton = document.createElement('button');
        optionButton.setAttribute('class', 'isButton')
        optionButton.setAttribute('value', option)
        optionButton.textContent = i + 1 + '. ' + option;
        shownOptions.appendChild(optionButton);
        optionButton.addEventListener('click', checkAnswer);
    }
    
}
function checkAnswer(event){
    let selectedChoice = event.target;
    if (selectedChoice.matches('isButton')){
        return;
    }
    if(selectedChoice.value !== questions[questionIndex].answer){
        timeLeft -= 15;
        timeShown.textContent = timeLeft;
        answerFeedback.textContent = 'Wrong!';
    }
    else{
        answerFeedback.textContent = 'Correct!';
    }
    
    answerFeedback.setAttribute('class', 'shown');
    questionIndex ++;
    if(questionIndex > questions.length-1){
        endQuiz();
    }
    else{
        startQuestions();
    }
}

function endQuiz() {
    clearInterval(startTime);
    questionsPage.setAttribute('class', 'hidden');
    scorePage.setAttribute('class', 'shown');
    finalScore.textContent = timeLeft;
}

function saveScore(){
    localStorage.setItem(initials.value, timeLeft);
}
submitScore.addEventListener('click', saveScore);

startBtn.addEventListener('click', startQuiz);