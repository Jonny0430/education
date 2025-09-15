// libs/grammar.ts
export type GLevel = "Boshlang'ich" | "O'rta 1" | "O'rta 2" | "Yuqori";

export type Example = {
  ko: string; uz: string; ru?: string; en?: string;
};

export type Quiz = {
  id: string;
  question: string;                 // Savol matni (bo'sh joylar ... bilan)
  options: string[];                // Variantlar
  correctIndex: number;             // To'g'ri indeks
  explain?: string;                 // Izoh
};

export type GrammarPoint = {
  id: string;                       // URL uchun
  title: string;                    // Masalan: "은/는 va 이/가"
  level: GLevel;
  tags?: string[];                  // TOPIK A1, Subject marker...
  meaning: string;                  // Qisqa ta'rif
  forms: string[];                  // Shakllar ro'yxati
  usage: string;                    // Qachon ishlatiladi
  compare?: string;                 // Farqlash/taqqoslash
  notes?: string[];                 // Eslatmalar
  examples: Example[];              // Misollar
  quiz?: Quiz[];                    // Mini-quiz
};

export const GRAMMAR: GrammarPoint[] = [
  {
    id: "eun-neun-iga",
    title: "은/는 va 이/가",
    level: "O'rta 1",
    tags: ["TOPIK A1", "Subject/Topic"],
    meaning: "은/는 — mavzuni ta’kidlaydi; 이/가 — subyektni aniq belgilaydi.",
    forms: ["(받침) + 은", "(받침 yo‘q) + 는", "(받침) + 이", "(받침 yo‘q) + 가"],
    usage:
      "Yangi axborotni kiritishda odatda 이/가; taqqoslash yoki mavzuni ajratishda 은/는 ishlatiladi.",
    compare:
      "‘저는 학생이에요’ (mavzu — men). ‘누가 학생이에요?’ savolida ‘제가 학생이에요’ (subyekt — men).",
    notes: [
      "철수는 학생이에요 — ta’kid ‘Cholsu’ ustida.",
      "철수가 학생이에요 — ‘kim?’ savoliga javob.",
    ],
    examples: [
      { ko: "저는 한국 사람이에요.", uz: "Men koreysman.", en: "I am Korean." },
      { ko: "누가 선생님이에요? 제가 선생님이에요.", uz: "O‘qituvchi kim? Men o‘qituvchiman." },
    ],
    quiz: [
      {
        id: "q1",
        question: "저___ 학생이에요.",
        options: ["는", "이", "가"],
        correctIndex: 0,
        explain: "‘저’ — 받침 yo‘q + mavzu → 는.",
      },
      {
        id: "q2",
        question: "누구___ 집이에요?",
        options: ["는", "이", "가"],
        correctIndex: 2,
        explain: "Savolda subyekt kerak → 이/가.",
      },
    ],
  },
  {
    id: "go-sipda",
    title: "-고 싶다 (xohlamoq)",
    level: "Boshlang'ich",
    tags: ["Desire", "TOPIK A1"],
    meaning: "Fe’lga qo‘shilib, ‘...ni xohlamoq’ ma’nosini beradi.",
    forms: ["V-고 싶다", "V-고 싶어요 (hamsuhbatga hurmat)", "V-고 싶어(yoqinqiroq)"],
    usage: "Reja va istakni bildirish: ‘Men borishni xohlayman’.",
    examples: [
      { ko: "한국에 가고 싶어요.", uz: "Koreyaga bormoqchiman (borishni xohlayman)." },
      { ko: "김치를 먹고 싶어요.", uz: "Kimchi yegim kelyapti." },
    ],
    quiz: [
      {
        id: "q1",
        question: "책을 읽___ 싶어요.",
        options: ["고", "는", "이"],
        correctIndex: 0,
        explain: "V + 고 싶다 shakli.",
      },
    ],
  },
  {
    id: "a-eyo-eoyo",
    title: "-아요/어요 hozirgi zamon (xushmuomala)",
    level: "Boshlang'ich",
    tags: ["Polite present", "Conjugation"],
    meaning: "Xushmuomala hozirgi/odat zamoni.",
    forms: ["아/오 unli — 아요", "boshqa unlilar — 어요", "하다 → 해요"],
    usage:
      "Kundalik xushmuomala nutqda: 가요, 먹어요, 공부해요.",
    examples: [
      { ko: "저는 커피를 마셔요.", uz: "Men qahva ichaman." },
      { ko: "지금 집에 가요.", uz: "Hozir uyga ketayapman." },
    ],
  },
];
