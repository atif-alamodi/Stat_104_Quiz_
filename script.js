window.questions = [
  // ======================
  // (1–10) مفاهيم أساسية
  // ======================
  {
    question: "علم الإحصاء يهتم أساسًا بـ:",
    choices: ["تصميم المواقع", "جمع وتنظيم وتحليل البيانات", "إدارة الشبكات", "البرمجة فقط"],
    correctIndex: 1,
    explanation: "الإحصاء هو علم جمع البيانات وتنظيمها وتحليلها وتفسيرها لاتخاذ قرارات.",
    source: { lesson: "الدرس الثاني", page: "ص 6" }
  },
  {
    question: "من وظائف علم الإحصاء:",
    choices: ["جمع البيانات فقط", "تحليل البيانات فقط", "نشر النتائج فقط", "جميع ما سبق"],
    correctIndex: 3,
    explanation: "يشمل الإحصاء جمع البيانات وتحليلها ونشر النتائج.",
    source: { lesson: "الدرس الثاني", page: "ص 7" }
  },
  {
    question: "المجتمع الإحصائي يتميز بـ:",
    choices: ["عدد غير معروف من الأفراد", "عدد معروف من الأفراد", "عدم وجود خصائص", "عدم استخدامه في الدراسات"],
    correctIndex: 1,
    explanation: "المجتمع الإحصائي له عدد معروف من الأفراد.",
    source: { lesson: "الدرس الثاني", page: "ص 9" }
  },
  {
    question: "رمز عدد أفراد المجتمع الإحصائي هو:",
    choices: ["n", "x̄", "μ", "N"],
    correctIndex: 3,
    explanation: "يرمز لعدد أفراد المجتمع بـ N.",
    source: { lesson: "الدرس الثاني", page: "ص 9" }
  },
  {
    question: "العينة هي:",
    choices: ["جميع أفراد المجتمع", "جزء من المجتمع", "أكبر من المجتمع", "لا علاقة لها بالمجتمع"],
    correctIndex: 1,
    explanation: "العينة جزء من المجتمع الإحصائي.",
    source: { lesson: "الدرس الثاني", page: "ص 10" }
  },
  {
    question: "أي مما يلي يُعد متغيرًا كميًا؟",
    choices: ["اللون", "الجنس", "الطول", "المهنة"],
    correctIndex: 2,
    explanation: "الطول متغير كمي لأنه يُقاس بالأرقام.",
    source: { lesson: "الدرس الثاني", page: "ص 13" }
  },
  {
    question: "أي مما يلي يُعد متغيرًا نوعيًا؟",
    choices: ["الوزن", "عدد الطلاب", "درجة الحرارة", "المهنة"],
    correctIndex: 3,
    explanation: "المهنة متغير نوعي وصفي.",
    source: { lesson: "الدرس الثاني", page: "ص 13" }
  },
  {
    question: "المتوسط الحسابي يُحسب عن طريق:",
    choices: ["أكبر قيمة − أصغر قيمة", "مجموع القيم ÷ عددها", "القيمة الوسطى", "القيمة الأكثر تكرارًا"],
    correctIndex: 1,
    explanation: "المتوسط = مجموع القيم مقسومًا على عددها.",
    source: { lesson: "الدرس الثاني", page: "ص 28" }
  },
  {
    question: "الوسيط هو:",
    choices: ["القيمة الأكثر تكرارًا", "القيمة المتوسطة بعد الترتيب", "مجموع القيم", "أصغر قيمة"],
    correctIndex: 1,
    explanation: "الوسيط هو القيمة التي تتوسط البيانات بعد ترتيبها.",
    source: { lesson: "الدرس الثاني", page: "ص 30" }
  },
  {
    question: "المنوال هو:",
    choices: ["القيمة المتوسطة", "القيمة الأكثر تكرارًا", "الفرق بين القيم", "مجموع الانحرافات"],
    correctIndex: 1,
    explanation: "المنوال هو أكثر قيمة تكرارًا.",
    source: { lesson: "الدرس الثاني", page: "ص 31" }
  },

  // ======================
  // (11–20) حسابات بسيطة
  // ======================
  {
    question: "للقيم: 2، 4، 6، 8 — ما المتوسط؟",
    choices: ["4", "5", "6", "8"],
    correctIndex: 1,
    explanation: "(2+4+6+8)/4 = 20/4 = 5.",
    source: { lesson: "الدرس الثاني", page: "ص 28" }
  },
  {
    question: "للقيم: 1، 3، 5 — ما الوسيط؟",
    choices: ["1", "3", "5", "9"],
    correctIndex: 1,
    explanation: "بعد الترتيب، القيمة الوسطى هي 3.",
    source: { lesson: "الدرس الثاني", page: "ص 30" }
  },
  {
    question: "للقيم: 2، 2، 4، 6 — ما المنوال؟",
    choices: ["2", "4", "6", "لا يوجد"],
    correctIndex: 0,
    explanation: "القيمة 2 هي الأكثر تكرارًا.",
    source: { lesson: "الدرس الثاني", page: "ص 31" }
  },
  {
    question: "من عيوب المتوسط الحسابي:",
    choices: ["لا يتأثر بالقيم المتطرفة", "يتأثر بالقيم المتطرفة", "لا يمكن حسابه", "غير مستخدم"],
    correctIndex: 1,
    explanation: "المتوسط يتأثر بالقيم المتطرفة.",
    source: { lesson: "الدرس الثاني", page: "ص 32" }
  },
  {
    question: "إذا أضفنا قيمة كبيرة جدًا للبيانات، فأي مقياس يتغير أكثر؟",
    choices: ["المنوال", "الوسيط", "المتوسط", "لا شيء"],
    correctIndex: 2,
    explanation: "المتوسط أكثر تأثرًا بالقيم المتطرفة.",
    source: { lesson: "الدرس الثاني", page: "ص 30" }
  },
  {
    question: "للقيم: 3، 3، 9 — ما المتوسط؟",
    choices: ["3", "4", "5", "6"],
    correctIndex: 2,
    explanation: "(3+3+9)/3 = 15/3 = 5.",
    source: { lesson: "الدرس الثاني", page: "ص 28" }
  },
  {
    question: "للقيم: 1، 2، 100 — ما الوسيط؟",
    choices: ["1", "2", "50", "100"],
    correctIndex: 1,
    explanation: "القيمة الوسطى بعد الترتيب هي 2.",
    source: { lesson: "الدرس الثاني", page: "ص 30" }
  },
  {
    question: "أي مقياس أقل تأثرًا بالقيم المتطرفة؟",
    choices: ["المتوسط", "الوسيط", "المنوال", "المدى"],
    correctIndex: 1,
    explanation: "الوسيط أقل تأثرًا بالقيم المتطرفة.",
    source: { lesson: "الدرس الثاني", page: "ص 30" }
  },
  {
    question: "للقيم: 2، 2، 3، 3 — ما عدد المنوالات؟",
    choices: ["منوال واحد", "منوالان", "ثلاثة", "لا يوجد"],
    correctIndex: 1,
    explanation: "يوجد منوالان (2 و3).",
    source: { lesson: "الدرس الثاني", page: "ص 27" }
  },
  {
    question: "المدى يُحسب بواسطة:",
    choices: ["مجموع القيم", "أكبر − أصغر", "الجذر التربيعي", "المتوسط × العدد"],
    correctIndex: 1,
    explanation: "المدى = أكبر قيمة − أصغر قيمة.",
    source: { lesson: "الدرس الثاني", page: "ص 32" }
  },

  // ======================
  // (21–30) Excel (الدوال المذكورة)
  // ======================
  {
    question: "الدالة المستخدمة لحساب المتوسط في Excel هي:",
    choices: ["SUM", "COUNT", "AVERAGE", "MEDIAN"],
    correctIndex: 2,
    explanation: "AVERAGE تحسب المتوسط الحسابي.",
    source: { lesson: "الدرس الثاني", page: "ص 28" }
  },
  {
    question: "الدالة المستخدمة لحساب الوسيط في Excel هي:",
    choices: ["MODE", "AVERAGE", "MEDIAN", "COUNT"],
    correctIndex: 2,
    explanation: "MEDIAN تحسب الوسيط.",
    source: { lesson: "الدرس الثاني", page: "ص 30" }
  },
  {
    question: "أي دالة تعطي منوالًا واحدًا فقط؟",
    choices: ["MODE.MULT", "MODE.SNGL", "AVERAGE", "MEDIAN"],
    correctIndex: 1,
    explanation: "MODE.SNGL تُرجع منوالًا واحدًا.",
    source: { lesson: "الدرس الثاني", page: "ص 31" }
  },
  {
    question: "أي دالة تُستخدم لحساب المتوسط بشرط واحد؟",
    choices: ["AVERAGE", "AVERAGEIF", "AVERAGEIFS", "MEDIAN"],
    correctIndex: 1,
    explanation: "AVERAGEIF تحسب المتوسط بشرط واحد.",
    source: { lesson: "الدرس الثاني", page: "ص 29" }
  },
  {
    question: "أي دالة تُستخدم لحساب المتوسط بعدة شروط؟",
    choices: ["AVERAGE", "AVERAGEIF", "AVERAGEIFS", "MODE"],
    correctIndex: 2,
    explanation: "AVERAGEIFS تُستخدم لعدة شروط.",
    source: { lesson: "الدرس الثاني", page: "ص 29" }
  },
  {
    question: "إذا كانت بعض الخلايا فارغة، فإن AVERAGE:",
    choices: ["تحسبها صفرًا", "تتجاهلها", "تعطي خطأ", "تضاعف المتوسط"],
    correctIndex: 1,
    explanation: "AVERAGE تتجاهل الخلايا الفارغة.",
    source: { lesson: "الدرس الثاني", page: "ص 28" }
  },
  {
    question: "MODE.MULT تُستخدم عندما:",
    choices: ["يوجد منوال واحد", "لا يوجد منوال", "يوجد أكثر من منوال", "لحساب الوسيط"],
    correctIndex: 2,
    explanation: "MODE.MULT تُرجع جميع المنوالات.",
    source: { lesson: "الدرس الثاني", page: "ص 31" }
  },
  {
    question: "أي دالة لا تحسب المتوسط؟",
    choices: ["AVERAGE", "AVERAGEIF", "MEDIAN", "AVERAGEIFS"],
    correctIndex: 2,
    explanation: "MEDIAN تحسب الوسيط وليس المتوسط.",
    source: { lesson: "الدرس الثاني", page: "ص 30" }
  },
  {
    question: "دالة AVERAGEIFS تحتاج إلى:",
    choices: ["نطاق واحد فقط", "شرط واحد فقط", "عدة شروط", "عدم وجود شروط"],
    correctIndex: 2,
    explanation: "AVERAGEIFS تُستخدم لعدة شروط.",
    source: { lesson: "الدرس الثاني", page: "ص 29" }
  },
  {
    question: "أي دالة تُستخدم لإرجاع أكثر من منوال؟",
    choices: ["MODE", "MODE.SNGL", "MODE.MULT", "AVERAGE"],
    correctIndex: 2,
    explanation: "MODE.MULT تُرجع أكثر من منوال.",
    source: { lesson: "الدرس الثاني", page: "ص 31" }
  },

  // ======================
  // (31–50) Z-score (الدرس الثالث)
  // ======================
  {
    question: "قيمة Z تُستخدم لـ:",
    choices: ["حساب المتوسط", "قياس تشتت البيانات", "تحديد موقع القيمة بالنسبة للمتوسط", "حساب المنوال"],
    correctIndex: 2,
    explanation: "Z تُحدد موقع القيمة بالنسبة للمتوسط والانحراف المعياري.",
    source: { lesson: "الدرس الثالث", page: "ص 19" }
  },
  {
    question: "إذا كانت Z = 0 فإن القيمة:",
    choices: ["أكبر من المتوسط", "أصغر من المتوسط", "تساوي المتوسط", "قيمة شاذة"],
    correctIndex: 2,
    explanation: "Z = 0 تعني أن القيمة تساوي المتوسط.",
    source: { lesson: "الدرس الثالث", page: "ص 19" }
  },
  {
    question: "إذا كانت Z موجبة فهذا يعني أن القيمة:",
    choices: ["أقل من المتوسط", "أكبر من المتوسط", "تساوي المتوسط", "شاذة"],
    correctIndex: 1,
    explanation: "Z موجبة تعني أعلى من المتوسط.",
    source: { lesson: "الدرس الثالث", page: "ص 19" }
  },
  {
    question: "إذا كانت Z سالبة فهذا يعني أن القيمة:",
    choices: ["أعلى من المتوسط", "أقل من المتوسط", "تساوي المتوسط", "غير معروفة"],
    correctIndex: 1,
    explanation: "Z سالبة تعني أقل من المتوسط.",
    source: { lesson: "الدرس الثالث", page: "ص 19" }
  },
  {
    question: "القيمة تُعد متطرفة محتملة إذا:",
    choices: ["|Z| < 1", "|Z| = 0", "|Z| > 2", "Z = 1"],
    correctIndex: 2,
    explanation: "|Z| > 2 تشير إلى قيمة متطرفة محتملة.",
    source: { lesson: "الدرس الثالث", page: "ص 19" }
  },
  {
    question: "القيمة تُعد شاذة بقوة إذا:",
    choices: ["|Z| > 1", "|Z| > 2", "|Z| > 3", "Z = 0"],
    correctIndex: 2,
    explanation: "|Z| > 3 تشير إلى قيمة شاذة بقوة.",
    source: { lesson: "الدرس الثالث", page: "ص 19" }
  },
  {
    question: "احسب Z إذا كان المتوسط 10 والانحراف 2 والقيمة 14:",
    choices: ["1", "2", "-2", "0"],
    correctIndex: 1,
    explanation: "Z = (14−10)/2 = 2.",
    source: { lesson: "الدرس الثالث", page: "ص 19" }
  },
  {
    question: "احسب Z إذا كان المتوسط 8 والانحراف 4 والقيمة 4:",
    choices: ["-1", "1", "-2", "2"],
    correctIndex: 0,
    explanation: "Z = (4−8)/4 = −1.",
    source: { lesson: "الدرس الثالث", page: "ص 19" }
  },
  {
    question: "تُستخدم Z لمقارنة الأداء بين مواد مختلفة لأن:",
    choices: ["تحول القيم إلى نسب", "توحّد القياس", "تلغي الانحراف", "تحسب المتوسط"],
    correctIndex: 1,
    explanation: "Z توحّد القياس بمراعاة المتوسط والانحراف.",
    source: { lesson: "الدرس الثالث", page: "ص 20" }
  },
  {
    question: "في مثال المقارنة بين مادتين، الأفضل نسبيًا هو صاحب:",
    choices: ["أعلى درجة خام", "أعلى Z", "أقل متوسط", "أقل انحراف"],
    correctIndex: 1,
    explanation: "الأفضل نسبيًا هو صاحب القيمة المعيارية Z الأعلى.",
    source: { lesson: "الدرس الثالث", page: "ص 20" }
  }
];
