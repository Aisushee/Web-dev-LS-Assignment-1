const questions= [
   { 
    question: "What does the 5 rings in the olympic logo stand for?",
    answers: [
        { text:"5 oceans on the earth", correct : false },
        { text :"5 continents in the world", correct : true},
        { text: "Both of the above", correct: false},
        ]
   },
   {
    question: "The body which governs the olympics affairs, IOC is the abbreviated form for what name?",
    answers: [
        {text:"International Olympic Council", correct : false},
        {text:"Institute of Olympics Congress", correct: false},
        {text: "International Olympic Committee", correct: true},
    ]
   }
];
const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-button");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0 ;
let score= 0;

function startQuiz(){
    currentQuestionIndex = 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo +". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        
    });
}

function resetState(){
nextButton.style.display= "none";
while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
}
}

startQuiz();
