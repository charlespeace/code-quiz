// Create variables to reference html elements
var quizContainter = document.querySelector('#quiz')
var resultsContainer = document.querySelector('#results')
var startButton = document.querySelector('#start')

// Create variable to store questions/answers
var questions = [
    {
        question: "How many are there?",
        choice: ["one", "two", "three", "four"],
        answer: "one"
    },
    {
        question: "How many are there?",
        choice: ["one", "two", "three", "four"],
        answer: "one"
    },
    {
        question: "How many are there?",
        choice: ["one", "two", "three", "four"],
        answer: "one"
    },
    {
        question: "How many are there?",
        choice: ["one", "two", "three", "four"],
        answer: "one"
    },
]

// Function to start quiz
function startQuiz(){}
// Function to build quiz results based on user input
function buildQuiz(){}

// Function to display results on screen once done
function showResults(){}

buildQuiz();
// Add listener to start button to begin quiz
startButton.addEventListener ("click", startQuiz)
