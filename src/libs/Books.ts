// libs/Books.ts
/* ====== Asosiy tiplar ====== */
export type Level = "Boshlang'ich" | "O'rta 1" | "O'rta 2" | "Yuqori";
export type Series = "SNU" | "Integrated" | "GrammarInUse" | "TOPIK";
export type Kind = "Textbook" | "Workbook" | "Reference";

/* ====== Attachments ====== */
export type AttachmentKind = "pdf" | "zip" | "audio" | "video" | "link";
export type BookFilesIndex = Record<string, Attachment[]>;
export type Attachment = {
  id: string;
  name: string;
  kind: AttachmentKind;
  size?: string; // "2.3 MB"
  url?: string;  // download/link
};

/* ====== Dars darajasidagi qo'shimcha maydonlar ====== */
export type LessonDetail = {
  description?: string;
  notes?: string[];                 // darsga xos izohlar/ko‘rsatmalar
  attachments?: Attachment[];       // dars fayllari
  video?: { url: string; poster?: string }; // dars videosi
};



/* ====== Course tuzilmasi ====== */
export type Lesson = {
  id: string;
  title: string;
  dur: string;
  playing?: boolean;
} & Partial<LessonDetail>;

export type Section = { id: string; title: string; total?: string; lessons: Lesson[] };

/* ====== Kitob detali ====== */
export type BookDetail = {
  description: string;
  lectureNotes: string[];
  attachments: Attachment[];
  video?: { url: string; poster?: string };
  course: {
    progress: number;      // %
    totalDuration: string; // e.g. "1h 40m"
    sections: Section[];
  };
};

/* ====== Kitob (base + detail) ====== */
export type Book = {
  id: string;
  title: string;
  series: Series;
  kind: string;
  level: Level;
  price: number;
  rating: number;
  readers: number;
  cover: string;
  badge?: string;
} & BookDetail;

export const BOOK_FILES: BookFilesIndex = {
  // BOOKS dagi id lar bilan moslang:
  "snu-1a-tb": [
    { id: "snu1a-pdf",   name: "SNU 1A Textbook (PDF)", kind: "pdf",   size: "23.4 MB", url: "/files/snu-1a-textbook.pdf" },
    { id: "snu1a-audio", name: "SNU 1A Audio Pack",      kind: "audio", size: "120 MB",  url: "/files/snu-1a-audio.zip"   },
    { id: "snu1a-wbzip", name: "Workbook ZIP",           kind: "zip",   size: "12.8 MB", url: "/files/snu-1a-workbook.zip"},
    { id: "snu1a-home",  name: "Rasmiy sahifa",          kind: "link",                 url: "https://language.snu.ac.kr" },
  ],
  "topik-voca": [
    { id: "topik-pdf",  name: "TOPIK Vocabulary (PDF)", kind: "pdf",   size: "8.2 MB",  url: "/files/topik-vocabulary.pdf" },
    { id: "topik-mp3",  name: "Listening MP3",          kind: "audio", size: "95 MB",   url: "/files/topik-listening.zip"  },
  ],
  // ... kerakli kitoblaringizni shu yerga qo‘shing
};

/* =======================================================================
 *  MA'LUMOTLAR — BOOKS
 *  Eslatma: Har bir lesson uchun video/attachments/notes/description ixtiyoriy.
 * ======================================================================= */
