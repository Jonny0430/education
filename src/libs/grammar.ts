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
  meaning:
    "Fe’l, sifat yoki olmoshlarga qo‘shilib ikkita yoki undan ortiq gapni bog‘laydi. O‘zbekchada 'yoki' deb tarjima qilinadi.",
  forms: ["Fe’l +거나", "Sifat +거나", "Olmosh +거나"],
  usage: "Ikkita yoki bir nechta harakatni tanlash ma’nosida qo‘llanadi.",
  examples: [
    {
      ko: "저는 주말에 여행을 가거나 책을 읽어요.",
      uz: "Men dam olish kunlari sayohat qilaman yoki kitob o‘qiyman.",
      ru: "По выходным я путешествую или читаю книги.",
      en: "On weekends I travel or read books."
    },
    {
      ko: "학교에서 공부를 하거나 운동을 합니다.",
      uz: "Men maktabda o‘qiyman yoki sport bilan shug‘ullanaman.",
      ru: "В школе я либо учусь, либо занимаюсь спортом.",
      en: "At school I either study or do sports."
    },
    // +3 yangi
    {
      ko: "점심에 비빔밥을 먹거나 라면을 먹을래요.",
      uz: "Tushlikda bibimbap yoki ramyon yeyman.",
      ru: "На обед я съем либо пибимпап, либо рамён.",
      en: "For lunch I’ll eat either bibimbap or ramyeon."
    },
    {
      ko: "주말에 집에서 쉬거나 친구를 만날 거예요.",
      uz: "Hafta oxirida uyda dam olaman yoki do‘stlarim bilan uchrashaman.",
      ru: "В выходные я либо отдохну дома, либо встречусь с друзьямии.",
      en: "On the weekend I’ll either rest at home or meet friends."
    },
    {
      ko: "회사까지 버스를 타거나 지하철을 타요.",
      uz: "Ishxonagacha avtobus yoki metroda boraman.",
      ru: "До работы езжу либо на автобусе, либо на метро.",
      en: "I go to work either by bus or by subway."
    }
  ],
  quiz: [
    {
      id: "q1",
      question: "주말에 영화를 보___ 음악을 들어요.",
      options: ["거나", "고", "지만"],
      correctIndex: 0,
      explain: "Ikkita harakatni tanlashda '거나' ishlatiladi."
    }
  ]
},

{
  id: "ge-hada",
  title: "-게 하다 (harakat qildirmoq)",
  level: "Boshlang'ich",
  tags: ["Causative", "TOPIK A1"],
  meaning:
    "Fe’l va sifatga qo‘shilib, biror ishni qilinishiga sabab bo‘lish, majbur qilish yoki imkon berishni bildiradi.",
  forms: ["Fe’l +게 하다", "Sifat +게 하다"],
  usage:
    "Asosiy harakatni bajarishga majburlash yoki imkon berish ma’nosida ishlatiladi.",
  examples: [
    {
      ko: "그 소식은 나를 기쁘게 했다.",
      uz: "Bu xabar meni quvontirdi.",
      ru: "Та новость меня обрадовала.",
      en: "That news made me happy."
    },
    {
      ko: "TV를 볼 때는 방을 밝게 합니다.",
      uz: "Televizor ko‘rayotganda xonani yorug‘ qilaman.",
      ru: "Когда смотрю телевизор, делаю комнату светлой.",
      en: "When I watch TV, I make the room bright."
    },
    {
      ko: "꽃병이 넘어지지 않게 하세요.",
      uz: "Guldonni yiqilmaydigan qilib qo‘ying.",
      ru: "Сделайте так, чтобы ваза не упала.",
      en: "Please make sure the vase doesn’t fall."
    },
    // +3 yangi
    {
      ko: "선생님이 학생들을 조용하게 했어요.",
      uz: "O‘qituvchi o‘quvchilarni tinch qo‘ydi (jim qildirdi).",
      ru: "Учитель заставил учеников вести себя тихо.",
      en: "The teacher made the students be quiet."
    },
    {
      ko: "알람이 저를 일찍 일어나게 해요.",
      uz: "Budilnik meni erta uyg‘onishga majbur qiladi.",
      ru: "Будильник заставляет меня рано вставать.",
      en: "The alarm makes me get up early."
    },
    {
      ko: "부모님이 저를 더 열심히 공부하게 하셨어요.",
      uz: "Ota-onam meni yanada tirishib o‘qishga majbur qildilar.",
      ru: "Родители заставили меня учиться усерднее.",
      en: "My parents made me study harder."
    }
  ],
  quiz: [
    {
      id: "q2",
      question: "선생님이 학생들을 열심히 공부하___ 했어요.",
      options: ["게", "고", "지만"],
      correctIndex: 0,
      explain: "'게 하다' — biror ishni qildirmoq ma’nosida."
    }
  ]
},

