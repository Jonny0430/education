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
    id: "yo-yoki",
    title: "거나 (yo-ki, yoki)",
    level: "Boshlang'ich",
    tags: ["Bog'lovchi", "TOPIK A1"],
    meaning: "Fe’l, sifat yoki olmoshlarga qo‘shilib ikkita yoki undan ortiq gapni bog‘laydi. O‘zbekchada 'yoki' deb tarjima qilinadi.",
    forms: ["Fe’l +거나", "Sifat +거나", "Olmosh +거나"],
    usage: "Ikkita yoki bir nechta harakatni tanlash ma’nosida qo‘llanadi.",
    examples: [
      { ko: "저는 주말에 여행을 가거나 책을 읽어요.", uz: "Men dam olish kunlari sayohat qilaman yoki kitob o‘qiyman." },
      { ko: "학교에서 공부를 하거나 운동을 합니다.", uz: "Men maktabda o‘qiyman yoki sport bilan shug‘ullanaman." },
    ],
    quiz: [
      {
        id: "q1",
        question: "주말에 영화를 보___ 음악을 들어요.",
        options: ["거나", "고", "지만"],
        correctIndex: 0,
        explain: "Ikkita harakatni tanlashda '거나' ishlatiladi.",
      },
    ],
  },
  {
    id: "ge-hada",
    title: "-게 하다 (harakat qildirmoq)",
    level: "Boshlang'ich",
    tags: ["Causative", "TOPIK A1"],
    meaning: "Fe’l va sifatga qo‘shilib, biror ishni qilinishiga sabab bo‘lish, majbur qilish yoki imkon berishni bildiradi.",
    forms: ["Fe’l +게 하다", "Sifat +게 하다"],
    usage: "Asosiy harakatni bajarishga majburlash yoki imkon berish ma’nosida ishlatiladi.",
    examples: [
      { ko: "그 소식은 나를 기쁘게 했다.", uz: "Bu xabar meni quvontirdi." },
      { ko: "TV를 볼 때는 방을 밝게 합니다.", uz: "Televizor ko‘rayotganda xonani yorug‘ qilaman." },
      { ko: "꽃병이 넘어지지 않게 하세요.", uz: "Guldonni yiqilmaydigan qilib qo‘ying." },
    ],
    quiz: [
      {
        id: "q2",
        question: "선생님이 학생들을 열심히 공부하___ 했어요.",
        options: ["게", "고", "지만"],
        correctIndex: 0,
        explain: "'게 하다' — biror ishni qildirmoq ma’nosida.",
      },
    ],
  },
  {
    id: "get",
    title: "-겠 (niyat, xohish, taxmin)",
    level: "Boshlang'ich",
    tags: ["Future", "Intention", "TOPIK A1"],
    meaning: "Kelasi zamon, niyat yoki taxminni bildiradi.",
    forms: ["Fe’l +겠", "Sifat +겠"],
    usage: "1-shaxsda xohish-istakni, 3-shaxsda esa taxminni bildiradi.",
    examples: [
      { ko: "내일 친구를 만나겠습니다.", uz: "Men ertaga do‘stimni uchrataman (uchrashaman)." },
      { ko: "내년에 한국에 가겠습니다.", uz: "Men kelasi yilda Koreyaga boraman." },
    ],
    quiz: [
      {
        id: "q3",
        question: "저는 내일 일찍 일어나___ 합니다.",
        options: ["겠", "고", "거나"],
        correctIndex: 0,
        explain: "'-겠' bu yerda niyatni bildiradi.",
      },
    ],
  },
    {
    id: "go-sipta",
    title: "-고 싶다 (xohlamoq, istamoq)",
    level: "Boshlang'ich",
    tags: ["Desire", "Intention", "TOPIK A1"],
    meaning:
      "Fe’l/sifatga qo‘shilib, so‘zlovchi yoki subyektning biror ishning sodir bo‘lishini xohlashini bildiradi.",
    forms: [
      "Fe’l/ Sifat + 고 싶다",
      "Fe’l + 고 싶어(요) / 고 싶습니다",
      "Fe’l + 고 싶지 않다 (xohlamaslik)",
      "Fe’l + 았/었으면 싶다 (kuchli tilak/ummid, ‘… bo‘lsa edi’ ma’nosi)"
    ],
    usage:
      "Shaxsiy istak/niyatni bildiradi. Ko‘p hollarda 1-shaxs bilan keladi; lekin umumiy istak ham ifodalanishi mumkin. 았/었으면 싶다 – kuchli istak yoki orzu (≈ 았/었으면 좋겠다).",
    examples: [
      { ko: "저는 꼭 유명한 사람이 되고 싶어요.", uz: "Men albatta mashhur inson bo‘lishni xohlayman." },
      { ko: "오늘은 꼭 일자리를 찾았으면 싶다.", uz: "Bugun albatta ish topsam yaxshi bo‘lardi (shuni xohlayman)." },
      { ko: "이젠 그 일에서 손을 떼었으면 싶다.", uz: "Endi bu ishga aralashmaslikni istayman." }
    ],
    quiz: [
      {
        id: "q-gosipda-1",
        question: "내년에 한국에 가___ ___.",
        options: ["고", "싶어요", "겠다"],
        correctIndex: 1, // Actually two tokens; variant: combine?
        explain:
          "To‘liq shakl: 가고 싶어요. ‘고 싶다’ – ‘borishni xohlayman’. (Agar bitta bo‘shliq bo‘lsa: 가고 싶어요 dan ‘고’ ni to‘ldiriladi)."
      },
      {
        id: "q-gosipda-2",
        question: "나는 매일 한국어를 공부하___ 싶다.",
        options: ["고", "면", "거나"],
        correctIndex: 0,
        explain: "‘…하고 싶다’ – ‘… qilishni xohlayman’."
      }
    ]
  },
  {
    id: "go-sipo-hada",
    title: "-고 싶어 하다 (3-shaxs xohishi)",
    level: "Boshlang'ich",
    tags: ["Desire", "3rd-person", "TOPIK A1"],
    meaning:
      "3-shaxsning nimanidir xohlayotganini bildiradi (‘u … qilishni xohlaydi’).",
    forms: [
      "Fe’l + 고 싶어 하다",
      "Fe’l + 고 싶어 합니다 (rsv)",
      "Fe’l + 고 싶어 하지 않다 (xohlamaslik)"
    ],
    usage:
      "‘-고 싶다’ ko‘proq 1-shaxsga xos. 3-shaxs xohishini aytganda ‘-고 싶어 하다’ ishlatiladi. Hurmatda: 고 싶어 하십니다.",
    examples: [
      { ko: "어머니는 한국에 가고 싶어 하십니다.", uz: "Onam Koreyaga borishni xohlaydi." },
      { ko: "모두가 전쟁을 끝내고 싶어 합니다.", uz: "Barcha insonlar urushni tugatishni xohlaydi." }
    ],
    quiz: [
      {
        id: "q-gosipohada-1",
        question: "민수는 내년에 유학을 가___ 싶어 해요.",
        options: ["고", "면", "겠"],
        correctIndex: 0,
        explain: "3-shaxs xohishi: ‘…고 싶어 하다’."
      }
    ]
  },
  {
    id: "go-itda",
    title: "-고 있다 (hozirgi davomiy)",
    level: "Boshlang'ich",
    tags: ["Progressive", "Aspect", "TOPIK A1"],
    meaning:
      "Fe’lga qo‘shilib, hozirgi davomiy harakatni bildiradi (‘…yapman’). Hurmat shakli: -고 계시다.",
    forms: [
      "Fe’l + 고 있다",
      "Fe’l + 고 있어요 / 고 있습니다",
      "Fe’l + 고 계시다 (hurmat)"
    ],
    usage:
      "Hozir sodir bo‘layotgan harakat yoki davomiy holatni ifodalaydi. Ko‘pincha 시간 부사alar (지금, 요즘) bilan keladi.",
    examples: [
      { ko: "저는 지금 밥을 먹고 있어요.", uz: "Men hozir ovqat yeyapman." },
      { ko: "선생님은 회의하고 계십니다.", uz: "O‘qituvchi yig‘ilish o‘tkazyapti (hurmat)." }
    ],
    quiz: [
      {
        id: "q-goitda-1",
        question: "지금 무엇을 하___ 있습니까?",
        options: ["고", "면", "거나"],
        correctIndex: 0,
        explain: "Davomiylik: ‘…하고 있다’."
      }
    ]
  },
  {
    id: "gi-ttemun-e",
    title: "-기 때문에 (…uchun, …sababli)",
    level: "Boshlang'ich",
    tags: ["Reason", "Cause", "TOPIK A1"],
    meaning:
      "Fe’l/sifat negizi + 기 때문에 — sababni bildiradi. Ot bilan (이)기 때문에 ishlatiladi.",
    forms: ["Fe’l/ Sifat + 기 때문에", "Ot + (이)기 때문에"],
    usage:
      "Ergash gap sababini ko‘rsatadi. Rasmiy va norasmiy nutqda keng. Yengil sabab ohangi uchun -아서/어서 ham ishlatiladi; -기 때문에 nisbatan rasmiyroq.",
    examples: [
      { ko: "돈이 모자랐기 때문에 그것을 살 수 없었어요.", uz: "Pulim yetmagani uchun u narsani sotib ola olmadim." },
      { ko: "그 사람과 관계가 좋지 않기 때문에 안 만나요.", uz: "U kishi bilan munosabatim yaxshi bo‘lmagani uchun uchrashmayman." },
      { ko: "그 사람은 병이기 때문에 일을 못합니다.", uz: "U odam kasal bo‘lgani uchun ishlay olmaydi." },
      { ko: "아무것도 먹을 것이 없기 때문에 시장을 봐야겠습니다.", uz: "Yeyishga hech narsa yo‘qligi sababli, bozorga borishim kerak." }
    ],
    quiz: [
      {
        id: "q-ttemune-1",
        question: "비가 오___ ___ 집에 있었어요. (yomg‘ir sabab uyda qoldim)",
        options: ["기", "때문에", "아서"],
        correctIndex: 1, // to be filled as "오기 때문에"
        explain: "Fe’l negizi + 기 때문에: 오기 때문에."
      }
    ]
  },
  {
    id: "giro-hada",
    title: "-기로 하다 (…qilishka qaror qilmoq)",
    level: "Boshlang'ich",
    tags: ["Decision", "TOPIK A1"],
    meaning:
      "Fe’l negiziga qo‘shilib, ma’lum harakatni bajarishga qaror qilinganini bildiradi.",
    forms: ["Fe’l + 기로 하다", "Fe’l + 기로 했어요/했습니다"],
    usage:
      "Shaxsiy yoki kelishilgan qarorni ifodalaydi. Salbiy qaror uchun ‘-지 않기로 하다’.",
    examples: [
      { ko: "내일 대학교에 가기로 했습니다.", uz: "Ertaga universitetga borishga qaror qildim." },
      { ko: "오늘 아침 밥은 먹지 않기로 했습니다.", uz: "Bugun nonushta qilmaslikka qaror qildim." },
      { ko: "이 일을 하기로 했습니다.", uz: "Bu ishni qilishga qaror qildim." }
    ],
    quiz: [
      {
        id: "q-giro-1",
        question: "우리는 이번 주말에 여행을 가___ 했어요.",
        options: ["거나", "기로", "겠"],
        correctIndex: 1,
        explain: "Qaror tuzilmasi: ‘V + 기로 하다’."
      }
    ]
  },
  {
    id: "gi-jeon-e",
    title: "-기 전에 (…dan oldin)",
    level: "Boshlang'ich",
    tags: ["Time", "Before", "TOPIK A1"],
    meaning:
      "Fe’l negizi + 기 전에 — keyingi ish boshlanishidan oldin bajariladigan harakatni bildiradi.",
    forms: ["Fe’l + 기 전에"],
    usage:
      "Vaqt tartibini bildiradi. Ot bilan ‘-전(에)’ ishlatiladi (식사 전(에)). Qarama-qarshi ma’no uchun ‘-고 나서, -은 후에/뒤에’.",
    examples: [
      { ko: "점심 먹기 전에 이 일을 끝냅시다.", uz: "Tushlikdan oldin bu ishni tugataylik." },
      { ko: "말을 하기 전에 먼저 생각하세요.", uz: "Gapirishdan avval o‘ylang." },
      { ko: "운동하기 전에 체조부터 해야지요.", uz: "Mashq qilishdan oldin badantarbiya qilaylik." }
    ],
    quiz: [
      {
        id: "q-jone-1",
        question: "자기 ___ ___ 휴대폰을 끄세요. (uxlashdan oldin)",
        options: ["기", "전에", "후에"],
        correctIndex: 1, // to be "자기 전에"
        explain: "‘…dan oldin’ — V + 기 전에: 자기 전에."
      }
    ]
  },
  {
    id: "kkaji",
    title: "까지 (…gacha / hatto)",
    level: "Boshlang'ich",
    tags: ["Particle", "Time-Place", "Additive", "TOPIK A1"],
    meaning:
      "Vaqt/joyning oxirgi nuqtasini bildiradi: ‘…gacha’. Ba’zan ‘hatto, ham’ ma’nosini ham beradi. ‘~부터 … 까지’ — ‘…dan … gacha’.",
    forms: [
      "Ot + 까지 (vaqt/joy oxiri)",
      "Ot + 까지 (hatto/ham ma’nosi)",
      "Ot + 부터 + Ot + 까지 (…dan … gacha)"
    ],
    usage:
      "1) Vaqt/joyning chegarasi: ‘kechgacha, uydangacha’. 2) Qo‘shimcha, kuchaytirish: ‘hatto kofe ham’. 3) ‘부터~까지’ jufti bilan boshlangan nuqtadan oxirigacha.",
    examples: [
      { ko: "어제 밤늦게까지 책을 보았습니다.", uz: "Kecha yarim tungacha kitob o‘qidim." },
      { ko: "다시 만날 때까지 안녕히 계십시오.", uz: "Yana uchrashgungacha yaxshi qoling." },
      { ko: "비가 오고 바람까지 불어요.", uz: "Yomg‘ir yog‘ayapti, buning ustiga (hatto) shamol ham esayapti." },
      { ko: "집에서부터 지하철역까지 걸어 다닙니다.", uz: "Uyidan metroga piyoda qatnayman." },
      { ko: "12시부터 2시까지가 점심시간입니다.", uz: "Soat 12dan 2gacha tushlik vaqti." }
    ],
    quiz: [
      {
        id: "q-kkaji-1",
        question: "우리는 5시___ 회의를 합니다. (soat 5 gacha)",
        options: ["까지", "부터", "에게"],
        correctIndex: 0,
        explain: "Oxirgi nuqta ‘… gacha’ — 까지."
      },
      {
        id: "q-kkaji-2",
        question: "서울___ 부산___ 기차로 갑니다. (Seuldan Pusangacha)",
        options: ["부터, 까지", "까지, 부터", "에게, 까지"],
        correctIndex: 0,
        explain: "Boshlanish + tugash: ‘A부터 B까지’."
      }
    ]
  },
  {
    id: "adnominal-neun-eun-eul",
    title: "관형사형: -는/-(으)ㄴ/-(으)ㄹ + 명사",
    level: "Boshlang'ich",
    tags: ["Modifier", "Relative-clause", "TOPIK A1"],
    meaning:
      "Fe’l/sifat/nomga qo‘shilib, keyingi otni aniqlaydi: ‘ketayotgan odam’, ‘ketgan odam’, ‘boradigan odam’.",
    forms: [
      "Fe’l (hozirgi) + 는: 가는 사람 (ketayotgan odam)",
      "Fe’l (o‘tgan) + -(으)ㄴ: 간 사람 / 먹은 음식 (ketgan/ yegan …)",
      "Fe’l (kelasi) + -(으)ㄹ: 갈 사람 / 먹을 음식 (boradigan/ yeydigan …)",
      "Sifat (hozirgi) + -(으)ㄴ: 예쁜 아이, 높은 산 (chiroyli bola, baland tog‘)",
      "Ot + 이다 → 인: 학생인 사람 (talaba bo‘lgan kishi)"
    ],
    usage:
      "Fe’l zamoniga ko‘ra -는/-ㄴ, -(으)ㄴ, -(으)ㄹ tanlanadi; sifatlar hozirgi holatda -(으)ㄴ bilan; ‘이다’ ning aniqlovchi shakli ‘인’. Nutqda aniqlovchi + ot birikadi.",
    examples: [
      { ko: "가는 사람", uz: "ketayotgan odam" },
      { ko: "간 사람", uz: "ketgan odam" },
      { ko: "갈 사람", uz: "boradigan odam" },
      { ko: "맛있는 음식", uz: "mazali taom" },
      { ko: "학생인 안드레이", uz: "talaba bo‘lgan Andrey" }
    ],
    quiz: [
      {
        id: "q-adnom-1",
        question: "어제 ___ 영화 (kecha ko‘rgan film)",
        options: ["보는", "본", "볼"],
        correctIndex: 1,
        explain: "O‘tgan zamon fe’li → -(으)ㄴ: 본 영화."
      },
      {
        id: "q-adnom-2",
        question: "내일 ___ 사람을 만나겠다. (ertaga uchrashadigan odam)",
        options: ["만나는", "만난", "만날"],
        correctIndex: 2,
        explain: "Kelasi/niyat → -(으)ㄹ: 만날 사람."
      },
      {
        id: "q-adnom-3",
        question: "___ 아이가 웃고 있어요. (chiroyli bola)",
        options: ["예쁘는", "예쁜", "예쁠"],
        correctIndex: 1,
        explain: "Sifat hozirgi → -(으)ㄴ: 예쁜."
      }
    ]
  },
  {
    id: "geot-gata",
    title: "-(으)ㄴ/는/(으)ㄹ 것 같다 (…ga o‘xshaydi / taxmin)",
    level: "Boshlang'ich",
    tags: ["Guess", "Inference", "TOPIK A1"],
    meaning:
      "Kuzatuv yoki dalilga tayangan holda taxmin bildiradi: “ga o‘xshaydi, shekilli”.",
    forms: [
      "Fe’l (o‘tgan) + -(으)ㄴ 것 같다  → 비가 온 것 같아요",
      "Fe’l (hozirgi) + -는 것 같다      → 비가 오는 것 같아요",
      "Fe’l (kelasi) + -(으)ㄹ 것 같다  → 비가 올 것 같아요",
      "Sifat (hozirgi) + -(으)ㄴ 것 같다 → 예쁜 것 같아요",
      "Ot + 인 것 같다                 → 학생인 것 같아요"
    ],
    usage:
      "Nutqda yumshoq taxmin ohangi beradi. Rasmiy shakllar: …것 같습니다. Salbiyda: …것 같지 않다.",
    examples: [
      { ko: "비가 온 것 같습니다.", uz: "Yomg‘ir yog‘ganga o‘xshaydi." },
      { ko: "비가 오는 것 같습니다.", uz: "Yomg‘ir yog‘ayotganga o‘xshaydi." },
      { ko: "비가 올 것 같습니다.", uz: "Yomg‘ir yog‘adiganga o‘xshaydi." }
    ],
    quiz: [
      {
        id: "q-geotgata-1",
        question: "그 영화가 재미있___ ___요. (qiziq shekilli)",
        options: ["는", "은 것 같", "을 것 같"],
        correctIndex: 1, // 재미있는 것 같아요
        explain: "Sifat + -(으)ㄴ 것 같다: 재미있는 것 같아요."
      }
    ]
  },
  {
    id: "nim-honorific",
    title: "-님 (hurmat qo‘shimchasi)",
    level: "Boshlang'ich",
    tags: ["Honorific", "Noun-suffix", "TOPIK A1"],
    meaning:
      "Insonni hurmat bilan atash uchun otga qo‘shiladi: ‘janob/xon’ ma’nosi.",
    forms: ["Ot + 님 (선생님, 아버님, 사장님…)", "Ot + 님들 (ko‘plik hurmati)"],
    usage:
      "Kasb-lavozim va qarindoshlik otlariga qo‘shiladi: 선생님 (o‘qituvchi), 아버님 (ota, hurmat), 학장님 (dekan). Odatda suhbatdosh yoki uchinchi shaxsni hurmatlab atashda ishlatiladi.",
    examples: [
      { ko: "우리 선생님은 아주 친절한 사람입니다.", uz: "Bizning o‘qituvchimiz juda odobli inson." },
      { ko: "형님은 산에 자주 갑니다.", uz: "Akam tog‘ga tez-tez borib turadilar." },
      { ko: "아버님이 편찮으십니다.", uz: "Otaning mazalari yo‘q (hurmat)." }
    ],
    quiz: [
      {
        id: "q-nim-1",
        question: "회사 ___께서 회의를 시작합니다. (direktor janoblari)",
        options: ["사장", "사장님", "사장씨"],
        correctIndex: 1,
        explain: "Hurmat qo‘shimchasi: 사장님."
      }
    ]
  },
  {
    id: "daga",
    title: "-다가 (…yapib turib / …paytda – keyin)",
    level: "Boshlang'ich",
    tags: ["Sequence", "Interruption", "TOPIK A1"],
    meaning:
      "Bir harakat davomida boshqa harakat boshlanishi sababli **birinchi harakat to‘xtashi yoki almashishini** bildiradi (‘…qilayotganimda … bo‘ldi’).",
    forms: [
      "Fe’l + 다가 → 먹다가, 가다가",
      "Fe’l + 다(가) + o‘tgan zamon → 먹다가 전화를 받았어요",
      "Salbiy qaror: V-지 않다가 (kamroq)"
    ],
    usage:
      "Ergash va bosh gapdagi ish-harakat odatda **bir subyekt** tomonidan bajariladi. Ko‘p qo‘llanadigan naqsh: A 하다가 B 했어요.",
    examples: [
      { ko: "밥을 먹다가 전화를 받았어요.", uz: "Ovqat yeyotganimda telefon qabul qildim." },
      { ko: "학교에 가다가 친구를 만났어요.", uz: "Maktabga borayotib do‘stimga uchrab qoldim." }
    ],
    quiz: [
      {
        id: "q-daga-1",
        question: "책을 읽___ 잠이 들었어요. (o‘qiy turib uxlab qoldim)",
        options: ["다가", "으면", "거나"],
        correctIndex: 0,
        explain: "A paytida B ro‘y berdi: 읽다가 잠이 들었어요."
      }
    ]
  },
   {
    id: "deul-plural",
    title: "-들 (ko‘plik qo‘shimchasi)",
    level: "Boshlang'ich",
    tags: ["Particle", "Plural", "TOPIK A1"],
    meaning:
      "Otga qo‘shilib ko‘plikni bildiradi: ‘…lar’. Ba’zan tinglovchilar guruhiga murojaat ohangini ham beradi (어서들 오세요).",
    forms: [
      "Ot + 들 → 학생들, 사람들",
      "Olmosh + 들 → 우리들, 너희들",
      "Buyruq/iltimosda guruhga murojaat: 어서들 오세요, 조용히들 하세요"
    ],
    usage:
      "1) Ko‘plik aniq ko‘rinib turganda (son, ‘많이’ va h.k.) ‘들’ ko‘pincha qo‘shilmaydi. 2) Sanalmaydigan yoki umumiy sinf nomlariga odatda qo‘shilmaydi. 3) ‘가족들/친구들’ kabi, to‘plam ichidagi alohida a’zolarni nazarda tutganda ishlatiladi.",
    examples: [
      { ko: "학생들이 교실에 있어요.", uz: "Talabalar sinfxonada." },
      { ko: "우리 가족들은 모두 타슈켄트에 살아요.", uz: "Oilamizning barchasi Toshkentda yashaydi." },
      { ko: "사람들은 그 소식을 좋아했어요.", uz: "Odamlar bu xabarni yoqtirishdi." },
      { ko: "모두들 그 사람을 좋아합니다.", uz: "Barchasi u odamni yaxshi ko‘radi." },
      { ko: "어서들 오세요 / 재미있게들 노세요.", uz: "Marhamat, barchangiz kiring / Yaxshi hordiq chiqaring, barchangiz." }
    ],
    quiz: [
      {
        id: "q-deul-1",
        question: "교실에 학생___ 많아요.",
        options: ["들", "이", "에"],
        correctIndex: 0,
        explain: "Ko‘plikni bildiradi: 학생들."
      },
      {
        id: "q-deul-2",
        question: "10명 ___ 왔어요. (son ko‘rsatilgan — ‘들’ kerakmi?)",
        options: ["들이", "이", "을"],
        correctIndex: 1,
        explain: "Son ko‘rsatilganda ‘들’ odatda qo‘shilmaydi: 10명이."
      },
      {
        id: "q-deul-3",
        question: "_____ 조용히 하세요! (guruhga murojaat)",
        options: ["모두들", "모두가 들", "모두에"],
        correctIndex: 0,
        explain: "Guruhga: ‘모두들 조용히 하세요’."
      }
    ]
  },
  {
    id: "ttemune-noun",
    title: "N + 때문에 (… sababli / … tufayli)",
    level: "Boshlang'ich",
    tags: ["Reason", "Cause", "TOPIK A1"],
    meaning:
      "Ot + 때문에 — ‘… sababli/ tufayli’ ma’nosida. Ijobiy sabab uchun ko‘pincha ‘덕분에’ ishlatiladi.",
    forms: [
      "Ot + 때문에 → 비 때문에, 건강 문제 때문에",
      "Olmosh + 때문에 → 나/너/우리 때문에",
      "Ot + 때문(이)다 (gap oxirida ta’kid)"
    ],
    usage:
      "Vaqea-hodisaning sababini ot bilan ifodalaydi. Shaxs aybi ohangida ham keladi: ‘너 때문에 늦었어’. Fe’l bilan sabab aytmoqchi bo‘lsangiz ‘V + 기 때문에’ yoki ‘-아서/어서’ ishlatiladi.",
    examples: [
      { ko: "비 때문에 경기가 취소되었어요.", uz: "Yomg‘ir sabab o‘yin bekor qilindi." },
      { ko: "교통체증 때문에 지각했어요.", uz: "Tirbandlik sabab kechikdim." },
      { ko: "건강 문제 때문에 한국에 못 갔어요.", uz: "Sog‘liq muammosi sabab Koreyaga bora olmadim." },
      { ko: "너 때문에 늦었잖아.", uz: "SEN sabab kechikdim-ku." }
    ],
    quiz: [
      {
        id: "q-ttemuneN-1",
        question: "감기 ___ 학교에 못 갔어요.",
        options: ["때문에", "기 때문에", "으로"],
        correctIndex: 0,
        explain: "Ot bilan: N + 때문에."
      },
      {
        id: "q-ttemuneN-2",
        question: "비 ___ 행사가 연기됐습니다. (yomg‘ir tufayli tadbir kechiktirildi)",
        options: ["때문에", "부터", "까지"],
        correctIndex: 0,
        explain: "Sabab — ‘비 때문에’."
      },
      {
        id: "q-ttemuneN-3",
        question: "Ijobiy sababni tanlang: ‘선생님 ___ 한국어가 많이 늘었어요.’",
        options: ["때문에", "덕분에", "밖에"],
        correctIndex: 1,
        explain: "Ijobiy/rahmat ohangi: 덕분에."
      }
    ]
  },
    {
    id: "mada-every",
    title: "-마다 (har/har bir/…sayin)",
    level: "Boshlang'ich",
    tags: ["Particle", "Frequency", "TOPIK A1"],
    meaning:
      "Otga qo‘shilib ‘har, har bir’ ma’nosini beradi; vaqt/bosqich takrorlanishini yoki ‘har safar …da’ ma’nosini bildiradi.",
    forms: [
      "Ot + 마다 → 날마다 (har kuni), 주말마다 (har hafta oxiri), 사람마다 (har bir odam)",
      "Vaqt birligi + 마다 → 한 시간마다, 두 달마다",
      "Joy/holat + 마다 (kamroq): 자리마다, 집마다"
    ],
    usage:
      "Takroriylikni ko‘rsatadi: ‘har kuni’, ‘har marta’. Shaxs/katta guruhlarga qo‘shilganda ‘har bir’ ma’nosi: 사람마다, 나라마다.",
    examples: [
      { ko: "날마다 운동을 합니다.", uz: "Har kuni sport bilan shug‘ullanaman." },
      { ko: "사람마다 성격이 달라요.", uz: "Har bir odamning fe’l-atvori turlicha." },
      { ko: "나라마다 문화가 달라요.", uz: "Har bir davlatning madaniyati turlicha." }
    ],
    quiz: [
      {
        id: "q-mada-1",
        question: "주말___ 한국어를 공부해요. (har hafta oxiri)",
        options: ["마다", "부터", "까지"],
        correctIndex: 0,
        explain: "Takroriylik: 주말마다."
      },
      {
        id: "q-mada-2",
        question: "‘Har ikki oyda’ iborasini tanlang.",
        options: ["두 달밖에", "두 달마다", "두 달보다"],
        correctIndex: 1,
        explain: "마다 — ‘har/…sayin’."
      }
    ]
  },
  {
    id: "bakke-only-neg",
    title: "명사 + 밖에 (faqat/undan boshqa emas — **inkor bilan**)",
    level: "Boshlang'ich",
    tags: ["Restriction", "Negative", "TOPIK A1"],
    meaning:
      "‘…dan boshqa (hech narsa/kim) yo‘q’, ‘faqat … xolos’ — **doimo inkor** fe’l yoki ‘없다/모르다/못…/안…’ bilan keladi.",
    forms: [
      "N + 밖에 + 없다/모르다/못/안 … → 천 원밖에 없어요.",
      "Ijobiy fe’l bilan kelmaydi (*xatо: 밖에 있어요)."
    ],
    usage:
      "Cheklov, kamlik ohangi. Ijobiy sabab yoki oddiy ‘faqat’ uchun ‘만’을 ishlating (N + 만).",
    examples: [
      { ko: "너 밖에 없다.", uz: "Sendan boshqa hech kim yo‘q." },
      { ko: "저 사람은 자기 밖에 몰라요.", uz: "U odam o‘zidan boshqasini bilmaydi (faqat o‘zini o‘ylaydi)." },
      { ko: "천 원밖에 없어요.", uz: "Menda ming vonnadan boshqa (faqat) yo‘q." }
    ],
    quiz: [
      {
        id: "q-bakke-1",
        question: "시간이 10분___ ___요. (faqat 10 daqiqa bor)",
        options: ["밖에, 없어요", "만, 있어요", "밖에, 있어요"],
        correctIndex: 0,
        explain: "밖에 doimo inkor bilan: 밖에 없어요."
      },
      {
        id: "q-bakke-2",
        question: "To‘g‘ri variantni tanlang.",
        options: [
          "학생밖에 있어요 (✅/❌)",
          "학생밖에 없어요 (✅/❌)",
          "학생만 있어요 (✅/❌)"
        ],
        correctIndex: 1,
        explain:
          "‘밖에’ ijobiy fe’l bilan kelmaydi. To‘g‘rilar: 학생밖에 없어요 / 학생만 있어요."
      }
    ]
  },
  {
    id: "boda-than",
    title: "명사 + 보다 (…dan — qiyoslash)",
    level: "Boshlang'ich",
    tags: ["Comparison", "Adverb 더/덜", "TOPIK A1"],
    meaning:
      "Ikki narsa/holatni solishtirish: ‘A보다 B (더/덜) …’ — ‘Aga qaraganda B ko‘proq/kamroq …’.",
    forms: [
      "N1 + 보다 + N2 + 이/가 + 더/덜 + A/V → 수학보다 역사가 더 재미있어요.",
      "Vaqt/maqom qiyosi: 겨울보다 봄에, 예전보다 지금"
    ],
    usage:
      "Qiyoslovda ‘더 (ko‘proq)’ va ‘덜 (kamroq)’ ko‘p ishlatiladi, lekin ayrim sifatlarda tushib qolishi ham mumkin (‘A보다 B 크다’).",
    examples: [
      { ko: "수학보다 역사가 더 재미있어요.", uz: "Matematikaga qaraganda tarix qiziqroq." },
      { ko: "겨울보다 봄에 비가 많이 와요.", uz: "Qishga qaraganda bahorda yomg‘ir ko‘p yog‘adi." },
      { ko: "어제보다 오늘이 덜 추워요.", uz: "Kecha­ga qaraganda bugun uncha sovuq emas (kamroq sovuq)." }
    ],
    quiz: [
      {
        id: "q-boda-1",
        question: "한국어___ 일본어___ 더 어려워요. (Koreys tili yapon tilidan qiyinroq)",
        options: ["보다, 가", "보다, 이", "에서, 가"],
        correctIndex: 1,
        explain: "Qiyoslash: 일본어가 / 한국어보다 일본어가 더 어려워요."
      },
      {
        id: "q-boda-2",
        question: "Bo‘shliqni to‘ldiring: ‘지난주___ 이번 주가 더 바빠요.’",
        options: ["보다", "부터", "까지"],
        correctIndex: 0,
        explain: "Qiyos: 지난주보다 이번 주가 더 바빠요."
      }
    ]
  },
  {
    id: "buteo-from",
    title: "명사 + 부터 (…dan boshlab / …dan beri)",
    level: "Boshlang'ich",
    tags: ["Time", "Start point", "TOPIK A1"],
    meaning:
      "Vaqt (ba’zan joy) nuqtasidan ‘boshlab’ ma’nosini bildiradi. Ko‘pincha ‘…까지’ bilan juft keladi.",
    forms: [
      "Vaqt + 부터 → 아침부터, 새벽부터, 지금부터",
      "Joy + 에서/부터 (boshlanish) → 집에서/집부터",
      "…부터 …까지 (…dan …gacha)"
    ],
    usage:
      "Vaqt startini ta’kidlash uchun ‘부터’ eng tabiiy. Joy startida odatiy ‘에서’, lekin og‘zaki nutqda ‘부터’ ham ishlatiladi. ‘N부터 V’ — ‘avval N…’ (ustuvorlik).",
    examples: [
      { ko: "오늘 새벽부터 음식을 준비했어요.", uz: "Bugun erta tongdan ovqat tayyorladim." },
      { ko: "점심부터 회의가 있어요.", uz: "Tushlikdan boshlab yig‘ilish bor." },
      { ko: "손부터 씻고 먹어.", uz: "Avval qo‘lingni yuvib keyin ye." }
    ],
    quiz: [
      {
        id: "q-buteo-1",
        question: "수업은 9시___ 12시___ 입니다.",
        options: ["부터, 까지", "에서, 에", "으로, 부터"],
        correctIndex: 0,
        explain: "Boshlanish–tugash: ‘…부터 …까지’."
      },
      {
        id: "q-buteo-2",
        question: "‘Hozirdan boshlab’ to‘g‘ri varianti:",
        options: ["지금에서", "지금부터", "지금까지"],
        correctIndex: 1,
        explain: "Start nuqtasi — ‘지금부터’."
      }
    ]
  },

  {
    id: "seubnikka-formal-q",
    title: "(스)ㅂ니까? — rasmiy savol ohangi",
    level: "Boshlang'ich",
    tags: ["Polite formal", "Ending", "TOPIK A1"],
    meaning:
      "Rasmiy-muloyim (격식체) savol tugashi. Undoshdan keyin ‘습니까?’, unli bilan tugasa ‘ㅂ니까?’ qo‘shiladi.",
    forms: [
      "Fe’l/sifat + 습니까? (undosh) → 먹습니까?, 좋습니까?",
      "Fe’l/sifat + ㅂ니까? (unli) → 가십니까?, 큽니까?",
      "하다 → 합니까?"
    ],
    usage:
      "Yangiliklarda, e’lonlarda, xizmat ko‘rsatishda rasmiy savol. So‘zlashuvda ‘-아요/어요?’ ko‘proq.",
    examples: [
      { ko: "돈이 있습니까?", uz: "Pulingiz bormi?" },
      { ko: "그 친구가 옵니까?", uz: "O‘sha do‘st keladimi?" },
      { ko: "언제 출발합니까?", uz: "Qachon yo‘lga chiqasiz?" }
    ],
    quiz: [
      {
        id: "q-seubnikka-1",
        question: "빈칸: 어디에 살___?",
        options: ["습니까", "ㅂ니까", "습니까?"],
        correctIndex: 2,
        explain: "Savol tugashi to‘liq yoziladi: 살습니까?"
      },
      {
        id: "q-seubnikka-2",
        question: "하다 fe’li bilan to‘g‘ri shakl:",
        options: ["하습니까?", "합니까?", "해습니까?"],
        correctIndex: 1,
        explain: "하다 → 합니다/합니까? (ㅂ니다/ㅂ니까 yo‘li bilan)."
      }
    ]
  },

  {
    id: "seubnida-formal-dec",
    title: "(스)ㅂ니다/ㅂ니다 — rasmiy darak ohangi",
    level: "Boshlang'ich",
    tags: ["Polite formal", "Ending", "TOPIK A1"],
    meaning:
      "Rasmiy-muloyim darak (bayon) tugashi. Undoshdan keyin ‘습니다’, unlidan keyin ‘ㅂ니다’.",
    forms: [
      "Fe’l/sifat + 습니다 (undosh) → 먹습니다, 좋습니다",
      "Fe’l/sifat + ㅂ니다 (unli) → 큽니다, 갑니다",
      "하다 → 합니다",
      "O‘tgan zamon: V-았/었습니다 → 갔습니다 / 먹었습니다",
      "Kelasi/iroda: V-겠습니다 → 하겠습니다"
    ],
    usage:
      "Yangilik, rasmiy nutq, matbuot. Oddiy suhbatsiz ohangda ‘-아요/어요’ ishlatiladi.",
    examples: [
      { ko: "한국 친구가 많습니다.", uz: "Koreyalik do‘stlarim ko‘p." },
      { ko: "학생이 질문합니다.", uz: "Talaba savol bermoqda." },
      { ko: "내일 발표하겠습니다.", uz: "Ertaga taqdimot qilaman (rasmiy)."}
    ],
    quiz: [
      {
        id: "q-seubnida-1",
        question: "빈칸: 저는 한국어를 공부___ .",
        options: ["합니다", "합니까", "했습니까"],
        correctIndex: 0,
        explain: "Darak: ‘합니다’."
      },
      {
        id: "q-seubnida-2",
        question: "O‘tgan zamon rasmiy: ‘어제 영화를 보…’.",
        options: ["봅니다", "보았습니다", "보겠습니다"],
        correctIndex: 1,
        explain: "Past formal: 보았습니다."
      }
    ]
  },

  {
    id: "a-eo-boda-try",
    title: "-아/어 보다 (… qilib ko‘rmoq / sinab ko‘rmoq)",
    level: "Boshlang'ich",
    tags: ["Attempt", "Suggestion", "TOPIK A1"],
    meaning:
      "Harakatni ‘sinab ko‘rish’, ‘urinish’ ma’nosini bildiradi. Buyruq/iltimosda ‘-아/어 보세요’.",
    forms: [
      "A/O uyg‘unligi: 가 보다(X) → 가 보다 — *odatda ‘가 보다’ tajribaga nisbatan kam; ‘가 보세요/가 봤어요’ odatiy*",
      "먹다 → 먹어 보다 / 입다 → 입어 보다 / 해 보다",
      "Iltimos: V-아/어 보세요",
      "Tajriba: V-아/어 본 적이 있다/없다 (A2+)"
    ],
    usage:
      "Biror narsani sinab ko‘rishni taklif qilish yoki o‘zi uringanini aytish. Ko‘pincha bir marta/‘한번’ bilan: ‘한번 먹어 보세요’.",
    examples: [
      { ko: "이 옷 한번 입어 보세요.", uz: "Bu kiyimni bir marta kiyib ko‘ring." },
      { ko: "김치를 먹어 보고 싶어요.", uz: "Kimchini yemlab ko‘rishni xohlayman." },
      { ko: "그 앱을 써 봤어요.", uz: "O‘sha ilovani ishlatib ko‘rganman." }
    ],
    quiz: [
      {
        id: "q-aeoboda-1",
        question: "‘Bir marta eshitib ko‘ring’ — to‘g‘ri variant:",
        options: ["들어 보세요", "듣어 보세요", "들으세요 보다"],
        correctIndex: 0,
        explain: "듣다 → 들어 보세요 (불규칙)."
      },
      {
        id: "q-aeoboda-2",
        question: "Bo‘shliq: 한국 음식을 먹어 ___ 싶어요.",
        options: ["보는", "보려", "보고"],
        correctIndex: 2,
        explain: "V-고 싶다 bilan: 먹어 보고 싶어요."
      }
    ]
  },
  {
    id: "aeo-seo",
    title: "-아/어서 (…ib; …gani uchun)",
    level: "Boshlang'ich",
    tags: ["Connector", "Reason", "Sequence", "TOPIK A1"],
    meaning:
      "1) Ketma-ket harakatni bog‘laydi: ‘…ib/…-ib’. 2) Sabab-ni bildiradi: ‘…gani uchun’.",
    forms: [
      "ㅏ/ㅗ → -아서 (가서, 와서, 좋아서)",
      "boshqa unlilar → -어서 (먹어서, 적어서, 어려워서)",
      "하다 → 해서",
      "QOIDALAR: -아/어서 ergash qismida o‘tgan/kelasi zamon ko‘rsatkichi qo‘shilmaydi; buyruq/iltimos/prositiv bilan odatda kelmaydi."
    ],
    usage:
      "1) Birinchi harakat ikkinchisidan AVVAL: ‘도서관에 가서 책을 빌려요’. 2) Sabab: ‘비가 와서 못 가요’. Ko‘proq og‘zaki va neytral ohang.",
    examples: [
      { ko: "도서관에 가서 책을 빌려 옵니다.", uz: "Kutubxonaga borib kitob olib kelaman." },
      { ko: "줄을 서서 기다려 주세요.", uz: "Navbatga turib kuting (iltimos)." },
      { ko: "표가 없어서 그 영화를 못 봤어요.", uz: "Chipta bo‘lmagani uchun o‘sha kinoni ko‘ra olmadim." },
      { ko: "아이가 넘어져서 울고 있습니다.", uz: "Bola yiqilib ketgani uchun yig‘layapti." }
    ],
    quiz: [
      {
        id: "q-aeoseo-1",
        question: "빈칸: 밥을 먹___ 약을 드세요. (ketma-ketlik)",
        options: ["어서", "고", "지만"],
        correctIndex: 0,
        explain: "‘…하고 나서’ ma’nosi: 먹어서 약을 드세요 (avval ovqatlanib, keyin dori oling)."
      },
      {
        id: "q-aeoseo-2",
        question: "Sabab: 비___ 못 갔어요.",
        options: ["라서", "여서", "가서"],
        correctIndex: 1,
        explain: "비 + -어서 → 비어서 emas; ‘비가 와서’ to‘liq shakl — ‘yomg‘ir yog‘gani uchun’."
      }
    ]
  },

  {
    id: "aeo-yahae-oyal",
    title: "-아/어야 되다/하다 (… qilishi kerak)",
    level: "Boshlang'ich",
    tags: ["Obligation", "Necessity", "TOPIK A1"],
    meaning:
      "Majburiyat/zaruratni bildiradi: ‘… qilishi kerak’. ‘-아/어도 되다’ — ‘… qilsa bo‘ladi’ (ruxsat).",
    forms: [
      "V + -아/어야 되다/하다 → 가야 돼요/가야 해요",
      "Inkori: V + -지 않아도 되다 (kerak emas) → 가지 않아도 돼요",
      "Ko‘pincha ‘-려면 … -아/어야 해요’ konstruktsiyasi bilan"
    ],
    usage:
      "Qoidalar, talablar, tavsiyalar. ‘되다’ og‘zaki, ‘하다’ biroz rasmiyroq ohang.",
    examples: [
      { ko: "어른에게는 존댓말을 사용해야 합니다.", uz: "Kattalarga hurmat ohangida gapirish kerak." },
      { ko: "외국에 가려면 여권이 있어야 해요.", uz: "Chet elga borish uchun pasport bo‘lishi kerak." },
      { ko: "영화를 보려면 표를 미리 사야 돼요.", uz: "Kino ko‘rmoqchi bo‘lsangiz, chiptani oldindan olishingiz kerak." },
      { ko: "담배를 피우고 싶으면 밖에 나가야 합니다.", uz: "Chekishni xohlasangiz, tashqariga chiqishingiz kerak." }
    ],
    quiz: [
      {
        id: "q-oya-1",
        question: "빈칸: 내일까지 숙제를 끝내___ 합니다.",
        options: ["야", "어야", "아서"],
        correctIndex: 1,
        explain: "끝내 + 어야 하다 → ‘끝내어야/끝내야’ (og‘zaki ‘끝내야’)."
      },
      {
        id: "q-oya-2",
        question: "Ruxsat (kerak emas): 오늘은 일하지 ___ 돼요.",
        options: ["않아야", "않아도", "어도"],
        correctIndex: 1,
        explain: "‘-지 않아도 되다’ — ‘qilmasa ham bo‘ladi’."
      }
    ]
  },

  {
    id: "aeo-juda-benefactive",
    title: "-아/어 주다 · -아/어 드리다 (… qilib bermoq)",
    level: "Boshlang'ich",
    tags: ["Benefactive", "Politeness", "Request/Offer", "TOPIK A1"],
    meaning:
      "Biror ishni ‘kim uchundir qilib berish’. ‘주다’ — odatiy; ‘드리다’ — hurmat ohangi (kattaga xizmat).",
    forms: [
      "V + -아/어 주다 → 도와 주다, 설명해 주다",
      "Hurmatli: V + -아/어 드리다 → 도와 드리다, 안내해 드리다",
      "Iltimos: V-아/어 주세요 / V-아/어 주시겠어요?",
      "Taklif/va’da: V-아/어 드릴게요 (siz uchun qilib beraman)"
    ],
    usage:
      "Kamtarin yordam so‘rash/berish. Kattaga yoki mijozga ‘드리다’ ishlatiladi.",
    examples: [
      { ko: "문 좀 열어 주세요.", uz: "Iltimos, eshikni ochib bering." },
      { ko: "한국어로 설명해 주세요.", uz: "Koreys tilida tushuntirib bering." },
      { ko: "짐을 들어 드릴게요.", uz: "Yukingizni ko‘tarib beraman." },
      { ko: "도와 드릴까요?", uz: "Yordam beraymi?" }
    ],
    quiz: [
      {
        id: "q-juda-1",
        question: "Hurmatli taklif: 자리로 안내해 ___까요?",
        options: ["주세요", "드릴", "드릴"],
        correctIndex: 2,
        explain: "Taklif/va’da: ‘안내해 드릴까요?’ (드리다 + ㄹ까요)."
      },
      {
        id: "q-juda-2",
        question: "To‘g‘ri iltimos shakli: 사진을 보내 ___ .",
        options: ["줘요", "주실래요?", "주세요"],
        correctIndex: 2,
        explain: "Muloyim iltimos: ‘… 보내 주세요’."
      }
    ]
  },
    {
    id: "an-negation",
    title: "안 + V/A (qisqa inkor)",
    level: "Boshlang'ich",
    tags: ["Negation", "Adverb", "TOPIK A1"],
    meaning:
      "‘안’ — fe’l yoki sifat oldidan kelib, ‘qilmaydi/yo‘q’ ma’nosini beradi. Ko‘proq kundalik nutqda.",
    forms: [
      "안 + 동사/형용사 → 안 가요, 안 먹어요, 안 예뻐요",
      "Birikma fe’l: ‘공부하다’ → ‘공부 안 해요’ (odatda ‘안 공부해요’ emas)",
      "⚠️ ‘못’ = qila OLMASLIK (qobiliyat/holat); ‘안’ = QILMASLIK (ixtiyor)",
      "⚠️ ‘있다/없다’ inkorida ‘없다’ ishlatiladi: ‘시간 없어요’. ‘아니다’ — ot inkori: ‘학생이 아니에요’"
    ],
    usage:
      "Savolga rad javob, odatlar, rejani inkor etish. Rasmiysi: ‘~지 않습니다’.",
    examples: [
      { ko: "지금 비가 와요? — 아니요, 비가 안 와요.", uz: "Hozir yomg‘ir yog‘yaptimi? — Yo‘q, yomg‘ir yog‘mayapti." },
      { ko: "숙제를 했어요? — 아니요, 숙제를 안 했어요.", uz: "Uy vazifasini bajardingizmi? — Yo‘q, bajarmadim." },
      { ko: "주말에 운동 안 해요.", uz: "Dam olishda sport bilan shug‘ullanmayman." }
    ],
    quiz: [
      {
        id: "q-an-1",
        question: "빈칸: 저는 커피를 ___ 마셔요. (ichmayman)",
        options: ["못", "안", "아니"],
        correctIndex: 1,
        explain: "Ixtiyoriy inkor — ‘안’. ‘못’ qila olmaslik ma’nosi."
      },
      {
        id: "q-an-2",
        question: "To‘g‘ri inkor: 저는 학생___.",
        options: ["안이에요", "아니에요", "없어요"],
        correctIndex: 1,
        explain: "Ot inkori ‘아니다’: ‘학생이 아니에요’."
      }
    ]
  },

  {
    id: "past-aseo-eoseo",
    title: "-았/었- (o‘tgan zamon)",
    level: "Boshlang'ich",
    tags: ["Tense", "Conjugation", "TOPIK A1"],
    meaning:
      "Harakat/sifatning o‘tgan paytda sodir bo‘lganini bildiradi.",
    forms: [
      "ㅏ/ㅗ → -았- : 가다→갔어요, 오다→왔어요, 좋다→좋았어요",
      "boshqa unlilar → -었- : 먹다→먹었어요, 읽다→읽었어요, 배우다→배웠어요",
      "하다 → 했- : 하다→했어요/했습니다",
      "Rasmiysi: -았습니다/-었습니다; yozma: -았다/-었다"
    ],
    usage:
      "Kecha/oldin bo‘lgan ishlar, tajriba. Javoblarda ko‘p ishlatiladi.",
    examples: [
      { ko: "지난 주말에 소포를 받았어요.", uz: "O‘tgan dam olishda posilkani oldim." },
      { ko: "어제 영화 봤어요?", uz: "Kecha kino ko‘rdingizmi?" },
      { ko: "유학을 해서 한국어 숙제를 했어요.", uz: "Ta’lim uchun chetga ketib koreys u vazifasini bajardim." },
      { ko: "어제 일찍 잤어요.", uz: "Kecha erta uxladim." }
    ],
    quiz: [
      {
        id: "q-past-1",
        question: "‘먹다’ fe’lini o‘tgan zamonda to‘g‘ri tanlang:",
        options: ["먹았어요", "먹였어요", "먹했어요"],
        correctIndex: 0,
        explain: "Boshqa unlilar → ‘-었-’: 먹었어요."
      },
      {
        id: "q-past-2",
        question: "Rasmiy: ‘갔어요’ ning formal varianti qaysi?",
        options: ["갔습니다", "가었습니다", "가했습니디"],
        correctIndex: 0,
        explain: "Formal o‘tgan: -았습니다/-었습니다 → 갔습니다."
      }
    ]
  },

  {
    id: "eottaeyo",
    title: "어때요? / 어떻습니까? (Qanday? Qanaqa?)",
    level: "Boshlang'ich",
    tags: ["Question", "Opinion", "State", "TOPIK A1"],
    meaning:
      "Narsa/odam/holat haqida fikr, taassurot yoki ahvolni so‘rash.",
    forms: [
      "N은/는 어때요? — 날씨는 어때요?",
      "N이/가 어때요? — 한국 음식이 어때요?",
      "Rasmiy: 어떻습니까? / 어떠십니까? (juda rasmiy)",
      "Javoblar: 좋아요/괜찮아요/나빠요/재미있어요/어려워요 ..."
    ],
    usage:
      "Tavsif, baho, taklifni baholash (film, taom, joy, odam fe’l-atvori). Ko‘pincha hozirgi holat.",
    examples: [
      { ko: "새 집은 어때요?", uz: "Yangi uyingiz qanday?" },
      { ko: "한국어 수업이 어때요?", uz: "Koreys tili darsi qanday?" },
      { ko: "날씨가 어떻습니까? — 아주 좋습니다.", uz: "Ob-havo qanday? — Juda yaxshi." }
    ],
    quiz: [
      {
        id: "q-eottae-1",
        question: "Savolni to‘ldiring: 영화___ 어때요?",
        options: ["을", "는", "가"],
        correctIndex: 2,
        explain: "Subyekt ko‘rsatkichi bilan: ‘영화가 어때요?’."
      },
      {
        id: "q-eottae-2",
        question: "Mos javob: ‘한국 음식이 어때요?’ — ____.",
        options: ["한국 음식을 먹어요", "매워요 하지만 맛있어요", "어때요"],
        correctIndex: 1,
        explain: "Baho bildiruvchi sifat: ‘辛いけどおいしい’ → ‘achchiq, lekin mazali’."
      }
    ]
  },
    {
    id: "eun-hue-after",
    title: "-(으)ㄴ 후에 (…dan so‘ng / …keyin)",
    level: "Boshlang'ich",
    tags: ["Time", "Clause-link", "TOPIK A1"],
    meaning:
      "Bosh gapdagi ish tugagach keyingi ishning boshlanishini bildiradi: “... qilgandan keyin …”.",
    forms: [
      "동사 과거 관형사형 + 후에 → V-(으)ㄴ 후에",
      "받침 있음 → -은 후에  (읽다→읽은 후에)",
      "받침 없음 → -ㄴ 후에   (가다→간 후에)",
      "명사 + 후에           (수업 후에 / 점심 후에)",
      "⚖️ O‘xshash: V-고 나서 (ko‘proq ‘butunlay tugatib’ニュанс), V-(으)ㄴ 다음에"
    ],
    usage:
      "Vaqt ketma-ketligini ko‘rsatadi; ikkinchi gap odatda asosiy harakat. ‘후에’ o‘rnida nutqda ‘후’ ham ishlatiladi (rasmiyroq).",
    examples: [
      { ko: "수업이 끝난 후에 도서관에 갔어요.", uz: "Dars tugagandan keyin kutubxonaga bordim." },
      { ko: "영화를 본 후에 저녁을 먹었어요.",   uz: "Kino ko‘rgandan keyin kechki ovqat yedik." },
      { ko: "이 약은 식사 후에 드세요.",          uz: "Bu dori ovqatdan keyin ichiladi (iching)." }
    ],
    quiz: [
      {
        id: "q-hue-1",
        question: "빈칸: 숙제를 끝___ 후에 게임을 해요.",
        options: ["고", "은", "ㄴ"],
        correctIndex: 1,
        explain:
          "‘끝나다’ (받침 있음 → -은): ‘끝난 후에’ emas, bu erda fe’l ‘끝내다(숙제를)’ bo‘lishi mumkin — ‘끝낸 후에’."
      },
      {
        id: "q-hue-2",
        question: "To‘g‘ri variantni tanlang: ‘밥( ) 후에 커피를 마셔요.’",
        options: ["이", "을", "—"],
        correctIndex: 2,
        explain: "Ot + 후에: ‘밥 후에/식사 후에’ — qo‘shimcha kerak emas."
      }
    ]
  },

  {
    id: "neunde-background",
    title: "-는데 / -(으)ㄴ데 / -인데 (fond/qarama-qarshi, yumshatish)",
    level: "Boshlang'ich",
    tags: ["Linking", "Background", "Politeness", "TOPIK A1"],
    meaning:
      "Oldingi jumlada holat/fon/qarama-qarshilikni berib, keyingi iltimos, buyruq, taklif yoki natijani keltiradi. Ko‘pincha gapni yumshatadi.",
    forms: [
      "동사 + 는데        (가다→가는데 / 먹다→먹는데)",
      "형용사 + -(으)ㄴ데  (크다→큰데 / 많다→많은데)",
      "명사 + -인데        (학생인데, 주말인데)",
      "과거: V/A-았/었는데 (왔는데, 비쌌는데)",
      "끝맺음: ‘…는데요.’ — muloyim yakun/sharh"
    ],
    usage:
      "1) Fon/holat: ‘아기가 자는데 조용히 하세요.’ 2) Qarama-qarshi: ‘비가 오는데 나가요?’ 3) Muloqotni yumshatish: ‘지금은 바쁜데요…’. 4) Keyingi iltimos/taklifni olib kelish.",
    examples: [
      { ko: "날씨가 추운데 따뜻하게 입으세요.",        uz: "Havo sovuq, issiqroq kiying." },
      { ko: "아기가 자는데 조용히 하세요.",            uz: "Chaqaloq uxlayapti, iltimos jim bo‘ling." },
      { ko: "저는 학생인데 내일 시험이 있어요.",        uz: "Men talabayman, ertaga imtihonim bor." }
    ],
    quiz: [
      {
        id: "q-neunde-1",
        question: "To‘ldiring: 비가 ___ 우산을 가져가세요.",
        options: ["오는데", "오는데", "왔은데"],
        correctIndex: 0,
        explain: "동사 + 는데: ‘오다 → 오는데’ (받침 yo‘q)."
      },
      {
        id: "q-neunde-2",
        question: "Mos variant: ‘저는 회사원___ 오늘 야근이에요.’",
        options: ["인데", "은데", "는데"],
        correctIndex: 0,
        explain: "명사 + -인데: ‘회사원인데’."
      }
    ]
  },
  {
    id: "eunikka-because",
    title: "-(으)니까 (… uchun / … ekanligi sababli)",
    level: "Boshlang'ich",
    tags: ["Reason", "Linking", "Imperative/Proposal", "TOPIK A1"],
    meaning:
      "Sabab-oqibat bildiradi: “chunki…, shuning uchun…”. Ko‘pincha keyingi jumla buyruq/taklif yoki shaxsiy fikr/ his bilan keladi.",
    forms: [
      "동사/형용사 어간 + (으)니까",
      "받침 있음 → -으니까  (먹다→먹으니까)",
      "받침 없음 → -니까     (가다→가니까)",
      "과거: V-았/었으니까   (왔으니까, 비쌌으니까)",
      "⚖️ -아서/어서 bilan farqi: -(으)니까 ko‘proq subyektiv sabab, buyruq/taklif bilan erkin qo‘llanadi."
    ],
    usage:
      "1) Aniq sabab: ‘재미있으니까 꼭 보세요’ (qiziq bo‘lgani uchun albatta ko‘ring). 2) Tajribadan keyin anglangan sabab: ‘좀 쉬니까 몸이 좋아졌어요’ (dam olsam, o‘zimni yaxshi his qildim).",
    examples: [
      { ko: "그 영화는 재미있으니까 꼭 보세요.", uz: "Bu kino qiziq bo‘lgani uchun, albatta ko‘ring." },
      { ko: "네가 잘못했으니까 먼저 사과해.",   uz: "Sen xato qilganing uchun birinchi bo‘lib kechirim so‘ra." },
      { ko: "좀 쉬니까 몸이 좋아지더군요.",        uz: "Bir oz dam olsam, badanim yaxshilandi." }
    ],
    quiz: [
      {
        id: "q-34-1",
        question: "비가 오___ 우산을 가져가세요.",
        options: ["아서", "니까", "는데"],
        correctIndex: 1,
        explain:
          "Sabab-oqibat + buyruq (우산을 가져가세요) uchun -(으)니까 mos: ‘비가 오니까 …’."
      },
      {
        id: "q-34-2",
        question: "‘Dam olsam ko‘nglim yazildi’ — to‘g‘ri variantni tanlang.",
        options: [
          "쉬니까 기분이 좋아졌어요.",
          "쉬어서 기분이 좋아져요 (buyruq bilan).",
          "쉬는데 기분이 좋아졌어요."
        ],
        correctIndex: 0,
        explain: "Tajribadan keyin anglangan sabab: ‘쉬니까 …좋아졌어요’."
      }
    ]
  },

  {
    id: "geot-nominalizer",
    title: "것 (nominalizator) + 게/거예요 (qisqarishlari)",
    level: "Boshlang'ich",
    tags: ["Nominalization", "Clause-to-noun", "TOPIK A1"],
    meaning:
      "‘것’ fe’l/sifatdan ‘narsa/holat’ yasaydi: V-(으)ㄴ/는/(으)ㄹ 것 — ‘qilgan/ qilayotgan/ qiladigan narsa’. ‘것이 → 게’, ‘것이에요 → 거예요’ qisqaradi.",
    forms: [
      "현재(hozirgi): V-는 것      (읽는 것, 가는 것)",
      "과거(o‘tgan):  V-(으)ㄴ 것  (읽은 것, 간 것)",
      "미래(kelasi):  V-(으)ㄹ 것  (읽을 것, 갈 것)",
      "명사 + 것  (누구의 것? 제 것/네 것/우리 것)",
      "Qisqarish: 것이 → 게, 것을 → 걸, 것은 → 건",
      "‘…것이에요’ → ‘…거예요’ (izohlash/kelasi reja taxminida ham ishlatiladi: V-(으)ㄹ 거예요 ‘…moqchiman/bo‘lsa kerak’)."
    ],
    usage:
      "1) Amallarni ‘narsa’ga aylantirish: ‘가는 게 어때요?’ (borish haqida nima deysan?). 2) Egalik: ‘누구의 것입니까?’ 3) Sifatlagan ot: ‘약속한 것을 잊어버렸어요.’ 4) Reja/taxmin: ‘내일 갈 거예요.’",
    examples: [
      { ko: "병원에 가 보는 게 어때요?",        uz: "Kasalxonaga borib ko‘rish haqida nima deysan?" },
      { ko: "이 가방은 누구의 것입니까?",      uz: "Bu sumka kimniki?" },
      { ko: "어제 그 사람과 약속한 것을 잊어버렸어요.", uz: "Kecha u odam bilan kelishgan narsamizni (va’dani) unutib qo‘ydim." },
      { ko: "내일 한국에 갈 거예요.",           uz: "Ertaga Koreyaga boraman (borish niyatim bor)." }
    ],
    quiz: [
      {
        id: "q-35-1",
        question: "‘Kitob o‘qish yoqadi’ — qaysi variant to‘g‘ri?",
        options: ["책 읽는 게 좋아요.", "책 읽을 거예요.", "책 읽은 것 좋아요."],
        correctIndex: 0,
        explain:
          "Sevish/yoqish predmet sifatida kerak → 현재 nominalizatsiya: ‘읽는 게/것’."
      },
      {
        id: "q-35-2",
        question: "Bo‘shliqni to‘ldiring: ‘Bu mening narsam’ → 제 ___ 입니다.",
        options: ["것", "게", "거예요"],
        correctIndex: 0,
        explain: "Egalik: ‘제 것’ (rasmiy). ‘제 거예요’ ham mumkin (kamroq rasmiy)."
      }
    ]
  },
    {
    id: "eulgeyo-promise",
    title: "-(으)ㄹ게요 (va’da/niyat — ‘men… qilaman’)",
    level: "Boshlang'ich",
    tags: ["Volition", "Promise", "Conversation", "TOPIK A1"],
    meaning:
      "Gapiruvchi tinglovchiga moslashib, shu zahoti qaror yoki va’dani bildiradi: ‘(men) qilaman’. Odatda faqat 1-shaxs fe’l bilan keladi.",
    forms: [
      "동사 어간 + (으)ㄹ게요",
      "받침 있음 → -을게요  (돕다→도울게요)",
      "받침 없음 → -ㄹ게요   (가다→갈게요)",
      "❌ Sifat/ot bilan ishlatilmaydi; buyruq/taklifga javob sifatida ko‘p ishlatiladi."
    ],
    usage:
      "Tinglovchining so‘zi/holatiga javoban darhol qaror: ‘알겠어요. 지금 시작할게요’ kabi.",
    examples: [
      { ko: "조금만 기다리세요. 금방 갈게요.", uz: "Biroz kuting, hozir yetib boraman." },
      { ko: "제가 도와줄게요.",                 uz: "Men yordam beraman." },
      { ko: "내일 다시 연락할게요.",            uz: "Ertaga yana bog‘lanaman." }
    ],
    quiz: [
      {
        id: "q-36-1",
        question: "문을 제가 열___ .",
        options: ["게요", "어요", "았어요"],
        correctIndex: 0,
        explain: "Darhol niyat/va’da: ‘열게요’."
      },
      {
        id: "q-36-2",
        question: "Boshqa variantlarning qaysi biri xato? (va’da ma’nosi kerak)",
        options: ["지금 확인할게요.", "내가 전화할게요.", "내가 예뻐요."],
        correctIndex: 2,
        explain: "‘예뻐요’ sifat; -(으)ㄹ게요 faqat fe’l bilan ishlatiladi."
      }
    ]
  },

  {
    id: "eulkkayo-shallwe",
    title: "-(으)ㄹ까요? (taklif / fikr so‘rash ‘qilaylikmi?’ ‘bo‘ladimikan?’)",
    level: "Boshlang'ich",
    tags: ["Proposal", "Guess", "Question", "TOPIK A1"],
    meaning:
      "1) Birgalik taklifi: ‘qilaylikmi?’ 2) Fikr/taxmin so‘rash: ‘bo‘ladimikan?’ ‘kelarmikan?’",
    forms: [
      "동/형용사 어간 + (으)ㄹ까요?",
      "받침 있음 → -을까요? (먹다→먹을까요?)",
      "받침 없음 → -ㄹ까요?  (가다→갈까요?)",
      "명사 + 일까요? (학생일까요?)"
    ],
    usage:
      "Taklifda ko‘pincha 1-shaxs ko‘plik ma’nosi: ‘같이 갈까요?’. Taxminda 3-shaxs/holat: ‘비가 올까요?’",
    examples: [
      { ko: "같이 점심 먹을까요?",          uz: "Birga tushlik qilaylikmi?" },
      { ko: "그분이 오늘 올까요?",          uz: "U kishi bugun kelarmikan?" },
      { ko: "몇 시에 시작할까요?",          uz: "Soat nechada boshlasak bo‘ladi?" }
    ],
    quiz: [
      {
        id: "q-37-1",
        question: "영화를 같이 ___?",
        options: ["보나요", "볼까요", "봤을까요"],
        correctIndex: 1,
        explain: "Birgalik taklifi: ‘볼까요?’"
      },
      {
        id: "q-37-2",
        question: "그분이 지금 집에 계실___?",
        options: ["까요", "게요", "래요"],
        correctIndex: 0,
        explain: "Taxmin/so‘rash: ‘계실까요?’"
      }
    ]
  },

  {
    id: "eul-ddae-when",
    title: "-(으)ㄹ 때 (… paytda / …da)",
    level: "Boshlang'ich",
    tags: ["Time Clause", "When", "TOPIK A1"],
    meaning:
      "Biror ish/holat yuz beradigan paytni bildiradi: ‘… qilganda/… bo‘lganda’. O‘tgan payt uchun -았/었을 때, ot bilan ‘N-일 때’.",
    forms: [
      "동사 현재/일반: V-(으)ㄹ 때  (갈 때, 먹을 때)",
      "동사 과거: V-았/었을 때      (갔을 때, 먹었을 때)",
      "형용사: A-(으)ㄹ 때          (바쁠 때, 조용할 때)",
      "명사:  N-일 때               (어릴 때, 학생일 때)",
      "⚠️ Qo‘shimcha gapga buyruq/tilak kam qo‘shiladi; odatda bosh gapga qo‘yiladi."
    ],
    usage:
      "Vaqt sharti/nuqtasi: ‘집에 올 때 우유를 사세요’ (uyga kelayotganda sut oling). O‘tgan davr xotirasi: ‘한국에 있었을 때 …’.",
    examples: [
      { ko: "집에 올 때 우유 좀 사세요.",       uz: "Uyga kelayotganda biroz sut oling." },
      { ko: "한국에 있었을 때 많이 걸었어요.",    uz: "Koreyada bo‘lganimda ko‘p yurganman." },
      { ko: "수업할 때 휴대폰을 끄세요.",        uz: "Dars paytida telefonni o‘chirib qo‘ying." }
    ],
    quiz: [
      {
        id: "q-38-1",
        question: "어릴 ___ 그 동네에 살았어요.",
        options: ["게", " 때", "까요"],
        correctIndex: 1,
        explain: "Ot + 일 때 → ‘어릴 때’ (bolaligimda)."
      },
      {
        id: "q-38-2",
        question: "한국에 ___ 한국어를 배웠어요.",
        options: ["있었을 때", "있을까요", "있을게요"],
        correctIndex: 0,
        explain: "O‘tgan payt: ‘있었을 때’."
      }
    ]
  },
    {
    id: "eul-su-issda-ability",
    title: "-(으)ㄹ 수 있다/없다 (qila olmoq / qila olmaslik)",
    level: "Boshlang'ich",
    tags: ["Ability", "Possibility", "NEG", "TOPIK A1"],
    meaning:
      "Fe’lga qo‘shilib ‘qila oladi/olmaydi’, ‘mumkin/mumkin emas’ ma’nosini beradi.",
    forms: [
      "동사 어간 + (으)ㄹ 수 있다 / 없다",
      "받침 있음 → -을 수 있다/없다 (읽다→읽을 수 있다)",
      "받침 없음 → -ㄹ 수 있다/없다 (가다→갈 수 있다)",
      "👉 Ehtimol ma’nosi: -(으)ㄹ 수도 있다 ‘… ham bo‘lishi mumkin’"
    ],
    usage:
      "Qobiliyat, imkoniyat yoki ruxsat nuqtai nazaridan ishlatiladi. Ko‘pincha obyekt + 을/를 bilan keladi.",
    examples: [
      { ko: "제 일은 제가 알아서 할 수 있어요.", uz: "O‘z ishimi o‘zim bajarishim mumkin." },
      { ko: "그녀는 수영을 할 수 없어요.",        uz: "U qiz suza olmaydi." },
      { ko: "시합에서 이길 수도 있고 질 수도 있어요.", uz: "Musobaqada yutish ham, yutqazish ham mumkin." },
      { ko: "저는 한자를 읽을 수 없습니다.",       uz: "Men hanjani o‘qiy olmayman." }
    ],
    quiz: [
      {
        id: "q-39-1",
        question: "저는 운전을 할 ___ ___ .",
        options: ["수 있어요", "게요", "까요"],
        correctIndex: 0,
        explain: "Qobiliyat: ‘할 수 있어요’."
      },
      {
        id: "q-39-2",
        question: "시간이 없어서 오늘은 만날 ___ ___ .",
        options: ["수 없어요", "까요", "게요"],
        correctIndex: 0,
        explain: "Imkon yo‘qligi: ‘만날 수 없어요’."
      }
    ]
  },

  {
    id: "eureo-purpose",
    title: "-(으)러 (maqsad: ‘…gani/…ishga’)",
    level: "Boshlang'ich",
    tags: ["Purpose", "Motion", "TOPIK A1"],
    meaning:
      "Harakat maqsadini bildiradi va odatda ‘bor-/kel-’ kabi harakat fe’llari bilan keladi: ‘… qilgani bormoq/kelmoq’.",
    forms: [
      "동사 어간 + (으)러 + 가다/오다/다니다",
      "받침 있음 → -으러 (먹다→먹으러, 읽다→읽으러)",
      "받침 없음 → -러  (가다→갈러 ❌ → ‘가다’ istisno: 만나러 가다, 놀러 가다)",
      "⚠️ -(으)러 faqat ‘harakat’ fe’li bilan: 가다, 오다, 다니다 bilan ishlating."
    ],
    usage:
      "Joy + 에 + V-(으)러 가다/오다: ‘kutubxonaga (kitob) olish uchun bormoq’, ‘do‘stni ko‘rishga kelmoq’ va h.k.",
    examples: [
      { ko: "책을 빌리러 도서관에 갑니다.",   uz: "Kitob olish uchun kutubxonaga boraman." },
      { ko: "낚시하러 강가에 갔습니다.",      uz: "Baliq tutish uchun daryoga bordim." },
      { ko: "친구를 만나러 카페에 가요.",     uz: "Do‘stimni uchratgani kafe­ga ketyapman." }
    ],
    quiz: [
      {
        id: "q-40-1",
        question: "저는 운동하___ 체육관에 가요.",
        options: ["러", "려고", "게요"],
        correctIndex: 0,
        explain: "Maqsad + harakat fe’li: ‘운동하러 … 가요’."
      },
      {
        id: "q-40-2",
        question: "도서관에 책을 빌리___ 다녔어요.",
        options: ["러", "게요", "까요"],
        correctIndex: 0,
        explain: "다니다 bilan ham -(으)러 ishlatiladi."
      }
    ]
  },

  {
    id: "eureo-gada-oda",
    title: "-(으)러 가다/오다 (…gani bor-/kel-)",
    level: "Boshlang'ich",
    tags: ["Purpose", "Motion", "Pattern", "TOPIK A1"],
    meaning:
      "‘… qilish maqsadida bor-/kel-’ konstruktsiyasi. Ko‘pincha joy + 에 bilan ishlatiladi.",
    forms: [
      "장소 + 에 + 동사 어간 + (으)러 + 가다/오다",
      "예) 공원에 산책하러 갔다 / 학교에 시험 보러 온 학생들"
    ],
    usage:
      "Vazifa/istak maqsadi aniq ko‘rinadi: 산책하러 갔다, 입학시험 보러 온 사람 등.",
    examples: [
      { ko: "동생은 공원에 산책하러 갔어요.",                    uz: "Ukam bog‘ga sayr qilgani ketdi." },
      { ko: "형과 보양하러 바다에 갔습니다.",                    uz: "Akam bilan sog‘lomlanish uchun dengizga bordik." },
      { ko: "학교가 입학시험 보러 온 학생들로 가득 찼어요.",     uz: "Maktab imtihon topshirgani kelgan o‘quvchilar bilan to‘ldi." }
    ],
    quiz: [
      {
        id: "q-41-1",
        question: "친구가 저를 도와주___ 집에 왔어요.",
        options: ["러", "려고", "게요"],
        correctIndex: 0,
        explain: "‘… qilish uchun kelmoq’: ‘도와주러 왔어요’."
      },
      {
        id: "q-41-2",
        question: "우리는 사진을 찍___ 산에 갔어요.",
        options: ["으러", "을까요", "겠어요"],
        correctIndex: 0,
        explain: "받침 bor (찍-): -으러 → ‘찍으러’."
      }
    ]
  },
  {
    id: "eureogo-purpose-intent",
    title: "-(으)려고 (…moqchi bo‘lib / … uchun)",
    level: "Boshlang'ich",
    tags: ["Purpose", "Intent", "TOPIK A1"],
    meaning:
      "Fe’lga qo‘shilib istak va maqsadni bildiradi. Sifatga qo‘shilmaydi. O‘zbekchaga “–moqchi bo‘lib”, “– uchun”, “– deb” tarzida tarjima qilinadi.",
    forms: [
      "동사 어간 + (으)려고",
      "받침 있음 → -으려고 (읽다→읽으려고)",
      "받침 없음 → -려고 (가다→가려고)"
    ],
    usage:
      "Ko‘pincha maqsadni bildiruvchi ikkinchi fe’l bilan keladi yoki -(으)려고 + 하다 bilan birga ishlatiladi.",
    examples: [
      { ko: "공부를 더 하려고 대학원에 다닙니다.", uz: "O‘qishni davom ettirish maqsadida magistraturaga kirdim." },
      { ko: "한국에 가려고 이 책을 샀습니다.",       uz: "Koreyaga borish uchun bu kitobni sotib oldim." }
    ],
    quiz: [
      {
        id: "q-42-1",
        question: "한국에 ___ 이 책을 샀어요.",
        options: ["가려고", "가면", "가고"],
        correctIndex: 0,
        explain: "Maqsad: ‘… uchun’ → 가려고."
      },
      {
        id: "q-42-2",
        question: "유학을 하___ 준비해요.",
        options: ["려고", "면", "겠"],
        correctIndex: 0,
        explain: "Istak/maqsad: 하려고."
      }
    ]
  },

  {
    id: "eureogo-hada-plan",
    title: "-(으)려고 하다 (…moqchiman / reja)",
    level: "Boshlang'ich",
    tags: ["Plan", "Intention", "TOPIK A1"],
    meaning:
      "So‘zlovchining kelajakdagi rejasi yoki niyatini bildiradi: “–moqchiman/–moqchi edim”.",
    forms: [
      "동사 어간 + (으)려고 하다",
      "받침 있음 → -으려고 하다 (읽다→읽으려고 하다)",
      "받침 없음 → -려고 하다 (가다→가려고 하다)"
    ],
    usage:
      "Hozirgi (–(으)려고 해요), rasmiy (–(으)려고 합니다) va o‘tgan (–(으)려고 했어요) zamonlarda ishlatiladi.",
    examples: [
      { ko: "오랜만에 집에 편지를 쓰려고 합니다.", uz: "Uzoq vaqtdan keyin uyga xat yozmoqchiman." },
      { ko: "내일 교수님을 만나려고 합니다.",      uz: "Ertaga professor bilan uchrashmoqchiman." },
      { ko: "한국에 가려고 했습니다.",             uz: "Koreyaga ketmoqchi edim." }
    ],
    quiz: [
      {
        id: "q-43-1",
        question: "저는 오늘 운동하___ 합니다.",
        options: ["려고", "면", "거나"],
        correctIndex: 0,
        explain: "Reja/niyat: 운동하려고 합니다."
      },
      {
        id: "q-43-2",
        question: "어제 영화를 보___ 했어요. (ammo bora olmadim)",
        options: ["려고", "면", "게"],
        correctIndex: 0,
        explain: "O‘tgan zamon niyat: 보려고 했어요."
      }
    ]
  },

  {
    id: "eumyeon-if",
    title: "-(으)면 (agar/bo‘lsa)",
    level: "Boshlang'ich",
    tags: ["Condition", "If", "TOPIK A1"],
    meaning:
      "Shartni bildiradi: ‘agar/bo‘lsa’. Umumiy holat, odat yoki shart bajarilganda natijani ko‘rsatadi.",
    forms: [
      "동/형용사 어간 + (으)면,  명사 + (이)면",
      "받침 있음 → -으면 (읽다→읽으면)",
      "받침 없음 → -면 (가다→가면)",
      "하다 → 하면,  명사 + 이면/면"
    ],
    usage:
      "Imperativ/iltimos, taklif, maslahat bilan ham kelishi mumkin (가면 좋아요 / 오시면 연락하세요).",
    examples: [
      { ko: "오늘 시간이 없으면 다음에 만나요.", uz: "Bugun vaqtingiz yo‘q bo‘lsa, keyin uchrashamiz." },
      { ko: "책을 펴면 잠이 와요.",               uz: "Kitobni ochsam, uyqum keladi." }
    ],
    quiz: [
      {
        id: "q-44-1",
        question: "비가 오___ 소풍을 안 가요.",
        options: ["면", "려고", "거나"],
        correctIndex: 0,
        explain: "Shart: 오면."
      },
      {
        id: "q-44-2",
        question: "시간이 있___ 같이 공부할까요?",
        options: ["으면", "려고", "겠"],
        correctIndex: 0,
        explain: "있다 + -(으)면 → 있으면."
      }
    ]
  },
   {
    id: "eumyeon-an-doeda",
    title: "-(으)면 안 되다 (bo‘lsa bo‘lmaydi / mumkin emas)",
    level: "Boshlang'ich",
    tags: ["Prohibition", "Rule", "TOPIK A1"],
    meaning:
      "Biror harakatni qilishga ruxsat yo‘qligini bildiradi: “–sa bo‘lmaydi”, “– mumkin emas”.",
    forms: [
      "동사 어간 + (으)면 안 되다",
      "받침 있음 → -으면 안 되다 (먹다→먹으면 안 돼요)",
      "받침 없음 → -면 안 되다 (가다→가면 안 돼요)",
      "높임/격식: 안 됩니다"
    ],
    usage:
      "Qoidalar, taqiqlar, odob doirasidagi “bo‘lmaydi” ni ifodalaydi. Ko‘pincha maslahat ohangi bilan ham ishlatiladi.",
    examples: [
      { ko: "지금 들어가면 안 됩니다.", uz: "Hozir kirish mumkin emas." },
      { ko: "거짓말을 하면 안 돼요.", uz: "Yolg‘on gapirish mumkin emas." },
      { ko: "여기에서 담배 피우면 안 됩니다.", uz: "Bu yerda chekish mumkin emas." }
    ],
    quiz: [
      {
        id: "q45-1",
        question: "시험에서 휴대폰을 사용하___ 안 돼요.",
        options: ["면", "려고", "거나"],
        correctIndex: 0,
        explain: "Taqiq: 사용하면 안 돼요."
      }
    ]
  },

  {
    id: "eumyeonseou-while",
    title: "-(으)면서 (…ar ekan / bir vaqtda)",
    level: "Boshlang'ich",
    tags: ["Simultaneous", "Adverbial", "TOPIK A1"],
    meaning:
      "Ikki harakatning bir vaqtda ro‘y berishini bildiradi: “–a turib”, “–ar ekan”. Ko‘pincha bosh va ergash gapning egasi bir xil bo‘ladi.",
    forms: [
      "동사 어간 + (으)면서",
      "받침 있음 → -으면서 (읽다→읽으면서)",
      "받침 없음 → -면서 (가다→가면서)"
    ],
    usage:
      "Kundalik odatlar, fon harakatini tasvirlashda ko‘p ishlatiladi. Bosh va ergash gap egasi odatda bir xil.",
    examples: [
      { ko: "음악을 들으면서 공부해요.", uz: "Musiqa eshitib o‘qyman." },
      { ko: "텔레비전을 보면서 저녁을 먹었어요.", uz: "Televizor ko‘rib, kechki ovqat yedim." }
    ],
    quiz: [
      {
        id: "q46-1",
        question: "친구와 이야기하___ 걸었어요.",
        options: ["면서", "면", "려고"],
        correctIndex: 0,
        explain: "Bir vaqtda: 이야기하면서."
      }
    ]
  },

  {
    id: "eubshida-lets",
    title: "-(으)ㅂ시다 (keling, …laylik)",
    level: "Boshlang'ich",
    tags: ["Suggestion", "Formal polite", "TOPIK A1"],
    meaning:
      "Tinglovchiga birgalikda bir ishni qilishni taklif qiladi: “–laylik/–aylik”.",
    forms: [
      "동사 어간 + (으)ㅂ시다",
      "받침 있음 → -읍시다 (먹다→먹읍시다)",
      "받침 없음 → -ㅂ시다 (가다→갑시다)"
    ],
    usage:
      "Rasmiy-kamtar uslub. O‘qituvchi–talaba, jamoaga murojaatda ishlatiladi. Nozimniy (반말) muqobili: -자.",
    examples: [
      { ko: "같이 공부합시다.", uz: "Birga o‘qiylik." },
      { ko: "내일 일찍 만납시다.", uz: "Ertaga erta uchrashaylik." }
    ],
    quiz: [
      {
        id: "q47-1",
        question: "주말에 산에 가___!",
        options: ["ㅂ시다", "세요", "면"],
        correctIndex: 0,
        explain: "Taklif: 가봅시다/갑시다 → ‘갑시다’ to‘g‘risi."
      }
    ]
  },

  {
    id: "euseyo-request",
    title: "-(으)세요 (iltimos/so‘rov, hurmat)",
    level: "Boshlang'ich",
    tags: ["Request", "Honorific", "Imperative", "TOPIK A1"],
    meaning:
      "Muloyim buyruq yoki iltimos: “–ing”, “– qiling”. Tinglovchiga hurmat ohangini bildiradi.",
    forms: [
      "동사 어간 + (으)세요",
      "받침 있음 → -으세요 (읽다→읽으세요)",
      "받침 없음 → -세요 (가다→가세요)",
      "부정(taqiqlash): -지 마세요 (가지 마세요)"
    ],
    usage:
      "Xizmat ko‘rsatish, kundalik iltimos, yo‘riqnomalarda ishlatiladi. Savol shakli: -(으)세요? (…asizmi?).",
    examples: [
      { ko: "앉으세요.", uz: "O‘tiring, iltimos." },
      { ko: "조용히 해 주세요.", uz: "Iltimos, jim bo‘ling." },
      { ko: "메뉴 좀 보세요.", uz: "Menyuga qarang." },
      { ko: "사진을 찍지 마세요.", uz: "Rasmga olmang." }
    ],
    quiz: [
      {
        id: "q48-1",
        question: "여기에서 기다리___.",
        options: ["세요", "읍시다", "면 안 돼요"],
        correctIndex: 0,
        explain: "Muloyim iltimos: 기다리세요."
      }
    ]
  },
   {
    id: "nde-yo",
    title: "-(이)ᄂ데요 / -(으)ᄂ데요 / -는데요 (fond ma’lumot / yumshoq ohang)",
    level: "Boshlang'ich",
    tags: ["Ending", "Background", "Softening", "TOPIK A1"],
    meaning:
      "Gap oxirida kelib fon ma’lumot beradi, vaziyatni yumshoq aytadi, muloyim e’tiroz bildiradi yoki suhbatdoshdan davom kutadi.",
    forms: [
      "Fe’l (동사) + -는데요  (가다→가는데요, 먹다→먹는데요)",
      "Sifat (형용사) + -(으)ᄂ데요  (작다→작은데요, 크다→큰데요)",
      "Ot (명사) + (이)ᄂ데요  (학생인데요, 의사인데요)"
    ],
    usage:
      "• Ilgarigi gapga fon qo‘shish: “...-ku, shunday bo‘lsa...”. • Yengil e’tiroz yoki ajablanish. • Muloyim kirish/so‘rov: suhbatni davom ettirishni kutish.",
    examples: [
      { ko: "저는 빌린인데요. 김 선생님 계세요?", uz: "Men Billinman-da. Kim ustoz bormi?" },
      { ko: "저는 일본에서 온 학생인데요, 사무실이 어디예요?", uz: "Men Yaponiyadan kelgan talabama-da, ofis qayerda?" },
      { ko: "비가 오는데요.", uz: "Yomg‘ir yog‘yapti-da (bilishingiz uchun)." }
    ],
    quiz: [
      {
        id: "q52-1",
        question: "저는 한국어 반 새 학생___, 자리 있나요?",
        options: ["인데요", "는데요", "이에요"],
        correctIndex: 0,
        explain: "Ot + (이)ᄂ데요: 학생인데요."
      }
    ]
  },

  {
    id: "iga-anida",
    title: "N이/가 아니다 (emas)",
    level: "Boshlang'ich",
    tags: ["Copula", "Negation", "TOPIK A1"],
    meaning:
      "Otni inkor qiladi: “emas”. Rasmiy uslub: 아닙니다; odatiy/hurmatli: 아니에요.",
    forms: [
      "명사 + 이/가 아니다 (학생이 아니다 / 의사가 아니다)",
      "격식: 아닙니다  ·  표준 존대: 아니에요"
    ],
    usage:
      "Savol-javobda to‘g‘ridan-to‘g‘ri inkor, ta’rifni rad etish.",
    examples: [
      { ko: "이 사람이 정은 씨입니까? 아니요, 정은 씨가 아닙니다.", uz: "Bu kishi Chongminmi? Yo‘q, Chongmin emas." },
      { ko: "여기가 학생 식당입니까? 아니요, 학생 식당이 아니에요.", uz: "Bu yer talabalarning oshxonasimi? Yo‘q, emas." },
      { ko: "그것은 사과예요? 아니요, 사과가 아니에요. 바나나예요.", uz: "U olma-mi? Yo‘q, olma emas. Banan." }
    ],
    quiz: [
      {
        id: "q53-1",
        question: "저 분은 선생님__ ___. (emas)",
        options: ["이 아니에요", "가 안 돼요", "을 못 해요"],
        correctIndex: 0,
        explain: "Ot + 이/가 아니다 → 선생님이 아니에요."
      }
    ]
  },

  {
    id: "i-geu-jeo",
    title: "이 / 그 / 저 (ko‘rsatish olmoshlari: bu / u / ana u)",
    level: "Boshlang'ich",
    tags: ["Determiner", "Pronoun", "Deixis", "TOPIK A1"],
    meaning:
      "Narsaning yaqin-uzoqligini bildiradi: 이 (gapiruvchiga yaqin), 그 (tinglovchiga yaqin yoki avval zikr qilingan), 저 (ikkovidan ham uzoq).",
    forms: [
      "이/그/저 + 명사 → 이 책, 그 사람, 저 건물",
      "대명사 sifatida: 이것/그것/저것 (bu narsa/u narsa/ana u narsa)"
    ],
    usage:
      "Yangi va stsenadagi narsani aniqlash, avval tilga olingan narsaga qaytish (그).",
    examples: [
      { ko: "이 책 재미있어요.", uz: "Bu kitob qiziq." },
      { ko: "그 문제는 나중에 이야기합시다.", uz: "U masalani keyin gaplashaylik (avvalgi mavzu)." },
      { ko: "저 건물이 우리 학교예요.", uz: "Ana u bino bizning maktab." }
    ],
    quiz: [
      {
        id: "q54-1",
        question: "___ 사람은 우리 선생님이에요. (tinglovchiga yaqin)",
        options: ["그", "이", "저"],
        correctIndex: 0,
        explain: "Tinglovchiga yaqin yoki ilgari tilga olingan — ‘그’."
      }
    ]
  },
   {
    id: "i-eyo-yeyo",
    title: "N 이에요/예요 (…dir)",
    level: "Boshlang'ich",
    tags: ["Copula", "Statement", "TOPIK A1"],
    meaning:
      "Otni ta’riflab, “..dir” ma’nosini beradi (oddiy hurmat uslubi). Undosh bilan tugasa → 이에요, unli bilan tugasa → 예요.",
    forms: [
      "명사 + 이에요  (학생이에요, 한국 사람이에요)",
      "명사 + 예요   (의사예요, 배우예요)"
    ],
    usage:
      "Tanishuv, kasb/kelib chiqish/egalikni aytish, kundalik nutqda xulosa yoki tasdiq.",
    examples: [
      { ko: "저는 호주 사람이에요.", uz: "Men avstraliyalikman." },
      { ko: "이 사람이 제 여자 친구예요.", uz: "Bu kishi mening qiz do‘stim." },
      { ko: "그건 누구 가방이에요?", uz: "U kimning sumkasi?" },
      { ko: "이건 한국말로 뭐예요?", uz: "Bu koreyschada nima deyiladi?" }
    ],
    quiz: [
      {
        id: "q55-1",
        question: "이것은 책___?",
        options: ["이에요", "예요", "입니다"],
        correctIndex: 0,
        explain: "‘책’ undosh bilan tugaydi → ‘책이에요’."
      }
    ]
  },

  {
    id: "imnida-imnikka",
    title: "N 입니다 / 입니까? (rasmiy)",
    level: "Boshlang'ich",
    tags: ["Copula", "Formal", "Statement", "Question", "TOPIK A1"],
    meaning:
      "Rasmiy-hurmat uslubida ta’rif (입니다) va so‘roq (입니까?) yasaydi: “..dir / ..misan?”.",
    forms: [
      "명사 + 입니다  (학생입니다, 한국 사람입니다)",
      "명사 + 입니까? (학생입니까?, 도서관입니까?)"
    ],
    usage:
      "E’lon/taqdimotlarda, rasmiy suhbatda, ish joyi, intervyu, hujjatli nutqda.",
    examples: [
      { ko: "빌린 씨입니다.", uz: "Men Billinman." },
      { ko: "여기가 교실입니다.", uz: "Bu yer o‘quv xonasi." },
      { ko: "성호 씨입니까?", uz: "Songho misiz?" },
      { ko: "저기가 도서관입니까?", uz: "Ana u yer kutubxonami?" }
    ],
    quiz: [
      {
        id: "q56-1",
        question: "여기는 병원___?",
        options: ["입니까", "입니다", "아니에요"],
        correctIndex: 0,
        explain: "Rasmiy so‘roq: ‘입니까?’."
      }
    ]
  },

  {
    id: "jiman",
    title: "-지만 (lekin/bo‘lsa-da)",
    level: "Boshlang'ich",
    tags: ["Conjunction", "Contrast", "TOPIK A1"],
    meaning:
      "Ikki mazmunni qarama-qarshi qo‘yadi: “...-lekin/…-bo‘lsa-da”. Fe’l, sifat va otga qo‘shiladi.",
    forms: [
      "동사/형용사 + 지만  (가지만, 어렵지만)",
      "명사 + (이)지만  (학생이지만, 주말이지만)"
    ],
    usage:
      "Muloyim e’tiroz, kutilmagan natija, qarama-qarshi holatni ifodalash.",
    examples: [
      { ko: "날씨가 춥지만 따뜻하게 입으세요.", uz: "Havo sovuq, lekin issiqroq kiying." },
      { ko: "시간이 없지만 노력해 볼게요.", uz: "Vaqtim yo‘q, lekin harakat qilib ko‘raman." },
      { ko: "저는 학생이지만 일을 해요.", uz: "Men talaba bo‘lsam-da, ishlayman." }
    ],
    quiz: [
      {
        id: "q57-1",
        question: "바쁘___ 연락할게요. (lekin)",
        options: ["지만", "인데요", "입니까"],
        correctIndex: 0,
        explain: "Qarama-qarshilik: ‘바쁘지만 연락할게요.’"
      }
    ]
  },
    {
    id: "ji-malda",
    title: "V-지 말다 (qilma / qilmaylik)",
    level: "Boshlang'ich",
    tags: ["Imperative", "Prohibition", "Suggestion", "TOPIK A1"],
    meaning:
      "Buyruq yoki taklifning bo‘lishsiz ko‘rinishi: “qilmang / qilmaylik”. Muloyim va rasmiy darajalari bor.",
    forms: [
      "동사 + 지 마세요  (iltimos, qilmang)",
      "동사 + 지 마십시오 (rasmiy ‘qilmang’)",
      "동사 + 지 맙시다  (keling, … qilmAYlik)"
    ],
    usage:
      "Qoidani eslatish, odob-axloq, sog‘liq/tavsiya kontekstida taqiqlash yoki taklifni inkor qilish.",
    examples: [
      { ko: "교실에서 떠들지 마십시오.", uz: "Sinfxonada shovqin solmang." },
      { ko: "술을 너무 많이 마시지 마세요.", uz: "Sharobni juda ko‘p ichmang." },
      {
        ko: "지금은 퇴근 시간이라 택시를 타지 말고 지하철을 탑시다.",
        uz: "Hozir ishdan qaytish payti, taksiga chiqmay, metroga minaylik."
      }
    ],
    quiz: [
      {
        id: "q58-1",
        question: "도서관에서 전화___ 마세요. (qilma)",
        options: ["하지", "하지를", "해"],
        correctIndex: 0,
        explain: "Taqiqlash: ‘전화하지 마세요’."
      }
    ]
  },

  {
    id: "ji-motada",
    title: "V-지 못하다 / 못 V (qila olmaslik)",
    level: "Boshlang'ich",
    tags: ["Ability", "Inability", "Negative", "TOPIK A1"],
    meaning:
      "Qodir emaslikni, imkoniyat yo‘qligini bildiradi: “qila olmayman/olmadi”. ‘못 + V’ bilan ma’nodosh.",
    forms: [
      "동사 + 지 못해요 / 지 못했어요",
      "못 + 동사 (못 가요, 못 만났어요)"
    ],
    usage:
      "Jismoniy/vaqt/holat sababli ish amalga oshmayotganini bildiradi. ‘안’ bilan farqi: ‘못’/‘-지 못하다’ — qila OLMASLIK; ‘안/ -지 않다’ — qilMAYMAN (ixtiyoriy).",
    examples: [
      { ko: "지금 다리가 아파서 걷지 못해요.", uz: "Hozir oyog‘im og‘rib, yura olmayman." },
      { ko: "어제 그 사람을 만나지 못했어요.", uz: "Kecha u bilan uchrasha olmadim." },
      {
        ko: "수영을 못 해요.",
        uz: "Suvda suzolmayman."
      }
    ],
    quiz: [
      {
        id: "q59-1",
        question: "감기가 심해서 오늘 수업에 ___ 못했어요.",
        options: ["오지", "오는", "왔지"],
        correctIndex: 0,
        explain: "‘…ga kela olmadim’ → ‘수업에 오지 못했어요’."
      }
    ]
  },

  {
    id: "ji-anta",
    title: "V-지 않다 / 안 V (qilmaslik, inkor)",
    level: "Boshlang'ich",
    tags: ["Negative", "Statement", "TOPIK A1"],
    meaning:
      "Umumiy inkor: “qilmayman/ qilmaydi”. Fe’l va sifatga qo‘shiladi. ‘안 V’ bilan ma’nodosh; rasmiyda ‘-지 않습니다’.",
    forms: [
      "동사/형용사 + 지 않아요 / 지 않았습니다",
      "안 + 동사/형용사 (안 가요, 안 예뻐요)",
      "명사 + 이/가 아니다 (학생이 아니에요)"
    ],
    usage:
      "Ixtiyoriy qilmaslik, odatning yo‘qligi, muloyim rad etish. Kuchli inkor uchun rasmiy ‘-지 않습니다’ ishlatiladi.",
    examples: [
      { ko: "저는 커피를 마시지 않아요.", uz: "Men qahva ichmayman." },
      { ko: "그는 운동을 자주 하지 않아요.", uz: "U tez-tez sport bilan shug‘ullanmaydi." },
      { ko: "오늘은 학교에 가지 않았어요.", uz: "Bugun maktabga bormadim." }
    ],
    quiz: [
      {
        id: "q60-1",
        question: "요즘 바빠서 한국어를 자주 공부하___.",
        options: ["지 않아요", "지 못해요", "지 말아요"],
        correctIndex: 0,
        explain:
          "Ixtiyoriy/odat darajasidagi inkor: ‘공부하지 않아요’. (Imkon yo‘qligi bo‘lsa ‘못해요’)."
      }
    ]
  },
   {
    id: "geoneul",
    title: "-거늘 (rhetorik sabab/ta’kid)",
    level: "O'rta 1",
    tags: ["Rhetorical", "Contrast", "Reason", "Written"],
    meaning:
      "Oldingi gapda hammaga ma’lum faktni keltirib, keyingi gapda ‘qanday qilib … bo‘lishi mumkin?’ kabi RETHORIK baho beradi. Ko‘proq yozma/klassik uslub.",
    forms: ["동사/형용사 + 거늘", "명사 + (이)거늘"],
    usage:
      "“... ham shunday ekan, (qanday qilib) … bo‘lmasin?”; ko‘pincha keyingi gap hayrat, e’tiroz yoki ritorik savol bo‘ladi.",
    examples: [
      {
        ko: "짐승도 자기 새끼를 돌보아 주거늘, 어머니가 자식을 사랑하지 않을 수 있겠어요?",
        uz: "Hayvonlar ham bolalarini asraydi, ona bolani sevmasligi mumkinmi?"
      },
      {
        ko: "사막도 나름대로 아름답거늘, 바다가 어찌 아름답지 않을 수가 있겠어요?",
        uz: "Sahro ham oʻziga yarasha chiroyli bo‘lsa, dengiz chiroyli bo‘lmasligi mumkinmi?"
      },
      {
        ko: "그는 항상 생각하는 사람거늘, 그에게 부탁을 못 하겠어요?",
        uz: "U hamisha oʻylab ish qiladi-ku, undan nimanidir so‘ray olmaymizmi?"
      }
    ],
    quiz: [
      {
        id: "m1q1",
        question:
          "동물도 새끼를 돌보아 주___, 어머니가 자식을 사랑하지 않을 수 있겠어요?",
        options: ["거늘", "거든", "겠거니"],
        correctIndex: 0,
        explain:
          "Ma’lum faktni keltirib, keyingi gapda ritorik savol → -거늘."
      }
    ]
  },
  {
    id: "geotgeotoni",
    title: "-(겠)거니 (deb o‘ylab / taxmin qilib)",
    level: "O'rta 1",
    tags: ["Assumption", "Speaker’s thought", "Written"],
    meaning:
      "So‘zlovchining ichki taxmini yoki oldindan o‘ylagan fikrini bildiradi: “... bo‘lsa kerak deb” / “... bo‘ladi deb o‘ylab”. -겠- bilan kuchliroq taxmin.",
    forms: [
      "동사/형용사 + 거니 (하다/생각하다)",
      "동사/형용사 + 겠거니 (하다/생각하다)",
      "… 겠거니 하고 + 행동 (— deb o‘ylab … qildim)"
    ],
    usage:
      "Odatda o‘z taxminiga tayangan holda keyingi harakatni izohlashda: “sovuq bo‘lsa kerak deb palto kiyib oldim”.",
    examples: [
      {
        ko: "일을 잘 할 수 있겠거니 했는데 결국 아무것도 못 했습니다.",
        uz: "Yaxshi eplayman deb o‘ylagandim, oxir-oqibat hech narsa qila olmadim."
      },
      {
        ko: "이런 상황에서 내 도움이 필요 없거니 했습니다.",
        uz: "Bu holatda mening yordami kerak bo‘lmasa kerak deb o‘yladim."
      },
      {
        ko: "춥겠거니 하고 두꺼운 코트를 입었어요.",
        uz: "Sovuq bo‘lsa kerak deb qalin palto kiyib oldim."
      }
    ],
    quiz: [
      {
        id: "m2q1",
        question: "비가 오__ 하고 우산을 가져왔어요.",
        options: ["거니", "겠거니", "거든"],
        correctIndex: 1,
        explain: "‘… bo‘lsa kerak deb’ → 겠거니 하고."
      }
    ]
  },
  {
    id: "geodeun",
    title: "-거든 (agar/bo‘lsa — shunda)",
    level: "O'rta 1",
    tags: ["Condition", "Imperative/Proposal", "Spoken"],
    meaning:
      "Shart-ma’noli bog‘lovchi: “agar … bo‘lsa/bo‘lganda”. Ko‘pincha keyingi gap buyruq, maslahat yoki taklif bo‘ladi.",
    forms: ["동사/형용사 + 거든", "명사 + (이)거든"],
    usage:
      "1-g‘arb (ergash gap) shartni bildiradi; 2-g‘arb (bosh gap) odatda imperativ/propozitiv: “agar muammo bo‘lsa, ayting”. Odatda o‘tmish zamoni bilan kelmaydi.",
    examples: [
      {
        ko: "부탁이 있거든 말씀해 주세요.",
        uz: "Iltimosingiz bo‘lsa, ayting."
      },
      {
        ko: "한국에 오거든 꼭 연락하세요.",
        uz: "Koreyaga kelsangiz, albatta bog‘laning."
      },
      {
        ko: "시간이 없거든 내일 하세요.",
        uz: "Vaqtingiz bo‘lmasa, ertaga qiling."
      }
    ],
    quiz: [
      {
        id: "m3q1",
        question: "문제가 있__ 바로 알려 주세요.",
        options: ["거늘", "거든", "겠거니"],
        correctIndex: 1,
        explain: "Shart + iltimos (imperativ) — -거든."
      }
    ]
  },
  {
  id: "geodeunyo",
  title: "-거든요 (axir-ku / aslida…)",
  level: "O'rta 1",
  tags: ["Spoken", "Ending", "Explanation"],
  meaning:
    "Gap oxirida yumshoq ‘tushuntirish/asoslash’ yoki yangi ma’lumot berish uchun ishlatiladi. Qarshi tarafga muloyim e’tiroz yoki sababni bildiradi.",
  forms: ["동사/형용사 + 거든요", "명사 + (이)거든요"],
  usage:
    "Imperativ/taklif bilan kam qo‘shiladi; ko‘proq faktni tushuntirish: ‘axir hozir bandman-ku’. Ko‘pincha suhbatdosh bilmagan ma’lumotni muloyimcha qo‘shadi.",
  examples: [
    { ko: "지금 바쁘거든요.", uz: "Hozir bandman-ku (aslida bandman)." },
    { ko: "이 책 제 거거든요.", uz: "Bu kitob aslida meniki-ku." },
    {
      ko: "내일 시험이거든요, 그래서 일찍 가야 해요.",
      uz: "Ertaga imtihonim bor-ku, shuning uchun erta ketishim kerak."
    }
  ],
  quiz: [
    {
      id: "m3q2",
      question: "오늘은 못 가요. 약속이 ___.",
      options: ["거든요", "거든", "겠거니"],
      correctIndex: 0,
      explain: "Tushuntirish ohangi – gap oxiri -거든요."
    }
  ]
},

