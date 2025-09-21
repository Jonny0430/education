// src/data/topikPacks.ts

import type { TestPack } from "../libs/topikTypes";


const PACK_V1: TestPack = {
  id: "topik1_vocab_plus",
  title: "TOPIK I — 어휘·표현 (상)",
  level: "TOPIK I",
  section: "Vocabulary",
  durationSec: 12 * 60,
  savedKey: "pack_topik1_vocab_plus",
  questions: [
    {
      id: "p1q1",
      stem: "‘제시간에’의 의미로 가장 알맞은 것은?",
      options: [
        { id: "a", text: "정시에" },
        { id: "b", text: "가끔" },
        { id: "c", text: "계속" },
        { id: "d", text: "마침내" },
      ],
      correctId: "a",
      explanation:
        "KR: ‘제시간에’ = ‘정시에, 시간을 늦지 않고’.  \nRU: «вовремя, точно по времени».  \nEN: “on time, punctually”.",
      tags: ["Vocabulary", "Adverbs"],
    },

    {
      id: "p1q2",
      stem: "다음 중 ‘교환하다’와 가장 가까운 의미는?",
      options: [
        { id: "a", text: "바꾸다" },
        { id: "b", text: "고치다" },
        { id: "c", text: "버리다" },
        { id: "d", text: "끼우다" },
      ],
      correctId: "a",
      explanation:
        "KR: ‘교환하다’ ≈ ‘바꾸다(맞바꾸다)’. ‘고치다’=수리하다.  \nRU: «обменивать» ≈ «менять».  \nEN: “to exchange ≈ to swap/replace”.",
      tags: ["Vocabulary", "Synonym"],
    },

    {
      id: "p1q3",
      stem: "‘예약’과 자연스럽게 어울리는 것은?",
      options: [
        { id: "a", text: "예약을 취소하다" },
        { id: "b", text: "예약을 감다" },
        { id: "c", text: "예약을 구워요" },
        { id: "d", text: "예약을 씻어요" },
      ],
      correctId: "a",
      explanation:
        "KR: 자연스러운 연결: ‘예약을 하다/변경하다/취소하다’.  \nRU: Сочетается «отменить бронь/резервацию».  \nEN: Collocation: “cancel a reservation”.",
      tags: ["Collocation", "Travel"],
    },

    {
      id: "p1q4",
      stem: "빈칸에 알맞은 것은?  \n어제 산 우산이 고장 나서 오늘 ____ 했어요.",
      options: [
        { id: "a", text: "환불" },
        { id: "b", text: "초대" },
        { id: "c", text: "인사" },
        { id: "d", text: "연습" },
      ],
      correctId: "a",
      explanation:
        "KR: ‘환불(하다)’=돈을 돌려받다.  \nRU: «вернул товар и получил возврат денег».  \nEN: “I got a refund.”",
      tags: ["Shopping", "Usage"],
    },

    {
      id: "p1q5",
      stem: "다음 중 ‘동아리’의 뜻으로 알맞은 것은?",
      options: [
        { id: "a", text: "학교에서 활동하는 모임" },
        { id: "b", text: "도서 대여 장소" },
        { id: "c", text: "운동 기구" },
        { id: "d", text: "지하철 역" },
      ],
      correctId: "a",
      explanation:
        "KR: ‘동아리’=학교·대학의 소모임.  \nRU: «кружок/клуб при школе/университете».  \nEN: “club (student society)”.",
      tags: ["School", "Places"],
    },

    {
      id: "p1q6",
      stem: "다음 중 반댓말이 올바른 것은?  \n‘입구’ ↔ ____",
      options: [
        { id: "a", text: "출구" },
        { id: "b", text: "입장" },
        { id: "c", text: "정문" },
        { id: "d", text: "복도" },
      ],
      correctId: "a",
      explanation:
        "KR: 입구(들어가는 곳) ↔ 출구(나가는 곳).  \nRU: «вход» ↔ «выход».  \nEN: “entrance” ↔ “exit”.",
      tags: ["Vocabulary", "Antonym"],
    },

    {
      id: "p1q7",
      stem: "‘~(으)로 갈아타다’가 자연스러운 문장은?",
      options: [
        { id: "a", text: "3호선에서 2호선으로 갈아타요." },
        { id: "b", text: "지하철을 끓여서 갈아타요." },
        { id: "c", text: "학교를 씻고 갈아타요." },
        { id: "d", text: "편지를 갈아타요." },
      ],
      correctId: "a",
      explanation:
        "KR: 교통수단 환승에 ‘갈아타다’를 사용.  \nRU: «пересесть с линии 3 на линию 2».  \nEN: “transfer from line 3 to line 2”.",
      tags: ["Transport", "Grammar-Usage"],
    },

    {
      id: "p1q8",
      stem: "다음 중 ‘상담’을 가장 잘 설명하는 것은?",
      options: [
        { id: "a", text: "문제에 대해 이야기하고 도움을 받는 것" },
        { id: "b", text: "음식을 포장하는 것" },
        { id: "c", text: "우편을 보내는 것" },
        { id: "d", text: "사진을 인화하는 것" },
      ],
      correctId: "a",
      explanation:
        "KR: ‘상담’=문제·진로 등에 대해 조언/도움을 받는 것.  \nRU: «консультация/совет».  \nEN: “counseling/consultation”.",
      tags: ["Services", "Meaning"],
    },

    {
      id: "p1q9",
      stem: "‘무료’의 뜻으로 알맞은 것은?",
      options: [
        { id: "a", text: "값을 내지 않음" },
        { id: "b", text: "매우 비쌈" },
        { id: "c", text: "반값" },
        { id: "d", text: "배송료만 냄" },
      ],
      correctId: "a",
      explanation:
        "KR: ‘무료’=돈이 들지 않음.  \nRU: «бесплатно».  \nEN: “free of charge”.",
      tags: ["Shopping", "Signs"],
    },

    {
      id: "p1q10",
      stem: "빈칸에 알맞은 것은?  \n날씨가 너무 추워서 난방을 더 ____ 했어요.",
      options: [
        { id: "a", text: "세게" },
        { id: "b", text: "조용히" },
        { id: "c", text: "천천히" },
        { id: "d", text: "깨끗이" },
      ],
      correctId: "a",
      explanation:
        "KR: 난방을 ‘세게/높게’ 하다(온도·세기 증가).  \nRU: «сделал отопление сильнее/повыше».  \nEN: “turned the heating up/stronger”.",
      tags: ["Daily life", "Adverbs"],
    },

    {
      id: "p1q11",
      stem: "다음 중 ‘유통기한’을 가장 잘 설명하는 것은?",
      options: [
        { id: "a", text: "음식을 안전하게 먹을 수 있는 마지막 날짜" },
        { id: "b", text: "가게가 여는 시간" },
        { id: "c", text: "택배가 오는 시간" },
        { id: "d", text: "회의 시작 시간" },
      ],
      correctId: "a",
      explanation:
        "KR: ‘유통기한’=섭취 가능한 최종 날짜.  \nRU: «срок годности (последняя дата употребления)».  \nEN: “expiration/best-before date”.",
      tags: ["Food", "Signs"],
    },

    {
      id: "p1q12",
      stem: "‘설명서’를 사용할 상황으로 가장 알맞은 것은?",
      options: [
        { id: "a", text: "새 전자제품을 사용할 때" },
        { id: "b", text: "밥을 먹을 때" },
        { id: "c", text: "인사를 할 때" },
        { id: "d", text: "사진을 볼 때" },
      ],
      correctId: "a",
      explanation:
        "KR: ‘설명서’=제품 사용 방법이 적힌 책자/종이.  \nRU: «инструкция к устройству».  \nEN: “user manual/instructions”.",
      tags: ["Usage", "Objects"],
    },
  ],
};

