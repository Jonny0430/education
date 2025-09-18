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
}
];