{
  id: "geon-geon",
  title: "-건 -건 (…-mi …-mi, baribir)",
  level: "O'rta 2",
  tags: ["Alternation", "Generalization"],
  meaning:
    "Ikki (yoki ko‘proq) variantdan qaysi biri bo‘lishidan qat’i nazar bir xil natijani bildiradi: “…-mi …-mi (baribir)”.",
  forms: ["동사/형용사 어간 + 건 … 건", "명사 + (이)건 … (이)건"],
  usage:
    "Qarama-qarshi yoki muqobil holatlar yonma-yon keladi. Ko‘pincha odat, qat’iy niyat yoki umumlashtirishni ifodalaydi.",
  examples: [
    { ko: "비가 오건 눈이 오건 갈 거예요.", uz: "Yomg‘ir bo‘ladimi, qor bo‘ladimi — baribir boraman." },
    { ko: "주말이건 평일이건 항상 연습해요.", uz: "Dam oladimi, ish kunimi — doim mashq qilaman." },
    { ko: "맛있건 맛없건 잘 먹어요.", uz: "Mazalimi, bemazami — yaxshi yeyman." }
  ],
  quiz: [
    {
      id: "m3q3",
      question: "더우__ 추우__ 운동은 할 거예요.",
      options: ["면 / 면", "건 / 건", "든 / 든"],
      correctIndex: 1,
      explain: "Muqobillar: -건 -건."
    }
  ]
},