{
  id: "get",
  title: "-겠 (niyat, xohish, taxmin)",
  level: "Boshlang'ich",
  tags: ["Future", "Intention", "TOPIK A1"],
  meaning: "Kelasi zamon, niyat yoki taxminni bildiradi.",
  forms: ["Fe’l +겠", "Sifat +겠"],
  usage: "1-shaxsda xohish/niyatni, 3-shaxsda yoki holatda taxminni bildiradi.",
  examples: [
    {
      ko: "내일 친구를 만나겠습니다.",
      uz: "Men ertaga do‘stimni uchrataman (uchrashaman).",
      ru: "Завтра я встречусь с другом.",
      en: "I will meet a friend tomorrow."
    },
    {
      ko: "내년에 한국에 가겠습니다.",
      uz: "Men kelasi yilda Koreyaga boraman.",
      ru: "В следующем году я поеду в Корею.",
      en: "I will go to Korea next year."
    },
    // +3 yangi
    {
      ko: "지금부터 더 열심히 하겠습니다.",
      uz: "Endi bundan buyon yanada tirishib ishlayman.",
      ru: "С этого момента буду стараться ещё усерднее.",
      en: "From now on, I will work harder."
    },
    {
      ko: "밖에 춥겠어요.",
      uz: "Tashqarida sovuq bo‘lsa kerak.",
      ru: "Наверное, на улице холодно.",
      en: "It must be cold outside."
    },
    {
      ko: "곧 비가 오겠어요.",
      uz: "Tez orada yomg‘ir yog‘sa kerak.",
      ru: "Скоро, кажется, пойдёт дождь.",
      en: "It looks like it will rain soon."
    }
  ],
  quiz: [
    {
      id: "q3",
      question: "저는 내일 일찍 일어나___ 합니다.",
      options: ["겠", "고", "거나"],
      correctIndex: 0,
      explain: "'-겠' bu yerda niyatni bildiradi."
    }
  ]
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
    "Fe’l + 았/었으면 싶다 (kuchli tilak/ummid, ‘… bo‘lsa edi’)"
  ],
  usage:
    "Ko‘pincha 1-shaxs istagi; umumiy/kuchli tilakni ham bildirishi mumkin (≈ 았/었으면 좋겠다).",
  examples: [
    {
      ko: "저는 꼭 유명한 사람이 되고 싶어요.",
      uz: "Men albatta mashhur inson bo‘lishni xohlayman.",
      ru: "Я обязательно хочу стать известным человеком.",
      en: "I really want to become a famous person."
    },
    {
      ko: "오늘은 꼭 일자리를 찾았으면 싶다.",
      uz: "Bugun albatta ish topsam yaxshi bo‘lardi (shuni xohlayman).",
      ru: "Сегодня очень хочется найти работу.",
      en: "I really wish I could find a job today."
    },
    {
      ko: "이젠 그 일에서 손을 떼었으면 싶다.",
      uz: "Endi bu ishga aralashmaslikni istayman.",
      ru: "Хочу наконец отстраниться от этого дела.",
      en: "I want to step away from that matter now."
    },
    // +3 yangi
    {
      ko: "한국 음식을 많이 먹고 싶어요.",
      uz: "Koreys taomlaridan ko‘p tatib ko‘rishni xohlayman.",
      ru: "Хочу попробовать много корейских блюд.",
      en: "I want to try lots of Korean food."
    },
    {
      ko: "오늘은 집에서 쉬고 싶어요.",
      uz: "Bugun uyda dam olgim keladi.",
      ru: "Сегодня хочу отдохнуть дома.",
      en: "I want to rest at home today."
    },
    {
      ko: "언젠가 한국에서 살고 싶어요.",
      uz: "Qachondir Koreyada yashashni xohlayman.",
      ru: "Когда-нибудь хочу жить в Корее.",
      en: "Someday I’d like to live in Korea."
    }
  ],
  quiz: [
    {
      id: "q-gosipda-1",
      question: "내년에 한국에 가___ ___.",
      options: ["고", "싶어요", "겠다"],
      correctIndex: 1,
      explain:
        "To‘liq ibora: **가고 싶어요** (‘borishni xohlayman’). Agar bitta bo‘shliq bilan berilsa, ‘고’ni to‘ldirish variantini ishlating."
    },
    {
      id: "q-gosipda-2",
      question: "나는 매일 한국어를 공부하___ 싶다.",
      options: ["고", "면", "거나"],
      correctIndex: 0,
      explain: "‘…하고 싶다’ – ‘… qilishni xohlayman’."
    }
  ]
},{
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
    {
      ko: "어머니는 한국에 가고 싶어 하십니다.",
      uz: "Onam Koreyaga borishni xohlaydi.",
      ru: "Моя мама хочет поехать в Корею.",
      en: "My mother wants to go to Korea."
    },
    {
      ko: "모두가 전쟁을 끝내고 싶어 합니다.",
      uz: "Barcha insonlar urushni tugatishni xohlaydi.",
      ru: "Все хотят закончить войну.",
      en: "Everyone wants to end the war."
    },
    // +3 yangi
    {
      ko: "아이는 강아지를 키우고 싶어 해요.",
      uz: "Bola kuchuk boqishni xohlaydi.",
      ru: "Ребёнок хочет завести щенка.",
      en: "The child wants to raise a puppy."
    },
    {
      ko: "제 친구는 한국어를 배우고 싶어 해요.",
      uz: "Do‘stim koreys tilini o‘rganishni xohlaydi.",
      ru: "Мой друг хочет изучать корейский язык.",
      en: "My friend wants to learn Korean."
    },
    {
      ko: "그는 새 휴대폰을 사고 싶어 합니다.",
      uz: "U yangi telefon sotib olmoqchi.",
      ru: "Он хочет купить новый телефон.",
      en: "He wants to buy a new phone."
    }
  ],
  quiz: [
    {
      id: "q-gosipohada-1",
      question: "민수는 내년에 유학을 가___ 싶어 해요.",
      options: ["고", "면", "겠"],
      correctIndex: 0,
      explain: "3-shaxs xohishi ‘…고 싶어 하다’ bilan ifodalanadi."
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
  forms: ["Fe’l + 고 있다", "Fe’l + 고 있어요 / 고 있습니다", "Fe’l + 고 계시다 (hurmat)"],
  usage:
    "Hozir sodir bo‘layotgan harakat yoki davomiy holatni ifodalaydi. Ko‘pincha 시간 부사alar (지금, 요즘) bilan keladi.",
  examples: [
    {
      ko: "저는 지금 밥을 먹고 있어요.",
      uz: "Men hozir ovqat yeyapman.",
      ru: "Я сейчас ем.",
      en: "I’m eating now."
    },
    {
      ko: "선생님은 회의하고 계십니다.",
      uz: "O‘qituvchi yig‘ilish o‘tkazyapti (hurmat).",
      ru: "Учитель сейчас проводит совещание.",
      en: "The teacher is having a meeting."
    },
    // +3 yangi
    {
      ko: "저는 한국 드라마를 보고 있어요.",
      uz: "Men hozir koreys serialini ko‘ryapman.",
      ru: "Я смотрю корейский сериал.",
      en: "I’m watching a Korean drama."
    },
    {
      ko: "밖에 비가 오고 있어요.",
      uz: "Tashqarida yomg‘ir yog‘ayapti.",
      ru: "На улице идёт дождь.",
      en: "It’s raining outside."
    },
    {
      ko: "학생들이 시험을 준비하고 있어요.",
      uz: "Talabalar imtihonga tayyorlanyapti.",
      ru: "Студенты готовятся к экзамену.",
      en: "Students are preparing for the exam."
    }
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
    "Ergash gap sababini ko‘rsatadi. -기 때문에 rasmiyroq ohangda; yengil ohang uchun -아서/어서 ishlatiladi.",
  examples: [
    {
      ko: "돈이 모자랐기 때문에 그것을 살 수 없었어요.",
      uz: "Pulim yetmagani uchun u narsani sotib ola olmadim.",
      ru: "Я не смог это купить, потому что не хватило денег.",
      en: "I couldn’t buy it because I didn’t have enough money."
    },
    {
      ko: "그 사람과 관계가 좋지 않기 때문에 안 만나요.",
      uz: "U kishi bilan munosabatim yaxshi bo‘lmagani uchun uchrashmayman.",
      ru: "Я не встречаюсь с ним, потому что у нас плохие отношения.",
      en: "I don’t meet him because our relationship isn’t good."
    },
    {
      ko: "그 사람은 병이기 때문에 일을 못합니다.",
      uz: "U odam kasal bo‘lgani uchun ishlay olmaydi.",
      ru: "Он не может работать, потому что болен.",
      en: "He can’t work because he is ill."
    },
    {
      ko: "아무것도 먹을 것이 없기 때문에 시장을 봐야겠습니다.",
      uz: "Yeyishga hech narsa yo‘qligi sababli, bozorga borishim kerak.",
      ru: "Поскольку дома нечего есть, нужно сходить за покупками.",
      en: "Since there’s nothing to eat, I should go shopping."
    },
    // +3 yangi
    {
      ko: "날씨가 춥기 때문에 코트를 입었어요.",
      uz: "Havo sovuq bo‘lgani uchun palto kiydim.",
      ru: "Так как холодно, я надел пальто.",
      en: "Because it’s cold, I wore a coat."
    },
    {
      ko: "교통이 복잡했기 때문에 늦었어요.",
      uz: "Yo‘l harakati tirband bo‘lgani uchun kechikdim.",
      ru: "Я опоздал, потому что была пробка.",
      en: "I was late because the traffic was heavy."
    },
    {
      ko: "경험이 없기 때문에 천천히 배우고 있어요.",
      uz: "Tajriba bo‘lmagani uchun asta-sekin o‘rganayapman.",
      ru: "Поскольку нет опыта, учусь понемногу.",
      en: "Since I have no experience, I’m learning gradually."
    }
  ],
  quiz: [
    {
      id: "q-ttemune-1",
      question: "비가 오___ ___ 집에 있었어요. (yomg‘ir sabab uyda qoldim)",
      options: ["기", "때문에", "아서"],
      correctIndex: 1, // to‘liq javob: 오기 때문에
      explain: "To‘liq shakl: **오기 때문에** — ‘yomg‘ir yog‘gani uchun’."
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
    {
      ko: "내일 대학교에 가기로 했습니다.",
      uz: "Ertaga universitetga borishga qaror qildim.",
      ru: "Я решил(а) завтра поехать в университет.",
      en: "I decided to go to the university tomorrow."
    },
    {
      ko: "오늘 아침 밥은 먹지 않기로 했습니다.",
      uz: "Bugun nonushta qilmaslikka qaror qildim.",
      ru: "Я решил(а) не завтракать сегодня утром.",
      en: "I decided not to have breakfast today."
    },
    {
      ko: "이 일을 하기로 했습니다.",
      uz: "Bu ishni qilishga qaror qildim.",
      ru: "Я решил(а) заняться этой работой.",
      en: "I decided to do this work."
    },
    // +3 yangi
    {
      ko: "우리는 다음 달에 이사를 가기로 했어요.",
      uz: "Biz keyingi oy ko‘chishga qaror qildik.",
      ru: "Мы решили переехать в следующем месяце.",
      en: "We decided to move next month."
    },
    {
      ko: "친구와 매주 운동하기로 했어요.",
      uz: "Do‘stim bilan har hafta sport bilan shug‘ullanishga kelishdik.",
      ru: "Мы с другом договорились заниматься спортом каждую неделю.",
      en: "My friend and I decided to work out every week."
    },
    {
      ko: "회의에서 그 제안을 받지 않기로 했습니다.",
      uz: "Yig‘ilishda o‘sha taklifni qabul qilmaslikka qaror qilindi.",
      ru: "На собрании решили не принимать то предложение.",
      en: "At the meeting, we decided not to accept that proposal."
    }
  ],
  quiz: [
    {
      id: "q-giro-1",
      question: "우리는 이번 주말에 여행을 가___ 했어요.",
      options: ["거나", "기로", "겠"],
      correctIndex: 1,
      explain: "Qaror tuzilmasi: **V + 기로 하다**."
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
    "Vaqt tartibini bildiradi. Ot bilan ‘-전(에)’ ishlatiladi (식사 전(에)). Qarama-qarshi ma’no uchun ‘-고 나서 / -(으)ㄴ 후에(뒤에)’.",
  examples: [
    {
      ko: "점심 먹기 전에 이 일을 끝냅시다.",
      uz: "Tushlikdan oldin bu ishni tugataylik.",
      ru: "Давайте закончим это до обеда.",
      en: "Let’s finish this before lunch."
    },
    {
      ko: "말을 하기 전에 먼저 생각하세요.",
      uz: "Gapirishdan avval o‘ylang.",
      ru: "Прежде чем говорить, сначала подумайте.",
      en: "Think first before you speak."
    },
    {
      ko: "운동하기 전에 체조부터 해야지요.",
      uz: "Mashq qilishdan oldin badantarbiya qilaylik.",
      ru: "Перед тренировкой нужно сделать разминку.",
      en: "We should stretch before exercising."
    },
    // +3 yangi
    {
      ko: "자기 전에 이를 닦으세요.",
      uz: "Uxlamasdan oldin tishlarni yuvib oling.",
      ru: "Почистите зубы перед сном.",
      en: "Brush your teeth before going to bed."
    },
    {
      ko: "출발하기 전에 표를 확인하세요.",
      uz: "Jo‘nashdan oldin chiptani tekshiring.",
      ru: "Проверьте билет перед отправлением.",
      en: "Check your ticket before departure."
    },
    {
      ko: "수업 시작하기 전에 출석을 부를게요.",
      uz: "Dars boshlanishidan oldin davomatni chaqiraman.",
      ru: "Перед началом урока я отмечу присутствие.",
      en: "I’ll take attendance before class starts."
    }
  ],
  quiz: [
    {
      id: "q-jone-1",
      question: "자기 ___ ___ 휴대폰을 끄세요. (uxlashdan oldin)",
      options: ["기", "전에", "후에"],
      correctIndex: 1, // savol ko‘rinishida ikkita bo‘shliq bor — to‘liq javob: '자기 전에'
      explain: "To‘liq shakl **자기 전에**: V + 기 전에 — ‘…dan oldin’."
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
    { ko: "어제 밤늦게까지 책을 보았습니다.", uz: "Kecha yarim tungacha kitob o‘qidim.", ru: "Вчера читал(а) до поздней ночи.", en: "I read a book until late last night." },
    { ko: "다시 만날 때까지 안녕히 계십시오.", uz: "Yana uchrashgungacha yaxshi qoling.", ru: "До новой встречи, всего доброго.", en: "Goodbye until we meet again." },
    { ko: "비가 오고 바람까지 불어요.", uz: "Yomg‘ir yog‘ayapti, buning ustiga (hatto) shamol ham esayapti.", ru: "Идёт дождь, и даже ветер дует.", en: "It’s raining, and even the wind is blowing." },
    { ko: "집에서부터 지하철역까지 걸어 다닙니다.", uz: "Uyidan metroga piyoda qatnayman.", ru: "Хожу пешком от дома до метро.", en: "I walk from home to the subway station." },
    { ko: "12시부터 2시까지가 점심시간입니다.", uz: "Soat 12dan 2gacha tushlik vaqti.", ru: "С 12 до 2 — обеденное время.", en: "Lunch time is from 12 to 2." },
    // +3 yangi
    { ko: "서울에서 부산까지 비행기로 두 시간 걸려요.", uz: "Seuldan Pusangacha samolyotda ikki soat ketadi.", ru: "Из Сеула до Пусана на самолёте — два часа.", en: "It takes two hours by plane from Seoul to Busan." },
    { ko: "커피는 물론 물까지 준비했어요.", uz: "Qahva bir tomonda, hatto suv ham tayyorlab qo‘ydim.", ru: "Приготовил(а) не только кофе, но даже воду.", en: "I prepared not only coffee but even water." },
    { ko: "내일까지 숙제를 제출하세요.", uz: "Uy vazifasini ertagacha topshiring.", ru: "Сдайте домашнее задание до завтра.", en: "Please submit your homework by tomorrow." }
  ],
  quiz: [
    { id: "q-kkaji-1", question: "우리는 5시___ 회의를 합니다. (soat 5 gacha)", options: ["까지", "부터", "에게"], correctIndex: 0, explain: "Oxirgi nuqta ‘… gacha’ — 까지." },
    { id: "q-kkaji-2", question: "서울___ 부산___ 기차로 갑니다. (Seuldan Pusangacha)", options: ["부터, 까지", "까지, 부터", "에게, 까지"], correctIndex: 0, explain: "Boshlanish + tugash: ‘A부터 B까지’." }
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
    { ko: "가는 사람", uz: "ketayotgan odam", ru: "идущий человек", en: "a person who is going" },
    { ko: "간 사람", uz: "ketgan odam", ru: "ушедший человек", en: "a person who left" },
    { ko: "갈 사람", uz: "boradigan odam", ru: "человек, который пойдёт", en: "a person who will go" },
    { ko: "맛있는 음식", uz: "mazali taom", ru: "вкусная еда", en: "delicious food" },
    { ko: "학생인 안드레이", uz: "talaba bo‘lgan Andrey", ru: "Андрей, который является студентом", en: "Andrey who is a student" },
    // +3 yangi
    { ko: "읽는 책", uz: "o‘qilayotgan kitob", ru: "книга, которую читают", en: "a book (someone) is reading" },
    { ko: "만든 케이크", uz: "tayyorlangan (pishirilgan) tort", ru: "торт, который сделали", en: "a cake that was made" },
    { ko: "살 사람", uz: "sotib oladigan kishi", ru: "человек, который купит", en: "a person who will buy" }
  ],
  quiz: [
    { id: "q-adnom-1", question: "어제 ___ 영화 (kecha ko‘rgan film)", options: ["보는", "본", "볼"], correctIndex: 1, explain: "O‘tgan zamon fe’li → -(으)ㄴ: 본 영화." },
    { id: "q-adnom-2", question: "내일 ___ 사람을 만나겠다. (ertaga uchrashadigan odam)", options: ["만나는", "만난", "만날"], correctIndex: 2, explain: "Kelasi/niyat → -(으)ㄹ: 만날 사람." },
    { id: "q-adnom-3", question: "___ 아이가 웃고 있어요. (chiroyli bola)", options: ["예쁘는", "예쁜", "예쁠"], correctIndex: 1, explain: "Sifat hozirgi → -(으)ㄴ: 예쁜." }
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
    "Fe’l (o‘tgan) + -(으)ㄴ 것 같다",
    "Fe’l (hozirgi) + -는 것 같다",
    "Fe’l (kelasi) + -(으)ㄹ 것 같다",
    "Sifat (hozirgi) + -(으)ㄴ 것 같다",
    "Ot + 인 것 같다"
  ],
  usage:
    "Nutqda yumshoq taxmin ohangi beradi. Rasmiy: …것 같습니다. Salbiy: …것 같지 않다.",
  examples: [
    { ko: "비가 온 것 같습니다.", uz: "Yomg‘ir yog‘ganga o‘xshaydi.", ru: "Кажется, прошёл дождь.", en: "It seems it rained." },
    { ko: "비가 오는 것 같습니다.", uz: "Yomg‘ir yog‘ayotganga o‘xshaydi.", ru: "Похоже, идёт дождь.", en: "It seems it’s raining." },
    { ko: "비가 올 것 같습니다.", uz: "Yomg‘ir yog‘adiganga o‘xshaydi.", ru: "Вероятно, пойдёт дождь.", en: "It looks like it will rain." },
    // +3 yangi
    { ko: "그 사람이 학생인 것 같아요.", uz: "U odam talaba bo‘lsa kerak.", ru: "Похоже, он студент.", en: "He seems to be a student." },
    { ko: "가격이 비쌀 것 같아요.", uz: "Narxi qimmat bo‘lsa kerak.", ru: "Кажется, цена будет высокой.", en: "It seems the price will be high." },
    { ko: "어제 많이 먹은 것 같아요.", uz: "Kecha ko‘p yegandekman.", ru: "Кажется, вчера я много съел(а).", en: "I think I ate a lot yesterday." }
  ],
  quiz: [
    { id: "q-geotgata-1", question: "그 영화가 재미있___ ___요. (qiziq shekilli)", options: ["는", "은 것 같", "을 것 같"], correctIndex: 1, explain: "Sifat + -(으)ㄴ 것 같다 → 재미있는 것 같아요." }
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
    { ko: "우리 선생님은 아주 친절한 사람입니다.", uz: "Bizning o‘qituvchimiz juda odobli inson.", ru: "Наш учитель — очень добрый человек.", en: "Our teacher is a very kind person." },
    { ko: "형님은 산에 자주 갑니다.", uz: "Akam tog‘ga tez-tez borib turadilar.", ru: "Старший брат часто ходит в горы.", en: "My older brother often goes to the mountains." },
    { ko: "아버님이 편찮으십니다.", uz: "Otaning mazalari yo‘q (hurmat).", ru: "Отцу нехорошо (вежл.).", en: "Father is not feeling well (honorific)." },
    // +3 yangi
    { ko: "의사님이 곧 오십니다.", uz: "Doktor janoblari hozir keladilar.", ru: "Доктор скоро подойдёт (вежл.).", en: "The doctor will be here soon (honorific)." },
    { ko: "고객님을 먼저 안내해 드릴게요.", uz: "Mijoz janoblarini avval olib borib qo‘yaman.", ru: "Сначала проведу клиента (вежл.).", en: "I’ll guide the customer first (honorific)." },
    { ko: "교수님께 질문드려도 될까요?", uz: "Professor janoblariga savol bersam bo‘ladimi?", ru: "Можно задать вопрос профессору?", en: "May I ask the professor a question?" }
  ],
  quiz: [
    { id: "q-nim-1", question: "회사 ___께서 회의를 시작합니다. (direktor janoblari)", options: ["사장", "사장님", "사장씨"], correctIndex: 1, explain: "Hurmat qo‘shimchasi: 사장님." }
  ]
},

{
  id: "daga",
  title: "-다가 (…yapib turib / …paytda – keyin)",
  level: "Boshlang'ich",
  tags: ["Sequence", "Interruption", "TOPIK A1"],
  meaning:
    "Bir harakat davomida boshqa harakat boshlanishi sababli birinchi harakat to‘xtashi yoki almashishini bildiradi (‘…qilayotganimda … bo‘ldi’).",
  forms: [
    "Fe’l + 다가 → 먹다가, 가다가",
    "Fe’l + 다(가) + o‘tgan zamon → 먹다가 전화를 받았어요",
    "Salbiy qaror: V-지 않다가 (kamroq)"
  ],
  usage:
    "Ergash va bosh gapdagi ish-harakat odatda bir subyekt tomonidan bajariladi. Naqsh: A 하다가 B 했어요.",
  examples: [
    { ko: "밥을 먹다가 전화를 받았어요.", uz: "Ovqat yeyotganimda telefon qabul qildim.", ru: "Ел(а), и тут позвонили.", en: "I was eating when I got a call." },
    { ko: "학교에 가다가 친구를 만났어요.", uz: "Maktabga borayotib do‘stimga uchrab qoldim.", ru: "По дороге в школу встретил(а) друга.", en: "I met a friend on my way to school." },
    // +3 yangi
    { ko: "일을 하다가 실수했어요.", uz: "Ishlayotib xato qilib qo‘ydim.", ru: "Работая, допустил(а) ошибку.", en: "I made a mistake while working." },
    { ko: "샤워를 하다가 물이 끊겼어요.", uz: "Dush qabul qilayotib suv o‘chib qoldi.", ru: "Во время душа отключилась вода.", en: "The water was cut off while I was showering." },
    { ko: "운전하다가 길을 잘못 들었어요.", uz: "Mashina haydab ketayotib noto‘g‘ri burilib yubordim.", ru: "За рулём свернул(а) не туда.", en: "I took a wrong turn while driving." }
  ],
  quiz: [
    { id: "q-daga-1", question: "책을 읽___ 잠이 들었어요. (o‘qiy turib uxlab qoldim)", options: ["다가", "으면", "거나"], correctIndex: 0, explain: "A paytida B ro‘y berdi: 읽다가 잠이 들었어요." }
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
    "1) Ko‘plik aniq ko‘rinib turganda (son, ‘많이’ va h.k.) ‘들’ ko‘pincha qo‘shilmaydi. 2) Sanalmaydigan yoki umumiy sinf nomlariga odatda qo‘shilmaydi. 3) ‘가족들/친구들’ kabi, to‘plam ichidagi alohida a’zolar nazarda tutilsa ishlatiladi.",
  examples: [
    { ko: "학생들이 교실에 있어요.", uz: "Talabalar sinfxonada.", ru: "Студенты в аудитории.", en: "Students are in the classroom." },
    { ko: "우리 가족들은 모두 타슈켄트에 살아요.", uz: "Oilamizning barchasi Toshkentda yashaydi.", ru: "Вся наша семья живёт в Ташкенте.", en: "All our family live in Tashkent." },
    { ko: "사람들은 그 소식을 좋아했어요.", uz: "Odamlar bu xabarni yoqtirishdi.", ru: "Людям понравилась эта новость.", en: "People liked the news." },
    { ko: "모두들 그 사람을 좋아합니다.", uz: "Barchasi u odamni yaxshi ko‘radi.", ru: "Все его любят.", en: "Everyone likes him." },
    { ko: "어서들 오세요 / 재미있게들 노세요.", uz: "Marhamat, barchangiz kiring / Yaxshi hordiq chiqaring, barchangiz.", ru: "Проходите все / Приятного отдыха, всем!", en: "Everyone, please come in / Have fun, everyone!" },
    // +3 yangi
    { ko: "손님들이 많이 오셨어요.", uz: "Mehmonlar ko‘p keldi.", ru: "Пришло много гостей.", en: "Many guests came." },
    { ko: "직원들은 회의실에 모였어요.", uz: "Xodimlar majlis xonasiga yig‘ildilar.", ru: "Сотрудники собрались в переговорной.", en: "The employees gathered in the meeting room." },
    { ko: "친구들이 집에 놀러 왔어요.", uz: "Do‘stlarim uyimga mehmon bo‘lib kelishdi.", ru: "Друзья пришли ко мне в гости.", en: "My friends came over to my place." }
  ],
  quiz: [
    { id: "q-deul-1", question: "교실에 학생___ 많아요.", options: ["들", "이", "에"], correctIndex: 0, explain: "Ko‘plikni bildiradi: 학생들." },
    { id: "q-deul-2", question: "10명 ___ 왔어요. (son ko‘rsatilgan — ‘들’ kerakmi?)", options: ["들이", "이", "을"], correctIndex: 1, explain: "Son ko‘rsatilganda ‘들’ odatda qo‘shilmaydi: 10명이." },
    { id: "q-deul-3", question: "_____ 조용히 하세요! (guruhga murojaat)", options: ["모두들", "모두가 들", "모두에"], correctIndex: 0, explain: "Guruhga murojaat: ‘모두들 조용히 하세요’." }
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
    { ko: "비 때문에 경기가 취소되었어요.", uz: "Yomg‘ir sabab o‘yin bekor qilindi.", ru: "Матч отменили из-за дождя.", en: "The match was canceled because of the rain." },
    { ko: "교통체증 때문에 지각했어요.", uz: "Tirbandlik sabab kechikdim.", ru: "Я опоздал(а) из-за пробки.", en: "I was late because of traffic." },
    { ko: "건강 문제 때문에 한국에 못 갔어요.", uz: "Sog‘liq muammosi sabab Koreyaga bora olmadim.", ru: "Не смог(ла) поехать в Корею из-за проблем со здоровьем.", en: "I couldn’t go to Korea due to health problems." },
    { ko: "너 때문에 늦었잖아.", uz: "SEN sabab kechikdim-ku.", ru: "Я опоздал(а) из-за тебя.", en: "I was late because of you." },
    // +3 yangi
    { ko: "코로나 때문에 수업이 온라인으로 바뀌었어요.", uz: "Koronavirus sabab darslar onlaynga o‘tdi.", ru: "Из-за COVID занятия стали онлайн.", en: "Because of COVID, classes switched to online." },
    { ko: "전쟁 때문에 물가가 올랐어요.", uz: "Urush sabab narxlar oshdi.", ru: "Цены выросли из-за войны.", en: "Prices have gone up because of the war." },
    { ko: "소음 때문에 잠을 못 잤어요.", uz: "Shovqin tufayli uxlolmadim.", ru: "Из-за шума не смог(ла) уснуть.", en: "I couldn’t sleep because of the noise." }
  ],
  quiz: [
    { id: "q-ttemuneN-1", question: "감기 ___ 학교에 못 갔어요.", options: ["때문에", "기 때문에", "으로"], correctIndex: 0, explain: "Ot bilan: N + 때문에." },
    { id: "q-ttemuneN-2", question: "비 ___ 행사가 연기됐습니다. (yomg‘ir tufayli tadbir kechiktirildi)", options: ["때문에", "부터", "까지"], correctIndex: 0, explain: "Sabab — ‘비 때문에’." },
    { id: "q-ttemuneN-3", question: "Ijobiy sababni tanlang: ‘선생님 ___ 한국어가 많이 늘었어요.’", options: ["때문에", "덕분에", "밖에"], correctIndex: 1, explain: "Ijobiy/rahmat ohangi: 덕분에." }
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
    { ko: "날마다 운동을 합니다.", uz: "Har kuni sport bilan shug‘ullanaman.", ru: "Занимаюсь спортом каждый день.", en: "I work out every day." },
    { ko: "사람마다 성격이 달라요.", uz: "Har bir odamning fe’l-atvori turlicha.", ru: "У каждого человека свой характер.", en: "Everyone has a different personality." },
    { ko: "나라마다 문화가 달라요.", uz: "Har bir davlatning madaniyati turlicha.", ru: "Культура разная в каждой стране.", en: "Culture differs from country to country." },
    // +3
    { ko: "두 시간마다 쉬어요.", uz: "Har ikki soatda dam olamiz.", ru: "Делаем перерыв каждые два часа.", en: "We take a break every two hours." },
    { ko: "버스가 10분마다 와요.", uz: "Avtobus har 10 daqiqada keladi.", ru: "Автобус приходит каждые 10 минут.", en: "The bus comes every 10 minutes." },
    { ko: "시험 때마다 긴장해요.", uz: "Har imtihonda hayajonlanaman.", ru: "Каждый экзамен я волнуюсь.", en: "I get nervous every exam." }
  ],
  quiz: [
    { id: "q-mada-1", question: "주말___ 한국어를 공부해요. (har hafta oxiri)", options: ["마다", "부터", "까지"], correctIndex: 0, explain: "Takroriylik: 주말마다." },
    { id: "q-mada-2", question: "‘Har ikki oyda’ iborasini tanlang.", options: ["두 달밖에", "두 달마다", "두 달보다"], correctIndex: 1, explain: "마다 — ‘har/…sayin’." }
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
    { ko: "너 밖에 없다.", uz: "Sendan boshqa hech kim yo‘q.", ru: "Кроме тебя никого нет.", en: "There’s no one but you." },
    { ko: "저 사람은 자기 밖에 몰라요.", uz: "U odam o‘zidan boshqasini bilmaydi (faqat o‘zini o‘ylaydi).", ru: "Тот человек думает только о себе.", en: "He only cares about himself." },
    { ko: "천 원밖에 없어요.", uz: "Menda ming vonnadan boshqa (faqat) yo‘q.", ru: "У меня есть только тысяча вон.", en: "I have only 1,000 won." },
    // +3
    { ko: "학생밖에 없어요.", uz: "Faqat talabalar bor xolos.", ru: "Есть только студенты.", en: "There are only students." },
    { ko: "물밖에 안 마셔요.", uz: "Faqat suv ichaman xolos.", ru: "Пью только воду.", en: "I drink only water." },
    { ko: "어제는 만 원밖에 못 벌었어요.", uz: "Kecha atigi o‘n ming von topdim xolos.", ru: "Вчера заработал(а) всего 10 000 вон.", en: "I earned only 10,000 won yesterday." }
  ],
  quiz: [
    { id: "q-bakke-1", question: "시간이 10분___ ___요. (faqat 10 daqiqa bor)", options: ["밖에, 없어요", "만, 있어요", "밖에, 있어요"], correctIndex: 0, explain: "밖에 doimo inkor bilan: 밖에 없어요." },
    { id: "q-bakke-2", question: "To‘g‘ri variantni tanlang.", options: ["학생밖에 있어요 (✅/❌)", "학생밖에 없어요 (✅/❌)", "학생만 있어요 (✅/❌)"], correctIndex: 1, explain: "‘밖에’ ijobiy fe’l bilan kelmaydi. To‘g‘rilar: 학생밖에 없어요 / 학생만 있어요." }
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
    { ko: "수학보다 역사가 더 재미있어요.", uz: "Matematikaga qaraganda tarix qiziqroq.", ru: "История интереснее, чем математика.", en: "History is more interesting than math." },
    { ko: "겨울보다 봄에 비가 많이 와요.", uz: "Qishga qaraganda bahorda yomg‘ir ko‘p yog‘adi.", ru: "Весной идёт больше дождей, чем зимой.", en: "It rains more in spring than in winter." },
    { ko: "어제보다 오늘이 덜 추워요.", uz: "Kecha­ga qaraganda bugun uncha sovuq emas.", ru: "Сегодня менее холодно, чем вчера.", en: "Today is less cold than yesterday." },
    // +3
    { ko: "지하철이 버스보다 빨라요.", uz: "Metro avtobusga qaraganda tezroq.", ru: "Метро быстрее, чем автобус.", en: "The subway is faster than the bus." },
    { ko: "올해가 작년보다 따뜻해요.", uz: "Bu yil o‘tgan yilga qaraganda issiqroq.", ru: "В этом году теплее, чем в прошлом.", en: "This year is warmer than last year." },
    { ko: "저는 동생보다 키가 커요.", uz: "Men ukamdan/bahomdan uzunroqman.", ru: "Я выше младшего брата/сестры.", en: "I’m taller than my younger sibling." }
  ],
  quiz: [
    { id: "q-boda-1", question: "한국어___ 일본어___ 더 어려워요. (Koreys tili yapon tilidan qiyinroq)", options: ["보다, 가", "보다, 이", "에서, 가"], correctIndex: 1, explain: "Qiyoslash: 일본어가 / 한국어보다 일본어가 더 어려워요." },
    { id: "q-boda-2", question: "Bo‘shliqni to‘ldiring: ‘지난주___ 이번 주가 더 바빠요.’", options: ["보다", "부터", "까지"], correctIndex: 0, explain: "Qiyos: 지난주보다 이번 주가 더 바빠요." }
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
    { ko: "오늘 새벽부터 음식을 준비했어요.", uz: "Bugun erta tongdan ovqat tayyorladim.", ru: "С раннего утра готовил(а) еду.", en: "I’ve been preparing food since early morning." },
    { ko: "점심부터 회의가 있어요.", uz: "Tushlikdan boshlab yig‘ilish bor.", ru: "Начиная с обеда у нас собрание.", en: "We have a meeting starting from lunchtime." },
    { ko: "손부터 씻고 먹어.", uz: "Avval qo‘lingni yuvib keyin ye.", ru: "Сначала помой руки, потом ешь.", en: "Wash your hands first, then eat." },
    // +3
    { ko: "지금부터 공부합시다.", uz: "Hozirdan boshlab o‘qiylik.", ru: "Давайте учиться с этого момента.", en: "Let’s study from now on." },
    { ko: "내일부터 운동을 시작해요.", uz: "Ertadan sportni boshlayman.", ru: "С завтрашнего дня начинаю заниматься спортом.", en: "I’ll start exercising from tomorrow." },
    { ko: "서울역에서부터 걸어 갔어요.", uz: "Seul vokzalidan boshlab piyoda bordim.", ru: "Пошёл(шла) пешком прямо от вокзала Сеула.", en: "I walked starting from Seoul Station." }
  ],
  quiz: [
    { id: "q-buteo-1", question: "수업은 9시___ 12시___ 입니다.", options: ["부터, 까지", "에서, 에", "으로, 부터"], correctIndex: 0, explain: "Boshlanish–tugash: ‘…부터 …까지’." },
    { id: "q-buteo-2", question: "‘Hozirdan boshlab’ to‘g‘ri varianti:", options: ["지금에서", "지금부터", "지금까지"], correctIndex: 1, explain: "Start nuqtasi — ‘지금부터’." }
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
    { ko: "돈이 있습니까?", uz: "Pulingiz bormi?", ru: "У вас есть деньги?", en: "Do you have money?" },
    { ko: "그 친구가 옵니까?", uz: "O‘sha do‘st keladimi?", ru: "Тот друг придёт?", en: "Is that friend coming?" },
    { ko: "언제 출발합니까?", uz: "Qachon yo‘lga chiqasiz?", ru: "Когда вы выезжаете?", en: "When do you depart?" },
    // +3
    { ko: "점심 드셨습니까?", uz: "Tushlik qildingizmi?", ru: "Вы пообедали?", en: "Have you had lunch?" },
    { ko: "어디에서 오셨습니까?", uz: "Qayerdan keldingiz?", ru: "Откуда вы приехали?", en: "Where did you come from?" },
    { ko: "회사에 다닙니까?", uz: "Siz kompaniyada ishlaysizmi?", ru: "Вы работаете в компании?", en: "Do you work at a company?" }
  ],
  quiz: [
    { id: "q-seubnikka-1", question: "빈칸: 어디에 살___?", options: ["습니까", "ㅂ니까", "습니까?"], correctIndex: 2, explain: "Savol tugashi to‘liq yoziladi: 살습니까?" },
    { id: "q-seubnikka-2", question: "하다 fe’li bilan to‘g‘ri shakl:", options: ["하습니까?", "합니까?", "해습니까?"], correctIndex: 1, explain: "하다 → 합니다/합니까? (ㅂ니다/ㅂ니까 yo‘li bilan)." }
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
    { ko: "한국 친구가 많습니다.", uz: "Koreyalik do‘stlarim ko‘p.", ru: "У меня много корейских друзей.", en: "I have many Korean friends." },
    { ko: "학생이 질문합니다.", uz: "Talaba savol bermoqda.", ru: "Студент задаёт вопрос.", en: "The student asks a question." },
    { ko: "내일 발표하겠습니다.", uz: "Ertaga taqdimot qilaman (rasmiy).", ru: "Завтра выступлю с докладом.", en: "I will present tomorrow." },
    // +3
    { ko: "지금 회의를 시작합니다.", uz: "Hozir yig‘ilishni boshlaymiz.", ru: "Сейчас начинаем совещание.", en: "We will begin the meeting now." },
    { ko: "날씨가 춥습니다.", uz: "Havo sovuq.", ru: "Погода холодная.", en: "It is cold." },
    { ko: "결과를 보고드립니다.", uz: "Natijalarni ma’lum qilamiz.", ru: "Докладываем результаты.", en: "We report the results." }
  ],
  quiz: [
    { id: "q-seubnida-1", question: "빈칸: 저는 한국어를 공부___ .", options: ["합니다", "합니까", "했습니까"], correctIndex: 0, explain: "Darak: ‘합니다’." },
    { id: "q-seubnida-2", question: "O‘tgan zamon rasmiy: ‘어제 영화를 보…’.", options: ["봅니다", "보았습니다", "보겠습니다"], correctIndex: 1, explain: "Past formal: 보았습니다." }
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
    "먹다 → 먹어 보다 / 입다 → 입어 보다 / 해 보다",
    "Iltimos: V-아/어 보세요",
    "Tajriba: V-아/어 본 적이 있다/없다 (A2+)"
  ],
  usage:
    "Biror narsani sinab ko‘rishni taklif qilish yoki o‘zi uringanini aytish. Ko‘pincha ‘한번’ bilan: ‘한번 먹어 보세요’.",
  examples: [
    { ko: "이 옷 한번 입어 보세요.", uz: "Bu kiyimni bir marta kiyib ko‘ring.", ru: "Примерьте эту одежду.", en: "Please try this clothes on." },
    { ko: "김치를 먹어 보고 싶어요.", uz: "Kimchini yemlab ko‘rishni xohlayman.", ru: "Хочу попробовать кимчи.", en: "I want to try eating kimchi." },
    { ko: "그 앱을 써 봤어요.", uz: "O‘sha ilovani ishlatib ko‘rganman.", ru: "Я пробовал(а) это приложение.", en: "I’ve tried using that app." },
    // +3
    { ko: "설명을 다시 들어 보세요.", uz: "Izohni yana bir bor eshitib ko‘ring.", ru: "Попробуйте ещё раз послушать объяснение.", en: "Try listening to the explanation again." },
    { ko: "새 메뉴를 만들어 봤어요.", uz: "Yangi menyuni tayyorlab ko‘rdim.", ru: "Я попробовал(а) приготовить новое блюдо.", en: "I tried making a new dish." },
    { ko: "이번 방학에 혼자 여행을 가 보고 싶어요.", uz: "Bu ta’tilda yolg‘iz sayohat qilib ko‘rmoqchiman.", ru: "В эти каникулы хочу попробовать путешествовать один(а).", en: "I want to try traveling alone this vacation." }
  ],
  quiz: [
    { id: "q-aeoboda-1", question: "‘Bir marta eshitib ko‘ring’ — to‘g‘ri variant:", options: ["들어 보세요", "듣어 보세요", "들으세요 보다"], correctIndex: 0, explain: "듣다 → 들어 보세요 (불규칙)." },
    { id: "q-aeoboda-2", question: "Bo‘shliq: 한국 음식을 먹어 ___ 싶어요.", options: ["보는", "보려", "보고"], correctIndex: 2, explain: "V-고 싶다 bilan: 먹어 보고 싶어요." }
  ]
},{
  id: "aeo-seo",
  title: "-아/어서 (…ib; …gani uchun)",
  level: "Boshlang'ich",
  tags: ["Connector", "Reason", "Sequence", "TOPIK A1"],
  meaning:
    "1) Ketma-ket harakatni bog‘laydi: ‘…ib/…-ib’. 2) Sababni bildiradi: ‘…gani uchun’.",
  forms: [
    "ㅏ/ㅗ → -아서 (가서, 와서, 좋아서)",
    "boshqa unlilar → -어서 (먹어서, 적어서, 어려워서)",
    "하다 → 해서",
    "QOIDALAR: -아/어서 ergash qismida o‘tgan/kelasi zamon ko‘rsatkichi qo‘shilmaydi; buyruq/iltimos/edge-case bilan odatda kelmaydi."
  ],
  usage:
    "1) Birinchi harakat ikkinchisidan AVVAL: ‘도서관에 가서 책을 빌려요’. 2) Sabab: ‘비가 와서 못 가요’. Ko‘proq og‘zaki va neytral ohang.",
  examples: [
    { ko: "도서관에 가서 책을 빌려 옵니다.", uz: "Kutubxonaga borib kitob olib kelaman.", ru: "Иду в библиотеку и беру книгу.", en: "I go to the library and borrow a book." },
    { ko: "줄을 서서 기다려 주세요.", uz: "Navbatga turib kuting (iltimos).", ru: "Пожалуйста, встаньте в очередь и подождите.", en: "Please line up and wait." },
    { ko: "표가 없어서 그 영화를 못 봤어요.", uz: "Chipta bo‘lmagani uchun o‘sha kinoni ko‘ra olmadim.", ru: "Не смог(ла) посмотреть фильм, потому что не было билетов.", en: "I couldn’t watch the movie because there were no tickets." },
    { ko: "아이가 넘어져서 울고 있습니다.", uz: "Bola yiqilib ketgani uchun yig‘layapti.", ru: "Ребёнок плачет, потому что упал.", en: "The child is crying because (he) fell." },
    // +3
    { ko: "비가 와서 길이 막혔어요.", uz: "Yomg‘ir yog‘gani uchun yo‘l tirband bo‘ldi.", ru: "Из-за дождя образовалась пробка.", en: "Because it rained, the roads were jammed." },
    { ko: "숙제가 많아서 못 만났어요.", uz: "Uy vazifasi ko‘p bo‘lgani uchun uchrasha olmadim.", ru: "Не смог(ла) встретиться из-за большого количества домашки.", en: "I couldn’t meet because I had a lot of homework." },
    { ko: "한국에 가서 한글을 배웠어요.", uz: "Koreyaga borib Hangulni o‘rgandim.", ru: "Поехал(а) в Корею и выучил(а) хангыль.", en: "I went to Korea and learned Hangul." }
  ],
  quiz: [
    {
      id: "q-aeoseo-1",
      question: "빈칸: 도서관에 가__ 책을 빌렸어요. (ketma-ketlik)",
      options: ["서", "고", "지만"],
      correctIndex: 0,
      explain: "Ketma-ketlikni -아/어서 bilan: 가서 → ‘borib’."
    },
    {
      id: "q-aeoseo-2",
      question: "Sababni to‘g‘ri to‘ldiring: 비가 와__ 못 갔어요.",
      options: ["서", "라서", "여서"],
      correctIndex: 0,
      explain: "Fe’l ‘오다’ ning -아서/-어서: 와서 → ‘yomg‘ir yog‘gani uchun’."
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
    "Inkori (kerak emas): V + -지 않아도 되다 → 가지 않아도 돼요",
    "Ko‘p naqsh: -려면 … -아/어야 해요"
  ],
  usage:
    "Qoidalar, talablar, tavsiyalar. ‘되다’ og‘zaki, ‘하다’ biroz rasmiyroq ohang.",
  examples: [
    { ko: "어른에게는 존댓말을 사용해야 합니다.", uz: "Kattalarga hurmat ohangida gapirish kerak.", ru: "Со старшими нужно говорить в вежливой форме.", en: "You must use honorific speech to elders." },
    { ko: "외국에 가려면 여권이 있어야 해요.", uz: "Chet elga borish uchun pasport bo‘lishi kerak.", ru: "Чтобы поехать за границу, нужен паспорт.", en: "You need a passport if you want to go abroad." },
    { ko: "영화를 보려면 표를 미리 사야 돼요.", uz: "Kino ko‘rmoqchi bo‘lsangiz, chiptani oldindan olishingiz kerak.", ru: "Если хотите посмотреть фильм, нужно заранее купить билет.", en: "If you want to watch a movie, you must buy a ticket in advance." },
    { ko: "담배를 피우고 싶으면 밖에 나가야 합니다.", uz: "Chekishni xohlasangiz, tashqariga chiqishingiz kerak.", ru: "Если хотите покурить, нужно выйти на улицу.", en: "If you want to smoke, you have to go outside." },
    // +3
    { ko: "회의 전에 자료를 준비해야 합니다.", uz: "Yig‘ilishdan oldin materiallarni tayyorlash kerak.", ru: "Нужно подготовить материалы перед совещанием.", en: "You must prepare the materials before the meeting." },
    { ko: "시험을 보려면 신분증을 가져와야 해요.", uz: "Imtihon topshirish uchun pasport/ID olib kelish kerak.", ru: "Чтобы сдавать экзамен, нужно принести удостоверение.", en: "You need to bring your ID to take the exam." },
    { ko: "집에 늦게 오면 연락해야 돼요.", uz: "Uyga kech kelsangiz, albatta xabar berishingiz kerak.", ru: "Если опаздываете домой, нужно сообщить.", en: "If you’ll be late home, you must let us know." }
  ],
  quiz: [
    { id: "q-oya-1", question: "빈칸: 내일까지 숙제를 끝내___ 합니다.", options: ["야", "어야", "아서"], correctIndex: 1, explain: "끝내 + 어야 하다 → ‘끝내어야/끝내야’ (og‘zaki: ‘끝내야’)." },
    { id: "q-oya-2", question: "Ruxsat (kerak emas): 오늘은 일하지 ___ 돼요.", options: ["않아야", "않아도", "어도"], correctIndex: 1, explain: "‘-지 않아도 되다’ — ‘qilmasa ham bo‘ladi’." }
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
    { ko: "문 좀 열어 주세요.", uz: "Iltimos, eshikni ochib bering.", ru: "Пожалуйста, откройте дверь.", en: "Please open the door (for me)." },
    { ko: "한국어로 설명해 주세요.", uz: "Koreys tilida tushuntirib bering.", ru: "Поясните, пожалуйста, на корейском.", en: "Please explain in Korean." },
    { ko: "짐을 들어 드릴게요.", uz: "Yukingizni ko‘tarib beraman.", ru: "Я понесу ваш багаж.", en: "I’ll carry your luggage for you." },
    { ko: "도와 드릴까요?", uz: "Yordam beraymi?", ru: "Вам помочь?", en: "May I help you?" },
    // +3
    { ko: "이 이메일을 확인해 주시겠어요?", uz: "Bu emailni tekshirib bera olasizmi?", ru: "Не могли бы вы проверить это письмо?", en: "Could you please check this email?" },
    { ko: "사진을 편집해 드릴게요.", uz: "Rasmlarni tahrirlab beraman.", ru: "Я отредактирую фотографии для вас.", en: "I’ll edit the photos for you." },
    { ko: "자리 예약을 해 드릴까요?", uz: "Joy band qilib beraymi?", ru: "Забронировать вам место?", en: "Shall I book a seat for you?" }
  ],
  quiz: [
    {
      id: "q-juda-1",
      question: "Hurmatli taklif: 자리로 안내해 ___?",
      options: ["드릴까요", "주시겠어요", "주세요"],
      correctIndex: 0,
      explain: "Taklif/va’da shakli: ‘안내해 드릴까요?’"
    },
    {
      id: "q-juda-2",
      question: "To‘g‘ri iltimos shakli: 사진을 보내 ____. ",
      options: ["주세요", "주실래요?", "줘요"],
      correctIndex: 0,
      explain: "Muloyim iltimos uchun ‘… 보내 주세요’ mos."
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
    "⚠️ ‘있다/없다’ inkorida ‘없다’: ‘시간 없어요’. ‘아니다’ — ot inkori: ‘학생이 아니에요’"
  ],
  usage:
    "Savolga rad javob, odatlar, rejani inkor etish. Rasmiysi: ‘~지 않습니다’.",
  examples: [
    { ko: "지금 비가 와요? — 아니요, 비가 안 와요.", uz: "Hozir yomg‘ir yog‘yaptimi? — Yo‘q, yomg‘ir yog‘mayapti.", ru: "Сейчас идёт дождь? — Нет, дождь не идёт.", en: "Is it raining now? — No, it's not raining." },
    { ko: "숙제를 했어요? — 아니요, 숙제를 안 했어요.", uz: "Uy vazifasini bajardingizmi? — Yo‘q, bajarmadim.", ru: "Ты сделал(а) домашку? — Нет, не сделал(а).", en: "Did you do your homework? — No, I didn’t." },
    { ko: "주말에 운동 안 해요.", uz: "Dam olishda sport bilan shug‘ullanmayman.", ru: "По выходным я не занимаюсь спортом.", en: "I don’t work out on weekends." },
    // +3
    { ko: "저는 아침을 안 먹어요.", uz: "Men nonushta qilmayman.", ru: "Я не завтракаю.", en: "I don’t eat breakfast." },
    { ko: "그는 요즘 운동을 안 해요.", uz: "U hozirlarda sport bilan shug‘ullanmaydi.", ru: "Он в последнее время не тренируется.", en: "He doesn’t exercise these days." },
    { ko: "주말에는 일 안 해요.", uz: "Dam olish kunlari ishlamayman.", ru: "По выходным я не работаю.", en: "I don’t work on weekends." }
  ],
  quiz: [
    { id: "q-an-1", question: "빈칸: 저는 커피를 ___ 마셔요. (ichmayman)", options: ["못", "안", "아니"], correctIndex: 1, explain: "Ixtiyoriy inkor — ‘안’. ‘못’ qila olmaslik ma’nosi." },
    { id: "q-an-2", question: "To‘g‘ri inkor: 저는 학생___.", options: ["안이에요", "아니에요", "없어요"], correctIndex: 1, explain: "Ot inkori ‘아니다’: ‘학생이 아니에요’." }
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
    "Rasmiy: -았습니다/-었습니다; yozma: -았다/-었다"
  ],
  usage:
    "Kecha/ilgari bo‘lgan ishlar, tajriba, hikoya.",
  examples: [
    { ko: "지난 주말에 소포를 받았어요.", uz: "O‘tgan dam olishda posilkani oldim.", ru: "На прошлых выходных я получил(а) посылку.", en: "I received a parcel last weekend." },
    { ko: "어제 영화 봤어요?", uz: "Kecha kino ko‘rdingizmi?", ru: "Ты вчера смотрел(а) фильм?", en: "Did you watch a movie yesterday?" },
    { ko: "어제 일찍 잤어요.", uz: "Kecha erta uxladim.", ru: "Вчера я рано лёг(ла) спать.", en: "I went to bed early yesterday." },
    // +3
    { ko: "지난달에 한국에 다녀왔어요.", uz: "O‘tgan oy Koreyaga borib keldim.", ru: "В прошлом месяце съездил(а) в Корею.", en: "I visited Korea last month." },
    { ko: "친구를 만나서 커피를 마셨어요.", uz: "Do‘stim bilan uchrashib qahva ichdim.", ru: "Встретился(лась) с другом и выпил(а) кофе.", en: "I met a friend and had coffee." },
    { ko: "한국어 수업을 들었어요.", uz: "Koreys tili darsida qatnashdim.", ru: "Посетил(а) занятие по корейскому.", en: "I took a Korean class." }
  ],
  quiz: [
    { id: "q-past-1", question: "‘먹다’ fe’lini o‘tgan zamonda to‘g‘ri tanlang:", options: ["먹았어요", "먹였어요", "먹했어요"], correctIndex: 0, explain: "Boshqa unlilar → ‘-었-’: 먹었어요." },
    { id: "q-past-2", question: "Rasmiy: ‘갔어요’ ning formal varianti qaysi?", options: ["갔습니다", "가었습니다", "가했습니디"], correctIndex: 0, explain: "Formal o‘tgan: -았습니다/-었습니다 → 갔습니다." }
  ]
},{
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
    { ko: "새 집은 어때요?", uz: "Yangi uyingiz qanday?", ru: "Как вам новый дом?", en: "How’s the new house?" },
    { ko: "한국어 수업이 어때요?", uz: "Koreys tili darsi qanday?", ru: "Как занятия по корейскому?", en: "How is the Korean class?" },
    { ko: "날씨가 어떻습니까? — 아주 좋습니다.", uz: "Ob-havo qanday? — Juda yaxshi.", ru: "Какая погода? — Очень хорошая.", en: "How’s the weather? — Very good." },
    // +3
    { ko: "그 영화 어땠어요?", uz: "U film qanday bo‘ldi?", ru: "Как был тот фильм?", en: "How was that movie?" },
    { ko: "새로 산 휴대폰 어때요?", uz: "Yangi olgan telefoningiz qanday?", ru: "Как новый телефон?", en: "How’s your new phone?" },
    { ko: "한국 음식은 어때요? 매워요?", uz: "Koreys taomi qanday? Achchiqmi?", ru: "Как корейская еда? Острая?", en: "How is Korean food? Is it spicy?" }
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
      explain: "Baho bildiruvchi sifat: ‘achchiq, lekin mazali’."
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
    { ko: "수업이 끝난 후에 도서관에 갔어요.", uz: "Dars tugagandan keyin kutubxonaga bordim.", ru: "После того как занятие закончилось, я пошёл(шла) в библиотеку.", en: "After class ended, I went to the library." },
    { ko: "영화를 본 후에 저녁을 먹었어요.", uz: "Kino ko‘rgandan keyin kechki ovqat yedik.", ru: "После фильма мы поужинали.", en: "After watching the movie, we had dinner." },
    { ko: "이 약은 식사 후에 드세요.", uz: "Bu dori ovqatdan keyin ichiladi (iching).", ru: "Этот препарат принимайте после еды.", en: "Take this medicine after meals." },
    // +3
    { ko: "회의가 끝난 후에 보고서를 보낼게요.", uz: "Yig‘ilish tugagandan keyin hisobotni yuboraman.", ru: "После совещания отправлю отчёт.", en: "I’ll send the report after the meeting ends." },
    { ko: "운동한 후에 샤워하세요.", uz: "Mashqdan keyin dush qabul qiling.", ru: "После тренировки примите душ.", en: "Take a shower after working out." },
    { ko: "입국 수속을 마친 후에 짐을 찾으세요.", uz: "Kirish jarayonini tugatgach, yukni oling.", ru: "После прохождения контроля заберите багаж.", en: "After completing immigration, pick up your luggage." }
  ],
  quiz: [
    {
      id: "q-hue-1",
      question: "빈칸: 숙제를 끝___ 후에 게임을 해요.",
      options: ["고", "은", "ㄴ"],
      correctIndex: 2,
      explain:
        "‘끝내다’ (vokal bilan tugaydi) → ‘끝낸 후에’. Agar ‘끝나다’ bo‘lsa: ‘끝난 후에’."
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
    { ko: "날씨가 추운데 따뜻하게 입으세요.", uz: "Havo sovuq, issiqroq kiying.", ru: "Похолодало, оденьтесь тепло.", en: "It’s cold, so dress warmly." },
    { ko: "아기가 자는데 조용히 하세요.", uz: "Chaqaloq uxlayapti, iltimos jim bo‘ling.", ru: "Ребёнок спит, пожалуйста, потише.", en: "The baby is sleeping, please be quiet." },
    { ko: "저는 학생인데 내일 시험이 있어요.", uz: "Men talabayman, ertaga imtihonim bor.", ru: "Я студент, завтра у меня экзамен.", en: "I’m a student, and I have an exam tomorrow." },
    // +3
    { ko: "지금 약속이 있는데 나중에 통화할게요.", uz: "Hozir uchrashuvim bor, keyin qo‘ng‘iroq qilaman.", ru: "У меня сейчас встреча, перезвоню позже.", en: "I have an appointment now; I’ll call later." },
    { ko: "시간이 없는데 택시를 탈까요?", uz: "Vaqtimiz yo‘q, taksi chaqiraylikmi?", ru: "Времени нет, может возьмём такси?", en: "We don't have time; shall we take a taxi?" },
    { ko: "비가 오는데 우산 있어요?", uz: "Yomg‘ir yog‘ayapti-ku, soyaboningiz bormi?", ru: "Дождь идёт, у вас есть зонт?", en: "It’s raining—do you have an umbrella?" }
  ],
  quiz: [
    {
      id: "q-neunde-1",
      question: "To‘ldiring: 비가 ___ 우산을 가져가세요.",
      options: ["오는데", "왔는데", "오는 데"],
      correctIndex: 0,
      explain: "동사 + 는데: ‘오다 → 오는데’."
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
    "1) Aniq sabab: ‘재미있으니까 꼭 보세요’. 2) Tajribadan keyin anglangan sabab: ‘쉬니까 몸이 좋아졌어요’.",
  examples: [
    { ko: "그 영화는 재미있으니까 꼭 보세요.", uz: "Bu kino qiziq bo‘lgani uchun, albatta ko‘ring.", ru: "Фильм интересный, поэтому обязательно посмотрите.", en: "It’s interesting, so be sure to watch it." },
    { ko: "네가 잘못했으니까 먼저 사과해.", uz: "Sen xato qilganing uchun birinchi bo‘lib kechirim so‘ra.", ru: "Ты виноват(а), поэтому сначала извинись.", en: "You were wrong, so apologize first." },
    { ko: "좀 쉬니까 몸이 좋아지더군요.", uz: "Bir oz dam olsam, badanim yaxshilandi.", ru: "Немного отдохнул(а) — самочувствие улучшилось.", en: "I rested a bit and felt better." },
    // +3
    { ko: "시간이 없으니까 바로 시작합시다.", uz: "Vaqt yo‘q, darrov boshlaylik.", ru: "Времени нет, давайте начнём сразу.", en: "We don’t have time, so let’s start right away." },
    { ko: "배가 고프니까 먼저 먹어요.", uz: "Ochmiz, avval ovqatlanaylik.", ru: "Мы голодны, поэтому сначала поедим.", en: "We’re hungry, so let’s eat first." },
    { ko: "비싸니까 다른 걸로 살게요.", uz: "Qimmat ekan, boshqasini olaman.", ru: "Дорого, возьму что-нибудь другое.", en: "It’s expensive, so I’ll buy something else." }
  ],
  quiz: [
    {
      id: "q-34-1",
      question: "비가 오___ 우산을 가져가세요.",
      options: ["아서", "니까", "는데"],
      correctIndex: 1,
      explain: "Sabab + buyruq: ‘비가 오니까 …’."
    },
    {
      id: "q-34-2",
      question: "‘Dam olsam ko‘nglim yozildi’ — to‘g‘ri variant:",
      options: [
        "쉬니까 기분이 좋아졌어요.",
        "쉬어서 기분이 좋아져요 (buyruq bilan).",
        "쉬는데 기분이 좋아졌어요."
      ],
      correctIndex: 0,
      explain: "Tajribadan kelib chiqqan sabab: ‘쉬니까 …좋아졌어요’."
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
    "현재: V-는 것      (읽는 것, 가는 것)",
    "과거:  V-(으)ㄴ 것  (읽은 것, 간 것)",
    "미래:  V-(으)ㄹ 것  (읽을 것, 갈 것)",
    "명사 + 것  (누구의 것? 제 것/네 것/우리 것)",
    "Qisqarish: 것이 → 게, 것을 → 걸, 것은 → 건",
    "‘…것이에요’ → ‘…거예요’ (V-(으)ㄹ 거예요 — reja/taxmin)."
  ],
  usage:
    "1) Amallarni ‘narsa’ga aylantirish: ‘가는 게 어때요?’ 2) Egalik: ‘누구의 것입니까?’ 3) Aniqlovchi + ot: ‘약속한 것을 잊어버렸어요.’ 4) Reja/taxmin: ‘내일 갈 거예요.’",
  examples: [
    { ko: "병원에 가 보는 게 어때요?", uz: "Kasalxonaga borib ko‘rish haqida nima deysan?", ru: "Как насчёт сходить в больницу?", en: "How about going to the hospital?" },
    { ko: "이 가방은 누구의 것입니까?", uz: "Bu sumka kimniki?", ru: "Чья это сумка?", en: "Whose bag is this?" },
    { ko: "어제 약속한 것을 잊어버렸어요.", uz: "Kecha kelishgan narsamizni (va’dani) unutib qo‘ydim.", ru: "Забыл(а) то, о чём договорились вчера.", en: "I forgot what we promised yesterday." },
    { ko: "내일 한국에 갈 거예요.", uz: "Ertaga Koreyaga boraman (reja).", ru: "Завтра поеду в Корею.", en: "I’m going to Korea tomorrow." },
    // +3
    { ko: "책 읽는 게 좋아요.", uz: "Kitob o‘qishni yoqtiraman.", ru: "Мне нравится читать книги.", en: "I like reading books." },
    { ko: "이건 제 거예요.", uz: "Bu mening narsam.", ru: "Это моё.", en: "This is mine." },
    { ko: "지금 할 것이 많아요.", uz: "Hozir qiladigan ishlarim ko‘p.", ru: "Сейчас много дел, которые нужно сделать.", en: "I have many things to do now." }
  ],
  quiz: [
    {
      id: "q-35-1",
      question: "‘Kitob o‘qish yoqadi’ — qaysi variant to‘g‘ri?",
      options: ["책 읽는 게 좋아요.", "책 읽을 거예요.", "책 읽은 것 좋아요."],
      correctIndex: 0,
      explain: "Sevish/yoqish predmet sifatida → 현재 nominalizatsiya ‘읽는 게’."
    },
    {
      id: "q-35-2",
      question: "Bo‘shliqni to‘ldiring: ‘Bu mening narsam’ → 제 ___ 입니다.",
      options: ["것", "게", "거예요"],
      correctIndex: 0,
      explain: "Rasmiy egalik: ‘제 것입니다’. (Norasmiysi: ‘제 거예요’)."
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
    { ko: "조금만 기다리세요. 금방 갈게요.", uz: "Biroz kuting, hozir yetib boraman.", ru: "Немного подождите, я скоро приду.", en: "Please wait a bit; I’ll be there soon." },
    { ko: "제가 도와줄게요.", uz: "Men yordam beraman.", ru: "Я помогу.", en: "I’ll help you." },
    { ko: "내일 다시 연락할게요.", uz: "Ertaga yana bog‘lanaman.", ru: "Завтра снова свяжусь.", en: "I’ll contact you again tomorrow." },
    // +3
    { ko: "지금 확인할게요.", uz: "Hozir tekshiraman.", ru: "Сейчас проверю.", en: "I’ll check it now." },
    { ko: "문은 제가 열게요.", uz: "Eshikni men ochaman.", ru: "Я открою дверь.", en: "I’ll open the door." },
    { ko: "회의 후에 설명드릴게요.", uz: "Yig‘ilishdan keyin tushuntirib beraman.", ru: "Объясню после совещания.", en: "I’ll explain after the meeting." }
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
      question: "Qaysi biri xato? (va’da ohangi kerak)",
      options: ["지금 확인할게요.", "내가 전화할게요.", "내가 예뻐요."],
      correctIndex: 2,
      explain: "‘예뻐요’ sifat; -(으)ㄹ게요 faqat fe’l bilan ishlatiladi."
    }
  ]
},{
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
    { ko: "같이 점심 먹을까요?", uz: "Birga tushlik qilaylikmi?", ru: "Пообедаем вместе?", en: "Shall we have lunch together?" },
    { ko: "그분이 오늘 올까요?", uz: "U kishi bugun kelarmikan?", ru: "Он/она сегодня придёт?", en: "Do you think he/she will come today?" },
    { ko: "몇 시에 시작할까요?", uz: "Soat nechada boshlasak bo‘ladi?", ru: "Во сколько начнём?", en: "What time shall we start?" },
    // +3
    { ko: "지금 출발할까요?", uz: "Hozir jo‘nasakmi?", ru: "Поедем сейчас?", en: "Shall we leave now?" },
    { ko: "창문을 열까요?", uz: "Derazani ochaymi?", ru: "Окно открыть?", en: "Shall I open the window?" },
    { ko: "내일 다시 만날까요?", uz: "Ertaga yana uchrashaylikmi?", ru: "Встретимся завтра?", en: "Shall we meet again tomorrow?" }
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
    "Vaqt sharti/nuqtasi: ‘집에 올 때 우유를 사세요’. O‘tgan davr xotirasi: ‘한국에 있었을 때 …’.",
  examples: [
    { ko: "집에 올 때 우유 좀 사세요.", uz: "Uyga kelayotganda biroz sut oling.", ru: "Когда будете идти домой, купите молока.", en: "When you come home, please buy some milk." },
    { ko: "한국에 있었을 때 많이 걸었어요.", uz: "Koreyada bo‘lganimda ko‘p yurganman.", ru: "Когда я был(а) в Корее, много ходил(а).", en: "When I was in Korea, I walked a lot." },
    { ko: "수업할 때 휴대폰을 끄세요.", uz: "Dars paytida telefonni o‘chirib qo‘ying.", ru: "Во время занятия выключайте телефон.", en: "Please turn off your phone during class." },
    // +3
    { ko: "졸릴 때 커피를 마셔요.", uz: "Uxlab ketguday bo‘lganimda qahva ichaman.", ru: "Когда клонит в сон, пью кофе.", en: "When I feel sleepy, I drink coffee." },
    { ko: "피곤했을 때 집에 바로 갔어요.", uz: "Charchagan paytimda to‘g‘ri uyga bordim.", ru: "Когда устал(а), сразу пошёл(шла) домой.", en: "When I was tired, I went straight home." },
    { ko: "학생일 때 돈이 별로 없었어요.", uz: "Talabaligimda pulim uncha bo‘lmasdi.", ru: "Когда был(а) студентом, денег почти не было.", en: "When I was a student, I hardly had money." }
  ],
  quiz: [
    {
      id: "q-38-1",
      question: "어릴 ___ 그 동네에 살았어요.",
      options: ["게", "때", "까요"],
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
    { ko: "제 일은 제가 알아서 할 수 있어요.", uz: "O‘z ishimi o‘zim bajarishim mumkin.", ru: "Я могу сам(а) заняться своим делом.", en: "I can take care of my work myself." },
    { ko: "그녀는 수영을 할 수 없어요.", uz: "U qiz suza olmaydi.", ru: "Она не умеет плавать.", en: "She can’t swim." },
    { ko: "시합에서 이길 수도 있고 질 수도 있어요.", uz: "Musobaqada yutish ham, yutqazish ham mumkin.", ru: "В соревновании можно и выиграть, и проиграть.", en: "We might win or lose the match." },
    { ko: "저는 한자를 읽을 수 없습니다.", uz: "Men hanjani o‘qiy olmayman.", ru: "Я не могу читать иероглифы.", en: "I can’t read Chinese characters." },
    // +3
    { ko: "여기에서 사진을 찍을 수 있어요?", uz: "Bu yerda rasmga olish mumkinmi?", ru: "Здесь можно фотографировать?", en: "Can I take photos here?" },
    { ko: "내일 만날 수 있을까요?", uz: "Ertaga uchrasha olamizmi?", ru: "Сможем встретиться завтра?", en: "Could we meet tomorrow?" },
    { ko: "컴퓨터를 고칠 수 있어요?", uz: "Kompyuterni tuzata olasizmi?", ru: "Вы можете починить компьютер?", en: "Can you fix the computer?" }
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
    "받침 있음 → -으러 (읽다→읽으러, 먹다→먹으러)",
    "받침 없음 → -러  (만나러 가다, 놀러 가다) — *‘가러 가다’ odatda ishlatilmaydi*"
  ],
  usage:
    "Joy + 에 + V-(으)러 가다/오다: ‘kutubxonaga (kitob) olish uchun bormoq’, ‘do‘stni ko‘rishga kelmoq’ va h.k.",
  examples: [
    { ko: "책을 빌리러 도서관에 갑니다.", uz: "Kitob olish uchun kutubxonaga boraman.", ru: "Иду в библиотеку, чтобы взять книгу.", en: "I’m going to the library to borrow a book." },
    { ko: "낚시하러 강가에 갔습니다.", uz: "Baliq tutish uchun daryoga bordim.", ru: "Пошёл(шла) к реке, чтобы рыбачить.", en: "I went to the riverside to go fishing." },
    { ko: "친구를 만나러 카페에 가요.", uz: "Do‘stimni uchratgani kafega ketyapman.", ru: "Иду в кафе встретиться с другом.", en: "I’m going to a café to meet a friend." },
    // +3
    { ko: "운동하러 체육관에 가요.", uz: "Mashq qilishga sport zaliga boraman.", ru: "Иду в спортзал позаниматься.", en: "I go to the gym to work out." },
    { ko: "사진 찍으러 공원에 가요.", uz: "Rasmga tushishga bog‘ga boraman.", ru: "Иду в парк фотографироваться.", en: "I’m going to the park to take photos." },
    { ko: "한국어 공부하러 학원에 다녀요.", uz: "Koreyscha o‘qishga markazga qatnayman.", ru: "Хожу в учебный центр изучать корейский.", en: "I attend an academy to study Korean." }
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
      explain: "‘다니다’ bilan ham -(으)러 ishlatiladi."
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
    "Vazifa/istak maqsadi aniq: 산책하러 갔다, 서류를 내러 오다 va h.k.",
  examples: [
    { ko: "동생은 공원에 산책하러 갔어요.", uz: "Ukam bog‘ga sayr qilgani ketdi.", ru: "Младший брат пошёл в парк на прогулку.", en: "My younger sibling went to the park for a walk." },
    { ko: "형과 보양하러 바다에 갔습니다.", uz: "Akam bilan sog‘lomlanish uchun dengizga bordik.", ru: "Мы с братом поехали к морю оздоровиться.", en: "My brother and I went to the sea to recuperate." },
    { ko: "학교가 입학시험 보러 온 학생들로 가득 찼어요.", uz: "Maktab imtihon topshirgani kelgan o‘quvchilar bilan to‘ldi.", ru: "Школа была переполнена абитуриентами, пришедшими на экзамен.", en: "The school was full of students who came to take entrance exams." },
    // +3
    { ko: "친구를 도와주러 집에 왔어요.", uz: "Do‘stimga yordam berishga uyiga keldim.", ru: "Пришёл(шла) домой к другу, чтобы помочь.", en: "I came to my friend’s house to help." },
    { ko: "서류를 제출하러 학교에 갔어요.", uz: "Hujjat topshirishga maktabga bordim.", ru: "Ходил(а) в школу подать документы.", en: "I went to the school to submit documents." },
    { ko: "놀러 바다에 갔어요.", uz: "Hordiq uchun dengizga bordim.", ru: "Поехал(а) к морю отдохнуть.", en: "I went to the sea to hang out." }
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
    "Fe’lga qo‘shilib istak va maqsadni bildiradi. Sifatga qo‘shilmaydi. O‘zbekchaga “–moqchi bo‘lib”, “– uchun” tarzida tarjima qilinadi.",
  forms: [
    "동사 어간 + (으)려고",
    "받침 있음 → -으려고 (읽다→읽으려고)",
    "받침 없음 → -려고 (가다→가려고)"
  ],
  usage:
    "Ko‘pincha maqsadni bildiruvchi ikkinchi fe’l bilan keladi yoki -(으)려고 + 하다 bilan birga ishlatiladi.",
  examples: [
    { ko: "공부를 더 하려고 대학원에 다닙니다.", uz: "O‘qishni davom ettirish maqsadida magistraturaga kirdim.", ru: "Хожу в магистратуру, чтобы продолжить учёбу.", en: "I attend graduate school to continue my studies." },
    { ko: "한국에 가려고 이 책을 샀습니다.", uz: "Koreyaga borish uchun bu kitobni sotib oldim.", ru: "Купил(а) эту книгу, чтобы поехать в Корею.", en: "I bought this book to go to Korea." },
    // +3
    { ko: "일찍 일어나려고 알람을 맞췄어요.", uz: "Erta turish uchun budilnikni qo‘ydim.", ru: "Поставил(а) будильник, чтобы рано встать.", en: "I set an alarm to wake up early." },
    { ko: "취업하려고 자격증을 준비해요.", uz: "Ishga kirish uchun sertifikatga tayyorlanayapman.", ru: "Готовлюсь к сертификату, чтобы устроиться на работу.", en: "I’m preparing for a certificate to get a job." },
    { ko: "한국 문화를 이해하려고 드라마를 봐요.", uz: "Koreys madaniyatini tushunish uchun seriallar ko‘raman.", ru: "Смотрю дорамы, чтобы понимать корейскую культуру.", en: "I watch K-dramas to understand Korean culture." }
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
    { ko: "오랜만에 집에 편지를 쓰려고 합니다.", uz: "Uzoq vaqtdan keyin uyga xat yozmoqchiman.", ru: "Собираюсь написать письмо домой спустя долгое время.", en: "I’m planning to write a letter home after a long time." },
    { ko: "내일 교수님을 만나려고 합니다.", uz: "Ertaga professor bilan uchrashmoqchiman.", ru: "Завтра собираюсь встретиться с профессором.", en: "I plan to meet the professor tomorrow." },
    { ko: "한국에 가려고 했습니다.", uz: "Koreyaga ketmoqchi edim.", ru: "Собирался(лась) поехать в Корею.", en: "I was going to go to Korea." },
    // +3
    { ko: "이번 주말에 쉬려고 해요.", uz: "Ushbu dam olishda dam olmoqchiman.", ru: "В эти выходные планирую отдохнуть.", en: "I’m planning to rest this weekend." },
    { ko: "내년에 유학 가려고 해요.", uz: "Kelasi yili chet elda o‘qimoqchiman.", ru: "В следующем году собираюсь учиться за границей.", en: "I’m planning to study abroad next year." },
    { ko: "지금 전화하려고 했어요.", uz: "Hozir telefon qilmoqchi edim.", ru: "Как раз собирался(лась) позвонить.", en: "I was just about to call." }
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
    "Imperativ/iltimos, taklif, maslahat bilan ham kelishi mumkin (오시면 연락하세요).",
  examples: [
    { ko: "오늘 시간이 없으면 다음에 만나요.", uz: "Bugun vaqtingiz yo‘q bo‘lsa, keyin uchrashamiz.", ru: "Если сегодня нет времени, встретимся в следующий раз.", en: "If you don’t have time today, let’s meet next time." },
    { ko: "책을 펴면 잠이 와요.", uz: "Kitobni ochsam, uyqum keladi.", ru: "Как только открываю книгу, клонит в сон.", en: "When I open a book, I get sleepy." },
    // +3
    { ko: "시간이 있으면 도와줄게요.", uz: "Vaqtim bo‘lsa, yordam beraman.", ru: "Если будет время, помогу.", en: "If I have time, I’ll help." },
    { ko: "비가 오면 집에 있을 거예요.", uz: "Yomg‘ir yog‘sa, uyda bo‘laman.", ru: "Если пойдёт дождь, останусь дома.", en: "If it rains, I’ll stay home." },
    { ko: "가격이 싸면 살 거예요.", uz: "Narxi arzon bo‘lsa, xarid qilaman.", ru: "Если цена низкая, куплю.", en: "If it’s cheap, I’ll buy it." }
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
    "Qoidalar, taqiqlar, odob doirasidagi “bo‘lmaydi” ni ifodalaydi.",
  examples: [
    { ko: "지금 들어가면 안 됩니다.", uz: "Hozir kirish mumkin emas.", ru: "Сейчас входить нельзя.", en: "You must not enter now." },
    { ko: "거짓말을 하면 안 돼요.", uz: "Yolg‘on gapirish mumkin emas.", ru: "Нельзя лгать.", en: "You shouldn’t lie." },
    { ko: "여기에서 담배 피우면 안 됩니다.", uz: "Bu yerda chekish mumkin emas.", ru: "Здесь нельзя курить.", en: "Smoking is not allowed here." },
    // +3
    { ko: "운전하면서 전화하면 안 돼요.", uz: "Mashina haydab turib telefon qilish mumkin emas.", ru: "Нельзя говорить по телефону за рулём.", en: "You shouldn’t call while driving." },
    { ko: "개인 정보를 공개하면 안 됩니다.", uz: "Shaxsiy ma’lumotni oshkor qilish mumkin emas.", ru: "Нельзя раскрывать личные данные.", en: "You must not disclose personal information." },
    { ko: "시험 중에는 떠들면 안 됩니다.", uz: "Imtihon paytida shovqin qilish mumkin emas.", ru: "Во время экзамена нельзя шуметь.", en: "You must not make noise during the exam." }
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
    "Ikki harakatning bir vaqtda ro‘y berishini bildiradi. Bosh va ergash gap egasi odatda bir xil.",
  forms: [
    "동사 어간 + (으)면서",
    "받침 있음 → -으면서 (읽다→읽으면서)",
    "받침 없음 → -면서 (가다→가면서)"
  ],
  usage:
    "Kundalik odatlar, fon harakatini tasvirlashda ishlatiladi.",
  examples: [
    { ko: "음악을 들으면서 공부해요.", uz: "Musiqa eshitib o‘qyman.", ru: "Учусь, слушая музыку.", en: "I study while listening to music." },
    { ko: "텔레비전을 보면서 저녁을 먹었어요.", uz: "Televizor ko‘rib, kechki ovqat yedim.", ru: "Ужинал(а), смотря телевизор.", en: "I had dinner while watching TV." },
    // +3
    { ko: "걸으면서 이야기했어요.", uz: "Yurib suhbatlashdik.", ru: "Разговаривали, идя пешком.", en: "We talked while walking." },
    { ko: "운전하면서 문자 보내면 안 돼요.", uz: "Mashina haydab turib SMS yozish mumkin emas.", ru: "Нельзя писать сообщения во время вождения.", en: "You mustn’t text while driving." },
    { ko: "요리하면서 노래를 들어요.", uz: "Ovqat pishirarkanman, qo‘shiq tinglayman.", ru: "Слушаю музыку, пока готовлю.", en: "I listen to music while cooking." }
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
    "받침 있음 → -읍시다 (먹다→먹읍시다, **풀다→풉시다**)",
    "받침 없음 → -ㅂ시다 (가다→갑시다)"
  ],
  usage:
    "Rasmiy-kamtar uslub. O‘qituvchi–talaba, jamoaga murojaatda ishlatiladi. Nozimniy muqobil: -자.",
  examples: [
    { ko: "같이 공부합시다.", uz: "Birga o‘qiylik.", ru: "Давайте учиться вместе.", en: "Let’s study together." },
    { ko: "내일 일찍 만납시다.", uz: "Ertaga erta uchrashaylik.", ru: "Давайте встретимся завтра пораньше.", en: "Let’s meet early tomorrow." },
    // +3
    { ko: "이 문제를 같이 풉시다.", uz: "Bu masalani birga yechaylik.", ru: "Давайте решим эту задачу вместе.", en: "Let’s solve this problem together." },
    { ko: "회의를 시작합시다.", uz: "Yig‘ilishni boshlaylik.", ru: "Давайте начнём совещание.", en: "Let’s start the meeting." },
    { ko: "잠깐 쉬었다가 다시 합시다.", uz: "Biroz dam olib, keyin davom etaylik.", ru: "Давайте немного отдохнём и продолжим.", en: "Let’s take a short break and continue." }
  ],
  quiz: [
    {
      id: "q47-1",
      question: "주말에 산에 가___!",
      options: ["ㅂ시다", "세요", "면"],
      correctIndex: 0,
      explain: "Taklif: 갑시다."
    }
  ]
},

{
  id: "euseyo-request",
  title: "-(으)세요 (iltimos/so‘rov, hurmat)",
  level: "Boshlang'ich",
  tags: ["Request", "Honorific", "Imperative", "TOPIK A1"],
  meaning:
    "Muloyim buyruq yoki iltimos: “–ing”, “– qiling”. Tinglovchiga hurmat ohangi.",
  forms: [
    "동사 어간 + (으)세요",
    "받침 있음 → -으세요 (읽다→읽으세요)",
    "받침 없음 → -세요 (가다→가세요)",
    "부정: -지 마세요 (가지 마세요)"
  ],
  usage:
    "Xizmat ko‘rsatish, kundalik iltimos, yo‘riqnomalarda.",
  examples: [
    { ko: "앉으세요.", uz: "O‘tiring, iltimos.", ru: "Пожалуйста, садитесь.", en: "Please have a seat." },
    { ko: "조용히 해 주세요.", uz: "Iltimos, jim bo‘ling.", ru: "Пожалуйста, потише.", en: "Please be quiet." },
    { ko: "메뉴 좀 보세요.", uz: "Menyuga qarang.", ru: "Посмотрите меню, пожалуйста.", en: "Please take a look at the menu." },
    { ko: "사진을 찍지 마세요.", uz: "Rasmga olmang.", ru: "Пожалуйста, не фотографируйте.", en: "Please do not take photos." },
    // +3
    { ko: "이쪽으로 오세요.", uz: "Bu tomonga keling.", ru: "Подойдите сюда, пожалуйста.", en: "Please come this way." },
    { ko: "문을 닫아 주세요.", uz: "Iltimos, eshikni yoping.", ru: "Пожалуйста, закройте дверь.", en: "Please close the door." },
    { ko: "도와주세요.", uz: "Yordam bering, iltimos.", ru: "Пожалуйста, помогите.", en: "Please help me." }
  ],
  quiz: [
    {
      id: "q-48-1",
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
    "Gap oxirida fon ma’lumot beradi, vaziyatni yumshoq aytadi, muloyim e’tiroz yoki davom kutadi.",
  forms: [
    "동사 + -는데요  (가다→가는데요, 먹다→먹는데요)",
    "형용사 + -(으)ᄂ데요  (크다→큰데요, 작다→작은데요)",
    "명사 + (이)ᄂ데요  (학생인데요, 의사인데요)"
  ],
  usage:
    "• Fon: “...-ku, shunday bo‘lsa...”. • Yengil e’tiroz/ajablanish. • Muloyim kirish/so‘rov.",
  examples: [
    { ko: "저는 빌린인데요. 김 선생님 계세요?", uz: "Men Billinman-da. Kim ustoz bormi?", ru: "Я Биллин, кстати. Господин Ким на месте?", en: "I’m Billin. Is Mr. Kim in?" },
    { ko: "저는 일본에서 온 학생인데요, 사무실이 어디예요?", uz: "Men Yaponiyadan kelgan talabama-da, ofis qayerda?", ru: "Я студент из Японии, подскажите, где офис?", en: "I’m a student from Japan—where is the office?" },
    { ko: "비가 오는데요.", uz: "Yomg‘ir yog‘yapti-da (bilishingiz uchun).", ru: "Кстати, идёт дождь.", en: "By the way, it’s raining." },
    // +3
    { ko: "지금은 바쁜데요…", uz: "Hozir bandman-da…", ru: "Сейчас я занят(а)…", en: "I’m busy right now…" },
    { ko: "여기는 처음인데요.", uz: "Bu yerga birinchi marta kelyapman-da.", ru: "Я здесь впервые.", en: "It’s my first time here." },
    { ko: "가격이 조금 비싼데요.", uz: "Narxi biroz qimmat-da.", ru: "Цена немного высоковата.", en: "The price is a bit expensive." }
  ],
  quiz: [
    {
      id: "q52-1",
      question: "저는 한국어 반 새 학생___, 자리 있나요?",
      options: ["인데요", "는데요", "이에요"],
      correctIndex: 0,
      explain: "명사 + (이)ᄂ데요: 학생인데요."
    }
  ]
},

{
  id: "iga-anida",
  title: "N이/가 아니다 (emas)",
  level: "Boshlang'ich",
  tags: ["Copula", "Negation", "TOPIK A1"],
  meaning:
    "Otni inkor qiladi: “emas”. Rasmiy: 아닙니다; odatiy/hurmatli: 아니에요.",
  forms: [
    "명사 + 이/가 아니다 (학생이 아니다 / 의사가 아니다)",
    "격식: 아닙니다  ·  표준 존대: 아니에요"
  ],
  usage:
    "Savol-javobda to‘g‘ridan-to‘g‘ri inkor, ta’rifni rad etish.",
  examples: [
    { ko: "이 사람이 정은 씨입니까? — 아니요, 정은 씨가 아닙니다.", uz: "Bu kishi Chongminmi? — Yo‘q, Chongmin emas.", ru: "Это Чонъын? — Нет, это не Чонъын.", en: "Is this Jeongeun? — No, it isn’t." },
    { ko: "여기가 학생 식당입니까? — 아니요, 학생 식당이 아니에요.", uz: "Bu yer talabalarning oshxonasimi? — Yo‘q, emas.", ru: "Это студенческая столовая? — Нет, это не она.", en: "Is this the student cafeteria? — No, it isn’t." },
    { ko: "그것은 사과예요? — 아니요, 사과가 아니에요. 바나나예요.", uz: "U olma-mi? — Yo‘q, olma emas. Banan.", ru: "Это яблоко? — Нет, не яблоко. Это банан.", en: "Is that an apple? — No, it isn’t. It’s a banana." },
    // +3
    { ko: "저는 중국 사람이 아니에요.", uz: "Men xitoylik emasman.", ru: "Я не китаец/китаянка.", en: "I’m not Chinese." },
    { ko: "그건 제 것이 아니에요.", uz: "U mening narsam emas.", ru: "Это не моё.", en: "That’s not mine." },
    { ko: "여기는 도서관이 아니에요.", uz: "Bu yer kutubxona emas.", ru: "Это не библиотека.", en: "This isn’t a library." }
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
    "대명사 sifatida: 이것/그것/저것 (bu/u/ana u narsa)"
  ],
  usage:
    "Yangi va stsenadagi narsani aniqlash, avval tilga olingan narsaga qaytish (그).",
  examples: [
    { ko: "이 책 재미있어요.", uz: "Bu kitob qiziq.", ru: "Эта книга интересная.", en: "This book is interesting." },
    { ko: "그 문제는 나중에 이야기합시다.", uz: "U masalani keyin gaplashaylik.", ru: "Тот вопрос обсудим позже.", en: "Let’s discuss that issue later." },
    { ko: "저 건물이 우리 학교예요.", uz: "Ana u bino bizning maktab.", ru: "Вон то здание — наша школа.", en: "That building over there is our school." },
    // +3
    { ko: "이 사람은 제 동생이에요.", uz: "Bu odam — ukam/opam.", ru: "Этот человек — мой младший брат/сестра.", en: "This is my younger sibling." },
    { ko: "그 책을 주세요.", uz: "U kitobni bering.", ru: "Дайте, пожалуйста, ту книгу.", en: "Please give me that book." },
    { ko: "저쪽 문으로 나가세요.", uz: "Ana u tomondagi eshikdan chiqing.", ru: "Выходите через вон ту дверь.", en: "Please exit through that door over there." }
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
},{
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
    { ko: "저는 호주 사람이에요.", uz: "Men avstraliyalikman.", ru: "Я австралиец/австралийка.", en: "I’m Australian." },
    { ko: "이 사람이 제 여자 친구예요.", uz: "Bu kishi mening qiz do‘stim.", ru: "Это моя девушка.", en: "This is my girlfriend." },
    { ko: "그건 누구 가방이에요?", uz: "U kimning sumkasi?", ru: "Чья это сумка?", en: "Whose bag is that?" },
    { ko: "이건 한국말로 뭐예요?", uz: "Bu koreyschada nima deyiladi?", ru: "Как это по-корейски?", en: "What is this in Korean?" },
    // +3
    { ko: "저는 학생이에요.", uz: "Men talabaman.", ru: "Я студент(ка).", en: "I’m a student." },
    { ko: "저분은 의사예요.", uz: "U kishi shifokor.", ru: "Тот человек — врач.", en: "That person is a doctor." },
    { ko: "오늘은 금요일이에요.", uz: "Bugun — juma.", ru: "Сегодня пятница.", en: "Today is Friday." }
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
    { ko: "빌린 씨입니다.", uz: "Men Billinman.", ru: "Это Биллин.", en: "This is Billin." },
    { ko: "여기가 교실입니다.", uz: "Bu yer o‘quv xonasi.", ru: "Здесь аудитория.", en: "This is a classroom." },
    { ko: "성호 씨입니까?", uz: "Songho misiz?", ru: "Вы Сонхо?", en: "Are you Sungho?" },
    { ko: "저기가 도서관입니까?", uz: "Ana u yer kutubxonami?", ru: "Вон там — библиотека?", en: "Is that the library over there?" },
    // +3
    { ko: "저는 우즈베키스탄 사람입니다.", uz: "Men o‘zbekistondaman (O‘zbekistonlikman).", ru: "Я из Узбекистана.", en: "I’m from Uzbekistan." },
    { ko: "제 전공은 경영학입니다.", uz: "Mening mutaxassisligim — menejment.", ru: "Моя специальность — менеджмент.", en: "My major is Business Administration." },
    { ko: "여기는 회의실입니까?", uz: "Bu yer majlis xonasimi?", ru: "Это переговорная?", en: "Is this the meeting room?" }
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
    { ko: "날씨가 춥지만 따뜻하게 입으세요.", uz: "Havo sovuq, lekin issiqroq kiying.", ru: "Холодно, но оденьтесь теплее.", en: "It’s cold, but dress warmly." },
    { ko: "시간이 없지만 노력해 볼게요.", uz: "Vaqtim yo‘q, lekin harakat qilib ko‘raman.", ru: "Времени нет, но постараюсь.", en: "I don’t have time, but I’ll try." },
    { ko: "저는 학생이지만 일을 해요.", uz: "Men talaba bo‘lsam-da, ishlayman.", ru: "Я студент(ка), но работаю.", en: "I’m a student, but I work." },
    // +3
    { ko: "가격이 비싸지만 질이 좋아요.", uz: "Narxi qimmat, lekin sifati yaxshi.", ru: "Дорого, но качество хорошее.", en: "It’s expensive, but the quality is good." },
    { ko: "맛있지만 너무 매워요.", uz: "Mazali, lekin juda achchiq.", ru: "Вкусно, но очень остро.", en: "It’s tasty, but too spicy." },
    { ko: "쉬고 싶지만 해야 해요.", uz: "Dam olgim keladi, lekin qilishim kerak.", ru: "Хочу отдыхать, но надо делать.", en: "I want to rest, but I have to do it." }
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
    { ko: "교실에서 떠들지 마십시오.", uz: "Sinfxonada shovqin solmang.", ru: "Не шумите в аудитории.", en: "Please don’t make noise in the classroom." },
    { ko: "술을 너무 많이 마시지 마세요.", uz: "Sharobni juda ko‘p ichmang.", ru: "Не пейте слишком много алкоголя.", en: "Don’t drink too much alcohol." },
    { ko: "지금은 퇴근 시간이라 택시를 타지 말고 지하철을 탑시다.", uz: "Hozir ishdan qaytish payti, taksiga chiqmay, metroga minaylik.", ru: "Сейчас час пик, давайте не брать такси, а поедем на метро.", en: "It’s rush hour; let’s not take a taxi and use the subway." },
    // +3
    { ko: "여기서 사진 찍지 마세요.", uz: "Bu yerda rasmga tushirmang.", ru: "Здесь не фотографируйте.", en: "Please don’t take photos here." },
    { ko: "늦지 맙시다.", uz: "Kechikmaylik.", ru: "Давайте не опаздывать.", en: "Let’s not be late." },
    { ko: "걱정하지 마세요.", uz: "Xavotir olmang.", ru: "Не переживайте.", en: "Don’t worry." }
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
    { ko: "지금 다리가 아파서 걷지 못해요.", uz: "Hozir oyog‘im og‘rib, yura olmayman.", ru: "Нога болит, поэтому не могу идти.", en: "My leg hurts, so I can’t walk." },
    { ko: "어제 그 사람을 만나지 못했어요.", uz: "Kecha u bilan uchrasha olmadim.", ru: "Вчера не смог(ла) встретиться с ним/ней.", en: "I couldn’t meet that person yesterday." },
    { ko: "수영을 못 해요.", uz: "Suvda suzolmayman.", ru: "Я не умею плавать.", en: "I can’t swim." },
    // +3
    { ko: "시간이 없어서 참석하지 못했어요.", uz: "Vaqt yo‘qligidan qatnasha olmadim.", ru: "Не смог(ла) присутствовать из-за нехватки времени.", en: "I couldn’t attend due to lack of time." },
    { ko: "아직 운전을 잘 못 해요.", uz: "Hali yaxshi mashina hayday olmayman.", ru: "Пока плохо вожу.", en: "I still can’t drive well." },
    { ko: "컴퓨터가 고장 나서 일을 하지 못했어요.", uz: "Kompyuter buzilib, ishni qila olmadim.", ru: "Компьютер сломался, поэтому не смог(ла) работать.", en: "My computer broke, so I couldn’t work." }
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
    { ko: "저는 커피를 마시지 않아요.", uz: "Men qahva ichmayman.", ru: "Я не пью кофе.", en: "I don’t drink coffee." },
    { ko: "그는 운동을 자주 하지 않아요.", uz: "U tez-tez sport bilan shug‘ullanmaydi.", ru: "Он не часто занимается спортом.", en: "He doesn’t exercise often." },
    { ko: "오늘은 학교에 가지 않았어요.", uz: "Bugun maktabga bormadim.", ru: "Сегодня я не пошёл(шла) в школу.", en: "I didn’t go to school today." },
    // +3
    { ko: "저는 고기를 안 먹어요.", uz: "Men go‘sht yemayman.", ru: "Я не ем мясо.", en: "I don’t eat meat." },
    { ko: "그는 TV를 거의 보지 않아요.", uz: "U deyarli TV ko‘rmaydi.", ru: "Он почти не смотрит телевизор.", en: "He hardly watches TV." },
    { ko: "오늘은 피곤하지 않아요.", uz: "Bugun charchamaganman.", ru: "Сегодня я не устал(а).", en: "I’m not tired today." }
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
    { ko: "짐승도 자기 새끼를 돌보아 주거늘, 어머니가 자식을 사랑하지 않을 수 있겠어요?",
      uz: "Hayvonlar ham bolalarini asraydi, ona bolani sevmasligi mumkinmi?",
      ru: "Даже звери заботятся о детях — как же мать может не любить ребёнка?",
      en: "Even beasts care for their young—how could a mother not love her child?" },
    { ko: "사막도 나름대로 아름답거늘, 바다가 어찌 아름답지 않을 수가 있겠어요?",
      uz: "Sahro ham oʻziga yarasha chiroyli bo‘lsa, dengiz chiroyli bo‘lmasligi mumkinmi?",
      ru: "Даже пустыня по-своему прекрасна — как же море может быть некрасивым?",
      en: "Even the desert is beautiful in its own way—how could the sea not be beautiful?" },
    { ko: "그는 항상 생각하는 사람거늘, 그에게 부탁을 못 하겠어요?",
      uz: "U hamisha oʻylab ish qiladi-ku, undan nimanidir so‘ray olmaymizmi?",
      ru: "Он всегда всё обдумывает — неужели мы не можем его попросить?",
      en: "He always thinks things through—can’t we ask him a favor?" },
    // +3
    { ko: "하늘도 이렇게 맑거늘 어찌 기분이 나쁘겠어요?",
      uz: "Osmon ham bunchalik musaffo bo‘lsa, kayfiyat yomon bo‘lishi mumkinmi?",
      ru: "Небо такое ясное — как может быть плохое настроение?",
      en: "The sky is so clear—how could one be in a bad mood?" },
    { ko: "부모도 밤낮없이 애쓰거늘 자식이 어찌 가만히 있겠어요?",
      uz: "Ota-ona tunu kun mehnat qilsa, farzand qanday tinch o‘tirsin?",
      ru: "Родители трудятся днём и ночью — разве дети будут сидеть сложа руки?",
      en: "Parents work day and night—how could the child just sit idle?" },
    { ko: "청춘이 한 번뿐이거늘 시간을 헛되이 보내겠습니까?",
      uz: "Yoshlik bir marta berilsa, vaqtni behuda sarflarmikan kishi?",
      ru: "Молодость даётся один раз — разве можно тратить время впустую?",
      en: "You’re young only once—would you really waste your time?" }
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
    { ko: "일을 잘 할 수 있겠거니 했는데 결국 아무것도 못 했습니다.",
      uz: "Yaxshi eplayman deb o‘ylagandim, oxir-oqibat hech narsa qila olmadim.",
      ru: "Думал(а), что справлюсь, но в итоге ничего не вышло.",
      en: "I thought I could handle it well, but ended up doing nothing." },
    { ko: "이런 상황에서 내 도움이 필요 없거니 했습니다.",
      uz: "Bu holatda mening yordami kerak bo‘lmasa kerak deb o‘yladim.",
      ru: "Подумал(а), что моя помощь в такой ситуации не нужна.",
      en: "I assumed my help wouldn’t be needed in this situation." },
    { ko: "춥겠거니 하고 두꺼운 코트를 입었어요.",
      uz: "Sovuq bo‘lsa kerak deb qalin palto kiyib oldim.",
      ru: "Подумал(а), что будет холодно, и надел(а) тёплое пальто.",
      en: "Thinking it would be cold, I wore a thick coat." },
    // +3
    { ko: "늦겠거니 하고 먼저 출발했어요.",
      uz: "Kech qolarman deb oldinroq yo‘lga chiqdim.",
      ru: "Подумал(а), что опоздаю, и выехал(а) заранее.",
      en: "Assuming I might be late, I left early." },
    { ko: "괜찮겠거니 했다가 문제가 생겼다.",
      uz: "Yaxshi bo‘lar deb o‘ylabman, lekin muammo chiqdi.",
      ru: "Думал(а), что всё будет нормально, но возникла проблема.",
      en: "I thought it would be fine, but a problem occurred." },
    { ko: "바쁘겠거니 하고 연락을 안 했어요.",
      uz: "Band bo‘lsa kerak deb, qo‘ng‘iroq qilmadim.",
      ru: "Подумал(а), что он(а) занят(а), и не стал(а) связываться.",
      en: "Thinking they’d be busy, I didn’t contact them." }
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
    "1-g‘arb (ergash gap) shartni bildiradi; 2-g‘arb (bosh gap) odatda imperativ/propozitiv. Odatda o‘tmish bilan kelmaydi.",
  examples: [
    { ko: "부탁이 있거든 말씀해 주세요.", uz: "Iltimosingiz bo‘lsa, ayting.", ru: "Если будет просьба, скажите, пожалуйста.", en: "If you have a request, please let me know." },
    { ko: "한국에 오거든 꼭 연락하세요.", uz: "Koreyaga kelsangiz, albatta bog‘laning.", ru: "Если приедете в Корею, обязательно свяжитесь.", en: "If you come to Korea, please contact me." },
    { ko: "시간이 없거든 내일 하세요.", uz: "Vaqtingiz bo‘lmasa, ertaga qiling.", ru: "Если нет времени, сделайте завтра.", en: "If you don’t have time, do it tomorrow." },
    // +3
    { ko: "모르는 게 있거든 바로 물어보세요.", uz: "Noma’lum joy bo‘lsa, darhol so‘rang.", ru: "Если что-то непонятно, сразу спросите.", en: "If anything is unclear, ask right away." },
    { ko: "배고프거든 여기에서 드세요.", uz: "Och bo‘lsangiz, bu yerda yeb oling.", ru: "Если проголодаетесь, поешьте здесь.", en: "If you’re hungry, eat here." },
    { ko: "시간 되거든 같이 갑시다.", uz: "Vaqtingiz bo‘lsa, birga boraylik.", ru: "Если будет время, пойдём вместе.", en: "If you have time, let’s go together." }
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
    "Gap oxirida yumshoq ‘tushuntirish/asoslash’ yoki yangi ma’lumot berish: ‘axir ...-ku’.",
  forms: ["동사/형용사 + 거든요", "명사 + (이)거든요"],
  usage:
    "Ko‘proq faktni tushuntirish: ‘axir hozir bandman-ku’. Suhbatdoshi bilmagan ma’lumotni muloyimcha qo‘shadi.",
  examples: [
    { ko: "지금 바쁘거든요.", uz: "Hozir bandman-ku (aslida bandman).", ru: "Сейчас я занят(а), знаете.", en: "I’m busy right now, you see." },
    { ko: "이 책 제 거거든요.", uz: "Bu kitob aslida meniki-ku.", ru: "Эта книга вообще-то моя.", en: "This book is actually mine." },
    { ko: "내일 시험이거든요, 그래서 일찍 가야 해요.", uz: "Ertaga imtihonim bor-ku, shuning uchun erta ketishim kerak.", ru: "Завтра у меня экзамен, поэтому мне нужно уйти пораньше.", en: "I have an exam tomorrow, so I need to leave early." },
    // +3
    { ko: "오늘은 현금이 없거든요.", uz: "Bugun naqt pulim yo‘q-ku.", ru: "У меня сегодня нет наличных, знаете.", en: "I don’t have cash today, you know." },
    { ko: "그분은 한국분이 아니거든요.", uz: "U kishi koreys emas-ku.", ru: "Он/она вообще-то не кореец/кореянка.", en: "He/She isn’t Korean, actually." },
    { ko: "지금 나가야 하거든요.", uz: "Hozir chiqishim kerak-ku.", ru: "Мне сейчас нужно выходить.", en: "I have to head out now." }
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
    "Ikki (yoki ko‘proq) variantdan qat’i nazar bir xil natija: “…-mi …-mi (baribir)”.",
  forms: ["동사/형용사 어간 + 건 … 건", "명사 + (이)건 … (이)건"],
  usage:
    "Muqobil holatlar yonma-yon keladi: odat, qat’iy niyat yoki umumlashtirish.",
  examples: [
    { ko: "비가 오건 눈이 오건 갈 거예요.", uz: "Yomg‘ir bo‘ladimi, qor bo‘ladimi — baribir boraman.", ru: "Пойдёт дождь или снег — всё равно пойду.", en: "Whether it rains or snows, I’ll go anyway." },
    { ko: "주말이건 평일이건 항상 연습해요.", uz: "Dam oladimi, ish kunimi — doim mashq qilaman.", ru: "Будни это или выходные — всегда тренируюсь.", en: "Weekday or weekend, I always practice." },
    { ko: "맛있건 맛없건 잘 먹어요.", uz: "Mazalimi, bemazami — yaxshi yeyman.", ru: "Вкусно это или нет — ем хорошо.", en: "Tasty or not, I eat well." },
    // +3
    { ko: "크건 작건 상관없어요.", uz: "Katta-kichikligi muhim emas.", ru: "Большой или маленький — неважно.", en: "Big or small, it doesn’t matter." },
    { ko: "먹건 마시건 조심하세요.", uz: "Yeysizmi ichasizmi — ehtiyot bo‘ling.", ru: "Едите вы или пьёте — будьте осторожны.", en: "Whether eating or drinking, be careful." },
    { ko: "가건 말건 저는 기다릴게요.", uz: "Borasizmi yo‘qmi — men kutaman.", ru: "Пойдёте вы или нет — я подожду.", en: "Whether you go or not, I’ll wait." }
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
    "Qarshi ma’no: ‘…-sada/… bo‘lsa-da’. Ko‘proq yozma uslubda ishlatiladi.",
  forms: ["동사/형용사 + 건만(은)"],
  usage:
    "Kutilgan natijaga zid holatni bildiradi. Og‘zaki nutqda -지만 ko‘proq.",
  examples: [
    { ko: "노력했건만 성과가 없었다.", uz: "Harakat qildim-u, ammo natija bo‘lmadi.", ru: "Старался(лась), но результата не было.", en: "I tried, but there were no results." },
    { ko: "도와주었건만 고맙다는 말이 없네요.", uz: "Yordam berdim-u, lekin ‘rahmat’ degan gap ham yo‘q.", ru: "Помог(ла), но даже «спасибо» не сказали.", en: "I helped, but they didn’t even say thanks." },
    { ko: "비가 그쳤건만 길은 미끄럽다.", uz: "Yomg‘ir to‘xtagan bo‘lsa-da, yo‘l sirpanchiq.", ru: "Дождь прошёл, однако дорога скользкая.", en: "The rain stopped, yet the road is slippery." },
    // +3
    { ko: "기다렸건만 그는 오지 않았다.", uz: "Kutdim-u, u kelmadi.", ru: "Ждал(а), но он не пришёл.", en: "I waited, but he didn’t come." },
    { ko: "약속했건만 지키지 않았다.", uz: "Vada berdi-yu, ammo bajarmadi.", ru: "Обещал(а), но не сдержал(а) слово.", en: "They promised, but didn’t keep it." },
    { ko: "열심히 공부했건만 성적이 오르지 않았다.", uz: "Juda o‘qidi-yu, baholari oshmadi.", ru: "Усердно учился(лась), но оценки не повысились.", en: "Studied hard, but the grades didn’t improve." }
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
    "Harakatning maqsadi yoki natijasini kuchli urg‘u bilan bildiradi: “shunday bo‘lishi uchun / qila olmasligi uchun”. -도록 ga yaqin, lekin urg‘u kuchliroq.",
  forms: ["동사/형용사 + 게끔"],
  usage:
    "~하게끔 만들다/준비하다/하다 naqshlarida ko‘p uchraydi; salbiy: ~지 못하게끔.",
  examples: [
    { ko: "누가 와서 보더라도 만족하게끔 신경 써서 준비해 둡시다.",
      uz: "Kim kelib ko‘rsa ham qoniqsin, deb e’tibor bilan tayyorlab qo‘yaylik.",
      ru: "Подготовим так, чтобы кто бы ни пришёл — остался доволен.",
      en: "Let’s prepare carefully so that anyone who comes will be satisfied." },
    { ko: "문을 잠가서 도둑이 들어오지 못하게끔 하세요.",
      uz: "Eshikni qulflab, o‘g‘ri kira olmasligi uchun qiling.",
      ru: "Заприте дверь, чтобы вор не мог войти.",
      en: "Lock the door so that thieves can’t get in." },
    { ko: "아이들이 편하게끔 자리를 다시 배치했어요.",
      uz: "Bolalar qulay bo‘lishi uchun joylashuvni qayta o‘zgartirdim.",
      ru: "Переорганизовал(а) места так, чтобы детям было удобно.",
      en: "I rearranged the seats to make it comfortable for the kids." },
    // +3
    { ko: "학생들이 이해하게끔 쉬운 예로 설명했어요.",
      uz: "Talabalar tushunsin deb, oson misollar bilan tushuntirdim.",
      ru: "Объяснил(а) на простых примерах, чтобы студенты поняли.",
      en: "I explained with simple examples so that students could understand." },
    { ko: "일이 빨리 끝나게끔 역할을 나눴어요.",
      uz: "Ish tez tugashi uchun vazifalarni bo‘lib oldik.",
      ru: "Распределили роли, чтобы быстрее закончить работу.",
      en: "We divided tasks so that the work would finish quickly." },
    { ko: "소리가 새지 않게끔 창문을 꼭 닫으세요.",
      uz: "Ovoz chiqib ketmasligi uchun derazani mahkam yoping.",
      ru: "Плотно закройте окно, чтобы звук не просачивался.",
      en: "Close the window tightly so that sound doesn’t leak." }
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
},{
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
      uz: "Hozir chiqish aslo mumkin emas.",
      ru: "Сейчас выходить ни в коем случае нельзя.",
      en: "You must not go out now under any circumstances." },
    { ko: "저는 그런 일은 절대로 하지 않겠습니다.",
      uz: "Men bunday ishni aslo qilmayman.",
      ru: "Я такого делать ни за что не буду.",
      en: "I will absolutely never do such a thing." },
    { ko: "이것은 결코 농담이 아닙니다.",
      uz: "Bu aslo hazil emas.",
      ru: "Это вовсе не шутка.",
      en: "This is by no means a joke." },
    // +3
    { ko: "여기서 담배를 피우면 절대로 안 돼요.",
      uz: "Bu yerda chekish aslo mumkin emas.",
      ru: "Здесь категорически нельзя курить.",
      en: "You absolutely must not smoke here." },
    { ko: "그 약속을 결코 잊지 않겠습니다.",
      uz: "Bu va’dani aslo unutmayman.",
      ru: "Я никогда этого обещания не забуду.",
      en: "I will never forget that promise." },
    { ko: "절대로 늦지 마세요.",
      uz: "Aslo kechikmang.",
      ru: "Ни в коем случае не опаздывайте.",
      en: "Please do not be late, no matter what." }
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
    "‘경’ odatda aniq soat/vaqt bilan; ‘여’ noaniq, biroz ortiq miqdor: 십여 명≈“o‘n nechta kishi”. ‘여’ 10 dan kichik sonlar bilan ishlatilmaydi.",
  examples: [
    { ko: "내일 오후 세 시경에 다시 올게요.",
      uz: "Ertaga tushdan keyin soat uchlar atrofida yana kelaman.",
      ru: "Завтра приду примерно в три часа дня.",
      en: "I’ll come again around 3 p.m. tomorrow." },
    { ko: "회의는 12시경에 끝날 것 같아요.",
      uz: "Majlis soat 12 lar atrofida tugasa kerak.",
      ru: "Совещание, похоже, закончится около полудня.",
      en: "The meeting will likely end around 12 o’clock." },
    { ko: "행사에 이십여 명이 모였습니다.",
      uz: "Tadbirga yigirmatalarcha kishi yig‘ildi (20 dan biroz ortiq).",
      ru: "На мероприятии собрались около двадцати с лишним человек.",
      en: "Around twenty-some people gathered for the event." },
    // +3
    { ko: "토요일 밤 아홉 시경에 시작해요.",
      uz: "Shanba kuni kech soat to‘qqizlar atrofida boshlaymiz.",
      ru: "Начинаем в субботу примерно в девять вечера.",
      en: "We’ll start on Saturday around 9 p.m." },
    { ko: "십여 분 정도 기다렸어요.",
      uz: "Taxminan o‘n necha daqiqa kutdim.",
      ru: "Ждал(а) примерно десяток минут.",
      en: "I waited for about ten-some minutes." },
    { ko: "책이 삼십여 권 있습니다.",
      uz: "O‘ttiztatalarcha kitob bor.",
      ru: "Есть около тридцати с лишним книг.",
      en: "There are thirty-some books." }
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
    "Ko‘pincha harakatning yakuni va undan keyingi **natija**ga urg‘u beradi: 비가 오고 나면 선선해져요.",
  examples: [
    { ko: "이 책을 읽고 나면 생각이 좀 달라질 거예요.",
      uz: "Bu kitobni o‘qib tugatgandan so‘ng fikringiz biroz o‘zgaradi.",
      ru: "Когда дочитаете эту книгу, ваше мнение немного изменится.",
      en: "After you finish this book, your thinking will change a bit." },
    { ko: "비가 오고 나면 날씨가 시원해지겠지요.",
      uz: "Yomg‘ir yog‘ib tugagandan so‘ng havo salqinlashadi.",
      ru: "После дождя, скорее всего, станет прохладнее.",
      en: "Once it rains, it will probably get cooler." },
    { ko: "수업이 끝나고 나면 점심을 먹어요.",
      uz: "Dars tugagach, tushlik qilaman.",
      ru: "После окончания занятия я обедаю.",
      en: "After class ends, I have lunch." },
    // +3
    { ko: "저녁을 먹고 나면 산책해요.",
      uz: "Kechki ovqatdan keyin sayr qilaman.",
      ru: "После ужина гуляю.",
      en: "I take a walk after dinner." },
    { ko: "서류를 확인하고 나면 서명해 주세요.",
      uz: "Hujjatlarni tekshirib bo‘lgach, imzo qo‘ying.",
      ru: "Проверьте документы и затем подпишите.",
      en: "After checking the documents, please sign." },
    { ko: "비밀번호를 입력하고 나면 다음 단계로 넘어가요.",
      uz: "Parolni kiritib bo‘lgach, keyingi bosqichga o‘tasiz.",
      ru: "После ввода пароля переходите к следующему шагу.",
      en: "Once you enter the password, you move to the next step." }
  ],
  quiz: [
    {
      id: "gnq1",
      question: "회의가 끝__ 나면 이야기합시다.",
      options: ["고", "고 나고", "고 나면"],
      correctIndex: 2,
      explain: "Shart ohangi: ‘끝나고 나면 …’ — tugagach keyin gaplashaylik."
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
    "Ketma-ketlik: ‘… qilib bo‘lib, keyin …’. Imperativ/propozitiv bilan ham: 숙제하고 나서 놀자.",
  examples: [
    { ko: "성희는 돈을 챙겨 넣고 나서 옷을 갈아입었다.",
      uz: "Songhee pulni joylashtirgandan keyin kiyimini almashtirdi.",
      ru: "Сонхи убрала деньги, а затем переоделась.",
      en: "Seonghee put the money away and then got changed." },
    { ko: "중학교 일학년을 마치고 나서 방학을 시골에서 보냈다.",
      uz: "O‘rta maktab birinchi bosqichini tugatgach, ta’tilni qishloqda o‘tkazdim.",
      ru: "Закончив первый год средней школы, каникулы провёл(а) в деревне.",
      en: "After finishing the first year of middle school, I spent the vacation in the countryside." },
    { ko: "숙제하고 나서 게임하세요.",
      uz: "Uy vazifangizni qilib bo‘lgach, o‘yin o‘ynang.",
      ru: "Сначала сделайте домашнее задание, а потом играйте.",
      en: "Finish your homework and then play games." },
    // +3
    { ko: "씻고 나서 자요.",
      uz: "Yuvinib bo‘lgach, uxlayman.",
      ru: "После того как помоюсь, лягу спать.",
      en: "I go to bed after washing up." },
    { ko: "연습하고 나서 공연해요.",
      uz: "Mashq qilib bo‘lgach, konsert qilamiz.",
      ru: "После репетиции выступаем.",
      en: "We perform after we practice." },
    { ko: "문을 잠그고 나서 출근했어요.",
      uz: "Eshikni qulflab, keyin ishga ketdim.",
      ru: "Запер(ла) дверь и поехал(а) на работу.",
      en: "I locked the door and then went to work." }
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
    "Ko‘pincha ikkinchi gapda ‘알다/깨닫다/되다/가능하다’ kabi fe’llar: ‘… qilib bo‘lgachgina tushundim/bo‘ldi’.",
  examples: [
    { ko: "모든 일을 끝내고 나서야 쉴 수 있었어요.",
      uz: "Hamma ishni tugatib bo‘lgachgina dam ola oldim.",
      ru: "Только закончив все дела, смог(ла) отдохнуть.",
      en: "Only after finishing all the work could I rest." },
    { ko: "설명을 듣고 나서야 이해했습니다.",
      uz: "Tushuntirishni eshitib bo‘lgachgina tushundim.",
      ru: "Лишь выслушав объяснение, понял(а).",
      en: "I understood only after listening to the explanation." },
    { ko: "문을 고치고 나서야 사용할 수 있었어요.",
      uz: "Eshikni tuzatib bo‘lgachgina foydalanish mumkin bo‘ldi.",
      ru: "Только починив дверь, удалось пользоваться.",
      en: "We could use it only after fixing the door." },
    // +3
    { ko: "여러 번 풀어 보고 나서야 그 문제를 이해했다.",
      uz: "Bir necha bor yechib ko‘rgachgina bu masalani tushundim.",
      ru: "Лишь решив задачу несколько раз, понял(а) её.",
      en: "Only after solving it several times did I understand the problem." },
    { ko: "승인을 받고 나서야 시작할 수 있다.",
      uz: "Tasdiq olgachgina boshlash mumkin.",
      ru: "Начать можно лишь после получения одобрения.",
      en: "You can start only after getting approval." },
    { ko: "진찰을 받고 나서야 약을 먹었어요.",
      uz: "Ko‘rikdan o‘tgachgina dori ichdim.",
      ru: "Лишь после осмотра врача принял(а) лекарство.",
      en: "I took the medicine only after seeing the doctor." }
  ],
  quiz: [
    { id: "gnsy1",
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
    "Biror ish sodir bo‘lgach, shundan keyin payqagan, bilib olgan natijani bildiradi.",
  forms: ["동사 + 고 보니", "형용사 + 고 보니", "명사 + (이)고 보니"],
  usage:
    "Ko‘pincha o‘tgan zamonda va kutilmagan kashfiyot/anglash bilan: 가 보니, 만나 보니.",
  examples: [
    { ko: "알고 보니 그는 고생을 많이 한 사람이더군요.",
      uz: "Yaxshiroq o‘rganib ko‘rsam, u ko‘p qiynalgan inson ekan.",
      ru: "Как выяснилось, он человек, много испытавший.",
      en: "As it turned out, he’d gone through a lot." },
    { ko: "사고를 당하고 보니 무엇부터 해야 할지 몰랐어요.",
      uz: "To‘satdan hodisa bo‘lib, nima qilishni bilmay qoldim.",
      ru: "После происшествия я не знал(а), с чего начать.",
      en: "After the accident, I didn’t know what to do first." },
    { ko: "지난날을 돌아보고 보니 모두 추억으로 남네요.",
      uz: "Orqaga qarab ko‘rsam, hammasi xotira bo‘lib qolibdi.",
      ru: "Оглянувшись назад, вижу: всё осталось воспоминаниями.",
      en: "Looking back, everything remains as memories." },
    // +3
    { ko: "읽고 보니 이해가 됐어요.",
      uz: "O‘qib chiqsam, tushundim.",
      ru: "Прочитал(а) — и понял(а).",
      en: "After reading it, I understood." },
    { ko: "가고 보니 문이 닫혔더라고요.",
      uz: "Borsam, eshik yopiq ekan.",
      ru: "Пришёл(ла) — а дверь закрыта.",
      en: "When I got there, the door was closed." },
    { ko: "해 보니 생각보다 쉽지 않았어요.",
      uz: "Qilib ko‘rsam, o‘ylagandan oson emas ekan.",
      ru: "Сделал(а) — оказалось не так уж просто.",
      en: "After trying, it wasn’t as easy as I thought." }
  ],
  quiz: [
    {
      id: "gobn1",
      question: "한국에 와 __ 보니 생각이 많이 달라졌어요.",
      options: ["고", "고서", "면"],
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
    "Vaqt va tartibni qat’iy ko‘rsatadi: avval A-ni **qilib**, keyin B. Ba’zan ‘faqat A bo‘lgach’ ohangi bor.",
  forms: ["동사 + 고서"],
  usage:
    "Buyruq/zaruratda ko‘p: 먼저 ~하고서 …. -고 나서 ga yaqin, lekin ‘tartib’ urg‘usi kuchli.",
  examples: [
    { ko: "과일을 깎아 놓고서 커피를 타기 시작했다.",
      uz: "Mevani archib qo‘ygandan keyin kofe damlashni boshladim.",
      ru: "Почистив фрукты, начал(а) заваривать кофе.",
      en: "After peeling the fruit, I started making coffee." },
    { ko: "콩나물을 삶을 때에는 소금을 넣고서 뚜껑을 닫아 놓아야 해요.",
      uz: "No‘xotni qaynatar ekansiz, tuz solib qopqog‘ini yopib qo‘yish kerak.",
      ru: "При варке проростков сначала добавьте соль, затем закройте крышку.",
      en: "When boiling bean sprouts, add salt first and then close the lid." },
    { ko: "음식을 먹어 보고서 뭐가 제일 맛있는지 말할게요.",
      uz: "Ovqatlarni tatib ko‘rgach, qaysi biri eng mazzali ekanini aytaman.",
      ru: "Попробую блюда и потом скажу, что самое вкусное.",
      en: "I’ll taste the dishes first and then tell you which is best." },
    // +3
    { ko: "신청서를 쓰고서 제출하세요.",
      uz: "Arizani yozib, keyin topshiring.",
      ru: "Сначала заполните заявку, затем сдайте.",
      en: "Fill out the application and then submit it." },
    { ko: "예약을 확인하고서 출발합시다.",
      uz: "Bronni tasdiqlab olaylik, keyin yo‘lga chiqaylik.",
      ru: "Сначала подтвердим бронирование, затем выедем.",
      en: "Let’s confirm the reservation and then depart." },
    { ko: "요리를 다 하고서 먹어요.",
      uz: "Taomni tayyorlab bo‘lgach, yeymiz.",
      ru: "Сначала приготовим еду, потом поедим.",
      en: "Let’s eat only after we finish cooking." }
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
    "Maqsad yo‘lida qiyinchilikka **qaramasdan**, ‘hatto shunday qilishga to‘g‘ri kelsa ham’ degan qat’iyatni bildiradi.",
  forms: ["동사 + 고서라도"],
  usage:
    "Ko‘pincha maqsad/zarurat bilan: ~고서라도 꼭…, ~고서라도 해야겠다.",
  examples: [
    { ko: "희생을 치르고서라도 반드시 목표를 달성해야 합니다.",
      uz: "Qurbonliklar bilan bo‘lsa ham, maqsadga albatta erishish kerak.",
      ru: "Даже ценой жертв необходимо достичь цели.",
      en: "We must achieve the goal, even at the cost of sacrifices." },
    { ko: "부모님의 반대를 무릅쓰고서라도 그 사람과 결혼할 거예요?",
      uz: "Ota-onangning qarshiligiga qaramasdan u bilan turmush qurmoqchimisiz?",
      ru: "Даже вопреки возражениям родителей вы хотите жениться/выйти замуж?",
      en: "Will you marry that person even against your parents’ opposition?" },
    { ko: "밤을 새우고서라도 내일까지 끝내겠습니다.",
      uz: "Hatto tun bo‘yi uxlamay bo‘lsa ham, ertaga qadar tugataman.",
      ru: "Даже если придётся не спать всю ночь, закончу к завтрашнему дню.",
      en: "I’ll finish it by tomorrow, even if I have to stay up all night." },
    // +3
    { ko: "시간이 없으면 택시를 타고서라도 가겠습니다.",
      uz: "Vaqt bo‘lmasa, hatto taksida bo‘lsa ham boraman.",
      ru: "Если нет времени, поеду хоть на такси.",
      en: "If there’s no time, I’ll go even if it means taking a taxi." },
    { ko: "돈을 빌리고서라도 등록하겠다.",
      uz: "Pul qarz olib bo‘lsa ham ro‘yxatdan o‘taman.",
      ru: "Даже заняв деньги, я всё равно зарегистрируюсь.",
      en: "I’ll register even if I have to borrow money." },
    { ko: "도움을 청하고서라도 문제를 해결하겠다.",
      uz: "Yordam so‘rab bo‘lsa ham muammoni hal qilaman.",
      ru: "Даже попросив помощи, всё равно решу проблему.",
      en: "I’ll solve the problem, even if I have to ask for help." }
  ],
  quiz: [
    {
      id: "gosrd1",
      question: "시간이 없으면 밤을 새__라도 보고서를 내겠습니다.",
      options: ["고서", "고서라도", "라도"],
      correctIndex: 1,
      explain: "Imtiyoz/qat’iyat: ‘밤을 새**고서라도**’."
    }
  ]
},{
  id: "gunyo",
  title: "-군요 (hayrat/anglash undovi)",
  level: "O'rta 2",
  tags: ["Exclamative", "Realization", "Polite"],
  meaning:
    "Yangi ma’lumotni shu zahoti anglaganda yoki hayrat bildirganda: “-ekan-ku!”, “-ku!”. Hurmatli undov shakli.",
  forms: [
    "동사 + 는군요",
    "형용사 + 군요",
    "명사 + (이)군요",
    "과거: V/A-았/었군요",
    "추측: V/A-겠군요"
  ],
  usage:
    "Ko‘pincha ko‘z bilan ko‘rish/eshitishdan keyingi **kashf** ohangi. Oddiy (kam hurmat) parallel: -구나. **Savol yoki buyruqda ishlatilmaydi.**",
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
    { ko: "구태여 그렇게 할 필요가 없어요.", uz: "Bunday qilishning hojati yo‘q." },
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
}
]
