// libs/Books.ts
/* ====== Asosiy tiplar ====== */
export type Level = "Boshlang'ich" | "O'rta 1" | "O'rta 2" | "Yuqori";
export type Series = "SNU" | "Integrated" | "GrammarInUse" | "TOPIK";
export type Kind = "Textbook" | "Workbook" | "Reference";

/* ====== Attachments ====== */
export type AttachmentKind = "pdf" | "zip" | "audio" | "video" | "link";
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
  kind: Kind;
  level: Level;
  price: number;
  rating: number;
  readers: number;
  cover: string;
  badge?: string;
} & BookDetail;

/* =======================================================================
 *  MA'LUMOTLAR — BOOKS
 *  Eslatma: Har bir lesson uchun video/attachments/notes/description ixtiyoriy.
 * ======================================================================= */
export const BOOKS: Book[] = [
  {
    id: "b1",
    title: "Seoulite 1A ish daftari",
    series: "SNU",
    kind: "Workbook",
    level: "Boshlang'ich",
    price: 17,
    rating: 4.6,
    readers: 11260,
    cover:
      "https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?q=80&w=800&auto=format&fit=crop",

    description:
      "Boshlang‘ich o‘quvchilar uchun mashqlar to‘plami. Har bir bo‘limda amaliy topshiriqlar, lug‘at va grammatika qayta takrorlash bo‘limlari mavjud. Self-study va sinfdagi mashg‘ulotlar uchun qulay.",

    lectureNotes: [
      "Fayllarni yuklab oling va loyihani boshlang",
      "Mashqlarni haftalik reja bo‘yicha bajaring",
      "Mobile-first tamoyili bilan dizaynlarni ko‘ring",
      "Navbar va Footer komponentlarini qayta ishlating",
    ],

    attachments: [
      {
        id: "a1",
        name: "Workbook_1A_sample.pdf",
        kind: "pdf",
        size: "2.3 MB",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      },
      {
        id: "a2",
        name: "Audio_Track_Unit_01.mp3",
        kind: "audio",
        size: "6.8 MB",
        url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp3-file.mp3",
      },
      {
        id: "a3",
        name: "Answer_Key_1A.pdf",
        kind: "pdf",
        size: "1.1 MB",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      },
      {
        id: "a4",
        name: "Worksheets.zip",
        kind: "zip",
        size: "4.2 MB",
        url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip",
      },
      { id: "a5", name: "Course Homepage", kind: "link", url: "https://example.com" },
    ],

    video: {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    },

    course: {
      progress: 10,
      totalDuration: "1h 40m",
      sections: [
        {
          id: "s1",
          title: "Getting Started",
          total: "4 lectures · 1h 40m",
          lessons: [
            {
              id: "l1",
              title: "What is Webflow?",
              dur: "09:11",
              playing: true,
              // NAMUNA: dars-level description + video
              description:
                "Webflow platformasining qisqacha tanishtiruvi: vizual builder, komponentlar va publish jarayoni.",
              video: {
                url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                poster:
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
              },
              notes: [
                "UI bilan tanishish: Navigator, Styles, Interactions",
                "Auto layout va gridni ko‘rib chiqing",
              ],
            },
            {
              id: "l2",
              title: "Sign up in Webflow",
              dur: "12:57",
              description: "Ro‘yxatdan o‘tish va birinchi loyihani yaratish.",
              attachments: [
                {
                  id: "la1",
                  name: "Webflow_Signup_Guide.pdf",
                  kind: "pdf",
                  size: "1.2 MB",
                  url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                },
              ],
            },
            { id: "l3", title: "Teaser of Webflow", dur: "22:07" },
            { id: "l4", title: "Figma Introduction", dur: "19:20" },
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