{
  id: "geonmaneun",
  title: "-건만(은)/건만 (… bo‘lsa-da, lekin)",
  level: "O'rta 2",
  tags: ["Concession", "Written"],
  meaning:
    "Qarshi ma’no: ‘…-sada/… bo‘lsa-da’. Ko‘proq yozma uslubda, rasmiy matnlarda ishlatiladi.",
  forms: ["동사/형용사 + 건만(은)"],
  usage:
    "Kutilgan natijaga zid holatni bildiradi. Ko‘pincha sal jiddiy, yozma ohang. Og‘zaki nutqda -지만 ko‘proq uchraydi.",
  examples: [
    { ko: "노력했건만 성과가 없었다.", uz: "Harakat qildim-u, ammo natija bo‘lmadi." },
    { ko: "도와주었건만 고맙다는 말이 없네요.", uz: "Yordam berdim-u, lekin ‘rahmat’ degan gap ham yo‘q." },
    { ko: "비가 그쳤건만 길은 미끄럽다.", uz: "Yomg‘ir to‘xtagan bo‘lsa-da, yo‘l sirpanchiq." }
  ],
  quiz: [
    {
      id: "m3q4",
      question: "열심히 했__ 결과가 아쉬웠다.",
      options: ["거든", "건만", "겠거니"],
      correctIndex: 1,
      explain: "Qarshi ma’no (… qildim-u, lekin …) — -건만."
    }
  ]
},
{
  id: "gekkeum",
  title: "-게끔 (… qilishi uchun / shunday bo‘ladigan qilib)",
  level: "O'rta 1",
  tags: ["Purpose", "Result", "Emphasis", "Spoken"],
  meaning:
    "Harakatning maqsadi yoki natijasini kuchli urg‘u bilan bildiradi: “shunday bo‘lishi uchun / qila olmasligi uchun”. Ko‘pincha -도록 ga yaqin, lekin urg‘u kuchliroq.",
  forms: ["동사/형용사 + 게끔"],
  usage:
    "Kimnidir/biror narsani ‘shunday holatga’ keltirish: ~하게끔 만들다/준비하다/하다. Salbiy shaklda ‘qila OLmasligi uchun’ (~지 못하게끔) ham ishlatiladi.",
  examples: [
    { ko: "누가 와서 보더라도 만족하게끔 신경 써서 준비해 둡시다.",
      uz: "Kim kelib ko‘rsa ham qoniqsin, deb e’tibor bilan tayyorlab qo‘yaylik." },
    { ko: "문을 잠가서 도둑이 들어오지 못하게끔 하세요.",
      uz: "Eshikni qulflab, o‘g‘ri kira olmasligi uchun qiling." },
    { ko: "아이들이 편하게끔 자리를 다시 배치했어요.",
      uz: "Bolalar qulay bo‘lishi uchun joylashuvni qayta o‘zgartirdim." }
  ],
  quiz: [
    {
      id: "gkq1",
      question: "손님들이 만족하__ 준비해 놓읍시다.",
      options: ["도록", "게끔", "만큼"],
      correctIndex: 1,
      explain: "Kuchli maqsad/natija urg‘usi — ‘만족하게끔’."
    }
  ]
},

