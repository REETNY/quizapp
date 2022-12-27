

const quizData = [
    {
        question: 'How old is Shamsideen?',
        opt1: 15,
        opt2: 21,
        opt3: 32,
        opt4: 22,
        correct: 21
    },
    {
        question: 'When is Shamsideen Birthdaay?',
        opt1: "19th of Jan",
        opt2: "17th of March",
        opt3: "30th of May",
        opt4: "3rd of June",
        correct: "19th of Jan"
    },
    {
        question: 'What is Shamsideen Favourite Sport?',
        opt1: `Football`,
        opt2: `Soccer`,
        opt3: `Boxing`,
        opt4: `Formula1`,
        correct: `Football`
    },
    {
        question: 'Which state is Shamsideen from?',
        opt1: `Kwara`,
        opt2: `Osun`,
        opt3: `Ekiti`,
        opt4: `Lagos`,
        correct: `Lagos`
    },
    {
        question: 'What is Shamsideen favourite movie?',
        opt1: `Pianist`,
        opt2: `The Shaw Shank Redemption`,
        opt3: `Game of Throne`,
        opt4: `John Wick`,
        correct: `Pianist`
    }
];


const quizBody = document.querySelector(".quiz-body");
const questionCont = document.querySelector("#question");
const option1 = document.querySelector("#a_text");
const option2 = document.querySelector("#b_text");
const option3 = document.querySelector("#c_text");
const option4 = document.querySelector("#d_text");
const radioInputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("#btn");


console.log(quizData.length)

let questionCount = 0;
let userAnswer;
let score = 0;

function getQuestion() {

    questionData = quizData[questionCount];

    questionCont.textContent = questionData.question;
    option1.textContent = questionData.opt1;
    option2.textContent = questionData.opt2;
    option3.textContent = questionData.opt3;
    option4.textContent = questionData.opt4;


};


//getAnswer
function getAnswer(){
    radioInputs.forEach(item => {
        if(item.checked){
            if(true){
                userAnswer = item.nextElementSibling.textContent;
                console.log(userAnswer);
            }
        }
    })
};

// checkAnswer
function checkAnswer(){
    if(userAnswer == questionData.correct){
        score++;
        console.log(score)
    }
};

// getnextquestion
function getnextquestion(){
    radioInputs.forEach(item => item.checked = false);
    questionCount++;
};

submitBtn.addEventListener("click", () => {

    radioInputs.forEach( item => {
        if(item.checked){
            getAnswer();
            checkAnswer();
            getnextquestion();

            if(questionCount < quizData.length){
                getQuestion();
            }else{
               gameOver(); 
            }
        }else{
            return;
        }
    })
    
});






window.addEventListener("load", () => {
    const body = document.body;

    const startBtn = document.createElement("button");
    startBtn.classList.add("startBtn");
    startBtn.textContent = `Start Game`;
    body.appendChild(startBtn);
    quizBody.style.display = "none";

    startBtn.addEventListener("click", () => {
        body.removeChild(startBtn);
        quizBody.style.display = "block";
        getQuestion();
    })
})


function gameOver() {
    const body = document.body;
    body.removeChild(quizBody);

    const gameOverCont = document.createElement("div");
    gameOverCont.classList.add("quiz-body");

    const userScore = document.createElement("div");
    userScore.textContent = `You scored ${score} out of ${quizData.length} questions!`;
    userScore.setAttribute("class","question-cont");

    const restartGame = document.createElement("button");
    restartGame.textContent = "Restart";
    restartGame.classList.add("restart");


    restartGame.addEventListener("click", () => {
        body.innerHTML = "";

        score = 0;
        questionCount = 0;
        userAnswer = undefined;

        body.appendChild(quizBody);
        getQuestion();
    })


    const endGame = document.createElement("button");
    endGame.textContent = "End";
    endGame.classList.add("end");

    endGame.addEventListener("click", () => {
        location.reload();
    })






    const btnCont = document.createElement("div");
    btnCont.setAttribute("class", "btnCont")

    btnCont.appendChild(restartGame);
    btnCont.appendChild(endGame);

    gameOverCont.appendChild(userScore);
    gameOverCont.appendChild(btnCont);
    body.appendChild(gameOverCont);

}