const PACK_G1: TestPack = {
  id: "topik1_vocab_plus_3",
  title: "TOPIK I — 공공기관·생활 한국어 (상)",
  level: "TOPIK I",
  section: "Vocabulary",
  durationSec: 16 * 60,
  savedKey: "pack_topik1_vocab_plus_3",
  questions: [
    {
      id: "p3q1",
      stem: "‘발급받다’의 의미로 가장 알맞은 것은?",
      options: [
        { id: "a", text: "기관에서 증명서를 받다" },
        { id: "b", text: "문서를 찢다" },
        { id: "c", text: "편지를 보내다" },
        { id: "d", text: "계약을 취소하다" },
      ],
      correctId: "a",
      explanation:
        "KR: 발급받다=기관이 만들어 준 서류 등을 받다.  \nRU: «получить (выданный учреждением) документ».  \nEN: “to receive an issued document from an institution”.",
      tags: ["Administration", "Documents"],
    },
    {
      id: "p3q2",
      stem: "은행에서 ‘통장을 개설하다’의 뜻은?",
      options: [
        { id: "a", text: "새 계좌를 만들다" },
        { id: "b", text: "카드를 반납하다" },
        { id: "c", text: "비밀번호를 지우다" },
        { id: "d", text: "송금을 취소하다" },
      ],
      correctId: "a",
      explanation:
        "KR: 통장 개설=새 계좌 만들기.  \nRU: «открыть счёт/книжку».  \nEN: “to open a new bank account”.",
      tags: ["Bank", "Money"],
    },
    {
      id: "p3q3",
      stem: "빈칸에 알맞은 것은?  \n진료를 받으려면 먼저 접수처에서 번호표를 ____.",
      options: [
        { id: "a", text: "뽑아야 합니다" },
        { id: "b", text: "구워야 합니다" },
        { id: "c", text: "젖어야 합니다" },
        { id: "d", text: "감아야 합니다" },
      ],
      correctId: "a",
      explanation:
        "KR: 번호표를 ‘뽑다’가 자연스러움.  \nRU: «взять талончик».  \nEN: “take a queue ticket”.",
      tags: ["Hospital", "Public"],
    },
    {
      id: "p3q4",
      stem: "‘유효기간’과 가장 관계있는 것은?",
      options: [
        { id: "a", text: "사용할 수 있는 기간" },
        { id: "b", text: "물건의 무게" },
        { id: "c", text: "색깔의 종류" },
        { id: "d", text: "주소의 위치" },
      ],
      correctId: "a",
      explanation:
        "KR: 유효기간=효력이 있는 기간.  \nRU: «срок действия».  \nEN: “valid period/expiration term”.",
      tags: ["Administration", "Policy"],
    },
    {
      id: "p3q5",
      stem: "‘민원’은 보통 어디에 제기하나요?",
      options: [
        { id: "a", text: "구청/시청 등 공공기관" },
        { id: "b", text: "제과점" },
        { id: "c", text: "미용실" },
        { id: "d", text: "세탁소" },
      ],
      correctId: "a",
      explanation:
        "KR: 민원=행정기관에 하는 각종 신청/문의/불편 신고.  \nRU: «обращение/заявление в госучреждение».  \nEN: “civil petition/administrative request to public offices”.",
      tags: ["Administration", "Public"],
    },
    {
      id: "p3q6",
      stem: "다음 중 ‘예약금을 내다’와 자연스럽게 이어지는 것은?",
      options: [
        { id: "a", text: "나머지는 현장에서 결제하다" },
        { id: "b", text: "책을 복사하다" },
        { id: "c", text: "우산을 빌리다" },
        { id: "d", text: "공원에서 뛰다" },
      ],
      correctId: "a",
      explanation:
        "KR: 예약금(보증금) 일부 지불 후 잔금 현장 결제.  \nRU: «внести предоплату, остальное на месте».  \nEN: “pay a deposit, settle balance on site”.",
      tags: ["Services", "Money"],
    },
    {
      id: "p3q7",
      stem: "‘재발급’이 필요한 경우는?",
      options: [
        { id: "a", text: "카드를 분실했을 때" },
        { id: "b", text: "주소를 기억할 때" },
        { id: "c", text: "전화기를 충전할 때" },
        { id: "d", text: "사진을 찍을 때" },
      ],
      correctId: "a",
      explanation:
        "KR: 재발급=분실/훼손 등으로 다시 발급.  \nRU: «переоформление/восстановление документа».  \nEN: “re-issuance due to loss/damage”.",
      tags: ["Administration", "Bank"],
    },
    {
      id: "p3q8",
      stem: "빈칸에 알맞은 것은?  \n지하철 안에서는 통화 음량을 ____ 주세요.",
      options: [
        { id: "a", text: "줄여" },
        { id: "b", text: "끓여" },
        { id: "c", text: "부려" },
        { id: "d", text: "길러" },
      ],
      correctId: "a",
      explanation:
        "KR: 음량/속도를 ‘줄이다’.  \nRU: «уменьшите громкость».  \nEN: “please lower the volume”.",
      tags: ["Transport", "Etiquette"],
    },
    {
      id: "p3q9",
      stem: "‘무상’과 반대 의미인 것은?",
      options: [
        { id: "a", text: "유상" },
        { id: "b", text: "우상" },
        { id: "c", text: "의상" },
        { id: "d", text: "영상" },
      ],
      correctId: "a",
      explanation:
        "KR: 무상=무료, 유상=유료.  \nRU: «бесплатно ↔ платно».  \nEN: “free of charge ↔ for a fee”.",
      tags: ["Policy", "Money"],
    },
    {
      id: "p3q10",
      stem: "다음 중 ‘처방전’을 받는 곳은?",
      options: [
        { id: "a", text: "병원/의원" },
        { id: "b", text: "우체국" },
        { id: "c", text: "미술관" },
        { id: "d", text: "은행 창구" },
      ],
      correctId: "a",
      explanation:
        "KR: 처방전=의사가 약 처방 내역을 적은 문서.  \nRU: «рецепт от врача».  \nEN: “medical prescription from a doctor”.",
      tags: ["Hospital", "Documents"],
    },
    {
      id: "p3q11",
      stem: "‘공과금’을 가장 잘 설명한 것은?",
      options: [
        { id: "a", text: "전기·가스·수도 등 요금" },
        { id: "b", text: "과일 가격" },
        { id: "c", text: "교통 벌금" },
        { id: "d", text: "학교 등록금" },
      ],
      correctId: "a",
      explanation:
        "KR: 공과금=공공요금(전기/가스/수도 등).  \nRU: «коммунальные платежи».  \nEN: “utility bills (electricity, gas, water)”.",
      tags: ["Living", "Money"],
    },
    {
      id: "p3q12",
      stem: "빈칸에 알맞은 것은?  \n택배가 도착했지만 부재 중이라 ____에 맡겨 두었습니다.",
      options: [
        { id: "a", text: "경비실" },
        { id: "b", text: "미술실" },
        { id: "c", text: "음악실" },
        { id: "d", text: "세탁기" },
      ],
      correctId: "a",
      explanation:
        "KR: 아파트 부재 시 경비실에 보관.  \nRU: «оставили у охраны/консьержа».  \nEN: “left it at the security office”.",
      tags: ["Delivery", "Housing"],
    },
    {
      id: "p3q13",
      stem: "‘증정품’의 뜻과 가장 가까운 것은?",
      options: [
        { id: "a", text: "무료로 주는 선물" },
        { id: "b", text: "반품한 물건" },
        { id: "c", text: "중고 제품" },
        { id: "d", text: "예약 필수 물건" },
      ],
      correctId: "a",
      explanation:
        "KR: 증정품=홍보/행사로 무료 제공.  \nRU: «подарок/сувенир бесплатно».  \nEN: “a free gift/premium”.",
      tags: ["Shopping", "Promo"],
    },
    {
      id: "p3q14",
      stem: "다음 중 ‘신청 마감’과 바른 연결은?",
      options: [
        { id: "a", text: "더 이상 신청을 받지 않음" },
        { id: "b", text: "신청을 강제로 실시" },
        { id: "c", text: "신청서를 자동 발급" },
        { id: "d", text: "신청서 분실 처리" },
      ],
      correctId: "a",
      explanation:
        "KR: 신청 마감=접수 종료.  \nRU: «окончание приёма заявок».  \nEN: “application closed/deadline passed”.",
      tags: ["Administration", "Deadline"],
    },
    {
      id: "p3q15",
      stem: "빈칸에 공손한 표현으로 알맞은 것은?  \n계좌번호를 다시 한 번 ____ 주시겠어요?",
      options: [
        { id: "a", text: "확인해" },
        { id: "b", text: "확인하" },
        { id: "c", text: "확인함" },
        { id: "d", text: "확인해라" },
      ],
      correctId: "a",
      explanation:
        "KR: ‘-아/어 주시겠어요?’ + 동사 어간: 확인해 주시겠어요.  \nRU: «не могли бы вы ещё раз проверить…».  \nEN: “could you please check again…”.",
      tags: ["Politeness", "Bank"],
    },
    {
      id: "p3q16",
      stem: "‘일회용품’ 사용을 줄이기 위한 행동으로 알맞은 것은?",
      options: [
        { id: "a", text: "개인 컵을 가져간다" },
        { id: "b", text: "비닐봉지를 더 받는다" },
        { id: "c", text: "빨대를 두 개 쓴다" },
        { id: "d", text: "종이컵만 사용한다" },
      ],
      correctId: "a",
      explanation:
        "KR: 일회용품 줄이기=텀블러/개인컵 사용.  \nRU: «уменьшить одноразовые — взять свою кружку».  \nEN: “reduce disposables → bring your own cup/tumbler”.",
      tags: ["Environment", "Lifestyle"],
    },
    {
      id: "p3q17",
      stem: "‘출입 통제 구역’ 표지의 의미는?",
      options: [
        { id: "a", text: "허가 없이 들어갈 수 없음" },
        { id: "b", text: "사진을 꼭 찍어야 함" },
        { id: "c", text: "음식물을 가져와야 함" },
        { id: "d", text: "반드시 뛰어야 함" },
      ],
      correctId: "a",
      explanation:
        "KR: 출입 통제=무단 출입 금지/허가 필요.  \nRU: «вход ограничен/нужен допуск».  \nEN: “restricted area; authorized entry only”.",
      tags: ["Signs", "Safety"],
    },
    {
      id: "p3q18",
      stem: "빈칸에 알맞은 것은?  \n계약서를 꼼꼼히 ____ 후 서명하세요.",
      options: [
        { id: "a", text: "확인한" },
        { id: "b", text: "끓인" },
        { id: "c", text: "젖은" },
        { id: "d", text: "기른" },
      ],
      correctId: "a",
      explanation:
        "KR: 문서를 ‘확인한 후’ 서명(=검토 후).  \nRU: «внимательно проверив договор, подпишите».  \nEN: “after carefully reviewing the contract, sign it”.",
      tags: ["Administration", "Usage"],
    },
  ],
};

