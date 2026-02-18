(function () {
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const resultEl = document.getElementById("result");
  const explainEl = document.getElementById("explain");
  const sourceEl = document.getElementById("source");
  const feedbackEl = document.getElementById("feedback");

  const nextBtn = document.getElementById("nextBtn");
  const restartBtn = document.getElementById("restartBtn");

  const progressEl = document.getElementById("progress");
  const scoreEl = document.getElementById("score");
  const sessionCodeEl = document.getElementById("sessionCode");

  // جلسة
  sessionCodeEl.textContent =
    "رمز الجلسة: S-" + Math.random().toString(36).substring(2, 8).toUpperCase();

  // تحقق من تحميل بنك الأسئلة
  if (!Array.isArray(window.questions) || window.questions.length === 0) {
    questionEl.textContent = "لم يتم تحميل بنك الأسئلة.";
    answersEl.innerHTML = "";
    feedbackEl.hidden = false;
    resultEl.textContent = "تحقق من ملف questions.js";
    explainEl.textContent =
      "يجب أن يحتوي questions.js على: window.questions = [ ... ] وأن يكون مستدعى قبل script.js داخل index.html.";
    sourceEl.textContent =
      "وتأكد أن الملفات في الجذر وأن اسم questions.js صحيح تمامًا.";
    progressEl.textContent = "سؤال 0 من 0";
    scoreEl.textContent = "الدرجة: 0 / 0";
    nextBtn.disabled = true;
    return;
  }

  let current = 0;
  let score = 0;
  let locked = false;

  function renderMeta() {
    progressEl.textContent = `سؤال ${current + 1} من ${window.questions.length}`;
    scoreEl.textContent = `الدرجة: ${score} / ${window.questions.length}`;
  }

  function loadQuestion() {
    locked = false;
    feedbackEl.hidden = true;
    resultEl.textContent = "";
    explainEl.textContent = "";
    sourceEl.textContent = "";

    const q = window.questions[current];

    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach((txt, idx) => {
      const btn = document.createElement("button");
      btn.className = "answerBtn";
      btn.type = "button";
      btn.textContent = txt;
      btn.addEventListener("click", () => choose(idx));
      answersEl.appendChild(btn);
    });

    nextBtn.hidden = false;
    restartBtn.hidden = true;
    renderMeta();
  }

  function choose(selectedIndex) {
    if (locked) return;
    locked = true;

    const q = window.questions[current];
    const correctIndex = q.correct;

    const buttons = Array.from(answersEl.querySelectorAll("button"));
    buttons.forEach((b) => (b.disabled = true));

    // تلوين الصحيح والخطأ
    buttons[correctIndex]?.classList.add("correct");
    if (selectedIndex !== correctIndex) {
      buttons[selectedIndex]?.classList.add("wrong");
    }

    // نتيجة + شرح + مرجع
    const isCorrect = selectedIndex === correctIndex;
    if (isCorrect) score++;

    feedbackEl.hidden = false;
    resultEl.textContent = isCorrect ? "إجابة صحيحة ✔" : "إجابة خاطئة ✖";
    explainEl.textContent = q.explanation || "—";
    sourceEl.textContent = q.source || "—";

    renderMeta();
  }

  nextBtn.addEventListener("click", () => {
    if (!locked) {
      // لا يسمح بالانتقال قبل الاختيار
      feedbackEl.hidden = false;
      resultEl.textContent = "اختر إجابة أولاً";
      explainEl.textContent = "يجب اختيار أحد الخيارات قبل الانتقال للسؤال التالي.";
      sourceEl.textContent = "";
      return;
    }

    current++;
    if (current < window.questions.length) {
      loadQuestion();
    } else {
      // نهاية
      questionEl.textContent = "انتهى الاختبار";
      answersEl.innerHTML = "";
      feedbackEl.hidden = false;
      resultEl.textContent = `نتيجتك النهائية: ${score} من ${window.questions.length}`;
      explainEl.textContent = "أحسنت. يمكنك إعادة المحاولة لتحسين الدرجة.";
      sourceEl.textContent = "";
      nextBtn.hidden = true;
      restartBtn.hidden = false;
      progressEl.textContent = `سؤال ${window.questions.length} من ${window.questions.length}`;
      scoreEl.textContent = `الدرجة: ${score} / ${window.questions.length}`;
    }
  });

  restartBtn.addEventListener("click", () => {
    current = 0;
    score = 0;
    loadQuestion();
  });

  loadQuestion();
})();
