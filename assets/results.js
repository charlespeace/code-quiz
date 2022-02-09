var initials = document.querySelector('#initials')
var saveScoreBtn = document.querySelector('#saveScoreBtn')
var finalScore = document.querySelector('#finalScore')
var recentScore = localStorage.getItem('recentScore')

var highScores = JSON.parse(localStorage.getItem('highScores')) || []
var MAX_HIGH_SCORE = 5

finalScore.innerText = recentScore

initials.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !initials.value;
})

function saveHighScore(e) {
    console.log('clicked the save button')
    e.preventDefault()

    var score = {
        score: recentScore,
        name: initials.value
    }
    
    highScores.push(score)
    highScores.sort((a,b) => b.score - a.score)
    highScores.splice(5)
    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('./index.html')

}