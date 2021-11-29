const quizData = [ { 

    question: 'O nome do meio do Homer Simpson é...',
    a: 'John',
    b: 'Johnson',
    c: 'Jay',
    d: 'Jorge',
    correct: 'c'
},
{
 question: 'Quantos anos tinha Harry Potter no primeiro filme?',
     a: '11',
     b: '09',
     c: '12',
     d: '15',
     correct: 'a'
},
{
    question: "Qual é o nome do pai do Nemo em 'Procurando o Nemo'?",
    a: 'Barrier',
    b: 'Marlin',
    c: 'Jake',
    d: 'Albert',
    correct: 'b'
},
{ question: "Qual é personagem principal de 'Resident Evil 4'?",
  a: 'Leon',
  b: 'Chris',
  c: 'Isa',
  d: 'Jil',
  correct: 'a'


},
 { 
    question: "Quantos filmes possui a saga 'Senhor dos Anéis'?",
    a: '7',
    b: '4',
    c: '5',
    d: '3',
    correct: 'd'

}];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Você respondeu corretamente ${score}/${quizData.length} questões.</h2>
                
                <button onclick="location.reload()">Tentar Novamente</button>
            `;
        }
    }
});