// TOPIK II — Reading (kengaytirilgan 8 savol)
const PACK_R2: TestPack = {
  id: "topik2_reading_mini",
  title: "TOPIK II — O‘qish mini",
  level: "TOPIK II",
  section: "Reading",
  durationSec: 12 * 60,
  savedKey: "pack_topik2_reading_mini",
  questions: [
    {
      id: "r2q1",
      stem:
        "다음 글의 빈칸에 들어갈 가장 알맞은 말을 고르십시오:\n\n" +
        "최근 직장인들은 업무와 삶의 균형을 중요하게 생각한다. 이를 위해 회사는 유연 근무제를 도입하거나, 직원 복지를 강화하는 등 다양한 노력을 하고 있다. " +
        "이러한 변화는 직원들의 만족도를 높이는 데 (   ) 역할을 한다.",
      options: [
        { id: "a", text: "중요한" },
        { id: "b", text: "사소한" },
        { id: "c", text: "어려운" },
        { id: "d", text: "불필요한" }
      ],
      correctId: "a",
      explanation: "긍정적인 맥락이므로 ‘중요한 역할을 하다’가 자연스럽다.",
      tags: ["읽기", "빈칸"]
    },
    {
      id: "r2q2",
      stem:
        "밑줄 친 부분의 의미와 가장 가까운 것을 고르십시오:\n\n" +
        "환경 문제에 대한 관심이 (갈수록) 커지고 있다.",
      options: [
        { id: "a", text: "점점" },
        { id: "b", text: "잠깐" },
        { id: "c", text: "마침" },
        { id: "d", text: "갑자기" }
      ],
      correctId: "a",
      explanation: "‘갈수록’은 ‘점점/시간이 지날수록’의 뜻.",
      tags: ["어휘", "부사"]
    },
    {
      id: "r2q3",
      stem:
        "다음 글의 주제로 가장 알맞은 것을 고르십시오:\n\n" +
        "현대 사회에서는 개인의 취미 활동이 스트레스 관리에 큰 도움이 된다. 취미는 단순한 여가 활동을 넘어 자기 계발과 사회적 교류의 수단이 될 수 있다.",
      options: [
        { id: "a", text: "취미 활동의 다양한 의미와 효과" },
        { id: "b", text: "현대 사회의 문제점" },
        { id: "c", text: "스트레스의 의학적 정의" },
        { id: "d", text: "자기 계발을 위한 유학" }
      ],
      correctId: "a",
      explanation: "전체 내용이 취미의 가치와 효과를 설명함.",
      tags: ["읽기", "주제"]
    },
    // --- Yangi savollar ---
    {
      id: "r2q4",
      stem:
        "다음 글의 내용과 일치하는 것을 고르십시오:\n\n" +
        "최근 온라인 교육 플랫폼은 시간과 장소에 구애받지 않는 학습 환경을 제공한다. 그러나 스스로 학습 계획을 세우지 않으면 효과가 떨어질 수 있다.",
      options: [
        { id: "a", text: "온라인 교육은 정해진 장소에서만 학습할 수 있다." },
        { id: "b", text: "온라인 교육은 학습 계획이 없어도 효과가 높다." },
        { id: "c", text: "온라인 교육은 자기 주도성이 중요하다." },
        { id: "d", text: "온라인 교육은 시간 제약이 많다." }
      ],
      correctId: "c",
      explanation: "자기 주도성(스스로 계획)이 없으면 효과↓ → C가 정답.",
      tags: ["읽기", "사실확인"]
    },
    {
      id: "r2q5",
      stem:
        "다음 글의 흐름으로 볼 때, (   )에 들어갈 표현으로 가장 알맞은 것을 고르십시오:\n\n" +
        "도시 공원은 시민들의 휴식 공간일 뿐만 아니라 다양한 문화 행사가 열리는 장소이기도 하다. (   ) 주말마다 가족 단위 방문객이 꾸준히 늘고 있다.",
      options: [
        { id: "a", text: "그럼에도" },
        { id: "b", text: "따라서" },
        { id: "c", text: "오히려" },
        { id: "d", text: "하지만" }
      ],
      correctId: "b",
      explanation: "앞의 사실 → 결과(증가). 인과 연결 ‘따라서’가 자연스럽다.",
      tags: ["읽기", "연결어"]
    },
    {
      id: "r2q6",
      stem:
        "다음 글의 요지로 가장 알맞은 것을 고르십시오:\n\n" +
        "기술 발전으로 일자리가 사라질 것이라는 우려가 있지만, 동시에 새로운 직업도 생겨나고 있다. 중요한 것은 변화에 맞춰 필요한 역량을 갖추는 일이다.",
      options: [
        { id: "a", text: "기술 발전은 일자리를 완전히 없앤다." },
        { id: "b", text: "새로운 직업이 생겨나도 준비는 필요 없다." },
        { id: "c", text: "변화에 맞춘 역량 개발이 핵심이다." },
        { id: "d", text: "기술 발전은 사회에 해롭다." }
      ],
      correctId: "c",
      explanation: "핵심 메시지=역량 개발의 필요성.",
      tags: ["읽기", "요지"]
    },
    {
      id: "r2q7",
      stem:
        "밑줄 친 표현의 쓰임이 옳은 것을 고르십시오:\n\n" +
        "‘회사가 비용을 절감한 (덕분에) 직원 복지가 향상되었다.’",
      options: [
        { id: "a", text: "부정적 결과의 원인에 쓰인다." },
        { id: "b", text: "긍정적 원인·덕택을 나타낸다." },
        { id: "c", text: "대조를 나타낸다." },
        { id: "d", text: "가정·추측을 나타낸다." }
      ],
      correctId: "b",
      explanation: "‘덕분에’=긍정적 원인/덕택.",
      tags: ["문법", "표현"]
    },
    {
      id: "r2q8",
      stem:
        "다음 글의 내용으로 보아, 필자가 말하고자 하는 바와 가장 가까운 것을 고르십시오:\n\n" +
        "일상의 작은 습관 변화가 건강에 큰 영향을 미친다. 엘리베이터 대신 계단을 이용하고, 짧은 거리에는 걸어다니는 것만으로도 체력이 향상될 수 있다.",
      options: [
        { id: "a", text: "건강은 유전적 요인에만 좌우된다." },
        { id: "b", text: "큰 운동 계획이 아니면 효과가 없다." },
        { id: "c", text: "작은 실천도 건강에 도움이 된다." },
        { id: "d", text: "운동은 체력에 영향을 주지 않는다." }
      ],
      correctId: "c",
      explanation: "작은 실천의 중요성을 강조.",
      tags: ["읽기", "주장"]
    }
  ]
};


