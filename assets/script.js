var choices = Array.from(document.querySelectorAll('.choice-text'))
var question = document.querySelector('#question')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions= [
    {
        question: 'What is 1 + 1?',
        choice1: '2',
        choice2: '3',
        choice3: '4',
        choice4: '5',
        answer: 2
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '3',
        choice3: '4',
        choice4: '5',
        answer: 2
    },
    {
        question: 'What is 3 + 3?',
        choice1: '2',
        choice2: '3',
        choice3: '4',
        choice4: '5',
        answer: 2
    },
    {
        question: 'What is 3 + 3?',
        choice1: '2',
        choice2: '3',
        choice3: '4',
        choice4: '5',
        answer: 2
    }
]

var CORRECT_BONES = 10
var MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    questionCounter++
    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    choices.forEach(choice => {
        var number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true
}
startGame()

