var initials = document.querySelector('#initials')
var saveScoreBtn = document.querySelector('#saveScoreBtn')
var finalScore = document.querySelector('#finalScore')
var recentScore = localStorage.getItem('recentScore')
finalScore.innerText = recentScore

initials.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !initials.value;
})

function saveHighScore(e) {
    console.log('clicked the save button')
    e.preventDefault()
}