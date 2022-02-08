var choices = Array.from(document.querySelectorAll('.choice-text'))
var question = document.querySelector('#question')
var scoreText = document.querySelector('#score')
var timer = document.querySelector('#timer')

var currentQuestion = {}
var acceptingAnswers = false
var score = 0
var questionCounter = 0
var availableQuestions = []

var questions= [
    {
        question: 'How many letters are there in the word "Garlic"?',
        choice1: '5',
        choice2: '10',
        choice3: '6',
        choice4: '3',
        answer: 3
    },
    {
        question: 'Which is a primary color?',
        choice1: 'Orange',
        choice2: 'Blue',
        choice3: 'Green',
        choice4: 'Purple',
        answer: 2
    },
    {
        question: 'Which number is the smallest?',
        choice1: '342',
        choice2: '165',
        choice3: '234',
        choice4: '982',
        answer: 2
    },
    {
        question: 'What is 4 + 4?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '8',
        answer: 4
    }
]

var CORRECT_BONUS = 10
var MAX_QUESTIONS = 4

startQuiz = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    console.log(availableQuestions)
    getNewQuestion();
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign('./results.html')
    }
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question
    choices.forEach(choice => {
        var number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionIndex, 1)
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        console.log(e.target)
        if(!acceptingAnswers) return
        acceptingAnswers = false
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset['number']

        var classToApply = 'incorrect'
            if (selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct'
            }
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion();
        }, 600)
    })
})

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startQuiz()