{
  id: "gyeolko-jeoldaero",
  title: "결코 / 절대로 (aslo, asla — faqat inkor bilan)",
  level: "O'rta 1",
  tags: ["Negation", "Adverb", "Emphasis"],
  meaning:
    "“Aslo/umuman” ma’nosini beradi va **doim** inkor bilan keladi: 안/못/지 않다/없다 va hok.",
  forms: ["결코 + 부정", "절대로 + 부정"],
  usage:
    "Rasmiy (결코) va og‘zaki (절대로) ohang; keskin taqiqlash yoki qat’iy inkor. Yolg‘iz ishlatilmaydi, albatta salbiy predikat kerak.",
  examples: [
    { ko: "지금 나가면 결코 안 됩니다.",
      uz: "Hozir chiqish aslo mumkin emas." },
    { ko: "저는 그런 일은 절대로 하지 않겠습니다.",
      uz: "Men bunday ishni aslo qilmayman." },
    { ko: "이것은 결코 농담이 아닙니다.",
      uz: "Bu aslo hazil emas." }
  ],
  quiz: [
    {
      id: "kjq1",
      question: "저는 규칙을 ___ 어기지 않겠습니다.",
      options: ["절대로", "게끔", "경"],
      correctIndex: 0,
      explain: "절대로/결코 faqat inkor bilan: ‘어기지 않겠습니다’."
    }
  ]
},

