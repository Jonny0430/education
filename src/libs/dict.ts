// libs/dict.ts
export type Lang = "uz" | "ko" | "ru" | "en";
export type POS = "noun" | "verb" | "adj" | "adv";

export type LocalizedWord = {
  text: string;
  script?: string;   // Hangul/Kirill/Latin...
};

export type Sample = {
  ko: string;
  uz: string;
  ru: string;
  en: string;
};

export type Vocab = {
  id: string;                 // URL uchun
  pos: POS;
  romanization?: string;      // chaek, hakgyo...
  tags?: string[];            // TOPIK A1, Common...
  words: Record<Lang, LocalizedWord>;
  samples: Sample[];
};

export const VOCABS: Vocab[] = [
  {
    id: "book",
    pos: "noun",
    romanization: "chaek",
    tags: ["TOPIK A1", "Common"],
    words: {
      uz: { text: "kitob", script: "Latin" },
      ko: { text: "책",   script: "Hangul" },
      ru: { text: "книга", script: "Кириллица" },
      en: { text: "book", script: "Latin" },
    },
    samples: [
      { ko: "책을 읽어요.", uz: "Kitob o‘qiyman.", ru: "Я читаю книгу.", en: "I read a book." },
      { ko: "이 책은 정말 좋아요.", uz: "Bu kitob juda zo‘r.", ru: "Эта книга очень хорошая.", en: "This book is really good." },
    ],
  },
  {
    id: "school",
    pos: "noun",
    romanization: "hakgyo",
    tags: ["TOPIK A1"],
    words: {
      uz: { text: "maktab", script: "Latin" },
      ko: { text: "학교",  script: "Hangul" },
      ru: { text: "школа", script: "Кириллица" },
      en: { text: "school", script: "Latin" },
    },
    samples: [
      { ko: "학교에 가요.", uz: "Maktabga boraman.", ru: "Я иду в школу.", en: "I go to school." },
    ],
  },
  {
    id: "water",
    pos: "noun",
    romanization: "mul",
    tags: ["TOPIK A1", "Common"],
    words: {
      uz: { text: "suv", script: "Latin" },
      ko: { text: "물",  script: "Hangul" },
      ru: { text: "вода", script: "Кириллица" },
      en: { text: "water", script: "Latin" },
    },
    samples: [
      { ko: "물 좀 주세요.", uz: "Biroz suv bering.", ru: "Дайте, пожалуйста, воды.", en: "Please give me some water." },
    ],
  },
  {
    id: "teacher",
    pos: "noun",
    romanization: "seonsaengnim",
    tags: ["TOPIK A1"],
    words: {
      uz: { text: "o‘qituvchi", script: "Latin" },
      ko: { text: "선생님", script: "Hangul" },
      ru: { text: "учитель", script: "Кириллица" },
      en: { text: "teacher", script: "Latin" },
    },
    samples: [
      { ko: "선생님이 친절해요.", uz: "O‘qituvchi mehribon.", ru: "Учитель добрый.", en: "The teacher is kind." },
    ],
  },
  {
    id: "hello",
    pos: "verb",
    romanization: "annyeonghaseyo",
    tags: ["Greeting", "TOPIK A1"],
    words: {
      uz: { text: "salom!", script: "Latin" },
      ko: { text: "안녕하세요", script: "Hangul" },
      ru: { text: "здравствуйте", script: "Кириллица" },
      en: { text: "hello", script: "Latin" },
    },
    samples: [
      { ko: "안녕하세요!", uz: "Salom!", ru: "Здравствуйте!", en: "Hello!" },
    ],
  },
  {
    id: "student",
    pos: "noun",
    romanization: "haksaeng",
    tags: ["TOPIK A1"],
    words: {
      uz: { text: "talaba", script: "Latin" },
      ko: { text: "학생",  script: "Hangul" },
      ru: { text: "студент", script: "Кириллица" },
      en: { text: "student", script: "Latin" },
    },
    samples: [
      { ko: "저는 학생이에요.", uz: "Men talabaman.", ru: "Я студент.", en: "I am a student." },
    ],
  },
];
