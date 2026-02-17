let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const explanationEl = document.getElementById("explanation");
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const sessionEl = document.getElementById("session");
const nextBtn = document.getElementById("nextBtn");

sessionEl.textContent = "رمز الجلسة: S-" + 
Math.random().toString(36).substring(2,8).toUpperCase();

function loadQuestion() {

    if (!questions || questions.length === 0) {
        questionEl.textContent = "لم يتم تحميل بنك الأسئلة.";
        return;
    }

    const q = questions[current];

    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    feedbackEl.textContent = "";
    explanationEl.textContent = "";

    progressEl.textContent = `سؤال ${current+1} من ${questions.length}`;
    scoreEl.textContent = `الدرجة: ${score} / ${questions.length}`;

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index);
        answersEl.appendChild(btn);
    });
}

function checkAnswer(index) {

    const q = questions[current];

    if (index === q.correct) {
        score++;
        feedbackEl.textContent = "إجابة صحيحة ✔";
    } else {
        feedbackEl.textContent = "إجابة خاطئة ✖";
    }

    explanationEl.textContent = "الشرح: " + q.explanation;

    scoreEl.textContent = `الدرجة: ${score} / ${questions.length}`;
}

nextBtn.onclick = function() {

    current++;

    if (current < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "انتهى الاختبار";
        answersEl.innerHTML = "";
        feedbackEl.textContent = "";
        explanationEl.textContent = "";
    }
};

loadQuestion();
