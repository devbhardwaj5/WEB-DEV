const questions = [
    {
        question: "What is the chemical symbol for Gold?",
        options: ["Au", "Ag", "Gd", "Go"],
        answer: "Au"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        answer: "Albert Einstein"
    },
    {
        question: "What does CPU stand for?",
        options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Performance Unit"],
        answer: "Central Processing Unit"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "3,000 km/s", "30,000 km/s"],
        answer: "300,000 km/s"
    },
    {
        question: "Which device is used to measure temperature?",
        options: ["Barometer", "Thermometer", "Hygrometer", "Altimeter"],
        answer: "Thermometer"
    },
    {
        question: "Who is known as the father of computers?",
        options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage"
    },
    {
        question: "Which part of the cell contains genetic material?",
        options: ["Cytoplasm", "Nucleus", "Cell membrane", "Ribosome"],
        answer: "Nucleus"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "High Text Machine Language", "Hyper Transfer Markup Language"],
        answer: "Hyper Text Markup Language"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreText = document.getElementById("score-text");
const feedback = document.getElementById("feedback");
const restartButton = document.getElementById("restart-btn");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    optionsElement.innerHTML = "";

    current.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectAnswer(option));
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
        score++;
    }
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreText.textContent = `Your Score: ${score} / ${questions.length}`;

    if (score >= 8) {
        feedback.textContent = "Excellent performance!";
    } else if (score >= 5) {
        feedback.textContent = "Good job! Keep improving.";
    } else {
        feedback.textContent = "Try Again. You can do better!";
    }
}

restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;' '                       
    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    loadQuestion();
});

loadQuestion();