{
  id: "gyeong-yeo",
  title: "-경 / -여 (taxminiy vaqt ‘…larda’ / ‘…-chalar’)",
  level: "O'rta 1",
  tags: ["Approximation", "Numbers", "Time"],
  meaning:
    "‘~경’ — vaqt/kun atrofida (“…larda”); ‘~여’ — **10 va undan katta** sonlarga qo‘shilib ‘…-chalar, o‘n nechcha’ ma’nosini beradi.",
  forms: ["시간/날짜 + 경 (세 시경, 12시경, 주말경)", "수사(10+) + 여 + 명/개/권/원 … (십여 명, 이십여 개)"],
  usage:
    "‘경’ odatda o‘q soat/vaqt bilan; ‘여’ noaniq, biroz ortiq miqdor: 십여 명≈“o‘n nechta kishi”. ‘여’ 10 dan kichik sonlar bilan ishlatilmaydi.",
  examples: [
    { ko: "내일 오후 세 시경에 다시 올게요.",
      uz: "Ertaga tushdan keyin soat uchlar atrofida yana kelaman." },
    { ko: "회의는 12시경에 끝날 것 같아요.",
      uz: "Majlis soat 12 lar atrofida tugasa kerak." },
    { ko: "행사에 이십여 명이 모였습니다.",
      uz: "Tadbirga yigirmatalarcha kishi yig‘ildi (20 dan biroz ortiq)." }
  ],
  quiz: [
    {
      id: "gyq1",
      question: "내일 다섯 __ 다시 만나요.",
      options: ["경", "여", "게끔"],
      correctIndex: 0,
      explain: "Vaqt/soat atrofida — ‘다섯 시경’."
    },
    {
      id: "gyq2",
      question: "참가자는 십__ 명 정도였어요.",
      options: ["경", "여", "절대로"],
      correctIndex: 1,
      explain: "10+ sonlarda ‘~여’: 십여 명 — ‘o‘n nechta kishi’."
    }
  ]
},
{
  id: "go-nada",
  title: "-고 나다 (… qilib bo‘lgach / tugagach)",
  level: "O'rta 1",
  tags: ["Sequence", "Result", "After"],
  meaning:
    "Bosh gapdagi harakat birinchi ish tugaganidan **keyin** yuz berganini bildiradi. ‘… qilib bo‘lgach’ ohangi bor.",
  forms: ["동사 + 고 나다", "동사 + 고 나면 (shart)"],
  usage:
    "Ko‘pincha harakatning yakuni va undan keyingi **natija**ga urg‘u beradi: 비가 오고 나면 선선해져요. Holat fe’llari bilan kamroq, odatda harakat fe’llari bilan keladi.",
  examples: [
    { ko: "이 책을 읽고 나면 생각이 좀 달라질 거예요.",
      uz: "Bu kitobni o‘qib tugatgandan so‘ng fikringiz biroz o‘zgaradi." },
    { ko: "비가 오고 나면 날씨가 시원해지겠지요.",
      uz: "Yomg‘ir yog‘ib tugagandan so‘ng havo salqinlashadi." },
    { ko: "수업이 끝나고 나면 점심을 먹어요.",
      uz: "Dars tugagach, tushlik qilaman." }
  ],
  quiz: [
    {
      id: "gnq1",
      question: "회의가 끝__ 나서 이야기합시다.",
      options: ["고", "고 나고", "고 나면"],
      correctIndex: 2,
      explain: "Shart ohangi: ‘끝나고 나면 … 합시다’ — tugagach keyin gaplashaylik."
    }
  ]
},

