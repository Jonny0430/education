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
  id: "snu-2a-grammar",
  title: "Seoulite 2A — Grammar Course",
  series: "SNU",
  kind: "Textbook",
  level: "Boshlang'ich",
  price: 0,
  rating: 4.86,
  readers: 18210,
  cover:
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",

  description:
    "SNU 2A (A2) darajasida tez-tez uchraydigan grammatikalar. Har bir darsda qisqa izoh, aniq eslatmalar va to‘rttadan misol keltirilgan. Har bir grammatikaga alohida video biriktirilgan.",

  lectureNotes: [
    "Har dars: izoh → 4 ta misol → speaking drill → mini-quiz",
    "‘-아/어지다’ (o‘zgarish) ↔ ‘-게 되다’ (natija/holatga kelib qolish) farqini yodda saqlang",
    "‘-느라고’ odatda salbiy natija yoki qilinmagan ish bilan keladi",
    "Polite interaktsiya: ‘-아/어 주시겠어요?’, ‘-으시겠어요?’, ‘-을 테니까’ ni vaziyatga mos tanlang"
  ],

  attachments: [
    {
      id: "s2a1",
      name: "SNU_2A_Grammar_CheatSheet.pdf",
      kind: "pdf",
      size: "1.2 MB",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      id: "s2a2",
      name: "SNU_2A_Audio_Drills.zip",
      kind: "zip",
      size: "7.8 MB",
      url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip"
    }
  ],

  video: {
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
  },

  course: {
    progress: 0,
    totalDuration: "~4h 10m",
    sections: [
      {
        id: "a2s1",
        title: "O‘zgarish va tajriba",
        total: "4 lectures · ~32m",
        lessons: [
          {
            id: "a2gr1",
            title: "V-아/어지다 — ‘…bo‘lib qolmoq/…ga aylanish’",
            dur: "08:00",
            playing: true,
            description:
              "Sifat/fe’l natijaviy o‘zgarish: issiq→issiqlashmoq, qiyin→qiyinlashmoq.\nMisollar:\n1) 날씨가 추워졌어요.\n2) 한국어가 점점 쉬워져요.\n3) 얼굴이 빨개졌어요.\n4) 문이 저절로 열렸어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: [
              "Sifatlar bilan juda keng: 예쁘다→예뻐졌어요.",
              "Passiv ohang ham beradi: 길이 막혀졌어요 (og‘zaki ko‘p ishlatilmaydi)."
            ]
          },
          {
            id: "a2gr2",
            title: "V-게 되다 — ‘… qilib qolmoq (natija)’",
            dur: "08:00",
            description:
              "Rejasiz yoki jarayon natijasida yuzaga kelgan holat.\nMisollar:\n1) 한국에서 일하게 되었어요.\n2) 친구를 우연히 만나게 됐어요.\n3) 야근을 하게 됐어요.\n4) 한국어를 좋아하게 됐어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            notes: [
              "Ko‘pincha o‘tgan zamon: …게 됐어요.",
              "Ixtiyoriy reja bo‘lsa ‘-려고 해요’ mosroq."
            ]
          },
          {
            id: "a2gr3",
            title: "V-(으)ㄴ 적이 있다/없다 — ‘hech qachon/bor-yo‘qligi’",
            dur: "08:00",
            description:
              "Tajriba bor-yo‘qligini aytish.\nMisollar:\n1) 한국에 가 본 적이 있어요.\n2) 술을 마셔 본 적이 없어요.\n3) 그 영화를 본 적이 있어요.\n4) 늦게 온 적이 없어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            notes: [
              "Ko‘pincha ‘V-아/어 보다’ bilan: 가 봤어요 / 가 본 적 있어요.",
              "Negativ: …적이 없어요."
            ]
          },
          {
            id: "a2gr4",
            title: "V-(으)ㄴ 지 N 되다 — ‘…dan beri … bo‘ldi’",
            dur: "08:00",
            description:
              "Boshlang‘ich vaqtdan qancha vaqt o‘tganini bildiradi.\nMisollar:\n1) 한국에 온 지 1년 됐어요.\n2) 밥 먹은 지 두 시간 됐어요.\n3) 운전 배운 지 오래됐어요.\n4) 결혼한 지 얼마 안 됐어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            notes: [
              "Qisqa muddat: ‘얼마 안 됐어요’.",
              "N bilan ham: 한국 생활한 지 6개월."
            ]
          }
        ]
      },

      {
        id: "a2s2",
        title: "Taxmin, ehtimol va tilak",
        total: "4 lectures · ~32m",
        lessons: [
          {
            id: "a2gr5",
            title: "A/V-(으)ㄴ/는 것 같다 — ‘shekilli/ko‘rinadi’",
            dur: "08:00",
            description:
              "Hozirgi/o‘tgan holat haqida subyektiv taxmin.\nMisollar:\n1) 비가 오는 것 같아요.\n2) 어제 많이 먹은 것 같아요.\n3) 저 사람은 한국 사람인 것 같아요.\n4) 숙제가 어려운 것 같아요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            notes: [
              "Fe’l hozirgi: V-는 것 같아요; o‘tgan: V-(으)ㄴ 것 같아요.",
              "Ot: N인 것 같아요."
            ]
          },
          {
            id: "a2gr6",
            title: "V-(으)ㄹ 것 같다 — kelasi taxmin/ ehtimol",
            dur: "08:00",
            description:
              "Kelajakdagi holatga taxmin.\nMisollar:\n1) 내일 눈이 올 것 같아요.\n2) 곧 도착할 것 같아요.\n3) 비쌀 것 같아요.\n4) 그는 화낼 것 같아요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: [
              "‘-겠-’ bilan farqi: ‘-겠-’ ko‘proq nutq ohangi/niyat.",
              "Noaniqlik balandroq: …것 같아요."
            ]
          },
          {
            id: "a2gr7",
            title: "V-(으)면 좋겠다 — ‘…bo‘lsa yaxshi bo‘lardi’",
            dur: "08:00",
            description:
              "Istak/tilak ifodasi.\nMisollar:\n1) 한국에 가면 좋겠어요.\n2) 이번 시험에 합격하면 좋겠어요.\n3) 주말에 쉬면 좋겠어요.\n4) 눈이 그치면 좋겠어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            notes: [
              "O‘zingiz uchun tilak: 1-shaxs bilan ko‘p.",
              "Boshqalarga tilak: -(으)면 좋겠네요."
            ]
          },
          {
            id: "a2gr8",
            title: "A/V-(으)ㄹ지도 모르다 — ‘balki…’",
            dur: "08:00",
            description:
              "Past ehtimollik.\nMisollar:\n1) 오늘 늦을지도 몰라요.\n2) 가격이 더 오를지도 몰라요.\n3) 비가 올지도 몰라요.\n4) 그분이 안 올지도 몰라요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
            },
            notes: [
              "Og‘zaki: ‘…지도 몰라요’.",
              "Yuqori ehtimol bo‘lsa ‘-것 같아요’ ma’qul."
            ]
          }
        ]
      },

      {
        id: "a2s3",
        title: "Maqsad va reja",
        total: "4 lectures · ~32m",
        lessons: [
          {
            id: "a2gr9",
            title: "V-(으)려고 하다 — niyat/reja",
            dur: "08:00",
            description:
              "Rejani bildiradi; yaqin kelajakda qilish niyati.\nMisollar:\n1) 내년에 유학 가려고 해요.\n2) 오늘 친구를 만나려고 해요.\n3) 더 일찍 자려고 해요.\n4) 한국어를 잘하려고 매일 연습해요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            notes: [
              "O‘tgan zamon + 실패: …하려고 했지만 못 했어요.",
              "Maqsad + harakat: …하려고 왔어요/갔어요."
            ]
          },
          {
            id: "a2gr10",
            title: "V-(으)려면 — ‘agar … qilmoqchi bo‘lsang’",
            dur: "08:00",
            description:
              "Shart + maslahat.\nMisollar:\n1) 한국어를 잘하려면 많이 말해야 해요.\n2) 살을 빼려면 운동해야 해요.\n3) 일찍 일어나려면 일찍 자야 해요.\n4) 합격하려면 열심히 공부하세요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            notes: [
              "Ko‘pincha ‘-아/어야 해요’ bilan keladi.",
              "Maslahat ohangi kuchli."
            ]
          },
          {
            id: "a2gr11",
            title: "N을/를 위해(서), V-기 위해(서) — ‘… uchun’",
            dur: "08:00",
            description:
              "Maqsad ot/fe’l bilan.\nMisollar:\n1) 건강을 위해 매일 걷어요.\n2) 장학금을 받기 위해 준비해요.\n3) 가족을 위해 열심히 일해요.\n4) 실력을 높이기 위해 듣기를 많이 해요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: [
              "Yozma uslubda ko‘p: 위해서 → 위해.",
              "Shaxsiy foyda: ‘-을 위해서’; adresat: ‘-에게’."
            ]
          },
          {
            id: "a2gr12",
            title: "V-도록 하다 — ‘… qiling (chorlov/ko‘rsatma)’",
            dur: "08:00",
            description:
              "Ko‘rsatma/majburiyat ohangi (muloyim rasmiy).\nMisollar:\n1) 내일까지 끝내도록 하겠습니다.\n2) 조용히 하도록 하세요.\n3) 회의에 늦지 않도록 해요.\n4) 매일 복습하도록 할게요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            notes: [
              "‘-지 않도록’ bilan ko‘p ishlatiladi.",
              "Rasmiy maktublarda keng."
            ]
          }
        ]
      },

      {
        id: "a2s4",
        title: "Bog‘lovchilar (o‘rta daraja)",
        total: "4 lectures · ~32m",
        lessons: [
          {
            id: "a2gr13",
            title: "V-다가 — ‘…yotib (bir payt) … bo‘ldi’",
            dur: "08:00",
            description:
              "A jarayonida B ro‘y berdi/yoki yo‘nalish o‘zgardi.\nMisollar:\n1) 걷다가 비가 왔어요.\n2) 공부하다가 잠이 들었어요.\n3) 전화하다가 끊겼어요.\n4) 운전하다가 사고가 났어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            notes: [
              "Ko‘pincha kutilmagan B holat.",
              "A tugallanmagan paytda B sodir."
            ]
          },
          {
            id: "a2gr14",
            title: "V-느라고 — ‘… bilan band bo‘lib … (qila olmadim)’",
            dur: "08:00",
            description:
              "Bandlik sababli salbiy natija.\nMisollar:\n1) 청소하느라고 늦었어요.\n2) 회의하느라고 전화를 못 받았어요.\n3) 숙제하느라고 못 갔어요.\n4) 운전하느라고 메시지를 못 봤어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            notes: [
              "Ko‘pincha ‘못/안’ bilan keladi.",
              "Hokim fe’l zamoni odatda o‘tgan."
            ]
          },
          {
            id: "a2gr15",
            title: "V-자마자 — ‘… bilanoq’",
            dur: "08:00",
            description:
              "A tugashi bilan darhol B.\nMisollar:\n1) 집에 도착하자마자 샤워했어요.\n2) 문을 열자마자 강아지가 뛰어나왔어요.\n3) 수업이 끝나자마자 밥을 먹었어요.\n4) 일어나자마자 물을 마셔요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            notes: [
              "Zamonga mos keladi: o‘tgan/hozirgi.",
              "‘바로’ bilan kuchaytirish mumkin."
            ]
          },
          {
            id: "a2gr16",
            title: "V-기도 하다 — ‘ba’zan … ham qilaman’",
            dur: "08:00",
            description:
              "Qo‘shimcha yoki takroriy ishni aytish.\nMisollar:\n1) 주말에는 일하기도 해요.\n2) 한국 드라마를 보기도 해요.\n3) 아침을 거르기도 해요.\n4) 비가 오면 택시를 타기도 해요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            notes: [
              "‘-기도 하고 …기도 해요’ bilan parallel tuzilma.",
              "‘도’ urg‘u beradi: ham."
            ]
          }
        ]
      },

      {
        id: "a2s5",
        title: "Polite so‘rov va muloqot naqshlari",
        total: "4 lectures · ~32m",
        lessons: [
          {
            id: "a2gr17",
            title: "A/V-(으)시- — honorifik (subyekt hurmat)",
            dur: "08:00",
            description:
              "Yuqori mavqedagi shaxsga hurmat.\nMisollar:\n1) 선생님께서 들어오셨어요.\n2) 할아버지께서 주무세요.\n3) 사장님이 말씀하셨어요.\n4) 어머니께서 식사하세요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: [
              "Fe’l shakli: 가다→가시다, 먹다→드시다, 있다→계시다.",
              "Subyekt partikuli: 께서."
            ]
          },
          {
            id: "a2gr18",
            title: "V-(으)시겠어요? — muloyim taklif/taklifiy savol",
            dur: "08:00",
            description:
              "Hurmatli taklif yoki xohishni so‘rash.\nMisollar:\n1) 뭐 드시겠어요?\n2) 자리 바꿔 드리면 괜찮으시겠어요?\n3) 사진 같이 찍으시겠어요?\n4) 커피 한 잔 하시겠어요?",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            notes: [
              "Oddiy taklif: ‘-을까요?’.",
              "Hurmat + muloyimlik: ‘-시겠어요?’."
            ]
          },
          {
            id: "a2gr19",
            title: "V-아/어 주시겠어요? — muloyim iltimos",
            dur: "08:00",
            description:
              "Hurmat bilan iltimos qilish.\nMisollar:\n1) 문 좀 열어 주시겠어요?\n2) 천천히 말씀해 주시겠어요?\n3) 사진을 보내 주시겠어요?\n4) 위치를 알려 주시겠어요?",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            notes: [
              "Norasmiyroq: ‘-아/어 주세요’.",
              "Yordam bildiradi: ‘-주다/드리다’."
            ]
          },
          {
            id: "a2gr20",
            title: "V-(으)ㄹ 테니까 — ‘men … qilaman, siz … qiling’",
            dur: "08:00",
            description:
              "Niqqat: 1-shaxs niyat + tinglovchiga ko‘rsatma.\nMisollar:\n1) 제가 설명할 테니까 잘 들으세요.\n2) 제가 운전할 테니까 편하게 쉬세요.\n3) 비가 올 테니까 우산을 가져가세요.\n4) 제가 연락할 테니까 기다리세요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            notes: [
              "Buyruq/iltimos bilan tez-tez keladi.",
              "Taxmin ohangi ham bo‘lishi mumkin: ‘-ㄹ 테니(까)’."
            ]
          }
        ]
      },

      {
        id: "a2s6",
        title: "Sifatlash, baho va odatlar",
        total: "4 lectures · ~32m",
        lessons: [
          {
            id: "a2gr21",
            title: "V-(으)ㄴ/는/(으)ㄹ + N — nisbiy gaplar (review+)",
            dur: "08:00",
            description:
              "O‘tgan/hozirgi/kelasi harakat bilan otni aniqlash.\nMisollar:\n1) 어제 본 영화\n2) 지금 듣는 노래\n3) 내일 만날 사람\n4) 한국에서 살던 친구",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
            },
            notes: [
              "Fe’l zamoniga ko‘ra tanlang: 본/보는/볼.",
              "Sifat: 예쁜 꽃 / 비싼 옷."
            ]
          },
          {
            id: "a2gr22",
            title: "A-게 — ravish yasovchi qo‘shimcha",
            dur: "08:00",
            description:
              "Sifat → ravish (qanday?)\nMisollar:\n1) 쉽게 설명해요.\n2) 재밌게 놀았어요.\n3) 크게 읽어 보세요.\n4) 맛있게 드세요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            notes: [
              "Ko‘pincha buyruq/iltimos bilan: 크게/천천히.",
              "‘-게 하다’ → sabab-causative (keyingi bosqich)."
            ]
          },
          {
            id: "a2gr23",
            title: "A/V-(으)ㄴ 편이다 — ‘… tomon/…ga yaqin’ (tendensiya)",
            dur: "08:00",
            description:
              "Subyektiv baho, odatga moyillik.\nMisollar:\n1) 저는 조용한 편이에요.\n2) 이 식당은 비싼 편이에요.\n3) 저는 아침에 일찍 일어나는 편이에요.\n4) 한국어 발음이 어려운 편이에요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            notes: [
              "Fe’l odati: V-는 편이다.",
              "Sifat: A-(으)ㄴ 편이다."
            ]
          },
          {
            id: "a2gr24",
            title: "V-기 쉽다/어렵다 — ‘… qilish oson/qiyin’",
            dur: "08:00",
            description:
              "Fe’lni otlash + baho.\nMisollar:\n1) 이 앱은 사용하기 쉬워요.\n2) 이 문법은 이해하기 어려워요.\n3) 일찍 일어나기는 정말 어려워요.\n4) 한국 친구 사귀기는 쉽지 않아요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            notes: [
              "Ko‘pincha ‘-기는 …’ bilan predmet sifatida.",
              "‘쉽지 않다’ — muloyim inkor."
            ]
          }
        ]
      }
    ]
  }
},
  {
  id: "snu-1a-grammar",
  title: "Seoulite 1A — Grammar Course",
  series: "SNU",
  kind: "Textbook",
  level: "Boshlang'ich",
  price: 0,
  rating: 4.8,
  readers: 16800,
  cover:
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",

  description:
    "Seoul National University (SNU) 1A darajasidagi yadro grammatikalar: qisqa tushuntirishlar, foydali misollar va darslik uslubidagi videolar bilan. Self-study va sinf mashg‘ulotlari uchun qulay.",

  lectureNotes: [
    "Har bo‘limda 2–5 grammatikani chuqur o‘rganing",
    "Dialog → naqsh → drill → mini-quiz ketma-ketligida ishlang",
    "Misollarni ovoz chiqarib takrorlang (shadowing)",
    "Har bo‘lim oxirida 5 daqiqalik ‘recall’ testi qiling"
  ],

  attachments: [
    {
      id: "g1",
      name: "SNU_1A_Grammar_CheatSheet.pdf",
      kind: "pdf",
      size: "0.8 MB",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      id: "g2",
      name: "SNU_1A_Drills_Audio.zip",
      kind: "zip",
      size: "3.4 MB",
      url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip"
    },
    {
      id: "g3",
      name: "Interactive Quiz (web)",
      kind: "link",
      url: "https://example.com/quiz/snu-1a-grammar"
    }
  ],

  video: {
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
  },

  course: {
    progress: 0,
    totalDuration: "~3h 30m",
    sections: [
      {
        id: "s1",
        title: "Identifikatsiya: ‘X (dir) / X emas’",
        total: "4 lectures · ~26m",
        lessons: [
          {
            id: "gr1",
            title: "N이에요/예요 — ‘X (dir)’ kopula",
            dur: "06:00",
            description:
              "받침 bo‘lsa ‘이에요’, bo‘lmasa ‘예요’. Savol: ‘…이에요/예요?’\nMisollar: 저는 학생이에요. 이분은 의사예요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: [
              "이것은 책이에요?",
              "서울이에요 / 부산이에요?",
              "Hurmatli: …입니다 (keyinroq)."
            ]
          },
          {
            id: "gr2",
            title: "N이/가 아니에요 — ‘X emas’",
            dur: "06:00",
            description:
              "Kopula inkori. ‘…이/가 아니에요’ (이/가 otga bog‘lanadi).\nMisollar: 저는 의사가 아니에요. 이것은 커피가 아니에요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            notes: ["학생이 아니에요?", "여기는 은행이 아니에요."]
          },
          {
            id: "gr3",
            title: "도 — ‘ham/also’",
            dur: "07:00",
            description:
              "N도 — avvalgi elementga ‘ham’ ma’nosini qo‘shadi.\nMisollar: 저도 학생이에요. 물도 주세요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            notes: ["책도 있어요.", "한국 음식도 좋아해요."]
          },
          {
            id: "gr4",
            title: "의 — egalik ‘-ning’",
            dur: "07:00",
            description:
              "N의 N (talaffuzda ko‘pincha ‘에’ga yaqin).\nMisollar: 친구의 책이에요. 선생님의 가방이에요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            notes: ["우리의 학교 / 우리 학교 (keng tarqalgan)"]
          }
        ]
      },

      {
        id: "s2",
        title: "Mavzu/Subyekt/Obyekt partikllari",
        total: "4 lectures · ~32m",
        lessons: [
          {
            id: "gr5",
            title: "은/는 — mavzu/kontrast",
            dur: "08:00",
            description:
              "받침: 은, 받침 yo‘q: 는. Mavzuni ajratadi.\nMisollar: 저는 한국 사람이에요. 오늘은 바빠요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: ["저는 학생이에요. (lekin) 제 동생은 회사원이에요."]
          },
          {
            id: "gr6",
            title: "이/가 — subyekt (ayniqsa 있다/없다 bilan)",
            dur: "08:00",
            description:
              "Yangilik, mavjudlikni bildiradi.\nMisollar: 누가 와요? 시간이 있어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            notes: ["무엇이 필요해요? 물이 필요해요."]
          },
          {
            id: "gr7",
            title: "을/를 — obyekt",
            dur: "08:00",
            description:
              "받침: 을, yo‘q: 를.\nMisollar: 책을 읽어요. 한국어를 공부해요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            notes: ["영화를 안 봐요.", "커피를 못 마셔요."]
          },
          {
            id: "gr8",
            title: "하고 — ‘va/-bilan’",
            dur: "08:00",
            description:
              "N하고(같이) — ‘…bilan (birga)’ va ‘va’ ma’nolari.\nMisollar: 친구하고 영화 봐요. 엄마하고 시장에 가요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            notes: ["선생님하고 이야기해요.", "빵하고 우유 주세요."]
          }
        ]
      },

      {
        id: "s3",
        title: "Joy, mavjudlik va ko‘rsatkichlar",
        total: "5 lectures · ~35m",
        lessons: [
          {
            id: "gr9",
            title: "이/그/저 + N; 여기/거기/저기",
            dur: "07:00",
            description:
              "Masofa: 이(bu)/그(u)/저(anarigi). Joy ko‘rsatkichlari: 여기/거기/저기.\nMisollar: 이 책, 저 사람; 여기 있어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: ["그 영화 봤어요? (oldin tilga olingan narsaga ‘그’)"]
          },
          {
            id: "gr10",
            title: "N에 — vaqt/joy ‘-da/ga’",
            dur: "07:00",
            description:
              "Joyga borish/yetishish yoki vaqt ko‘rsatish.\nMisollar: 학교에 가요. 3시에 만나요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            notes: ["집에 있어요. 토요일에 쉬어요."]
          },
          {
            id: "gr11",
            title: "N에서 — harakat joyi ‘-da’",
            dur: "06:00",
            description:
              "Faoliyat sodir bo‘ladigan joy.\nMisollar: 학교에서 공부해요. 집에서 쉬어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            notes: ["회사에서 일해요. 카페에서 친구를 만나요."]
          },
          {
            id: "gr12",
            title: "있다/없다 — bor/yo‘q; egalik",
            dur: "07:00",
            description:
              "N이/가 있어요/없어요 — mavjudlik/egalik.\nMisollar: 시간이 있어요. 숙제가 없어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            notes: ["책이 가방 안에 있어요.", "형이 없어요."]
          },
          {
            id: "gr13",
            title: "Joy otlari + 에 — 위치 (위/아래/앞/뒤/옆/안/밖/사이)",
            dur: "08:00",
            description:
              "N 위치 N에 있어요.\nMisollar: 책이 책상 위에 있어요. 카페는 학교 옆에 있어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
            },
            notes: ["A와 B 사이에 있어요.", "신발은 문 옆에 있어요."]
          }
        ]
      },

      {
        id: "s4",
        title: "Raqamlar, sanagichlar va vaqt ifodalari",
        total: "5 lectures · ~36m",
        lessons: [
          {
            id: "gr14",
            title: "한자어/고유어 sonlar + sanagichlar",
            dur: "10:00",
            description:
              "명, 개, 권, 병, 잔, 마리, 살, 시/분, 원 …\nMisollar: 사과 두 개, 고양이 한 마리, 3시 20분, 5,000원.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: ["스무 살 / 한 살 (불규칙)", "책 세 권, 사람 네 명"]
          },
          {
            id: "gr15",
            title: "얼마예요? / N 주세요 — narx & buyurtma",
            dur: "06:00",
            description:
              "Narx so‘rash va muloyim buyurtma.\nMisollar: 이거 얼마예요? 물 한 병 주세요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            notes: ["김밥 두 줄 주세요.", "현금으로 계산할게요."]
          },
          {
            id: "gr16",
            title: "~부터 ~까지 — ‘-dan … -gacha’",
            dur: "06:00",
            description:
              "Vaqt/masofa chegarasi.\nMisollar: 9시부터 5시까지 일해요. 서울부터 부산까지.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            notes: ["월요일부터 수요일까지 시험이에요."]
          },
          {
            id: "gr17",
            title: "Savol so‘zlari: 누구/어디/언제/뭐/몇/어떻게/왜",
            dur: "07:00",
            description:
              "몇 + sanagich: 몇 시, 몇 살, 몇 명 …\nMisollar: 어디에 가요? 몇 시예요? 왜 늦었어요?",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            notes: ["누가 왔어요?", "무엇을 사요? → 뭐 사요? (og‘zaki)"]
          },
          {
            id: "gr18",
            title: "N만 — ‘faqat’",
            dur: "06:00",
            description:
              "Chegaralash.\nMisollar: 물만 마셔요. 주말에 집에만 있어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
            },
            notes: ["오늘만 쉬어요.", "현금만 받아요."]
          }
        ]
      },

      {
        id: "s5",
        title: "Fe’l shakllari va odobli iltimoslar",
        total: "6 lectures · ~41m",
        lessons: [
          {
            id: "gr19",
            title: "V-아요/어요/해요 — hozirgi (polite)",
            dur: "10:00",
            description:
              "Negiz + (아/어/해)요: 가다→가요, 먹다→먹어요, 하다→해요.\nMisollar: 무엇을 해요? 집에 가요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: ["보다→봐요, 듣다→들어요 (불규칙)."]
          },
          {
            id: "gr20",
            title: "안 V — qisqa inkor",
            dur: "05:00",
            description:
              "Fe’l oldidan ‘안’.\nMisollar: 오늘 공부 안 해요. 커피 안 마셔요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            notes: ["텔레비전 안 봐요.", "쇼핑 안 가요."]
          },
          {
            id: "gr21",
            title: "V-(으)세요 — muloyim buyruq/iltimos",
            dur: "08:00",
            description:
              "Hurmatli iltimos.\nMisollar: 여기 보세요. 조용히 하세요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            notes: ["듣다→들으세요, 돕다→도와주세요 (불규칙)."]
          },
          {
            id: "gr22",
            title: "V-아/어 주세요 — ‘Iltimos, qilib bering’",
            dur: "06:00",
            description:
              "Kimdandir narsa qilishni so‘rash.\nMisollar: 천천히 말해 주세요. 다시 한번 써 주세요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            notes: ["사진 좀 봐 주세요.", "문을 열어 주세요."]
          },
          {
            id: "gr23",
            title: "V-고 싶어요 — ‘-moqchiman’",
            dur: "05:00",
            description:
              "Istak bildirish.\nMisollar: 한국에 가고 싶어요. 쉬고 싶어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
            },
            notes: ["뭐 먹고 싶어요?", "책을 사고 싶어요."]
          },
          {
            id: "gr24",
            title: "V-(으)러 가요/와요 — maqsad ‘-gani bor/kel’",
            dur: "07:00",
            description:
              "Harakat + maqsad.\nMisollar: 밥을 먹으러 가요. 친구를 만나러 와요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: ["사진을 찍으러 공원에 가요.", "운동하러 체육관에 가요."]
          }
        ]
      },

      {
        id: "s6",
        title: "Bog‘lovchilar va kichik naqshlar",
        total: "3 lectures · ~20m",
        lessons: [
          {
            id: "gr25",
            title: "그래서 / 그런데 / 하지만 — sabab/qarama-qarshi",
            dur: "07:00",
            description:
              "그래서: sabab-natija; 그런데/하지만: qarama-qarshi.\nMisollar: 비가 와요. 그래서 집에 있어요. 좋아요. 그런데 비싸요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            notes: ["피곤해요. 그래서 일찍 잘 거예요.", "좋아하지만 못 가요."]
          },
          {
            id: "gr26",
            title: "V-았/었어요 — o‘tgan zamon (Qo‘shimcha)",
            dur: "06:00",
            description:
              "Kecha/ilgari bo‘lgan ish.\nMisollar: 어제 공부했어요. 아침을 먹었어요. 친구를 만났어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            notes: ["갔어요/왔어요/봤어요 (불규칙 ba’zilar)."]
          },
          {
            id: "gr27",
            title: "V-(으)ㄹ까요? — taklif/taxmin (Qo‘shimcha)",
            dur: "07:00",
            description:
              "Taklif/so‘rash yoki ehtimol.\nMisollar: 같이 갈까요? 뭐 먹을까요? 지금 시작할까요?",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            notes: ["그분이 집에 있을까요?", "오늘 비가 올까요?"]
          }
        ]
      }
    ]
  }
},
{
  id: "snu-1b-grammar",
  title: "Seoulite 1B — Grammar Course",
  series: "SNU",
  kind: "Textbook",
  level: "Boshlang'ich",
  price: 0,
  rating: 4.85,
  readers: 17540,
  cover:
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",

  description:
    "Seoul National University (SNU) 1B darajasidagi yadro grammatikalar to‘plami. Har darsda qisqa izoh, ko‘p misollar, amaliy eslatmalar va o‘quv videolari bor. Self-study va sinf mashg‘ulotlari uchun qulay.",

  lectureNotes: [
    "Har bo‘lim: tushuntirish → misol → speaking drill → mini-quiz",
    "‘-아서/어서’ va ‘-니까’ farqini taqiqlarda tekshiring (imperativ bilan)",
    "‘-고 있다’ bilan odatlar va davomiylikni gapiring",
    "‘-을 거예요 / -을게요 / -을까요’ ni vaziyatga ko‘ra farqlang"
  ],

  attachments: [
    {
      id: "b1g1",
      name: "SNU_1B_Grammar_CheatSheet.pdf",
      kind: "pdf",
      size: "1.1 MB",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      id: "b1g2",
      name: "SNU_1B_Audio_Drills.zip",
      kind: "zip",
      size: "6.2 MB",
      url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip"
    }
  ],

  video: {
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
  },

  course: {
    progress: 0,
    totalDuration: "~3h 45m",
    sections: [
      {
        id: "b1s1",
        title: "Sabab va ketma-ketlik",
        total: "4 lectures · ~32m",
        lessons: [
          {
            id: "bgr1",
            title: "V-아서/어서 — sabab/ketma-ketlik",
            dur: "08:00",
            description:
              "Fe’l negizi + 아/어서: ‘… uchun/shuning uchun’ yoki ketma-ketlik.\nMisollar: 피곤해서 일찍 잤어요. 배가 아파서 약을 먹었어요. 밥을 먹어서 배불러요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: [
              "Imperativ/taqiq bilan odatda ishlatilmaydi: ✗ *일찍 오세요?* → ‘-니까’ ni tanlang.",
              "ㅏ/ㅗ → -아서; boshqalar → -어서; 하다 → 해서."
            ]
          },
          {
            id: "bgr2",
            title: "V-고 — ‘va/…ib’ (ketma-ketlik)",
            dur: "08:00",
            description:
              "Harakatlarni ketma-ket bog‘laydi.\nMisollar: 아침을 먹고 학교에 가요. 숙제를 하고 쉬어요. 친구를 만나고 영화 봤어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            notes: ["Davomiy voqealarni soddalashtirish uchun qulay.", "Sifat + 고 ham mumkin: 싸고 맛있어요."]
          },
          {
            id: "bgr3",
            title: "V-지만 — ‘lekin/bo‘lsa-da’",
            dur: "08:00",
            description:
              "Qarama-qarshi mazmun.\nMisollar: 비싸지만 좋아요. 바쁘지만 운동해요. 한국어는 어렵지만 재미있어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            notes: ["Subyektiv qarama-qarshilikda ‘그런데/하지만’ bilan ham almashtiriladi."]
          },
          {
            id: "bgr4",
            title: "V-(으)니까 — sabab (imperativ/taqiq mos)",
            dur: "08:00",
            description:
              "Aniq sabab + keyin buyruq/iltimos mumkin.\nMisollar: 비가 오니까 우산을 가져가세요. 시간이 없으니까 빨리 합시다.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            notes: ["-아서/어서 bilan farqi: imperativ/taqiq bilan ‘-니까’ qulay."]
          }
        ]
      },

      {
        id: "b1s2",
        title: "Vaqt, davomiylik va tartib",
        total: "5 lectures · ~38m",
        lessons: [
          {
            id: "bgr5",
            title: "V-고 있다 — davomiylik/odat",
            dur: "08:00",
            description:
              "Hozirgi davomiy yoki odatiy holat.\nMisollar: 지금 무엇을 하고 있어요? 한국에서 공부하고 있어요. 매주 수영을 배우고 있어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: ["Hozirgi jarayon: ‘전화하고 있어요’. Odat: ‘다이어트를 하고 있어요’."]
          },
          {
            id: "bgr6",
            title: "V-(으)ㄴ 후에 / V-고 나서 — ‘…dan keyin’",
            dur: "08:00",
            description:
              "Ketma-ketlikda ‘keyin’ nuqtasini urg‘ulaydi.\nMisollar: 숙제를 한 후에 놀아요. 밥을 먹고 나서 설거지했어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
            },
            notes: ["-고 나서: darhol keyin. -(으)ㄴ 후에: umumiy ‘keyin’."]
          },
          {
            id: "bgr7",
            title: "V-(으)ㄹ 때 — ‘… paytida/…da’",
            dur: "07:00",
            description:
              "Vaqt nuqtasi.\nMisollar: 집에 갈 때 전화해 주세요. 시험 볼 때 긴장해요. 어렸을 때 부산에 살았어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            notes: ["Nominal bilan: 수업 때 조용히 하세요."]
          },
          {
            id: "bgr8",
            title: "N 동안 — ‘… davomida’",
            dur: "07:00",
            description:
              "Vaqt oralig‘ida amalga oshgan ish.\nMisollar: 한 시간 동안 기다렸어요. 방학 동안 아르바이트를 했어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            notes: ["V-(으)는 동안: ‘…yotgan paytda’: 제가 자는 동안 전화가 왔어요."]
          },
          {
            id: "bgr9",
            title: "N 후에 / N 전에 — ot bilan ‘keyin/oldin’",
            dur: "08:00",
            description:
              "Vaqt nuqtalari ot bilan.\nMisollar: 점심 후에 커피 마셔요. 회의 전에 자료를 준비하세요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            notes: ["1A’da ‘V-기 전에’ bor edi — bu yerda N bilan mustahkamlash."]
          }
        ]
      },

      {
        id: "b1s3",
        title: "Kelasi zamon va niyat",
        total: "4 lectures · ~30m",
        lessons: [
          {
            id: "bgr10",
            title: "V-(으)ㄹ 거예요 — kelasi/ ehtimol",
            dur: "08:00",
            description:
              "Reja yoki taxmin.\nMisollar: 내일 비가 올 거예요. 주말에 여행할 거예요. 지금 출발할 거예요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: ["이다 → 일 거예요: 학생일 거예요."]
          },
          {
            id: "bgr11",
            title: "V-(으)려고 하다 — ‘…moqchiman’ (niyat)",
            dur: "07:00",
            description:
              "Yaqin reja/niyat.\nMisollar: 유학을 가려고 해요. 운동을 시작하려고 해요. 이 책을 읽으려고 해요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            notes: ["O‘tgan: 어제 만나려고 했지만 못 만났어요."]
          },
          {
            id: "bgr12",
            title: "V-기로 하다 — ‘qaror qildim’",
            dur: "07:00",
            description:
              "Yakuniy qaror.\nMisollar: 내일부터 운동하기로 했어요. 담배를 끊기로 했어요. 일찍 자기로 했어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            notes: ["Ko‘pincha o‘tgan zamon bilan: ‘…하기로 했어요’."]
          },
          {
            id: "bgr13",
            title: "V-(으)ㄹ게요 — va’da/tezkor niyat",
            dur: "08:00",
            description:
              "Tinglovchiga yo‘naltirilgan va’da.\nMisollar: 지금 확인할게요. 내일 전화할게요. 문을 제가 열게요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            notes: ["Sifat bilan kelmaydi: ✗ 예쁠게요."]
          }
        ]
      },

      {
        id: "b1s4",
        title: "Ruxsat, taqiq va majburiyat",
        total: "4 lectures · ~30m",
        lessons: [
          {
            id: "bgr14",
            title: "V-아/어도 돼요 — ‘…qilsam bo‘ladimi?’/ruxsat",
            dur: "08:00",
            description:
              "Ruxsat so‘rash/berish.\nMisollar: 여기 앉아도 돼요? 사진을 찍어도 돼요. 먼저 가도 돼요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            notes: ["‘-지 않아도 돼요’ → kerak emas: 오늘 숙제하지 않아도 돼요."]
          },
          {
            id: "bgr15",
            title: "V-(으)면 안 돼요 — taqiq",
            dur: "07:00",
            description:
              "Qilsa bo‘lmaydi.\nMisollar: 여기서 담배를 피우면 안 돼요. 숙제를 안 하면 안 돼요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: ["Rasmiyroq: ‘안 됩니다’."]
          },
          {
            id: "bgr16",
            title: "V-아/어야 해요 — majburiyat",
            dur: "07:00",
            description:
              "Kerak/lozim.\nMisollar: 약을 먹어야 해요. 내일까지 끝내어야 해요(=끝내야 해요).",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            notes: ["Og‘zaki ‘-어야’ → ‘-야’: 빨리 가야 해요."]
          },
          {
            id: "bgr17",
            title: "V-지 않아도 돼요 — ‘…qilmasa ham bo‘ladi’",
            dur: "08:00",
            description:
              "Majburiy emas.\nMisollar: 오늘은 청소하지 않아도 돼요. 신발을 벗지 않아도 돼요?",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            notes: ["Qarama-qarshi: ‘-아/어야 해요’."]
          }
        ]
      },

      {
        id: "b1s5",
        title: "Berish-qabul qilish va hurmat",
        total: "5 lectures · ~40m",
        lessons: [
          {
            id: "bgr18",
            title: "N에게/한테/께 — ‘…ga/…ga (kimsaga)’",
            dur: "08:00",
            description:
              "Yo‘nalish/adresat.\nMisollar: 친구에게/한테 전화해요. 선생님께 질문해요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            notes: ["께 — yuqori hurmat uchun."]
          },
          {
            id: "bgr19",
            title: "N에게서/한테서 — ‘…dan (kimdan)’",
            dur: "07:00",
            description:
              "Manba/kelib chiqish.\nMisollar: 친구에게서 선물을 받았어요. 부모님한테서 편지가 왔어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            notes: ["N에서 = joydan; N한테서 = kimdandir."]
          },
          {
            id: "bgr20",
            title: "주다/드리다 & 받다 — berish/qabul qilish",
            dur: "08:00",
            description:
              "주다(bermoq)/받다(qabul qilmoq); 드리다 — hurmatli ‘bermoq’.\nMisollar: 친구에게 책을 줬어요. 선생님께 선물을 드렸어요. 선물을 받았어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            notes: ["Hon.: 드리다/주시다(→ 받는 tarafga nisbatan ‘주시다’)."]
          },
          {
            id: "bgr21",
            title: "V-아/어 주다 / 드리다 — ‘… qilib bering’",
            dur: "09:00",
            description:
              "Xizmat sifatida bajarish.\nMisollar: 도와 주세요. 천천히 말씀해 주세요. 안내해 드릴게요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: ["받는 kishi hurmatli bo‘lsa ‘-아/어 드리다’."]
          },
          {
            id: "bgr22",
            title: "께서 — hurmatli subyekt partikuli",
            dur: "08:00",
            description:
              "이/가 ning hurmatli varianti.\nMisollar: 선생님께서 오셨어요. 사장님께서 말씀하셨어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            notes: ["Honorifik fe’llar bilan ko‘p: 가다→가시다, 먹다→드시다, 있다→계시다."]
          }
        ]
      },

      {
        id: "b1s6",
        title: "Qo‘shimcha naqshlar: tajriba, miqdor, taqqos",
        total: "5 lectures · ~35m",
        lessons: [
          {
            id: "bgr23",
            title: "V-아/어 보다 — ‘sinab ko‘rmoq’ / ‘ko‘ribdi’",
            dur: "08:00",
            description:
              "Tajriba sinash yoki o‘tmishda ‘ko‘rmoq’.\nMisollar: 한국 음식을 먹어 봤어요. 한번 들어 보세요. 입어 봐도 돼요?",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            notes: ["듣다→들어 보세요; ‘-어 보다’ + neg.: 안/못 + V-아/어 봤어요."]
          },
          {
            id: "bgr24",
            title: "N쯤/정도 — ‘taxminan/atrofida’",
            dur: "06:00",
            description:
              "Taxminiy miqdor.\nMisollar: 세 시쯤 만나요. 한 달 정도 한국에 있을 거예요. 10명쯤 와요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            notes: ["시간쯤/시간 정도 — ikkalasi ham mumkin."]
          },
          {
            id: "bgr25",
            title: "N보다 (더) — qiyos ‘…dan (ko‘proq)’",
            dur: "07:00",
            description:
              "Qiyoslash.\nMisollar: 한국어가 일본어보다 더 어려워요. 이번 주가 지난주보다 바빠요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            notes: ["덜 (kamroq): 이게 저것보다 덜 비싸요."]
          },
          {
            id: "bgr26",
            title: "N밖에 + 부정 — ‘faqat … (xolos)’",
            dur: "07:00",
            description:
              "‘밖에’ doimo inkor bilan.\nMisollar: 돈이 천 원밖에 없어요. 시간이 10분밖에 없어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            notes: ["N만 — ijobiy fe’l bilan: 학생만 있어요."]
          },
          {
            id: "bgr27",
            title: "Nominalizatsiya: V-는 것 / V-기",
            dur: "07:00",
            description:
              "Fe’lni otga aylantirish.\nMisollar: 책 읽는 게 좋아요. 한국어를 배우기는 쉬워요. 운동하기가 힘들어요.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            notes: [
              "관형사형 (adnominal): 어제 본 영화 / 내일 볼 계획.",
              "‘-는 것’ odatda umumiy odat/fe’l predmeti: ‘수영하는 것을 좋아해요’."
            ]
          }
        ]
      }
    ]
  }
},
]