const PACK_G2: TestPack = {
  id: "topik2_grammar_51_style",
  title: "TOPIK II — 51-uslub (bo‘shliq) qo‘shimcha",
  level: "TOPIK II",
  section: "Grammar",
  durationSec: 10 * 60,
  savedKey: "pack_topik2_grammar_51",
  questions: [
    {
      id: "g2q1",
      stem: "본 설문은 익명___ 진행됩니다.",
      options: [
        { id: "a", text: "으로" }, { id: "b", text: "에게" }, { id: "c", text: "에서" }, { id: "d", text: "만큼" }
      ],
      correctId: "a",
      explanation: "방식/수단: N+으로/로 (‘익명으로’).",
      tags: ["쓰기 51","조사"]
    },
    {
      id: "g2q2",
      stem: "안전을 위하___ 속도를 줄여 주십시오.",
      options: [
        { id: "a", text: "여" }, { id: "b", text: "고" }, { id: "c", text: "면" }, { id: "d", text: "도" }
      ],
      correctId: "a",
      explanation: "목적: 위하여(= 위해) → ‘위하여’.",
      tags: ["연결어미"]
    },
    {
      id: "g2q3",
      stem: "신청서가 누락되___ 접수가 취소될 수 있습니다.",
      options: [
        { id: "a", text: "면" }, { id: "b", text: "도록" }, { id: "c", text: "든지" }, { id: "d", text: "라서" }
      ],
      correctId: "a",
      explanation: "조건: -(으)면.",
      tags: ["조건"]
    },
    {
      id: "g2q4",
      stem: "피해가 발생하지 않___ 즉시 중단하십시오.",
      options: [
        { id: "a", text: "도록" }, { id: "b", text: "게" }, { id: "c", text: "려면" }, { id: "d", text: "지만" }
      ],
      correctId: "a",
      explanation: "목적/방지: V-도록 (‘…masligi uchun’).",
      tags: ["목적","연결어미"]
    },
    {
      id: "g2q5",
      stem: "회의는 10층 대회의실___ 진행됩니다.",
      options: [
        { id: "a", text: "에" }, { id: "b", text: "에서" }, { id: "c", text: "에게서" }, { id: "d", text: "로" }
      ],
      correctId: "b",
      explanation: "장소(행위 발생): 에서.",
      tags: ["조사"]
    },
    {
      id: "g2q6",
      stem: "불가피한 사유___ 일정 변경이 있을 수 있습니다.",
      options: [
        { id: "a", text: "로" }, { id: "b", text: "까지" }, { id: "c", text: "만" }, { id: "d", text: "보다" }
      ],
      correctId: "a",
      explanation: "원인/사유: N(으)로.",
      tags: ["원인","조사"]
    },
    {
      id: "g2q7",
      stem: "아래 사항을 확인하___ 협조 부탁드립니다.",
      options: [
        { id: "a", text: "시고" }, { id: "b", text: "면서" }, { id: "c", text: "다가" }, { id: "d", text: "자마자" }
      ],
      correctId: "a",
      explanation: "존대 연결: V-시고 (공지/안내문에서 자주 사용).",
      tags: ["존대","연결어미"]
    },
    {
      id: "g2q8",
      stem: "회의 자료___ 첨부합니다.",
      options: [
        { id: "a", text: "는" }, { id: "b", text: "를" }, { id: "c", text: "과" }, { id: "d", text: "에게" }
      ],
      correctId: "b",
      explanation: "목적어 표지: 을/를.",
      tags: ["조사"]
    },
    {
      id: "g2q9",
      stem: "연구 결과___ 따르면 다음과 같습니다.",
      options: [
        { id: "a", text: "에" }, { id: "b", text: "로" }, { id: "c", text: "만" }, { id: "d", text: "과" }
      ],
      correctId: "a",
      explanation: "근거: N에 따르면.",
      tags: ["관용표현"]
    },
    {
      id: "g2q10",
      stem: "사용자는 약관___ 동의해야 합니다.",
      options: [
        { id: "a", text: "이" }, { id: "b", text: "에" }, { id: "c", text: "으로" }, { id: "d", text: "에서" }
      ],
      correctId: "b",
      explanation: "관용: N에 동의하다 (‘…ga rozi bo‘lmoq’).",
      tags: ["관용표현","조사"]
    },
    {
      id: "g2q11",
      stem: "1인당 2개까__ 신청할 수 있습니다.",
      options: [
        { id: "a", text: "지" }, { id: "b", text: "서" }, { id: "c", text: "만" }, { id: "d", text: "와" }
      ],
      correctId: "a",
      explanation: "까지: ‘… gacha (limit)’.",
      tags: ["부사격조사"]
    },
    {
      id: "g2q12",
      stem: "필요 시 추가 서류를 제출하___ 바랍니다.",
      options: [
        { id: "a", text: "시기" }, { id: "b", text: "여서" }, { id: "c", text: "는지" }, { id: "d", text: "려고" }
      ],
      correctId: "a",
      explanation: "격식체 요청: V-시기 바랍니다.",
      tags: ["격식","요청표현"]
    },
    {
      id: "g2q13",
      stem: "공지 사항을 숙지하___ 주시기 바랍니다.",
      options: [
        { id: "a", text: "여" }, { id: "b", text: "도록" }, { id: "c", text: "거나" }, { id: "d", text: "지만" }
      ],
      correctId: "a",
      explanation: "V-아/어 주시기 바랍니다 관용형.",
      tags: ["격식","요청표현"]
    },
    {
      id: "g2q14",
      stem: "행사는 상황에 따___ 변경될 수 있습니다.",
      options: [
        { id: "a", text: "라" }, { id: "b", text: "러" }, { id: "c", text: "릴" }, { id: "d", text: "런" }
      ],
      correctId: "a",
      explanation: "따라 (합성어 내부 분철): ‘따라 변경되다’.",
      tags: ["어휘","표기"]
    },
    {
      id: "g2q15",
      stem: "문의 사항은 아래 연락처___ 바랍니다.",
      options: [
        { id: "a", text: "로" }, { id: "b", text: "만" }, { id: "c", text: "마다" }, { id: "d", text: "처럼" }
      ],
      correctId: "a",
      explanation: "경로/매개: N(으)로 (‘… orqali’).",
      tags: ["조사","관용표현"]
    }
  ]
};


