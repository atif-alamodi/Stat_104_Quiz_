let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl  = document.getElementById("answers");
const resultEl   = document.getElementById("result");
const explainEl  = document.getElementById("explain");
const sourceEl   = document.getElementById("source");
const nextBtn    = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const progressEl = document.getElementById("progress");
const scoreEl    = document.getElementById("score");
const sessionCodeEl = document.getElementById("sessionCode");
const fatalEl = document.getElementById("fatal");

// رمز الجلسة
sessionCodeEl.textContent = "رمز الجلسة: S-" + Math.random().toString(36).substring(2, 8).toUpperCase();

function fatal(msg){
  fatalEl.style.display = "block";
  fatalEl.textContent = msg;
  questionEl.textContent = "لم يتم تحميل بنك الأسئلة.";
  answersEl.innerHTML = "";
  resultEl.textContent = "";
  explainEl.textContent = "";
  sourceEl.textContent = "";
}

function ensureQuestions(){
  // لازم يكون window.questions = [...]
  if (!Array.isArray(window.questions) || window.questions.length === 0) {
    fatal("لم يتم العثور على أسئلة. تأكد أن ملف questions.js موجود في الجذر ويحتوي: window.questions = [ ... ] وأنه يُستدعى قبل script.js.");
    return false;
  }
  return true;
}

function updateHeader(){
  progressEl.textContent = `سؤال ${currentQuestion + 1} من ${window.questions.length}`;
  scoreEl.textContent = `الدرجة: ${score} / ${window.questions.length}`;
}

function loadQuestion() {
  if (!ensureQuestions()) return;

  answered = false;
  const q = window.questions[currentQuestion];

  updateHeader();
  questionEl.textContent = q.question;

  answersEl.innerHTML = "";
  resultEl.textContent = "";
  explainEl.textContent = "";
  sourceEl.textContent = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index, btn);
    answersEl.appendChild(btn);
  });
}

function lockAnswers(){
  [...answersEl.querySelectorAll("button")].forEach(b => b.disabled = true);
}

function checkAnswer(index, clickedBtn) {
  if (answered) return;
  answered = true;

  const q = window.questions[currentQuestion];
  const correctIndex = q.correct;

  lockAnswers();

  // تلوين بسيط
  const buttons = [...answersEl.querySelectorAll("button")];
  buttons[correctIndex].style.outlineColor = "rgba(0,120,0,.45)";
  buttons[correctIndex].style.background = "rgba(0,120,0,.08)";

  if (index === correctIndex) {
    score++;
    resultEl.textContent = "إجابة صحيحة ✔";
  } else {
    clickedBtn.style.outlineColor = "rgba(160,0,0,.45)";
    clickedBtn.style.background = "rgba(160,0,0,.08)";
    resultEl.textContent = `إجابة خاطئة ✖ — الصحيح: ${q.answers[correctIndex]}`;
  }

  explainEl.textContent = `الشرح: ${q.explanation || "—"}`;
  sourceEl.textContent = `المرجع: ${q.source || "—"}`;

  updateHeader();
}

nextBtn.onclick = () => {
  if (!ensureQuestions()) return;

  currentQuestion++;
  if (currentQuestion < window.questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "انتهى الاختبار";
    answersEl.innerHTML = "";
    resultEl.textContent = `درجتك النهائية: ${score} من ${window.questions.length}`;
    explainEl.textContent = "";
    sourceEl.textContent = "";
    nextBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
    updateHeader();
  }
};

restartBtn.onclick = () => {
  if (!ensureQuestions()) return;

  currentQuestion = 0;
  score = 0;
  nextBtn.style.display = "inline-block";
  restartBtn.style.display = "none";
  loadQuestion();
};

// تشغيل
loadQuestion();
