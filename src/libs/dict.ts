// libs/dict.ts
export type Lang = "uz" | "ko" | "ru" | "en";
export type POS = "noun" | "verb" | "adj" | "adv";

export type LocalizedWord = {
  text: string;
  script?: string;   // Korean/Kirill/Latin...
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
  romanization?: string | undefined;      // chaek, hakgyo...
  tags?: string[];            // TOPIK A1, Common...
  words: Record<Lang, LocalizedWord>;
  samples: Sample[];
};

export const VOCABS: Vocab[] = [
   {
    id: "sosin",
    pos: "noun",
    romanization: "sosin",
    tags: ["TOPIK", "1차", "Common"],
    words: {
      uz: { text: "ishonch, kuchli aqida", script: "Latin" },
      ko: { text: "소신", script: "Korean" },
      ru: { text: "убеждение", script: "Кириллица" },
      en: { text: "conviction", script: "Latin" }
    },
    samples: [
      {
        ko: "그는 끝까지 소신을 지켰다.",
        uz: "U oxirigacha o‘z e’tiqodida qat’iy turdi.",
        ru: "Он до конца придерживался своих убеждений.",
        en: "He kept his convictions to the end."
      }
    ]
  },
  {
    id: "tujeong",
    pos: "noun",
    romanization: "tujeong",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "shikoyat, javrash", script: "Latin" },
      ko: { text: "투정", script: "Korean" },
      ru: { text: "каприз, хныканье", script: "Кириллица" },
      en: { text: "whining, complaint", script: "Latin" }
    },
    samples: [
      {
        ko: "아이가 계속 투정을 부렸다.",
        uz: "Bola tinmay javradi.",
        ru: "Ребёнок всё время капризничал.",
        en: "The child kept whining."
      }
    ]
  },
  {
    id: "nonjaeng",
    pos: "noun",
    romanization: "nonjaeng",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "tortishuv, bahs", script: "Latin" },
      ko: { text: "논쟁", script: "Korean" },
      ru: { text: "спор, дискуссия", script: "Кириллица" },
      en: { text: "debate, argument", script: "Latin" }
    },
    samples: [
      {
        ko: "그 문제를 두고 논쟁이 있었다.",
        uz: "U masala ustida bahs bo‘ldi.",
        ru: "Вокруг этого вопроса разгорелся спор.",
        en: "There was a debate over the issue."
      }
    ]
  },
  {
    id: "gyeonghyang",
    pos: "noun",
    romanization: "gyeonghyang",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "moyillik, tendensiya", script: "Latin" },
      ko: { text: "경향", script: "Korean" },
      ru: { text: "тенденция, склонность", script: "Кириллица" },
      en: { text: "tendency, trend", script: "Latin" }
    },
    samples: [
      {
        ko: "요즘 재택근무 경향이 늘고 있다.",
        uz: "Hozir uyda ishlashga moyillik ortib boryapti.",
        ru: "В последнее время растёт тенденция к удалённой работе.",
        en: "Recently, the trend of remote work is increasing."
      }
    ]
  },
  {
    id: "pongnyeok",
    pos: "noun",
    romanization: "pongnyeok",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "zo'ravonlik", script: "Latin" },
      ko: { text: "폭력", script: "Korean" },
      ru: { text: "насилие", script: "Кириллица" },
      en: { text: "violence", script: "Latin" }
    },
    samples: [
      {
        ko: "폭력은 어떤 이유로도 정당화될 수 없다.",
        uz: "Zo‘ravonlik hech qanday sabab bilan oqlanmaydi.",
        ru: "Насилие не может быть оправдано.",
        en: "Violence can never be justified."
      }
    ]
  },
  {
    id: "mitbatang",
    pos: "noun",
    romanization: "mitbatang",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "asos, fundament", script: "Latin" },
      ko: { text: "밑바탕", script: "Korean" },
      ru: { text: "основа, фундамент", script: "Кириллица" },
      en: { text: "basis, foundation", script: "Latin" }
    },
    samples: [
      {
        ko: "성공의 밑바탕은 꾸준함이다.",
        uz: "Muvaffaqiyatning asosi — muntazamlik.",
        ru: "Основа успеха — последовательность.",
        en: "The foundation of success is consistency."
      }
    ]
  },
  {
    id: "seongbun",
    pos: "noun",
    romanization: "seongbun",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "tarkibiy qism", script: "Latin" },
      ko: { text: "성분", script: "Korean" },
      ru: { text: "компонент, ингредиент", script: "Кириллица" },
      en: { text: "component, ingredient", script: "Latin" }
    },
    samples: [
      {
        ko: "제품의 성분을 꼭 확인하세요.",
        uz: "Mahsulot tarkibini albatta tekshiring.",
        ru: "Обязательно проверьте состав продукта.",
        en: "Be sure to check the product’s ingredients."
      }
    ]
  },
  {
    id: "gojeong-gwan-nyeom",
    pos: "noun",
    romanization: "gojeong-gwan-nyeom",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "o‘zgarmas fikr, stereotip", script: "Latin" },
      ko: { text: "고정관념", script: "Korean" },
      ru: { text: "стереотип", script: "Кириллица" },
      en: { text: "stereotype", script: "Latin" }
    },
    samples: [
      {
        ko: "고정관념을 깨야 발전할 수 있다.",
        uz: "Stereotiplarni sindirsakgina taraqqiy etamiz.",
        ru: "Чтобы развиваться, нужно ломать стереотипы.",
        en: "We can progress only by breaking stereotypes."
      }
    ]
  },
  {
    id: "gise",
    pos: "noun",
    romanization: "gise",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "kuch, ruhiy ko‘tarinkilik", script: "Latin" },
      ko: { text: "기세", script: "Korean" },
      ru: { text: "напор, подъём духа", script: "Кириллица" },
      en: { text: "vigor, momentum", script: "Latin" }
    },
    samples: [
      {
        ko: "초반 기세가 매우 좋았다.",
        uz: "Boshlanishdagi ruhiy ko‘tarinkilik juda yaxshi edi.",
        ru: "В начале был отличный запал.",
        en: "We had great momentum at the start."
      }
    ]
  },
  {
    id: "jeollyak",
    pos: "noun",
    romanization: "jeollyak",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "strategiya", script: "Latin" },
      ko: { text: "전략", script: "Korean" },
      ru: { text: "стратегия", script: "Кириллица" },
      en: { text: "strategy", script: "Latin" }
    },
    samples: [
      {
        ko: "우리는 새로운 마케팅 전략이 필요하다.",
        uz: "Bizga yangi marketing strategiyasi kerak.",
        ru: "Нам нужна новая маркетинговая стратегия.",
        en: "We need a new marketing strategy."
      }
    ]
  },
  {
    id: "juche",
    pos: "noun",
    romanization: "juche",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "asosiy shaxs/agent, subyekt", script: "Latin" },
      ko: { text: "주체", script: "Korean" },
      ru: { text: "субъект, действующий субъект", script: "Кириллица" },
      en: { text: "subject, agent", script: "Latin" }
    },
    samples: [
      {
        ko: "변화의 주체는 우리 자신이다.",
        uz: "O‘zgarishlarning subyekti o‘zimizmiz.",
        ru: "Мы сами являемся субъектом перемен.",
        en: "We ourselves are the agents of change."
      }
    ]
  },
  {
    id: "tonggye",
    pos: "noun",
    romanization: "tonggye",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "statistika", script: "Latin" },
      ko: { text: "통계", script: "Korean" },
      ru: { text: "статистика", script: "Кириллица" },
      en: { text: "statistics", script: "Latin" }
    },
    samples: [
      {
        ko: "통계를 보면 추세가 보인다.",
        uz: "Statistikaga qaralsa, tendensiya ko‘rinadi.",
        ru: "По статистике видно тенденцию.",
        en: "The trend becomes clear in the statistics."
      }
    ]
  },
  {
    id: "hanbokpan",
    pos: "noun",
    romanization: "hanbokpan",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "o‘rtasi (markaz)", script: "Latin" },
      ko: { text: "한복판", script: "Korean" },
      ru: { text: "самая середина", script: "Кириллица" },
      en: { text: "the very middle", script: "Latin" }
    },
    samples: [
      {
        ko: "도시 한복판에 큰 공원이 있다.",
        uz: "Shahar o‘rtasida katta bog‘ bor.",
        ru: "В самом центре города есть большой парк.",
        en: "There is a large park in the very center of the city."
      }
    ]
  },
  {
    id: "geungeom-jeolyak",
    pos: "noun",
    romanization: "geungeom-jeolyak",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "mehnat qilib tejash, tejamkorlik", script: "Latin" },
      ko: { text: "근검절약", script: "Korean" },
      ru: { text: "бережливость, экономия", script: "Кириллица" },
      en: { text: "frugality, thrift", script: "Latin" }
    },
    samples: [
      {
        ko: "근검절약은 중요한 미덕이다.",
        uz: "Tejamkorlik muhim fazilatdir.",
        ru: "Бережливость — важная добродетель.",
        en: "Frugality is an important virtue."
      }
    ]
  },
  {
    id: "gongyeong",
    pos: "noun",
    romanization: "gongyeong",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "noqulay holat, og‘ir ahvol", script: "Latin" },
      ko: { text: "곤경", script: "Korean" },
      ru: { text: "затруднительное положение", script: "Кириллица" },
      en: { text: "predicament", script: "Latin" }
    },
    samples: [
      {
        ko: "그는 곤경에 처했다.",
        uz: "U og‘ir ahvolga tushdi.",
        ru: "Он оказался в затруднительном положении.",
        en: "He fell into a predicament."
      }
    ]
  },
  {
    id: "machal",
    pos: "noun",
    romanization: "machal",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "kelishmovchilik, to‘qnashuv; ishqalanish", script: "Latin" },
      ko: { text: "마찰", script: "Korean" },
      ru: { text: "конфликт; трение", script: "Кириллица" },
      en: { text: "friction, conflict", script: "Latin" }
    },
    samples: [
      {
        ko: "두 부서 사이에 마찰이 생겼다.",
        uz: "Ikki bo‘lim o‘rtasida kelishmovchilik yuzaga keldi.",
        ru: "Между двумя отделами возник конфликт.",
        en: "Friction arose between the two departments."
      }
    ]
  },
  {
    id: "bangchim",
    pos: "noun",
    romanization: "bangchim",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "tutgan siyosat, choralar; yo‘l-yo‘riq", script: "Latin" },
      ko: { text: "방침", script: "Korean" },
      ru: { text: "курс, политика; директива", script: "Кириллица" },
      en: { text: "policy, guideline", script: "Latin" }
    },
    samples: [
      {
        ko: "정부는 새로운 방침을 발표했다.",
        uz: "Hukumat yangi siyosatni e’lon qildi.",
        ru: "Правительство объявило новый курс.",
        en: "The government announced a new policy."
      }
    ]
  },
  {
    id: "pyegimul",
    pos: "noun",
    romanization: "pyegimul",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "axlat, chiqindi", script: "Latin" },
      ko: { text: "폐기물", script: "Korean" },
      ru: { text: "отходы", script: "Кириллица" },
      en: { text: "waste, refuse", script: "Latin" }
    },
    samples: [
      {
        ko: "폐기물 처리가 큰 문제다.",
        uz: "Chiqindilarni qayta ishlash katta muammo.",
        ru: "Обращение с отходами — большая проблема.",
        en: "Waste management is a big issue."
      }
    ]
  },
  {
    id: "tallak",
    pos: "noun",
    romanization: "tallak",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "chetlatish, tushish", script: "Latin" },
      ko: { text: "탈락", script: "Korean" },
      ru: { text: "выбывание, исключение", script: "Кириллица" },
      en: { text: "elimination, drop-out", script: "Latin" }
    },
    samples: [
      {
        ko: "그는 최종 면접에서 탈락했다.",
        uz: "U yakuniy suhbatda chetlatildi.",
        ru: "Он выбыл на финальном интервью.",
        en: "He was eliminated at the final interview."
      }
    ]
  },
  {
    id: "gyeongjaeng",
    pos: "noun",
    romanization: "gyeongjaeng",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "raqobat", script: "Latin" },
      ko: { text: "경쟁", script: "Korean" },
      ru: { text: "конкуренция", script: "Кириллица" },
      en: { text: "competition", script: "Latin" }
    },
    samples: [
      {
        ko: "시장은 경쟁이 매우 치열하다.",
        uz: "Bozor raqobati juda keskin.",
        ru: "Конкуренция на рынке очень жёсткая.",
        en: "Competition in the market is fierce."
      }
    ]
  },
  {
    id: "jungang",
    pos: "noun",
    romanization: "jungang",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "markaz", script: "Latin" },
      ko: { text: "중앙", script: "Korean" },
      ru: { text: "центр", script: "Кириллица" },
      en: { text: "center", script: "Latin" }
    },
    samples: [
      {
        ko: "회의실은 건물 중앙에 있다.",
        uz: "Yig‘ilish xonasi binoning markazida.",
        ru: "Переговорная находится в центре здания.",
        en: "The meeting room is at the center of the building."
      }
    ]
  },
  {
    id: "hwahae",
    pos: "noun",
    romanization: "hwahae",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "tinchlik, murosa, yarash", script: "Latin" },
      ko: { text: "화해", script: "Korean" },
      ru: { text: "примирение", script: "Кириллица" },
      en: { text: "reconciliation", script: "Latin" }
    },
    samples: [
      {
        ko: "두 사람은 결국 화해했다.",
        uz: "Ikki kishi oxir-oqibat yarashdi.",
        ru: "В итоге они помирились.",
        en: "They finally reconciled."
      }
    ]
  },
  {
    id: "jarang",
    pos: "noun",
    romanization: "jarang",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "faxr, maqtanish", script: "Latin" },
      ko: { text: "자랑", script: "Korean" },
      ru: { text: "гордость; хвастовство", script: "Кириллица" },
      en: { text: "pride; boasting", script: "Latin" }
    },
    samples: [
      {
        ko: "그는 아들의 성과를 자랑했다.",
        uz: "U o‘g‘lining yutug‘i bilan faxrlanib gapirdi.",
        ru: "Он хвастался успехами сына.",
        en: "He boasted about his son's achievement."
      }
    ]
  },
  {
    id: "yuse",
    pos: "noun",
    romanization: "yuse",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "targ‘ibot, saylov kampaniyasi", script: "Latin" },
      ko: { text: "유세", script: "Korean" },
      ru: { text: "агитация, предвыборная кампания", script: "Кириллица" },
      en: { text: "campaigning, canvassing", script: "Latin" }
    },
    samples: [
      {
        ko: "후보가 거리에서 유세를 했다.",
        uz: "Nomzod ko‘chada targ‘ibot olib bordi.",
        ru: "Кандидат проводил агитацию на улице.",
        en: "The candidate canvassed on the street."
      }
    ]
  },
  {
    id: "munmyeong",
    pos: "noun",
    romanization: "munmyeong",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "sivilizatsiya", script: "Latin" },
      ko: { text: "문명", script: "Korean" },
      ru: { text: "цивилизация", script: "Кириллица" },
      en: { text: "civilization", script: "Latin" }
    },
    samples: [
      {
        ko: "문명의 발전은 기술과 함께했다.",
        uz: "Sivilizatsiya taraqqiyoti texnologiya bilan birga kechdi.",
        ru: "Развитие цивилизации шло вместе с технологиями.",
        en: "The development of civilization went along with technology."
      }
    ]
  },
  {
    id: "bangan",
    pos: "noun",
    romanization: "bangan",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "reja, sxema; chora-tadbir", script: "Latin" },
      ko: { text: "방안", script: "Korean" },
      ru: { text: "план, вариант решения", script: "Кириллица" },
      en: { text: "plan, measure", script: "Latin" }
    },
    samples: [
      {
        ko: "이 문제의 방안을 함께 찾아보자.",
        uz: "Bu muammoning yechimi uchun birga reja tuzaylik.",
        ru: "Давайте вместе найдём план решения этой проблемы.",
        en: "Let's find a plan to solve this problem together."
      }
    ]
  },
  {
    id: "sungan",
    pos: "noun",
    romanization: "sungan",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "mudd at, palla; on", script: "Latin" },
      ko: { text: "순간", script: "Korean" },
      ru: { text: "мгновение, момент", script: "Кириллица" },
      en: { text: "moment, instant", script: "Latin" }
    },
    samples: [
      {
        ko: "그 순간 모두가 조용해졌다.",
        uz: "O‘sha on hamma jim bo‘lib qoldi.",
        ru: "В тот момент все замолчали.",
        en: "At that moment, everyone fell silent."
      }
    ]
  },
  {
    id: "yeoyuga-itda",
    pos: "adv",
    romanization: "yeoyuga itda",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "yetarlicha bor (vaqt, pul va h.k.)", script: "Latin" },
      ko: { text: "여유가 있다", script: "Korean" },
      ru: { text: "иметься в запасе; есть в достатке", script: "Кириллица" },
      en: { text: "to have room/leeway (time, money)", script: "Latin" }
    },
    samples: [
      {
        ko: "오늘은 시간이 좀 여유가 있다.",
        uz: "Bugun biroz bo‘sh vaqtim bor.",
        ru: "Сегодня у меня есть немного свободного времени.",
        en: "I have some spare time today."
      }
    ]
  },
  {
    id: "gyeolson",
    pos: "noun",
    romanization: "gyeolson",
    tags: ["TOPIK", "1차"],
    words: {
      uz: { text: "yo‘qotish, yetishmaslik; defitsit", script: "Latin" },
      ko: { text: "결손", script: "Korean" },
      ru: { text: "дефицит, недостача", script: "Кириллица" },
      en: { text: "deficit, loss", script: "Latin" }
    },
    samples: [
      {
        ko: "예산 결손이 커지고 있다.",
        uz: "Byudjet defitsiti ortib bormoqda.",
        ru: "Дефицит бюджета растёт.",
        en: "The budget deficit is growing."
      }
    ]
  },
    {
    id: "donghyang",
    pos: "noun",
    romanization: "donghyang",
    tags: ["TOPIK", "2차", "Common"],
    words: {
      uz: { text: "moda, udum; yo‘nalish", script: "Latin" },
      ko: { text: "동향", script: "Korean" },
      ru: { text: "тенденция, мода", script: "Кириллица" },
      en: { text: "trend, tendency", script: "Latin" }
    },
    samples: [
      { ko: "시장 동향을 분석해요.", uz: "Bozor tendensiyasini tahlil qilamiz.", ru: "Мы анализируем рыночные тенденции.", en: "We analyze market trends." }
    ]
  },
  {
    id: "deolmi",
    pos: "noun",
    romanization: "deolmi",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "bo‘yinning orqa qismi", script: "Latin" },
      ko: { text: "덜미", script: "Korean" },
      ru: { text: "загривок, затылок", script: "Кириллица" },
      en: { text: "nape of the neck", script: "Latin" }
    },
    samples: [
      { ko: "덜미를 잡혔다.", uz: "Qo‘lga tushdi (ish fosh bo‘ldi).", ru: "Его поймали за шкирку (в переносном смысле).", en: "He got caught red-handed." }
    ]
  },
  {
    id: "gyeonbon",
    pos: "noun",
    romanization: "gyeonbon",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "namuna", script: "Latin" },
      ko: { text: "견본", script: "Korean" },
      ru: { text: "образец, пробник", script: "Кириллица" },
      en: { text: "sample", script: "Latin" }
    },
    samples: [
      { ko: "견본을 먼저 보내 주세요.", uz: "Avval namunani yuboring.", ru: "Пожалуйста, пришлите образец сначала.", en: "Please send a sample first." }
    ]
  },
  {
    id: "gyunhyeong",
    pos: "noun",
    romanization: "gyunhyeong",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "muvozanat, bir me’yordagi", script: "Latin" },
      ko: { text: "균형", script: "Korean" },
      ru: { text: "равновесие, баланс", script: "Кириллица" },
      en: { text: "balance, equilibrium", script: "Latin" }
    },
    samples: [
      { ko: "일과 삶의 균형이 중요하다.", uz: "Ish va hayot muvozanati muhim.", ru: "Баланс между работой и жизнью важен.", en: "Work–life balance is important." }
    ]
  },
  {
    id: "daesang",
    pos: "noun",
    romanization: "daesang",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "maqsad; obyekt, nishon", script: "Latin" },
      ko: { text: "대상", script: "Korean" },
      ru: { text: "объект; цель", script: "Кириллица" },
      en: { text: "object; target", script: "Latin" }
    },
    samples: [
      { ko: "설문 대상은 대학생이다.", uz: "So‘rovnoma maqsadi talabalardir.", ru: "Целевая группа опроса — студенты.", en: "The survey targets college students." }
    ]
  },
  {
    id: "jeonghwa",
    pos: "noun",
    romanization: "jeonghwa",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "tozalash, poklash", script: "Latin" },
      ko: { text: "정화", script: "Korean" },
      ru: { text: "очищение", script: "Кириллица" },
      en: { text: "purification", script: "Latin" }
    },
    samples: [
      { ko: "공기 정화 식물", uz: "Havoni tozalovchi o‘simliklar", ru: "Растения для очищения воздуха", en: "Air-purifying plants" }
    ]
  },
  {
    id: "wiju",
    pos: "noun",
    romanization: "wiju",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "asos; ...ga yo‘naltirilganlik", script: "Latin" },
      ko: { text: "위주", script: "Korean" },
      ru: { text: "ориентированность на ...", script: "Кириллица" },
      en: { text: "centered around; oriented", script: "Latin" }
    },
    samples: [
      { ko: "실무 위주의 교육", uz: "Amaliyotga yo‘naltirilgan ta’lim", ru: "Практико-ориентированное обучение", en: "Practice-oriented education" }
    ]
  },
  {
    id: "yuhok",
    pos: "noun",
    romanization: "yuhok",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "yo‘ldan ozdirish, vasvasa", script: "Latin" },
      ko: { text: "유혹", script: "Korean" },
      ru: { text: "искушение, соблазн", script: "Кириллица" },
      en: { text: "temptation, lure", script: "Latin" }
    },
    samples: [
      { ko: "달콤한 유혹을 이겼다.", uz: "Shirin vasvasaga bardosh berdi.", ru: "Он устоял перед сладким соблазном.", en: "He resisted the sweet temptation." }
    ]
  },
  {
    id: "osan",
    pos: "noun",
    romanization: "osan",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "xato hisoblash, noto‘g‘ri baho", script: "Latin" },
      ko: { text: "오산", script: "Korean" },
      ru: { text: "просчет, ошибка", script: "Кириллица" },
      en: { text: "miscalculation", script: "Latin" }
    },
    samples: [
      { ko: "그 판단은 오산이었다.", uz: "U qaror xato hisob bo‘ldi.", ru: "Тот вывод был просчётом.", en: "That judgment was a miscalculation." }
    ]
  },
  {
    id: "jegyeok",
    pos: "noun",
    romanization: "jegyeok",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "mos, munosib (darajada)", script: "Latin" },
      ko: { text: "제격", script: "Korean" },
      ru: { text: "подходящий, впору", script: "Кириллица" },
      en: { text: "befitting, suitable", script: "Latin" }
    },
    samples: [
      { ko: "여긴 휴식하기에 제격이다.", uz: "Bu yer dam olish uchun juda mos.", ru: "Это место как раз подходит для отдыха.", en: "This place is perfect for a rest." }
    ]
  },
  {
    id: "jineung",
    pos: "noun",
    romanization: "jineung",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "zukkolik, aql-idrok", script: "Latin" },
      ko: { text: "지능", script: "Korean" },
      ru: { text: "интеллект", script: "Кириллица" },
      en: { text: "intelligence", script: "Latin" }
    },
    samples: [
      { ko: "인공지능의 발전", uz: "Sun’iy intellektning rivoji", ru: "Развитие искусственного интеллекта", en: "The development of AI" }
    ]
  },
  {
    id: "chulpan",
    pos: "noun",
    romanization: "chulpan",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "nashr", script: "Latin" },
      ko: { text: "출판", script: "Korean" },
      ru: { text: "издательство; публикация", script: "Кириллица" },
      en: { text: "publication", script: "Latin" }
    },
    samples: [
      { ko: "출판 계약을 맺었다.", uz: "Nashr shartnomasini tuzdik.", ru: "Мы заключили издательский договор.", en: "We signed a publishing contract." }
    ]
  },
  {
    id: "jeonghwang",
    pos: "noun",
    romanization: "jeonghwang",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "holat, vaziyat", script: "Latin" },
      ko: { text: "정황", script: "Korean" },
      ru: { text: "обстоятельства", script: "Кириллица" },
      en: { text: "circumstances, context", script: "Latin" }
    },
    samples: [
      { ko: "정황 증거만으로는 부족하다.", uz: "Faqat holat dalillari yetarli emas.", ru: "Одних косвенных улик недостаточно.", en: "Circumstantial evidence alone is insufficient." }
    ]
  },
  {
    id: "jinro",
    pos: "noun",
    romanization: "jinro",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "kelajak yo‘li/yo‘nalishi", script: "Latin" },
      ko: { text: "진로", script: "Korean" },
      ru: { text: "карьерный путь", script: "Кириллица" },
      en: { text: "career path", script: "Latin" }
    },
    samples: [
      { ko: "진로 상담을 받았다.", uz: "Kasb tanlash bo‘yicha maslahat oldim.", ru: "Я прошёл карьерное консультирование.", en: "I had a career counseling session." }
    ]
  },
  {
    id: "jeongchaek",
    pos: "noun",
    romanization: "jeongchaek",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "siyosat", script: "Latin" },
      ko: { text: "정책", script: "Korean" },
      ru: { text: "политика (меры)", script: "Кириллица" },
      en: { text: "policy", script: "Latin" }
    },
    samples: [
      { ko: "정부 정책을 개편했다.", uz: "Hukumat siyosati qayta ko‘rib chiqildi.", ru: "Государственная политика была переработана.", en: "Government policy was reformed." }
    ]
  },
  {
    id: "magam",
    pos: "noun",
    romanization: "magam",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "oxirgi sana, muddat", script: "Latin" },
      ko: { text: "마감", script: "Korean" },
      ru: { text: "дедлайн, срок", script: "Кириллица" },
      en: { text: "deadline", script: "Latin" }
    },
    samples: [
      { ko: "제출 마감이 내일이다.", uz: "Topshirish muddati ertaga.", ru: "Срок сдачи — завтра.", en: "The submission deadline is tomorrow." }
    ]
  },
  {
    id: "jihye",
    pos: "noun",
    romanization: "jihye",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "donolik", script: "Latin" },
      ko: { text: "지혜", script: "Korean" },
      ru: { text: "мудрость", script: "Кириллица" },
      en: { text: "wisdom", script: "Latin" }
    },
    samples: [
      { ko: "경험은 지혜를 준다.", uz: "Tajriba donolik baxsh etadi.", ru: "Опыт дарит мудрость.", en: "Experience brings wisdom." }
    ]
  },
  {
    id: "wiyong",
    pos: "noun",
    romanization: "wiyong",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "qadr-qimmat; salobat", script: "Latin" },
      ko: { text: "위용", script: "Korean" },
      ru: { text: "величественный вид", script: "Кириллица" },
      en: { text: "dignified appearance", script: "Latin" }
    },
    samples: [
      { ko: "성의 위용이 장엄했다.", uz: "Qal’aning salobati hayratlanarli edi.", ru: "Величие крепости впечатляло.", en: "The castle’s stately look was impressive." }
    ]
  },
  {
    id: "simjeong",
    pos: "noun",
    romanization: "simjeong",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "ichki holat, tuyg‘u", script: "Latin" },
      ko: { text: "심정", script: "Korean" },
      ru: { text: "чувства, переживания", script: "Кириллица" },
      en: { text: "feelings, state of mind", script: "Latin" }
    },
    samples: [
      { ko: "그의 심정을 이해한다.", uz: "Uning tuyg‘ularini tushunaman.", ru: "Я понимаю его чувства.", en: "I understand how he feels." }
    ]
  },
  {
    id: "seonggwa",
    pos: "noun",
    romanization: "seonggwa",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "foyda, yaxshi natija; yutuq", script: "Latin" },
      ko: { text: "성과", script: "Korean" },
      ru: { text: "результат, достижение", script: "Кириллица" },
      en: { text: "outcome, achievement", script: "Latin" }
    },
    samples: [
      { ko: "프로젝트 성과가 컸다.", uz: "Loyiha natijasi katta bo‘ldi.", ru: "Итоги проекта были значительными.", en: "The project delivered great outcomes." }
    ]
  },
  {
    id: "susaek",
    pos: "noun",
    romanization: "susaek",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "qidirish, izlash", script: "Latin" },
      ko: { text: "수색", script: "Korean" },
      ru: { text: "поиск, прочёсывание", script: "Кириллица" },
      en: { text: "search", script: "Latin" }
    },
    samples: [
      { ko: "경찰이 주변을 수색했다.", uz: "Politsiya atrofni qidirib chiqdi.", ru: "Полиция прочесала окрестности.", en: "Police searched the area." }
    ]
  },
  {
    id: "nareum",
    pos: "noun",
    romanization: "nareum",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "o‘ziga xos tarzda; ...ga qarab", script: "Latin" },
      ko: { text: "나름", script: "Korean" },
      ru: { text: "в своём роде; в зависимости", script: "Кириллица" },
      en: { text: "in one’s own way; depending on", script: "Latin" }
    },
    samples: [
      { ko: "각자 나름 최선을 다했다.", uz: "Har kim o‘zicha bor kuchini berdi.", ru: "Каждый по-своему старался изо всех сил.", en: "Everyone did their best in their own way." }
    ]
  },
  {
    id: "hangmok",
    pos: "noun",
    romanization: "hangmok",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "modda, band (qonunda)", script: "Latin" },
      ko: { text: "항목", script: "Korean" },
      ru: { text: "пункт, статья", script: "Кириллица" },
      en: { text: "item, clause", script: "Latin" }
    },
    samples: [
      { ko: "설문 항목이 많다.", uz: "So‘rovnoma bandlari ko‘p.", ru: "В анкете много пунктов.", en: "There are many survey items." }
    ]
  },
  {
    id: "wonbon",
    pos: "noun",
    romanization: "wonbon",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "asli, originali", script: "Latin" },
      ko: { text: "원본", script: "Korean" },
      ru: { text: "оригинал", script: "Кириллица" },
      en: { text: "original", script: "Latin" }
    },
    samples: [
      { ko: "문서 원본을 보관하세요.", uz: "Hujjatning originalini saqlang.", ru: "Храните оригинал документа.", en: "Keep the original document." }
    ]
  },
  {
    id: "heunghaeng",
    pos: "noun",
    romanization: "heunghaeng",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "muvaffaqiyat (kassada), ommaboplik", script: "Latin" },
      ko: { text: "흥행", script: "Korean" },
      ru: { text: "кассовый успех", script: "Кириллица" },
      en: { text: "box-office success", script: "Latin" }
    },
    samples: [
      { ko: "그 영화가 큰 흥행을 했다.", uz: "Bu film katta muvaffaqiyat qozondi.", ru: "Фильм имел большой кассовый успех.", en: "The movie was a big hit." }
    ]
  },
  {
    id: "gochung",
    pos: "noun",
    romanization: "gochung",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "qiyinchilik, tashvish", script: "Latin" },
      ko: { text: "고충", script: "Korean" },
      ru: { text: "трудности, тяготы", script: "Кириллица" },
      en: { text: "hardship, difficulty", script: "Latin" }
    },
    samples: [
      { ko: "직원의 고충을 듣다.", uz: "Xodimning qiyinchiliklarini eshitmoq.", ru: "Выслушать трудности сотрудника.", en: "Hear out an employee’s hardships." }
    ]
  },
  {
    id: "hwansim",
    pos: "noun",
    romanization: "hwansim",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "iltifot, ko‘ngilini olish", script: "Latin" },
      ko: { text: "환심", script: "Korean" },
      ru: { text: "расположение, благосклонность", script: "Кириллица" },
      en: { text: "favor, goodwill", script: "Latin" }
    },
    samples: [
      { ko: "환심을 사려 하지 마라.", uz: "Iltifotini sotib olishga urinma.", ru: "Не пытайся заискивать.", en: "Don’t try to curry favor." }
    ]
  },
  {
    id: "cheoji",
    pos: "noun",
    romanization: "cheoji",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "holat, ahvol; mavqe", script: "Latin" },
      ko: { text: "처지", script: "Korean" },
      ru: { text: "положение, обстоятельства", script: "Кириллица" },
      en: { text: "situation, position", script: "Latin" }
    },
    samples: [
      { ko: "그의 처지를 생각해 봐.", uz: "Uning ahvolini bir o‘ylab ko‘r.", ru: "Подумай о его положении.", en: "Consider his situation." }
    ]
  },
  {
    id: "bunya",
    pos: "noun",
    romanization: "bunya",
    tags: ["TOPIK", "2차"],
    words: {
      uz: { text: "soha", script: "Latin" },
      ko: { text: "분야", script: "Korean" },
      ru: { text: "сфера, область", script: "Кириллица" },
      en: { text: "field, area", script: "Latin" }
    },
    samples: [
      { ko: "전문 분야가 무엇입니까?", uz: "Sizning mutaxassislik sohangiz nima?", ru: "Ваша профильная область какая?", en: "What is your specialty field?" }
    ]
  },
   {
    id: "sanghwang",
    pos: "noun",
    romanization: "sanghwang",
    tags: ["TOPIK", "3차", "Common"],
    words: {
      uz: { text: "xolat, vaziyat", script: "Latin" },
      ko: { text: "상황", script: "Korean" },
      ru: { text: "ситуация", script: "Кириллица" },
      en: { text: "situation", script: "Latin" }
    },
    samples: [
      { ko: "현재 상황을 설명해 주세요.", uz: "Joriy vaziyatni tushuntirib bering.", ru: "Объясните текущую ситуацию, пожалуйста.", en: "Please explain the current situation." }
    ]
  },
  {
    id: "dwitjeon",
    pos: "noun",
    romanization: "dwitjeon",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "kechiktirish, orqaga surish", script: "Latin" },
      ko: { text: "뒷전", script: "Korean" },
      ru: { text: "на задний план", script: "Кириллица" },
      en: { text: "back burner, put off", script: "Latin" }
    },
    samples: [
      { ko: "그 일은 뒷전으로 밀렸다.", uz: "U ish keyinga surildi.", ru: "То дело отодвинули на потом.", en: "That task was pushed to the back burner." }
    ]
  },
  {
    id: "hwakbo",
    pos: "noun",
    romanization: "hwakbo",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "ta’minlash, kafolatlash", script: "Latin" },
      ko: { text: "확보", script: "Korean" },
      ru: { text: "обеспечение", script: "Кириллица" },
      en: { text: "securing, ensuring", script: "Latin" }
    },
    samples: [
      { ko: "예산 확보가 시급하다.", uz: "Byudjetni ta’minlash shoshilinch.", ru: "Срочно нужно обеспечить бюджет.", en: "Securing the budget is urgent." }
    ]
  },
  {
    id: "hyeopjo",
    pos: "noun",
    romanization: "hyeopjo",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "hamkorlik, ko‘maklashish", script: "Latin" },
      ko: { text: "협조", script: "Korean" },
      ru: { text: "сотрудничество", script: "Кириллица" },
      en: { text: "cooperation, assistance", script: "Latin" }
    },
    samples: [
      { ko: "프로젝트는 모두의 협조가 필요하다.", uz: "Loyihaga hammaning hamkorligi zarur.", ru: "Проекту нужно сотрудничество всех.", en: "The project needs everyone’s cooperation." }
    ]
  },
  {
    id: "gyeongnyeo-hada",
    pos: "verb",
    romanization: "gyeongnyeo hada",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "ruhlantirmoq, dalda bermoq", script: "Latin" },
      ko: { text: "격려하다", script: "Korean" },
      ru: { text: "воодушевлять", script: "Кириллица" },
      en: { text: "to encourage", script: "Latin" }
    },
    samples: [
      { ko: "선생님이 우리를 격려해 주셨다.", uz: "Ustozimiz bizni ruhlantirdi.", ru: "Учитель нас поддержал.Кириллица" , en: "The teacher encouraged us." }
    ]
  },
  {
    id: "bigyeol",
    pos: "noun",
    romanization: "bigyeol",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "sir-sinoat, nou-xau", script: "Latin" },
      ko: { text: "비결", script: "Korean" },
      ru: { text: "секрет, ноу-хау", script: "Кириллица" },
      en: { text: "secret, know-how", script: "Latin" }
    },
    samples: [
      { ko: "성공의 비결이 무엇입니까?", uz: "Muvaffaqiyat siri nimada?", ru: "В чём секрет успеха?", en: "What’s the secret of success?" }
    ]
  },
  {
    id: "gipum",
    pos: "noun",
    romanization: "gipum",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "olijanoblik, martaba", script: "Latin" },
      ko: { text: "기품", script: "Korean" },
      ru: { text: "благородство, достоинство", script: "Кириллица" },
      en: { text: "dignity, elegance", script: "Latin" }
    },
    samples: [
      { ko: "그녀는 말투에서 기품이 느껴진다.", uz: "Uning so‘zlashida olijanoblik seziladi.", ru: "В её речи чувствуется благородство.", en: "Her manner of speaking feels dignified." }
    ]
  },
  {
    id: "hwabeop",
    pos: "noun",
    romanization: "hwabeop",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "gapirish usuli", script: "Latin" },
      ko: { text: "화법", script: "Korean" },
      ru: { text: "манера речи, риторика", script: "Кириллица" },
      en: { text: "speech style, rhetoric", script: "Latin" }
    },
    samples: [
      { ko: "화법을 바꾸면 분위기도 달라진다.", uz: "Gapirish usulini o‘zgartsangiz, muhit ham o‘zgaradi.", ru: "Меняя манеру речи, меняешь и атмосферу.", en: "Changing rhetoric changes the mood." }
    ]
  },
  {
    id: "eomsal",
    pos: "noun",
    romanization: "eomsal",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "og‘riqni bo‘rttirish, vahima solish", script: "Latin" },
      ko: { text: "엄살", script: "Korean" },
      ru: { text: "преувеличивание боли", script: "Кириллица" },
      en: { text: "exaggerated complaint", script: "Latin" }
    },
    samples: [
      { ko: "그건 엄살이야.", uz: "Bu bo‘rttirish xolos.", ru: "Да это просто притворство.", en: "You’re exaggerating." }
    ]
  },
  {
    id: "jijang",
    pos: "noun",
    romanization: "jijang",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "xalaqit, g‘ov", script: "Latin" },
      ko: { text: "지장", script: "Korean" },
      ru: { text: "препятствие, помеха", script: "Кириллица" },
      en: { text: "hindrance, obstacle", script: "Latin" }
    },
    samples: [
      { ko: "업무에 지장이 없다.", uz: "Ishga xalaqit yo‘q.", ru: "Работе это не мешает.", en: "It doesn’t hinder the work." }
    ]
  },
  {
    id: "uido",
    pos: "noun",
    romanization: "uido",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "maqsad, reja; niyat", script: "Latin" },
      ko: { text: "의도", script: "Korean" },
      ru: { text: "намерение", script: "Кириллица" },
      en: { text: "intention", script: "Latin" }
    },
    samples: [
      { ko: "그의 말에는 의도가 있다.", uz: "Uning so‘zlarida bir niyat bor.", ru: "В его словах есть намерение.", en: "There’s an intention behind his words." }
    ]
  },
  {
    id: "chammoseup",
    pos: "noun",
    romanization: "cham moseup",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "asl ko‘rinish, haqiqat", script: "Latin" },
      ko: { text: "참모습", script: "Korean" },
      ru: { text: "истинный облик", script: "Кириллица" },
      en: { text: "true self, real appearance", script: "Latin" }
    },
    samples: [
      { ko: "드디어 참모습이 드러났다.", uz: "Nihoyat asl qiyofa ochildi.", ru: "Наконец проявился истинный облик.", en: "Finally, the true self was revealed." }
    ]
  },
  {
    id: "siltae",
    pos: "noun",
    romanization: "siltae",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "asl holat, real ahvol", script: "Latin" },
      ko: { text: "실태", script: "Korean" },
      ru: { text: "реальное положение дел", script: "Кириллица" },
      en: { text: "actual condition", script: "Latin" }
    },
    samples: [
      { ko: "현장의 실태를 조사했다.", uz: "Joyidagi asl holat o‘rganildi.", ru: "Мы изучили реальную ситуацию на месте.", en: "We surveyed the actual on-site condition." }
    ]
  },
  {
    id: "gwan-nyeom",
    pos: "noun",
    romanization: "gwan-nyeom",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "tasavvur, tushuncha", script: "Latin" },
      ko: { text: "관념", script: "Korean" },
      ru: { text: "понятие, идея", script: "Кириллица" },
      en: { text: "notion, concept", script: "Latin" }
    },
    samples: [
      { ko: "자유에 대한 관념", uz: "Erkinlik haqidagi tushuncha", ru: "Понятие о свободе", en: "A notion of freedom" }
    ]
  },
  {
    id: "geu-nareumdaero",
    pos: "adv",
    romanization: "geu nareumdaero",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "o‘ziga yarasha; o‘zicha", script: "Latin" },
      ko: { text: "그 나름대로", script: "Korean" },
      ru: { text: "по-своему", script: "Кириллица" },
      en: { text: "in one’s own way", script: "Latin" }
    },
    samples: [
      { ko: "각자 그 나름대로 노력했다.", uz: "Har kim o‘zicha harakat qildi.", ru: "Каждый старался по-своему.", en: "Everyone tried in their own way." }
    ]
  },
  {
    id: "poyong",
    pos: "noun",
    romanization: "poyong",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "bag‘rikenglik, olijanoblik", script: "Latin" },
      ko: { text: "포용", script: "Korean" },
      ru: { text: "великодушие, терпимость", script: "Кириллица" },
      en: { text: "tolerance, embrace", script: "Latin" }
    },
    samples: [
      { ko: "다름을 포용해야 한다.", uz: "Boshqachalikni bag‘rikenglik bilan qabul qilish kerak.", ru: "Нужно принимать иные с терпимостью.", en: "We should embrace differences." }
    ]
  },
  {
    id: "yeokjeon-sikida",
    pos: "verb",
    romanization: "yeokjeon sikida",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "vaziyatni ag‘darib yubormoq (teskari yo‘nalishga o‘zgartirmoq)", script: "Latin" },
      ko: { text: "역전(시키다)", script: "Korean" },
      ru: { text: "переломить ход (ситуацию)", script: "Кириллица" },
      en: { text: "to reverse the situation", script: "Latin" }
    },
    samples: [
      { ko: "후반에 경기를 역전시켰다.", uz: "Ikkinchi bo‘limda o‘yin vaziyati ag‘darildi.", ru: "Во втором тайме они переломили игру.", en: "They turned the game around in the second half." }
    ]
  },
  {
    id: "sinang",
    pos: "noun",
    romanization: "sinang",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "e’tiqod, ishonch", script: "Latin" },
      ko: { text: "신앙", script: "Korean" },
      ru: { text: "вера (религиозная)", script: "Кириллица" },
      en: { text: "faith, belief", script: "Latin" }
    },
    samples: [
      { ko: "신앙의 자유를 보장한다.", uz: "E’tiqod erkinligi kafolatlanadi.", ru: "Гарантируется свобода вероисповедания.", en: "Freedom of faith is guaranteed." }
    ]
  },
  {
    id: "jeohang",
    pos: "noun",
    romanization: "jeohang",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "qarshi turish, qarshilik", script: "Latin" },
      ko: { text: "저항", script: "Korean" },
      ru: { text: "сопротивление", script: "Кириллица" },
      en: { text: "resistance", script: "Latin" }
    },
    samples: [
      { ko: "압력에 저항했다.", uz: "Bosimga qarshi turdi.", ru: "Он сопротивлялся давлению.", en: "He resisted the pressure." }
    ]
  },
  {
    id: "pobu",
    pos: "noun",
    romanization: "pobu",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "umid, xohish; orzu", script: "Latin" },
      ko: { text: "포부", script: "Korean" },
      ru: { text: "чаяния, устремления", script: "Кириллица" },
      en: { text: "aspiration, ambition", script: "Latin" }
    },
    samples: [
      { ko: "큰 포부를 품고 있다.", uz: "Katta orzulari bor.", ru: "Он лелеет большие устремления.", en: "He has big aspirations." }
    ]
  },
  {
    id: "myeoljong",
    pos: "noun",
    romanization: "myeoljong",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "yo‘q bo‘lib ketish (yo‘qolib ketish)", script: "Latin" },
      ko: { text: "멸종", script: "Korean" },
      ru: { text: "вымирание", script: "Кириллица" },
      en: { text: "extinction", script: "Latin" }
    },
    samples: [
      { ko: "멸종 위기 종을 보호해야 한다.", uz: "Yo‘qolib ketish arafasidagi turni asrash kerak.", ru: "Нужно защищать вымирающие виды.", en: "We must protect endangered species." }
    ]
  },
  {
    id: "fight-for-justice",
    pos: "verb",
    romanization: "jeongui-reul wihae ssawuda",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "adolat uchun kurashmoq", script: "Latin" },
      ko: { text: "정의를 위해 싸우다", script: "Korean" },
      ru: { text: "бороться за справедливость", script: "Кириллица" },
      en: { text: "to fight for justice", script: "Latin" }
    },
    samples: [
      { ko: "우리는 정의를 위해 싸웠다.", uz: "Biz adolat uchun kurashdik.", ru: "Мы боролись за справедливость.", en: "We fought for justice." }
    ]
  },
  {
    id: "wonchik",
    pos: "noun",
    romanization: "wonchik",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "tamoyil, qoida", script: "Latin" },
      ko: { text: "원칙", script: "Korean" },
      ru: { text: "принцип", script: "Кириллица" },
      en: { text: "principle", script: "Latin" }
    },
    samples: [
      { ko: "원칙을 지켜야 한다.", uz: "Tamoyillarga rioya qilish kerak.", ru: "Нужно придерживаться принципов.", en: "We must keep to principles." }
    ]
  },
  {
    id: "jinyeol",
    pos: "noun",
    romanization: "jinyeol",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "namoyish (qilish), ekspozitsiya", script: "Latin" },
      ko: { text: "진열", script: "Korean" },
      ru: { text: "выкладка, экспозиция", script: "Кириллица" },
      en: { text: "display, arrangement", script: "Latin" }
    },
    samples: [
      { ko: "상품 진열을 바꿨다.", uz: "Mahsulot namoyishini o‘zgartirdik.", ru: "Мы изменили выкладку товара.", en: "We changed the product display." }
    ]
  },
  {
    id: "yeoknyang",
    pos: "noun",
    romanization: "yeoknyang",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "qobiliyat, salohiyat", script: "Latin" },
      ko: { text: "역량", script: "Korean" },
      ru: { text: "компетенция, потенциал", script: "Кириллица" },
      en: { text: "capability, competence", script: "Latin" }
    },
    samples: [
      { ko: "팀의 역량을 키워야 한다.", uz: "Jamoa salohiyatini oshirish kerak.", ru: "Нужно развивать компетенции команды.", en: "We need to build the team’s capabilities." }
    ]
  },
  {
    id: "sarye",
    pos: "noun",
    romanization: "sarye",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "misol, namuna", script: "Latin" },
      ko: { text: "사례", script: "Korean" },
      ru: { text: "пример, кейс", script: "Кириллица" },
      en: { text: "example, case", script: "Latin" }
    },
    samples: [
      { ko: "성공 사례를 공유했다.", uz: "Muvaffaqiyatli misollar bo‘lishildi.", ru: "Поделились успешными кейсами.", en: "We shared success cases." }
    ]
  },
  {
    id: "yeomnyeo",
    pos: "noun",
    romanization: "yeomnyeo",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "xavotir, tashvish", script: "Latin" },
      ko: { text: "염려", script: "Korean" },
      ru: { text: "беспокойство", script: "Кириллица" },
      en: { text: "worry, concern", script: "Latin" }
    },
    samples: [
      { ko: "염려하지 마세요.", uz: "Xavotir olmang.", ru: "Не беспокойтесь.", en: "Don’t worry." }
    ]
  },
  {
    id: "maedeup",
    pos: "noun",
    romanization: "maedeup",
    tags: ["TOPIK", "3차"],
    words: {
      uz: { text: "1) tugun; 2) xulosa, yakun", script: "Latin" },
      ko: { text: "매듭", script: "Korean" },
      ru: { text: "узел; итог", script: "Кириллица" },
      en: { text: "knot; conclusion", script: "Latin" }
    },
    samples: [
      { ko: "마지막으로 매듭을 짓자.", uz: "Oxirida xulosa qilaylik.", ru: "Давайте подведём итог.", en: "Let’s tie things up at the end." }
    ]
  },
   {
    id: "chulshin",
    pos: "noun",
    romanization: "chulshin",
    tags: ["TOPIK", "4차", "Common"],
    words: {
      uz: { text: "kelib chiqishi, asl nasabi", script: "Latin" },
      ko: { text: "출신", script: "Korean" },
      ru: { text: "происхождение", script: "Кириллица" },
      en: { text: "origin, background", script: "Latin" },
    },
    samples: [
      { ko: "그는 지방 출신이다.", uz: "U viloyatdan kelib chiqqan.", ru: "Он родом из провинции.", en: "He is from the provinces." },
    ],
  },
  {
    id: "sisi-gakgak",
    pos: "adv",
    romanization: "sisi-gakgak",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "har lahza (har soat)", script: "Latin" },
      ko: { text: "시시각각", script: "Korean" },
      ru: { text: "ежечасно, ежеминутно", script: "Кириллица" },
      en: { text: "from moment to moment", script: "Latin" },
    },
    samples: [
      { ko: "상황이 시시각각 변한다.", uz: "Vaziyat har lahza o‘zgaradi.", ru: "Ситуация меняется ежеминутно.", en: "The situation changes by the minute." },
    ],
  },
  {
    id: "banip",
    pos: "noun",
    romanization: "banip",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "olib kirish", script: "Latin" },
      ko: { text: "반입", script: "Korean" },
      ru: { text: "ввоз, внесение", script: "Кириллица" },
      en: { text: "bringing in, carry-in", script: "Latin" },
    },
    samples: [
      { ko: "음식 반입이 금지되었다.", uz: "Ovqat olib kirish taqiqlangan.", ru: "Внос еды запрещён.", en: "Bringing food inside is prohibited." },
    ],
  },
  {
    id: "biman",
    pos: "noun",
    romanization: "biman",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "semizlik", script: "Latin" },
      ko: { text: "비만", script: "Korean" },
      ru: { text: "ожирение", script: "Кириллица" },
      en: { text: "obesity", script: "Latin" },
    },
    samples: [
      { ko: "비만을 예방해야 한다.", uz: "Semizlikning oldini olish kerak.", ru: "Нужно предотвращать ожирение.", en: "We should prevent obesity." },
    ],
  },
  {
    id: "magujabi",
    pos: "adv",
    romanization: "magujabi",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "tasodif, o‘ylamasdan (indiskriminatsiya)", script: "Latin" },
      ko: { text: "마구잡이", script: "Korean" },
      ru: { text: "без разбору, наугад", script: "Кириллица" },
      en: { text: "indiscriminately, at random", script: "Latin" },
    },
    samples: [
      { ko: "마구잡이로 버리면 안 된다.", uz: "Tasodifiy tashlash mumkin emas.", ru: "Нельзя выбрасывать что попало.", en: "You must not dump things indiscriminately." },
    ],
  },
  {
    id: "yeonmin",
    pos: "noun",
    romanization: "yeonmin",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "achinish, rahm", script: "Latin" },
      ko: { text: "연민", script: "Korean" },
      ru: { text: "сострадание", script: "Кириллица" },
      en: { text: "compassion, pity", script: "Latin" },
    },
    samples: [
      { ko: "그의 사연이 연민을 불러일으켰다.", uz: "Uning hikoyasi achinish uyg‘otdi.", ru: "Его история вызвала сострадание.", en: "His story evoked compassion." },
    ],
  },
  {
    id: "gongik",
    pos: "noun",
    romanization: "gongik",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "jamoat manfaati", script: "Latin" },
      ko: { text: "공익", script: "Korean" },
      ru: { text: "общественное благо", script: "Кириллица" },
      en: { text: "public interest", script: "Latin" },
    },
    samples: [
      { ko: "공익을 우선해야 한다.", uz: "Jamoat manfaati ustuvor bo‘lishi kerak.", ru: "Общественное благо должно быть приоритетом.", en: "Public interest should come first." },
    ],
  },
  {
    id: "sinbun",
    pos: "noun",
    romanization: "sinbun",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "maqom, ijtimoiy holat", script: "Latin" },
      ko: { text: "신분", script: "Korean" },
      ru: { text: "социальный статус", script: "Кириллица" },
      en: { text: "social status, identity", script: "Latin" },
    },
    samples: [
      { ko: "신분을 속여서는 안 된다.", uz: "Maqomni/kimligini yashirish mumkin emas.", ru: "Нельзя скрывать личность/статус.", en: "You must not conceal your identity." },
    ],
  },
  {
    id: "wiseang",
    pos: "noun",
    romanization: "wiseang",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "gigiyena", script: "Latin" },
      ko: { text: "위생", script: "Korean" },
      ru: { text: "гигиена", script: "Кириллица" },
      en: { text: "hygiene", script: "Latin" },
    },
    samples: [
      { ko: "개인 위생을 철저히 지켜라.", uz: "Shaxsiy gigiyenaga qat’iy rioya qiling.", ru: "Соблюдайте личную гигиену.", en: "Maintain personal hygiene." },
    ],
  },
  {
    id: "chawon",
    pos: "noun",
    romanization: "chawon",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "daraja; o‘lcham (matematikada burchak)", script: "Latin" },
      ko: { text: "차원", script: "Korean" },
      ru: { text: "измерение, уровень", script: "Кириллица" },
      en: { text: "dimension, level", script: "Latin" },
    },
    samples: [
      { ko: "차원이 다른 경기였다.", uz: "Bu butunlay boshqa darajadagi o‘yin edi.", ru: "Это была игра другого уровня.", en: "It was a game on another level." },
    ],
  },
  {
    id: "giteul",
    pos: "noun",
    romanization: "giteul",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "asos, fundament", script: "Latin" },
      ko: { text: "기틀", script: "Korean" },
      ru: { text: "основа, фундамент", script: "Кириллица" },
      en: { text: "framework, foundation", script: "Latin" },
    },
    samples: [
      { ko: "성장의 기틀을 마련했다.", uz: "O‘sish uchun poydevor yaratildi.", ru: "Создали основу для роста.", en: "They laid the groundwork for growth." },
    ],
  },
  {
    id: "chian",
    pos: "noun",
    romanization: "chian",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "jamoat tartib-intizomi", script: "Latin" },
      ko: { text: "치안", script: "Korean" },
      ru: { text: "общественный порядок", script: "Кириллица" },
      en: { text: "public order, security", script: "Latin" },
    },
    samples: [
      { ko: "치안 유지를 강화했다.", uz: "Jamoat tartibini mustahkamlandi.", ru: "Усилили поддержание порядка.", en: "Public security was strengthened." },
    ],
  },
  {
    id: "gwanhaeng",
    pos: "noun",
    romanization: "gwanhaeng",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "odat, amaliyot (konventsiya)", script: "Latin" },
      ko: { text: "관행", script: "Korean" },
      ru: { text: "практика, устой", script: "Кириллица" },
      en: { text: "custom, practice", script: "Latin" },
    },
    samples: [
      { ko: "오랜 관행을 바꾸기 어렵다.", uz: "Ko‘p yillik odatni o‘zgartirish qiyin.", ru: "Сложно менять давнюю практику.", en: "It’s hard to change long-standing practices." },
    ],
  },
  {
    id: "uho",
    pos: "noun",
    romanization: "uho",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "do‘stlik", script: "Latin" },
      ko: { text: "우호", script: "Korean" },
      ru: { text: "дружба, дружественность", script: "Кириллица" },
      en: { text: "friendliness, amity", script: "Latin" },
    },
    samples: [
      { ko: "두 나라의 우호 관계", uz: "Ikki davlatning do‘stona munosabati.", ru: "Дружественные отношения двух стран.", en: "Amicable relations between the two countries." },
    ],
  },
  {
    id: "hoching",
    pos: "noun",
    romanization: "hoching",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "nomlash, unvon", script: "Latin" },
      ko: { text: "호칭", script: "Korean" },
      ru: { text: "наименование, обращение", script: "Кириллица" },
      en: { text: "title, form of address", script: "Latin" },
    },
    samples: [
      { ko: "적절한 호칭을 사용해라.", uz: "Mos nom/ murojaatdan foydalaning.", ru: "Используйте корректное обращение.", en: "Use an appropriate form of address." },
    ],
  },
  {
    id: "bibeop",
    pos: "noun",
    romanization: "bibeop",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "sir-sinoat, yo‘riq", script: "Latin" },
      ko: { text: "비법", script: "Korean" },
      ru: { text: "секретный способ", script: "Кириллица" },
      en: { text: "secret method", script: "Latin" },
    },
    samples: [
      { ko: "맛집의 비법 소스", uz: "Mazali oshxonaning sirli sousi.", ru: "Секретный соус заведения.", en: "The restaurant’s secret sauce." },
    ],
  },
  {
    id: "bijung",
    pos: "noun",
    romanization: "bijung",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "ahamiyat, muhimlilik", script: "Latin" },
      ko: { text: "비중", script: "Korean" },
      ru: { text: "удельный вес, значимость", script: "Кириллица" },
      en: { text: "weight, importance", script: "Latin" },
    },
    samples: [
      { ko: "서비스의 비중이 크다.", uz: "Xizmatning ulushi katta.", ru: "Важность сервиса велика.", en: "Service has a large weight." },
    ],
  },
  {
    id: "segun",
    pos: "noun",
    romanization: "segun",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "bakteriya", script: "Latin" },
      ko: { text: "세균", script: "Korean" },
      ru: { text: "бактерии", script: "Кириллица" },
      en: { text: "bacteria", script: "Latin" },
    },
    samples: [
      { ko: "세균 감염을 조심해라.", uz: "Bakteriya yuqumiga ehtiyot bo‘ling.", ru: "Остерегайтесь бактериальной инфекции.", en: "Beware of bacterial infection." },
    ],
  },
  {
    id: "hyoyul",
    pos: "noun",
    romanization: "hyoyul",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "samaradorlik", script: "Latin" },
      ko: { text: "효율", script: "Korean" },
      ru: { text: "эффективность", script: "Кириллица" },
      en: { text: "efficiency", script: "Latin" },
    },
    samples: [
      { ko: "에너지 효율을 높였다.", uz: "Energiya samaradorligi oshirildi.", ru: "Повысили энергоэффективность.", en: "Energy efficiency was improved." },
    ],
  },
  {
    id: "hyeongpo",
    pos: "noun",
    romanization: "hyeongpo",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "jabr-zulm, zolimlik", script: "Latin" },
      ko: { text: "형포", script: "Korean" },
      ru: { text: "гнёt, деспотизм", script: "Кириллица" },
      en: { text: "oppression, tyranny", script: "Latin" },
    },
    samples: [
      { ko: "형포에 맞서 싸웠다.", uz: "Zolimlikka qarshi kurashdi.", ru: "Боролись против гнёта.", en: "They fought against oppression." },
    ],
  },
  {
    id: "suchik",
    pos: "noun",
    romanization: "suchik",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "tartib-qoida", script: "Latin" },
      ko: { text: "수칙", script: "Korean" },
      ru: { text: "правила, регламент", script: "Кириллица" },
      en: { text: "rules, code", script: "Latin" },
    },
    samples: [
      { ko: "안전 수칙을 지켜라.", uz: "Xavfsizlik qoidalariga rioya qiling.", ru: "Соблюдайте правила безопасности.", en: "Follow the safety rules." },
    ],
  },
  {
    id: "dugak",
    pos: "noun",
    romanization: "dugak",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "ustunlik, ajralib turish", script: "Latin" },
      ko: { text: "두각", script: "Korean" },
      ru: { text: "выделение, преимущество", script: "Кириллица" },
      en: { text: "prominence, distinction", script: "Latin" },
    },
    samples: [
      { ko: "그는 연구에서 두각을 나타냈다.", uz: "U tadqiqotda ajralib turdi.", ru:"Он проявил себя в исследовании. Кириллица" , en: "He distinguished himself in research." },
    ],
  },
  {
    id: "sagi",
    pos: "noun",
    romanization: "sagi",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "firibgarlik", script: "Latin" },
      ko: { text: "사기", script: "Korean" },
      ru: { text: "мошенничество", script: "Кириллица" },
      en: { text: "fraud", script: "Latin" },
    },
    samples: [
      { ko: "온라인 사기를 조심하라.", uz: "Onlayn firibgarlikdan ehtiyot bo‘ling.", ru: "Остерегайтесь онлайн-мошенничества.", en: "Beware of online fraud." },
    ],
  },
  {
    id: "chimche",
    pos: "noun",
    romanization: "chimche",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "turg‘unlik", script: "Latin" },
      ko: { text: "침체", script: "Korean" },
      ru: { text: "застой, стагнация", script: "Кириллица" },
      en: { text: "stagnation, slump", script: "Latin" },
    },
    samples: [
      { ko: "경기가 침체되었다.", uz: "Iqtisod turg‘unlashdi.", ru: "Экономика впала в застой.", en: "The economy slumped." },
    ],
  },
  {
    id: "tagyeok",
    pos: "noun",
    romanization: "tagyeok",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "zarba; zarar ko‘rish", script: "Latin" },
      ko: { text: "타격", script: "Korean" },
      ru: { text: "удар, урон", script: "Кириллица" },
      en: { text: "blow, damage", script: "Latin" },
    },
    samples: [
      { ko: "대책 없이 큰 타격을 입었다.", uz: "Chora bo‘lmay, katta zarar ko‘rildi.", ru: "Без мер понесли серьёзный ущерб.", en: "They suffered a heavy blow without countermeasures." },
    ],
  },
  {
    id: "yashim",
    pos: "noun",
    romanization: "yashim",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "umid, xohish; ambitsiya", script: "Latin" },
      ko: { text: "야심", script: "Korean" },
      ru: { text: "амбиция, стремление", script: "Кириллица" },
      en: { text: "ambition", script: "Latin" },
    },
    samples: [
      { ko: "큰 야심을 품다.", uz: "Katta orzuga ega bo‘lish.", ru: "Питать большие амбиции.", en: "To harbor big ambitions." },
    ],
  },
  {
    id: "gochal",
    pos: "verb",
    romanization: "gochal",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "o‘ylab ko‘rish; tahlil", script: "Latin" },
      ko: { text: "고찰(하다)", script: "Korean" },
      ru: { text: "рассмотрение, анализ", script: "Кириллица" },
      en: { text: "consideration, examine", script: "Latin" },
    },
    samples: [
      { ko: "문제를 깊이 고찰했다.", uz: "Muammo chuqur ko‘rib chiqildi.", ru: "Вопрос тщательно рассмотрели.", en: "They examined the issue in depth." },
    ],
  },
  {
    id: "pandan",
    pos: "noun",
    romanization: "pandan",
    tags: ["TOPIK", "4차"],
    words: {
      uz: { text: "qaror, xulosa; hukm", script: "Latin" },
      ko: { text: "판단", script: "Korean" },
      ru: { text: "суждение, решение", script: "Кириллица" },
      en: { text: "judgment, decision", script: "Latin" },
    },
    samples: [
      { ko: "냉정한 판단이 필요하다.", uz: "Sovuqqon qaror zarur.", ru: "Нужно хладнокровное суждение.", en: "A cool-headed judgment is needed." },
    ],
  },
  {
    id: "chiyu",
    pos: "noun",
    romanization: "chiyu",
    tags: ["TOPIK", "5차", "Common"],
    words: {
      uz: { text: "davo, davolash", script: "Latin" },
      ko: { text: "치유", script: "Korean" },
      ru: { text: "исцеление", script: "Кириллица" },
      en: { text: "healing", script: "Latin" },
    },
    samples: [
      { ko: "시간이 상처를 치유한다.", uz: "Vaqt yarani davolaydi.", ru: "Время лечит раны.", en: "Time heals wounds." },
    ],
  },
  {
    id: "satae",
    pos: "noun",
    romanization: "satae",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "holat, vaziyat", script: "Latin" },
      ko: { text: "사태", script: "Korean" },
      ru: { text: "положение дел", script: "Кириллица" },
      en: { text: "state of affairs", script: "Latin" },
    },
    samples: [
      { ko: "사태가 심각해졌다.", uz: "Vaziyat jiddiylashdi.", ru: "Положение осложнилось.", en: "The situation became serious." },
    ],
  },
  {
    id: "mangsin",
    pos: "noun",
    romanization: "mangsin",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "uyat, isnod", script: "Latin" },
      ko: { text: "망신", script: "Korean" },
      ru: { text: "позор", script: "Кириллица" },
      en: { text: "humiliation, disgrace", script: "Latin" },
    },
    samples: [
      { ko: "공개적으로 망신을 당했다.", uz: "Ommada sharmanda bo‘ldi.", ru: "Его публично опозорили.", en: "He was humiliated in public." },
    ],
  },
  {
    id: "jeongui-def",
    pos: "noun",
    romanization: "jeongui",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "ta’rif", script: "Latin" },
      ko: { text: "정의(뜻)", script: "Korean" },
      ru: { text: "определение", script: "Кириллица" },
      en: { text: "definition", script: "Latin" },
    },
    samples: [
      { ko: "용어의 정의를 내려라.", uz: "Atamaning ta’rifini bering.", ru: "Дайте определение термину.", en: "Provide a definition of the term." },
    ],
  },
  {
    id: "kkoturi",
    pos: "noun",
    romanization: "kkoturi",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "ayb topish, bahona", script: "Latin" },
      ko: { text: "꼬투리", script: "Korean" },
      ru: { text: "зацепка, придирка", script: "Кириллица" },
      en: { text: "pretext, fault-finding", script: "Latin" },
    },
    samples: [
      { ko: "괜한 꼬투리를 잡지 마라.", uz: "Bekorga ayb qidirmang.", ru: "Не придирайтесь зря.", en: "Don’t pick on trivial faults." },
    ],
  },
  {
    id: "sireum",
    pos: "noun",
    romanization: "sireum",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "xavotir, tashvish", script: "Latin" },
      ko: { text: "시름", script: "Korean" },
      ru: { text: "тоска, заботы", script: "Кириллица" },
      en: { text: "worry, sorrow", script: "Latin" },
    },
    samples: [
      { ko: "시름을 잊고 쉬어라.", uz: "Xavotirni unutib dam oling.", ru: "Отдохни и забудь тревоги.", en: "Rest and forget your worries." },
    ],
  },
  {
    id: "teugyu",
    pos: "adj",
    romanization: "teugyu",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "o‘ziga xos", script: "Latin" },
      ko: { text: "특유", script: "Korean" },
      ru: { text: "свойственный, характерный", script: "Кириллица" },
      en: { text: "peculiar to, unique", script: "Latin" },
    },
    samples: [
      { ko: "그 도시만의 특유의 분위기", uz: "O‘sha shaharga xos muhit.", ru: "Уникальная атмосфера города.", en: "The city’s unique vibe." },
    ],
  },
  {
    id: "seongbi",
    pos: "noun",
    romanization: "seongbi",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "erkak va ayol miqdori (nisbati)", script: "Latin" },
      ko: { text: "성비", script: "Korean" },
      ru: { text: "соотношение полов", script: "Кириллица" },
      en: { text: "gender ratio", script: "Latin" },
    },
    samples: [
      { ko: "성비 불균형 문제가 있다.", uz: "Jinslar nisbati nomutanosib.", ru: "Есть дисбаланс полов.", en: "There is a gender imbalance." },
    ],
  },
  {
    id: "gyegi",
    pos: "noun",
    romanization: "gyegi",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "imkoniyat, turtki, sabab", script: "Latin" },
      ko: { text: "계기", script: "Korean" },
      ru: { text: "повод, стимул", script: "Кириллица" },
      en: { text: "opportunity, trigger", script: "Latin" },
    },
    samples: [
      { ko: "좋은 계기가 되었다.", uz: "Yaxshi imkoniyat bo‘ldi.", ru: "Это стало хорошим поводом.", en: "It became a good opportunity." },
    ],
  },
  {
    id: "apdo",
    pos: "noun",
    romanization: "apdo",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "o‘zib ketish, bosib tashlash", script: "Latin" },
      ko: { text: "압도", script: "Korean" },
      ru: { text: "подавление, доминирование", script: "Кириллица" },
      en: { text: "overwhelm, dominate", script: "Latin" },
    },
    samples: [
      { ko: "상대를 실력으로 압도했다.", uz: "Raqibni mahorat bilan bosdi.", ru: "Переиграли соперника по мастерству.", en: "They overwhelmed the opponent with skill." },
    ],
  },
  {
    id: "jeoryak",
    pos: "noun",
    romanization: "jeoryak",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "tejash", script: "Latin" },
      ko: { text: "절약", script: "Korean" },
      ru: { text: "экономия", script: "Кириллица" },
      en: { text: "saving, thrift", script: "Latin" },
    },
    samples: [
      { ko: "물 절약이 필요하다.", uz: "Suvni tejash kerak.", ru: "Нужно экономить воду.", en: "We need to save water." },
    ],
  },
  {
    id: "bonbogi",
    pos: "noun",
    romanization: "bonbogi",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "namuna, misol (ibrat)", script: "Latin" },
      ko: { text: "본보기", script: "Korean" },
      ru: { text: "пример, образец", script: "Кириллица" },
      en: { text: "model, example", script: "Latin" },
    },
    samples: [
      { ko: "본보기가 되는 사례", uz: "Ibrat bo‘ladigan holat.", ru: "Показательный пример.", en: "An exemplary case." },
    ],
  },
  {
    id: "jabnyeom",
    pos: "noun",
    romanization: "jabnyeom",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "boshqa xayollar, chalg‘ituvchi fikrlar", script: "Latin" },
      ko: { text: "잡념", script: "Korean" },
      ru: { text: "посторонние мысли", script: "Кириллица" },
      en: { text: "idle thoughts", script: "Latin" },
    },
    samples: [
      { ko: "잡념을 떨쳐 내라.", uz: "Begona xayollarni quving.", ru: "Отбрось посторонние мысли.", en: "Shake off stray thoughts." },
    ],
  },
  {
    id: "tteun-gureum",
    pos: "noun",
    romanization: "tteun gureum",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "oq bulut parchasi; o‘tkinchi dunyo", script: "Latin" },
      ko: { text: "뜬구름", script: "Korean" },
      ru: { text: "облачок; эфемерность", script: "Кириллица" },
      en: { text: "fleeting cloud; something transient", script: "Latin" },
    },
    samples: [
      { ko: "뜬구름 같은 이야기다.", uz: "Bu o‘tkinchi (havoyi) gaplar.", ru: "Это пустые, эфемерные речи.", en: "That’s like chasing clouds." },
    ],
  },
  {
    id: "hwansang",
    pos: "noun",
    romanization: "hwansang",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "hayolot, fantaziya", script: "Latin" },
      ko: { text: "환상", script: "Korean" },
      ru: { text: "фантазия, иллюзия", script: "Кириллица" },
      en: { text: "fantasy, illusion", script: "Latin" },
    },
    samples: [
      { ko: "환상에만 빠지지 마라.", uz: "Faqat xayolotga berilma.", ru: "Не увлекайся одними иллюзиями.", en: "Don’t get lost in fantasies." },
    ],
  },
  {
    id: "myomi",
    pos: "noun",
    romanization: "myomi",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "maftunkorlik, zavqli tomon", script: "Latin" },
      ko: { text: "묘미", script: "Korean" },
      ru: { text: "изюминка, прелесть", script: "Кириллица" },
      en: { text: "charm, appeal", script: "Latin" },
    },
    samples: [
      { ko: "소소한 일상의 묘미", uz: "Mayda kundalik zavqlar.", ru: "Прелесть мелочей повседневности.", en: "The little charms of daily life." },
    ],
  },
  {
    id: "hyangsubyeong",
    pos: "noun",
    romanization: "hyangsu-byeong",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "uyni sog‘inish kasalligi", script: "Latin" },
      ko: { text: "향수병", script: "Korean" },
      ru: { text: "тоска по дому", script: "Кириллица" },
      en: { text: "homesickness", script: "Latin" },
    },
    samples: [
      { ko: "유학 와서 향수병에 걸렸다.", uz: "O‘qishga kelib, yurt sog‘inchi boshlandi.", ru: "На учёбе за границей меня мучила ностальгия.", en: "I got homesick while studying abroad." },
    ],
  },
  {
    id: "giryang",
    pos: "noun",
    romanization: "giryang",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "qobiliyat, mahorat", script: "Latin" },
      ko: { text: "기량", script: "Korean" },
      ru: { text: "мастерство, навык", script: "Кириллица" },
      en: { text: "skill, ability", script: "Latin" },
    },
    samples: [
      { ko: "선수들의 기량이 향상됐다.", uz: "Sportchilarning mahorati oshdi.", ru: "Мастерство игроков выросло.", en: "Players’ skills improved." },
    ],
  },
  {
    id: "silmari",
    pos: "noun",
    romanization: "silmari",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "ip uchi, kalit dalil", script: "Latin" },
      ko: { text: "실마리", script: "Korean" },
      ru: { text: "зацепка, ниточка", script: "Кириллица" },
      en: { text: "clue, lead", script: "Latin" },
    },
    samples: [
      { ko: "문제 해결의 실마리를 찾았다.", uz: "Muammo yechimining kalitini topdik.", ru: "Нашли зацепку для решения проблемы.", en: "We found a clue to solve the problem." },
    ],
  },
  {
    id: "jagak",
    pos: "noun",
    romanization: "jagak",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "o‘zini anglash, xabardor bo‘lish", script: "Latin" },
      ko: { text: "자각", script: "Korean" },
      ru: { text: "осознание", script: "Кириллица" },
      en: { text: "self-awareness", script: "Latin" },
    },
    samples: [
      { ko: "문제의식을 자각했다.", uz: "Muammo borligini angladi.", ru: "Осознал проблематику.", en: "He became aware of the issue." },
    ],
  },
  {
    id: "namnyeo-noso",
    pos: "noun",
    romanization: "namnyeo noso",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "jins va yoshdan qat’i nazar (hamma)", script: "Latin" },
      ko: { text: "남녀노소", script: "Korean" },
      ru: { text: "и мужчины и женщины, и стар и млад", script: "Кириллица" },
      en: { text: "men and women of all ages", script: "Latin" },
    },
    samples: [
      { ko: "남녀노소 누구나 즐긴다.", uz: "Barchaga manzur bo‘ladi.", ru: "Нравится всем без исключения.", en: "Everyone enjoys it, young and old." },
    ],
  },
  {
    id: "makpan",
    pos: "noun",
    romanization: "makpan",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "so‘nggi lahza", script: "Latin" },
      ko: { text: "막판", script: "Korean" },
      ru: { text: "последний момент", script: "Кириллица" },
      en: { text: "the last minute", script: "Latin" },
    },
    samples: [
      { ko: "막판에 역전했다.", uz: "So‘nggi lahzada burilish bo‘ldi.", ru: "В последний момент переломили ход.", en: "They turned it around at the last minute." },
    ],
  },
  {
    id: "nonjeom",
    pos: "noun",
    romanization: "nonjeom",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "asosiy masala, bahs nuqtasi", script: "Latin" },
      ko: { text: "논점", script: "Korean" },
      ru: { text: "предмет спора, тезис", script: "Кириллица" },
      en: { text: "point at issue", script: "Latin" },
    },
    samples: [
      { ko: "논점을 벗어나지 마라.", uz: "Asosiy masaladan chetga chiqma.", ru: "Не уходи от сути спора.", en: "Stay on the point at issue." },
    ],
  },
  {
    id: "pungmo",
    pos: "noun",
    romanization: "pungmo",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "ko‘rinish, qiyofa", script: "Latin" },
      ko: { text: "풍모", script: "Korean" },
      ru: { text: "внешний облик", script: "Кириллица" },
      en: { text: "appearance, looks", script: "Latin" },
    },
    samples: [
      { ko: "그는 학자의 풍모가 있다.", uz: "Unda olimga xos qiyofa bor.", ru: "У него облик учёного.", en: "He has the look of a scholar." },
    ],
  },
  {
    id: "sillyeon",
    pos: "noun",
    romanization: "sillyeon",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "qiyinchilik, ko‘rgulik", script: "Latin" },
      ko: { text: "시련", script: "Korean" },
      ru: { text: "испытание, невзгоды", script: "Кириллица" },
      en: { text: "ordeal, trial", script: "Latin" },
    },
    samples: [
      { ko: "시련을 이겨 냈다.", uz: "Qiyinchiliklarni yengdi.", ru: "Преодолел испытания.", en: "He overcame hardships." },
    ],
  },
  {
    id: "jeolcha",
    pos: "noun",
    romanization: "jeolcha",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "bosqich, jarayon", script: "Latin" },
      ko: { text: "절차", script: "Korean" },
      ru: { text: "процедура", script: "Кириллица" },
      en: { text: "procedure", script: "Latin" },
    },
    samples: [
      { ko: "절차를 준수하세요.", uz: "Jarayonga rioya qiling.", ru: "Соблюдайте процедуру.", en: "Please follow the procedure." },
    ],
  },
  {
    id: "nawi",
    pos: "noun",
    romanization: "nawi",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "zaruriyat, xojat (qadimiy)", script: "Latin" },
      ko: { text: "나위", script: "Korean" },
      ru: { text: "необходимость (уст.)", script: "Кириллица" },
      en: { text: "need, necessity (archaic)", script: "Latin" },
    },
    samples: [
      { ko: "말할 나위도 없다.", uz: "Gapirmasa ham bo‘ladi (albatta).", ru: "И говорить нечего (само собой).", en: "It goes without saying." },
    ],
  },
  {
    id: "gongmo",
    pos: "noun",
    romanization: "gongmo",
    tags: ["TOPIK", "5차"],
    words: {
      uz: { text: "1) ochiq tanlov 2) til biriktirish", script: "Latin" },
      ko: { text: "공모", script: "Korean" },
      ru: { text: "1) конкурс 2) сговор", script: "Кириллица" },
      en: { text: "1) open call/contest 2) collusion", script: "Latin" },
    },
    samples: [
      { ko: "디자인 공모에 참가했다.", uz: "Dizayn tanlovida qatnashdi.", ru: "Участвовал в дизайн-конкурсе.", en: "He entered a design contest." },
    ],
  },
  {
    id: "miryeon",
    pos: "noun",
    romanization: "miryeon",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "o‘rganib qolish; ajrala olmaslik", script: "Latin" },
      ko: { text: "미련", script: "Korean" },
      ru: { text: "привязанность; сожаление", script: "Кириллица" },
      en: { text: "lingering attachment; regret", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "uimun",
    pos: "noun",
    romanization: "uimun",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "shubha", script: "Latin" },
      ko: { text: "의문", script: "Korean" },
      ru: { text: "сомнение", script: "Кириллица" },
      en: { text: "doubt", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "gyeolui",
    pos: "noun",
    romanization: "gyeolui",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "qaror, qat’iy niyat", script: "Latin" },
      ko: { text: "결의", script: "Korean" },
      ru: { text: "решимость", script: "Кириллица" },
      en: { text: "resolution, determination", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "saessak",
    pos: "noun",
    romanization: "sae-ssak",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "nihol, novda", script: "Latin" },
      ko: { text: "새싹", script: "Korean" },
      ru: { text: "росток", script: "Кириллица" },
      en: { text: "sprout, shoot", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "baneul-bangseok",
    pos: "noun",
    romanization: "baneul-bangseok",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "noqulay vaziyat (go‘yoki igna yostiq)", script: "Latin" },
      ko: { text: "바늘방석", script: "Korean" },
      ru: { text: "как на иголках; неловкость", script: "Кириллица" },
      en: { text: "a bed of nails; awkward spot", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "jichim",
    pos: "noun",
    romanization: "jichim",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "yo‘riqnoma, ko‘rsatma", script: "Latin" },
      ko: { text: "지침", script: "Korean" },
      ru: { text: "инструкция, руководство", script: "Кириллица" },
      en: { text: "guideline", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "jomang",
    pos: "noun",
    romanization: "jomang",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "ko‘rinish, manzara", script: "Latin" },
      ko: { text: "조망", script: "Korean" },
      ru: { text: "вид, перспектива", script: "Кириллица" },
      en: { text: "view, prospect", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "myeongching",
    pos: "noun",
    romanization: "myeongching",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "ism, nom", script: "Latin" },
      ko: { text: "명칭", script: "Korean" },
      ru: { text: "наименование", script: "Кириллица" },
      en: { text: "name, designation", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "kkimsae",
    pos: "noun",
    romanization: "kkimsae",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "belgi, simptom", script: "Latin" },
      ko: { text: "낌새", script: "Korean" },
      ru: { text: "признак, намёк", script: "Кириллица" },
      en: { text: "sign, inkling", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "jeongbi",
    pos: "noun",
    romanization: "jeongbi",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "tuzish, tuzatish; tex. xizmat", script: "Latin" },
      ko: { text: "정비", script: "Korean" },
      ru: { text: "обслуживание, ремонт", script: "Кириллица" },
      en: { text: "maintenance, overhaul", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "ilssu-ida",
    pos: "noun",
    romanization: "-gi ilssu-ida",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "… ish odat bo‘ladi (ko‘p sodir bo‘ladi)", script: "Latin" },
      ko: { text: "…기 일쑤이다", script: "Korean" },
      ru: { text: "часто случается …", script: "Кириллица" },
      en: { text: "to tend to do … often", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "hwaje",
    pos: "noun",
    romanization: "hwaje",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "mavzu", script: "Latin" },
      ko: { text: "화제", script: "Korean" },
      ru: { text: "тема (разговора)", script: "Кириллица" },
      en: { text: "topic", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "hondon",
    pos: "noun",
    romanization: "hondon",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "chigal, tartibsizlik", script: "Latin" },
      ko: { text: "혼돈", script: "Korean" },
      ru: { text: "хаос", script: "Кириллица" },
      en: { text: "chaos", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "sogam",
    pos: "noun",
    romanization: "sogam",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "shaxsiy fikr/xis­si­yot", script: "Latin" },
      ko: { text: "소감", script: "Korean" },
      ru: { text: "впечатление", script: "Кириллица" },
      en: { text: "impression, thoughts", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "insang-rise",
    pos: "noun",
    romanization: "insang",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "o‘sish (narx va h.k.)", script: "Latin" },
      ko: { text: "인상", script: "Korean" },
      ru: { text: "повышение", script: "Кириллица" },
      en: { text: "raise, increase", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "jeungjin",
    pos: "noun",
    romanization: "jeungjin",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "o‘sish, yaxshilanish", script: "Latin" },
      ko: { text: "증진", script: "Korean" },
      ru: { text: "повышение, улучшение", script: "Кириллица" },
      en: { text: "enhancement, promotion", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "myeonmo",
    pos: "noun",
    romanization: "myeonmo",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "taraf, qiyofa", script: "Latin" },
      ko: { text: "면모", script: "Korean" },
      ru: { text: "облик, аспект", script: "Кириллица" },
      en: { text: "aspect, features", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "gyeonmun",
    pos: "noun",
    romanization: "gyeonmun",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "ma’lumot, bilim; ko‘rib eshitganlar", script: "Latin" },
      ko: { text: "견문", script: "Korean" },
      ru: { text: "кругозор, осведомлённость", script: "Кириллица" },
      en: { text: "knowledge (seen/heard)", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "paegi",
    pos: "noun",
    romanization: "paegi",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "kuchli xohish, ambitsiya", script: "Latin" },
      ko: { text: "패기", script: "Korean" },
      ru: { text: "задор, амбиция", script: "Кириллица" },
      en: { text: "spirit, ambition", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "jiban",
    pos: "noun",
    romanization: "jiban",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "yer usti; asos, poydevor", script: "Latin" },
      ko: { text: "지반", script: "Korean" },
      ru: { text: "грунт; основание", script: "Кириллица" },
      en: { text: "ground; foundation", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "sokseong",
    pos: "noun",
    romanization: "sokseong",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "o‘ziga xos xususiyat", script: "Latin" },
      ko: { text: "속성", script: "Korean" },
      ru: { text: "свойство, атрибут", script: "Кириллица" },
      en: { text: "attribute, property", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "ttorae",
    pos: "noun",
    romanization: "ttorae",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "tengdosh", script: "Latin" },
      ko: { text: "또래", script: "Korean" },
      ru: { text: "ровесник", script: "Кириллица" },
      en: { text: "peer", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "didimdol",
    pos: "noun",
    romanization: "didim-dol",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "tayanch, tramplin", script: "Latin" },
      ko: { text: "디딤돌", script: "Korean" },
      ru: { text: "ступень; трамплин", script: "Кириллица" },
      en: { text: "stepping stone", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "seonghyang",
    pos: "noun",
    romanization: "seonghyang",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "moyillik, tendensiya", script: "Latin" },
      ko: { text: "성향", script: "Korean" },
      ru: { text: "склонность", script: "Кириллица" },
      en: { text: "tendency, inclination", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "chejeung",
    pos: "noun",
    romanization: "chejeung",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "tirbandlik; hazm bo‘lmaslik", script: "Latin" },
      ko: { text: "체증", script: "Korean" },
      ru: { text: "пробка; несварение", script: "Кириллица" },
      en: { text: "traffic jam; indigestion", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "gyeolshil",
    pos: "noun",
    romanization: "gyeolshil (hada)",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "meva; samara (bermoq)", script: "Latin" },
      ko: { text: "결실(하다)", script: "Korean" },
      ru: { text: "плоды; приносить плоды", script: "Кириллица" },
      en: { text: "fruition; bear fruit", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "malmun-eul-yeolda",
    pos: "verb",
    romanization: "malmun-eul yeolda",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "gap ochmoq", script: "Latin" },
      ko: { text: "말문을 열다", script: "Korean" },
      ru: { text: "заговорить (открыть рот)", script: "Кириллица" },
      en: { text: "to break the ice; start talking", script: "Latin" },
    },
    samples: [],
  },
  {
    id: "sinbi",
    pos: "noun",
    romanization: "sinbi",
    tags: ["TOPIK", "6차"],
    words: {
      uz: { text: "sir-sinoat", script: "Latin" },
      ko: { text: "신비", script: "Korean" },
      ru: { text: "тайна, мистика", script: "Кириллица" },
      en: { text: "mystery", script: "Latin" },
    },
     samples: [],
  }
];