const PACK_L1: TestPack = {
  id: "topik1_listening_mini",
  title: "TOPIK I — Eshitish (mini to‘plam, 10 savol)",
  level: "TOPIK I",
  section: "Listening",
  durationSec: 12 * 60, // 12 daqiqa
  savedKey: "pack_topik1_listening_mini",
  questions: [
    {
      id: "l1q1",
      stem: "남자는 무엇을 하려고 합니까?\n(지문) 남자: 오늘 도서관에 가서 책을 빌리려고 해요.",
      options: [
        { id: "a", text: "Kitob sotib olmoqchi" },
        { id: "b", text: "Kitob ijaraga olmoqchi" },
        { id: "c", text: "Sport bilan shug‘ullanmoqchi" },
        { id: "d", text: "Ishga bormoqchi" }
      ],
      correctId: "b",
      explanation: "‘빌리다’ — ijaraga/qarzga olish.",
      tags: ["Listening"]
    },
    {
      id: "l1q2",
      stem: "여자는 왜 늦었습니까?\n(지문) 여자: 버스가 늦게 와서 조금 늦었어요.",
      options: [
        { id: "a", text: "U uxlab qolgan" },
        { id: "b", text: "Avtobus kech kelgan" },
        { id: "c", text: "Yo‘lni adashgan" },
        { id: "d", text: "Havo yomon bo‘lgan" }
      ],
      correctId: "b",
      explanation: "‘버스가 늦게 와서’ — avtobus sabab.",
      tags: ["Listening"]
    },
    {
      id: "l1q3",
      stem: "남자는 어디에 갑니까?\n(지문) 남자: 약이 다 떨어져서 약국에 좀 다녀오려고요.",
      options: [
        { id: "a", text: "Kasalxonaga" },
        { id: "b", text: "Dorixonaga" },
        { id: "c", text: "Do‘konga" },
        { id: "d", text: "Kutubxonaga" }
      ],
      correctId: "b",
      explanation: "‘약국’ — dorixona.",
      tags: ["Listening","Places"]
    },
    {
      id: "l1q4",
      stem: "여자는 무엇을 사고 싶어 합니까?\n(지문) 여자: 내일 비 온대요. 우산이 없어서 하나 사야겠어요.",
      options: [
        { id: "a", text: "Plash" },
        { id: "b", text: "Qo‘lqop" },
        { id: "c", text: "Soyabon" },
        { id: "d", text: "Poyabzal" }
      ],
      correctId: "c",
      explanation: "‘우산’ — soyabon.",
      tags: ["Listening","Shopping"]
    },
    {
      id: "l1q5",
      stem: "남자는 왜 지하철을 타려고 합니까?\n(지문) 남자: 길이 많이 막혀서요. 지하철이 더 빠를 것 같아요.",
      options: [
        { id: "a", text: "Arzon bo‘lgani uchun" },
        { id: "b", text: "Qulay bo‘lgani uchun" },
        { id: "c", text: "Tez bo‘lgani uchun" },
        { id: "d", text: "Uzoq bo‘lgani uchun" }
      ],
      correctId: "c",
      explanation: "‘더 빠를 것 같아요’ — tezroq.",
      tags: ["Listening","Transport"]
    },
    {
      id: "l1q6",
      stem: "여자는 오늘 무엇을 합니까?\n(지문) 여자: 오늘 회의가 있어서 회사에 일찍 가야 해요.",
      options: [
        { id: "a", text: "Ishga erta boradi" },
        { id: "b", text: "Uyda dam oladi" },
        { id: "c", text: "Sayohatga ketadi" },
        { id: "d", text: "Do‘stlari bilan uchrashadi" }
      ],
      correctId: "a",
      explanation: "‘일찍 가야 해요’ — erta borishi kerak.",
      tags: ["Listening","Work"]
    },
    {
      id: "l1q7",
      stem: "남자는 무엇을 먹고 싶어 합니까?\n(지문) 남자: 요즘 매운 음식이 땡겨요. 떡볶이 먹을래요?",
      options: [
        { id: "a", text: "Kimbap" },
        { id: "b", text: "Tteokbokki" },
        { id: "c", text: "Naengmyeon" },
        { id: "d", text: "Sashimi" }
      ],
      correctId: "b",
      explanation: "‘떡볶이’ — achchiq guruch pirogi taomi.",
      tags: ["Listening","Food"]
    },
    {
      id: "l1q8",
      stem: "여자는 무엇을 부탁합니까?\n(지문) 여자: 프린터가 고장 나서요. 이 파일 좀 출력해 주실 수 있어요?",
      options: [
        { id: "a", text: "Faylni tahrirlashni" },
        { id: "b", text: "Faylni jo‘natishni" },
        { id: "c", text: "Faylni chop etishni" },
        { id: "d", text: "Faylni o‘chirishni" }
      ],
      correctId: "c",
      explanation: "‘출력하다’ — print/chop etmoq.",
      tags: ["Listening","Office"]
    },
    {
      id: "l1q9",
      stem: "남자는 왜 피곤합니까?\n(지문) 남자: 어제 늦게까지 숙제를 하느라 잠을 못 잤어요.",
      options: [
        { id: "a", text: "Kech ishlagani uchun" },
        { id: "b", text: "Sport qilgani uchun" },
        { id: "c", text: "Ko‘p yurgani uchun" },
        { id: "d", text: "Mehmon kutgani uchun" }
      ],
      correctId: "a",
      explanation: "‘늦게까지 … 하느라’ — shuning uchun (charchagan).",
      tags: ["Listening","Reason"]
    },
    {
      id: "l1q10",
      stem: "여자는 주말에 무엇을 할 계획입니까?\n(지문) 여자: 날씨가 좋으면 친구랑 공원에서 산책하려고 해요.",
      options: [
        { id: "a", text: "Muzeyga borish" },
        { id: "b", text: "Parkda sayr qilish" },
        { id: "c", text: "Kinoga borish" },
        { id: "d", text: "Bozorda xarid qilish" }
      ],
      correctId: "b",
      explanation: "‘산책하다’ — sayr qilmoq.",
      tags: ["Listening","Weekend"]
    }
  ]
};