{
  id: "go-naseo",
  title: "-고 나서 (… qilib bo‘lgach, keyin)",
  level: "O'rta 1",
  tags: ["Sequence", "After", "Narration"],
  meaning:
    "Avvalgi ish **yakunlangach**, keyingi ish bajarilganini bildiradi. Ketma-ketlikni aniq qiladi.",
  forms: ["동사 + 고 나서"],
  usage:
    "Ko‘pincha izoh/ketma-ketlik: ‘… qilib bo‘lib, keyin …’. Imperativ/propozitiv bilan ham ishlatiladi: 숙제하고 나서 놀자.",
  examples: [
    { ko: "성희는 돈을 챙겨 넣고 나서 옷을 갈아입었다.",
      uz: "Songhee pulni joylashtirgandan keyin kiyimini almashtirdi." },
    { ko: "중학교 일학년을 마치고 나서 방학을 시골에서 보냈다.",
      uz: "O‘rta maktab birinchi bosqichini tugatgach, ta’tilni qishloqda o‘tkazdim." },
    { ko: "숙제하고 나서 게임하세요.",
      uz: "Uy vazifangizni qilib bo‘lgach, o‘yin o‘ynang." }
  ],
  quiz: [
    {
      id: "gns1",
      question: "밥을 먹__ 나서 약을 드세요.",
      options: ["고", "고 나서", "면"],
      correctIndex: 1,
      explain: "Ketma-ketlikni aniq bildiruvchi shakl — ‘먹고 나서’."
    }
  ]
},

