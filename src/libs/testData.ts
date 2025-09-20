import type { TestPack } from "./testTypes";

// Demo savollar (real loyihada backenddan olasan)
export const TESTS: TestPack[] = [
  {
  id: "t_topik_vocab_daily_beg_hardA",
  title: "Leksika — kundalik so‘zlar (TOPIK I, Hard)",
  category: "TOPIK",
  topic: "Vocabulary",
  level: "Boshlang'ich",
  durationSec: 10 * 60,
  questions: [
    {
      id: "q1",
      stem: "‘약국’ so‘zining ma’nosi qaysi?",
      options: [
        { id: "a", text: "Dorixona" },
        { id: "b", text: "Kasxona" },
        { id: "c", text: "Do‘kon" },
        { id: "d", text: "Kutubxona" }
      ],
      correctId: "a",
      explanation: "약국 — dorixona (dori-darmon sotiladi).",
      tags: ["TOPIK I", "Places"]
    },
    {
      id: "q2",
      stem: "‘지하철’ qaysi transport?",
      options: [
        { id: "a", text: "Avtobus" },
        { id: "b", text: "Taksi" },
        { id: "c", text: "Metro" },
        { id: "d", text: "Poyezd (shaharlararo)" }
      ],
      correctId: "c",
      explanation: "지하철 — metro (yer osti temiryo‘li).",
      tags: ["Transport", "Vocabulary"]
    },
    {
      id: "q3",
      stem: "‘고향’ nimani bildiradi?",
      options: [
        { id: "a", text: "Ish joyi" },
        { id: "b", text: "Tug‘ilgan yurt/shahar" },
        { id: "c", text: "Sayohat" },
        { id: "d", text: "Dam olish" }
      ],
      correctId: "b",
      explanation: "고향 — tug‘ilib o‘sgan joy (ona yurt).",
      tags: ["People&Life"]
    },
    {
      id: "q4",
      stem: "‘회사원’ kim?",
      options: [
        { id: "a", text: "Talaba" },
        { id: "b", text: "Ofis xodimi" },
        { id: "c", text: "Shifokor" },
        { id: "d", text: "Haydovchi" }
      ],
      correctId: "b",
      explanation: "회사원 — ofis/kompaniya xodimi.",
      tags: ["Jobs"]
    },
    {
      id: "q5",
      stem: "‘영수증’을 qachon olasiz?",
      options: [
        { id: "a", text: "Ovqat tayyorlaganda" },
        { id: "b", text: "Pul to‘laganda (kvitansiya)" },
        { id: "c", text: "Kasal bo‘lganda" },
        { id: "d", text: "Sayohatda" }
      ],
      correctId: "b",
      explanation: "영수증 — to‘lov cheki/kvitansiya.",
      tags: ["Shopping"]
    },
    {
      id: "q6",
      stem: "‘오늘 회의가 있어서 회사에 일찍 가요.’ to‘g‘ri tarjimani tanlang.",
      options: [
        { id: "a", text: "Bugun uchrashuv yo‘q, kech boraman." },
        { id: "b", text: "Bugun yig‘ilish bor, kompaniyaga erta boraman." },
        { id: "c", text: "Bugun ish yo‘q, uyda qolaman." },
        { id: "d", text: "Bugun mehmon kutaman, shuning uchun kech boraman." }
      ],
      correctId: "b",
      explanation: "회의가 있어서 — ‘yig‘ilish bo‘lgani uchun’.",
      tags: ["SentenceMeaning"]
    },
    {
      id: "q7",
      stem: "Bankda pulni naqd yechish — qaysi fe’l bilan?",
      options: [
        { id: "a", text: "돈을 바꾸다 (almashtirmoq)" },
        { id: "b", text: "돈을 빌리다 (qarz olmoq)" },
        { id: "c", text: "돈을 찾다 (yechib olmoq)" },
        { id: "d", text: "돈을 열다 (ochmoq)" }
      ],
      correctId: "c",
      explanation: "돈을 찾다 — bankomatdan/kassadan naqd yechish.",
      tags: ["Bank", "Collocation"]
    },
    {
      id: "q8",
      stem: "Bo‘shliqni to‘ldiring: ‘배가 고파서 ___에 갔어요.’",
      options: [
        { id: "a", text: "병원" },
        { id: "b", text: "식당" },
        { id: "c", text: "공항" },
        { id: "d", text: "공원" }
      ],
      correctId: "b",
      explanation: "Och qolganda odatda 식당 (ovqatlanish joyi) ga boriladi.",
      tags: ["Places", "Context"]
    },
    {
      id: "q9",
      stem: "‘할인/세일’ ma’nosi qaysi?",
      options: [
        { id: "a", text: "Bepul" },
        { id: "b", text: "Chegirma" },
        { id: "c", text: "Soliq" },
        { id: "d", text: "Buyurtma" }
      ],
      correctId: "b",
      explanation: "할인/세일 — ‘chegirma/sotuv’.",
      tags: ["Shopping"]
    },
    {
      id: "q10",
      stem: "‘현금’ nimani anglatadi?",
      options: [
        { id: "a", text: "Naqd pul" },
        { id: "b", text: "Kredit karta" },
        { id: "c", text: "Hisob raqami" },
        { id: "d", text: "Bank filiali" }
      ],
      correctId: "a",
      explanation: "현금 — ‘naqd pul’; 카드 — ‘karta’.",
      tags: ["Money"]
    },
    {
      id: "q11",
      stem: "‘요즘’ so‘zining ma’nosi qaysi?",
      options: [
        { id: "a", text: "Kecha" },
        { id: "b", text: "Hozir" },
        { id: "c", text: "Bugun" },
        { id: "d", text: "Hozirgi kunlarda" }
      ],
      correctId: "d",
      explanation: "요즘 — ‘so‘nggi paytlarda/hozirgi kunlarda’.",
      tags: ["Adverbs", "Time"]
    },
    {
      id: "q12",
      stem: "Do‘kondagi yozuv: ‘영업시간 10:00–20:00 (휴무: 화요일)’. Qaysi kuni yopiq?",
      options: [
        { id: "a", text: "Dushanba" },
        { id: "b", text: "Seshanba" },
        { id: "c", text: "Payshanba" },
        { id: "d", text: "Yakshanba" }
      ],
      correctId: "b",
      explanation: "화요일 — seshanba; 휴무 — yopiq/ishlamaydi.",
      tags: ["Signs", "Days"]
    },
    {
      id: "q13",
      stem: "‘출구’ degani?",
      options: [
        { id: "a", text: "Kirish" },
        { id: "b", text: "Chiqish" },
        { id: "c", text: "Liftdan foydalanish" },
        { id: "d", text: "Kassa" }
      ],
      correctId: "b",
      explanation: "출구 — chiqish (kirish — 입구).",
      tags: ["PublicPlaces"]
    },
    {
      id: "q14",
      stem: "Wi-Fi ‘무료’ — bu nimani anglatadi?",
      options: [
        { id: "a", text: "Bepul" },
        { id: "b", text: "Pullik" },
        { id: "c", text: "Tez" },
        { id: "d", text: "Cheklangan" }
      ],
      correctId: "a",
      explanation: "무료 — bepul; 유료 — pullik.",
      tags: ["Signs", "Services"]
    },
    {
      id: "q15",
      stem: "‘예약하다’ bilan tabiiy juftlik qaysi?",
      options: [
        { id: "a", text: "호텔을 예약하다" },
        { id: "b", text: "영수증을 예약하다" },
        { id: "c", text: "지갑을 예약하다" },
        { id: "d", text: "시장를 예약하다" }
      ],
      correctId: "a",
      explanation: "예약하다 (band qilish) — 호텔/식당/좌석 bilan tabiiy keladi.",
      tags: ["Collocation"]
    }
  ]
},

{
id: "t_topik_grammar_eun_neun_vs_iga_hard",
title: "Grammatika — 은/는 va 이/가 (murakkab qo‘llanishlar)",
category: "TOPIK",
topic: "Grammar",
level: "O'rta 1",
durationSec: 12 * 60,
questions: [
{
id: "q1",
stem: "Bo‘shliqni to‘ldiring: 지금 가장 필요한 것___ 시간이에요. (umumiy mavzu/ta’kid)",
options: [
{ id: "a", text: "이" },
{ id: "b", text: "가" },
{ id: "c", text: "은" },
{ id: "d", text: "는" }
],
correctId: "c",
explanation: "‘…것은’ — mavzuga ajratish: 필요한 것은 ‘은/는’."
},
{
      id: "q1",
      stem: "‘문구점’ so‘zining ma’nosi qaysi?",
      options: [
        { id: "a", text: "Kanselyariya do‘koni" },
        { id: "b", text: "Go‘sht do‘koni" },
        { id: "c", text: "Sabzavot bozori" },
        { id: "d", text: "Elektr jihozlari do‘koni" }
      ],
      correctId: "a",
      explanation: "문구점 — ruchka, daftarlarga o‘xshash buyumlar sotiladigan do‘kon.",
      tags: ["Places", "Shopping"]
    },
    {
      id: "q2",
      stem: "‘세탁소’ qaysi joy?",
      options: [
        { id: "a", text: "Kir yuvish shoxobchasi" },
        { id: "b", text: "Do‘stlar klubi" },
        { id: "c", text: "Pochta bo‘limi" },
        { id: "d", text: "Foto studiysi" }
      ],
      correctId: "a",
      explanation: "세탁소 — kiyim yuvish/kimyoviy tozalash joyi.",
      tags: ["Places"]
    },
    {
      id: "q3",
      stem: "‘교통카드’를 qayerda ko‘proq ishlatasiz?",
      options: [
        { id: "a", text: "Restoranda" },
        { id: "b", text: "Jamoat transportida" },
        { id: "c", text: "Dorixonada" },
        { id: "d", text: "Kutubxonada" }
      ],
      correctId: "b",
      explanation: "교통카드 — avtobus, metro va hokazo uchun to‘lov kartasi.",
      tags: ["Transport", "Money"]
    },
    {
      id: "q4",
      stem: "‘영업중’ yozuvi nimani bildiradi?",
      options: [
        { id: "a", text: "Ta’mirda" },
        { id: "b", text: "Hozir yopiq" },
        { id: "c", text: "Ish bormoqda (ochiq)" },
        { id: "d", text: "Kirish taqiqlanadi" }
      ],
      correctId: "c",
      explanation: "영업중 — hozir ishlab/ochiq; ‘준비중’ — tayyorgarlik ko‘rilmoqda.",
      tags: ["Signs"]
    },
    {
      id: "q5",
      stem: "‘가격’을 qaysi savol bilan so‘raysiz?",
      options: [
        { id: "a", text: "몇 시예요?" },
        { id: "b", text: "어디에 있어요?" },
        { id: "c", text: "얼마예요?" },
        { id: "d", text: "누구예요?" }
      ],
      correctId: "c",
      explanation: "얼마예요? — ‘necha pul/qiymati qancha?’",
      tags: ["Shopping", "Expressions"]
    },
    {
      id: "q6",
      stem: "Bo‘shliqni to‘ldiring: ‘감기에 걸려서 ___에 갔어요.’",
      options: [
        { id: "a", text: "미용실" },
        { id: "b", text: "병원" },
        { id: "c", text: "우체국" },
        { id: "d", text: "경찰서" }
      ],
      correctId: "b",
      explanation: "감기에 걸리다 — shamollab qolmoq; odatda 병원 (shifoxona) ga boriladi.",
      tags: ["Context", "Health"]
    },
    {
      id: "q7",
      stem: "‘편의점’da quyidagilardan qaysi biri odatda BOR?",
      options: [
        { id: "a", text: "Bankomat va atrofdagi mayda oziq-ovqat" },
        { id: "b", text: "Gigant mebel bo‘limi" },
        { id: "c", text: "Traktor ijarasi" },
        { id: "d", text: "Katta oshxona jihozlari" }
      ],
      correctId: "a",
      explanation: "편의점 — 24/7 qulaylik do‘koni: ichimlik, tamaddi, ba’zan ATM.",
      tags: ["Places", "DailyLife"]
    },
    {
      id: "q8",
      stem: "‘교환하다’ fe’li qaysi vaziyatda mos?",
      options: [
        { id: "a", text: "Taom buyurtma qilish" },
        { id: "b", text: "Noto‘g‘ri o‘lchamdagi kiyimni almashtirish" },
        { id: "c", text: "Do‘st bilan uchrashish" },
        { id: "d", text: "Sayohat rejasini tuzish" }
      ],
      correctId: "b",
      explanation: "교환하다 — tovarni boshqasiga almashtirmoq; 환불하다 — pulni qaytartirmoq.",
      tags: ["Shopping", "Collocation"]
    },
    {
      id: "q9",
      stem: "‘반찬’ nimani anglatadi?",
      options: [
        { id: "a", text: "Asosiy taom (밥)" },
        { id: "b", text: "Ichimlik" },
        { id: "c", text: "Garnir/yordamchi taomlar" },
        { id: "d", text: "Shirinlik" }
      ],
      correctId: "c",
      explanation: "반찬 — kichik likopchalarda beriladigan qo‘shimcha taomlar.",
      tags: ["Food"]
    },
    {
      id: "q10",
      stem: "‘현금영수증’을 qachon so‘rash foydali?",
      options: [
        { id: "a", text: "Soliq imtiyozlari uchun xaridni qayd etishda" },
        { id: "b", text: "Metro bekatini topishda" },
        { id: "c", text: "Viza olishda" },
        { id: "d", text: "Uyga ko‘chishda" }
      ],
      correctId: "a",
      explanation: "현금영수증 — naqd to‘lov kvitansiyasi soliq hisobida foydali bo‘lishi mumkin.",
      tags: ["Money", "Shopping"]
    },
    {
      id: "q11",
      stem: "‘직장 동료’ kim bo‘ladi?",
      options: [
        { id: "a", text: "Qo‘shni" },
        { id: "b", text: "Sinfdosh" },
        { id: "c", text: "Hamkasb" },
        { id: "d", text: "O‘qituvchi" }
      ],
      correctId: "c",
      explanation: "직장 — ish joyi; 동료 — hamkasb.",
      tags: ["Jobs", "People&Life"]
    },
    {
      id: "q12",
      stem: "‘예약금’을 ko‘proq qaysi holatda to‘laysiz?",
      options: [
        { id: "a", text: "Taksi to‘lovi" },
        { id: "b", text: "Mehmonxona xonasini band qilishda oldindan to‘lov" },
        { id: "c", text: "Metro chiptasi" },
        { id: "d", text: "Sabzavot bozori" }
      ],
      correctId: "b",
      explanation: "예약금 — band qilish uchun oldindan to‘lanadigan qism.",
      tags: ["Travel", "Money"]
    },
    {
      id: "q13",
      stem: "‘분리수거’ yozuvi nimaga tegishli?",
      options: [
        { id: "a", text: "Tibbiy xizmat" },
        { id: "b", text: "Axlatni turiga ko‘ra ajratib tashlash" },
        { id: "c", text: "Ijaraga berish" },
        { id: "d", text: "Yo‘llanma chiptasi" }
      ],
      correctId: "b",
      explanation: "분리수거 — chiqindini qog‘oz, shisha, plastik va hk. bo‘yicha ajratish.",
      tags: ["DailyLife", "Signs"]
    },
    {
      id: "q14",
      stem: "To‘g‘ri tarjimani tanlang: ‘오늘은 공휴일이라 은행이 문을 닫았어요.’",
      options: [
        { id: "a", text: "Bugun ish kuni, bank ochiq." },
        { id: "b", text: "Bugun dam olish kuni, bank yopiq." },
        { id: "c", text: "Bugun tun bo‘yi ochiq." },
        { id: "d", text: "Bugun dushanba, bank ochiq." }
      ],
      correctId: "b",
      explanation: "공휴일 — davlat/bayonoma kuni; 문을 닫다 — yopiq bo‘lmoq.",
      tags: ["SentenceMeaning", "Time"]
    },
    {
      id: "q15",
      stem: "‘기침이 심해서 약을 ___.’ bo‘shliqni to‘ldiring.",
      options: [
        { id: "a", text: "찍어요 (suratga olmoq)" },
        { id: "b", text: "읽어요 (o‘qimoq)" },
        { id: "c", text: "먹어요 (ichmoq/ichib qabul qilmoq)" },
        { id: "d", text: "놀아요 (o‘ynamoq)" }
      ],
      correctId: "c",
      explanation: "약을 먹다 — dori ichmoq/qabul qilmoq.",
      tags: ["Health", "GrammarCollocation"]
    },
{
id: "q2",
stem: "Bo‘shliqni to‘ldiring: 교실에 학생___ 많아요. (있다/없다 bilan ko‘pincha subyekt ko‘rsatkichi)",
options: [
{ id: "a", text: "은" },
{ id: "b", text: "는" },
{ id: "c", text: "이" },
{ id: "d", text: "가" }
],
correctId: "c",
explanation: "‘…이/가 많다/있다’ — subyektni belgilaydi: 학생이 많아요."
},
{
id: "q3",
stem: "Savolga mos javobni tanlang: ‘누가 문을 열었어요?’ (eksklyuziv ‘kim’ javobi)",
options: [
{ id: "a", text: "민수는 열었어요." },
{ id: "b", text: "문은 열렸어요." },
{ id: "c", text: "민수도 열었어요." },
{ id: "d", text: "민수가 열었어요." }
],
correctId: "d",
explanation: "‘누가?’ — yangi ma’lumotga fokus: ‘민수가 …’."
},
{
id: "q4",
stem: "Bo‘shliqni to‘ldiring: 오늘___ 회의가 없어요. (kontrastli vaqt mavzusi)",
options: [
{ id: "a", text: "이" },
{ id: "b", text: "가" },
{ id: "c", text: "은" },
{ id: "d", text: "는" }
],
correctId: "d",
explanation: "‘Bugun’ mavzuga chiqarilyapti: 오늘은 … 없어요."
},
{
id: "q5",
stem: "‘Menda KITOB bor’ — yangi ma’lumotni urg‘ulaydigan tabiiy variantni tanlang.",
options: [
{ id: "a", text: "저는 책은 있어요." },
{ id: "b", text: "저는 책이 있어요." },
{ id: "c", text: "저는 책만 있어요." },
{ id: "d", text: "저는 책도 있어요." }
],
correctId: "b",
explanation: "Yangi subyekt/ob’yektga fokus: 책이 있어요 (은/는 kontrast beradi)."
},
{
id: "q6",
stem: "Savol–javob muvofiqligi: ‘누가 한국어를 제일 잘해요?’ — qaysi javob tabiiy?",
options: [
{ id: "a", text: "민수는 제일 잘해요." },
{ id: "b", text: "민수가 제일 잘해요." },
{ id: "c", text: "민수의 제일 잘해요." },
{ id: "d", text: "민수만 제일 잘해요." }
],
correctId: "b",
explanation: "‘누가?’ → ‘N이가 …’ eksklyuziv javob: 민수가 …"
},
{
id: "q7",
stem: "Bo‘shliqni to‘ldiring: 제가 어제 만난 사람___ 의사예요. (ta’rif mavzuga qo‘yilmoqda)",
options: [
{ id: "a", text: "이" },
{ id: "b", text: "가" },
{ id: "c", text: "은" },
{ id: "d", text: "는" }
],
correctId: "d",
explanation: "Referent allaqachon aniqlangan (‘어제 만난 사람’) → mavzu: 사람은 …"
},
{
id: "q8",
stem: "Bo‘shliqni to‘ldiring: 문제는 가격___ 아니라 품질이에요. (N ___ 아니다 konstruktsiyasi)",
options: [
{ id: "a", text: "은" },
{ id: "b", text: "는" },
{ id: "c", text: "이" },
{ id: "d", text: "가" }
],
correctId: "d",
explanation: "‘…이/가 아니다’ — predikativ inkor: 가격이 아니라 …"
},
{
id: "q9",
stem: "Bo‘shliqni to‘ldiring: 교실에 컴퓨터___ 없어요. (mavjud emas — subyekt markeri)",
options: [
{ id: "a", text: "은" },
{ id: "b", text: "는" },
{ id: "c", text: "이" },
{ id: "d", text: "가" }
],
correctId: "c",
explanation: "있다/없다 bilan ‘이/가’: 컴퓨터가 없어요."
},
{
id: "q10",
stem: "Bo‘shliqni to‘ldiring: 민수___ 왔고 지수는 안 왔어요. (kontrastni ko‘rsatish)",
options: [
{ id: "a", text: "이" },
{ id: "b", text: "가" },
{ id: "c", text: "은" },
{ id: "d", text: "는" }
],
correctId: "d",
explanation: "Ikki shaxsni qarama-qarshi qo‘yish: ‘…는 …, …는 …’."
},
{
id: "q11",
stem: "Bo‘shliqni to‘ldiring: 중요한 것은 속도___ 아니라 방향이에요. (N ___ 아니다)",
options: [
{ id: "a", text: "은" },
{ id: "b", text: "는" },
{ id: "c", text: "이" },
{ id: "d", text: "가" }
],
correctId: "d",
explanation: "‘속도가 아니다’ — subyekt ko‘rsatkichi ‘가’."
},
{
id: "q12",
stem: "Umumiy haqiqat ifodasi uchun tabiiy variantni tanlang: “Suv 100°C da qaynaydi.”",
options: [
{ id: "a", text: "물이 100도에서 끓어요." },
{ id: "b", text: "물은 100도에서 끓어요." },
{ id: "c", text: "물의 100도에서 끓어요." },
{ id: "d", text: "물만 100도에서 끓어요." }
],
correctId: "b",
explanation: "Umumiy ta’rif/haqiqat — mavzuga ajratish: ‘물은 …’."
}
]
},
{
id: "t_topik_reading_short_set2",
title: "O‘qish — qisqa matnni tushunish (Set 2)",
category: "TOPIK",
topic: "Reading",
level: "O'rta 2",
durationSec: 12 * 60,
questions: [
{
id: "q1",
stem:
"⟪Matn A⟫\n다음 주 월요일(10월 14일)부터 도서관 2층 열람실이 공사로 인해 임시 폐쇄됩니다. 이용을 원하시는 분은 3층 멀티미디어실을 이용해 주시기 바랍니다. 공사 기간: 10월 14일(월)~10월 20일(일). 문의: 02-123-4567.\n\nMatn A ning asosiy mazmuni qaysi?",
options: [
{ id: "a", text: "Yangi kitoblar ko‘rgazmasi bo‘lib o‘tadi" },
{ id: "b", text: "2-qavat o‘quv zali vaqtincha yopiladi" },
{ id: "c", text: "Kutubxona butunlay ko‘chiriladi" },
{ id: "d", text: "3-qavat doimiy ravishda yopiq" }
],
correctId: "b",
explanation: "“2층 열람실… 임시 폐쇄” — vaqtincha yopilish e’lon qilingan."
},
{
id: "q2",
stem: "Matn A bo‘yicha yopilish sanalari qaysi oraliqda?",
options: [
{ id: "a", text: "10/13–10/19" },
{ id: "b", text: "10/14–10/20" },
{ id: "c", text: "10/14 kunigina" },
{ id: "d", text: "10/20 dan boshlab nomalum" }
],
correctId: "b",
explanation: "“공사 기간: 10월 14일~10월 20일”."
},
{
id: "q3",
stem: "Matn A: 2-qavat yopiq bo‘lsa, qayerdan foydalanish kerak?",
options: [
{ id: "a", text: "1-qavat o‘quv zali" },
{ id: "b", text: "3-qavat multimedia xonasi" },
{ id: "c", text: "Kutubxona hovlisi" },
{ id: "d", text: "Onlayn kutubxona" }
],
correctId: "b",
explanation: "“3층 멀티미디어실을 이용해 주시기 바랍니다.”"
},
{
id: "q4",
stem: "Matn A: bog‘lanish uchun telefon raqami qaysi?",
options: [
{ id: "a", text: "02-123-4567" },
{ id: "b", text: "010-1234-5678" },
{ id: "c", text: "02-765-4321" },
{ id: "d", text: "1588-0000" }
],
correctId: "a",
explanation: "“문의: 02-123-4567.”"
},
{
id: "q5",
stem:
"⟪Matn B⟫\n안녕하세요. 이번 주 토요일 오후 2시에 한국어 말하기 스터디를 합니다. 장소는 신촌 카페 모모(2층)입니다. 지각하시는 분은 미리 톡으로 알려 주세요. 준비물: 자기소개 1분, 최근 읽은 기사 요약.\n\nMatn B janri qaysi?",
options: [
{ id: "a", text: "Rasmiy e’lon" },
{ id: "b", text: "Shaxsiy xat" },
{ id: "c", text: "Guruhga xabar / e’lon" },
{ id: "d", text: "Mahsulot reklama" }
],
correctId: "c",
explanation: "Vaqt–joy–tayyorgarlik ro‘yxati bilan guruhga qaratilgan xabar."
},
{
id: "q6",
stem: "Matn B: kechiksangiz nima qilishingiz kerak?",
options: [
{ id: "a", text: "O‘qituvchiga qo‘ng‘iroq qilish" },
{ id: "b", text: "Oldindan ‘톡’ orqali xabar berish" },
{ id: "c", text: "Hech narsa qilmaslik" },
{ id: "d", text: "Email yuborish" }
],
correctId: "b",
explanation: "“지각하시는 분은 미리 톡으로 알려 주세요.”"
},
{
id: "q7",
stem: "Matn B bo‘yicha tayyorgarlik ro‘yxatini aniqlang.",
options: [
{ id: "a", text: "1 daqiqa o‘zini tanishtirish va yaqinda o‘qigan maqola qisqacha" },
{ id: "b", text: "TOPIK II esse va 10 ta savol" },
{ id: "c", text: "Slaydlar va ovoz yozuvi" },
{ id: "d", text: "Kitob taqdimoti va anketa" }
],
correctId: "a",
explanation: "“준비물: 자기소개 1분, 최근 읽은 기사 요약.”"
},
{
id: "q8",
stem:
"⟪Matn C⟫\n이 제품은 가벼워서 들고 다니기 편하지만 배터리가 빨리 닳습니다. 가격을 생각하면 무난하지만, 장시간 사용을 원하는 분께는 추천하지 않습니다.\n\nMatn C dan qaysi xulosa to‘g‘ri?",
options: [
{ id: "a", text: "Og‘ir, lekin batareyasi zo‘r" },
{ id: "b", text: "Yengil va qulay, ammo batareya tez tugaydi" },
{ id: "c", text: "Arzon va uzoq muddat ishlaydi" },
{ id: "d", text: "Barchaga kuchli tavsiya etilgan" }
],
correctId: "b",
explanation: "Birinchi jumla shu mazmunni beradi; oxirida ‘장시간 … 추천 X’."
},
{
id: "q9",
stem: "Matn C uchun eng mos sarlavha qaysi?",
options: [
{ id: "a", text: "Batareyasi eng kuchli qurilma" },
{ id: "b", text: "Uzoq foydalanish uchun ideal tanlov" },
{ id: "c", text: "Yengil qurilma: afzallik va kamchilik" },
{ id: "d", text: "Kafolat shartlari haqida" }
],
correctId: "c",
explanation: "Matn ijobiy (yengil) va salbiy (batareya) jihatlarni solishtiradi."
},
{
id: "q10",
stem: "Matn A qayerda uchrashi ehtimoli eng yuqori?",
options: [
{ id: "a", text: "Shaxsiy blog posti" },
{ id: "b", text: "Kutubxona devoridagi e’lon doskasi" },
{ id: "c", text: "Restoran menyusi" },
{ id: "d", text: "Mahsulot qadoqlash varaqasi" }
],
correctId: "b",
explanation: "E’lon janri, joy va muddat ko‘rsatilgan — jamoat e’loni."
}
]
},
 {
id: "t_worker_safety_basic",
title: "Ishchi xavfsizligi — asosiy qoidalar",
category: "ISHCHI",
topic: "Safety",
level: "O'rta 1",
durationSec: 10 * 60,
questions: [
{
id: "q1",
stem: "SIZO (PPE) to‘g‘ri ketma-ketlikda kiyilishi:",
options: [
{ id: "a", text: "Kaska → qo‘lqop → ko‘zoynak" },
{ id: "b", text: "Ko‘zoynak → kaska → qo‘lqop" },
{ id: "c", text: "Qo‘lqop → kaska → ko‘zoynak" },
{ id: "d", text: "Kaska → ko‘zoynak → qo‘lqop" }
],
correctId: "d",
explanation: "Avval bosh (kaska), so‘ng ko‘z (ko‘zoynak/niqob), keyin qo‘l (qo‘lqop)."
},
{
id: "q2",
stem: "Elektr jihozida ishlashdan oldin birinchi qadam?",
options: [
{ id: "a", text: "Ulanishni ko‘paytirish" },
{ id: "b", text: "Quvvatni uzish va lockout–tagout" },
{ id: "c", text: "Jihozni urib ko‘rish" },
{ id: "d", text: "Suv bilan yuvish" }
],
correctId: "b",
explanation: "LOTO — energiyani xavfsiz holatga keltirish va belgilash."
},
{
id: "q3",
stem: "Balandlikda ishlashda minimal talab etiladigan moslama qaysi?",
options: [
{ id: "a", text: "Yengil mato belbog‘" },
{ id: "b", text: "Fall-arrest tizimi (to‘xtatuvchi arqon/karabin)" },
{ id: "c", text: "Faqat qo‘lqop" },
{ id: "d", text: "Respirator" }
],
correctId: "b",
explanation: "Yiqlashni to‘xtatuvchi tizim va langar nuqtasi zarur."
},
{
id: "q4",
stem: "Narvonni devorga suyaganda xavfsiz qiyalik nisbatini tanlang:",
options: [
{ id: "a", text: "1:1 (balandlik:masofa)" },
{ id: "b", text: "2:1" },
{ id: "c", text: "4:1" },
{ id: "d", text: "8:1" }
],
correctId: "c",
explanation: "Taxminan 75° — har 4 birlik balandlikka 1 birlik pastga chekinish."
},

{
id: "q5",
stem: "Kimyoviy modda bilan ishlashdan AVVAL qaysi hujjatga murojaat qilinadi?",
options: [
{ id: "a", text: "Mahsulot reklama varaqasi" },
{ id: "b", text: "SDS (Xavfsizlik Ma’lumot Varag‘i)" },
{ id: "c", text: "Hisobot blankasi" },
{ id: "d", text: "Narx-navo ro‘yxati" }
],
correctId: "b",
explanation: "SDS (MSDS) — xavf sinfi, PPE, birinchi yordam, saqlash bo‘yicha ko‘rsatma."
},
{
id: "q6",
stem: "Confined space (cheklangan joy)ga kirishdan oldin qaysi kombinatsiya TO‘G‘RI?",
options: [
{ id: "a", text: "Faqat chiroq va qo‘lqop yetarli" },
{ id: "b", text: "Gaz tahlili + ruxsatnoma (permit) + kuzatuvchi (attendant)" },
{ id: "c", text: "Faqat respirator taqish" },
{ id: "d", text: "Faqat narvon va arqon" }
],
correctId: "b",
explanation: "Kirishdan oldin atmosfera testlari, ruxsat va tashqarida kuzatuvchi shart."
},
{
id: "q7",
stem: "Og‘ir yukni qo‘lda ko‘tarishda to‘g‘ri usul qaysi?",
options: [
{ id: "a", text: "Belni bukib, yelkadan tortib ko‘tarish" },
{ id: "b", text: "Tizzani bukib, yukni tanaga yaqin tutib, oyoq mushaklari bilan ko‘tarish" },
{ id: "c", text: "Yukni uzoqroqda ushlab ko‘tarish" },
{ id: "d", text: "Chap oyoqda turib, tanani burab ko‘tarish" }
],
correctId: "b",
explanation: "Orqa to‘g‘ri, yuk tanaga yaqin, burilishsiz — oyoq kuchi bilan."
},
{
id: "q8",
stem: "Yong‘in sinfi C (elektr yong‘ini) uchun mos o‘chirgich:",
options: [
{ id: "a", text: "Suv (A sinf)" },
{ id: "b", text: "Ko‘pikli (A/B)" },
{ id: "c", text: "Quruq kukun yoki CO₂" },
{ id: "d", text: "Yog‘ (F) uchun maxsus o‘chirgich" }
],
correctId: "c",
explanation: "Elektr yong‘inida suv/ko‘pikli ishlatilmaydi; CO₂ yoki dry-chemical mos."
},
{
id: "q9",
stem: "Shovqin darajasi yuqori bo‘lsa, birinchi navbatda qaysi chora ko‘riladi?",
options: [
{ id: "a", text: "Darhol faqat quloqchin berish" },
{ id: "b", text: "Muhandislik choralarini ko‘rib chiqish (izolyatsiya, manbani pasaytirish)" },
{ id: "c", text: "Ish vaqtini uzaytirish" },
{ id: "d", text: "Ishchini o‘sha joyda qoldirish" }
],
correctId: "b",
explanation: "Nazoratlar ierarxiyasi: avval muhandislik/ma’muriy choralar, so‘ng PPE."
},
{
id: "q10",
stem: "Kishi elektr tokiga ilinib qolganini ko‘rsangiz birinchi qilinadigan ish:",
options: [
{ id: "a", text: "Darhol qo‘li bilan tortib olish" },
{ id: "b", text: "Suv sepib qo‘yish" },
{ id: "c", text: "Quvvatni uzish yoki dielektrik moslama bilan ajratish" },
{ id: "d", text: "Telefonini olib suratga olish" }
],
correctId: "c",
explanation: "Avvalo manbani xavfsiz uzing; bevosita tegish xavfli."
}
]
},
{
  id: "t_topik_vocab_daily_beg_hardC",
  title: "Leksika — kundalik so‘zlar 3 (TOPIK I, Hard)",
  category: "TOPIK",
  topic: "Vocabulary",
  level: "Boshlang'ich",
  durationSec: 10 * 60,
  questions: [
    {
      id: "q1",
      stem: "‘우체국’ qaysi joy?",
      options: [
        { id: "a", text: "Pochta bo‘limi" },
        { id: "b", text: "Kutubxona" },
        { id: "c", text: "Kasxona" },
        { id: "d", text: "Stansiya" }
      ],
      correctId: "a",
      explanation: "우체국 — xat, posilka yuboriladigan joy.",
      tags: ["Places", "PostOffice"]
    },
    {
      id: "q2",
      stem: "‘보내다’ fe’li pochta kontekstida nimani anglatadi?",
      options: [
        { id: "a", text: "Qabul qilmoq" },
        { id: "b", text: "Yubormoq" },
        { id: "c", text: "Tayyorlamoq" },
        { id: "d", text: "O‘lchamoq" }
      ],
      correctId: "b",
      explanation: "소포/편지를 보내다 — posilka/xat yubormoq.",
      tags: ["PostOffice", "Verbs"]
    },
    {
      id: "q3",
      stem: "‘등기(우편)’ odatda nimaga ishora?",
      options: [
        { id: "a", text: "Oddiy yetkazish" },
        { id: "b", text: "Ro‘yxatga olingan (trackingli) pochta" },
        { id: "c", text: "Tezkor kuryer" },
        { id: "d", text: "Qadoqlash xizmati" }
      ],
      correctId: "b",
      explanation: "등기우편 — kuzatuv (tracking) bilan ro‘yxatdan o‘tkazilgan pochta.",
      tags: ["PostOffice"]
    },
    {
      id: "q4",
      stem: "‘통장’ va ‘카드’를 qayerda olasiz?",
      options: [
        { id: "a", text: "Do‘konda" },
        { id: "b", text: "Bankda" },
        { id: "c", text: "Aeroportda" },
        { id: "d", text: "Restoranda" }
      ],
      correctId: "b",
      explanation: "통장 — bank daftarchasi; karta ham bankdan olinadi.",
      tags: ["Bank", "Money"]
    },
    {
      id: "q5",
      stem: "‘환전하다’ nimani anglatadi?",
      options: [
        { id: "a", text: "Naqd yechmoq" },
        { id: "b", text: "Pulni almashtirmoq (valyuta)" },
        { id: "c", text: "Qarz bermoq" },
        { id: "d", text: "Hisobni yopmoq" }
      ],
      correctId: "b",
      explanation: "환전 — valyuta ayirboshlash.",
      tags: ["Bank", "Money"]
    },
    {
      id: "q6",
      stem: "Restoranda: ‘메뉴판 좀 주세요.’ so‘zining ma’nosi?",
      options: [
        { id: "a", text: "Hisobni bering." },
        { id: "b", text: "Suv bering." },
        { id: "c", text: "Menyuni bering, iltimos." },
        { id: "d", text: "Tuz bormi?" }
      ],
      correctId: "c",
      explanation: "메뉴판 — menyu; ‘좀 주세요’ — ‘iltimos, bering’.",
      tags: ["Restaurant", "Expressions"]
    },
    {
      id: "q7",
      stem: "‘포장해 주세요’ qaysi vaziyatda aytiladi?",
      options: [
        { id: "a", text: "Joyida yemoqchi bo‘lsa" },
        { id: "b", text: "Uyga olib ketmoqchi bo‘lsa (take-out)" },
        { id: "c", text: "Rezerv qilmoqchi bo‘lsa" },
        { id: "d", text: "Hisobni bo‘lib to‘lamoqchi bo‘lsa" }
      ],
      correctId: "b",
      explanation: "포장 — o‘rab berish, olib ketish uchun.",
      tags: ["Restaurant", "DailyLife"]
    },
    {
      id: "q8",
      stem: "‘맛이 어때요?’ savolining mos javobi qaysi?",
      options: [
        { id: "a", text: "두 명이요." },
        { id: "b", text: "아주 맛있어요!" },
        { id: "c", text: "카드로요." },
        { id: "d", text: "세 시예요." }
      ],
      correctId: "b",
      explanation: "‘맛이 어때요?’ — ta’mi qanday? ‘아주 맛있어요!’ — juda mazali.",
      tags: ["Restaurant", "Dialogue"]
    },
    {
      id: "q9",
      stem: "‘영업시간’을 ko‘pincha qayerda ko‘rasiz?",
      options: [
        { id: "a", text: "Do‘kon/restoran eshigi yaqinida" },
        { id: "b", text: "Metro spikeri e’loni" },
        { id: "c", text: "Shaxsiy telefon sozlamasi" },
        { id: "d", text: "Dori qutisi ustida" }
      ],
      correctId: "a",
      explanation: "영업시간 — ish vaqti; kiraverishda yoziladi.",
      tags: ["Signs", "Shopping"]
    },
    {
      id: "q10",
      stem: "‘휴대폰 요금제’를 nimaga tegishli deb tushunasiz?",
      options: [
        { id: "a", text: "Telefon tarifi/rejasi" },
        { id: "b", text: "Bank foizi" },
        { id: "c", text: "Do‘kon chegirmasi" },
        { id: "d", text: "Ovqat menyusi" }
      ],
      correctId: "a",
      explanation: "요금제 — xizmat uchun to‘lov rejasi (masalan, mobil aloqa).",
      tags: ["Services", "DailyLife"]
    },
    {
      id: "q11",
      stem: "‘계좌이체’ nimani bildiradi?",
      options: [
        { id: "a", text: "Naqd to‘lov" },
        { id: "b", text: "Kartadan kartaga to‘lov" },
        { id: "c", text: "Bank hisobidan hisobga o‘tkazma" },
        { id: "d", text: "Kvitansiyani bosib chiqarish" }
      ],
      correctId: "c",
      explanation: "계좌 — hisob raqami; 이체 — o‘tkazma.",
      tags: ["Bank", "Money"]
    },
    {
      id: "q12",
      stem: "‘상품권’을 qayerda ishlatish mumkin?",
      options: [
        { id: "a", text: "Sovg‘a sertifikati sifatida do‘konda" },
        { id: "b", text: "Passport nazoratida" },
        { id: "c", text: "Bank kassasida valyuta almashtirish" },
        { id: "d", text: "Pochta indeksini aniqlash" }
      ],
      correctId: "a",
      explanation: "상품권 — gift card/sovg‘a sertifikati.",
      tags: ["Shopping", "Money"]
    },
    {
      id: "q13",
      stem: "To‘g‘ri tarjimani tanlang: ‘비가 와서 우산을 샀어요.’",
      options: [
        { id: "a", text: "Qor yog‘gani uchun qo‘lqop sotib oldim." },
        { id: "b", text: "Yomg‘ir yog‘gani uchun soyabon sotib oldim." },
        { id: "c", text: "Issiq bo‘lgani uchun suv ichdim." },
        { id: "d", text: "Shamol bo‘lgani uchun derazani yopdim." }
      ],
      correctId: "b",
      explanation: "우산 — soyabon; 비가 와서 — yomg‘ir yog‘gani uchun.",
      tags: ["SentenceMeaning", "Weather"]
    },
    {
      id: "q14",
      stem: "‘길이 막혀서 늦었어요.’ jumlasidagi muammo nima?",
      options: [
        { id: "a", text: "Yo‘l yopiq (tiqilinch), shuning uchun kech qoldim." },
        { id: "b", text: "Metro ishlamayapti, shuning uchun erta keldim." },
        { id: "c", text: "Ob-havo issiq, shuning uchun kech qoldim." },
        { id: "d", text: "Non tugadi, shuning uchun erta bordim." }
      ],
      correctId: "a",
      explanation: "길이 막히다 — yo‘lda tirbandlik/tiqilinch bo‘lishi.",
      tags: ["DailyLife", "Transport"]
    },
    {
      id: "q15",
      stem: "‘현금만 받아요’ yozuvini qayerda uchratishingiz mumkin?",
      options: [
        { id: "a", text: "Faqat naqd qabul qiladigan kichik kafe/do‘kon" },
        { id: "b", text: "Bankomatda" },
        { id: "c", text: "Metro bekatida" },
        { id: "d", text: "Poliklinikada navbatxona" }
      ],
      correctId: "a",
      explanation: "‘현금만’ — faqat naqd; kartani olmaydi.",
      tags: ["Signs", "Shopping"]
    }
  ]
},
{
  id: "t_topik_vocab_daily_beg_hardD",
  title: "Leksika — kundalik so‘zlar 4 (TOPIK I, Hard)",
  category: "TOPIK",
  topic: "Vocabulary",
  level: "Boshlang'ich",
  durationSec: 10 * 60,
  questions: [
    {
      id: "q1",
      stem: "‘지하도’ nimani anglatadi?",
      options: [
        { id: "a", text: "Yerosti yo‘lak (piyodalar o‘tish joyi)" },
        { id: "b", text: "Yo‘l chetida to‘xtash joyi" },
        { id: "c", text: "Avtoturargoh" },
        { id: "d", text: "Yo‘l belgisi" }
      ],
      correctId: "a",
      explanation: "지하도 — yer ostidagi piyodalar yo‘lagi.",
      tags: ["Transport", "Places"]
    },
    {
      id: "q2",
      stem: "‘횡단보도에서 신호를 기다리세요.’ to‘g‘ri ma’no qaysi?",
      options: [
        { id: "a", text: "Piyodalar yo‘lagida chiptani oling." },
        { id: "b", text: "Piyodalar yo‘lagida signaldan (chiroqdan) kuting." },
        { id: "c", text: "Bekatda navbat kuting." },
        { id: "d", text: "Yo‘lni darhol kesib o‘ting." }
      ],
      correctId: "b",
      explanation: "횡단보도 — piyodalar o‘tish joyi; 신호 — svetofor signali.",
      tags: ["Transport", "Signs", "SentenceMeaning"]
    },
    {
      id: "q3",
      stem: "‘갈아타다’ ko‘proq qaysi holatda ishlatiladi?",
      options: [
        { id: "a", text: "Taomni almashtirishda" },
        { id: "b", text: "Transportni almashtirib chiqishda (transfer)" },
        { id: "c", text: "Do‘stni almashtirishda" },
        { id: "d", text: "Ish joyini almashtirishda" }
      ],
      correctId: "b",
      explanation: "지하철/버스 갈아타다 — metro/busni almashtirib chiqmoq.",
      tags: ["Transport", "Verbs"]
    },
    {
      id: "q4",
      stem: "‘출근 시간’ va ‘퇴근 시간’ mos juftligi qaysi?",
      options: [
        { id: "a", text: "Ishga kelish va ishga qaytish" },
        { id: "b", text: "Ishga borish va ishdan qaytish" },
        { id: "c", text: "Ta’til va dam olish" },
        { id: "d", text: "Tushlik va nonushta" }
      ],
      correctId: "b",
      explanation: "출근 — ishga borish; 퇴근 — ishdan qaytish.",
      tags: ["Jobs", "DailyLife", "Time"]
    },
    {
      id: "q5",
      stem: "‘약속이 있어서 약속 장소로 가는 중이에요.’ yaqin ma’no qaysi?",
      options: [
        { id: "a", text: "Bugun uchrashuv yo‘q, uyda o‘tiryapman." },
        { id: "b", text: "Uchrashuv bor, hozir uchrashuv joyiga ketayapman." },
        { id: "c", text: "Ish tugadi, uyga ketyapman." },
        { id: "d", text: "Do‘konga non olishga ketyapman." }
      ],
      correctId: "b",
      explanation: "약속 — uchrashuv; ~로 가는 중 — yo‘lda (ketayotgan).",
      tags: ["DailyLife", "SentenceMeaning"]
    },
    {
      id: "q6",
      stem: "‘이쪽/저쪽/그쪽’ orasidan ‘u yoq, narigi tomoni’ qaysi?",
      options: [
        { id: "a", text: "이쪽" },
        { id: "b", text: "그쪽" },
        { id: "c", text: "저쪽" },
        { id: "d", text: "모두" }
      ],
      correctId: "c",
      explanation: "이쪽 — bu yoq; 그쪽 — o‘sha yoq (tinglovchiga yaqin); 저쪽 — ancha narigi tomoni.",
      tags: ["Directions"]
    },
    {
      id: "q7",
      stem: "‘이번 주말에 등산을 갈 거예요.’ qaysi fikrga mos?",
      options: [
        { id: "a", text: "O‘tgan dam olish kunlari tog‘ga bordim." },
        { id: "b", text: "Shu dam olishda tog‘ga boraman." },
        { id: "c", text: "Har kuni tog‘ga boraman." },
        { id: "d", text: "Tog‘dan qo‘rqaman." }
      ],
      correctId: "b",
      explanation: "이번 — shu (joriy) hafta/oy/yil; kelasi emas.",
      tags: ["Time", "Leisure"]
    },
    {
      id: "q8",
      stem: "‘강의실’ va ‘교실’ farqini to‘g‘ri tushuntirgan variant qaysi?",
      options: [
        { id: "a", text: "Ikkalasi ham bozor joyi." },
        { id: "b", text: "강의실 — ma’ruza xonasi, 교실 — umumiy sinf xonasi." },
        { id: "c", text: "강의실 — oshxona, 교실 — sport zal." },
        { id: "d", text: "Ikkalasi ham yotoqxona." }
      ],
      correctId: "b",
      explanation: "강의실 — universitet/kollejda ma’ruza xonasi; 교실 — sinf xonasi.",
      tags: ["School", "Places"]
    },
    {
      id: "q9",
      stem: "‘사무실’, ‘회의실’, ‘휴게실’ mos juftligi qaysi?",
      options: [
        { id: "a", text: "Ofis xonasi, yig‘ilish xonasi, dam olish xonasi" },
        { id: "b", text: "Oshxona, sinf xonasi, sport zal" },
        { id: "c", text: "Kutubxona, pochta, bank" },
        { id: "d", text: "Yotoqxona, qabulxona, kassaxona" }
      ],
      correctId: "a",
      explanation: "사무실 — office; 회의실 — meeting room; 휴게실 — lounge/break room.",
      tags: ["Jobs", "Places"]
    },
    {
      id: "q10",
      stem: "‘다음 주 화요일 오후 3시에 만날까요?’ mazmuni qaysi?",
      options: [
        { id: "a", text: "O‘tgan seshanba kuni soat 3 da uchrashamizmi?" },
        { id: "b", text: "Kelasi hafta seshanba kuni soat 3 da uchrashamizmi?" },
        { id: "c", text: "Bugun soat 3 da uchrashamizmi?" },
        { id: "d", text: "Har seshanba 3 da uchrashamiz." }
      ],
      correctId: "b",
      explanation: "다음 주 — kelasi hafta; 오후 3시 — soat 15:00.",
      tags: ["Time", "Appointments"]
    },
    {
      id: "q11",
      stem: "‘준비물’ odatda qaysi kontekstda ishlatiladi?",
      options: [
        { id: "a", text: "Dars/ish uchun kerakli jihozlar ro‘yxati" },
        { id: "b", text: "Dam olish kuni sayohati" },
        { id: "c", text: "Taom retsepti" },
        { id: "d", text: "Bank hisoboti" }
      ],
      correctId: "a",
      explanation: "준비물 — tayyorlab kelinadigan narsalar (daftar, qalamtas, slayd va b.).",
      tags: ["School", "Jobs"]
    },
    {
      id: "q12",
      stem: "‘교환/환불 규정’ yozuvi do‘konda nimaga tegishli?",
      options: [
        { id: "a", text: "Ish vaqti" },
        { id: "b", text: "Kirish chiptasi narxi" },
        { id: "c", text: "Almashtirish/ pulni qaytarish qoidalari" },
        { id: "d", text: "Wi-Fi paroli" }
      ],
      correctId: "c",
      explanation: "교환 — almashtirish, 환불 — pulni qaytarish.",
      tags: ["Shopping", "Rules"]
    },
    {
      id: "q13",
      stem: "‘지각하다’를 qaysi vaziyatda ishlatasiz?",
      options: [
        { id: "a", text: "Uchrashuvga erta yetib kelganda" },
        { id: "b", text: "Darsga/ishga kech qolganingizda" },
        { id: "c", text: "Dam olayotganda" },
        { id: "d", text: "Ovqat tayyorlayotganda" }
      ],
      correctId: "b",
      explanation: "지각하다 — kech qolmoq (dars/ish/uchrashuvga).",
      tags: ["School", "Jobs", "Verbs"]
    },
    {
      id: "q14",
      stem: "‘공원에서 운동해요.’ qaysi javob mantiqan mos?",
      options: [
        { id: "a", text: "Bog‘da mashq qilaman." },
        { id: "b", text: "Kutubxonada uxlayman." },
        { id: "c", text: "Ofisda ovqat pishiraman." },
        { id: "d", text: "Kasxonada rasm chizaman." }
      ],
      correctId: "a",
      explanation: "공원 — bog‘; 운동하다 — mashq qilmoq/sport bilan shug‘ullanmoq.",
      tags: ["DailyLife", "Places"]
    },
    {
      id: "q15",
      stem: "‘도착 시간’ va ‘출발 시간’ mos ma’nolari qaysi?",
      options: [
        { id: "a", text: "Kelish va jo‘nash vaqti" },
        { id: "b", text: "Ish vaqti va tanaffus" },
        { id: "c", text: "Nonushta va tushlik vaqti" },
        { id: "d", text: "Kampaniya boshlanishi va tugashi" }
      ],
      correctId: "a",
      explanation: "도착 — kelish; 출발 — jo‘nash.",
      tags: ["Transport", "Time"]
    }
  ]
},
{
  id: "t_topik_vocab_intermediate_A",
  title: "Leksika+Grammatika — kundalik/rasmiy nutq (TOPIK II, O‘rta 1)",
  category: "TOPIK",
  topic: "Grammar",
  level: "O'rta 1",
  durationSec: 12 * 60,
  questions: [
    {
      id: "q1",
      stem: "‘제출 기한 내 미제출 시 불이익이 발생할 수 있습니다.’ jumlasi mazmuni qaysi?",
      options: [
        { id: "a", text: "Muddat ichida topshirmasa, noqulayliklar bo‘lishi mumkin." },
        { id: "b", text: "Muddatdan keyin topshirsa, mukofot beriladi." },
        { id: "c", text: "Muddat yo‘q, xohlagan payt topshirsa bo‘ladi." },
        { id: "d", text: "Muddat ichida topshirsa ham bekor bo‘ladi." }
      ],
      correctId: "a",
      explanation: "제출 기한 — topshirish muddati; 불이익 — salbiy oqibat/noqulaylik.",
      tags: ["Formal", "Reading"]
    },
    {
      id: "q2",
      stem: "‘혼잡을 피하려면 대중교통을 이용하는 게 좋겠습니다.’ yaqin mazmun qaysi?",
      options: [
        { id: "a", text: "Tiqilinchni xohlasangiz, piyoda boring." },
        { id: "b", text: "Tiqilinchdan qochmoqchi bo‘lsangiz, jamoat transportidan foydalaning." },
        { id: "c", text: "Tiqilinch bo‘lmagani uchun mashina oling." },
        { id: "d", text: "Tiqilinch bo‘lsa ham mashina ma’qul." }
      ],
      correctId: "b",
      explanation: "혼잡 — tirbandlik/tiqilinch; -(으)려면 — ‘...moqchi bo‘lsangiz’.",
      tags: ["Transport", "Grammar"]
    },
    {
      id: "q3",
      stem: "‘서류가 누락되어 접수가 지연되었습니다.’ nimani bildiradi?",
      options: [
        { id: "a", text: "Hujjatlar ortiqcha bo‘lgani uchun tez qabul qilindi." },
        { id: "b", text: "Biror hujjat yetishmay qolgani sababli qabul kechikti." },
        { id: "c", text: "Hujjatlar to‘liq va tez qabul qilindi." },
        { id: "d", text: "Hujjatlar yo‘qolmagan, o‘z vaqtida bo‘ldi." }
      ],
      correctId: "b",
      explanation: "누락 — tushib qolish/yo‘q bo‘lish; 접수 지연 — qabulning kechikishi.",
      tags: ["Admin", "Vocabulary"]
    },
    {
      id: "q4",
      stem: "‘가격이 오르는 편이에요.’ deganda nutq egasi nimani bildiradi?",
      options: [
        { id: "a", text: "Narxlar pasayib boryapti." },
        { id: "b", text: "Narxlar o‘rtacha darajada turibdi." },
        { id: "c", text: "Narxlar ko‘tariladigan tomonga kiradi/ko‘proq ko‘tariladi." },
        { id: "d", text: "Narxlar birdaniga keskin tushdi." }
      ],
      correctId: "c",
      explanation: "‘-는 편이다’ — umumiy tendensiya/odatiy holatni bildiradi.",
      tags: ["Grammar", "Economy"]
    },
    {
      id: "q5",
      stem: "Bo‘shliqni to‘ldiring: ‘비가 올까 봐 우산을 ___.’",
      options: [
        { id: "a", text: "사지만 해요" },
        { id: "b", text: "가지고 갈게요" },
        { id: "c", text: "먹고 갈까요" },
        { id: "d", text: "버리는 편이에요" }
      ],
      correctId: "b",
      explanation: "‘-ㄹ까 봐’ — ‘... bo‘lsa kerak deb/qo‘rqib’; ‘가지고 가다’ — olib ketmoq.",
      tags: ["Grammar", "Weather"]
    },
    {
      id: "q6",
      stem: "‘사용자 개인정보는 암호화되어 안전하게 보관됩니다.’ ma’nosi qaysi?",
      options: [
        { id: "a", text: "Foydalanuvchi ma’lumoti ochiq saqlanadi." },
        { id: "b", text: "Ma’lumotlar shifrlanib xavfsiz saqlanadi." },
        { id: "c", text: "Ma’lumotlar hech qachon saqlanmaydi." },
        { id: "d", text: "Ma’lumotlar saqlanmaydi, faqat bosma ko‘rinishda beriladi." }
      ],
      correctId: "b",
      explanation: "암호화 — shifrlash; 안전하게 보관 — xavfsiz saqlash.",
      tags: ["IT", "Reading"]
    },
    {
      id: "q7",
      stem: "‘약속 시간보다 일찍 도착하게 되었어요.’ gram. nuansa?",
      options: [
        { id: "a", text: "Rejalashtirilgan, ongli qaror" },
        { id: "b", text: "Majburiy/passiv natija (holatlar oqibati sifatida shunday bo‘lib qoldi)" },
        { id: "c", text: "Buyruq/iltimos ifodasi" },
        { id: "d", text: "Taxmin ifodasi" }
      ],
      correctId: "b",
      explanation: "‘-게 되다’ — vaziyat natijasida ‘shunday bo‘lib qoldi’ ohangi.",
      tags: ["Grammar", "Nuance"]
    },
    {
      id: "q8",
      stem: "‘보이는 곳에 비치해 주세요.’ qaysi vaziyatda mos?",
      options: [
        { id: "a", text: "Ko‘rinmaydigan joyga yashiring." },
        { id: "b", text: "Ko‘rinadigan joyga qo‘yib qo‘ying." },
        { id: "c", text: "Hammadan uzoqroq joyga olib keting." },
        { id: "d", text: "Hech kimga ko‘rsatmang." }
      ],
      correctId: "b",
      explanation: "비치하다 — joylashtirmoq (odatda ko‘rsatma/yozuvlarda).",
      tags: ["Formal", "Public"]
    },
    {
      id: "q9",
      stem: "‘사용법이 복잡한데도 잘 배우면 충분히 쓸 만해요.’ mazmuni qaysi?",
      options: [
        { id: "a", text: "Foydalanishi oddiy va keraksiz." },
        { id: "b", text: "Murakkab, lekin o‘rganib olsa arzirli darajada foydalanish mumkin." },
        { id: "c", text: "Umuman o‘rganib bo‘lmaydi." },
        { id: "d", text: "Oson va zudlik bilan bekor qilinadi." }
      ],
      correctId: "b",
      explanation: "‘-는데도’ — ‘...ga qaramay’; ‘-ㄹ 만하다’ — ‘arzidi/maqbul’.",
      tags: ["Grammar", "Evaluation"]
    },
    {
      id: "q10",
      stem: "‘신분증을 지참하시기 바랍니다.’ rasmiy ohang mazmuni?",
      options: [
        { id: "a", text: "Shaxsni tasdiqlovchi hujjat olib kelmang." },
        { id: "b", text: "Shaxsni tasdiqlovchi hujjatni olib kelishingiz so‘raladi." },
        { id: "c", text: "Faqat nusxasini yuboring." },
        { id: "d", text: "Hujjat talab qilinmaydi." }
      ],
      correctId: "b",
      explanation: "지참하다 — yonida olib kelmoq; ‘-시기 바랍니다’ — rasmiy iltimos.",
      tags: ["Formal", "Admin"]
    },
    {
      id: "q11",
      stem: "‘등록한 지 얼마나 됐어요?’ savolining yo‘nalishi?",
      options: [
        { id: "a", text: "Qachondan beri ro‘yxatdan o‘tgansiz?" },
        { id: "b", text: "Nega ro‘yxatdan o‘tmadingiz?" },
        { id: "c", text: "Ro‘yxatdan o‘tishni istamaysizmi?" },
        { id: "d", text: "Kim ro‘yxatdan o‘tkazdi?" }
      ],
      correctId: "a",
      explanation: "‘-은/ㄴ 지’ — ‘... bo‘lganiga qancha bo‘ldi?’ konstruksiyasi.",
      tags: ["Grammar", "Time"]
    },
    {
      id: "q12",
      stem: "‘취소 수수료는 결제 금액의 10%가 부과됩니다.’ to‘g‘ri talqin qaysi?",
      options: [
        { id: "a", text: "Bekor qilish haqiqiy bepul." },
        { id: "b", text: "Bekor qilish to‘lovi summa 10% miqdorida olinadi." },
        { id: "c", text: "Faqat 1% olinadi." },
        { id: "d", text: "Hech qanday to‘lov olinmaydi." }
      ],
      correctId: "b",
      explanation: "수수료 — komissiya; 부과되다 — hisoblanmoq/undirilmoq.",
      tags: ["Money", "Rules"]
    },
    {
      id: "q13",
      stem: "‘서둘러야 할수록 실수가 늘어나는 것 같아요.’ ma’nosi qaysi?",
      options: [
        { id: "a", text: "Shoshilmasangiz, xatolar ko‘payadi." },
        { id: "b", text: "Qanchalik shoshilsangiz, xatolar shunchalik ko‘payadi." },
        { id: "c", text: "Shoshilsangiz, xatolar kamayadi." },
        { id: "d", text: "Xatolar hech qachon bo‘lmaydi." }
      ],
      correctId: "b",
      explanation: "‘-을수록’ — ‘qanchalik ... shunchalik ...’ gradatsiya konstruktsiyasi.",
      tags: ["Grammar", "Proverbial"]
    },
    {
      id: "q14",
      stem: "Bo‘shliqni to‘ldiring: ‘회의가 끝나고 나서 바로 보고서를 ___.’",
      options: [
        { id: "a", text: "제출했습니다" },
        { id: "b", text: "제출하겠지요" },
        { id: "c", text: "제출하곤 해요" },
        { id: "d", text: "제출하기 마련이에요" }
      ],
      correctId: "a",
      explanation: "‘-고 나서’ — ‘...dan so‘ng’; kontekstda yakunlangan harakat (과거) mos.",
      tags: ["Grammar", "Office"]
    },
    {
      id: "q15",
      stem: "‘면접 때 지나치게 겸손하면 자신의 강점을 제대로 못 보여 줄 수도 있어요.’ mazmuni?",
      options: [
        { id: "a", text: "Haddan tashqari kamtar bo‘lsangiz, kuchli tomonlaringiz ko‘rinmasligi mumkin." },
        { id: "b", text: "Kamtarlik har doim ham eng yaxshi strategiya." },
        { id: "c", text: "Intervyuda o‘zingizni maqtamang." },
        { id: "d", text: "Hech qachon kuchli tomon ko‘rsatib bo‘lmaydi." }
      ],
      correctId: "a",
      explanation: "‘-을 수도 있다’ — ehtimollik; ‘지나치게 겸손하다’ — ortiqcha kamtar bo‘lmoq.",
      tags: ["Jobs", "Pragmatics", "Grammar"]
    }
  ]
},
{
  id: "t_topik_vocab_grammar_intermediate_B",
  title: "Leksika+Grammatika — rasmiy va kundalik (TOPIK II, O‘rta 2)",
  category: "TOPIK",
  topic: "Vocabulary",
  level: "O'rta 2",
  durationSec: 12 * 60,
  questions: [
    {
      id: "q1",
      stem: "‘정부는 청년 일자리 확대를 위해 여러 정책을 시행하고 있다.’ mazmuni qaysi?",
      options: [
        { id: "a", text: "Hukumat yoshlar ish o‘rinlarini qisqartiryapti." },
        { id: "b", text: "Hukumat yoshlar ish o‘rinlarini kengaytirish uchun turli siyosatlarni amalga oshirmoqda." },
        { id: "c", text: "Hukumat faqat tadbirkorlarni qo‘llab-quvvatlaydi." },
        { id: "d", text: "Hukumat siyosatlarni bekor qildi." }
      ],
      correctId: "b",
      explanation: "확대 — kengaytirish; 시행하다 — amalga oshirmoq.",
      tags: ["Formal", "Society"]
    },
    {
      id: "q2",
      stem: "‘-더니’ ning tabiiy qo‘llanishi qaysi?",
      options: [
        { id: "a", text: "Kecha sovuq edi, bugun esa issiq bo‘lib qoldi." },
        { id: "b", text: "Kecha sovuq edi, chunki issiq." },
        { id: "c", text: "Kecha sovuq bo‘lsa ham, issiq." },
        { id: "d", text: "Kecha sovuq — issiq." }
      ],
      correctId: "a",
      explanation: "‘-더니’ — o‘z ko‘rgan holatdan keyingi o‘zgarish/qarama-qarshi holat.",
      tags: ["Grammar", "Discourse"]
    },
    {
      id: "q3",
      stem: "Bo‘shliqni to‘ldiring: ‘회의가 길어져서 그런지 모두가 좀 피곤해 ___.’",
      options: [
        { id: "a", text: "보였어요" },
        { id: "b", text: "보여요" },
        { id: "c", text: "보였겠어요" },
        { id: "d", text: "보이곤 해요" }
      ],
      correctId: "a",
      explanation: "‘—어서 그런지’ + ko‘ringan holat → 과거 natija: 보였어요 mos.",
      tags: ["Grammar", "Office"]
    },
    {
      id: "q4",
      stem: "‘불법 주정차 단속이 강화됩니다.’ to‘g‘ri talqin qaysi?",
      options: [
        { id: "a", text: "Noqonuniy to‘xtash nazorati kuchaytiriladi." },
        { id: "b", text: "To‘xtash bepul bo‘ladi." },
        { id: "c", text: "Hammasi ruxsat etiladi." },
        { id: "d", text: "Nazoratsiz qoldiriladi." }
      ],
      correctId: "a",
      explanation: "단속 — nazorat; 강화 — kuchaytirish.",
      tags: ["Public", "Rules"]
    },
    {
      id: "q5",
      stem: "‘-기는 하지만’ konstruktsiyasi mazmuniga mos variant:",
      options: [
        { id: "a", text: "Ijobiy so‘zlashuvni kuchaytirish." },
        { id: "b", text: "Qisman tan olish + qarama-qarshi nuqta: “...-u, lekin ...”" },
        { id: "c", text: "Buyruq ifodasi." },
        { id: "d", text: "Faqat sabab ifodasi." }
      ],
      correctId: "b",
      explanation: "Tan olish + kontrast: 예) 좋기는 하지만 비싸요.",
      tags: ["Grammar", "Nuance"]
    },
    {
      id: "q6",
      stem: "‘지원 자격에 해당되지 않는 경우, 접수가 불가합니다.’ mazmuni qaysi?",
      options: [
        { id: "a", text: "Mos kelmasa ham qabul qilinadi." },
        { id: "b", text: "Talablarga mos kelmasa, ariza qabul qilinmaydi." },
        { id: "c", text: "Talablar yo‘q." },
        { id: "d", text: "Hammasi avtomatik qabul qilinadi." }
      ],
      correctId: "b",
      explanation: "해당 — tegishli; 불가 — mumkin emas.",
      tags: ["Admin", "Formal"]
    },
    {
      id: "q7",
      stem: "‘-고 말다’ ohangi qaysi vaziyatda mos?",
      options: [
        { id: "a", text: "Kutilmagan/nojo‘ya yakun: “oxir-oqibat ... qilib qo‘ydim”" },
        { id: "b", text: "Doimiy odat." },
        { id: "c", text: "Hurmat buyruq." },
        { id: "d", text: "Baholash darajasi." }
      ],
      correctId: "a",
      explanation: "예) 결국 울고 말았다 — ‘oxiri yig‘lab yubordim’.",
      tags: ["Grammar", "Aspect"]
    },
    {
      id: "q8",
      stem: "‘분리배출을 생활화합시다.’ mazmuni qaysi?",
      options: [
        { id: "a", text: "Chiqindini ajratmaslik kerak." },
        { id: "b", text: "Chiqindini ajratib tashlashni odat qilaylik." },
        { id: "c", text: "Faqat shisha ajratiladi." },
        { id: "d", text: "Bu faqat ofislarga tegishli." }
      ],
      correctId: "b",
      explanation: "생활화하다 — odatga aylantirmoq.",
      tags: ["Public", "Environment"]
    },
    {
      id: "q9",
      stem: "Bo‘shliqni to‘ldiring: ‘큰 사고가 날 ___ 속도를 줄이세요.’",
      options: [
        { id: "a", text: "뿐더러" },
        { id: "b", text: "까닭에" },
        { id: "c", text: "지도 몰라서" },
        { id: "d", text: "지도 몰라" }
      ],
      correctId: "d",
      explanation: "‘-지도 몰라’ — ehtimollik: “… bo‘lishi mumkin”; ‘줄이세요’ bilan tabiiy.",
      tags: ["Grammar", "Safety"]
    },
    {
      id: "q10",
      stem: "‘개인 사정으로 인해 일정이 변경되었습니다.’ qaysi mazmun?",
      options: [
        { id: "a", text: "Shaxsiy sabablarga ko‘ra reja o‘zgardi." },
        { id: "b", text: "Reja o‘zgarmadi." },
        { id: "c", text: "Boshqa kun qo‘shilmadi." },
        { id: "d", text: "Sabab noaniq." }
      ],
      correctId: "a",
      explanation: "사정 — holat/sabab; 일정 변경 — jadval o‘zgarishi.",
      tags: ["Office", "Announcements"]
    },
    {
      id: "q11",
      stem: "‘-을 뿐만 아니라’ ga mos qo‘llanish:",
      options: [
        { id: "a", text: "비싸요, 그리고 싸요." },
        { id: "b", text: "맛있을 뿐만 아니라 건강에도 좋아요." },
        { id: "c", text: "맛없을 뿐만 아니라 맛있어요." },
        { id: "d", text: "가기만 하다." }
      ],
      correctId: "b",
      explanation: "‘Na faqat…, balki…’ — ijobiy/qarama-qarshi mantiqqa mos kelishi kerak.",
      tags: ["Grammar", "Conjunctions"]
    },
    {
      id: "q12",
      stem: "‘불가피하다’ so‘zining yaqin ma’nosi qaysi?",
      options: [
        { id: "a", text: "Ixtiyoriy" },
        { id: "b", text: "Majburiy/oldini olib bo‘lmaydigan" },
        { id: "c", text: "Bepul" },
        { id: "d", text: "Yengil" }
      ],
      correctId: "b",
      explanation: "불가피 — inevitable, muqarrar.",
      tags: ["Vocabulary", "Formal"]
    },
    {
      id: "q13",
      stem: "Bo‘shliqni to‘ldiring: ‘시작한 ___ 포기하지 말자.’",
      options: [
        { id: "a", text: "김에" },
        { id: "b", text: "바람에" },
        { id: "c", text: "통에" },
        { id: "d", text: "만에" }
      ],
      correctId: "a",
      explanation: "‘-는 김에’ — bir ish boshlangan ekan, shu bahona (oqimini davom ettirish).",
      tags: ["Grammar", "Idiomatic"]
    },
    {
      id: "q14",
      stem: "‘정부 발표에 따르면, 물가 상승률은 점차 둔화되는 추세다.’ mazmuni?",
      options: [
        { id: "a", text: "Inflyatsiya tezlashmoqda." },
        { id: "b", text: "Inflyatsiya asta-sekin sekinlashayotgan tendensiyada." },
        { id: "c", text: "Narxlar pasayib bo‘ldi." },
        { id: "d", text: "Hech qanday o‘zgarish yo‘q." }
      ],
      correctId: "b",
      explanation: "둔화 — sekinlashish; 추세 — tendensiya.",
      tags: ["Economy", "Reading"]
    },
    {
      id: "q15",
      stem: "‘시간이 없다고 하더라도 기본적인 검토는 해야 한다.’ mazmuni qaysi?",
      options: [
        { id: "a", text: "Vaqt bo‘lmasa, hech narsa kerak emas." },
        { id: "b", text: "Vaqt bo‘lmasa ham, asosiy ko‘rib chiqish kerak." },
        { id: "c", text: "Faqat vaqt bo‘lsa ko‘rib chiqiladi." },
        { id: "d", text: "Hech qachon ko‘rib chiqilmaydi." }
      ],
      correctId: "b",
      explanation: "‘-다고 하더라도’ — ‘... bo‘lsa ham’ (譲歩/immat).",
      tags: ["Grammar", "Logic"]
    }
  ]
},
{
  id: "t_topik_vocab_grammar_intermediate_C",
  title: "Leksika+Grammatika — rasmiy e’lonlar va kundalik (TOPIK II, O‘rta 2)",
  category: "TOPIK",
  topic: "Grammar",
  level: "O'rta 2",
  durationSec: 12 * 60,
  questions: [
    {
      id: "q1",
      stem: "‘공지 사항을 숙지하시기 바랍니다.’ mazmuni qaysi?",
      options: [
        { id: "a", text: "E’londan bexabar bo‘ling." },
        { id: "b", text: "E’londagi ma’lumotlarni yaxshilab o‘qib chiqing." },
        { id: "c", text: "E’londan nusxa oling." },
        { id: "d", text: "E’londagi hammasini bekor qiling." }
      ],
      correctId: "b",
      explanation: "숙지하다 — puxta bilib/o‘zlashtirib qo‘ymoq.",
      tags: ["Formal", "Announcements"]
    },
    {
      id: "q2",
      stem: "‘-는 바람에’ konstruktsiyasi qaysi ma’no bilan mos?",
      options: [
        { id: "a", text: "Kutilmagan sabab tufayli salbiy natija" },
        { id: "b", text: "Shart, agar… bo‘lsa" },
        { id: "c", text: "Maqsad bildiradi" },
        { id: "d", text: "Qiyos/taqqoslash bildiradi" }
      ],
      correctId: "a",
      explanation: "예) 차가 막히는 바람에 시험에 늦었어요.",
      tags: ["Grammar", "Cause"]
    },
    {
      id: "q3",
      stem: "Bo‘shliqni to‘ldiring: ‘개인정보를 제3자에게 제공하지 ___.’ (rasmiy ohang)",
      options: [
        { id: "a", text: "않을 것입니다" },
        { id: "b", text: "않는 법이에요" },
        { id: "c", text: "않았겠죠" },
        { id: "d", text: "않을걸요" }
      ],
      correctId: "a",
      explanation: "Rasmiy bayonlarda ‘-을 것입니다’ mos keladi.",
      tags: ["IT", "Formal"]
    },
    {
      id: "q4",
      stem: "‘수선’ va ‘교체’ farqi to‘g‘ri berilgan variant qaysi?",
      options: [
        { id: "a", text: "수선 — tuzatish/ta’mirlash; 교체 — almashtirish o‘rniga yangisini qo‘yish." },
        { id: "b", text: "Ikkalasi ham aynan bir xil." },
        { id: "c", text: "수선 — almashtirish; 교체 — yuvish." },
        { id: "d", text: "수선 — yangilash; 교체 — tozalash." }
      ],
      correctId: "a",
      explanation: "수선(修繕) — repair; 교체(交替) — replace.",
      tags: ["Service", "Vocabulary"]
    },
    {
      id: "q5",
      stem: "‘-더라도’ ni to‘g‘ri qo‘llagan variantni tanlang.",
      options: [
        { id: "a", text: "시간이 없더라도 기본 확인은 하겠습니다." },
        { id: "b", text: "시간이 없더라도면 갑시다." },
        { id: "c", text: "시간이 없더라도요? 몰라요." },
        { id: "d", text: "시간이 없더라도니까 빨라요." }
      ],
      correctId: "a",
      explanation: "譲歩: ‘... bo‘lsa ham’ ohangi bilan mos keladi.",
      tags: ["Grammar"]
    },
    {
      id: "q6",
      stem: "‘과태료가 부과되다’ qaysi vaziyat?",
      options: [
        { id: "a", text: "Mukofot beriladi" },
        { id: "b", text: "Jarima (ma’muriy) hisoblanadi" },
        { id: "c", text: "Soliq bekor qilinadi" },
        { id: "d", text: "Chegirma beriladi" }
      ],
      correctId: "b",
      explanation: "과태료 — ma’muriy jarima; 부과되다 — hisoblanmoq.",
      tags: ["Public", "Rules"]
    },
    {
      id: "q7",
      stem: "Bo‘shliq: ‘정전이 ___ 엘리베이터 이용을 일시 중단합니다.’",
      options: [
        { id: "a", text: "있는지" },
        { id: "b", text: "있는 바람에" },
        { id: "c", text: "있을지도 몰라서" },
        { id: "d", text: "있어" }
      ],
      correctId: "b",
      explanation: "Kutilmagan sabab → ‘-는/은 바람에’ mos.",
      tags: ["Announcements", "Grammar"]
    },
    {
      id: "q8",
      stem: "‘-기는커녕’ ma’nosi qaysi?",
      options: [
        { id: "a", text: "Na faqat… balki…" },
        { id: "b", text: "… u yoqda tursin, hatto … ham emas" },
        { id: "c", text: "… qilsa ham bo‘ladi" },
        { id: "d", text: "… ga qaramay" }
      ],
      correctId: "b",
      explanation: "예) 쉬기는커녕 밤새 일했어요.",
      tags: ["Grammar", "Contrast"]
    },
    {
      id: "q9",
      stem: "‘가뭄으로 인해 농산물 가격이 급등했다.’ mazmuni qaysi?",
      options: [
        { id: "a", text: "Qurg‘oqchilik tufayli narxlar keskin oshdi." },
        { id: "b", text: "Sel tufayli narxlar tushdi." },
        { id: "c", text: "Qurg‘oqchilik natijasida narxlar o‘zgarmadi." },
        { id: "d", text: "Qurg‘oqchilik bo‘lmadi." }
      ],
      correctId: "a",
      explanation: "가뭄 — qurg‘oqchilik; 급등 — keskin ko‘tarilish.",
      tags: ["Economy", "Society"]
    },
    {
      id: "q10",
      stem: "‘-고서야’ ning tabiiy talqini qaysi?",
      options: [
        { id: "a", text: "Biror ish tugaganidangina keyin (nihoyat) …" },
        { id: "b", text: "Har doim darhol …" },
        { id: "c", text: "Tasodifan …" },
        { id: "d", text: "Shart bildiradi." }
      ],
      correctId: "a",
      explanation: "예) 여러 번 설명을 듣고서야 이해했다.",
      tags: ["Grammar", "Aspect"]
    },
    {
      id: "q11",
      stem: "Bo‘shliqni to‘ldiring: ‘지원자가 많을수록 경쟁률이 ___.’",
      options: [
        { id: "a", text: "낮아진다" },
        { id: "b", text: "높아진다" },
        { id: "c", text: "사라진다" },
        { id: "d", text: "완화된다" }
      ],
      correctId: "b",
      explanation: "‘-을수록’ gradatsiya: ko‘proq → raqobat ham kuchayadi.",
      tags: ["Grammar", "Jobs"]
    },
    {
      id: "q12",
      stem: "‘면제 대상’ nimani anglatadi?",
      options: [
        { id: "a", text: "Majbur bo‘lganlar" },
        { id: "b", text: "Imtiyoz tufayli (to‘lovdan/majburiyatdan) ozod etilganlar" },
        { id: "c", text: "Jarimaga tortilganlar" },
        { id: "d", text: "Ro‘yxatdan o‘tmaganlar" }
      ],
      correctId: "b",
      explanation: "면제 — exemption; 대상 — subyekt/obyekt.",
      tags: ["Formal", "Admin"]
    },
    {
      id: "q13",
      stem: "‘-을 따름이다’ ohangini to‘g‘ri beradigan variant:",
      options: [
        { id: "a", text: "Afsus/achinish yoki kamtarona yakun: ‘… qilishdan boshqa choram yo‘q’" },
        { id: "b", text: "Buyruq ifodasi" },
        { id: "c", text: "O‘ta quvonchni oshirib aytish" },
        { id: "d", text: "Taxmin ifodasi" }
      ],
      correctId: "a",
      explanation: "예) 최선을 다했을 따름입니다.",
      tags: ["Grammar", "Nuance"]
    },
    {
      id: "q14",
      stem: "‘출입을 통제하고 있으니 협조해 주시기 바랍니다.’ mazmuni?",
      options: [
        { id: "a", text: "Kirish-chiqish cheklanmoqda, iltimos hamkorlik qiling." },
        { id: "b", text: "Bemorlarni ichkariga taklif qiling." },
        { id: "c", text: "Hech qanday cheklov yo‘q." },
        { id: "d", text: "Faqat kechasi taqiqlangan." }
      ],
      correctId: "a",
      explanation: "통제 — nazorat/cheklov; 협조 — hamkorlik.",
      tags: ["Public", "Announcements"]
    },
    {
      id: "q15",
      stem: "Bo‘shliq: ‘문제가 발생할 ___ 즉시 관리자에게 신고하세요.’",
      options: [
        { id: "a", text: "뿐더러" },
        { id: "b", text: "대로" },
        { id: "c", text: "수록" },
        { id: "d", text: "시" }
      ],
      correctId: "d",
      explanation: "‘-시’ (時) — ‘... paytda/daqiqada’; 공식 안내 matnida ko‘p uchraydi.",
      tags: ["Formal", "Guidelines"]
    }
  ]
},
{
  id: "t_topik_workplace_intermediate_jobexam_A",
  title: "Ish joyi — rasmiy yozishmalar, xavfsizlik va ofis odobi (TOPIK II, O‘rta 2)",
  category: "TOPIK",
  topic: "Safety",
  level: "O'rta 2",
  durationSec: 12 * 60,
  questions: [
    {
      id: "q1",
      stem: "‘회의록을 배포해 드리니 검토하시기 바랍니다.’ mazmuni qaysi?",
      options: [
        { id: "a", text: "Yig‘ilish bayonnomasini bekor qiling." },
        { id: "b", text: "Bayonnomani tarqatamiz, ko‘rib chiqishingiz so‘raladi." },
        { id: "c", text: "Bayonnomani faqat rahbar o‘qiydi." },
        { id: "d", text: "Bayonnomani qaytarib bering." }
      ],
      correctId: "b",
      explanation: "배포하다 — tarqatmoq; ‘-시기 바랍니다’ — rasmiy iltimos.",
      tags: ["Office", "Formal"]
    },
    {
      id: "q2",
      stem: "Bo‘shliqni to‘ldiring: ‘업무가 급해서 오늘은 야근을 ___ 수밖에 없어요.’",
      options: [
        { id: "a", text: "하는" },
        { id: "b", text: "해도" },
        { id: "c", text: "해야" },
        { id: "d", text: "할" }
      ],
      correctId: "c",
      explanation: "‘-ㄹ 수밖에 없다’ oldidan fe’lning 해야 (해야 할 수밖에 없다 emas) — 관용.",
      tags: ["Grammar", "Office"]
    },
    {
      id: "q3",
      stem: "‘안전모 미착용 시 현장 출입이 제한됩니다.’ mazmuni?",
      options: [
        { id: "a", text: "Kaska taqilmasa kirish cheklanadi." },
        { id: "b", text: "Kaska ixtiyoriy." },
        { id: "c", text: "Kaska taqiqlanadi." },
        { id: "d", text: "Faqat kechasi kaska kerak." }
      ],
      correctId: "a",
      explanation: "미착용 — taqmaslik; 출입 제한 — kirish cheklovi.",
      tags: ["Safety", "Rules"]
    },
    {
      id: "q4",
      stem: "‘-는 한’ (조건 한계) konstruktsiyasiga mos variant qaysi?",
      options: [
        { id: "a", text: "시간이 허락하는 한 최대한 도와드리겠습니다." },
        { id: "b", text: "시간이 허락하는 한데도 갔어요." },
        { id: "c", text: "시간이 허락하는 한가요?" },
        { id: "d", text: "시간이 허락하는 한데" }
      ],
      correctId: "a",
      explanation: "‘… qilolganimcha’ ma’nosida: 허락하는 한 = imkon boricha.",
      tags: ["Grammar", "Pragmatics"]
    },
    {
      id: "q5",
      stem: "Email yakunida rasmiy ohangga eng mos ibora qaysi?",
      options: [
        { id: "a", text: "잘 부탁드립니다." },
        { id: "b", text: "ㅇㅋ요~" },
        { id: "c", text: "그냥 하세요." },
        { id: "d", text: "몰라요." }
      ],
      correctId: "a",
      explanation: "‘잘 부탁드립니다’ — rasmiy/odobli yakun.",
      tags: ["Email", "Etiquette"]
    },
    {
      id: "q6",
      stem: "‘사내 규정을 위반할 경우 징계 대상이 될 수 있습니다.’ mazmuni?",
      options: [
        { id: "a", text: "Qoidani buzsa ham hech narsa bo‘lmaydi." },
        { id: "b", text: "Ichki qoidalarni buzsa, intizomiy chora qo‘llanishi mumkin." },
        { id: "c", text: "Faqat maqtov beriladi." },
        { id: "d", text: "Ishdan darhol bo‘shatiladi (har doim)." }
      ],
      correctId: "b",
      explanation: "징계 — intizomiy chora; 대상 — subyekt bo‘lishi mumkin.",
      tags: ["Rules", "HR"]
    },
    {
      id: "q7",
      stem: "Bo‘shliq: ‘보고서 형식을 통일함으로써 업무 효율을 ___ 수 있다.’",
      options: [
        { id: "a", text: "낮출" },
        { id: "b", text: "줄일" },
        { id: "c", text: "높일" },
        { id: "d", text: "막을" }
      ],
      correctId: "c",
      explanation: "효율을 높이다 — samaradorlikni oshirmoq.",
      tags: ["Office", "Vocabulary"]
    },
    {
      id: "q8",
      stem: "‘-기 나름이다’ ni to‘g‘ri qo‘llagan variantni tanlang.",
      options: [
        { id: "a", text: "성과는 준비하기 나름이에요." },
        { id: "b", text: "성과는 준비하기 나름이에요까?" },
        { id: "c", text: "성과는 준비하기 나름이었어요까요." },
        { id: "d", text: "성과는 준비하기 나름이지만다." }
      ],
      correctId: "a",
      explanation: "Natija tayyorgarlikka bog‘liq: ‘… qilishiga qarab’.",
      tags: ["Grammar", "Work"]
    },
    {
      id: "q9",
      stem: "‘권한이 없는 PC에서 시스템 설치를 시도한 것으로 확인되었습니다.’ vaziyat?",
      options: [
        { id: "a", text: "Ruxsatsiz kompyuterda o‘rnatish urinishlari aniqlangan." },
        { id: "b", text: "Barcha kompyuterlarga ruxsat berilgan." },
        { id: "c", text: "Hech qanday urinish aniqlanmadi." },
        { id: "d", text: "O‘rnatish majburiy." }
      ],
      correctId: "a",
      explanation: "권한 — huquq/permission.",
      tags: ["IT", "Security"]
    },
    {
      id: "q10",
      stem: "Bo‘shliq: ‘업무 인수인계가 원활하도록 문서를 ___ 두세요.’",
      options: [
        { id: "a", text: "정리해" },
        { id: "b", text: "정리하려고" },
        { id: "c", text: "정리하면" },
        { id: "d", text: "정리했다가" }
      ],
      correctId: "a",
      explanation: "‘-아/어 두다’ — oldindan tayyorlab qo‘yish/saqlab qo‘yish: 정리해 두다.",
      tags: ["Office", "Hand-over"]
    },
    {
      id: "q11",
      stem: "‘-다 보니’ ohangiga mos variant qaysi?",
      options: [
        { id: "a", text: "매일 기록하다 보니 실수가 줄었어요." },
        { id: "b", text: "매일 기록하다 보니까요?" },
        { id: "c", text: "매일 기록하다 보면까?" },
        { id: "d", text: "매일 기록하다 보자." }
      ],
      correctId: "a",
      explanation: "Takroriy harakat natijasida yuzaga kelgan holat.",
      tags: ["Grammar", "Process"]
    },
    {
      id: "q12",
      stem: "‘회의 일정을 조율하다’ nimani anglatadi?",
      options: [
        { id: "a", text: "Yig‘ilishni bekor qilish" },
        { id: "b", text: "Yig‘ilish vaqtini muvofiqlashtirish" },
        { id: "c", text: "Yig‘ilish joyini tozalash" },
        { id: "d", text: "Yig‘ilish bayonnomasini yozish" }
      ],
      correctId: "b",
      explanation: "조율 — vaqt/ishlarni kelishtirish, muvofiqlashtirish.",
      tags: ["Office", "Scheduling"]
    },
    {
      id: "q13",
      stem: "Bo‘shliq: ‘현장에서는 지시사항을 ___ 준수해야 합니다.’",
      options: [
        { id: "a", text: "철저히" },
        { id: "b", text: "천천히" },
        { id: "c", text: "가볍게" },
        { id: "d", text: "대충" }
      ],
      correctId: "a",
      explanation: "철저히 — batafsil/qattiq; ‘qat’iy rioya qilish’.",
      tags: ["Safety", "Compliance"]
    },
    {
      id: "q14",
      stem: "‘-을 겸’ konstruktsiyasi qaysi ma’noni beradi?",
      options: [
        { id: "a", text: "Ikki maqsadni birga bajarish: “ham …, ham … uchun”" },
        { id: "b", text: "Faqat sabab" },
        { id: "c", text: "Buyruq" },
        { id: "d", text: "Qiyos" }
      ],
      correctId: "a",
      explanation: "예) 답사도 할 겸 회의도 할 겸 부산에 갑니다.",
      tags: ["Grammar", "Purpose"]
    },
    {
      id: "q15",
      stem: "‘근무 태도 미흡으로 경고 조치가 내려졌습니다.’ mazmuni qaysi?",
      options: [
        { id: "a", text: "Ishga bo‘lgan munosabat a’lo bo‘lgani uchun mukofot berildi." },
        { id: "b", text: "Ishdagi munosabat yetarli emasligi sababli ogohlantirish berildi." },
        { id: "c", text: "Hech qanday chora ko‘rilmadi." },
        { id: "d", text: "Ta’til berildi." }
      ],
      correctId: "b",
      explanation: "미흡 — yetarli emas; 경고 조치 — ogohlantirish chorasini qo‘llash.",
      tags: ["HR", "Discipline"]
    }
  ]
},
{
  id: "t_topik_workplace_intermediate_jobexam_B",
  title: "Ish joyi — xavfsizlik, IT, odob-axloq (TOPIK II, O‘rta 2)",
  category: "TOPIK",
  topic: "Vocabulary",
  level: "O'rta 2",
  durationSec: 12 * 60,
  questions: [
    {
      id: "q1",
      stem: "‘안전수칙을 준수하지 않을 경우 작업이 중지될 수 있습니다.’ mazmuni qaysi?",
      options: [
        { id: "a", text: "Qoidalarga rioya qilmasa ham ish davom etadi." },
        { id: "b", text: "Xavfsizlik qoidalari bajarilmasa, ish to‘xtatilishi mumkin." },
        { id: "c", text: "Qoidalar faqat ixtiyoriy." },
        { id: "d", text: "Qoidalar faqat tashrif buyuruvchilarga." }
      ],
      correctId: "b",
      explanation: "준수 — rioya qilish; 작업 중지 — ishni to‘xtatish.",
      tags: ["Safety", "Rules"]
    },
    {
      id: "q2",
      stem: "Bo‘shliqni to‘ldiring: ‘보호구를 착용하지 않고 현장에 들어갈 ___ 없습니다.’",
      options: [
        { id: "a", text: "수" },
        { id: "b", text: "리" },
        { id: "c", text: "바" },
        { id: "d", text: "뿐" }
      ],
      correctId: "a",
      explanation: "‘-ㄹ/을 수 없다’ — mumkin emas; 보호구 — PPE.",
      tags: ["Safety", "Grammar"]
    },
    {
      id: "q3",
      stem: "‘작업 전 위험성 평가를 실시합니다.’ qaysi jarayon?",
      options: [
        { id: "a", text: "Ish tugagach tozalash" },
        { id: "b", text: "Ishdan oldin xatarlarni baholash (risk assessment)" },
        { id: "c", text: "Tanaffus jadvali" },
        { id: "d", text: "Ish haqi hisoblash" }
      ],
      correctId: "b",
      explanation: "위험성 평가 — riskni baholash.",
      tags: ["Safety", "Procedure"]
    },
    {
      id: "q4",
      stem: "‘-도록 하다’ konstruktsiyasini to‘g‘ri ishlatgan variantni tanlang.",
      options: [
        { id: "a", text: "회의실은 깨끗이 사용하도록 하세요." },
        { id: "b", text: "회의실은 깨끗이 사용하도록 해요까?" },
        { id: "c", text: "회의실은 깨끗이 사용하도록 했다가." },
        { id: "d", text: "회의실은 깨끗이 사용하도록이나." }
      ],
      correctId: "a",
      explanation: "‘… qilishingizni so‘raymiz/buyruq’ ohangi.",
      tags: ["Office", "Grammar"]
    },
    {
      id: "q5",
      stem: "‘출입 통제 구역’ yozuvi nimani anglatadi?",
      options: [
        { id: "a", text: "Erkin kirish mumkin bo‘lgan hudud" },
        { id: "b", text: "Kirish-chiqish nazorat qilinadigan hudud" },
        { id: "c", text: "Faqat dam olish hududi" },
        { id: "d", text: "Faoliyat taqiqlangan hudud emas" }
      ],
      correctId: "b",
      explanation: "통제 — nazorat/cheklov.",
      tags: ["Public", "Signs"]
    },
    {
      id: "q6",
      stem: "Bo‘shliq: ‘사고 발생 시 즉시 관리자에게 보고하도록 ___.’ (rasmiy)",
      options: [
        { id: "a", text: "공지합니다" },
        { id: "b", text: "부탁드립니다" },
        { id: "c", text: "바랍니다" },
        { id: "d", text: "원합니다" }
      ],
      correctId: "c",
      explanation: "‘-시기 바랍니다’ — rasmiy iltimos/ko‘rsatma.",
      tags: ["Announcements", "Formal"]
    },
    {
      id: "q7",
      stem: "MSDS (물질안전보건자료) nima uchun kerak?",
      options: [
        { id: "a", text: "Xodimlar tavalludlarini saqlash" },
        { id: "b", text: "Kimyoviy modda xavfi va choralarini bilish" },
        { id: "c", text: "Ish haqi jadvali" },
        { id: "d", text: "Mehnat ta’tili qoidalari" }
      ],
      correctId: "b",
      explanation: "MSDS — modda xavfsizlik ma’lumotlar varaqasi.",
      tags: ["Safety", "Chemicals"]
    },
    {
      id: "q8",
      stem: "‘-고 나면’ ohangiga mos variant qaysi?",
      options: [
        { id: "a", text: "점검을 마치고 나면 설비를 가동하세요." },
        { id: "b", text: "점검을 마치고 나면까?" },
        { id: "c", text: "점검을 마치고 나면데요." },
        { id: "d", text: "점검을 마치고 나면이나." }
      ],
      correctId: "a",
      explanation: "‘…ni tugatgach keyin’ ketma-ketlik.",
      tags: ["Procedure", "Grammar"]
    },
    {
      id: "q9",
      stem: "IT xavfsizligida ‘피싱 메일’ ga to‘g‘ri munosabat qaysi?",
      options: [
        { id: "a", text: "Havolani darhol ochish" },
        { id: "b", text: "Shubhali bo‘lsa xabar berish va o‘chirish" },
        { id: "c", text: "Parolni yuborib tasdiqlash" },
        { id: "d", text: "Do‘stlarga yuborish" }
      ],
      correctId: "b",
      explanation: "Phishing — ma’lumot o‘g‘irlashga qaratilgan xat.",
      tags: ["IT", "Security"]
    },
    {
      id: "q10",
      stem: "Bo‘shliq: ‘기계에 이상이 발견되면 즉시 전원을 ___ 후 표지판을 부착하세요.’",
      options: [
        { id: "a", text: "켜는" },
        { id: "b", text: "끈" },
        { id: "c", text: "끈 뒤" },
        { id: "d", text: "켜 둔" }
      ],
      correctId: "c",
      explanation: "‘-은/ㄴ 뒤’ — “…dan so‘ng”; avval o‘chirish, so‘ng belgi qo‘yish.",
      tags: ["LOTO", "Procedure"]
    },
    {
      id: "q11",
      stem: "‘-는 한편’ konstruktsiyasini to‘g‘ri qo‘llagan variant:",
      options: [
        { id: "a", text: "안전을 강화하는 한편 생산성을 높였습니다." },
        { id: "b", text: "안전을 강화하는 한편까?" },
        { id: "c", text: "안전을 강화하는 한편데요." },
        { id: "d", text: "안전을 강화하는 한편이나." }
      ],
      correctId: "a",
      explanation: "‘… bilan birga’ parallel harakat.",
      tags: ["Grammar", "Reporting"]
    },
    {
      id: "q12",
      stem: "Ishxona odobi: ‘회의 중 휴대폰은 진동으로 설정해 주시기 바랍니다.’ mazmuni?",
      options: [
        { id: "a", text: "Uchrashuvda telefonni ovozini kuchaytiring." },
        { id: "b", text: "Uchrashuv payti telefonni vibratsiyaga qo‘ying." },
        { id: "c", text: "Telefonni majburan o‘chirib qo‘ying." },
        { id: "d", text: "Telefonni stolga tashlab ketish." }
      ],
      correctId: "b",
      explanation: "진동 — vibratsiya; rasmiy ohangda ‘~주시기 바랍니다’.",
      tags: ["Etiquette", "Meeting"]
    },
    {
      id: "q13",
      stem: "‘기밀 유출’ ga tegishli to‘g‘ri bayon qaysi?",
      options: [
        { id: "a", text: "Maxfiy ma’lumotlarning tarqalishi" },
        { id: "b", text: "Maxfiy ma’lumotlarni shifrlash" },
        { id: "c", text: "Maxfiy ma’lumotlarni zaxiralash" },
        { id: "d", text: "Maxfiy ma’lumotlarni tozalash" }
      ],
      correctId: "a",
      explanation: "기밀 — maxfiy; 유출 — sizib chiqish/oqib ketish.",
      tags: ["Security", "Compliance"]
    },
    {
      id: "q14",
      stem: "Bo‘shliq: ‘업무와 관련 없는 프로그램 설치를 ___ 바랍니다.’ (rasmiy taqiqlov)",
      options: [
        { id: "a", text: "삼가 주시기" },
        { id: "b", text: "감사드리기" },
        { id: "c", text: "환영하시기" },
        { id: "d", text: "권장하시기" }
      ],
      correctId: "a",
      explanation: "‘삼가 주시기 바랍니다’ — ‘tiyilishingizni so‘raymiz’.",
      tags: ["IT", "Policy"]
    },
    {
      id: "q15",
      stem: "‘작업장이 정리정돈되지 않아 사고가 발생하고 말았다.’ mazmuni?",
      options: [
        { id: "a", text: "Tozalik sababli baxtsiz hodisa bo‘lmadi." },
        { id: "b", text: "Tartibsizlik tufayli oxir-oqibat hodisa sodir bo‘ldi." },
        { id: "c", text: "Hodisa rejalashtirilgan edi." },
        { id: "d", text: "Hodisa bo‘lishi mumkin emas edi." }
      ],
      correctId: "b",
      explanation: "정리정돈 — 5S tartibi; ‘-고 말다’ — noxush yakun.",
      tags: ["Safety", "Grammar"]
    }
  ]
},
{
  id: "t_topik_vocab_grammar_advanced_A",
  title: "Leksika+Grammatika — rasmiy matn, ijtimoiy-iqtisodiy mavzular (Yuqori)",
  category: "TOPIK",
  topic: "Grammar",
  level: "Yuqori",
  durationSec: 14 * 60,
  questions: [
    {
      id: "q1",
      stem: "‘정부의 지원에도 불구하고 청년 체감실업률은 높게 나타났다.’ mazmuni qaysi?",
      options: [
        { id: "a", text: "Hukumat yordami tufayli ishsizlik yo‘qoldi." },
        { id: "b", text: "Yordamga qaramay, yoshlar his qiladigan ishsizlik darajasi yuqori ko‘rindi." },
        { id: "c", text: "Yordam bo‘lmagani uchun ishsizlik pasaydi." },
        { id: "d", text: "Yordam ham, ishsizlik ham ahamiyatsiz." }
      ],
      correctId: "b",
      explanation: "‘에도 불구하고’ — ‘...ga qaramay’, ‘체감실업률’ — hissiy/real his qilinadigan ishsizlik.",
      tags: ["Economy", "Reading"]
    },
    {
      id: "q2",
      stem: "‘-기 마련이다’ ning ohangi qaysi variantda to‘g‘ri?",
      options: [
        { id: "a", text: "Yangi ishni boshlasa, xatolar bo‘lishi tabiiy." },
        { id: "b", text: "Yangi ishni boshlasa, xatolar bo‘lmasligi shart." },
        { id: "c", text: "Yangi ishni boshlasa, majbur jarima bo‘ladi." },
        { id: "d", text: "Yangi ishni boshlasa, imkonsiz bo‘ladi." }
      ],
      correctId: "a",
      explanation: "‘-기 마련이다’ — tabiiy tendensiya/odatiylik.",
      tags: ["Grammar", "Nuance"]
    },
    {
      id: "q3",
      stem: "Bo‘shliq: ‘근거 자료가 부족한 ___ 결론을 내리는 것은 성급하다.’",
      options: [
        { id: "a", text: "만큼" },
        { id: "b", text: "바람에" },
        { id: "c", text: "마당에" },
        { id: "d", text: "터라" }
      ],
      correctId: "d",
      explanation: "‘-는/-ㄴ/-은 터라’ — ‘... bo‘lgani bois/bo‘lganligi sababli’ rasmiy ohang.",
      tags: ["Grammar", "Formal"]
    },
    {
      id: "q4",
      stem: "‘노동 생산성 제고를 위한 혁신이 요구된다.’ to‘g‘ri talqin qaysi?",
      options: [
        { id: "a", text: "Ishchilar qisqartirilishi kerak." },
        { id: "b", text: "Mehnat unumdorligini oshirish uchun innovatsiya talab qilinadi." },
        { id: "c", text: "Unumdorlik pasaytiriladi." },
        { id: "d", text: "Innovatsiya taqiqlanadi." }
      ],
      correctId: "b",
      explanation: "제고 — ko‘tarish/oshirish (提升).",
      tags: ["Economy", "Formal"]
    },
    {
      id: "q5",
      stem: "‘-다시피’ ning to‘g‘ri qo‘llanishi qaysi?",
      options: [
        { id: "a", text: "알다시피 이번 정책은 중소기업을 겨냥했다." },
        { id: "b", text: "알다시피까 이번 정책…" },
        { id: "c", text: "알다시피는 정책…" },
        { id: "d", text: "알다시피라도 정책…" }
      ],
      correctId: "a",
      explanation: "‘알다시피’ — ‘bilganingizdek’.",
      tags: ["Grammar", "Discourse"]
    },
    {
      id: "q6",
      stem: "Bo‘shliq: ‘데이터 보안이 취약할 경우, 피해가 눈덩이처럼 ___ 수 있다.’",
      options: [
        { id: "a", text: "불어날" },
        { id: "b", text: "불어나는가" },
        { id: "c", text: "불어났던" },
        { id: "d", text: "불어날걸" }
      ],
      correctId: "a",
      explanation: "Potensial ehtimol: ‘… qilib ketishi mumkin’ → deverbal attributiv ‘-ㄹ’.",
      tags: ["IT", "Metaphor"]
    },
    {
      id: "q7",
      stem: "‘-을라치면’ ohangi qaysi?",
      options: [
        { id: "a", text: "Harakat boshlasang (qilsang-qilding) deguncha (salbiy oqibat) yuz beradi." },
        { id: "b", text: "Har doim buyruq ifodasi." },
        { id: "c", text: "Faqat ijobiy natija." },
        { id: "d", text: "Shart-sharoit ifodalanmaydi." }
      ],
      correctId: "a",
      explanation: "‘-을라치면’ — ‘... qilmoqchi bo‘lsa/har safar qilsa’ → ko‘pincha salbiy natija.",
      tags: ["Grammar", "Idiomatic"]
    },
    {
      id: "q8",
      stem: "‘예산 집행의 투명성을 담보하다’ mazmuni qaysi?",
      options: [
        { id: "a", text: "Byudjetni yashirish" },
        { id: "b", text: "Byudjet ijrosining shaffofligini kafolatlash" },
        { id: "c", text: "Byudjetdan voz kechish" },
        { id: "d", text: "Byudjetni muzlatish" }
      ],
      correctId: "b",
      explanation: "담보하다 — kafolatlamoq; 투명성 — shaffoflik.",
      tags: ["PublicAdmin", "Reading"]
    },
    {
      id: "q9",
      stem: "Bo‘shliq: ‘기후 변화에 ___ 지속 가능한 전환이 시급하다.’",
      options: [
        { id: "a", text: "따라" },
        { id: "b", text: "관해" },
        { id: "c", text: "부합해" },
        { id: "d", text: "발맞춰" }
      ],
      correctId: "d",
      explanation: "‘발맞추다’ — ‘hamnafas/hamqadam bo‘lish’; ‘-에 발맞춰’.",
      tags: ["Environment", "Collocation"]
    },
    {
      id: "q10",
      stem: "‘-고도 남다’ ga mos variant qaysi?",
      options: [
        { id: "a", text: "준비 기간이 일주일이면 충분하고도 남아요." },
        { id: "b", text: "준비 기간이 일주일이면 부족하고도 남아요." },
        { id: "c", text: "준비 기간이 일주일이면 없고도 남아요." },
        { id: "d", text: "준비 기간이 일주일이면 크고도 남아요." }
      ],
      correctId: "a",
      explanation: "‘-고도 남다’ — ‘ortib ham qoladi’ intensifikator.",
      tags: ["Grammar", "Emphasis"]
    },
    {
      id: "q11",
      stem: "“사회적 합의를 도출하다” iborasi nimani anglatadi?",
      options: [
        { id: "a", text: "Jamiyatni bo‘lib tashlash" },
        { id: "b", text: "Ijtimoiy kelishuvni ishlab chiqish/chiqarish" },
        { id: "c", text: "Kelishuvni bekor qilish" },
        { id: "d", text: "Norozilik bildirish" }
      ],
      correctId: "b",
      explanation: "도출 — chiqarish/hosil qilish; 합의 — kelishuv.",
      tags: ["Society", "Formal"]
    },
    {
      id: "q12",
      stem: "Bo‘shliq: ‘사실관계를 ___ 보도는 정정 대상이 된다.’",
      options: [
        { id: "a", text: "왜곡한" },
        { id: "b", text: "왜곡하다가" },
        { id: "c", text: "왜곡하더니" },
        { id: "d", text: "왜곡하겠지" }
      ],
      correctId: "a",
      explanation: "관계절 (attributiv) kerak: ‘왜곡한 보도’ — buzib ko‘rsatilgan xabar.",
      tags: ["Media", "Grammar"]
    },
    {
      id: "q13",
      stem: "‘-을 따름이다’ ni eng mos talqin qaysi?",
      options: [
        { id: "a", text: "Kamtarlik/achinish bilan yakun: ‘… qilishdan boshqa choramiz yo‘q xolos’" },
        { id: "b", text: "Buyruq" },
        { id: "c", text: "Shart" },
        { id: "d", text: "Qiyos" }
      ],
      correctId: "a",
      explanation: "Kamtarona, passiv natija-yorliq ohangi.",
      tags: ["Grammar", "Nuance"]
    },
    {
      id: "q14",
      stem: "‘자칫하면’ bilan tabiiy qo‘llanish qaysi?",
      options: [
        { id: "a", text: "자칫하면 사고로 이어질 수 있다." },
        { id: "b", text: "자칫하면 반드시 성공한다." },
        { id: "c", text: "자칫하면 확실히 안전하다." },
        { id: "d", text: "자칫하면 필히 향상된다." }
      ],
      correctId: "a",
      explanation: "‘자칫하면’ — ‘ozroq e’tiborsizlik bo‘lsa’ → salbiy ehtimol bilan keladi.",
      tags: ["Safety", "Adverbs"]
    },
    {
      id: "q15",
      stem: "Bo‘shliq: ‘불평등 해소 없이는 지속 가능한 성장이 ___.’",
      options: [
        { id: "a", text: "가능치 않다" },
        { id: "b", text: "가능하지 않을 테다까" },
        { id: "c", text: "가능지 않다" },
        { id: "d", text: "가능할걸" }
      ],
      correctId: "a",
      explanation: "‘-치 않다’ — yozma/rasmiy variant (‘가능치 않다’).",
      tags: ["Economy", "Formal"]
    }
  ]
}
];