const PACK_R5: TestPack = {
  id: "topik1_vocab_plus_3",
  title: "TOPIK I+ — 공공기관·생활 한국어 (상)",
  level: "TOPIK I",
  section: "Vocabulary",
  durationSec: 16 * 60,
  savedKey: "pack_topik1_vocab_plus_3",
  questions: [
    {
      id: "p3q1",
      stem: "‘발급받다’의 의미로 가장 알맞은 것은?",
      options: [
        { id: "a", text: "기관에서 증명서를 받다" },
        { id: "b", text: "문서를 찢다" },
        { id: "c", text: "편지를 보내다" },
        { id: "d", text: "계약을 취소하다" },
      ],
      correctId: "a",
      explanation:
        "KR: 발급받다=기관이 만들어 준 서류 등을 받다.  \nRU: «получить (выданный учреждением) документ».  \nEN: “to receive an issued document from an institution”.",
      tags: ["Administration", "Documents"],
    },
    {
      id: "p3q2",
      stem: "은행에서 ‘통장을 개설하다’의 뜻은?",
      options: [
        { id: "a", text: "새 계좌를 만들다" },
        { id: "b", text: "카드를 반납하다" },
        { id: "c", text: "비밀번호를 지우다" },
        { id: "d", text: "송금을 취소하다" },
      ],
      correctId: "a",
      explanation:
        "KR: 통장 개설=새 계좌 만들기.  \nRU: «открыть счёт/книжку».  \nEN: “to open a new bank account”.",
      tags: ["Bank", "Money"],
    },
    {
      id: "p3q3",
      stem: "빈칸에 알맞은 것은?  \n진료를 받으려면 먼저 접수처에서 번호표를 ____.",
      options: [
        { id: "a", text: "뽑아야 합니다" },
        { id: "b", text: "구워야 합니다" },
        { id: "c", text: "젖어야 합니다" },
        { id: "d", text: "감아야 합니다" },
      ],
      correctId: "a",
      explanation:
        "KR: 번호표를 ‘뽑다’가 자연스러움.  \nRU: «взять талончик».  \nEN: “take a queue ticket”.",
      tags: ["Hospital", "Public"],
    },
    {
      id: "p3q4",
      stem: "‘유효기간’과 가장 관계있는 것은?",
      options: [
        { id: "a", text: "사용할 수 있는 기간" },
        { id: "b", text: "물건의 무게" },
        { id: "c", text: "색깔의 종류" },
        { id: "d", text: "주소의 위치" },
      ],
      correctId: "a",
      explanation:
        "KR: 유효기간=효력이 있는 기간.  \nRU: «срок действия».  \nEN: “valid period/expiration term”.",
      tags: ["Administration", "Policy"],
    },
    {
      id: "p3q5",
      stem: "‘민원’은 보통 어디에 제기하나요?",
      options: [
        { id: "a", text: "구청/시청 등 공공기관" },
        { id: "b", text: "제과점" },
        { id: "c", text: "미용실" },
        { id: "d", text: "세탁소" },
      ],
      correctId: "a",
      explanation:
        "KR: 민원=행정기관에 하는 각종 신청/문의/불편 신고.  \nRU: «обращение/заявление в госучреждение».  \nEN: “civil petition/administrative request to public offices”.",
      tags: ["Administration", "Public"],
    },
    {
      id: "p3q6",
      stem: "다음 중 ‘예약금을 내다’와 자연스럽게 이어지는 것은?",
      options: [
        { id: "a", text: "나머지는 현장에서 결제하다" },
        { id: "b", text: "책을 복사하다" },
        { id: "c", text: "우산을 빌리다" },
        { id: "d", text: "공원에서 뛰다" },
      ],
      correctId: "a",
      explanation:
        "KR: 예약금(보증금) 일부 지불 후 잔금 현장 결제.  \nRU: «внести предоплату, остальное на месте».  \nEN: “pay a deposit, settle balance on site”.",
      tags: ["Services", "Money"],
    },
    {
      id: "p3q7",
      stem: "‘재발급’이 필요한 경우는?",
      options: [
        { id: "a", text: "카드를 분실했을 때" },
        { id: "b", text: "주소를 기억할 때" },
        { id: "c", text: "전화기를 충전할 때" },
        { id: "d", text: "사진을 찍을 때" },
      ],
      correctId: "a",
      explanation:
        "KR: 재발급=분실/훼손 등으로 다시 발급.  \nRU: «переоформление/восстановление документа».  \nEN: “re-issuance due to loss/damage”.",
      tags: ["Administration", "Bank"],
    },
    {
      id: "p3q8",
      stem: "빈칸에 알맞은 것은?  \n지하철 안에서는 통화 음량을 ____ 주세요.",
      options: [
        { id: "a", text: "줄여" },
        { id: "b", text: "끓여" },
        { id: "c", text: "부려" },
        { id: "d", text: "길러" },
      ],
      correctId: "a",
      explanation:
        "KR: 음량/속도를 ‘줄이다’.  \nRU: «уменьшите громкость».  \nEN: “please lower the volume”.",
      tags: ["Transport", "Etiquette"],
    },
    {
      id: "p3q9",
      stem: "‘무상’과 반대 의미인 것은?",
      options: [
        { id: "a", text: "유상" },
        { id: "b", text: "우상" },
        { id: "c", text: "의상" },
        { id: "d", text: "영상" },
      ],
      correctId: "a",
      explanation:
        "KR: 무상=무료, 유상=유료.  \nRU: «бесплатно ↔ платно».  \nEN: “free of charge ↔ for a fee”.",
      tags: ["Policy", "Money"],
    },
    {
      id: "p3q10",
      stem: "다음 중 ‘처방전’을 받는 곳은?",
      options: [
        { id: "a", text: "병원/의원" },
        { id: "b", text: "우체국" },
        { id: "c", text: "미술관" },
        { id: "d", text: "은행 창구" },
      ],
      correctId: "a",
      explanation:
        "KR: 처방전=의사가 약 처방 내역을 적은 문서.  \nRU: «рецепт от врача».  \nEN: “medical prescription from a doctor”.",
      tags: ["Hospital", "Documents"],
    },
    {
      id: "p3q11",
      stem: "‘공과금’을 가장 잘 설명한 것은?",
      options: [
        { id: "a", text: "전기·가스·수도 등 요금" },
        { id: "b", text: "과일 가격" },
        { id: "c", text: "교통 벌금" },
        { id: "d", text: "학교 등록금" },
      ],
      correctId: "a",
      explanation:
        "KR: 공과금=공공요금(전기/가스/수도 등).  \nRU: «коммунальные платежи».  \nEN: “utility bills (electricity, gas, water)”.",
      tags: ["Living", "Money"],
    },
    {
      id: "p3q12",
      stem: "빈칸에 알맞은 것은?  \n택배가 도착했지만 부재 중이라 ____에 맡겨 두었습니다.",
      options: [
        { id: "a", text: "경비실" },
        { id: "b", text: "미술실" },
        { id: "c", text: "음악실" },
        { id: "d", text: "세탁기" },
      ],
      correctId: "a",
      explanation:
        "KR: 아파트 부재 시 경비실에 보관.  \nRU: «оставили у охраны/консьержа».  \nEN: “left it at the security office”.",
      tags: ["Delivery", "Housing"],
    },
    {
      id: "p3q13",
      stem: "‘증정품’의 뜻과 가장 가까운 것은?",
      options: [
        { id: "a", text: "무료로 주는 선물" },
        { id: "b", text: "반품한 물건" },
        { id: "c", text: "중고 제품" },
        { id: "d", text: "예약 필수 물건" },
      ],
      correctId: "a",
      explanation:
        "KR: 증정품=홍보/행사로 무료 제공.  \nRU: «подарок/сувенир бесплатно».  \nEN: “a free gift/premium”.",
      tags: ["Shopping", "Promo"],
    },
    {
      id: "p3q14",
      stem: "다음 중 ‘신청 마감’과 바른 연결은?",
      options: [
        { id: "a", text: "더 이상 신청을 받지 않음" },
        { id: "b", text: "신청을 강제로 실시" },
        { id: "c", text: "신청서를 자동 발급" },
        { id: "d", text: "신청서 분실 처리" },
      ],
      correctId: "a",
      explanation:
        "KR: 신청 마감=접수 종료.  \nRU: «окончание приёма заявок».  \nEN: “application closed/deadline passed”.",
      tags: ["Administration", "Deadline"],
    },
    {
      id: "p3q15",
      stem: "빈칸에 공손한 표현으로 알맞은 것은?  \n계좌번호를 다시 한 번 ____ 주시겠어요?",
      options: [
        { id: "a", text: "확인해" },
        { id: "b", text: "확인하" },
        { id: "c", text: "확인함" },
        { id: "d", text: "확인해라" },
      ],
      correctId: "a",
      explanation:
        "KR: ‘-아/어 주시겠어요?’ + 동사 어간: 확인해 주시겠어요.  \nRU: «не могли бы вы ещё раз проверить…».  \nEN: “could you please check again…”.",
      tags: ["Politeness", "Bank"],
    },
    {
      id: "p3q16",
      stem: "‘일회용품’ 사용을 줄이기 위한 행동으로 알맞은 것은?",
      options: [
        { id: "a", text: "개인 컵을 가져간다" },
        { id: "b", text: "비닐봉지를 더 받는다" },
        { id: "c", text: "빨대를 두 개 쓴다" },
        { id: "d", text: "종이컵만 사용한다" },
      ],
      correctId: "a",
      explanation:
        "KR: 일회용품 줄이기=텀블러/개인컵 사용.  \nRU: «уменьшить одноразовые — взять свою кружку».  \nEN: “reduce disposables → bring your own cup/tumbler”.",
      tags: ["Environment", "Lifestyle"],
    },
    {
      id: "p3q17",
      stem: "‘출입 통제 구역’ 표지의 의미는?",
      options: [
        { id: "a", text: "허가 없이 들어갈 수 없음" },
        { id: "b", text: "사진을 꼭 찍어야 함" },
        { id: "c", text: "음식물을 가져와야 함" },
        { id: "d", text: "반드시 뛰어야 함" },
      ],
      correctId: "a",
      explanation:
        "KR: 출입 통제=무단 출입 금지/허가 필요.  \nRU: «вход ограничен/нужен допуск».  \nEN: “restricted area; authorized entry only”.",
      tags: ["Signs", "Safety"],
    },
    {
      id: "p3q18",
      stem: "빈칸에 알맞은 것은?  \n계약서를 꼼꼼히 ____ 후 서명하세요.",
      options: [
        { id: "a", text: "확인한" },
        { id: "b", text: "끓인" },
        { id: "c", text: "젖은" },
        { id: "d", text: "기른" },
      ],
      correctId: "a",
      explanation:
        "KR: 문서를 ‘확인한 후’ 서명(=검토 후).  \nRU: «внимательно проверив договор, подпишите».  \nEN: “after carefully reviewing the contract, sign it”.",
      tags: ["Administration", "Usage"],
    },
  ],
};