{
  id: "go-naseoya",
  title: "-고 나서야 (faqat … qilib bo‘lgach / shundan keyingina)",
  level: "O'rta 2",
  tags: ["Emphasis", "Only-after", "Sequence"],
  meaning:
    "“Faqat … qilib bo‘lgachgina” ma’nosini kuchli urg‘u bilan bildiradi. ‘Not until …’ ohangi.",
  forms: ["동사 + 고 나서야"],
  usage:
    "Ko‘pincha ikkinchi gapda ‘알다/깨닫다/되다/가능하다’ kabi fe’llar keladi: ‘… qilib bo‘lgachgina tushundim/bo‘ldi’. Birinchi ish tugaguncha kutilgan holat sodir bo‘lmaganini anglatadi.",
  examples: [
    { ko: "모든 일을 끝내고 나서야 쉴 수 있었어요.",
      uz: "Hamma ishni tugatib bo‘lgachgina dam ola oldim." },
    { ko: "설명을 듣고 나서야 이해했습니다.",
      uz: "Tushuntirishni eshitib bo‘lgachgina tushundim." },
    { ko: "문을 고치고 나서야 사용할 수 있었어요.",
      uz: "Eshikni tuzatib bo‘lgachgina foydalanish mumkin bo‘ldi." }
  ],
  quiz: [
    {
      id: "gnsy1",
      question: "경험해 보__ 나서야 그 어려움을 알았다.",
      options: ["고", "고 나서야", "면"],
      correctIndex: 1,
      explain: "‘Faqat tajriba qilib ko‘rgachgina’ — ‘해 보고 나서야’."
    }
  ]
},
{
  id: "go-boni",
  title: "-고 보니 (… qilib qarasam/ko‘rsam)",
  level: "O'rta 1",
  tags: ["Realization", "After", "Narration"],
  meaning:
    "Biror ish sodir bo‘lgach, shundan keyin payqagan, bilib olgan natijani bildiradi: “qilib qarasam/ko‘rsam…”.",
  forms: ["동사 + 고 보니", "형용사 + 고 보니", "명사 + (이)고 보니"],
  usage:
    "Ko‘pincha o‘tgan zamon bilan keladi va kutilmagan kashfiyot/anglashni beradi: 가 보니, 만나 보니. Keyingi qismda yangi fakt keladi.",
  examples: [
    { ko: "알고 보니 그는 고생을 많이 한 사람이더군요.",
      uz: "Yaxshiroq o‘rganib ko‘rsam, u ko‘p qiynalgan inson ekan." },
    { ko: "사고를 당하고 보니 무엇부터 해야 할지 몰랐어요.",
      uz: "To‘satdan hodisa bo‘lib, nima qilishni bilmay qoldim." },
    { ko: "지난날을 돌아보고 보니 모두 추억으로 남네요.",
      uz: "Orqaga qarab ko‘rsam, hammasi xotira bo‘lib qolibdi." }
  ],
  quiz: [
    {
      id: "gobn1",
      question: "한국에 와 __ 보니 생각이 많이 달라졌어요.",
      options: ["고", "고서", "고"],
      correctIndex: 0,
      explain: "‘Kelib ko‘rsam…’ — 와 **고 보니**."
    }
  ]
},
{
  id: "go-seo",
  title: "-고서 (… qilib, shundan keyin / faqat undan keyin)",
  level: "O'rta 1",
  tags: ["Sequence", "Order", "Only-after"],
  meaning:
    "Vaqt va tartibni qat’iy ko‘rsatadi: avval Ani **qilib**, shundan keyin B sodir bo‘ladi. Ba’zan ‘faqat A bo‘lgach’ ohangi bor.",
  forms: ["동사 + 고서"],
  usage:
    "Ketma-ketlikni ta’kidlaydi (깎아 놓고서, 넣고서). Buyruq/zarurat bilan ko‘p keladi: 먼저 ~하고서 …. -고 나서 ga yaqin, lekin ‘shart/tartib’ urg‘usi kuchli.",
  examples: [
    { ko: "과일을 깎아 놓고서 커피를 타기 시작했다.",
      uz: "Mevani archib qo‘ygandan keyin kofe damlashni boshladim." },
    { ko: "콩나물을 삶을 때에는 소금을 넣고서 뚜껑을 닫아 놓아야 해요.",
      uz: "No‘xotni qaynatar ekansiz, tuz solib qopqog‘ini yopib qo‘yish kerak." },
    { ko: "음식을 먹어 보고서 뭐가 제일 맛있는지 말할게요.",
      uz: "Ovqatlarni tatib ko‘rgach, qaysi biri eng mazzali ekanini aytaman." }
  ],
  quiz: [
    {
      id: "goseo1",
      question: "먼저 손을 씻__ 밥을 준비하세요.",
      options: ["고서", "고 보니", "면"],
      correctIndex: 0,
      explain: "Tartib: ‘avval qo‘lni yuvib, keyin …’ — 씻**고서**."
    }
  ]
},
{
  id: "go-seorado",
  title: "-고서라도 (hatto … qilishga to‘g‘ri kelsa ham)",
  level: "O'rta 2",
  tags: ["Concession", "Emphasis", "Determination"],
  meaning:
    "Ma’qsad niyat yo‘lida qiyinchilik/qarshilikka **qaramasdan**, ‘hatto shunday qilishimga to‘g‘ri kelsa ham’ degan qat’iyatni bildiradi.",
  forms: ["동사 + 고서라도"],
  usage:
    "Ko‘pincha maqsad/zarurat bilan: ~고서라도 꼭…, ~고서라도 해야겠다. ‘…ga qaramay/hatto shunday bo‘lsa ham’ ohangi bor.",
  examples: [
    { ko: "희생을 치르고서라도 반드시 목표를 달성해야 합니다.",
      uz: "Qurbonliklar bilan bo‘lsa ham, maqsadga albatta erishish kerak." },
    { ko: "부모님의 반대를 무릅쓰고서라도 그 사람과 결혼할 거예요?",
      uz: "Ota-onangning qarshiligiga qaramasdan u bilan turmush qurmoqchimisiz?" },
    { ko: "밤을 새우고서라도 내일까지 끝내겠습니다.",
      uz: "Hatto tun bo‘yi uxlamay bo‘lsa ham, ertaga qadar tugataman." }
  ],
  quiz: [
    {
      id: "gosrd1",
      question: "시간이 없으면 밤을 새__라도 보고서를 내겠습니다.",
      options: ["고서", "고서", "고서"],
      correctIndex: 0,
      explain: "Imtiyoz/qat’iyat: ‘밤을 새**고서라도**’."
    }
  ]
},
{
  id: "go-seoya",
  title: "-고서야 (faqat … qilib bo‘lgachgina)",
  level: "O'rta 2",
  tags: ["Only-after", "Emphasis", "Condition"],
  meaning:
    "‘Faqat … bo‘lgachgina’ ma’nosini kuchli urg‘u bilan bildiradi; -고 나서야 ga yaqin.",
  forms: ["동사 + 고서야"],
  usage:
    "Keyingi qism odatda 가능하다/되다/알다 kabi fe’llar bilan keladi: ‘~하고서야 가능하다/알다’. Oldin bajarilmasa, B sodir bo‘lmasligini ta’kidlaydi.",
  examples: [
    { ko: "검토를 마치고서야 발표할 수 있어요.",
      uz: "Tekshiruvni tugatgachginagina e’lon qilish mumkin." },
    { ko: "직접 경험해 보고서야 그 어려움을 알게 됩니다.",
      uz: "Bevosita boshdan kechirib ko‘rgachginagina o‘sha qiyinchilikni biladi." },
    { ko: "문제를 정확히 이해하고서야 다음 단계로 갈 수 있어요.",
      uz: "Masalani to‘liq tushunib bo‘lgachginagina keyingi bosqichga o‘tish mumkin." }
  ],
  quiz: [
    {
      id: "gsoy1",
      question: "모든 서류를 준비하__야 접수가 됩니다.",
      options: ["고", "고서", "고서"],
      correctIndex: 2,
      explain: "‘Faqat tayyorlab bo‘lgachgina qabul qilinadi’ — 준비하고**서야**."
    }
  ]
},
/* 21) -고자(하다) — niyat / maqsad */
{
  id: "goja-hada",
  title: "-고자(하다) (niyat/maqsad — “...moqchiman”)",
  level: "O'rta 1",
  tags: ["Intention", "Formal/Written", "Purpose"],
  meaning:
    "So‘zlovchining niyatini yoki maqsadini bildiradi: “... qilmoqchiman / ... qilish niyatidaman”. Rasmiy-yozuvida ko‘proq uchraydi.",
  forms: ["동사 + 고자 하다", "동사 + 고자"],
  usage:
    "Ko‘pincha rasmiy bayonot, e’lon, reja: 연구하고자 한다, 개최하고자 합니다. Og‘zaki so‘zlashuvda -려고 하다 ko‘proq ishlatiladi.",
  examples: [
    { ko: "이 달까지 원고를 다 쓰고자 합니다.", uz: "Ushbu oy oxirigacha qo‘lyozmani yozib qo‘ymoqchiman." },
    { ko: "누구나 좋은 집에서 잘 살고자 할 거예요.", uz: "Hamma yaxshi uyda yaxshi yashashni xohlaydi." },
    { ko: "내년에 한국에 유학하고자 합니다.", uz: "Kelasi yili Koreyada o‘qish niyatim bor." }
  ],
  quiz: [
    {
      id: "goja1",
      question: "올해 안에 책을 완성하__ 합니다.",
      options: ["고자", "도록", "려면"],
      correctIndex: 0,
      explain: "Niyat/maqsadni rasmiy ifodalash — **-고자 하다**."
    }
  ]
},