export const BOOKS: Book[] = [
  {
  id: "g_snu_1a",
  title: "Seoulite 1A — Grammatika to‘plami",
  series: "SNU",
  kind: "Grammar Pack",
  level: "Boshlang'ich",
  price: 0,
  rating: 4.8,
  readers: 16420,
  cover:
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",

  description:
    "Seoul National University (SNU) Korean 1A darajasida uchraydigan yadro grammatikalar. Har bir punkt uchun qisqa izoh, misollar va amaliy eslatmalar berilgan. Self-study va sinf mashg‘ulotlari uchun qulay format.",

  lectureNotes: [
    "Har darsda 2–4 ta yangi grammatika — kam, lekin chuqur",
    "Dialog → naqsh → drill → mini-quiz ketma-ketligida ishlang",
    "Misollarni ovoz chiqarib takrorlang (shadowing)",
    "Har bo‘lim oxirida 5 daqiqalik ‘recall’ testi qiling",
  ],

  attachments: [
    {
      id: "g1",
      name: "SNU_1A_Grammar_CheatSheet.pdf",
      kind: "pdf",
      size: "0.8 MB",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      id: "g2",
      name: "SNU_1A_Drills_Audio.zip",
      kind: "zip",
      size: "3.4 MB",
      url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip",
    },
    {
      id: "g3",
      name: "Interactive Quiz (web)",
      kind: "link",
      url: "https://example.com/quiz/snu-1a-grammar",
    },
  ],

  video: {
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
  },

  course: {
    progress: 0,
    totalDuration: "~3h (drill va video bilan)",
    sections: [
      {
        id: "s1",
        title: "Identifikatsiya: ‘X (dir) / X emas’",
        total: "4 grammar · ~25m",
        lessons: [
          {
            id: "gr1",
            title: "N이에요/예요 — ‘X (dir)’ kopula",
            dur: "06:00",
            playing: true,
            description:
              "받침 bo‘lsa ‘이에요’, bo‘lmasa ‘예요’. Savol: ‘…이에요/예요?’\nMisollar: 학생이에요 / 의사예요 / 이것은 책이에요?",
            notes: ["받침 yo‘q: 의사예요, 도시예요", "Hurmat: …입니다 (1B/2A daraja)"],
          },
          {
            id: "gr2",
            title: "N이/가 아니에요 — ‘X emas’",
            dur: "06:00",
            description:
              "Kopula inkori. ‘…이/가 아니에요’ (이/가 otga bog‘lanadi).\nMisollar: 학생이 아니에요. 커피가 아니에요.",
            notes: ["Savolda ham ishlatiladi: 학생이 아니에요?"],
          },
          {
            id: "gr3",
            title: "도 — ‘ham/also’",
            dur: "05:00",
            description:
              "N도 — avvalgi elementga ‘ham’. \nMisollar: 저도 학생이에요. 물도 주세요.",
            notes: ["도 + 조사가 (이/가, 을/를) odatda o‘rnini bosadi: 저도, 책도"],
          },
          {
            id: "gr4",
            title: "의 — egalik ‘-ning’",
            dur: "08:00",
            description:
              "N의 N (talaffuzda ko‘pincha ‘에’). \nMisollar: 친구의 책 / 선생님의 교실.",
            notes: ["Og‘zaki nutqda 의 → ‘에’ ga yaqin eshitiladi."],
          },
        ],
      },

      {
        id: "s2",
        title: "Mavzu/Subyekt/Obyekt partikllari",
        total: "4 grammar · ~30m",
        lessons: [
          {
            id: "gr5",
            title: "은/는 — mavzu/kontrast",
            dur: "08:00",
            description:
              "받침: 은, 받침 yo‘q: 는. ‘N haqida gap ketyapti’.\nMisollar: 저는 한국 사람이에요. 오늘은 바빠요.",
            notes: ["Kontrast va mavzuni ajratadi; yangilik emas, ma’lum info."],
          },
          {
            id: "gr6",
            title: "이/가 — subyekt (ayniqsa 있다/없다 bilan)",
            dur: "08:00",
            description:
              "Yangilik, mavjudlik, kim/nima belgilash.\nMisollar: 시간이 있어요. 누가 가요?",
            notes: ["Savol: 누가? 무엇이?"],
          },
          {
            id: "gr7",
            title: "을/를 — obyekt",
            dur: "07:00",
            description:
              "받침: 을, yo‘q: 를. \nMisollar: 책을 읽어요. 한국어를 공부해요.",
            notes: ["안 + V bilan ham ishlaydi: 책을 안 읽어요."],
          },
          {
            id: "gr8",
            title: "하고 — ‘va/-bilan’ (같이 bilan tez-tez)",
            dur: "07:00",
            description:
              "N하고(같이) ‘…bilan (birga)’; ‘va’ ma’nosida ham.\nMisollar: 친구하고 영화 봐요. 엄마하고 시장에 가요.",
            notes: ["Yozma uslubda ‘과/와’ (keyingi darslarda)."],
          },
        ],
      },

      {
        id: "s3",
        title: "Joy, mavjudlik va ko‘rsatkichlar",
        total: "5 grammar · ~35m",
        lessons: [
          {
            id: "gr9",
            title: "이/그/저 + N; 여기/거기/저기",
            dur: "07:00",
            description:
              "Yaqlik masofasi: 이(bu, yonimda)/그(u, suhbatdoshda)/저(anarigi). \nMisollar: 이 책, 저 사람; 여기 있어요.",
            notes: ["그 ko‘pincha ‘oldingi tilga olingan’ narsaga ham ishora qiladi."],
          },
          {
            id: "gr10",
            title: "N에 — vaqt/joy ‘-da/ga’",
            dur: "07:00",
            description:
              "Joyga borish/vaqt ko‘rsatish. \nMisollar: 학교에 가요. 3시에 만나요.",
            notes: ["‘ga’ va ‘da’ ma’nolari kontekstdan kelib chiqadi."],
          },
          {
            id: "gr11",
            title: "N에서 — harakat joyi ‘-da’",
            dur: "06:00",
            description:
              "Harakat sodir bo‘ladigan joy. \nMisollar: 학교에서 공부해요. 집에서 쉬어요.",
            notes: ["에 (borish/nishon) ↔ 에서 (faoliyat joyi)."],
          },
          {
            id: "gr12",
            title: "있다/없다 — bor/yo‘q; egalik",
            dur: "07:00",
            description:
              "Mavjudlik va egalik: N이/가 있어요/없어요.\nMisollar: 시간이 있어요. 형이 없어요.",
            notes: ["Joy bilan: 책이 가방 안에 있어요."],
          },
          {
            id: "gr13",
            title: "Joy otlari + 에 — 위치 (위/아래/앞/뒤/옆/안/밖/사이)",
            dur: "08:00",
            description:
              "N 위치 N에 있어요.\nMisollar: 책이 책상 위에 있어요. 카페는 학교 옆에 있어요.",
            notes: ["사이에: A와 B 사이에 있어요."],
          },
        ],
      },

      {
        id: "s4",
        title: "Raqamlar, sanagichlar va vaqt ifodalari",
        total: "5 grammar · ~35m",
        lessons: [
          {
            id: "gr14",
            title: "한자어/고유어 sonlar + sanagichlar",
            dur: "10:00",
            description:
              "명, 개, 권, 병, 잔, 마리, 살, 시/분, 원 … \nMisollar: 사과 두 개, 고양이 한 마리, 3시 20분, 5,000원.",
            notes: ["Yosh: 스무 살, 한 살 (불규칙)."],
          },
          {
            id: "gr15",
            title: "얼마예요? / N 주세요 — narx & buyurtma",
            dur: "06:00",
            description:
              "Narx so‘rash va sotuvda buyurtma.\nMisollar: 이거 얼마예요? 물 한 병 주세요.",
            notes: ["Muloyimroq: …주세요 / …좀 주세요."],
          },
          {
            id: "gr16",
            title: "~부터 ~까지 — ‘-dan … -gacha’",
            dur: "06:00",
            description:
              "Vaqt/masofa chegarasi.\nMisollar: 9시부터 5시까지 일해요. 서울부터 부산까지.",
            notes: ["Joy bilan ham ishlaydi."],
          },
          {
            id: "gr17",
            title: "Savol so‘zlari: 누구/어디/언제/뭐/몇/어떻게/왜",
            dur: "07:00",
            description:
              "몇 + sanagich: 몇 시, 몇 살, 몇 명 … \nMisollar: 어디에 가요? 몇 시예요? 왜 늦었어요?",
            notes: ["누구+가, 무엇→뭐 (og‘zaki)."],
          },
          {
            id: "gr18",
            title: "N만 — ‘faqat’",
            dur: "06:00",
            description:
              "Chegaralash: faqat shu. \nMisollar: 물만 마셔요. 주말에 집에만 있어요.",
            notes: ["도 va 만 birga kelmaydi: 보통 ‘N만’ yetarli."],
          },
        ],
      },

      {
        id: "s5",
        title: "Fe’l shakllari va odobli iltimoslar",
        total: "6 grammar · ~40m",
        lessons: [
          {
            id: "gr19",
            title: "V-아요/어요/해요 — hozirgi (polite)",
            dur: "10:00",
            description:
              "Fe’l negizi + (아/어/해)요: \n가다→가요, 먹다→먹어요, 하다→해요.",
            notes: ["Unli uyg‘unligi va ㅏ/ㅗ → 아요; boshqalar → 어요; 하다 → 해요."],
          },
          {
            id: "gr20",
            title: "안 V — qisqa inkor",
            dur: "05:00",
            description:
              "Fe’l oldidan ‘안’. \nMisollar: 오늘 공부 안 해요. 커피 안 마셔요.",
            notes: ["Uzoq inkor ‘V-지 않아요’ keyinroq."],
          },
          {
            id: "gr21",
            title: "V-(으)세요 — muloyim buyruq/iltimos",
            dur: "08:00",
            description:
              "Hurmatli iltimos. \nMisollar: 여기 보세요. 조용히 하세요.",
            notes: ["(으)세요 irregularlar: 듣다→들으세요 va h.k."],
          },
          {
            id: "gr22",
            title: "V-아/어 주세요 — ‘Iltimos, qilib bering’",
            dur: "06:00",
            description:
              "Kimdandir narsa qilishni so‘rash. \nMisollar: 천천히 말해 주세요. 다시 한번 써 주세요.",
            notes: ["보다/말하다/쓰다 bilan ko‘p uchraydi."],
          },
          {
            id: "gr23",
            title: "V-고 싶어요 — ‘-moqchiman’",
            dur: "05:00",
            description:
              "Istak bildirish. \nMisollar: 한국에 가고 싶어요. 쉬고 싶어요.",
            notes: ["Tinglovchi istagi: V-고 싶으세요?"],
          },
          {
            id: "gr24",
            title: "V-(으)러 가요/와요 — maqsad ‘-gani bor/kel’",
            dur: "06:00",
            description:
              "Harakat + maqsad fe’li.\nMisollar: 밥을 먹으러 가요. 친구를 만나러 와요.",
            notes: ["Joy + 에 가요/와요 bilan ko‘p qo‘llanadi."],
          },
        ],
      },

      {
        id: "s6",
        title: "Bog‘lovchilar va kichik naqshlar",
        total: "3 grammar · ~15m",
        lessons: [
          {
            id: "gr25",
            title: "그래서 / 그런데 / 하지만 — ‘shuning uchun / lekin’",
            dur: "07:00",
            description:
              "Sabab-oqibat va kontrast.\nMisollar: 비가 와요. 그래서 집에 있어요. 좋아요. 그런데 비싸요.",
            notes: ["하지만 = lekin (kuchliroq qarama-qarshilik)."],
          },
          {
            id: "gr26",
            title: "(Qo‘shimcha) V-았/었어요 — o‘tgan zamon (ba’zi nashrlarda 1A oxiri)",
            dur: "04:00",
            description:
              "Kecha/ilgari bo‘lgan ish. \nMisollar: 어제 공부했어요. 아침을 먹었어요.",
            notes: ["Ba’zi kurslar buni 1B’da beradi — moslab o‘ting."],
          },
          {
            id: "gr27",
            title: "(Qo‘shimcha) V-(으)ㄹ까요? — taklif/savol",
            dur: "04:00",
            description:
              "Birga qilishni taklif. \nMisollar: 같이 갈까요? 뭐 먹을까요?",
            notes: ["Shuningdek noaniqlik savoli sifatida ham."],
          },
        ],
      },
        {
          id: "s2",
          title: "Secret of Good Design",
          total: "2 lectures · 1h 02m",
          lessons: [
            { id: "l5", title: "Design Mindset", dur: "17:10" },
            {
              id: "l6",
              title: "Color & Grid",
              dur: "44:54",
              notes: ["Contrast, harmony, readability", "8pt grid amaliyoti"],
            },
          ],
        },
      ],
    },
  },

  {
    id: "b3",
    title: "Integrated Korean: Boshlang'ich 1",
    series: "Integrated",
    kind: "Textbook",
    level: "Boshlang'ich",
    price: 26,
    rating: 4.9,
    readers: 22120,
    cover:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=800&auto=format&fit=crop",

    description:
      "Integrated Korean seriyasining birinchi qismi. Dialoglar, grammatik izohlar va real hayotga yaqin mashqlar bilan nutq, tinglab tushunish va yozuv ko‘nikmalarini rivojlantiradi.",

    lectureNotes: [
      "Kirish bo‘limidagi dialoglarni ovoz bilan takrorlang",
      "Har dars oxirida lug‘at kartochkalarini ko‘rib chiqing",
      "Qo‘shimcha mashqlar: Unit 2–3",
    ],

    attachments: [
      {
        id: "a1",
        name: "IK_Beginner1_Outline.pdf",
        kind: "pdf",
        size: "1.9 MB",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      },
      {
        id: "a2",
        name: "Audio_Pack_Unit_1-3.zip",
        kind: "zip",
        size: "21.4 MB",
        url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip",
      },
      {
        id: "a3",
        name: "Dialog_Scripts.pdf",
        kind: "pdf",
        size: "780 KB",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      },
      {
        id: "a4",
        name: "Listening_Practice.mp3",
        kind: "audio",
        size: "8.0 MB",
        url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp3-file.mp3",
      },
      { id: "a5", name: "Teacher Slides (link)", kind: "link", url: "https://slides.com/" },
    ],

    video: {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      poster:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
    },

    course: {
      progress: 32,
      totalDuration: "3h 15m",
      sections: [
        {
          id: "s1",
          title: "Basics",
          total: "3 lectures · 52m",
          lessons: [
            {
              id: "l1",
              title: "Hangul Recap",
              dur: "12:14",
              description:
                "Hangul asoslari: cho‘ziq/qisqa unlilar, patchim, o‘qilish qoidalari.",
              notes: ["Batchim qoidalarini kartochka bilan yodlang"],
            },
            {
              id: "l2",
              title: "Greetings & Introductions",
              dur: "18:36",
              playing: true,
              video: {
                url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
                poster:
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
              },
              attachments: [
                {
                  id: "ik1",
                  name: "Greetings_Worksheet.pdf",
                  kind: "pdf",
                  size: "940 KB",
                  url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                },
              ],
            },
            { id: "l3", title: "Numbers & Counters", dur: "21:10" },
          ],
        },
        {
          id: "s2",
          title: "Daily Korean",
          total: "4 lectures · 1h 30m",
          lessons: [
            { id: "l4", title: "Shopping Expressions", dur: "17:50" },
            { id: "l5", title: "At the Restaurant", dur: "28:44" },
            { id: "l6", title: "Directions", dur: "24:16" },
            { id: "l7", title: "Time & Schedule", dur: "19:32" },
          ],
        },
      ],
    },
  },

  {
    id: "b8",
    title: "TOPIK I o‘qish – sinov testlari",
    series: "TOPIK",
    kind: "Reference",
    level: "Boshlang'ich",
    price: 19,
    rating: 4.6,
    readers: 9680,
    cover:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
    badge: "TOPIK",

    description:
      "TOPIK I bo‘yicha amaliy testlar to‘plami. Har bir testdan keyin javob kaliti, tahlil va vaqt boshqaruvi bo‘yicha tavsiyalar berilgan.",

    lectureNotes: [
      "Haftasiga kamida 2 ta to‘liq test ishlang",
      "Vaqtni 35/25 daqiqaga bo‘lib ishlang (o‘qish/tinglash)",
      "Noto‘g‘ri javoblarni tahlil qiling va sababini yozib boring",
    ],

    attachments: [
      {
        id: "a1",
        name: "TOPIK_I_Test1.pdf",
        kind: "pdf",
        size: "4.1 MB",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      },
      {
        id: "a2",
        name: "TOPIK_I_Answer_Key.pdf",
        kind: "pdf",
        size: "650 KB",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      },
      {
        id: "a3",
        name: "Audio_Test1.mp3",
        kind: "audio",
        size: "9.6 MB",
        url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp3-file.mp3",
      },
      {
        id: "a4",
        name: "Vocab_List_Topic1.csv",
        kind: "link",
        url: "https://people.sc.fsu.edu/~jburkardt/data/csv/airtravel.csv",
      },
      { id: "a5", name: "Mock Timer App", kind: "link", url: "https://timer.onlineclock.net/" },
    ],

    video: {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      poster:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
    },

    course: {
      progress: 55,
      totalDuration: "2h 05m",
      sections: [
        {
          id: "s1",
          title: "Reading Strategy",
          total: "3 lectures · 58m",
          lessons: [
            {
              id: "l1",
              title: "Skimming & Scanning",
              dur: "16:40",
              playing: true,
              description:
                "Matndan tezda asosiy ma’lumotlarni topish va savollarga mos segmentlarni ajratish.",
              notes: ["Savol turiga qarab skimming yoki scanning tanlang"],
            },
            { id: "l2", title: "Question Types", dur: "21:05" },
            { id: "l3", title: "Time Management", dur: "20:15" },
          ],
        },
        {
          id: "s2",
          title: "Mock Tests",
          total: "2 lectures · 1h 07m",
          lessons: [
            {
              id: "l4",
              title: "Full Mock Test A",
              dur: "32:40",
              attachments: [
                {
                  id: "t1",
                  name: "MockTestA.pdf",
                  kind: "pdf",
                  size: "3.3 MB",
                  url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                },
              ],
            },
            { id: "l5", title: "Full Mock Test B", dur: "34:20" },
          ],
        },
      ],
    },
  },
];
