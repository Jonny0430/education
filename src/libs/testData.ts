import type { TestPack } from "./testTypes";

// Demo savollar (real loyihada backenddan olasan)
export const TESTS: TestPack[] = [
  {
    id: "t_topik_vocab_daily_beg",
    title: "Leksika — kundalik so‘zlar (TOPIK I)",
    category: "TOPIK",
    topic: "Vocabulary",
    level: "Boshlang'ich",
    durationSec: 7 * 60,
    questions: [
      {
        id: "q1",
        stem: "‘학교’ so‘zining ma’nosi qaysi?",
        options: [
          { id: "a", text: "Maktab" },
          { id: "b", text: "Kutubxona" },
          { id: "c", text: "Bozor" },
          { id: "d", text: "Do‘kon" },
        ],
        correctId: "a",
        explanation: "학교 — maktab.",
        tags: ["TOPIK I", "Vocabulary"],
      },
      {
        id: "q2",
        stem: "‘친구’를 to‘g‘ri o‘qilishi qaysi?",
        options: [
          { id: "a", text: "chingu" },
          { id: "b", text: "chinku" },
          { id: "c", text: "chingyu" },
          { id: "d", text: "chinggu" },
        ],
        correctId: "a",
        explanation: "친구 — chingu (do‘st).",
      },
      {
        id: "q3",
        stem: "‘저는 학생이에요’ tarjimasi:",
        options: [
          { id: "a", text: "Men o‘qituvchiman" },
          { id: "b", text: "Men talabayman" },
          { id: "c", text: "Men talaba-man" },
          { id: "d", text: "Men talaba emasman" },
        ],
        correctId: "c",
        explanation: "저는 학생이에요 → Men talaba-man.",
      },
    ],
  },
  {
    id: "t_topik_grammar_eun_neun_vs_iga",
    title: "Grammatika — 은/는 va 이/가 farqi",
    category: "TOPIK",
    topic: "Grammar",
    level: "O'rta 1",
    durationSec: 10 * 60,
    questions: [
      {
        id: "q1",
        stem: "Bo‘sh joyni to‘g‘ri to‘ldiring: 저는 학생___",
        options: [
          { id: "a", text: "은" },
          { id: "b", text: "는" },
          { id: "c", text: "이" },
          { id: "d", text: "가" },
        ],
        correctId: "b",
        explanation: "저는 — 받침 yo‘q (저+는), mavzu ko‘rsatkichi.",
      },
      {
        id: "q2",
        stem: "철수___ 집이에요: subyekt ko‘rsatkichi kerak.",
        options: [
          { id: "a", text: "은" },
          { id: "b", text: "는" },
          { id: "c", text: "이" },
          { id: "d", text: "가" },
        ],
        correctId: "d",
        explanation: "철수(받침 yo‘q)+가 → subyekt ko‘rsatkichi.",
      },
      {
        id: "q3",
        stem: "은/는 odatda qaysi maqsadga xizmat qiladi?",
        options: [
          { id: "a", text: "Subyektni aniq belgilaydi" },
          { id: "b", text: "Mavzuni ajratadi/ta’kidlaydi" },
          { id: "c", text: "Kelib chiqish holatini bildiradi" },
          { id: "d", text: "Jo‘nalish kelishigi" },
        ],
        correctId: "b",
        explanation: "은/는 — mavzuni ajratish, ta’kidlash.",
      },
    ],
  },
  {
    id: "t_topik_reading_short",
    title: "O‘qish — qisqa matnni tushunish",
    category: "TOPIK",
    topic: "Reading",
    level: "O'rta 2",
    durationSec: 12 * 60,
    questions: [
      {
        id: "q1",
        stem: "Matndan asosiy g‘oyani topish usuli qanday?",
        options: [
          { id: "a", text: "Har bir so‘zni lug‘atdan tekshirish" },
          { id: "b", text: "Skimming (tez ko‘z tashlash)" },
          { id: "c", text: "Faqat so‘roq gaplarni o‘qish" },
          { id: "d", text: "Rasmga qarab taxmin qilish" },
        ],
        correctId: "b",
        explanation: "Skimming — umumiy mazmunni tez tutish.",
      },
      {
        id: "q2",
        stem: "Matndagi aniq ma’lumotni topish uchun…",
        options: [
          { id: "a", text: "Scanning" },
          { id: "b", text: "Shadowing" },
          { id: "c", text: "Paraphrasing" },
          { id: "d", text: "Dictation" },
        ],
        correctId: "a",
        explanation: "Scanning — kalit so‘zlarni izlab topish.",
      },
    ],
  },
  {
    id: "t_worker_safety_basic",
    title: "Ishchi xavfsizligi — asosiy qoidalar",
    category: "ISHCHI",
    topic: "Safety",
    level: "Ishchilar",
    durationSec: 10 * 60,
    questions: [
      {
        id: "q1",
        stem: "SIZO (PPE) to‘g‘ri ketma-ketlikda kiyilishi:",
        options: [
          { id: "a", text: "Kaska → qo‘lqop → ko‘zoynak" },
          { id: "b", text: "Ko‘zoynak → kaska → qo‘lqop" },
          { id: "c", text: "Qo‘lqop → kaska → ko‘zoynak" },
          { id: "d", text: "Kaska → ko‘zoynak → qo‘lqop" },
        ],
        correctId: "d",
        explanation: "Avval boshni himoya (kaska), so‘ng ko‘z, keyin qo‘l.",
      },
      {
        id: "q2",
        stem: "Elektr jihozida ishlashdan oldin birinchi qadam?",
        options: [
          { id: "a", text: "Ulanishni ko‘paytirish" },
          { id: "b", text: "Quvvatni uzish va lockout-tagout" },
          { id: "c", text: "Jihozni urib ko‘rish" },
          { id: "d", text: "Suv bilan yuvish" },
        ],
        correctId: "b",
        explanation: "LOTO — majburiy xavfsiz qadam.",
      },
      {
        id: "q3",
        stem: "Balandlikda ishlashda minimal belgilangan belbog‘?",
        options: [
          { id: "a", text: "Yengil mato belbog‘" },
          { id: "b", text: "Fall-arrest tizimi" },
          { id: "c", text: "Qo‘lqop" },
          { id: "d", text: "Respirator" },
        ],
        correctId: "b",
        explanation: "Yiqlashni to‘xtatuvchi tizim talab qilinadi.",
      },
    ],
  },
];