/* 22) -고 해서 — ‘shuning uchun ham’ (bir nechta sababdan biri) */
{
  id: "go-haeseo",
  title: "-고 해서 (bir sabab — ‘shuning uchun ham’)",
  level: "O'rta 1",
  tags: ["Reason", "Spoken", "Multiple-causes"],
  meaning:
    "Bir nechta sababdan **biri** sifatida ko‘rsatiladi: “... ham (sabab bo‘lgani uchun) ... qildim”. Ko‘pincha ‘~기도 하고 ~해서’ bilan keladi.",
  forms: ["동사/형용사 + 고 해서"],
  usage:
    "Ko‘proq og‘zaki: 피곤하고 해서 일찍 잤어요. Buyruq/taklifda ham: 춥고 하니까 조심해. ‘Bir necha sababdan’ ohangi bor.",
  examples: [
    { ko: "모처럼 한가하고 해서 특별 요리를 준비해 봤어요.", uz: "Uzoq kutilgan bo‘sh vaqt bo‘lgani uchun o‘zgacha taom tayyorlab ko‘rdim." },
    { ko: "날씨도 춥고 해서 조심해서 다녀오렴.", uz: "Havo ham sovuq, ehtiyot bo‘lib borib kel." },
    { ko: "비도 오고 해서 집에 있었어요.", uz: "Yomg‘ir ham yog‘ayotgani uchun uyda bo‘ldim." }
  ],
  quiz: [
    {
      id: "ghs1",
      question: "피곤하__ 일찍 잤어요.",
      options: ["고 해서", "니까", "면서"],
      correctIndex: 0,
      explain: "Bir necha sababdan **biri** sifatida aytilyapti — **-고 해서**."
    }
  ]
},

/* 23) -곤 하다 — odatda / odat bo‘yicha takror */
{
  id: "gon-hada",
  title: "-곤 하다 (odatda, ko‘pincha — takroriy odat)",
  level: "O'rta 1",
  tags: ["Habit", "Iteration", "PastHabit"],
  meaning:
    "Takrorlanib turuvchi odatni bildiradi: “odatda ... qilaman/ qilardim”. Ko‘pincha o‘tgan zamon bilan o‘tmish odatini aytadi.",
  forms: ["동사 + 곤 하다"],
  usage:
    "Hozirgi odat: -곤 해요; o‘tgan odat: -곤 했어요. ‘때마다’ bilan ko‘p ishlatiladi.",
  examples: [
    { ko: "시간이 있을 때마다 수영장에 가곤 했어요.", uz: "Vaqtim bo‘lganda basseynga borib turardim." },
    { ko: "작년부터 헬스클럽에서 운동을 하곤 합니다.", uz: "O‘tgan yildan beri sport zalida mashq qilib turaman." },
    { ko: "그를 도와주곤 했어요.", uz: "Unga yordam berib turardim." }
  ],
  quiz: [
    {
      id: "gon1",
      question: "어릴 때는 주말마다 시골에 가__ 했어요.",
      options: ["곤", "고", "게"],
      correctIndex: 0,
      explain: "Takroriy odat — **-곤 하다**."
    }
  ]
},

/* 24) 구태여 -(으)ㄹ 필요가 없다 — “ataylab shart emas / hojat yo‘q” */
{
  id: "gutayeo-pil",
  title: "구태여 -(으)ㄹ 필요가 없다 (hojat yo‘q, ‘ataylab shart emas’)",
  level: "O'rta 2",
  tags: ["Necessity", "Negative", "Emphasis"],
  meaning:
    "‘Ayniqsa/ataylab’ shuni qilishning **hojati yo‘qligi**ni bildiradi: “bekoriga … qilishning keragi yo‘q”.",
  forms: ["구태여 + 동사 + (으)ㄹ 필요가 없다"],
  usage:
    "구태여 so‘zi urg‘uni kuchaytiradi: ‘albatta shart emas’. Oddiy shakli: -(으)ㄹ 필요가 없다.",
  examples: [
    { ko: "구태여 그렇게 할 필요가 없어요.", uz: "Bunday qilib o‘tirishning hojatı yo‘q." },
    { ko: "이미 다 알잖아. 구태여 설명할 필요는 없어요.", uz: "Allaqachon bilasan-ku. Ataylab tushuntirish shart emas." },
    { ko: "구태여 싸울 필요가 없잖아요.", uz: "Bekorga urishib o‘tirishning keragi yo‘q-ku." }
  ],
  quiz: [
    {
      id: "gtp1",
      question: "이미 다 알잖아. 구태여 다시 말할 ___ 없어.",
      options: ["필요가", "것이", "생각이"],
      correctIndex: 0,
      explain: "Kollokatsiya: **필요가 없다** — ‘kerak/hojat yo‘q’."
    }
  ]
},
/* 25) -군요 — undov, yangi anglash */
{
  id: "gunyo",
  title: "-군요 (hayrat/anglash undovi)",
  level: "O'rta 2",
  tags: ["Exclamative", "Realization", "Polite"],
  meaning:
    "Yangi ma’lumotni shu zahoti anglaganda yoki hayrat bildirganda: “-ekan-ku!”, “-ku!”. Hurfatli undov shakli.",
  forms: ["(현재) 동사/형용사 + 는군요", "(과거) 동사/형용사 + 았/었군요", "(추측) + 겠군요", "명사 + (이)군요"],
  usage:
    "Ko‘pincha ko‘z bilan ko‘rish/eshitishdan keyingi **kashf** ohangi. Oddiy (kam hurmat) parallel: -구나. Savol yoki buyruqda ishlatilmaydi.",
  examples: [
    { ko: "빨리 오셨군요.", uz: "Tez kelibsiz-ku." },
    { ko: "이렇게 하시면 힘드시겠군요.", uz: "Bunday qilsangiz qiyin bo‘lar-ku." },
    { ko: "저 선수는 정말 빨리 뛰는군요!", uz: "Anavi sportchi juda tez yugurar ekan-ku!" }
  ],
  quiz: [
    {
      id: "gunyo1",
      question: "한국어를 정말 잘하__! (hayrat)",
      options: ["는군요", "다니까요", "거든요"],
      correctIndex: 0,
      explain: "Hayrat / yangi anglash — **-군요** (hozirgi fe’l: 잘하**는군요**)."
    }
  ]
},

/* 26) 그다지 — “unchalik … emas” (ko‘pincha inkor bilan) */
{
  id: "geudaji",
  title: "그다지 (unchalik … emas)",
  level: "O'rta 1",
  tags: ["Degree", "Negation", "Adverb"],
  meaning:
    "“Unchalik/ko‘p ham … emas” ohangini beradi. Odatda **inkor** predikati bilan keladi.",
  forms: ["그다지 + 부정 서술어(안/못/~지 않다)"],
  usage:
    "Ijobiy bilan kam uchraydi; odatda ‘o‘ylaganchalik emas’ ni bildiradi: 그다지 비싸지 않다, 그다지 위험하지 않다.",
  examples: [
    { ko: "이 옷은 그다지 비싸지 않습니다.", uz: "Bu kiyim unchalik qimmat emas." },
    { ko: "생각보다 그다지 위험하지 않습니다.", uz: "O‘ylaganimizdek xavfli emas ekan." },
    { ko: "디자인이 그다지 아름답지 않네요.", uz: "Dizayni unchalik chiroyli emas-ku." }
  ],
  quiz: [
    {
      id: "gdj1",
      question: "그 영화는 ____ 재미있지 않았어요.",
      options: ["그다지", "아주", "매우"],
      correctIndex: 0,
      explain: "“Unchalik … emas” — **그다지** + inkor."
    }
  ]
},

/* 27) 그래도 그렇지 — “mayliku-ya lekin / baribir-ku” (tanbeh) */
{
  id: "geuraedo-geureochi",
  title: "그래도 그렇지 (mayliku-ya, lekin… / baribir-ku)",
  level: "O'rta 2",
  tags: ["Concession", "Reproach", "Spoken"],
  meaning:
    "Murosaga qaramay tanbeh yoki e’tiroz: “mayliku-ya, lekin…”, “baribir-ku…”. Holatni qabul qilsa ham, keyingi gapda qoralash/taqiq keladi.",
  forms: ["(상황 설명) + 그래도 그렇지, (비판/금지)."],
  usage:
    "Ko‘proq og‘zaki nutqda, yaqin ohangda. Ko‘pincha **안/못/~면 안 되다, 말이 되냐** kabi qoralovchi iboralar bilan.",
  examples: [
    { ko: "그래도 그렇지, 수업을 빠지면 안 되잖아.", uz: "Mayliku-ya, lekin darsni qoldirish mumkin emas-ku." },
    { ko: "그래도 그렇지, 부모님께 그렇게 말하면 되니?", uz: "Shunday bo‘lsa ham, ota-onangga unday deyish to‘g‘rimi?" },
    { ko: "그래도 그렇지, 이렇게 늦게 오다니!", uz: "Baribir-ku, bunaqa kech kelish bo‘ladimi!" }
  ],
  quiz: [
    {
      id: "grdj1",
      question: "___, 숙제를 베끼면 안 되지.",
      options: ["그래도 그렇지", "그러니까", "그런데요"],
      correctIndex: 0,
      explain: "Tanbeh/qarshilik ohangi — **그래도 그렇지**."
    }
  ]
},
/* 29) 그렇지 않아도 — “aslida ham shunday edi / baribir shuni qilmoqchi edim” */
{
  id: "geureochi-anado",
  title: "그렇지 않아도 (aslida ham / baribir)",
  level: "O'rta 1",
  tags: ["Expression", "Spoken", "Discourse"],
  meaning:
    "Suhbatdosh aytgan narsa voqea bilan **to‘g‘ri kelayotganini** bildiradi: “aslida (men) ham shuni qilmoqchi edim”, “baribir… edi”.",
  forms: ["그렇지 않아도 + (asosiy gap)"],
  usage:
    "Ko‘pincha kutilgan/oldindan rejalangan ish bilan mos tushganini aytishda. Odatda gap boshida keladi va keyingi gapda reja/harakat bayon qilinadi.",
  examples: [
    {
      ko: "빵을 사와서 다행이에요. 그렇지 않아도 마침 시장에 가려던 참이었어요.",
      uz: "Non olib kelganingiz yaxshi bo‘ldi. Aslida bozorga endi chiqmoqchi edim."
    },
    {
      ko: "자네가 왔으니 다행이야. 그렇지 않아도 연락하려고 했거든.",
      uz: "Kelganing yaxshi bo‘ldi. Baribir o‘zim ham qo‘ng‘iroq qilmoqchi edim."
    }
  ],
  quiz: [
    {
      id: "gca1",
      question: "___ 요즘 좀 바빠서 먼저 연락 못 했어요.",
      options: ["그렇지 않아도", "그래도 그렇지", "그다지"],
      correctIndex: 0,
      explain: "Voqea bilan mos tushishini bildiradi — **그렇지 않아도**."
    }
  ]
},

/* 30) -기 — fe’lni otlashtirish (harakat nomi) */
{
  id: "gi-nominalizer",
  title: "-기 (harakat nomi)",
  level: "O'rta 1",
  tags: ["Nominalization", "Grammar"],
  meaning:
    "Fe’l/sifat negiziga qo‘shilib **harakat nomi** qiladi (otlashadi) va gapda ega, to‘ldiruvchi yoki hol bo‘laklari bo‘lib keladi.",
  forms: [
    "동사/형용사 + 기",
    "… + 기가/는/에/도/를 (bo‘lak ko‘rsatkichlari bilan)"
  ],
  usage:
    "Ko‘pincha quyidagilar bilan: 쉽다, 어렵다, 바라다, 희망하다, 좋다, 나쁘다, 힘들다, 불편하다 va h.k.",
  examples: [
    { ko: "이 경기는 이기기 쉽지 않습니다.", uz: "Bu musobaqada yutish oson emas." },
    { ko: "빨리 퇴원하기를 바랍니다.", uz: "Tezda tuzalib chiqishingizni tilayman." },
    { ko: "짜지 않아서 먹기가 좋습니다.", uz: "Sho‘r bo‘lmagani uchun yeyish yaxshi." }
  ],
  quiz: [
    {
      id: "gi1",
      question: "한국어를 잘 말하__ 어렵지 않아요.",
      options: ["기", "게", "도록"],
      correctIndex: 0,
      explain: "Otlash: 말하**기** 어렵다/쉽다."
    }
  ]
},

/* 31) -기가 — -기 + 가 (harakat nomi EGAdir) */
{
  id: "giga-subject",
  title: "-기가 (harakat nomi + ega ko‘rsatkichi)",
  level: "O'rta 1",
  tags: ["Nominalization", "Subject", "Pattern"],
  meaning:
    "Otlashgan fe’l (-기)ga **-가** qo‘shilib, u butun iborani **egaga** aylantiradi; ko‘pincha sifatdosh fe’llar bilan baholanadi.",
  forms: ["동사 + 기가 + (쉽다/어렵다/편하다/불편하다/힘들다/좋다/싫다/재미있다 …)"],
  usage:
    "Joy/holat bahosi: 여기 주차하기가 불편해요; Shaxsiy qiyinchilik: 아침에 일어나기가 힘들어요 va h.k.",
  examples: [
    { ko: "한국어를 말하기가 어려워요.", uz: "Koreyscha gapirish qiyin." },
    { ko: "아침에 일어나기가 힘듭니다.", uz: "Ertalab turish og‘ir." },
    { ko: "여기에서 주차하기가 불편해요.", uz: "Bu yerda mashina qo‘yish noqulay." }
  ],
  quiz: [
    {
      id: "giga1",
      question: "이 길은 밤에 운전하__ 위험해요.",
      options: ["기가", "게", "도록"],
      correctIndex: 0,
      explain: "Baholash konstruktsiyasi: 운전하**기가** 위험하다."
    }
  ]
}
];
