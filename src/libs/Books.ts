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
  id: string;
  title: string;
  dur: string;
  playing?: boolean;
  description?: string;
  video?: { url: string; poster?: string };
  notes?: string[];
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
  video?: { url: string; poster?: string }; // youtu.be yoki watch?v=... ham bo‘ladi
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
  series: string;
  kind: string;
  level: Level;
  price: number;
  rating: number;
  readers: number;
  cover: string;
  badge?: string;
  video?: { url: string; poster?: string }; // youtu.be yoki watch?v=... ham bo‘ladi
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
    "https://m.media-amazon.com/images/I/51lCLL6Vx6L.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",

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
      url: "https://www.scribd.com/document/631641759/%EC%84%9C%EC%9A%B8%EB%8C%80-%ED%95%9C%EA%B5%AD%EC%96%B4-workbook-2A-%EC%B9%BC%EB%9D%BC-pdf"
    },
    {
      id: "s2a2",
      name: "SNU_2A_Audio_Drills.zip",
      kind: "zip",
      size: "7.8 MB",
      url: "https://www.youtube.com/watch?v=r5vx67rBSu8"
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
              url: "https://youtu.be/FxTWApXxgII",
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
    "https://m.media-amazon.com/images/I/415mQoupjKL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",

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
              url: "https://youtu.be/PRg3IsoLMXs.mp4",
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
    "https://images.squarespace-cdn.com/content/v1/62f643e31145611db3fb960d/1704972858019-E7GEO2JYNT2DFQS6NWHH/9788953949454.png",

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
{
  id: "snu-2b-grammar",
  title: "Seoulite 2B — Grammar Course",
  series: "SNU",
  kind: "Textbook",
  level: "Boshlang'ich",
  price: 0,
  rating: 4.88,
  readers: 17560,
  cover:
    "https://images.squarespace-cdn.com/content/v1/62f643e31145611db3fb960d/1719640695840-Z5DU68NCEE1X8NDX74OO/9788952131263.png",

  description:
    "SNU 2B (A2+) bosqichida uchraydigan muhim grammatikalar. Har bir dars izoh va tartiblangan (1–4) misollar ko/ru/en/uz bilan keltirilgan.",

  lectureNotes: [
    "Har dars: izoh → 4 misol → og‘zaki drill → mini-quiz",
    "‘-아/어 두다/놓다’ tayyor holat; ‘-아/어 버리다’ — ‘butunlay/afsus’ ohangi",
    "‘-(으)ㄹ 뻔하다’ — deyarli yuz berish",
    "‘-(으)ㄴ/는지 알다/모르다’ — bilish/bilmaslik",
    "‘-다고/라고 하다’ — referativ nutq"
  ],

  attachments: [
    {
      id: "s2b1",
      name: "SNU_2B_Grammar_CheatSheet.pdf",
      kind: "pdf",
      size: "1.1 MB",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    }
  ],

  video: {
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
  },

  course: {
    progress: 0,
    totalDuration: "~4h 20m",
    sections: [
      {
        id: "b2s1",
        title: "Holat, tayyorgarlik va deyarli yuz berish",
        total: "4 lectures · ~36m",
        lessons: [
          {
            id: "b2gr1",
            title: "V-아/어 두다 / V-아/어 놓다 — ‘oldindan qilib qo‘ymoq’",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "Kelajak uchun hozir tayyorlab qo‘yish yoki holatni saqlash ma’nosini bildiradi. Ko‘pincha ‘미리’ bilan keladi. \n\nMisollar:\n1) ko: 회의 전에 자료를 미리 인쇄해 두었어요. | ru: До собрания я заранее распечатал материалы. | en: I printed the materials in advance before the meeting. | uz: Yig‘ilishdan oldin materiallarni oldindan chiqirib qo‘ydim.\n2) ko: 문을 열어 놓을게요. 곧 올 거예요. | ru: Дверь оставлю открытой. Они скоро придут. | en: I’ll leave the door open. They’ll come soon. | uz: Eshikni ochiq qoldiraman. Ular tez kelishadi.\n3) ko: 예약을 해 둬서 줄을 안 서도 돼요. | ru: Есть бронь, поэтому не нужно стоять в очереди. | en: We made a reservation, so we don’t need to queue. | uz: Oldindan bron qilganmiz, navbatda turish shart emas.\n4) ko: 컴퓨터를 켜 놓고 잠깐 나갔어요. | ru: Оставил компьютер включённым и ненадолго вышел. | en: I left the computer on and stepped out briefly. | uz: Kompyuterni yoqib qo‘yib, qisqa muddatga tashqariga chiqdim."
          },
          {
            id: "b2gr2",
            title: "V-아/어 버리다 — ‘butunlay/oh-ak’ ohangi",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            description:
              "Ish to‘liq yakunlanganini yoki afsus/katarsis ohangini beradi. \n\nMisollar:\n1) ko: 숙제를 다 해 버렸어요. | ru: Я всё домашнее задание уже сделал (и всё!). | en: I finished all the homework (completely). | uz: Barcha uy vazifasini qilib tashladim (butunlay).\n2) ko: 중요한 파일을 지워 버렸어요. | ru: Я взял и удалил важный файл (упс). | en: I ended up deleting an important file. | uz: Muhim faylni o‘chirib yubordim (afsus).\n3) ko: 걱정은 잊어 버리세요. | ru: Просто забудьте тревоги. | en: Just forget your worries. | uz: Xavotirlarni butunlay unuting.\n4) ko: 비가 와서 계획이 다 망해 버렸어요. | ru: Из-за дождя планы полностью сорвались. | en: Because of the rain, our plans were totally ruined. | uz: Yomg‘ir tufayli rejamiz butkul barbod bo‘ldi."
          },
          {
            id: "b2gr3",
            title: "V-(으)ㄹ 뻔하다 — ‘deyarli bo‘lib qolmoq’",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            description:
              "Bir voqea deyarli yuz berayozganini bildiradi (ammo sodir bo‘lmadi). \n\nMisollar:\n1) ko: 버스를 놓칠 뻔했어요. | ru: Чуть не пропустил автобус. | en: I almost missed the bus. | uz: Avtobusni o‘tkazib yuborayozdim.\n2) ko: 비밀번호를 말할 뻔했어요. | ru: Чуть не сказал пароль. | en: I almost said the password. | uz: Parolni aytib yuborayozdim.\n3) ko: 넘어질 뻔했는데 다행히 괜찮아요. | ru: Чуть не упал, к счастью всё нормально. | en: I almost fell, but luckily I’m fine. | uz: Yiqlab qolayozdim, yaxshiyamki hammasi joyida.\n4) ko: 비가 많이 와서 길을 잃을 뻔했어요. | ru: Сильный дождь — едва не заблудился. | en: It rained a lot, and I almost got lost. | uz: Kuchli yomg‘ir sabab yo‘ldan adashayozdim."
          },
          {
            id: "b2gr4",
            title: "V-(으)려다가 — ‘…moqchi bo‘lib turib (boshqa narsa bo‘ldi)’",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            description:
              "Reja A bor edi, lekin B sabab to‘xtadi yoki o‘zgardi. \n\nMisollar:\n1) ko: 나가려다가 비가 와서 집에 있었어요. | ru: Собирался выйти, но пошёл дождь и остался дома. | en: I was going to go out, but it rained so I stayed home. | uz: Tashqariga chiqmoqchi edim, yomg‘ir sabab uyda qoldim.\n2) ko: 전화를 하려다가 메시지를 보냈어요. | ru: Хотел позвонить, но отправил сообщение. | en: I was going to call, but sent a message. | uz: Qo‘ng‘iroq qilmoqchi bo‘lib, o‘rniga xabar yubordim.\n3) ko: 공부하려다가 잠들었어요. | ru: Собирался учиться, но уснул. | en: I was about to study, but fell asleep. | uz: O‘qimoqchi edim, uxlab qolibman.\n4) ko: 요리하려다가 재료가 없어서 시켰어요. | ru: Хотел готовить, но не было продуктов, поэтому заказал. | en: Tried to cook but had no ingredients, so ordered. | uz: Ovqat qilmoqchi edim, mahsulot yo‘q edi, shuning uchun buyurtma berdim."
          }
        ]
      },

      {
        id: "b2s2",
        title: "Bilish-bilmaslik va noaniqlik",
        total: "4 lectures · ~36m",
        lessons: [
          {
            id: "b2gr5",
            title: "A/V-(으)ㄴ/는지 알다/모르다 — ‘bilaman/bilmayman (deb)’",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            description:
              "Savol mazmunini otlab, bilish-bilmaslikni bildiradi. \n\nMisollar:\n1) ko: 그분이 어디 사는지 알아요? | ru: Знаешь, где он/она живёт? | en: Do you know where they live? | uz: U qayerda yashashini bilasanmi?\n2) ko: 지금 열려 있는지 모르겠어요. | ru: Не знаю, открыто ли сейчас. | en: I’m not sure if it’s open now. | uz: Hozir ochiqmi-yo‘qmi bilmayman.\n3) ko: 이게 맞는지 확인해 보세요. | ru: Проверьте, правильно ли это. | en: Please check if this is correct. | uz: Bu to‘g‘rimi-yo‘qmi tekshirib ko‘ring.\n4) ko: 왜 늦었는지 설명해 주세요. | ru: Объясните, почему опоздали. | en: Please explain why you were late. | uz: Nega kechikkaningizni tushuntiring."
          },
          {
            id: "b2gr6",
            title: "V-(으)ㄹ까 하다 — ‘… qilaymi deb o‘ylamoq’",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "Noaniq, yumshoq reja yoki mulohaza. \n\nMisollar:\n1) ko: 이번 주말에 쉬를까 해요. | ru: Думаю в эти выходные отдохнуть. | en: I’m thinking of resting this weekend. | uz: Bu hafta oxirida dam olsammi deb turibman.\n2) ko: 이 책을 읽을까 해요. | ru: Думаю прочитать эту книгу. | en: I’m considering reading this book. | uz: Shu kitobni o‘qisammikan deb turibman.\n3) ko: 이사를 갈까 해요. | ru: Подумываю переехать. | en: I’m thinking about moving. | uz: Ko‘chib o‘tsammi deb o‘ylayapman.\n4) ko: 비가 오니까 택시를 탈까 해요. | ru: Похоже идёт дождь — думаю взять такси. | en: Since it’s raining, I might take a taxi. | uz: Yomg‘ir bo‘layapti, taksiga chiqsammikan."
          },
          {
            id: "b2gr7",
            title: "V-다가도 — ‘ba’zan … qilib turib ham’",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "Holatning tez o‘zgarishi yoki istisno holat. \n\nMisollar:\n1) ko: 날씨가 따뜻하다가도 갑자기 추워져요. | ru: Бывает тепло, а потом резко холодно. | en: It’s warm, then suddenly cold. | uz: Iliq turib ham birdan sovib ketadi.\n2) ko: 기분이 좋다가도 문득 슬퍼져요. | ru: Настроение хорошее, а потом вдруг грустно. | en: I feel good, then suddenly sad. | uz: Kayfiyat yaxshi turib ham birdan xafa bo‘laman.\n3) ko: 일이 쉬웠다가도 어려워질 때가 있어요. | ru: Работа то лёгкая, то сложная. | en: Work is easy, then gets hard. | uz: Ish oson turib ham qiyinlashib qoladi.\n4) ko: 주말엔 한가하다가도 약속이 생겨요. | ru: На выходных то свободно, то появляются дела. | en: Weekends are free, then plans pop up. | uz: Hafta oxiri bo‘sh, lekin birdan reja chiqadi."
          },
          {
            id: "b2gr8",
            title: "V-다 보니(까) — ‘qila-qila (natija)’",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
            },
            description:
              "Takroriy harakat natijasida o‘zgarish/anglash. \n\nMisollar:\n1) ko: 매일 연습하다 보니 실력이 늘었어요. | ru: Тренируясь каждый день, улучшил навык. | en: Practicing daily improved my skills. | uz: Har kuni mashq qila-qila mahoratim oshdi.\n2) ko: 한국 드라마를 보다 보니 귀가 트였어요. | ru: Смотрел дорамы — слух открылся. | en: Watching K-dramas opened my ears. | uz: Doramalarni ko‘ra-ko‘ra tinglashim yaxshilandi.\n3) ko: 자주 만나다 보니 친해졌어요. | ru: Часто встречались — подружились. | en: Meeting often, we became close. | uz: Tez-tez uchrashib, yaqinlashdik.\n4) ko: 쓰다 보니 글이 길어졌네요. | ru: Писал-писал — текст удлинился. | en: Kept writing; it got long. | uz: Yoza-yoza matn cho‘zilib ketibdi."
          }
        ]
      },

      {
        id: "b2s3",
        title: "Qarshi qo‘yish, shart va daraja",
        total: "4 lectures · ~36m",
        lessons: [
          {
            id: "b2gr9",
            title: "V-기는 하지만 — ‘… lekin …’ (muloyim kontrast)",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "A faktini tan olib, B bilan cheklash/qarama-qarshilik keltirish. \n\nMisollar:\n1) ko: 맛있기는 하지만 조금 비싸요. | ru: Вкусно, но немного дорого. | en: Tasty but a bit expensive. | uz: Mazali, lekin biroz qimmat.\n2) ko: 가깝기는 하지만 걸어가기엔 힘들어요. | ru: Близко, но пешком трудно. | en: It’s close but hard to walk. | uz: Yaqin, lekin piyoda borish qiyin.\n3) ko: 도움이 되기는 하지만 완벽하진 않아요. | ru: Полезно, но не идеально. | en: Helpful but not perfect. | uz: Foydali, lekin mukammal emas.\n4) ko: 알기는 하지만 자세히는 몰라요. | ru: Знаю, но не подробно. | en: I know, but not in detail. | uz: Bilaman, lekin batafsil emas."
          },
          {
            id: "b2gr10",
            title: "V-도록 — ‘daraja/maqsadgacha’",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            description:
              "Natija darajasini yoki maqsadni ko‘rsatadi. \n\nMisollar:\n1) ko: 목이 아프도록 소리를 질렀어요. | ru: Кричал до боли в горле. | en: Shouted until throat hurt. | uz: Tomog‘im og‘riguncha baqirdim.\n2) ko: 다 이해하도록 설명해 드릴게요. | ru: Объясню так, чтобы всё поняли. | en: I’ll explain so you understand. | uz: Tushunarli bo‘ladigan qilib tushuntiraman.\n3) ko: 지각하지 않도록 알람을 맞췄어요. | ru: Поставил будильник, чтобы не опоздать. | en: Set an alarm not to be late. | uz: Kechikmaslik uchun budilnik qo‘ydim.\n4) ko: 넘어지지 않도록 조심하세요. | ru: Будьте осторожны, чтобы не упасть. | en: Be careful not to fall. | uz: Yiqlab ketmaslik uchun ehtiyot bo‘ling."
          },
          {
            id: "b2gr11",
            title: "V-아/어 있다 — ‘… qilib turgan holatda’ (statik)",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            description:
              "Natija holatining saqlanishi (passiv natija + mavjud holat). \n\nMisollar:\n1) ko: 문이 닫혀 있어요. | ru: Дверь закрыта. | en: The door is closed. | uz: Eshik yopiq turibdi.\n2) ko: 불이 켜져 있어요. | ru: Свет включён. | en: The lights are on. | uz: Chiroq yoqilgan.\n3) ko: 벽에 그림이 걸려 있어요. | ru: На стене висит картина. | en: A picture is hanging. | uz: Devorda rasm osilgan.\n4) ko: 창문이 열려 있어요. | ru: Окно открыто. | en: The window is open. | uz: Deraza ochiq turibdi."
          },
          {
            id: "b2gr12",
            title: "V-(으)ㄹ 만큼 — ‘… darajada/… qadar’",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
            },
            description:
              "Daraja yoki miqyosni bildiradi, ba’zan taqqos bilan. \n\nMisollar:\n1) ko: 숨이 찰 만큼 빨리 달렸어요. | ru: Бежал так быстро, что запыхался. | en: Ran so fast I was out of breath. | uz: Nafasim qisiladigan darajada yugurdim.\n2) ko: 울 만큼 슬펐어요. | ru: Было так грустно, что плакал. | en: So sad that I cried. | uz: Yig‘laydigan darajada xafa bo‘ldim.\n3) ko: 배가 터질 만큼 먹었어요. | ru: Поел до отвала. | en: Ate to bursting point. | uz: Qornim yoriladigan darajada yedim.\n4) ko: 이해할 만큼 천천히 말해 주세요. | ru: Говорите настолько медленно, чтобы я понял. | en: Speak slowly enough to understand. | uz: Tushunadigan darajada sekin gapiring."
          }
        ]
      },

      {
        id: "b2s4",
        title: "Referativ nutq va fe’l nisbatlari",
        total: "4 lectures · ~36m",
        lessons: [
          {
            id: "b2gr13",
            title: "A/V-다고 하다, N(이)라고 하다 — ‘deydi/aytdi’",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            description:
              "Bilvosita nutq: kimningdir gapini qayta aytish. \n\nMisollar:\n1) ko: 비가 온다고 했어요. | ru: Сказали, что будет дождь. | en: They said it will rain. | uz: Yomg‘ir yog‘adi, deb aytishdi.\n2) ko: 그 사람이 학생이라고 해요. | ru: Говорят, он студент. | en: They say he’s a student. | uz: U kishi talaba ekan, deyishadi.\n3) ko: 시간이 없다고 했어요. | ru: Он сказал, что у него нет времени. | en: He said he doesn’t have time. | uz: Vaqti yo‘qligini aytdi.\n4) ko: 내일 못 온다고 합니다. | ru: Сообщают, что завтра не сможет прийти. | en: They say they can’t come tomorrow. | uz: Ertaga kela olmas ekan, deyishmoqda."
          },
          {
            id: "b2gr14",
            title:
              "V-아/어 달라고 하다 / V-아/어 주라고 하다 — ‘… qilib berishni so‘rashni yetkazish’",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "Boshqaning iltimosini bilvosita yetkazish (달라-/주라-). \n\nMisollar:\n1) ko: 엄마가 문을 닫아 달라고 했어요. | ru: Мама попросила закрыть дверь. | en: Mom asked to close the door. | uz: Onam eshikni yopishni so‘radi.\n2) ko: 선생님이 조용히 하라고 하셨어요. | ru: Учитель сказал быть тихими. | en: The teacher told us to be quiet. | uz: Ustoz jim turishni buyurdilar.\n3) ko: 친구가 연락해 달라고 했어요. | ru: Друг попросил связаться. | en: A friend asked me to contact them. | uz: Do‘stim aloqaga chiqishni so‘radi.\n4) ko: 부장님이 보고서를 보내 주라고 했어요. | ru: Начальник велел отправить отчёт. | en: The manager told me to send the report. | uz: Rahbar hisobotni yuborishni buyurdilar."
          },
          {
            id: "b2gr15",
            title: "Causative: V-게 하다 — ‘qildirmoq’",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            description:
              "Kimnidur bir ishni qilishga majburlash yoki imkon yaratish. \n\nMisollar:\n1) ko: 아이를 일찍 자게 했어요. | ru: Заставил ребёнка рано лечь спать. | en: Made the child go to bed early. | uz: Bolani erta uxlatdim.\n2) ko: 음악이 사람을 행복하게 해요. | ru: Музыка делает людей счастливыми. | en: Music makes people happy. | uz: Musiqa odamni baxtli qiladi.\n3) ko: 선생님이 학생들을 발표하게 했어요. | ru: Учитель заставил студентов выступать. | en: The teacher had students present. | uz: Ustoz talabalarga taqdimot qildirdi.\n4) ko: 친구가 나를 웃게 만들었어요. | ru: Друг заставил меня улыбнуться. | en: My friend made me smile. | uz: Do‘stim meni kuldirib yubordi."
          },
          {
            id: "b2gr16",
            title: "Passive (피동): -(이/히/리/기)다 / -아/어지다",
            dur: "09:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            description:
              "Ish-harakat subyektdan emas, tashqi ta’sir bilan yuz beradi. Ko‘p juftliklar: 열다→열리다, 닫다→닫히다, 막다→막히다; ‘-아/어지다’ ham passiv ohang beradi. \n\nMisollar:\n1) ko: 문이 열렸어요. | ru: Дверь открылась. | en: The door opened/was opened. | uz: Eshik ochildi.\n2) ko: 창문이 닫혔어요. | ru: Окно закрылось. | en: The window closed/was closed. | uz: Deraza yopildi.\n3) ko: 길이 막혔어요. | ru: Дорога перекрыта/пробка. | en: The road is blocked/jammed. | uz: Yo‘l tiqilib qoldi.\n4) ko: 음식이 다 준비되었어요. | ru: Еда вся приготовлена. | en: The food is all prepared. | uz: Ovqatlar tayyor bo‘ldi."
          }
        ]
      }
    ]
  }
},
{
  id: "snu-3a-grammar",
  title: "Seoulite 3A — Grammar Course",
  series: "SNU",
  kind: "Textbook",
  level: "O'rta 1",
  price: 0,
  rating: 4.9,
  readers: 18210,
  cover:
    "https://images.squarespace-cdn.com/content/v1/62f643e31145611db3fb960d/1722254922441-EW43UL9THVE8BVMUR5HC/9788953949546.png",

  description:
    "SNU 3A bosqichidagi asosiy grammatikalar. Har bir darsda qisqa izoh va 4 ta tartiblangan misol (ko/ru/en/uz) description ichida berilgan — dars vaqtida to‘g‘ridan-to‘g‘ri ko‘rsatish uchun qulay.",

  lectureNotes: [
    "Har dars: ① naqshni o‘qing → ② 4 misolni shadowing → ③ formani o‘zingizga mos jumla bilan almashtiring",
    "‘문맥(контекст)’ga e’tibor bering: 3A darajasi nozik ohang va maqsadni ajratadi",
    "Dialoglarda ‘담화 표지’ (그래서/근데/아무튼…)ni kuzating",
  ],

  attachments: [
    {
      id: "s3a1",
      name: "SNU_3A_Grammar_Summary.pdf",
      kind: "pdf",
      size: "1.3 MB",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    }
  ],

  video: {
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
  },

  course: {
    progress: 0,
    totalDuration: "~4h 40m",
    sections: [
      {
        id: "s3a-1",
        title: "Vaqt-ketma-ketlik va sababning nozik ko‘rinishlari",
        total: "4 lectures · ~40m",
        lessons: [
          {
            id: "3a-1",
            title: "V-느라고 — ‘… bilan band bo‘lib (salbiy natija)’",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "Parallel bandlik sababli istalmagan natija. Odatda buyruk/kechirim bilan keladi.\n\n1) ko: 보고서 쓰느라고 전화를 못 받았어요.\n   ru: Был занят отчётом и не смог ответить на звонок.\n   en: I was writing the report, so I couldn’t pick up.\n   uz: Hisobot yozish bilan band bo‘lib, qo‘ng‘iroqqa javob bera olmadim.\n2) ko: 이사 준비하느라고 잠을 거의 못 잤어요.\n   ru: Из-за подготовки к переезду почти не спал.\n   en: Preparing to move, I barely slept.\n   uz: Ko‘chishga tayyorgarlik sabab deyarli uxlamadim.\n3) ko: 운전하느라고 메시지를 늦게 봤어요.\n   ru: Вёл машину, поэтому поздно увидел сообщение.\n   en: I was driving, so I saw the message late.\n   uz: Mashina haydab, xabarni kech ko‘rdim.\n4) ko: 손님 맞이하느라고 점심을 거르고 말았어요.\n   ru: Принимая гостей, пропустил обед.\n   en: Receiving guests, I ended up skipping lunch.\n   uz: Mehmonga tayyorgarlik qilib, tushlikni o‘tkazib yubordim."
          },
          {
            id: "3a-2",
            title: "V-자마자 — ‘… bilanoq/as soon as’",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            description:
              "A sodir bo‘lgach darhol B ro‘y berishi.\n\n1) ko: 집에 오자마자 샤워했어요.\n   ru: Как только пришёл домой, сразу принял душ.\n   en: As soon as I got home, I took a shower.\n   uz: Uyga kelishim bilan darhol dush oldim.\n2) ko: 수업이 끝나자마자 질문이 쏟아졌어요.\n   ru: Как только занятие закончилось, посыпались вопросы.\n   en: Questions poured in as soon as class ended.\n   uz: Dars tugashi bilan savollar yog‘ildi.\n3) ko: 문을 열자마자 차가운 공기가 들어왔어요.\n   ru: Как только открыли дверь, ворвался холодный воздух.\n   en: Cold air rushed in as soon as we opened the door.\n   uz: Eshik ochilishi bilan sovuq havo kirib keldi.\n4) ko: 발표가 시작되자마자 분위기가 조용해졌어요.\n   ru: Как только началоcь выступление, стало тихо.\n   en: As the presentation began, it turned quiet.\n   uz: Taqdimot boshlanishi bilan zal jim bo‘ldi."
          },
          {
            id: "3a-3",
            title: "A/V-더니 — ‘(o‘zim ko‘rdim) va so‘ng…/lekin…’",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "Gapiruvchi kuzatgan A dan keyin B o‘zgarish/xulosa. Subyekt ko‘pincha 3-shaxs.\n\n1) ko: 어제는 춥더니 오늘은 따뜻하네요.\n   ru: Вчера было холодно, а сегодня тепло.\n   en: It was cold yesterday, but it’s warm today.\n   uz: Kecha sovuq edi, bugun esa iliq.\n2) ko: 그는 매일 연습하더니 발음이 정말 좋아졌어요.\n   ru: Он тренировался каждый день — произношение улучшилось.\n   en: He practiced daily; his pronunciation got better.\n   uz: U har kuni mashq qildi — talaffuzi ancha yaxshilandi.\n3) ko: 아침에는 한가하더니 점심때 바빠졌어요.\n   ru: Утром было спокойно, к обеду стало занято.\n   en: It was quiet in the morning, then busy at noon.\n   uz: Ertalab bemalol edi, tushga yaqin band bo‘lib ketdi.\n4) ko: 약을 먹더니 금방 낫는 것 같아요.\n   ru: Принял лекарство — кажется, быстро полегчало.\n   en: After taking medicine, it seems better quickly.\n   uz: Dori ichgach, tezda o‘nglangandek."
          },
          {
            id: "3a-4",
            title: "A/V-(으)ㄴ/는 김에 — ‘(yo‘l-yo‘lakay) shu bahonada’",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
            },
            description:
              "A ishini qilayotgan chog‘da B ni ham bajarish.\n\n1) ko: 회사에 가는 김에 우체국에 들렸어요.\n   ru: По дороге в офис зашёл на почту.\n   en: On my way to work, I dropped by the post office.\n   uz: Ishga ketar ekanman, pochta orqali o‘tdim.\n2) ko: 시장에 간 김에 과일도 샀어요.\n   ru: Раз уж пошёл на рынок, купил и фрукты.\n   en: Since I went to the market, I also bought fruit.\n   uz: Bozorga borganimda meva ham oldim.\n3) ko: 프린트하러 온 김에 스캔도 했어요.\n   ru: Пришёл печатать — заодно отсканировал.\n   en: Came to print; scanned as well.\n   uz: Print qilish uchun kelib, shu bahonada skaner ham qildim.\n4) ko: 한국에 온 김에 제주도도 다녀왔어요.\n   ru: Раз уж приехал в Корею, съездил и на Чеджу.\n   en: Since I came to Korea, I also visited Jeju.\n   uz: Koreyaga kelganimda, Jeju oroliga ham bordim."
          }
        ]
      },

      {
        id: "s3a-2",
        title: "Taxmin, dalil va ritorik ohang",
        total: "4 lectures · ~40m",
        lessons: [
          {
            id: "3a-5",
            title: "A/V-(으)ㄴ/는 모양이다 — ‘ko‘rinishidan/ga o‘xshaydi’",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            description:
              "Kuzatuv/indikatorga tayanib xulosa qilish.\n\n1) ko: 불이 꺼져 있는 걸 보니 집에 없는 모양이에요.\n   ru: Свет выключен — похоже, их нет дома.\n   en: The lights are off; seems no one’s home.\n   uz: Chiroq o‘chib turibdi — uyda hech kim yo‘q shekilli.\n2) ko: 표정이 어두운 걸 보니 걱정이 많은 모양이에요.\n   ru: Судя по мрачному лицу, похоже, много переживаний.\n   en: From the gloomy face, they seem worried.\n   uz: Qovog‘i soliq — ko‘p xavotiri borga o‘xshaydi.\n3) ko: 사람들이 줄을 서 있는 걸 보니 맛집인 모양이에요.\n   ru: Стоят в очереди — видимо, популярное место.\n   en: There’s a line, so it must be good.\n   uz: Navbat bor — demak, mashhur joy.\n4) ko: 우산을 든 걸 보니 비가 올 모양이에요.\n   ru: Несут зонты — похоже, будет дождь.\n   en: People carry umbrellas; looks like rain.\n   uz: Odamlar soyabon ko‘tarib yuribdi — yomg‘ir yog‘adiganga o‘xshaydi."
          },
          {
            id: "3a-6",
            title: "A/V-(으)ㄴ/는 것 같다 / 듯하다 — ‘shekilli/ga o‘xshaydi’ (yumshoq)",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            description:
              "Subyektiv taxminni muloyim ifodalash.\n\n1) ko: 오늘은 좀 피곤한 것 같아요.\n   ru: Кажется, сегодня я уставший.\n   en: I think I’m a bit tired today.\n   uz: Bugun charchagandekman.\n2) ko: 이 길이 더 빠른 듯해요.\n   ru: Похоже, эта дорога быстрее.\n   en: This route seems faster.\n   uz: Bu yo‘l tezrog‘iga o‘xshaydi.\n3) ko: 비가 곧 올 것 같아요.\n   ru: Кажется, скоро пойдёт дождь.\n   en: I think it’ll rain soon.\n   uz: Tez orada yomg‘ir yog‘adigandek.\n4) ko: 그분이 화난 듯 보였어요.\n   ru: Он выглядел как будто злится.\n   en: He looked as if he was angry.\n   uz: U xafa bo‘lgandek ko‘rindi."
          },
          {
            id: "3a-7",
            title: "A/V-더라고요 — ‘o‘zim ko‘rib/bilib aytyapman’",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            description:
              "Shaxsiy tajribadan kelib xabar berish (o‘tgan tajriba).\n\n1) ko: 그 식당 음식이 정말 맛있더라고요.\n   ru: Еда в том ресторане действительно вкусная — сам пробовал.\n   en: The food there was really good — I tried it.\n   uz: O‘sha restoranda ovqat juda mazali ekan — o‘zim tatib ko‘rdim.\n2) ko: 한국 겨울이 생각보다 춥더라고요.\n   ru: Зима в Корее холоднее, чем думал.\n   en: Korean winter was colder than I thought.\n   uz: Koreya qishi o‘ylaganimdan sovuqroq ekan.\n3) ko: 그분이 발표를 아주 잘하더라고요.\n   ru: Он очень хорошо выступал — видел сам.\n   en: He presented really well, I saw it.\n   uz: U juda yaxshi taqdimot qilar ekan — o‘zim ko‘rdim.\n4) ko: 집세가 요즘 많이 올랐더라고요.\n   ru: Аренда в последнее время сильно выросла — столкнулся сам.\n   en: Rents have gone up a lot recently — I noticed.\n   uz: Ijora narxlari yaqinda ancha oshibdi — o‘zim sezdim."
          },
          {
            id: "3a-8",
            title: "A/V-거든요 — ‘axir…, bilasizmi’ (tushuntirish/ogohlatish)",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "O‘z fikrini sababi bilan muloyim tushuntirish; ko‘pincha javob gapida.\n\n1) ko: 오늘 못 만나요. 일이 많거든요.\n   ru: Сегодня не встречусь — дел много, понимаете.\n   en: I can’t meet today — I’ve got a lot of work.\n   uz: Bugun uchrasha olmayman — ish ko‘p-da.\n2) ko: 이 책 추천해요. 정말 도움이 되거든요.\n   ru: Рекомендую эту книгу — она и правда полезная.\n   en: I recommend this book — it’s really helpful.\n   uz: Shu kitobni tavsiya qilaman — juda foydali-ku.\n3) ko: 조금 이따가 가요. 비가 곧 그칠 거거든요.\n   ru: Пойдём чуть позже — дождь скоро прекратится.\n   en: Let’s go a bit later; the rain will stop soon.\n   uz: Birozdan keyin boraylik — yomg‘ir tez orada to‘xtaydi-ku.\n4) ko: 서둘러야 해요. 마감이 오늘이거든요.\n   ru: Нужно поторопиться — дедлайн сегодня.\n   en: We must hurry — the deadline is today.\n   uz: Shoshilish kerak — muddat aynan bugun."
          }
        ]
      },

      {
        id: "s3a-3",
        title: "Reja, xavotir, daraja va qiyos",
        total: "4 lectures · ~40m",
        lessons: [
          {
            id: "3a-9",
            title: "A/V-(으)ㄹ 텐데 — ‘bo‘lsa kerak/kerak edi… (demak)’",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
            },
            description:
              "Kutilayotgan holatga tayangan maslahat/yordam yoki afsus.\n\n1) ko: 비가 올 텐데 우산을 가져가세요.\n   ru: Наверное, пойдёт дождь — возьмите зонт.\n   en: It’ll probably rain; take an umbrella.\n   uz: Yomg‘ir yog‘sa kerak — soyabon oling.\n2) ko: 피곤할 텐데 조금 쉬어요.\n   ru: Должно быть, вы устали — отдохните.\n   en: You must be tired; get some rest.\n   uz: Charchagandirsiz — biroz dam oling.\n3) ko: 길이 막힐 텐데 일찍 출발하는 게 어때요?\n   ru: Дороги, вероятно, будут загружены — выезжайте пораньше?\n   en: Traffic will be heavy; how about leaving early?\n   uz: Yo‘l tiqilsa kerak — ertaroq chiqish-chi?\n4) ko: 추울 텐데 겉옷을 챙기세요.\n   ru: Наверное, холодно — возьмите верхнюю одежду.\n   en: It’ll be cold; bring a jacket.\n   uz: Sovuq bo‘lsa kerak — ustki kiyim oling."
          },
          {
            id: "3a-10",
            title: "V-(으)ㄹ까 봐(서) — ‘… bo‘lib qoladimi deb (xavotir)’",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "Ehtimoldan xavotir → ehtiyot chorasi.\n\n1) ko: 늦을까 봐 택시를 탔어요.\n   ru: Боялся опоздать, поэтому сел на такси.\n   en: I took a taxi, afraid I’d be late.\n   uz: Kech qolarman deb, taksiga chiqdim.\n2) ko: 감기에 걸릴까 봐 따뜻하게 입었어요.\n   ru: Боялся простудиться — оделся теплее.\n   en: I dressed warmly in case I catch a cold.\n   uz: Shamollab qolarman deb, issiqroq kiyndim.\n3) ko: 시험을 망칠까 봐 밤새 공부했어요.\n   ru: Боялся завалить экзамен — всю ночь учил.\n   en: I studied all night, worried I’d fail.\n   uz: Imtihondan yiqilarman deb, tun bo‘yi o‘qiganim.\n4) ko: 길을 잃을까 봐 지도를 저장해 놨어요.\n   ru: Боялся заблудиться — сохранил карту офлайн.\n   en: I saved the map offline so I wouldn’t get lost.\n   uz: Yo‘ldan adasharman deb, xaritani oldindan saqlab qo‘ydim."
          },
          {
            id: "3a-11",
            title: "V-(으)ㄹ수록 — ‘qancha… shuncha…’",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
            },
            description:
              "Proporsional o‘zgarish.\n\n1) ko: 연습할수록 실력이 늘어요.\n   ru: Чем больше тренируешься, тем лучше навык.\n   en: The more you practice, the better you get.\n   uz: Qancha ko‘p mashq qilsang, shuncha o‘sasan.\n2) ko: 멀수록 경치가 더 좋아요.\n   ru: Чем дальше, тем красивее пейзаж.\n   en: The farther you go, the better the view.\n   uz: Qancha uzoqroq borsang, manzara shuncha chiroyli.\n3) ko: 바쁠수록 기본을 지켜야 해요.\n   ru: Чем занятиe, тем важнее держать базу.\n   en: The busier you are, the more you should stick to basics.\n   uz: Qanchalik band bo‘lsang, asosga shunchalik yopish.\n4) ko: 설명이 길수록 이해가 어려워져요.\n   ru: Чем длиннее объяснение, тем сложнее понять.\n   en: The longer the explanation, the harder to understand.\n   uz: Izoh qancha cho‘zilsa, tushunish shuncha qiyinlashadi."
          },
          {
            id: "3a-12",
            title: "V-기는커녕 / N은/는커녕 — ‘emas, hatto… ham’",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            description:
              "Kutilgan A ni inkor qilib, B (yanada past)ni ham rad etish.\n\n1) ko: 쉬기는커녕 밥 먹을 시간도 없었어요.\n   ru: Не то что отдохнуть — даже поесть времени не было.\n   en: Far from resting, I didn’t even have time to eat.\n   uz: Dam olishni qo‘ying, hatto ovqatga ham vaqt bo‘lmadi.\n2) ko: 감사하기는커녕 불평만 하더라고요.\n   ru: Вместо благодарности — одни жалобы.\n   en: Rather than being grateful, they only complained.\n   uz: Minnatdorchilik o‘rniga faqat shikoyat qildi.\n3) ko: 도와주기는커녕 방해만 했어요.\n   ru: Вместо помощи — только мешал.\n   en: Far from helping, he only interfered.\n   uz: Yordam qilish o‘rniga faqat halal berdi.\n4) ko: 약속은커녕 연락도 없었어요.\n   ru: Какое уж там «встреча» — даже не написал.\n   en: Never mind meeting; they didn’t even text.\n   uz: Uchrashishni qo‘ying, xabar ham bo‘lmadi."
          }
        ]
      },

      {
        id: "s3a-4",
        title: "Qo‘shimcha: ‘nafaqat… balki…’, daraja va tavsiya",
        total: "4 lectures · ~40m",
        lessons: [
          {
            id: "3a-13",
            title: "A/V-(으)ㄹ 뿐만 아니라 / N뿐만 아니라 — ‘nafaqat…, balki…’",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "Ijobiy/neytral qo‘shish; parallel fazilatlar.\n\n1) ko: 그는 친절할 뿐만 아니라 성실해요.\n   ru: Он не только добрый, но и прилежный.\n   en: He’s not only kind but also diligent.\n   uz: U nafaqat mehribon, balki mehnatkash ham.\n2) ko: 이곳은 경치가 아름다울 뿐만 아니라 교통도 편리해요.\n   ru: Здесь не только красивый вид, но и удобный транспорт.\n   en: Not only beautiful scenery but convenient transport.\n   uz: Bu yerda manzara chiroyli, qolaversa transport qulay.\n3) ko: 한국어뿐만 아니라 일본어도 배워요.\n   ru: Изучаю не только корейский, но и японский.\n   en: I study not only Korean but also Japanese.\n   uz: Koreys tiligina emas, yapon tilini ham o‘rganaman.\n4) ko: 가격이 합리적일 뿐만 아니라 서비스도 좋아요.\n   ru: Цена разумная и сервис тоже хороший.\n   en: The price is reasonable and the service is good.\n   uz: Narx maqbul, xizmat ham yaxshi."
          },
          {
            id: "3a-14",
            title: "V-(으)ㄹ 정도로 — ‘… darajada’ (intensiv/daraja)",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            description:
              "Daraja ta’kidi; ko‘pincha hayrat.\n\n1) ko: 눈물이 날 정도로 감동적이었어요.\n   ru: Было трогательно до слёз.\n   en: It was touching enough to bring tears.\n   uz: Ko‘zga yosh keladigan darajada ta’sirli edi.\n2) ko: 손이 얼 정도로 추웠어요.\n   ru: Было так холодно, что руки коченели.\n   en: It was so cold my hands froze.\n   uz: Shu qadar sovuq ediki, qo‘llarim uvishdi.\n3) ko: 배가 터질 정도로 먹었어요.\n   ru: Ел до отвала.\n   en: Ate to the point of bursting.\n   uz: Qornim yoriladigan darajada yedim.\n4) ko: 길이 막혀서 지칠 정도로 운전했어요.\n   ru: Пробки — ехал до изнеможения.\n   en: Drove to the point of exhaustion due to traffic.\n   uz: Tiqilinchdan charchab ketadigan darajada haydadim."
          },
          {
            id: "3a-15",
            title: "V-도록 하다 — ‘shunday qilingki/… qiling’ (muloyim buyruq)",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
            },
            description:
              "Maslahat/buyruqni yumshatib berish.\n\n1) ko: 내일까지 제출하도록 하세요.\n   ru: Просьба сдать до завтра.\n   en: Please make sure to submit by tomorrow.\n   uz: Iltimos, ertagacha topshiradigan qiling.\n2) ko: 회의는 시간 맞춰 시작하도록 합시다.\n   ru: Давайте начнём совещание вовремя.\n   en: Let’s make sure the meeting starts on time.\n   uz: Uchrashuvni o‘z vaqtida boshlashga harakat qilaylik.\n3) ko: 안전모를 꼭 쓰도록 하세요.\n   ru: Обязательно надевайте каску.\n   en: Be sure to wear a helmet.\n   uz: Albatta, kaskani taqing.\n4) ko: 오해가 없도록 분명히 설명하도록 하겠습니다.\n   ru: Объясню ясно, чтобы не было недоразумений.\n   en: I’ll explain clearly to avoid misunderstandings.\n   uz: Tushunmovchilik bo‘lmasligi uchun aniq tushuntiraman."
          },
          {
            id: "3a-16",
            title: "N(이)야 / A/V-기야 — ‘axir-ku/bo‘lmasa-chi’ (ta’kid)",
            dur: "10:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            description:
              "Suhbatda ta’kid va ‘axir’ ohangi, ko‘pincha norasmiy.\n\n1) ko: 지금 시작이야! 아직 늦지 않았어.\n   ru: Да это только начало! Ещё не поздно.\n   en: It’s just the beginning! It’s not late yet.\n   uz: Endi boshlanyapti-ku! Hali kech emas.\n2) ko: 농담이야, 진지하게 듣지 마.\n   ru: Да это же шутка, не воспринимай серьёзно.\n   en: It’s a joke; don’t take it seriously.\n   uz: Bu hazil-ku, jiddiy olmang.\n3) ko: 그건 실수가 아니야, 일부러 그런 게 아니야.\n   ru: Это же не ошибка нарочно, не намеренно.\n   en: It’s not intentional, not on purpose.\n   uz: Bu qasddan emas-ku, atayin qilmaganmiz.\n4) ko: 노력하기만 하면 되지, 불가능한 건 아니야.\n   ru: Нужно просто постараться — не невозможно же.\n   en: You just need to try; it’s not impossible.\n   uz: Shunchaki harakat kerak, axir imkonsiz emas."
          }
        ]
      }
    ]
  }
},
{
  id: "snu-3b-grammar",
  title: "Seoulite 3B — Grammar Course",
  series: "SNU",
  kind: "Textbook",
  level: "O'rta 2",
  price: 0,
  rating: 4.9,
  readers: 17480,
  cover:
    "https://images.squarespace-cdn.com/content/v1/62f643e31145611db3fb960d/1722255005480-IDS4GJ91PZTPSK530AWP/9788953949553.png",

  description:
    "SNU 3B bosqichidagi yadro grammatikalar. Har bir dars description ichida 4 tadan misol (ko/ru/en/uz) bilan berilgan. Hamma darslarda videolar mavjud — dars jarayonida to‘g‘ridan-to‘g‘ri ko‘rsatish qulay.",

  lectureNotes: [
    "Har dars: naqsh → 4 misolni shadowing → o‘zingizning jumlangiz",
    "Reported speech (간접화법) shakllarini jadval qilib yodlang",
    "‘-게 되다 / -아/어지다 / -고 말다’ natija ohanglarini farqlang"
  ],

  attachments: [
    {
      id: "s3b1",
      name: "SNU_3B_Grammar_Summary.pdf",
      kind: "pdf",
      size: "1.4 MB",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    }
  ],

  video: {
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
  },

  course: {
    progress: 0,
    totalDuration: "~4h 50m",
    sections: [
      {
        id: "s3b-1",
        title: "Reported Speech (간접화법) va eshitgan-gap ohanglari",
        total: "4 lectures · ~48m",
        lessons: [
          {
            id: "3b-1",
            title: "A/V-다고 하다, N(이)라고 하다 — ‘deb aytmoq’",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "Fakt/holatni qayta aytish: A/V-다고 하다; ot: N(이)라고 하다.\n\n1) ko: 그는 내일 온다고 했어요.\n   ru: Он сказал, что придёт завтра.\n   en: He said he’d come tomorrow.\n   uz: U ertaga kelishini aytdi.\n2) ko: 비가 많이 온다고 하네요.\n   ru: Говорят, что идёт сильный дождь.\n   en: They say it’s raining a lot.\n   uz: Kuchli yomg‘ir yog‘ayapti, deyishadi.\n3) ko: 여기가 맛집이라고 하던데요.\n   ru: Говорят, здесь вкусно.\n   en: I heard this place is good.\n   uz: Bu joy mazali ekan, deb eshitdim.\n4) ko: 그는 의사라고 했어요.\n   ru: Он сказал, что он врач.\n   en: He said he is a doctor.\n   uz: U o‘zi shifokorligini aytdi."
          },
          {
            id: "3b-2",
            title: "V-(으)라고 하다 — ‘(qil) deb buyurdi/so‘radi’ (imperativni iqtiboslash)",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            description:
              "Buyruq/iltimosni bilvosita berish: V-(으)라고 하다; taqiqlash: V-지 말라고 하다.\n\n1) ko: 선생님이 조용히 하라고 했어요.\n   ru: Учитель сказал вести себя тихо.\n   en: The teacher told us to be quiet.\n   uz: O‘qituvchi jim turishni buyurdi.\n2) ko: 어머니가 일찍 들어오라고 하셨어요.\n   ru: Мама сказала рано прийти домой.\n   en: Mom told me to come home early.\n   uz: Onam erta kelishimni aytdi.\n3) ko: 의사가 커피를 줄이라고 했어요.\n   ru: Врач сказал уменьшить кофе.\n   en: The doctor told me to cut down on coffee.\n   uz: Shifokor qahvani kamaytirishni aytdi.\n4) ko: 친구가 늦지 말라고 했어요.\n   ru: Друг попросил не опаздывать.\n   en: My friend asked me not to be late.\n   uz: Do‘stim kechikmaslikni so‘radi."
          },
          {
            id: "3b-3",
            title: "V-자고 하다 — ‘birga qilaylik deb aytdi’ (taklifni iqtiboslash)",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "Taklifni bilvosita qayta aytish.\n\n1) ko: 친구가 영화를 보자고 했어요.\n   ru: Друг предложил посмотреть фильм.\n   en: My friend suggested watching a movie.\n   uz: Do‘stim kino ko‘raylik, dedi.\n2) ko: 주말에 등산 가자고 하던데요.\n   ru: Предлагали сходить в горы на выходных.\n   en: They suggested hiking this weekend.\n   uz: Hafta oxiri tog‘ga chiqaylik, deyishdi.\n3) ko: 회의를 내일 하자고 했어요.\n   ru: Предложили провести совещание завтра.\n   en: They said, “Let’s have the meeting tomorrow.”\n   uz: Uchrashuvni ertaga qilaylik, deyishdi.\n4) ko: 일찍 만나자고 문자를 보냈어요.\n   ru: Отправил сообщение: давай встретимся рано.\n   en: I texted, “Let’s meet early.”\n   uz: “Ertaroq uchrashaylik”, deb xabar yubordim."
          },
          {
            id: "3b-4",
            title: "A/V-(으)냐고 하다 — ‘deb so‘radi’ (so‘roq iqtibosi)",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            description:
              "Savolni bilvosita berish: V-느냐고/았/었느냐고; A-(으)냐고; N(이)냐고.\n\n1) ko: 그는 왜 늦었느냐고 물었어요.\n   ru: Он спросил, почему я опоздал.\n   en: He asked why I was late.\n   uz: U nega kech qolganimni so‘radi.\n2) ko: 어디에 사느냐고 하더라고요.\n   ru: Спросили, где я живу.\n   en: They asked where I live.\n   uz: Qayerda yashashimni so‘rashdi.\n3) ko: 이게 맞느냐고 확인했어요.\n   ru: Уточнил, правильно ли это.\n   en: I checked if this is correct.\n   uz: Bu to‘g‘rimi, deb tekshirdim.\n4) ko: 그분이 학생이냐고 했어요.\n   ru: Спросили, он студент?\n   en: They asked if he is a student.\n   uz: U talaba-mi, deb so‘rashdi."
          }
        ]
      },

      {
        id: "s3b-2",
        title: "Natija, o‘zgarish, kutilmagan yakun",
        total: "4 lectures · ~48m",
        lessons: [
          {
            id: "3b-5",
            title: "V-게 되다 — ‘(oxir-oqibat) qilib qolmoq’",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            description:
              "Holat o‘zgarishi / tashqi sabab natijasida yuz beradigan ish.\n\n1) ko: 한국에서 일하게 됐어요.\n   ru: Так вышло, что я стал работать в Корее.\n   en: I ended up working in Korea.\n   uz: Koreyada ishlaydigan bo‘lib qoldim.\n2) ko: 매운 음식을 좋아하게 됐어요.\n   ru: В итоге полюбил острую еду.\n   en: I came to like spicy food.\n   uz: Achchiq ovqatni yoqtirib qoldim.\n3) ko: 비가 와서 모임을 취소하게 됐어요.\n   ru: Из-за дождя встречу пришлось отменить.\n   en: Because of rain we had to cancel the meeting.\n   uz: Yomg‘ir sabab uchrashuvni bekor qilishga to‘g‘ri keldi.\n4) ko: 우연히 그분을 다시 만나게 됐어요.\n   ru: Случайно так вышло, что снова встретились.\n   en: I happened to meet him again.\n   uz: Tasodifan yana uchrab qoldik."
          },
          {
            id: "3b-6",
            title: "A-아/어지다 & V-아/어지다 — ‘bo‘lib qolmoq / passiv’",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            description:
              "Sifat + 아/어지다: ‘bo‘lib qolish’; Fe’l + -아/어지다: passiv.\n\n1) ko: 날씨가 따뜻해졌어요.\n   ru: Погода потеплела.\n   en: The weather got warmer.\n   uz: Ob-havo iliqlashdi.\n2) ko: 문이 저절로 열렸어요.\n   ru: Дверь сама открылась (пассивация).\n   en: The door opened by itself.\n   uz: Eshik o‘zi ochilib qoldi.\n3) ko: 문제가 쉽게 해결됐어요.\n   ru: Проблема легко решилась.\n   en: The problem was easily solved.\n   uz: Muammo oson hal bo‘ldi.\n4) ko: 길이 어두워져서 조심했어요.\n   ru: Стало темно на дороге, был осторожен.\n   en: It got dark on the road, so I was careful.\n   uz: Yo‘l qorong‘ilashib, ehtiyot bo‘ldim."
          },
          {
            id: "3b-7",
            title: "V-고 말다 — ‘oxiri … bo‘lib qoldi’ (afsus/kutilmagan yakun)",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
            },
            description:
              "Nazoratdan tashqari / afsus ohangi bilan yakun.\n\n1) ko: 약속을 잊어버리고 말았어요.\n   ru: В итоге забыл о встрече (увы).\n   en: I ended up forgetting the appointment.\n   uz: Oxiri uchrashuvni unutib qo‘ydim.\n2) ko: 참지 못하고 울고 말았어요.\n   ru: Не сдержался и расплакался.\n   en: I couldn’t hold it in and cried.\n   uz: O‘zimni tutolmay, yig‘lab yubordim.\n3) ko: 늦잠을 자서 비행기를 놓치고 말았어요.\n   ru: Проспал и в конечном счёте пропустил рейс.\n   en: I overslept and ended up missing the flight.\n   uz: Uyqudan kech uyg‘onib, reysni o‘tkazib yubordim.\n4) ko: 고민하다가 기회를 놓치고 말았죠.\n   ru: Думал-думал и упустил шанс.\n   en: After hesitating, I lost the chance.\n   uz: Ikkilanib, imkoniyatni qo‘ldan chiqardim."
          },
          {
            id: "3b-8",
            title: "V-다 보니 — ‘qila-qila (bilsa) …’ (tajribadan xulosa)",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            description:
              "Takror/uzluksiz faoliyat natijasida sezilgan o‘zgarish.\n\n1) ko: 매일 쓰다 보니 타자가 빨라졌어요.\n   ru: Печатал каждый день — скорость выросла.\n   en: Typing daily made me faster.\n   uz: Har kuni yozib, tezligim oshdi.\n2) ko: 읽다 보니 시간이 벌써 이렇게 됐네요.\n   ru: Читал-читал — время пролетело.\n   en: While reading, time just flew.\n   uz: O‘qiyverib, vaqt uchib ketibdi.\n3) ko: 계속 이야기하다 보니 서로 이해하게 됐어요.\n   ru: Долго разговаривали — в итоге поняли друг друга.\n   en: We kept talking and came to understand each other.\n   uz: Gaplasha-gaplasha, bir-birimizni tushunib oldik.\n4) ko: 연습하다 보니 자신감이 생겼어요.\n   ru: Тренируясь, обрёл уверенность.\n   en: Practicing gave me confidence.\n   uz: Mashq qila-qila ishonch paydo bo‘ldi."
          }
        ]
      },

      {
        id: "s3b-3",
        title: "Qarama-qarshilik, cheklash va muloyim rad etish",
        total: "4 lectures · ~48m",
        lessons: [
          {
            id: "3b-9",
            title: "A/V-기는 하지만 — ‘… bo‘lsa ham’",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "Tan olish + qarama-qarshi fikr.\n\n1) ko: 맛있기는 하지만 너무 비싸요.\n   ru: Вкусно, но слишком дорого.\n   en: It’s tasty, but too expensive.\n   uz: Mazali, lekin juda qimmat.\n2) ko: 시간이 있기는 하지만 쉬고 싶어요.\n   ru: Время есть, но хочу отдохнуть.\n   en: I do have time, but I want to rest.\n   uz: Vaqt boru, lekin dam olgim keladi.\n3) ko: 한국말을 하기는 하지만 잘하진 못해요.\n   ru: Говорю по-корейски, но не очень хорошо.\n   en: I speak Korean, but not well.\n   uz: Koreyscha gapiraman, lekin unchalik yaxshi emas.\n4) ko: 가기는 가야 하는데 좀 늦을 것 같아요.\n   ru: Пойти-то надо, но, кажется, опоздаю.\n   en: I should go, but I might be late.\n   uz: Borishim kerak, lekin kechikishim mumkin."
          },
          {
            id: "3b-10",
            title: "N뿐(만)이다 / A/V-(으)ㄹ 뿐이다 — ‘faqat, xolos’",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            description:
              "Cheklash va kamtarlik ohangi.\n\n1) ko: 저는 도왔을 뿐이에요.\n   ru: Я лишь помог, и всё.\n   en: I just helped, that’s all.\n   uz: Shunchaki yordam berdim, xolos.\n2) ko: 우리는 시작했을 뿐이에요.\n   ru: Мы только начали.\n   en: We’ve only just started.\n   uz: Endigina boshladik, xolos.\n3) ko: 필요한 건 시간뿐이에요.\n   ru: Нужен лишь только время.\n   en: All we need is time.\n   uz: Kerak narsa — faqat vaqt.\n4) ko: 우연일 뿐이에요.\n   ru: Это всего лишь совпадение.\n   en: It’s just a coincidence.\n   uz: Bu shunchaki tasodif, xolos."
          },
          {
            id: "3b-11",
            title: "N조차 — ‘hatto N ham (emas/….)’",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            description:
              "Kutilmaganni ham qamrab oluvchi ta’kid (ko‘pincha salbiy).\n\n1) ko: 물조차 없었어요.\n   ru: Не было даже воды.\n   en: There wasn’t even water.\n   uz: Hattoki suv ham yo‘q edi.\n2) ko: 이름조차 기억이 안 나요.\n   ru: Даже имени не помню.\n   en: I can’t remember even the name.\n   uz: Hatto ismini ham eslay olmayapman.\n3) ko: 인사조차 안 했어요.\n   ru: Даже не поздоровался.\n   en: He didn’t even say hello.\n   uz: Salom ham bermadi.\n4) ko: 기회조차 주지 않았어요.\n   ru: Даже шанса не дали.\n   en: They didn’t even give a chance.\n   uz: Hatto imkoniyat ham berishmadi."
          },
          {
            id: "3b-12",
            title: "V-기는요 — ‘qayerda deysiz’ (kamtarlik/muloyim rad)",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "Maqtovni yumshoq rad etish yoki muloyim inkor.\n\n1) ko: A: 한국어 잘하시네요!  B: 잘하기는요.\n   ru: «Вы хорошо говорите!» — «Да что вы…»\n   en: “Your Korean is great!” — “Oh, not really.”\n   uz: “Koreyschangiz zo‘r!” — “Qayerda deysiz…”\n2) ko: 시간이 많기는요, 바빠요.\n   ru: Какое там «много времени», занят.\n   en: Time? Not at all, I’m busy.\n   uz: Qanaqa vaqt, bandman.\n3) ko: 쉽기는요, 꽤 어려웠어요.\n   ru: Какое «легко», довольно трудно было.\n   en: Easy? It was quite hard.\n   uz: Oson qaysi, ancha qiyin bo‘ldi.\n4) ko: 필요하기는요, 없어도 돼요.\n   ru: Какая «необходимость», можно и без этого.\n   en: Necessary? We can do without it.\n   uz: Shart emas, bunsiz ham bo‘ladi."
          }
        ]
      },

      {
        id: "s3b-4",
        title: "Daraja, reja, sababning nozik ko‘rinishlari",
        total: "4 lectures · ~48m",
        lessons: [
          {
            id: "3b-13",
            title: "V-(으)ㄹ 만하다 — ‘qilsa arziydi / mumkin’",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            description:
              "Tavsiya/munosib daraja.\n\n1) ko: 이 영화 볼 만해요.\n   ru: Этот фильм стоит посмотреть.\n   en: This movie is worth watching.\n   uz: Bu film ko‘rsa arziydi.\n2) ko: 시도해 볼 만한 아이디어예요.\n   ru: Идея, которую стоит попробовать.\n   en: An idea worth trying.\n   uz: Sinab ko‘rishga arzigulik g‘oya.\n3) ko: 이 정도면 먹을 만해요.\n   ru: На этом уровне есть можно.\n   en: It’s decent enough to eat.\n   uz: Mana bundayi yesa bo‘ladi.\n4) ko: 걸어서 갈 만한 거리예요.\n   ru: Расстояние, которое можно пройти пешком.\n   en: It’s walkable distance.\n   uz: Piyoda borishga arziydigan masofa."
          },
          {
            id: "3b-14",
            title: "V-(으)ㄹ까 하다 — ‘… qilsamikan deb o‘ylayapman’ (yumshoq reja)",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            description:
              "Aniq bo‘lmagan niyat/ichki reja.\n\n1) ko: 주말에 쉬럴까 해요.\n   ru: Думаю отдохнуть на выходных.\n   en: I’m thinking of resting this weekend.\n   uz: Hafta oxiri dam olsamikan, deb turibman.\n2) ko: 내년에 유학 갈까 해요.\n   ru: Думаю уехать учиться за границу в следующем году.\n   en: I’m considering studying abroad next year.\n   uz: Kelasi yili chet elda o‘qisamikan, deb o‘ylayapman.\n3) ko: 그 책을 읽을까 했어요.\n   ru: Подумывал почитать ту книгу.\n   en: I thought about reading that book.\n   uz: O‘sha kitobni o‘qisamikan, deb o‘ylagandim.\n4) ko: 이사를 할까 해요.\n   ru: Думаю переехать.\n   en: I’m thinking of moving.\n   uz: Ko‘chib o‘tsamikan, deb turibman."
          },
          {
            id: "3b-15",
            title: "V-는 바람에 — ‘… oqibatida (kutilmagan salbiy sabab)’",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            description:
              "Kutilmagan hodisa → salbiy natija.\n\n1) ko: 차가 막히는 바람에 늦었어요.\n   ru: Из-за пробок опоздал.\n   en: I was late because of traffic jams.\n   uz: Yo‘l tiqilinchidan kech qoldim.\n2) ko: 비가 오는 바람에 계획이 틀어졌어요.\n   ru: Дождь сорвал планы.\n   en: The rain messed up our plans.\n   uz: Yomg‘ir sabab reja buzilib ketdi.\n3) ko: 컴퓨터가 멈추는 바람에 저장을 못 했어요.\n   ru: Компьютер завис — не успел сохранить.\n   en: The computer froze, so I couldn’t save.\n   uz: Kompyuter osilib, saqlay olmadim.\n4) ko: 전화가 오는 바람에 집중을 못 했어요.\n   ru: Позвонили — не смог сосредоточиться.\n   en: A call came in, and I couldn’t focus.\n   uz: Qo‘ng‘iroq bo‘lib, diqqatni jamlay olmadim."
          },
          {
            id: "3b-16",
            title: "A/V-다면서(요)? / -(이)라면서요? — ‘eshitishimcha rostmi?’ (tasdiq)",
            dur: "12:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "Eshitilgan ma’lumotni tasdiqlatish.\n\n1) ko: 한국에 이사한다면서요?\n   ru: Говорят, вы переезжаете в Корею, правда?\n   en: I heard you’re moving to Korea — is that right?\n   uz: Koreyaga ko‘charkan, rostmi?\n2) ko: 그분이 팀장이라면서요?\n   ru: Говорят, он — тимлид, верно?\n   en: I heard he’s the team leader — true?\n   uz: U jamoa rahbari emish, to‘g‘rimi?\n3) ko: 시험이 어렵다면서요?\n   ru: Говорят, экзамен сложный — правда?\n   en: I heard the exam is hard — is that so?\n   uz: Imtihon qiyin emish — rostmi?\n4) ko: 내일 비 온다면서요?\n   ru: Говорят, завтра дождь — правда?\n   en: I heard it’ll rain tomorrow — right?\n   uz: Ertaga yomg‘ir yog‘arkan — shunaqami?"
          }
        ]
      }
    ]
  }
},
{
  id: "snu-4a-grammar",
  title: "Seoulite 4A — Grammar Course",
  series: "SNU",
  kind: "Textbook",
  level: "O'rta 2",
  price: 0,
  rating: 4.9,
  readers: 18230,
  cover:
    "https://m.media-amazon.com/images/I/41-jHhLMk6L.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",

  description:
    "SNU 4A bosqichidagi yadro grammatikalar. Har dars description ichida 4 tadan misol (ko/ru/en/uz) berilgan. Har bir darsga video qo‘shilgan — sinfda ko‘rsatish va self-study uchun qulay.",

  lectureNotes: [
    "Har dars: naqsh → 4 misolni shadowing → o‘zingizning jumlangiz",
    "Oldingi darajalardagi natija/shart nuanslarini qayta ko‘rib chiqing",
    "‘담화 기능’: taxmin, ehtiyot, mulohaza ohangini taqqoslang"
  ],

  attachments: [
    {
      id: "s4a1",
      name: "SNU_4A_Grammar_Summary.pdf",
      kind: "pdf",
      size: "1.6 MB",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    }
  ],

  video: {
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
  },

  course: {
    progress: 0,
    totalDuration: "~5h 10m",
    sections: [
      {
        id: "s4a-1",
        title: "Taxmin, xavotir va yaqin reja",
        total: "4 lectures · ~52m",
        lessons: [
          {
            id: "4a-1",
            title: "A/V-(으)ㄹ 텐데 — ‘kerak/bo‘lsa kerak’ (taxmin + kontekst)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "Hozirgi/kеласи haqidagi taxminni bildiradi; ko‘pincha maslahat/eshik ochish konteksti bilan.\n\n1) ko: 비가 올 텐데 우산을 가져가세요.\n   ru: Наверное, пойдёт дождь, возьмите зонт.\n   en: It’ll probably rain, so take an umbrella.\n   uz: Ehtimol, yomg‘ir yog‘adi, soyabon oling.\n2) ko: 피곤할 텐데 좀 쉬세요.\n   ru: Вы, должно быть, устали — отдохните.\n   en: You must be tired—get some rest.\n   uz: Charchagandirsiz, biroz dam oling.\n3) ko: 길이 막힐 텐데 일찍 출발합시다.\n   ru: Наверное, будут пробки, выедем пораньше.\n   en: Traffic will likely be heavy; let’s leave early.\n   uz: Yo‘l tirband bo‘lsa kerak, erta chiqaylik.\n4) ko: 지금 바쁠 텐데 나중에 전화할게요.\n   ru: Вы, вероятно, заняты — перезвоню позже.\n   en: You’re probably busy; I’ll call later.\n   uz: Hozir band bo‘lsangiz kerak, keyin qo‘ng‘iroq qilaman."
          },
          {
            id: "4a-2",
            title: "V-(으)ㄹ까 봐(서) — ‘degan xavotir bilan / ehtiyot uchun’",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            description:
              "Salbiy/bilvosita xavotir sabab ehtiyot chorasi ko‘riladi.\n\n1) ko: 늦을까 봐 택시를 탔어요.\n   ru: Боясь опоздать, сел на такси.\n   en: I took a taxi in case I’d be late.\n   uz: Kechikib qolarman deb taksiga mindim.\n2) ko: 비가 올까 봐 우산을 챙겼어요.\n   ru: Вдруг пойдёт дождь — взял зонт.\n   en: I packed an umbrella in case it rains.\n   uz: Yomg‘ir yog‘ib qolsa deb soyabon oldim.\n3) ko: 길이 막힐까 봐 일찍 출발했어요.\n   ru: Опасаясь пробок, выехал рано.\n   en: Left early fearing traffic.\n   uz: Yo‘l tirband bo‘lmasin deb erta jo‘nadim.\n4) ko: 시험을 망칠까 봐 많이 준비했어요.\n   ru: Боялся провалить экзамен — много готовился.\n   en: I studied a lot fearing I’d mess up the exam.\n   uz: Imtihondan yiqilarman deb ko‘p tayyorlandim."
          },
          {
            id: "4a-3",
            title: "A/V-(으)ㄹ지도 모르다 — ‘balki…’ (past ehtimol)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "Past ehtimollik/taxmin. Ko‘pincha ehtiyot ohangi bilan.\n\n1) ko: 그가 이미 떠났을지도 몰라요.\n   ru: Возможно, он уже уехал.\n   en: He might have already left.\n   uz: U allaqachon ketgan bo‘lishi mumkin.\n2) ko: 내일 눈이 올지도 모르겠어요.\n   ru: Может, завтра пойдёт снег.\n   en: It might snow tomorrow.\n   uz: Ertaga qor yog‘ishi mumkin.\n3) ko: 이 방법이 더 좋을지도 몰라요.\n   ru: Возможно, этот способ лучше.\n   en: This method might be better.\n   uz: Bu usul yaxshiroq bo‘lishi mumkin.\n4) ko: 그는 약속을 잊었을지도 몰라요.\n   ru: Он, возможно, забыл о встрече.\n   en: He might have forgotten the appointment.\n   uz: U uchrashuvni unutgan bo‘lishi mumkin."
          },
          {
            id: "4a-4",
            title: "V-(으)려던 참이다 — ‘(endi) qilmoqchi edim’ (vaqtida to‘g‘ri keldi)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            description:
              "Aynan shu payt reja/niyat bor edi — taklif/uyg‘unlik.\n\n1) ko: 지금 전화하려던 참이었어요.\n   ru: Как раз собирался звонить.\n   en: I was just about to call.\n   uz: Hozir telefon qilmoqchi edim.\n2) ko: 나가려던 참인데 같이 갈래요?\n   ru: Как раз выходил — пойдём вместе?\n   en: I was about to head out—want to join?\n   uz: Hozir chiqmoqchi edim — birga boramizmi?\n3) ko: 점심 먹으려던 참이었어요.\n   ru: Как раз собирался обедать.\n   en: I was just about to have lunch.\n   uz: Hozir tushlik qilmoqchi edim.\n4) ko: 그 얘기 꺼내려던 참이었어요.\n   ru: Как раз хотел поднять эту тему.\n   en: I was about to bring that up.\n   uz: Shu mavzuni ko‘tarmoqchi edim."
          }
        ]
      },

      {
        id: "s4a-2",
        title: "Qarama-qarshilik, ko‘rinish va nisbat",
        total: "4 lectures · ~52m",
        lessons: [
          {
            id: "4a-5",
            title: "A/V-기는커녕, N은/는커녕 — ‘… u yoqda tursin’",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            description:
              "Kutilgandan ham yiroq, salbiy kuchli kontrast.\n\n1) ko: 쉬기는커녕 밤새 일했어요.\n   ru: Какой отдых — всю ночь работал.\n   en: Far from resting, I worked all night.\n   uz: Dam olishni qo‘ying, butun tun ishladim.\n2) ko: 아침은커녕 물도 못 마셨어요.\n   ru: Какой завтрак — даже воды не выпил.\n   en: Breakfast? I couldn’t even drink water.\n   uz: Nonushta qayoqda, suv ham icholmadim.\n3) ko: 도움은커녕 방해만 됐어요.\n   ru: Не помощь, а только помеха.\n   en: It wasn’t help—just interference.\n   uz: Yordam o‘rniga faqat halal bo‘ldi.\n4) ko: 칭찬은커녕 혼났어요.\n   ru: Вместо похвалы — отругали.\n   en: Rather than praise, I got scolded.\n   uz: Maqtov o‘rniga dashnom eshitdim."
          },
          {
            id: "4a-6",
            title: "A/V-(으)ㄴ/는 척하다 — ‘…dek ko‘rsatmoq / sepretend’",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            description:
              "Ataylab shunday ko‘rsatish/rostdan bo‘lmagani holda.\n\n1) ko: 모르는 척했어요.\n   ru: Сделал вид, что не знаю.\n   en: I pretended not to know.\n   uz: Bilmaganga oldim.\n2) ko: 바쁜 척하지 마세요.\n   ru: Не притворяйтесь занятым.\n   en: Don’t act like you’re busy.\n   uz: Band bo‘lganga o‘xshamang.\n3) ko: 안 들은 척 지나갔어요.\n   ru: Притворился, что не слышал, и прошёл мимо.\n   en: I acted like I didn’t hear and walked by.\n   uz: Eshitmaganga olib o‘tib ketdim.\n4) ko: 담대한 척했지만 떨렸어요.\n   ru: Делал вид смелого, но дрожал.\n   en: I pretended to be brave but trembled.\n   uz: Dadil ko‘rindim, lekin hayajonlandim."
          },
          {
            id: "4a-7",
            title: "A/V-(으)ㄴ/는 만큼 — ‘qancha… shuncha; darajasida’",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
            },
            description:
              "Nisbat/daraja yoki sababga yaqin o‘xshatish.\n\n1) ko: 노력한 만큼 결과가 나와요.\n   ru: Результат приходит настолько, насколько старались.\n   en: Results come in proportion to your effort.\n   uz: Mehnat qilgancha natija chiqadi.\n2) ko: 받은 만큼 돌려드립니다.\n   ru: Верну столько, сколько получил.\n   en: I’ll return as much as I received.\n   uz: Olinganicha qaytaraman.\n3) ko: 사랑하는 만큼 걱정도 커요.\n   ru: Чем больше любишь, тем сильнее волнуешься.\n   en: The more you love, the more you worry.\n   uz: Qancha sevsang, shuncha xavotir oshadi.\n4) ko: 비싼 만큼 품질이 좋아요.\n   ru: Настолько же качественно, насколько дорого.\n   en: As expensive as it is, the quality matches.\n   uz: Qimmat bo‘lsa ham shunchalik sifati yaxshi."
          },
          {
            id: "4a-8",
            title: "A/V-더니 — ‘(o‘zim ko‘rib) … edi, endi…’ (tajriba kontrasti)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "1-shaxs kuzatuvi → keyin o‘zgarish/qarama-qarshi holat.\n\n1) ko: 어제는 춥더니 오늘은 따뜻하네요.\n   ru: Вчера было холодно, а сегодня тепло.\n   en: It was cold yesterday, but today it’s warm.\n   uz: Kecha sovuq edi, bugun esa iliq.\n2) ko: 그는 열심히 하더니 결국 성공했어요.\n   ru: Усердно трудился — и в конце добился успеха.\n   en: He worked hard and eventually succeeded.\n   uz: U mehnat qildi-da, oxiri muvaffaqiyatga erishdi.\n3) ko: 아프더니 나아졌대요.\n   ru: Болел, а теперь, говорят, поправился.\n   en: He was sick, but now they say he’s better.\n   uz: Kasal edi, endi tuzalibdi, deyishdi.\n4) ko: 비가 오더니 바로 그쳤어요.\n   ru: Шёл дождь — и сразу прекратился.\n   en: It rained and then stopped right away.\n   uz: Yomg‘ir yog‘di-yu darrov to‘xtadi."
          }
        ]
      },

      {
        id: "s4a-3",
        title: "Sabab–natija va ehtiyot ohangi",
        total: "4 lectures · ~52m",
        lessons: [
          {
            id: "4a-9",
            title: "V-고 해서 — ‘(shu ham) sabab bo‘lgani uchun…’ (bir nechta sababdan biri)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            description:
              "Bir nechta omildan bittasini ta’kidlash; yumshoq sabab.\n\n1) ko: 피곤하고 해서 일찍 잤어요.\n   ru: В том числе потому, что устал, рано лег.\n   en: I went to bed early, partly because I was tired.\n   uz: Charchaganim ham bor, erta yotdim.\n2) ko: 비도 오고 해서 집에 있었어요.\n   ru: Дождь шёл и вообще, поэтому дома сидел.\n   en: It was raining and all, so I stayed home.\n   uz: Yomg‘ir ham yog‘di, uyda qoldim.\n3) ko: 시간이 없고 해서 다음에 만나죠.\n   ru: Времени нет и прочее — давайте в следующий раз.\n   en: I’m short on time and such; let’s meet next time.\n   uz: Vaqt ham yo‘q, keyingi safar uchrashaylik.\n4) ko: 배도 고프고 해서 식당에 갔어요.\n   ru: И голоден был и т. п., пошёл в кафе.\n   en: I was hungry and all, so I went to a restaurant.\n   uz: Qornim ham och edi, oshxonaga bordim."
          },
          {
            id: "4a-10",
            title: "V-아/어 버리다 — ‘butunlay/oh-yo‘q’ (yakun + his-tuyg‘u)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "Ishning butunlay tamom bo‘lishi; ko‘pincha afsus yoki yengillik.\n\n1) ko: 숙제를 잊어버렸어요.\n   ru: Совсем забыл домашку.\n   en: I completely forgot the homework.\n   uz: Uy vazifasini butunlay unutib qo‘ydim.\n2) ko: 걱정을 내려버렸어요.\n   ru: Скинул тревоги — стало легче.\n   en: I let go of my worries.\n   uz: Xavotirlarni qo‘yib yubordim.\n3) ko: 돈을 다 써버렸어요.\n   ru: Все деньги израсходовал.\n   en: I spent all the money.\n   uz: Pulni butkul sarflab yubordim.\n4) ko: 창문을 열어버렸어요.\n   ru: Взял и открыл окно (и точка).\n   en: I just went ahead and opened the window.\n   uz: Derazani ochib yubordim (tamom)."
          },
          {
            id: "4a-11",
            title: "V-도록 — ‘… qilguncha / … qilishi uchun / darajada’",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
            },
            description:
              "Maqsad, chegara yoki daraja.\n\n1) ko: 늦지 않도록 서둘러요.\n   ru: Поторопимся, чтобы не опоздать.\n   en: Let’s hurry so we don’t get late.\n   uz: Kechikmaslik uchun shoshilaylik.\n2) ko: 배가 아프도록 먹었어요.\n   ru: Ел до боли в животе.\n   en: I ate to the point my stomach hurt.\n   uz: Qornim og‘riguncha yedim.\n3) ko: 이해하도록 쉽게 설명했어요.\n   ru: Объяснил так, чтобы было понятно.\n   en: I explained so they could understand.\n   uz: Tushunsin deb oson qilib tushuntirdim.\n4) ko: 밤새도록 공부했어요.\n   ru: Учился всю ночь.\n   en: I studied all night long.\n   uz: Butun tun o‘qidim."
          },
          {
            id: "4a-12",
            title: "V-다가는 — ‘… qila-versang, (yomon) natija bo‘ladi’",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            description:
              "Ogohlantirish; odat/harakat davom etsa salbiy oqibat.\n\n1) ko: 이렇게 늦잠을 자다가는 큰일 나요.\n   ru: Если так продолжать проспать — будет беда.\n   en: If you keep oversleeping, you’ll be in trouble.\n   uz: Shunday kech uyg‘ona-versang, yomon bo‘ladi.\n2) ko: 돈을 막 쓰다가는 후회해요.\n   ru: Тратишь бездумно — пожалеешь.\n   en: Spend recklessly and you’ll regret it.\n   uz: Pulni o‘ylamay sarflasang, afsuslanasan.\n3) ko: 무시하다가는 신뢰를 잃어요.\n   ru: Будешь игнорировать — потеряешь доверие.\n   en: If you ignore it, you’ll lose trust.\n   uz: E’tiborsiz bo‘lsang, ishonchni yo‘qotasan.\n4) ko: 안전벨트 안 매다가는 위험해요.\n   ru: Без ремня безопасности — опасно.\n   en: Not wearing a seatbelt is dangerous.\n   uz: Xavfsizlik kamarini taqmasang, xavfli."
          }
        ]
      },

      {
        id: "s4a-4",
        title: "Qo‘shimcha, kuchaytirish va taqqos",
        total: "4 lectures · ~52m",
        lessons: [
          {
            id: "4a-13",
            title: "N뿐만 아니라 A/V-기도 하다 — ‘nafaqat…, balki… ham’",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            description:
              "Qo‘shish/kengaytirish konstruktsiyasi.\n\n1) ko: 그는 한국어뿐만 아니라 영어도 잘해요.\n   ru: Он владеет не только корейским, но и английским.\n   en: He’s good at not only Korean but also English.\n   uz: U nafaqat koreyscha, balki inglizcha ham yaxshi biladi.\n2) ko: 맛있을 뿐만 아니라 건강하기도 해요.\n   ru: Не только вкусно, но и полезно.\n   en: It’s not only tasty but also healthy.\n   uz: Mazali bo‘lishi bilan birga foydali ham.\n3) ko: 주말에는 일할 뿐만 아니라 공부도 해요.\n   ru: В выходные не только работаю, но и учусь.\n   en: On weekends I not only work but also study.\n   uz: Hafta oxiri nafaqat ishlayman, balki o‘qiyman ham.\n4) ko: 여기는 경치가 좋을 뿐만 아니라 조용하기도 해요.\n   ru: Здесь не только красивый вид, но и тихо.\n   en: It’s not only scenic here but also quiet.\n   uz: Bu yer manzarali bo‘lishi bilan birga sokin ham."
          },
          {
            id: "4a-14",
            title: "A/V-(으)ㄹ수록 — ‘qancha… (bo‘lsa), shuncha…’",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            description:
              "Monoton o‘zgarish taqqosi.\n\n1) ko: 볼수록 매력이 있어요.\n   ru: Чем больше смотришь, тем более привлекательно.\n   en: The more you look, the more charming it is.\n   uz: Qancha ko‘rsang, shuncha jozibali.\n2) ko: 공부할수록 재미가 붙어요.\n   ru: Чем больше учишься, тем интереснее.\n   en: The more you study, the more fun it gets.\n   uz: Qancha o‘qisang, shuncha qiziq bo‘ladi.\n3) ko: 바쁠수록 시간을 아껴야 해요.\n   ru: Чем занянее, тем больше нужно беречь время.\n   en: The busier you are, the more you must save time.\n   uz: Qanchalik band bo‘lsang, shunchalik vaqtni tejash kerak.\n4) ko: 추울수록 따뜻한 차가 생각나요.\n   ru: Чем холоднее, тем больше хочется тёплого чая.\n   en: The colder it gets, the more I want hot tea.\n   uz: Qancha sovuq bo‘lsa, shuncha issiq choyni xohlaysan."
          },
          {
            id: "4a-15",
            title: "N치고(는) — ‘…ga qaraganda (kutilganidan farqli)’",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "Kategoriya ichida kutilgan stereotipdan chetga chiqish.\n\n1) ko: 초보자치고는 정말 잘하네요.\n   ru: Для новичка очень хорошо.\n   en: For a beginner, that’s really good.\n   uz: Yangi boshlovchi uchun juda yaxshi.\n2) ko: 가격치고는 품질이 좋아요.\n   ru: Для такой цены качество хорошее.\n   en: For the price, the quality is good.\n   uz: Narxiga nisbatan sifati yaxshi.\n3) ko: 아이치고는 키가 큰 편이에요.\n   ru: Для ребёнка довольно высокий.\n   en: For a child, he’s quite tall.\n   uz: Bola uchun ancha baland.\n4) ko: 한국 음식치고는 덜 매워요.\n   ru: Для корейской еды не так уж остро.\n   en: For Korean food, it’s less spicy.\n   uz: Koreys taomi uchun uncha achchiq emas."
          },
          {
            id: "4a-16",
            title: "V-느라고 — ‘… bilan band bo‘lib (salbiy natija)’",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
            },
            description:
              "Bir ishga berilib, asosiy ishni qilolmaslik/ salbiy oqibat.\n\n1) ko: 일하느라고 전화를 못 받았어요.\n   ru: Был занят работой — не смог взять трубку.\n   en: I was working, so I couldn’t answer the phone.\n   uz: Ish bilan band bo‘lib, telefon ko‘tarmadim.\n2) ko: 운전하느라고 메시지를 못 봤어요.\n   ru: Вёл машину — не увидел сообщение.\n   en: I was driving and couldn’t check the message.\n   uz: Mashina haydab, xabarni ko‘rmadim.\n3) ko: 청소하느라고 늦었어요.\n   ru: Убирался — из-за этого опоздал.\n   en: I was cleaning, so I was late.\n   uz: Tozalash bilan band bo‘lib, kechikdim.\n4) ko: 준비하느라고 밤을 샜어요.\n   ru: Готовился — поэтому ночь не спал.\n   en: I stayed up all night preparing.\n   uz: Tayyorlanaman deb tun bo‘yi uxlamadim."
          }
        ]
      }
    ]
  }
},
{
  id: "snu-4b-grammar",
  title: "Seoulite 4B — Grammar Course",
  series: "SNU",
  kind: "Textbook",
  level: "O'rta 2",
  price: 0,
  rating: 4.9,
  readers: 17540,
  cover:
    "https://images.squarespace-cdn.com/content/v1/62f643e31145611db3fb960d/1719641068766-YHBN5CHYMYKN5OVACXNA/9788952131782.png",

  description:
    "SNU 4B bosqichidagi yadro grammatikalar. Har dars DESCRIPTION ichida 4 tadan misol (ko/ru/en/uz) berilgan. Har bir darsga qisqa video ham biriktirilgan — sinfda ko‘rsatish va self-study uchun qulay.",

  lectureNotes: [
    "Har dars: naqsh → 4 misolni shadowing → o‘zingizning 2 jumlangiz",
    "4A’dagi taxmin/sabab konstruktsiyalari bilan qiyoslang",
    "‘담화 기능’: ehtimol, odat, ohang yumshatish"
  ],

  attachments: [
    {
      id: "s4b1",
      name: "SNU_4B_Grammar_Summary.pdf",
      kind: "pdf",
      size: "1.7 MB",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    }
  ],

  video: {
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
  },

  course: {
    progress: 0,
    totalDuration: "~5h 20m",
    sections: [
      {
        id: "s4b-1",
        title: "Ehtimol va kuzatuv ohanglari",
        total: "4 lectures · ~52m",
        lessons: [
          {
            id: "4b-1",
            title: "A/V-나 보다, -(으)ㄴ가 보다 — ‘chog‘i/ko‘rinadi’ (individu kuzatuv)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "Ko‘rilgan/eshitilgan dalilga asoslangan yumshoq taxmin: 동사 → -나 보다, 형용사/명사(이다) → -(으)ㄴ가 보다.\n\n1) ko: 밖이 시끄러운 걸 보니 축제가 시작됐나 봐요.\n   ru: Судя по шуму, похоже, фестиваль начался.\n   en: Judging by the noise, the festival seems to have started.\n   uz: Shovqindan kelib chiqib, festival boshlangan chog‘i.\n2) ko: 그는 한국 사람이 아닌가 봐요.\n   ru: Похоже, он не кореец.\n   en: It seems he isn’t Korean.\n   uz: U koreys emas shekilli.\n3) ko: 오늘은 좀 춥긴 한가 봐요.\n   ru: Наверное, сегодня прохладно.\n   en: It seems a bit cold today.\n   uz: Bugun sal sovuq shekilli.\n4) ko: 표가 다 매진됐나 봐요.\n   ru: Похоже, все билеты распроданы.\n   en: Looks like the tickets are sold out.\n   uz: Barcha chiptalar sotilib ketgan ko‘rinadi."
          },
          {
            id: "4b-2",
            title: "V-더라고(요) — ‘o‘zim ko‘rib/eshitib bildim’ (tajriba bayoni)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            description:
              "So‘zlovchining bevosita tajribasi; o‘z ko‘zi/eshitishi bilan bilgan fakt.\n\n1) ko: 가 보니까 경치가 정말 좋더라고요.\n   ru: Когда сходил, вид оказался и правда красивым.\n   en: When I went, the scenery was really nice.\n   uz: Borib ko‘rsam, manzara juda chiroyli ekan.\n2) ko: 그 식당은 생각보다 비싸더라고요.\n   ru: Тот ресторан оказался дороже, чем думал.\n   en: That restaurant was pricier than I expected.\n   uz: O‘sha restoran o‘ylaganimdan qimmatroq ekan.\n3) ko: 발표가 꽤 어려웠더라고요.\n   ru: Доклад оказался довольно сложным.\n   en: The presentation turned out fairly hard.\n   uz: Taqdimot ancha qiyin ekan.\n4) ko: 어제는 길이 많이 막히더라고요.\n   ru: Вчера дороги сильно были загружены.\n   en: The traffic was heavy yesterday.\n   uz: Kecha yo‘llar juda tirband ekan."
          },
          {
            id: "4b-3",
            title: "V-곤 하다 — ‘odatda tez-tez qilaman/qilardi’",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "Odat/tez-tez sodir bo‘ladigan ish (hozirgi/yangi odat yoki o‘tmish xotirasi).\n\n1) ko: 시험 전날에 밤을 새우곤 했어요.\n   ru: В канун экзамена я обычно не спал ночами.\n   en: I used to stay up all night before exams.\n   uz: Imtihondan oldin tun bo‘yi uxlamasdim.\n2) ko: 주말이면 산책을 하곤 해요.\n   ru: По выходным обычно гуляю.\n   en: I often take walks on weekends.\n   uz: Hafta oxiri odatda sayr qilaman.\n3) ko: 힘들 때 음악을 듣곤 했죠.\n   ru: Когда было трудно, я слушал музыку.\n   en: I would listen to music when times were tough.\n   uz: Qiyin paytlarda musiqa tinglardim.\n4) ko: 겨울마다 감기에 걸리곤 해요.\n   ru: Каждую зиму обычно простужаюсь.\n   en: I tend to catch a cold every winter.\n   uz: Har qish odatda shamollab qolaman."
          },
          {
            id: "4b-4",
            title: "A/V-다 싶다 / -듯하다 — ‘dek tuyuladi / deb o‘yladim’ (yumshoq fikr)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            description:
              "Aniq bo‘lmagan, mulohaza ohangini bildiradi (yumshoq da’vo).\n\n1) ko: 계획이 좀 무리다 싶었어요.\n   ru: Подумал, что план немного чрезмерный.\n   en: I felt the plan was a bit too much.\n   uz: Reja sal mubolag‘a bo‘lsa kerak, deb o‘yladim.\n2) ko: 비가 곧 올 듯해요.\n   ru: Кажется, скоро пойдёт дождь.\n   en: It seems like it’ll rain soon.\n   uz: Tez orada yomg‘ir yog‘adiganday.\n3) ko: 그가 화가 난 듯 보였어요.\n   ru: Казалось, он злится.\n   en: He seemed angry.\n   uz: U xafa bo‘lgandek ko‘rindi.\n4) ko: 가격이 생각보다 높다 싶네요.\n   ru: Похоже, цена выше, чем думал.\n   en: The price seems higher than I thought.\n   uz: Narx o‘ylaganimdan balandroqdek."
          }
        ]
      },

      {
        id: "s4b-2",
        title: "Sabab, oqibat va muloyim buyruqlar",
        total: "4 lectures · ~52m",
        lessons: [
          {
            id: "4b-5",
            title: "N(으)로 인해(서) / V-아/어서 인해 — ‘natijada/sababli’ (rasmiy)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            description:
              "Formal yozma uslub: sabab → natija.\n\n1) ko: 폭우로 인해서 행사가 취소되었습니다.\n   ru: Из-за ливня мероприятие отменено.\n   en: Due to heavy rain, the event was canceled.\n   uz: Kuchli yomg‘ir sabab tadbir bekor qilindi.\n2) ko: 사고로 인해 교통이 마비됐습니다.\n   ru: Из-за аварии движение парализовано.\n   en: Traffic was paralyzed due to an accident.\n   uz: YTH sabab harakat falaj bo‘ldi.\n3) ko: 노력한 결과로 인해 합격했어요.\n   ru: Благодаря усилиям я сдал.\n   en: As a result of my efforts, I passed.\n   uz: Mehnatim natijasida o‘tdim.\n4) ko: 감염 확산으로 인해 일정이 변경되었습니다.\n   ru: Из-за распространения инфекции график изменён.\n   en: Schedule changed due to the spread of infection.\n   uz: Yuqish tarqalishi tufayli jadval o‘zgardi."
          },
          {
            id: "4b-6",
            title: "V-도록 하다 — ‘… qiling’ (muloyim ko‘rsatma/yo‘l-yo‘riq)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
            },
            description:
              "Nozik buyruq/ko‘rsatma berish, majlisda/ish joyida ko‘p.\n\n1) ko: 내일까지 보고서를 제출하도록 하세요.\n   ru: Попросите сдать отчёт до завтра.\n   en: Have them submit the report by tomorrow.\n   uz: Ertagacha hisobot topshirishlarini ayting.\n2) ko: 안전수칙을 지키도록 합시다.\n   ru: Давайте соблюдать технику безопасности.\n   en: Let’s make sure to follow safety rules.\n   uz: Xavfsizlik qoidalariga amal qilaylik.\n3) ko: 질문은 채팅으로 받도록 하겠습니다.\n   ru: Вопросы будем принимать через чат.\n   en: We’ll take questions via chat.\n   uz: Savollarni chat orqali qabul qilamiz.\n4) ko: 자료 공유를 잊지 않도록 하세요.\n   ru: Постарайтесь не забыть поделиться материалами.\n   en: Please make sure to share the materials.\n   uz: Materiallarni ulashishni unutmang."
          },
          {
            id: "4b-7",
            title: "V-고 말다 — ‘oxiri qilib qo‘ymoq/bo‘lib qoldi’ (kutilmagan yakun)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            description:
              "Nazoratdan chiqib ketgan natija; afsus yoki qadar.\n\n1) ko: 참고 참다가 결국 울고 말았어요.\n   ru: Терпел-терпел и в итоге расплакался.\n   en: I held it in but ended up crying.\n   uz: O‘zimni bosdim-bosdim, oxiri yig‘lab yubordim.\n2) ko: 다이어트를 하다가 과식하고 말았어요.\n   ru: Сидел на диете и всё же переел.\n   en: I was dieting but ended up overeating.\n   uz: Parhezda edim, ammo oxiri ortiqcha yeb qo‘ydim.\n3) ko: 비밀을 말하고 말았네요.\n   ru: Взял и проболтался секретом.\n   en: I ended up revealing the secret.\n   uz: Sirni aytib yuboribman.\n4) ko: 버스를 놓치고 말았어요.\n   ru: В итоге упустил автобус.\n   en: I ended up missing the bus.\n   uz: Avtobusni boy berib qo‘ydim."
          },
          {
            id: "4b-8",
            title: "V-아/어 놓다 / V-아/어 두다 — ‘oldindan qilib qo‘yish/holatni saqlash’",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "Qilgan ish natijasini saqlash yoki keyin uchun tayyorlab qo‘yish.\n\n1) ko: 문을 열어 놓을게요.\n   ru: Дверь оставлю открытой.\n   en: I’ll leave the door open.\n   uz: Eshikni ochiq qoldiraman.\n2) ko: 자료를 미리 준비해 두었습니다.\n   ru: Материалы заранее подготовил.\n   en: I prepared the materials in advance.\n   uz: Materiallarni oldindan tayyorlab qo‘ydim.\n3) ko: 예약을 해 놓았어요.\n   ru: Я заранее сделал бронь.\n   en: I’ve made a reservation in advance.\n   uz: Oldindan bron qilib qo‘ydim.\n4) ko: 설명을 적어 두세요.\n   ru: Запишите объяснение заранее/на будущее.\n   en: Write the notes down for later.\n   uz: Izohlarni yozib qo‘ying."
          }
        ]
      },

      {
        id: "s4b-3",
        title: "Qiyos, imtiyoz va faraz",
        total: "4 lectures · ~52m",
        lessons: [
          {
            id: "4b-9",
            title: "V-아/어 봤자 — ‘qilsa ham foydasi yo‘q’ (imtiyoz, befoyda)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "Natija o‘zgarmasligi aniq bo‘lganda: ‘… bo‘lgan taqdirda ham’.\n\n1) ko: 지금 가 봤자 문 닫았을 거예요.\n   ru: Хоть сейчас поезжай — всё равно закрыто.\n   en: Even if we go now, it’s probably closed.\n   uz: Hozir borsak ham yopiq bo‘lsa kerak.\n2) ko: 설명해 봤자 이해 못 할 거예요.\n   ru: Объясняй — всё равно не поймёт.\n   en: Even if you explain, they won’t understand.\n   uz: Tushuntirsangiz ham tushunmaydi.\n3) ko: 혼자서 해 봤자 시간만 낭비예요.\n   ru: Делай один — только время потеряешь.\n   en: Doing it alone will just waste time.\n   uz: Yolg‘iz qilsangiz ham vaqt ketadi xolos.\n4) ko: 걱정해 봤자 달라지는 게 없어요.\n   ru: Хоть волнуйся — ничего не изменится.\n   en: Worrying won’t change anything.\n   uz: Xavotir ham foyda bermaydi."
          },
          {
            id: "4b-10",
            title: "V-느니 차라리 — ‘undan ko‘ra, yaxshisi…’ (taqqosli tanlov)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
            },
            description:
              "Ikki yomon/nomos variantdan nisbatan yaxshisini tanlash.\n\n1) ko: 기다리느니 차라리 택시를 탈게요.\n   ru: Вместо ожидания уж лучше возьму такси.\n   en: Rather than waiting, I’d rather take a taxi.\n   uz: Kuta-kuta o‘tirgandan ko‘ra taksiga minaman.\n2) ko: 혼자 가느니 차라리 안 가겠어요.\n   ru: Чем идти одному, лучше не пойду.\n   en: Rather than going alone, I’d rather not go.\n   uz: Yolg‘iz borgandan ko‘ra bormayman.\n3) ko: 싸구려를 사느니 차라리 빌려요.\n   ru: Чем покупать дешёвку — лучше арендую.\n   en: I’d rather rent than buy cheap junk.\n   uz: Arzon sifatsizini olgandan ko‘ra ijaraga olaman.\n4) ko: 사과하느니 차라리 떠나겠대요.\n   ru: Он сказал, что лучше уйдёт, чем извинится.\n   en: He’d rather leave than apologize.\n   uz: Kechirim so‘ragandan ko‘ra ketishini aytdi."
          },
          {
            id: "4b-11",
            title: "A/V-더라도 / N이라도 — ‘hatto … bo‘lsa ham’ (imtiyoz)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            description:
              "Shartga qaramay asosiy niyat/natija o‘zgarmaydi.\n\n1) ko: 힘들더라도 포기하지 마세요.\n   ru: Даже если трудно — не сдавайтесь.\n   en: Even if it’s hard, don’t give up.\n   uz: Qiyin bo‘lsa ham taslim bo‘lmang.\n2) ko: 비가 오더라도 행사는 진행됩니다.\n   ru: Даже если пойдёт дождь, мероприятие состоится.\n   en: The event will proceed even if it rains.\n   uz: Yomg‘ir yog‘sa ham tadbir o‘tkaziladi.\n3) ko: 시간이 없더라도 건강은 챙기세요.\n   ru: Даже без времени — о здоровье позаботьтесь.\n   en: Take care of your health even if you’re busy.\n   uz: Vaqt bo‘lmasa ham sog‘liqni asrang.\n4) ko: 최소한 문자라도 보내 주세요.\n   ru: Хотя бы сообщение отправьте.\n   en: At least send a text message.\n   uz: Hech bo‘lmasa xabar yuboring."
          },
          {
            id: "4b-12",
            title: "A/V-기는 하지만 — ‘to‘g‘ri…, ammo…’ (yumshoq kontrast)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "Avval tasdiqlab, so‘ng qarama-qarshi fikrni yumshoq qo‘shish.\n\n1) ko: 맛있기는 하지만 좀 비싸요.\n   ru: Вкусно, но немного дорого.\n   en: It is tasty, but a bit pricey.\n   uz: Mazali, lekin sal qimmat.\n2) ko: 도움이 되기는 하지만 시간이 걸려요.\n   ru: Это помогает, но требует времени.\n   en: It helps, but it takes time.\n   uz: Foydali, ammo vaqt oladi.\n3) ko: 가깝기는 하지만 걸어가긴 힘들어요.\n   ru: Близко, но пешком тяжело.\n   en: It’s close, but hard to walk there.\n   uz: Yaqin, lekin piyoda qiyin.\n4) ko: 재미있기는 하지만 끝이 아쉬웠어요.\n   ru: Интересно, но концовка разочаровала.\n   en: It was fun, but the ending was lacking.\n   uz: Qiziq, ammo oxiri unchalik emas."
          }
        ]
      },

      {
        id: "s4b-4",
        title: "Ta’sir, ifoda va stilistik konstruktsiyalar",
        total: "4 lectures · ~52m",
        lessons: [
          {
            id: "4b-13",
            title: "N만 해도 — ‘o‘ziyoq / faqat mana shuni olaylik’ (misol keltirish)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            description:
              "Kengroq holatdan birgina misolni ajratib ko‘rsatish.\n\n1) ko: 한국만 해도 지역별 사투리가 다양해요.\n   ru: В одной лишь Корее диалектов много.\n   en: Korea alone has many regional dialects.\n   uz: Birgina Koreyaning o‘zida lahjalar ko‘p.\n2) ko: 어제만 해도 따뜻했는데 오늘은 춥네요.\n   ru: Ещё вчера было тепло, а сегодня холодно.\n   en: Just yesterday it was warm; today it’s cold.\n   uz: Kechagina iliq edi, bugun sovuq.\n3) ko: 예산만 해도 수억 원이에요.\n   ru: Бюджет один лишь — сотни миллионов вон.\n   en: The budget alone is hundreds of millions of won.\n   uz: Byudjetning o‘zi ham yuz millionlab von.\n4) ko: 통학 시간만 해도 두 시간이 넘어요.\n   ru: Только дорога до универа — больше двух часов.\n   en: The commute time alone is over two hours.\n   uz: O‘qishga qatnovning o‘zi ikki soatdan ko‘p."
          },
          {
            id: "4b-14",
            title: "A/V-(으)ㄹ 따름이다 — ‘faqat… xolos’ (kamtarlik/cheklash)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "O‘z hissasini kichraytirish yoki faktni xolis ta’kidlash.\n\n1) ko: 당연한 일을 했을 따름입니다.\n   ru: Я лишь сделал должное.\n   en: I just did what was expected.\n   uz: Faqat o‘z vazifamni qildim xolos.\n2) ko: 감사할 따름이에요.\n   ru: Остаётся только благодарить.\n   en: I can only be grateful.\n   uz: Faqat minnatdorman xolos.\n3) ko: 최선을 다했을 따름이에요.\n   ru: Лишь старался изо всех сил.\n   en: I only did my best.\n   uz: Qo‘ldan kelganini qildim xolos.\n4) ko: 기다릴 따름입니다.\n   ru: Остаётся только ждать.\n   en: All we can do is wait.\n   uz: Faqat kutishdan boshqa iloj yo‘q."
          },
          {
            id: "4b-15",
            title: "V-다 보니 — ‘qila-qila (shunday bo‘lib qoldi)’ (takror natijasi)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            description:
              "Takror/tajriba natijasida sezilmay yuzaga kelgan holat.\n\n1) ko: 매일 쓰다 보니 실력이 늘었어요.\n   ru: Писал каждый день — навык вырос.\n   en: Writing daily improved my skills.\n   uz: Har kuni yozaverib, mahoratim oshdi.\n2) ko: 자주 보다 보니 친해졌어요.\n   ru: Часто виделись — подружились.\n   en: Seeing each other often, we became close.\n   uz: Ko‘p ko‘rishib, yaqinlashib ketdik.\n3) ko: 일만 하다 보니 건강을 놓쳤어요.\n   ru: Работая без конца, упустил здоровье.\n   en: Working nonstop, I neglected my health.\n   uz: Ishlayverib, sog‘liqni e’tibordan qoldirdim.\n4) ko: 듣다 보니 이해가 됐어요.\n   ru: Слушая дальше, понял.\n   en: As I kept listening, I understood.\n   uz: Eshitaverib, tushunib oldim."
          },
          {
            id: "4b-16",
            title: "A/V-(으)ㄴ/는 듯이 — ‘go‘yo…dek’ (o‘xshatish/taqqos)",
            dur: "13:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            description:
              "Harakat/holatni o‘xshatib ifodalash — stilistik kuchaytirish.\n\n1) ko: 바람이 춤추는 듯이 불어요.\n   ru: Ветер дует словно танцует.\n   en: The wind blows as if it’s dancing.\n   uz: Shamol go‘yo raqsga tushayotgandek esadi.\n2) ko: 시간이 멈춘 듯이 고요했어요.\n   ru: Было тихо, будто время остановилось.\n   en: It was so quiet as if time had stopped.\n   uz: Go‘yo vaqt to‘xtagandek sukunat edi.\n3) ko: 눈물이 비처럼 내리는 듯했어요.\n   ru: Казалось, слёзы льются как дождь.\n   en: Tears seemed to fall like rain.\n   uz: Ko‘z yosh yomg‘irday yog‘ayotgandek edi.\n4) ko: 그가 날아갈 듯이 기뻐했어요.\n   ru: Он радовался, будто взлетит.\n   en: He was so happy as if he could fly.\n   uz: U go‘yo uchib ketadigandek quvondi."
          }
        ]
      }
    ]
  }
},
{
  id: "snu-5a-grammar",
  title: "Seoulite 5A — Grammar Course",
  series: "SNU",
  kind: "Textbook",
  level: "O'rta 2",
  price: 0,
  rating: 4.9,
  readers: 13210,
  cover:
    "https://images.squarespace-cdn.com/content/v1/62f643e31145611db3fb960d/1722255221804-PV21ZVNP7RSASYVNL3GW/9788953949607.png",

  description:
    "SNU 5A bosqichidagi ilg‘or grammatikalar. Har dars DESCRIPTION ichida 4 tadan misol (ko/ru/en/uz) berilgan. Har bir darsga qisqa video biriktirilgan; seminar va self-study uchun qulay.",

  lectureNotes: [
    "Har formulani kontekst bilan yodlang (gazeta, akademik matnlar)",
    "Misollarni shadowing + qayta hikoya qilish",
    "O‘xshash naqshlar: 이유표현(탓/바람에/기에), 추측표현(듯/나 보다/지도)"
  ],

  attachments: [
    {
      id: "s5a1",
      name: "SNU_5A_Grammar_Summary.pdf",
      kind: "pdf",
      size: "1.9 MB",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    }
  ],

  video: {
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
  },

  course: {
    progress: 0,
    totalDuration: "~6h 10m",
    sections: [
      {
        id: "s5a-1",
        title: "Taxmin, odat va xolis bayon",
        total: "4 lectures · ~62m",
        lessons: [
          {
            id: "5a-1",
            title: "A/V-(으)ㄹ지도 모르다 — ‘…bo‘lishi ham mumkin’ (past ishonch)",
            dur: "15:30",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "Kam ishonchli taxmin; ehtimollik past-ohang.\n\n1) ko: 내일 눈이 올지도 몰라요.\n   ru: Возможно, завтра пойдёт снег.\n   en: It might snow tomorrow.\n   uz: Ehtimol ertaga qor yog‘ishi mumkin.\n2) ko: 그는 이미 떠났을지도 몰라요.\n   ru: Может быть, он уже уехал.\n   en: He may have already left.\n   uz: Ehtimol u allaqachon ketgandir.\n3) ko: 가격이 더 오를지도 모르겠어요.\n   ru: Цена, возможно, ещё вырастет.\n   en: The price might go up more.\n   uz: Narx yana oshishi mumkin.\n4) ko: 시간이 부족할지도 몰라 서둘러요.\n   ru: Времени может не хватить, поэтому тороплюсь.\n   en: We might be short on time, so I’m hurrying.\n   uz: Vaqt yetmasligi mumkin, shuning uchun shoshilyapman."
          },
          {
            id: "5a-2",
            title: "A/V-(으)ㄹ 법하다 — ‘mantiqan… bo‘lishi tabiiy’ (mulohazali taxmin)",
            dur: "15:20",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            description:
              "Dalil/odatiylikka asoslangan taxmin; ‘bo‘lishi tabiiy’.\n\n1) ko: 그 정도면 힘들 법해요.\n   ru: В таких условиях естественно, что трудно.\n   en: Under those conditions, it’s natural to be tired.\n   uz: Shunday sharoitda charchash tabiiy.\n2) ko: 비가 올 법한 하늘이네요.\n   ru: Небо такое, будто вот-вот дождь пойдёт.\n   en: The sky looks like it could rain.\n   uz: Osmonga qarab, yomg‘ir yog‘ishi tabiiyday.\n3) ko: 학생들이 긴장할 법하죠.\n   ru: Логично, что студенты нервничают.\n   en: It’s reasonable students would be nervous.\n   uz: Talabalar asabiy bo‘lishi tabiiy.\n4) ko: 가격이 오를 법한 소식이에요.\n   ru: Новость такая, что цены закономерно вырастут.\n   en: News that would naturally raise prices.\n   uz: Narx oshishi tabiiy bo‘ladigan xabar."
          },
          {
            id: "5a-3",
            title: "N 탓에 / A/V-(으)ㄴ/는 탓에 — ‘…ning aybi bilan’ (salbiy sabab)",
            dur: "15:40",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            description:
              "Salbiy natijaga sababni urg‘ulash; ayb/mas’uliyat ohangi.\n\n1) ko: 교통체증 탓에 지각했어요.\n   ru: Опоздал из-за пробок.\n   en: I was late due to traffic jams.\n   uz: Tirbandlik tufayli kechikdim.\n2) ko: 준비가 부족한 탓에 실패했어요.\n   ru: Из-за недостаточной подготовки провалился.\n   en: I failed because I wasn’t prepared enough.\n   uz: Tayyorlanish yetishmagani uchun muvaffaqiyatsizlikka uchradim.\n3) ko: 날씨가 추운 탓에 손님이 적었어요.\n   ru: Из-за холода было мало клиентов.\n   en: Few customers came because it was cold.\n   uz: Sovuq bo‘lgani uchun mijozlar kam bo‘ldi.\n4) ko: 내 실수 탓에 모두 고생했어요.\n   ru: Из-за моей ошибки всем было трудно.\n   en: Everyone suffered because of my mistake.\n   uz: Mening xatoyim sabab hamma qiynaldi."
          },
          {
            id: "5a-4",
            title: "N 덕분에 / A/V-(으)ㄴ/는 덕분에 — ‘… tufayli (ijobiy)’",
            dur: "15:10",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            description:
              "Ijobiy natijaning sababini minnatdorchilik ohangida ko‘rsatish.\n\n1) ko: 친구들 덕분에 용기를 냈어요.\n   ru: Благодаря друзьям набрался смелости.\n   en: Thanks to my friends, I gained courage.\n   uz: Do‘stlarim tufayli jur’at topdim.\n2) ko: 지원을 받은 덕분에 성공했어요.\n   ru: Успех — благодаря полученной поддержке.\n   en: I succeeded thanks to the support.\n   uz: Qo‘llab-quvvatlash tufayli muvaffaqiyatga erishdim.\n3) ko: 날씨가 좋은 덕분에 여행이 즐거웠어요.\n   ru: Из-за хорошей погоды путешествие было приятным.\n   en: The trip was pleasant thanks to the good weather.\n   uz: Ob-havo yaxshi bo‘lgani uchun sayohat maroqli bo‘ldi.\n4) ko: 여러분 덕분에 여기까지 왔습니다.\n   ru: Благодаря вам мы дошли до этого этапа.\n   en: We’ve come this far thanks to you.\n   uz: Sizlar tufayli shu bosqichga yetdik."
          }
        ]
      },

      {
        id: "s5a-2",
        title: "Rasmiy sabab, maqsad va natija",
        total: "4 lectures · ~62m",
        lessons: [
          {
            id: "5a-5",
            title: "A/V-기에 / N-이기에 — ‘… uchun/bo‘lgani bois’ (yozma/rasmiy)",
            dur: "15:30",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            description:
              "Formal sabab ko‘rsatkichi (ko‘pincha e’lon/maqolalarda).\n\n1) ko: 인원이 많기에 사전 등록이 필요합니다.\n   ru: Поскольку участников много, требуется предварительная регистрация.\n   en: Since attendance is high, pre-registration is required.\n   uz: Ishtirokchilar ko‘p bo‘lgani uchun oldindan ro‘yxat zarur.\n2) ko: 위험하기에 접근을 금합니다.\n   ru: Поскольку опасно, доступ запрещён.\n   en: As it is dangerous, access is prohibited.\n   uz: Xavfli bo‘lgani bois kirish taqiqlanadi.\n3) ko: 학생이기에 할인받을 수 있어요.\n   ru: Так как студент, можно получить скидку.\n   en: Since you’re a student, you can get a discount.\n   uz: Talaba bo‘lganingiz uchun chegirma olasiz.\n4) ko: 늦었기에 먼저 시작했습니다.\n   ru: Так как вы опоздали, мы начали раньше.\n   en: Since you were late, we started already.\n   uz: Kech qolganingiz uchun biz boshlab yubordik."
          },
          {
            id: "5a-6",
            title: "V-고자 — ‘…moqchi bo‘lib / maqsadida’ (rasmiy)",
            dur: "15:10",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "Rasmiy matnda maqsad bildirish (보고자 하다, 마련하고자 등).\n\n1) ko: 의견을 듣고자 설문을 진행합니다.\n   ru: Чтобы узнать мнения, проводим опрос.\n   en: We are conducting a survey to gather opinions.\n   uz: Fikrlarni eshitish maqsadida so‘rovnoma o‘tkazamiz.\n2) ko: 품질을 개선하고자 신규 시스템을 도입했습니다.\n   ru: Чтобы улучшить качество, внедрили новую систему.\n   en: We introduced a new system to improve quality.\n   uz: Sifatni oshirish maqsadida yangi tizim joriy etdik.\n3) ko: 안전을 확보하고자 기준을 강화했습니다.\n   ru: Для безопасности ужесточили стандарты.\n   en: We toughened standards to ensure safety.\n   uz: Xavfsizlikni ta’minlash uchun standartlar kuchaytirildi.\n4) ko: 자료를 공유하고자 메일을 드립니다.\n   ru: Чтобы поделиться материалами, отправляю письмо.\n   en: I’m emailing to share the materials.\n   uz: Materiallarni ulashish uchun xat yuboryapman."
          },
          {
            id: "5a-7",
            title: "A/V-(으)ㄴ/는 바 — ‘… ekanligi, …ligi’ (rasmiy nominalizatsiya)",
            dur: "15:30",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
            },
            description:
              "Hujjat/axborot uslubida faktni xolis bayon qilish.\n\n1) ko: 일정이 변경된 바를 안내드립니다.\n   ru: Сообщаем о факте изменения расписания.\n   en: We inform you that the schedule has been changed.\n   uz: Jadval o‘zgarganligi haqida ma’lum qilamiz.\n2) ko: 해당 건은 검토 중인 바, 결과를 추후 공지하겠습니다.\n   ru: Поскольку вопрос на рассмотрении, результат сообщим позже.\n   en: As the matter is under review, results will be announced later.\n   uz: Mazkur masala ko‘rib chiqilayotgani bois natijani keyin e’lon qilamiz.\n3) ko: 오류가 발견된 바 즉시 조치했습니다.\n   ru: Поскольку обнаружена ошибка, сразу приняли меры.\n   en: As an error was found, we acted immediately.\n   uz: Xato aniqlangani sabab zudlik bilan choralar ko‘rildi.\n4) ko: 참가비는 환불 불가한 바 양해 부탁드립니다.\n   ru: Ввиду невозвратности взноса просим понимания.\n   en: As fees are non-refundable, we ask for your understanding.\n   uz: Ishtirok to‘lovi qaytarilmasligini inobat qiling."
          },
          {
            id: "5a-8",
            title: "A/V-(으)ㄴ/는 만큼 — ‘… darajada/… bo‘lganidek’ (qiyos & sabab)",
            dur: "16:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "Daraja-qiyos yoki sababiy ohang (‘bo‘lganidek, shunchalik’).\n\n1) ko: 많이 연습한 만큼 실력이 늘었어요.\n   ru: Раз уж много тренировался, навык вырос.\n   en: Since I practiced a lot, my skills improved.\n   uz: Ko‘p mashq qilganim uchun mahorat oshdi.\n2) ko: 기대한 만큼 만족스러웠어요.\n   ru: Было настолько удовлетворительно, насколько ожидал.\n   en: It was as satisfying as I expected.\n   uz: Kutganim darajasida mamnun qoldim.\n3) ko: 비싼 만큼 품질이 좋아요.\n   ru: Как цена высока, так и качество хорошее.\n   en: It’s expensive, but the quality matches.\n   uz: Qimmat bo‘lsa ham shunga yarasha sifatli.\n4) ko: 바쁜 만큼 일정 관리가 중요해요.\n   ru: Чем более занят, тем важнее тайм-менеджмент.\n   en: The busier you are, the more scheduling matters.\n   uz: Qanchalik band bo‘lsangiz, reja shunchalik muhim."
          }
        ]
      },

      {
        id: "s5a-3",
        title: "Vaqt, diskurs va fe’l ohanglari",
        total: "4 lectures · ~66m",
        lessons: [
          {
            id: "5a-9",
            title: "V-다가는 — ‘qila-qila (yomon oqibat)’",
            dur: "16:30",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
            },
            description:
              "Davom etayotgan odat/harakat natijasida salbiy oqibat ogohlantirishi.\n\n1) ko: 그렇게 늦게 자다가는 건강 망쳐요.\n   ru: Если так поздно ложиться, подорвёте здоровье.\n   en: If you keep sleeping late, you’ll ruin your health.\n   uz: Kech yotaverilsa, sog‘liqni buzib qo‘yasiz.\n2) ko: 안전벨트 안 매다가는 큰일 나요.\n   ru: Не пристёгиваясь, можно попасть в беду.\n   en: If you don’t buckle up, you could be in trouble.\n   uz: Xavfsizlik kamarini taqmasangiz, yomon bo‘ladi.\n3) ko: 빚을 내다가는 감당 못해요.\n   ru: Наберёте долгов — не потянете.\n   en: If you keep borrowing, you won’t manage it.\n   uz: Qarzni ola-ola borsa, uddalay olmaysiz.\n4) ko: 일만 하다가는 번아웃 와요.\n   ru: Работая без отдыха, сгорите.\n   en: Working nonstop, you’ll burn out.\n   uz: Faqat ishlayversangiz, yonib ketasiz (burnout)."
          },
          {
            id: "5a-10",
            title: "A/V-다 보니(까) — ‘qila-qila shuni bildim/bo‘lib qoldi’",
            dur: "16:20",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "Takror tajriba natijasida anglash/natija (neytral).\n\n1) ko: 매일 말하기를 연습하다 보니 자신감이 생겼어요.\n   ru: Тренируясь каждый день, обрёл уверенность.\n   en: Practicing speaking daily, I gained confidence.\n   uz: Har kuni gapirishni mashq qila-qila ishonch paydo bo‘ldi.\n2) ko: 일을 하다 보니까 시간이 훌쩍 갔어요.\n   ru: Работал — и время пролетело.\n   en: While working, time just flew by.\n   uz: Ishlay-ishga vaqt uchib ketdi.\n3) ko: 듣다 보니 이해가 되더라고요.\n   ru: Слушая, понял.\n   en: As I kept listening, I understood.\n   uz: Eshitaverib, tushunib oldim.\n4) ko: 기록하다 보니 생각이 정리됐어요.\n   ru: Записывая, упорядочил мысли.\n   en: By taking notes, my thoughts got organized.\n   uz: Yozib bora-bora fikrlarim tartibga tushdi."
          },
          {
            id: "5a-11",
            title: "A/V-(으)ㄴ/는 김에 — ‘shu bilan birga/yo‘l-yo‘lakay’",
            dur: "16:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
            },
            description:
              "Bir ishga qo‘shib ikkinchi ishni bajarish; ‘o‘zi … ekan’.\n\n1) ko: 시내에 나온 김에 머리도 자르고 왔어요.\n   ru: Раз уж вышел в центр, заодно подстригся.\n   en: Since I was downtown, I also got a haircut.\n   uz: Shaharga chiqqan ekanman, sochimni ham oldirdim.\n2) ko: 청소하는 김에 창문도 닦자.\n   ru: Раз уж убираем, давай и окна помоем.\n   en: Since we’re cleaning, let’s wipe the windows too.\n   uz: Tozalayotgan ekanmiz, derazani ham artaylik.\n3) ko: 한국에 온 김에 제주도도 갔어요.\n   ru: Пока был в Корее, съездил и на Чеджу.\n   en: Since I was in Korea, I visited Jeju too.\n   uz: Koreyaga kelganimda Jejuga ham bordim.\n4) ko: 회의한 김에 일정도 확정합시다.\n   ru: Раз уж собрались, утвердим расписание.\n   en: Since we’re meeting, let’s finalize the schedule.\n   uz: Uchrashgan ekanmiz, jadvalni ham tasdiqlaylik."
          },
          {
            id: "5a-12",
            title: "A/V-(으)ㄴ/는 척하다 — ‘deb ko‘rsatmoq/rol o‘ynamoq’",
            dur: "17:10",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            description:
              "Haqiqatda emas, shunday ko‘rsatish/taqlid qilish.\n\n1) ko: 모르는 척했어요.\n   ru: Сделал вид, что не знаю.\n   en: I pretended not to know.\n   uz: Bilmaganga oldim.\n2) ko: 아픈 척하지 마.\n   ru: Не притворяйся больным.\n   en: Don’t pretend to be sick.\n   uz: Kasal bo‘lganga o‘xshama.\n3) ko: 바쁜 척하면서 놀더라.\n   ru: Делал вид, что занят, а сам отдыхал.\n   en: He acted busy but was actually chilling.\n   uz: Band bo‘lgandek, aslida dam olayotgan edi.\n4) ko: 못 들은 척 지나갔어요.\n   ru: Прошёл мимо, сделав вид, что не услышал.\n   en: I walked by, pretending I didn’t hear.\n   uz: Eshitmaganga olib o‘tib ketdim."
          }
        ]
      }
    ]
  }
},
{
  id: "snu-5b-grammar",
  title: "Seoulite 5B — Grammar Course",
  series: "SNU",
  kind: "Textbook",
  level: "Yuqori",
  price: 0,
  rating: 4.9,
  readers: 11870,
  cover:
    "https://images.squarespace-cdn.com/content/v1/62f643e31145611db3fb960d/4d2f5b6b-40b6-41ae-90a8-a2cadc74287b/9788952132017.png",

  description:
    "SNU 5B bosqichidagi ilg‘or grammatikalar. Har dars DESCRIPTION ichida 4 tadan misol (ko/ru/en/uz) berilgan. Har bir darsga qisqa video biriktirilgan; seminar va self-study uchun qulay.",

  lectureNotes: [
    "Kontextga mos registrni tanlang: rasmiy/neytral/og‘zaki",
    "Yangi naqshlarni o‘xshashlari bilan taqqoslab yodlang",
    "Misollarni shadowing → transformation drill → free talk"
  ],

  attachments: [
    {
      id: "s5b1",
      name: "SNU_5B_Grammar_Summary.pdf",
      kind: "pdf",
      size: "2.1 MB",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    }
  ],

  video: {
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
  },

  course: {
    progress: 0,
    totalDuration: "~6h",
    sections: [
      {
        id: "s5b-1",
        title: "Ta’kid, majburiyat va taqqos",
        total: "4 lectures · ~80m",
        lessons: [
          {
            id: "5b-1",
            title: "A/V-(으)ㄹ 수밖에 없다 — ‘… qilmaslikning iloji yo‘q’",
            dur: "20:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "Majburiyat yoki muqobil yo‘qligini bildiradi.\n\n1) ko: 약속을 했으니 갈 수밖에 없어요.\n   ru: Раз уж пообещал, иначе как пойти — нельзя.\n   en: Since I promised, I have no choice but to go.\n   uz: Vada berganim uchun borishdan boshqa iloj yo‘q.\n2) ko: 시간이 없어서 택시를 탈 수밖에 없었어요.\n   ru: Не было времени — пришлось взять такси.\n   en: I had no time, so I had to take a taxi.\n   uz: Vaqt bo‘lmagani uchun taksida ketishga majbur bo‘ldim.\n3) ko: 가격이 올라서 줄일 수밖에 없네요.\n   ru: Цены выросли — остаётся лишь сократить (расходы).\n   en: Prices went up, so we have to cut down.\n   uz: Narxlar oshdi — qisqartirishga to‘g‘ri keladi.\n4) ko: 결과가 나쁘니 다시 할 수밖에요.\n   ru: Результат плохой — остаётся сделать заново.\n   en: The result is bad, so we can only redo it.\n   uz: Natija yomon — qayta qilishga majburmiz."
          },
          {
            id: "5b-2",
            title: "A/V-(으)ㄴ/는 셈이다 — ‘… degan hisob’ / ‘… desa ham bo‘ladi’",
            dur: "20:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            description:
              "Taxminiy tenglashtirish yoki xulosa.\n\n1) ko: 월세나 다름없으니 사는 셈이에요.\n   ru: Почти как аренда — можно сказать, «живём».\n   en: It’s practically rent; you could say we live there.\n   uz: Deyarli ijara — yashayapmiz desa ham bo‘ladi.\n2) ko: 반값이면 공짜인 셈이죠.\n   ru: За полцены — считай бесплатно.\n   en: At half price, it’s as good as free.\n   uz: Yarim narxda — go‘yo tekin.\n3) ko: 하루 종일 준비했으니 끝난 셈이에요.\n   ru: Готовили весь день — можно считать, что закончили.\n   en: We prepared all day, so it’s basically done.\n   uz: Butun kun tayyorlandik — tamom desa bo‘ladi.\n4) ko: 세 번이나 떨어졌으니 포기한 셈이네요.\n   ru: Трижды провалился — можно сказать, сдался.\n   en: Failed three times—it’s like giving up.\n   uz: Uch marta yiqildi — taslim bo‘ldi desa bo‘ladi."
          },
          {
            id: "5b-3",
            title: "N만 못하다 / V-느니만 못하다 — ‘…dan qolish’ / ‘… qilgandan yomon’",
            dur: "20:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
            },
            description:
              "Solishtirishda salbiy baho; yaxshiroq variantni ko‘rsatish.\n\n1) ko: 이 커피는 집에서 타는 것만 못해요.\n   ru: Этот кофе хуже домашнего.\n   en: This coffee isn’t as good as homemade.\n   uz: Bu qahva uyda qilganimchalik emas.\n2) ko: 대충 하느니 안 하는 게 못해요 → 대충 하느니 안 하는 게 낫죠.\n   ru: Делать кое-как ещё хуже, чем не делать.\n   en: Doing it sloppily is worse than not doing it.\n   uz: Yalpayib qilish qilmaslikdan ham yomon.\n3) ko: 그 설명은 글만 못하네요.\n   ru: Такое объяснение хуже текста.\n   en: That explanation is worse than just writing it down.\n   uz: Bu tushuntirish matndan ham yomon.\n4) ko: 기다리느니 먼저 연락하는 게 낫지 않아요?\n   ru: Не лучше ли позвонить, чем ждать?\n   en: Isn’t it better to call than to wait?\n   uz: Kutgandan ko‘ra avval telefon qilish yaxshiroq emasmi?"
          },
          {
            id: "5b-4",
            title: "V-(으)ㄹ 겸(해서) — ‘… ham, shu bilan birga … uchun ham’",
            dur: "20:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            description:
              "Bir nechta maqsadni birga ifodalash.\n\n1) ko: 운동도 할 겸 공원에 갔어요.\n   ru: Заодно позаниматься спортом пошёл в парк.\n   en: I went to the park also to exercise.\n   uz: Sport ham qilay deb parkka bordim.\n2) ko: 친구도 만날 겸 서울에 올라왔어요.\n   ru: Заодно встретить друга — подъехал в Сеул.\n   en: I came up to Seoul to meet a friend as well.\n   uz: Do‘stimni ham ko‘ray deb Seulga keldim.\n3) ko: 사진도 찍을 겸 바다에 갔죠.\n   ru: И фото сделать — поехал к морю.\n   en: I went to the sea also to take photos.\n   uz: Surat ham olay deb dengizga bordim.\n4) ko: 답사도 할 겸 현장을 둘러봤어요.\n   ru: Заодно осмотрел объект (предварительный визит).\n   en: I did a site visit while I was at it.\n   uz: Shu bahona joyni ham aylanib chiqdim."
          }
        ]
      },

      {
        id: "s5b-2",
        title: "Diskurs va natija ohanglari",
        total: "4 lectures · ~80m",
        lessons: [
          {
            id: "5b-5",
            title: "A/V-더니 — ‘… edi, (natijada/qarama-qarshi) …’ (kuzatuv asosida)",
            dur: "20:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
            },
            description:
              "Subyekt odatda 3-shaxs; oldingi kuzatuv → hozirgi natija/qarshi.\n\n1) ko: 어제는 춥더니 오늘은 포근하네요.\n   ru: Вчера было холодно, а сегодня тепло.\n   en: It was cold yesterday, but it’s mild today.\n   uz: Kecha sovuq edi, bugun esa iliq.\n2) ko: 열심히 하더니 성적이 많이 올랐어요.\n   ru: Усердно трудился — и оценки сильно поднялись.\n   en: He worked hard, and his grades improved a lot.\n   uz: Aqlli o‘qidi, baholari ancha oshdi.\n3) ko: 아프더니 이제는 괜찮아졌대요.\n   ru: Боле́л, а теперь уже лучше.\n   en: He was sick, but now he’s better.\n   uz: Kasal edi, endi tuzalibdi.\n4) ko: 비가 오더니 길이 막히네요.\n   ru: Пошёл дождь — дороги встали.\n   en: It started raining, and now traffic is jammed.\n   uz: Yomg‘ir yog‘di, yo‘llar tiqilib qoldi."
          },
          {
            id: "5b-6",
            title: "A/V-(으)ㄹ 리가 없다 — ‘… bo‘lishi mumkin emas’",
            dur: "20:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            },
            description:
              "Kuchli inkor; mantiqan imkonsiz.\n\n1) ko: 그가 거짓말을 할 리가 없어요.\n   ru: Он не может лгать.\n   en: There’s no way he would lie.\n   uz: U yolg‘on gapirishi mumkin emas.\n2) ko: 이 가격이 진짜일 리가 없지요.\n   ru: Не может быть, чтобы цена была настоящей.\n   en: This price can’t be real.\n   uz: Bu narx rost bo‘lishi mumkin emas.\n3) ko: 시험이 그렇게 쉬울 리가 없어요.\n   ru: Экзамен не может быть таким лёгким.\n   en: The exam can’t be that easy.\n   uz: Imtihon buncha oson bo‘lishi mumkin emas.\n4) ko: 지금 문을 닫았을 리가 없는데요.\n   ru: Вряд ли сейчас двери закрыты.\n   en: There’s no way it’s closed now.\n   uz: Hozir yopiq bo‘lishi ehtimoldan yiroq."
          },
          {
            id: "5b-7",
            title: "A/V-기 마련이다 — ‘tabiiy/odatiy hol’",
            dur: "20:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
            },
            description:
              "Umumiy haqiqat, tabiiy oqibat.\n\n1) ko: 사람은 실수하기 마련이에요.\n   ru: Людям свойственно ошибаться.\n   en: People are bound to make mistakes.\n   uz: Odam adashishi tabiiy.\n2) ko: 급하면 실수하기 마련이죠.\n   ru: Когда спешишь, обычно ошибаешься.\n   en: When in a rush, you tend to make mistakes.\n   uz: Shoshganda xato qilish odatiy.\n3) ko: 처음엔 서투르기 마련입니다.\n   ru: Вначале неизбежно быть неуклюжим.\n   en: It’s natural to be clumsy at first.\n   uz: Avvaliga ko‘nikmaganimiz tabiiy.\n4) ko: 겨울엔 감기 걸리기 마련이에요.\n   ru: Зимой простуда — дело привычное.\n   en: Colds are common in winter.\n   uz: Qishda shamollash odatiy."
          },
          {
            id: "5b-8",
            title: "A/V-(으)ㄹ 따름이다 — ‘faqat… xolos / shunchaki…’",
            dur: "20:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
            },
            description:
              "Holatni kamtar/obyektiv bayon qilish (rasmiy ohangda ko‘p).\n\n1) ko: 최선을 다했을 따름입니다.\n   ru: Лишь сделал всё возможное.\n   en: I only did my best.\n   uz: Faqat qo‘limdan kelganini qildim, xolos.\n2) ko: 도울 수 있는 범위에서 도왔을 따름이에요.\n   ru: Помог лишь в пределах возможного.\n   en: I helped only within my capacity.\n   uz: Faqat imkonim darajasida yordam berdim.\n3) ko: 규정을 따른 것일 따름입니다.\n   ru: Лишь следовали правилам.\n   en: We simply followed the rules.\n   uz: Faqat qoidaga amal qildik, xolos.\n4) ko: 운이 좋았을 따름이죠.\n   ru: Просто повезло, вот и всё.\n   en: It was nothing but luck.\n   uz: Shunchaki omad bo‘ldi, xolos."
          }
        ]
      },

      {
        id: "s5b-3",
        title: "Kuchaytirish, istisno va ‘kutilmagan’ natija",
        total: "4 lectures · ~80m",
        lessons: [
          {
            id: "5b-9",
            title: "N(이)야말로 — ‘aynan o‘zi/haqiqatan ham’ (kuchli ta’kid)",
            dur: "20:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
            },
            description:
              "Mavzuni kuchli ajratish.\n\n1) ko: 지금이야말로 시작할 때예요.\n   ru: Именно сейчас время начинать.\n   en: Now is precisely the time to start.\n   uz: Aynan hozir boshlash vaqti.\n2) ko: 당신이야말로 진정한 친구예요.\n   ru: Именно ты — настоящий друг.\n   en: You are the true friend indeed.\n   uz: Aynan siz — chin do‘stsiz.\n3) ko: 노력이야말로 성공의 비결이죠.\n   ru: Именно усилие — ключ к успеху.\n   en: Effort is the key to success.\n   uz: Aynan mehnat — muvaffaqiyat kaliti.\n4) ko: 안전이야말로 최우선입니다.\n   ru: Безопасность — прежде всего.\n   en: Safety is the top priority.\n   uz: Xavfsizlik — eng birinchi o‘rinda."
          },
          {
            id: "5b-10",
            title: "A/V-고 해서 — ‘… bo‘lgani uchun ham (sabablardan biri sifatida)’",
            dur: "20:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            },
            description:
              "Bir necha sababdan bittasini tilga olish.\n\n1) ko: 비도 오고 해서 집에 있었어요.\n   ru: В том числе из-за дождя остался дома.\n   en: I stayed home partly because it was raining.\n   uz: Yomg‘ir ham yog‘ib turgani uchun uyda qoldim.\n2) ko: 피곤하고 해서 일찍 잤어요.\n   ru: В том числе потому что устал, рано лёг.\n   en: I went to bed early since I was tired and all.\n   uz: Charchaganim ham bor, ertaroq uxladim.\n3) ko: 시간이 없고 해서 못 갔어요.\n   ru: В том числе из-за нехватки времени не смог пойти.\n   en: I couldn’t go, partly due to lack of time.\n   uz: Vaqt ham yo‘qligi sabab bora olmadim.\n4) ko: 맛있고 해서 또 주문했어요.\n   ru: В том числе потому что вкусно — заказал ещё.\n   en: It was tasty, so I ordered again (among other reasons).\n   uz: Mazali ham ekan, yana buyurtma berdim."
          },
          {
            id: "5b-11",
            title: "V-고도 — ‘… qilgandan keyin ham (kutilmagan) …’",
            dur: "20:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
            },
            description:
              "Kutilmagan natija; ‘… qildim-u, baribir …’.\n\n1) ko: 약을 먹고도 낫지 않았어요.\n   ru: Даже приняв лекарство, не выздоровел.\n   en: Even after taking medicine, I didn’t get better.\n   uz: Dori ichsam ham tuzalib ketmadim.\n2) ko: 사과하고도 용서받지 못했어요.\n   ru: Хоть и извинился, не простили.\n   en: I apologized, yet wasn’t forgiven.\n   uz: Uzr so‘rasam ham kechirishmadi.\n3) ko: 열심히 연습하고도 실수했어요.\n   ru: Хотя усердно тренировался, ошибся.\n   en: Even after practicing hard, I made a mistake.\n   uz: Qattiq mashq qilsam ham xato qildim.\n4) ko: 밤새워 공부하고도 점수가 낮았어요.\n   ru: Хотя учил всю ночь, балл низкий.\n   en: I studied all night but still got a low score.\n   uz: Tun bo‘yi o‘qisam ham ball past bo‘ldi."
          },
          {
            id: "5b-12",
            title: "A/V-기는커녕 — ‘… u yoqda tursin, … ham’ (kuchli inkor)",
            dur: "20:00",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster:
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            },
            description:
              "Kutilgan minimum ham yo‘qligini ta’kidlash.\n\n1) ko: 쉬기는커녕 밥 먹을 시간도 없었어요.\n   ru: Не то что отдохнуть — поесть времени не было.\n   en: Far from resting, I didn’t even have time to eat.\n   uz: Dam olish u yoqda tursin, ovqatga ham vaqt bo‘lmadi.\n2) ko: 도움은커녕 방해만 됐어요.\n   ru: Какое там помощь — только мешал.\n   en: Help? It was a hindrance.\n   uz: Yordam u yoqda tursin, faqat halal bo‘ldi.\n3) ko: 읽기는커녕 펴 보지도 않았어요.\n   ru: Не то что читать — даже не раскрыл.\n   en: I didn’t even open it, let alone read it.\n   uz: O‘qish u yoqda tursin, ochib ham ko‘rmadim.\n4) ko: 칭찬은커녕 혼만 났어요.\n   ru: Вместо похвалы — получил выговор.\n   en: I got scolded, not praised.\n   uz: Maqtov u yoqda tursin, dakki eshitdim."
          }
        ]
      },
      {
        id: "s3",
        title: "Ta’kid, cheklash va vaqt munosabatlari",
        total: "4 lessons · ~60m",
        lessons: [
          {
            id: "l9",
            title: "-마저 / -조차 — ‘hatto … ham’ (kutilmagan subyekt)",
            dur: "15:00",
            description:
              "Ajablanarli qo‘shilish, salbiy ko‘proq.\n" +
              "1) ko: 친구마저 떠나 버렸어요.\n   ru: Даже друг ушёл.\n   en: Even my friend left.\n   uz: Hattoki do‘stim ham ketib qoldi.\n" +
              "2) ko: 물조차 없었어요.\n   ru: Не было даже воды.\n   en: There wasn’t even water.\n   uz: Hattoki suv ham yo‘q edi.\n" +
              "3) ko: 마지막 희망마저 사라졌어요.\n   ru: Исчезла даже последняя надежда.\n   en: Even the last hope disappeared.\n   uz: So‘nggi umid ham yo‘qoldi.\n" +
              "4) ko: 그는 인사조차 안 했어요.\n   ru: Он даже не поздоровался.\n   en: He didn’t even say hello.\n   uz: U hattoki salom ham bermadi.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
            }
          },
          {
            id: "l10",
            title: "-치고(는) — ‘… ga qaraganda (kutilmagan baho)’",
            dur: "15:00",
            description:
              "Kategoriya uchun ajablanarli natija.\n" +
              "1) ko: 초보치고는 운전을 잘해요.\n   ru: Для новичка он водит хорошо.\n   en: For a beginner, he drives well.\n   uz: Yangi boshlaganiga qaraganda yaxshi haydaydi.\n" +
              "2) ko: 가격치고는 품질이 좋아요.\n   ru: Для такой цены качество хорошее.\n   en: For the price, the quality is good.\n   uz: Bu narxiga qaraganda sifati yaxshi.\n" +
              "3) ko: 아이치고는 이해가 빠르네요.\n   ru: Для ребёнка быстро соображает.\n   en: For a child, he understands quickly.\n   uz: Bola uchun tez tushunadi.\n" +
              "4) ko: 한국인치고는 사투리가 심하네요.\n   ru: Для корейца диалект сильный.\n   en: For a Korean, the dialect is strong.\n   uz: Koreys uchun shevasi juda kuchli-ku.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg"
            }
          },
          {
            id: "l11",
            title: "-고서야 — ‘faqat … dan keyin’ (shartli vaqt)",
            dur: "15:00",
            description:
              "Oldingi hol tugagachgina keyingi ish.\n" +
              "1) ko: 확인하고서야 결재하겠습니다.\n   ru: Только проверив, утвердим.\n   en: We’ll approve only after checking.\n   uz: Faqat tekshirgach tasdiqlaymiz.\n" +
              "2) ko: 사실을 알고서야 마음이 놓였어요.\n   ru: Лишь узнав правду, успокоился.\n   en: Only after learning the truth did I relax.\n   uz: Haqiqatni bilibgina ko‘nglim joyiga tushdi.\n" +
              "3) ko: 시험이 끝나고서야 쉬었어요.\n   ru: Отдохнул только после экзамена.\n   en: I rested only after the exam ended.\n   uz: Faqat imtihon tugagach dam oldim.\n" +
              "4) ko: 사과를 받고서야 용서했어요.\n   ru: Простил лишь получив извинения.\n   en: I forgave only after the apology.\n   uz: Faqat kechirim olgach kechirdim.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg"
            }
          },
          {
            id: "l12",
            title: "-느니만 못하다 — ‘… qilgandan ko‘ra yomon’",
            dur: "15:00",
            description:
              "Muqobilni yomon baholash.\n" +
              "1) ko: 그렇게 설명하느니 차라리 말하지 않는 게 못해요.\n   ru: Лучше уж молчать, чем так объяснять.\n   en: It’s worse to explain like that than to say nothing.\n   uz: Bunday tushuntirgandan ko‘ra gapirmagan afzal.\n" +
              "2) ko: 서둘러 하느니만 못해요. 천천히가 낫죠.\n   ru: Поспешность хуже; лучше медленнее.\n   en: Rushing is worse; better be slow.\n   uz: Shoshilishdan ko‘ra sekinroq yaxshi.\n" +
              "3) ko: 형식적으로 사과하느니만 못해요.\n   ru: Формальные извинения только хуже.\n   en: A perfunctory apology is worse.\n   uz: Shunchaki “rasmiy” kechirim yanada yomon.\n" +
              "4) ko: 억지로 만나느니만 못해요.\n   ru: Встреча через силу — хуже не встречаться.\n   en: Forced meeting is worse than not meeting.\n   uz: Majburan uchrashgandan ko‘ra uchrashmagani yaxshi.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            }
          }
        ]
      },

      {
        id: "s4",
        title: "Diskurs va uslub",
        total: "4 lessons · ~60m",
        lessons: [
          {
            id: "l13",
            title: "-다시피 — ‘bilganingizdek/…dek’ (ma’lumot havolasi)",
            dur: "15:00",
            description:
              "Tinglovchi biladigan faktga tayanch.\n" +
              "1) ko: 아시다시피 일정이 변경되었습니다.\n   ru: Как вы знаете, расписание изменилось.\n   en: As you know, the schedule has changed.\n   uz: Bilganingizdek, jadval o‘zgardi.\n" +
              "2) ko: 보시다시피 결과가 분명합니다.\n   ru: Как видите, результат очевиден.\n   en: As you can see, the result is clear.\n   uz: Ko‘rib turganingizdek, natija aniq.\n" +
              "3) ko: 들으시다시피 조건이 까다롭습니다.\n   ru: Как вы слышали, условия строгие.\n   en: As you heard, the terms are strict.\n   uz: Eshitganingizdek, shartlar qattiq.\n" +
              "4) ko: 느끼시다시피 변화가 필요합니다.\n   ru: Как вы чувствуете, нужны изменения.\n   en: As you feel, change is needed.\n   uz: Sezganingizdek, o‘zgarish kerak.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
            }
          },
          {
            id: "l14",
            title: "-노라면 — ‘qila bersa(ng), … bo‘ladi’ (adabiy)",
            dur: "15:00",
            description:
              "Uslubiy-ko‘tarinki, davomiylik + natija.\n" +
              "1) ko: 꾸준히 하노라면 길이 보일 것이다.\n   ru: Если упорно продолжать, путь откроется.\n   en: If you keep at it, the way will appear.\n   uz: Tinmay davom etsang, yo‘l ko‘rinadi.\n" +
              "2) ko: 배우노라면 언젠가 익숙해지리라.\n   ru: Учась неустанно, когда-нибудь привыкнешь.\n   en: Keep learning and you’ll get used to it.\n   uz: O‘rgana berilsa, bir kun kelib ko‘nikib ketadi.\n" +
              "3) ko: 참노라면 좋은 날이 오리라.\n   ru: Терпя, дождёшься светлого дня.\n   en: If you endure, better days will come.\n   uz: Chidasang, yaxshi kunlar keladi.\n" +
              "4) ko: 읽노라면 뜻이 드러나리라.\n   ru: Читая, смысл раскроется.\n   en: As you keep reading, the meaning will reveal itself.\n   uz: O‘qiyversang, ma’no ochiladi.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg"
            }
          },
          {
            id: "l15",
            title: "-다 못해 — ‘chidab-chidab bo‘lmagach…’",
            dur: "15:00",
            description:
              "Chegaradan o‘tish, majburiy keyingi harakat.\n" +
              "1) ko: 기다리다 못해 먼저 출발했어요.\n   ru: Дождавшись до предела, уехал первым.\n   en: I couldn’t wait any longer and left first.\n   uz: Endi chidolmay, birinchi bo‘lib ketdim.\n" +
              "2) ko: 참다 못해 소리를 질렀어요.\n   ru: Не выдержав, закричал.\n   en: Unable to endure, I shouted.\n   uz: Chidolmay baqirib yubordim.\n" +
              "3) ko: 막히다 못해 걸어갔어요.\n   ru: Пробки стали невыносимы — пошёл пешком.\n   en: The traffic was unbearable, so I walked.\n   uz: Tirbandlikdan to‘yib, piyoda ketdim.\n" +
              "4) ko: 배고프다 못해 어지러웠어요.\n   ru: От голода даже кружилась голова.\n   en: I was so hungry I felt dizzy.\n   uz: Ochlikdan hatto boshim aylana boshladi.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
            }
          },
          {
            id: "l16",
            title: "-고도 남다 — ‘… qilishga ham yetib ortadi’ (ortiqcha daraja)",
            dur: "15:00",
            description:
              "Hajm/daraja yetarliligini ta’kidlaydi.\n" +
              "1) ko: 시간이 한 시간이고도 남아요.\n   ru: Часа более чем достаточно.\n   en: An hour is more than enough.\n   uz: Bir soat yetib ortadi.\n" +
              "2) ko: 이 돈이면 여행하고도 남아요.\n   ru: Этих денег более чем хватит на поездку.\n   en: This money will be more than enough for a trip.\n   uz: Bu pul safarga ham yetadi, ortib ham qoladi.\n" +
              "3) ko: 자료가 충분하고도 남습니다.\n   ru: Материалов с избытком.\n   en: There’s a surplus of data.\n   uz: Ma’lumotlar yetarli — hatto ortiqcha.\n" +
              "4) ko: 경험으로도 설명하고도 남죠.\n   ru: Опыта хватает с лихвой, чтобы объяснить.\n   en: Experience more than suffices to explain.\n   uz: Tajriba izohlashga ham yetadi, ortadi ham.",
            video: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
            }
          }
        ]
      }
    ]
  }
},
]


