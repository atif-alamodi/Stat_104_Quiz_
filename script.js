"use strict";

/** توقع شكل السؤال:
 * {
 *   id: 1,
 *   question: "....",
 *   choices: ["A","B","C","D"],
 *   correctIndex: 1,
 *   explanation: "....",
 *   source: { lesson: "الدرس الثاني", page: "ص 3" }
 * }
 */

let currentQuestion = 0;
let score = 0;
let locked = false; // لمنع زيادة الدرجة بالضغط المتكرر

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const explainEl = document.getElementById("explain");
const sourceEl = document.getElementById("source");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const progressEl = document.getElementById("progress");
const scoreBoxEl = document.getElementById("scoreBox");
const sessionCodeEl = document.getElementById("sessionCode");
const hintEl = document.getElementById("hint");

// تأكيد وجود بنك الأسئلة
function getQuestionsSafe(){
  const q = window.questions;
  if (!Array.isArray(q) || q.length === 0) return null;
  return q;
}

function setSessionCode(){
  const code = "S-" + Math.random().toString(36).substring(2, 8).toUpperCase();
  sessionCodeEl.textContent = "رمز الجلسة: " + code;
}

function setHint(text){ hintEl.textContent = text || ""; }

function renderError(msg){
  questionEl.textContent = "لم يتم تحميل بنك الأسئلة.";
  answersEl.innerHTML = "";
  resultEl.textContent = "";
  explainEl.textContent = msg || "تأكد من وجود ملف questions.js وأنه يعرّف window.questions كمصفوفة.";
  sourceEl.textContent = "تأكد أن الملفات في الجذر: index.html / style.css / questions.js / script.js / founding-logo.png";
  progressEl.textContent = "سؤال 0 من 0";
  scoreBoxEl.textContent = "الدرجة: 0 / 0";
  nextBtn.disabled = true;
}

function updateMeta(total){
  progressEl.textContent = `سؤال ${Math.min(currentQuestion + 1, total)} من ${total}`;
  scoreBoxEl.textContent = `الدرجة: ${score} / ${total}`;
}

function loadQuestion(){
  const qs = getQuestionsSafe();
  if (!qs) return renderError("لم أجد window.questions. افتح questions.js وتأكد أنه يبدأ بـ: window.questions = [ ... ];");

  locked = false;
  nextBtn.disabled = true;

  const q = qs[currentQuestion];
  updateMeta(qs.length);

  questionEl.textContent = q.question;

  // مرجع
  const lesson = q?.source?.lesson ? q.source.lesson : "—";
  const page = q?.source?.page ? q.source.page : "—";
  sourceEl.textContent = `المرجع: ${lesson} — ${page}`;

  resultEl.textContent = "";
  explainEl.textContent = "";

  answersEl.innerHTML = "";
  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = choice;

    btn.addEventListener("click", () => checkAnswer(index, btn));
    answersEl.appendChild(btn);
  });

  setHint("اختر إجابة لعرض التصحيح والشرح ثم اضغط (السؤال التالي).");
}

function lockButtons(){
  const buttons = answersEl.querySelectorAll("button");
  buttons.forEach(b => b.disabled = true);
}

function markCorrectButton(correctIndex){
  const buttons = answersEl.querySelectorAll("button");
  if (buttons[correctIndex]) buttons[correctIndex].classList.add("correct");
}

function checkAnswer(index, clickedBtn){
  if (locked) return;
  locked = true;

  const qs = getQuestionsSafe();
  const q = qs[currentQuestion];

  const correct = q.correctIndex;

  lockButtons();

  if (index === correct){
    score++;
    clickedBtn.classList.add("correct");
    resultEl.textContent = "إجابة صحيحة ✔";
  } else {
    clickedBtn.classList.add("wrong");
    markCorrectButton(correct);
    resultEl.textContent = "إجابة خاطئة ✖ — الإجابة الصحيحة تم تمييزها باللون الأخضر.";
  }

  // الشرح
  explainEl.textContent = q.explanation || "—";

  updateMeta(qs.length);
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  const qs = getQuestionsSafe();
  if (!qs) return;

  currentQuestion++;
  if (currentQuestion < qs.length){
    loadQuestion();
  } else {
    // نهاية
    questionEl.textContent = "انتهى الاختبار ✅";
    answersEl.innerHTML = "";
    resultEl.textContent = `درجتك النهائية: ${score} من ${qs.length}`;
    explainEl.textContent = "يمكنك إعادة الاختبار للحصول على رمز جلسة جديد.";
    sourceEl.textContent = "";
    nextBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
    updateMeta(qs.length);
    setHint("");
  }
});

restartBtn.addEventListener("click", () => {
  const qs = getQuestionsSafe();
  if (!qs) return;

  currentQuestion = 0;
  score = 0;
  nextBtn.style.display = "inline-block";
  restartBtn.style.display = "none";
  setSessionCode();
  loadQuestion();
});

// تشغيل
setSessionCode();
const qs0 = getQuestionsSafe();
if (!qs0) renderError("بنك الأسئلة غير محمّل بعد. افتح questions.js وضع window.questions = [ ... ];");
else loadQuestion();