const PACK_TOPIK1_PLUS_BANK_HOSPITAL: TestPack = {
  id: "topik1_vocab_bank_hospital",
  title: "TOPIK I+ — 은행·병원 필수 어휘",
  level: "TOPIK I",
  section: "Grammar",
  durationSec: 15 * 60,
  savedKey: "pack_topik1_bank_hospital",
  questions: [
    {
      id: "bhq1",
      stem: "‘창구에서 번호표를 뽑다’의 의미는?",
      options: [
        { id: "a", text: "순서를 받기 위해 표를 가져가다" },
        { id: "b", text: "표를 버리다" },
        { id: "c", text: "표에 돈을 넣다" },
        { id: "d", text: "표를 우편으로 보내다" },
      ],
      correctId: "a",
      explanation:
        "KR: 은행/병원 등에서 대기 순서표를 ‘뽑다’.  \nRU: «взять талончик очереди».  \nEN: “take a queue ticket at the counter”.",
      tags: ["Bank", "Hospital", "Public"],
    },
    {
      id: "bhq2",
      stem: "‘무통장 입금’은 어떤 상황에 쓰나요?",
      options: [
        { id: "a", text: "통장 없이 계좌에 돈을 넣을 때" },
        { id: "b", text: "계좌를 해지할 때" },
        { id: "c", text: "외화를 환전할 때" },
        { id: "d", text: "현금을 인출할 때" },
      ],
      correctId: "a",
      explanation:
        "KR: 무통장 입금=통장 없이 예금.  \nRU: «пополнение счёта без книжки».  \nEN: “deposit without passbook”.",
      tags: ["Bank", "Money"],
    },
    {
      id: "bhq3",
      stem: "빈칸에 알맞은 것은?  \n해외로 송금하려면 수수료와 ___ 정보를 확인해야 합니다.",
      options: [
        { id: "a", text: "수취인" },
        { id: "b", text: "주차장" },
        { id: "c", text: "정류장" },
        { id: "d", text: "온도계" },
      ],
      correctId: "a",
      explanation:
        "KR: 해외송금=수수료+수취인(받는 사람) 정보 확인.  \nRU: «комиссия и данные получателя».  \nEN: “check fee and beneficiary info”.",
      tags: ["Bank", "Transfer"],
    },
    {
      id: "bhq4",
      stem: "‘잔액 조회’의 뜻은?",
      options: [
        { id: "a", text: "현재 남아 있는 돈을 확인하다" },
        { id: "b", text: "새 계좌를 만들다" },
        { id: "c", text: "카드를 반납하다" },
        { id: "d", text: "비밀번호를 바꾸다" },
      ],
      correctId: "a",
      explanation:
        "KR: 잔액 조회=남은 금액 확인.  \nRU: «проверка остатка».  \nEN: “balance inquiry”.",
      tags: ["Bank"],
    },
    {
      id: "bhq5",
      stem: "‘현금 인출 한도’와 가장 관련 있는 것은?",
      options: [
        { id: "a", text: "하루에 뽑을 수 있는 최대 금액" },
        { id: "b", text: "이자율" },
        { id: "c", text: "환율" },
        { id: "d", text: "우편 요금" },
      ],
      correctId: "a",
      explanation:
        "KR: 인출 한도=하루/회당 최대 인출 금액.  \nRU: «лимит снятия наличных».  \nEN: “cash withdrawal limit”.",
      tags: ["Bank", "Limit"],
    },
    {
      id: "bhq6",
      stem: "진료 전에 ‘접수하다’의 의미로 가장 알맞은 것은?",
      options: [
        { id: "a", text: "개인 정보와 증상을 등록하다" },
        { id: "b", text: "약을 조제하다" },
        { id: "c", text: "수술을 시작하다" },
        { id: "d", text: "처방전을 폐기하다" },
      ],
      correctId: "a",
      explanation:
        "KR: 접수=기본정보/진료과 등록.  \nRU: «регистрация/запись у стойки».  \nEN: “check-in/register for treatment”.",
      tags: ["Hospital", "Reception"],
    },
    {
      id: "bhq7",
      stem: "빈칸에 가장 자연스러운 것은?  \n오늘은 내과가 ____이라 오후에는 진료가 없습니다.",
      options: [
        { id: "a", text: "휴진" },
        { id: "b", text: "유통" },
        { id: "c", text: "할부" },
        { id: "d", text: "개설" },
      ],
      correctId: "a",
      explanation:
        "KR: 휴진=진료 쉬는 날/시간.  \nRU: «приёма нет (выходной врача)».  \nEN: “closed/no consultation today (doctor off)”.",
      tags: ["Hospital", "Schedule"],
    },
    {
      id: "bhq8",
      stem: "의사가 ‘금식하세요’라고 말했을 때 행동은?",
      options: [
        { id: "a", text: "음식과 음료를 먹지 않는다" },
        { id: "b", text: "물을 많이 마신다" },
        { id: "c", text: "간식을 준비한다" },
        { id: "d", text: "매운 음식을 먹는다" },
      ],
      correctId: "a",
      explanation:
        "KR: 금식=먹지 않기(검사/수술 전).  \nRU: «воздержаться от еды/питья».  \nEN: “fast (no food/drink)”.",
      tags: ["Hospital", "Instructions"],
    },
    {
      id: "bhq9",
      stem: "‘처방전을 조제하다’에서 ‘조제하다’의 뜻은?",
      options: [
        { id: "a", text: "약을 처방에 맞게 만들어 주다" },
        { id: "b", text: "진단서를 인쇄하다" },
        { id: "c", text: "주사를 예약하다" },
        { id: "d", text: "검사비를 환불하다" },
      ],
      correctId: "a",
      explanation:
        "KR: 조제=약국에서 처방대로 약을 준비.  \nRU: «приготовить лекарство по рецепту».  \nEN: “dispense/compound medication per prescription”.",
      tags: ["Hospital", "Pharmacy"],
    },
    {
      id: "bhq10",
      stem: "빈칸에 알맞은 것은?  \n진료비는 카드 ___ 현금 모두 가능합니다.",
      options: [
        { id: "a", text: "또는" },
        { id: "b", text: "그러나" },
        { id: "c", text: "만큼" },
        { id: "d", text: "보다" },
      ],
      correctId: "a",
      explanation:
        "KR: 선택 나열 ‘A 또는 B’.  \nRU: «картой или наличными».  \nEN: “card or cash”.",
      tags: ["Hospital", "Payment", "Grammar"],
    },
    {
      id: "bhq11",
      stem: "은행에서 ‘신분증을 제시해 주세요’의 의미는?",
      options: [
        { id: "a", text: "신분증을 보여 달라" },
        { id: "b", text: "신분증을 버려 달라" },
        { id: "c", text: "신분증을 우편으로 보내 달라" },
        { id: "d", text: "신분증을 복사하지 말라" },
      ],
      correctId: "a",
      explanation:
        "KR: 제시=보여 주다.  \nRU: «предъявите удостоверение».  \nEN: “please present your ID”.",
      tags: ["Bank", "KYC"],
    },
    {
      id: "bhq12",
      stem: "‘자동이체를 신청하다’의 결과로 자연스러운 것은?",
      options: [
        { id: "a", text: "매달 요금이 자동으로 빠져나간다" },
        { id: "b", text: "현금만 사용할 수 있다" },
        { id: "c", text: "계좌가 자동으로 해지된다" },
        { id: "d", text: "카드가 즉시 정지된다" },
      ],
      correctId: "a",
      explanation:
        "KR: 자동이체=지정일 자동 납부.  \nRU: «автосписание платежей».  \nEN: “recurring auto-debit”.",
      tags: ["Bank", "Bills"],
    },
    {
      id: "bhq13",
      stem: "빈칸에 알맞은 것은?  \n갑자기 어지러워서 ___ 진료를 받으러 왔어요.",
      options: [
        { id: "a", text: "응급실에서" },
        { id: "b", text: "은행 창구에서" },
        { id: "c", text: "여행사에서" },
        { id: "d", text: "미용실에서" },
      ],
      correctId: "a",
      explanation:
        "KR: 어지럼증 응급: 응급실 진료.  \nRU: «в приёмное отделение/скорую».  \nEN: “to the ER for urgent care”.",
      tags: ["Hospital", "Emergency"],
    },
    {
      id: "bhq14",
      stem: "‘해지 신청’은 보통 어떤 때 하나요?",
      options: [
        { id: "a", text: "계약/계정을 종료할 때" },
        { id: "b", text: "새 계약을 시작할 때" },
        { id: "c", text: "주소를 등록할 때" },
        { id: "d", text: "번호표를 뽑을 때" },
      ],
      correctId: "a",
      explanation:
        "KR: 해지=계약 종료 요청.  \nRU: «расторжение/закрытие».  \nEN: “cancellation/termination request”.",
      tags: ["Bank", "Admin"],
    },
    {
      id: "bhq15",
      stem: "문장 연결이 자연스러운 것을 고르세요.  \n“약은 식사 ___ 드세요.”",
      options: [
        { id: "a", text: "후에" },
        { id: "b", text: "밖에" },
        { id: "c", text: "마다" },
        { id: "d", text: "부터도" },
      ],
      correctId: "a",
      explanation:
        "KR: 복용 시점=식사 ‘후에/전에’.  \nRU: «после еды».  \nEN: “after meals”.",
      tags: ["Hospital", "Grammar"],
    },
  ],
};
const PACK_TOPIK1: TestPack = {
  id: "topik1_vocab_transport",
  title: "TOPIK I+ — 교통·길찾기 필수 어휘",
  level: "TOPIK II",
  section: "Listening",
  durationSec: 15 * 60,
  savedKey: "pack_topik1_transport",
  questions: [
    {
      id: "tq1",
      stem: "‘환승하다’의 의미로 알맞은 것은?",
      options: [
        { id: "a", text: "다른 교통수단으로 갈아타다" },
        { id: "b", text: "표를 환불하다" },
        { id: "c", text: "좌석을 예약하다" },
        { id: "d", text: "짐을 보관하다" },
      ],
      correctId: "a",
      explanation:
        "KR: 환승=갈아타기(버스↔지하철 등).  \nRU: «пересадка на другой транспорт».  \nEN: “transfer/change to another line/vehicle”.",
      tags: ["Transport", "Subway", "Bus"],
    },
    {
      id: "tq2",
      stem: "빈칸에 들어갈 말은?  \n지하철 ○○은 열차가 양쪽 문이 모두 열리는 역을 말한다.",
      options: [
        { id: "a", text: "환승역" },
        { id: "b", text: "무정차역" },
        { id: "c", text: "막차역" },
        { id: "d", text: "기점역" },
      ],
      correctId: "a",
      explanation:
        "KR: 환승역=노선 간 갈아탈 수 있는 역.  \nRU: «станция пересадки».  \nEN: “transfer station”.",
      tags: ["Subway", "Vocabulary"],
    },
    {
      id: "tq3",
      stem: "‘막차’를 놓치면 보통 어떻게 되나요?",
      options: [
        { id: "a", text: "그날은 더 이상 열차가 없다" },
        { id: "b", text: "열차가 더 자주 온다" },
        { id: "c", text: "요금이 무료가 된다" },
        { id: "d", text: "좌석이 자동 배정된다" },
      ],
      correctId: "a",
      explanation:
        "KR: 막차=마지막 차.  \nRU: «последний поезд/автобус».  \nEN: “the last train/bus of the day”.",
      tags: ["Transport", "Time"],
    },
    {
      id: "tq4",
      stem: "‘교통카드를 충전하다’의 뜻은?",
      options: [
        { id: "a", text: "잔액을 추가로 넣다" },
        { id: "b", text: "카드를 반납하다" },
        { id: "c", text: "카드를 재발급하다" },
        { id: "d", text: "카드를 우편으로 보내다" },
      ],
      correctId: "a",
      explanation:
        "KR: 충전=금액 추가.  \nRU: «пополнить транспортную карту».  \nEN: “top up the transit card balance”.",
      tags: ["Payment", "Transport"],
    },
    {
      id: "tq5",
      stem: "다음 중 ‘직행 버스’의 설명으로 가장 알맞은 것은?",
      options: [
        { id: "a", text: "중간 정차가 적거나 없이 빠르게 간다" },
        { id: "b", text: "모든 정류장에 다 선다" },
        { id: "c", text: "야간에만 운행한다" },
        { id: "d", text: "환승이 불가능하다" },
      ],
      correctId: "a",
      explanation:
        "KR: 직행=급행/중간 정차 적음.  \nRU: «экспресс, мало остановок».  \nEN: “express/limited-stop bus”.",
      tags: ["Bus", "Speed"],
    },
    {
      id: "tq6",
      stem: "빈칸에 알맞은 말은?  \n여기서 두 정거장 ___ 내리세요.",
      options: [
        { id: "a", text: "뒤에" },
        { id: "b", text: "전에" },
        { id: "c", text: "밖에" },
        { id: "d", text: "부터" },
      ],
      correctId: "a",
      explanation:
        "KR: ‘두 정거장 뒤에’=두 정거장 지나서.  \nRU: «выйдите через две остановки».  \nEN: “get off two stops after this”.",
      tags: ["Directions", "Grammar"],
    },
    {
      id: "tq7",
      stem: "‘우회하다’의 의미와 가장 가까운 것은?",
      options: [
        { id: "a", text: "막힌 길을 피해서 돌아가다" },
        { id: "b", text: "일정 시간을 단축하다" },
        { id: "c", text: "표를 재발급하다" },
        { id: "d", text: "목적지를 변경하다" },
      ],
      correctId: "a",
      explanation:
        "KR: 우회=돌아서 가기(통제/정체 시).  \nRU: «объезд».  \nEN: “detour”.",
      tags: ["Road", "Traffic"],
    },
    {
      id: "tq8",
      stem: "문맥에 맞는 것은?  \n버스가 너무 ___, 다음 차를 타야 했어요.",
      options: [
        { id: "a", text: "만석이라" },
        { id: "b", text: "정상이라" },
        { id: "c", text: "가벼워서" },
        { id: "d", text: "밝아서" },
      ],
      correctId: "a",
      explanation:
        "KR: 만석=좌석이 다 참.  \nRU: «все места заняты».  \nEN: “full; no seats available”.",
      tags: ["Bus", "Context"],
    },
    {
      id: "tq9",
      stem: "‘승차권을 발권하다’와 가장 가까운 뜻은?",
      options: [
        { id: "a", text: "표를 출력/발급받다" },
        { id: "b", text: "표를 분실하다" },
        { id: "c", text: "표를 찢다" },
        { id: "d", text: "표를 양도하다" },
      ],
      correctId: "a",
      explanation:
        "KR: 발권=티켓 발급.  \nRU: «оформить/распечатать билет».  \nEN: “issue a ticket”.",
      tags: ["Ticket", "Station"],
    },
    {
      id: "tq10",
      stem: "빈칸에 알맞은 것은?  \n공항 리무진 버스는 ____까지 직행합니다.",
      options: [
        { id: "a", text: "도심 주요 호텔" },
        { id: "b", text: "집 앞 우편함" },
        { id: "c", text: "학교 급식실" },
        { id: "d", text: "동네 헬스장" },
      ],
      correctId: "a",
      explanation:
        "KR: 공항 리무진=도심 주요 지점 직행.  \nRU: «аэробус до крупных отелей/центра».  \nEN: “airport limousine to key downtown stops”.",
      tags: ["Airport", "Bus"],
    },
    {
      id: "tq11",
      stem: "‘무임 승차’를 하면 어떻게 되나요?",
      options: [
        { id: "a", text: "요금을 내지 않아 벌금을 낼 수 있다" },
        { id: "b", text: "좌석이 자동 승급된다" },
        { id: "c", text: "요금이 절반으로 줄어든다" },
        { id: "d", text: "환승이 무료가 된다" },
      ],
      correctId: "a",
      explanation:
        "KR: 무임승차=무단 탑승→과태료.  \nRU: «безбилетный проезд — штраф».  \nEN: “fare evasion may incur a fine”.",
      tags: ["Rules", "Fare"],
    },
    {
      id: "tq12",
      stem: "다음 중 ‘정류장’과 가장 관련 있는 행동은?",
      options: [
        { id: "a", text: "버스를 기다리다" },
        { id: "b", text: "통장을 개설하다" },
        { id: "c", text: "약을 조제하다" },
        { id: "d", text: "소포를 접수하다" },
      ],
      correctId: "a",
      explanation:
        "KR: 정류장=버스/택시 등 대기 장소.  \nRU: «остановка».  \nEN: “(bus) stop”.",
      tags: ["Basic", "Bus"],
    },
    {
      id: "tq13",
      stem: "표지판을 보고 고르세요.  \n‘보행자 통행 금지’는 무엇을 뜻합니까?",
      options: [
        { id: "a", text: "사람은 지나갈 수 없다" },
        { id: "b", text: "차량은 지나갈 수 없다" },
        { id: "c", text: "자전거만 가능하다" },
        { id: "d", text: "주차가 가능하다" },
      ],
      correctId: "a",
      explanation:
        "KR: 보행자 통행 금지=보행 금지.  \nRU: «движение пешеходов запрещено».  \nEN: “no pedestrian access”.",
      tags: ["Signs", "Safety"],
    },
    {
      id: "tq14",
      stem: "자연스러운 문장을 고르세요.  \n“이 노선은 출근 시간에 배차 간격이 ___.”",
      options: [
        { id: "a", text: "짧아져서 자주 온다" },
        { id: "b", text: "길어져서 거의 없다" },
        { id: "c", text: "밝아져서 안전하다" },
        { id: "d", text: "무거워서 늦어진다" },
      ],
      correctId: "a",
      explanation:
        "KR: 출근 러시아워=배차 간격 짧음.  \nRU: «в час пик интервалы короче».  \nEN: “shorter headways at rush hour”.",
      tags: ["Frequency", "Context"],
    },
    {
      id: "tq15",
      stem: "빈칸에 알맞은 말은?  \n지도를 보며 ‘지하도 ___’로 건너가세요.",
      options: [
        { id: "a", text: "를 통해" },
        { id: "b", text: "만큼" },
        { id: "c", text: "보다" },
        { id: "d", text: "조차" },
      ],
      correctId: "a",
      explanation:
        "KR: ‘~을/를 통해’=경로/수단.  \nRU: «через подземный переход».  \nEN: “go across via the underpass”.",
      tags: ["Directions", "Grammar"],
    },
  ],
};



export const ALL_PACKS: TestPack[] = [
  PACK_R2 ,PACK_V1, PACK_G1, PACK_V1, PACK_G1, PACK_R2, PACK_G2 , PACK_G1, PACK_L1, PACK_R2, PACK_L1, PACK_R2, PACK_R5, PACK_TOPIK1_PLUS_BANK_HOSPITAL, PACK_TOPIK1
];
