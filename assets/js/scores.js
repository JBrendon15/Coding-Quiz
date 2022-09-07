let highScores = document.getElementById('highscores');
let clearHighscores = document.getElementById('clear-scores');
function getScores(){
    let allScores = JSON.parse(localStorage.getItem('individualScores'));
    function compare(a, b) {
        if ( a.score > b.score){
          return -1;
        }
        if ( a.score < b.score){
          return 1;
        }
        return 0;
    };
    allScores.sort(compare);
    
    for(let i = 0; i < allScores.length; i++){
        let eachScore = document.createElement('li');
        let currentObj = allScores[i];
        eachScore.textContent = `${currentObj.name} - ${currentObj.score}`
        highScores.appendChild(eachScore);
        eachScore.setAttribute('style','font-size: 150%')
    };
};
clearHighscores.addEventListener('click',function(){
    localStorage.clear();
    location.reload();
})
getScores();
