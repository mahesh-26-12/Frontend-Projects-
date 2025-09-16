// --------------- QUIZ QUESTIONS------------------------
const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '3', correct: false },
            { text: '4', correct: true },
            { text: '5', correct: false },
            { text: '6', correct: false }
        ]
    },
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Lisbon', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'What is 5 * 6?',
        answers: [
            { text: '30', correct: true },
            { text: '25', correct: false },
            { text: '20', correct: false },
            { text: '35', correct: false }
        ]
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        answers: [
            { text: 'Harper Lee', correct: true },
            { text: 'J.K. Rowling', correct: false },
            { text: 'George Orwell', correct: false },
            { text: 'Mark Twain', correct: false }
        ]
    },
    {
        question: 'What is the square root of 64?',
        answers: [
            { text: '6', correct: false },
            { text: '8', correct: true },
            { text: '10', correct: false },
            { text: '12', correct: false }
        ]
    },
    {
        question: 'What is the chemical symbol for water?',
        answers: [
            { text: 'O2', correct: false },
            { text: 'H2O', correct: true },
            { text: 'CO2', correct: false },
            { text: 'HO', correct: false }
        ]
    }
];


// ----------- VARIABLES---------------------
let currentQuestionIndex = 0; 
let score = 0; 

//------------DOM ELEMENTS---------------------
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');

const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const feedbackElement = document.getElementById('feedback');
const restartButton = document.getElementById('restart');



// ------------------- START QUIZ -------------------
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.style.display = 'none';
    quizContainer.style.display = 'block'; 
    nextButton.disabled = true;
    submitButton.style.display = 'none';
    displayQuestion();
}





//-------------------- DISPLAY QUESTION -----------
function displayQuestion() { 
    resetState(); // 

    const currentQuestion = questions[currentQuestionIndex]; 
    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`; 
    

    // Create buttons for each answer
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        
        if (answer.correct) {
            button.dataset.correct = answer.correct;//mark correct option
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });

    //  show "Submit " button on last question
    if (currentQuestionIndex === questions.length - 1) {
        submitButton.style.display = 'block';
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

//-------------------RESET STATE -----------------------------
function resetState() {
    // Remove all previous answers
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    nextButton.disabled = true; // disable next until an answer is selected
}

//---------------------- SELECT ANSWER --------------------------------
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';

    //Increase score if correct
    if (correct) {
        score += 5;
    }

    // Mark all options with correct/wrong colors
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true; //disabled all buttons after selection
        if (button.dataset.correct) {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
    });
    nextButton.disabled = false;//enable Next button
}

// ------------------NEXT BUTTON ---------------
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    displayQuestion();
});

//------------------SUBMIT BUTTON -----------

submitButton.addEventListener('click', () => {
    showResult();
});

// ----------------SHOW RESULT ------------
function showResult() {
    // Hide quiz content
    quizContainer.style.display = 'none'; // hide quiz box
    resultElement.style.display = 'block';

    // show result
    scoreElement.textContent = `Your Score: ${score} / ${questions.length * 5}`;

    // Calculate percentage
    const percentage = (score / (questions.length * 5)) * 100;

   


    // Feedback message
    if (percentage === 100) {
        feedbackElement.textContent = " Excellent! Perfect score! ";
    } else if (percentage >= 60) {
        feedbackElement.textContent = " Good job! You passed.";
    } else {
        feedbackElement.textContent = " keep practicing You'll get better."
    }
    
}

// -----------------RESTART QUIZ ---------------------
restartButton.addEventListener('click',startQuiz)
    
   


//--------------INITIATE QUIZ --------------------
startQuiz();
