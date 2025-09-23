import type { WritingPack } from "./writingTypes";

export const WRITING_TESTS: WritingPack[] = [
{
    id: "w_topik_a1_basic",
    title: "TOPIK A1 — Yozma (so‘z va qisqa gaplar)",
    category: "TOPIK",
    level: "Boshlang'ich",
    durationSec: 8 * 60,
    questions: [
      {
        id: "q1",
        prompt: "Koreyschaga yozing: «kitob»",
        answer: "책",
        acceptable: [],
        hint: "chaek",
        tags: ["TOPIK I"],
      },
      {
        id: "q2",
        prompt: "Koreyschaga yozing: «maktab»",
        answer: "학교",
        acceptable: [],
        hint: "hakgyo",
      },
      {
        id: "q3",
        prompt: "Koreys tilida yozing: «Men kitob o‘qiyman.»",
        answer: "책을 읽어요.",
        acceptable: ["책을 읽어요", "책을 읽어요!"],
        hint: "읽다 + 아요",
      },
    ],
  },
  {
  id: "w_topik_52_order_mid",
  title: "TOPIK II — 52-savol uslubi (문장 배열 / tartiblash)",
  category: "TOPIK",
  level: "O'rta 2",
  durationSec: 12 * 60,
  questions: [
    {
      id: "q1",
      prompt:
        "Quyidagi gaplarni mantiqiy tartibga keltiring (javobni A-B-C-D ko‘rinishida yozing).\nA) 하지만 협업과 소통이 줄어들 수 있다.\nB) 재택근무는 통근 시간을 줄여 생산성을 높일 수 있다.\nC) 따라서 팀 단위 규칙과 도구의 표준화가 필요하다.\nD) 특히 신입 직원에게는 비대면 온보딩이 어렵다.",
      answer: "B-D-A-C",
      acceptable: ["BDA C", "B D A C", "B-D-A-C"],
      hint: "Mavzu → dalil(lar) → qarama-qarshi/cheklov → xulosa/taklif.",
      tags: ["TOPIK II", "쓰기 52"]
    },
    {
      id: "q2",
      prompt:
        "Quyidagilarni tartiblang.\nA) 먼저, 신청서를 온라인으로 작성하십시오.\nB) 마감은 10월 30일 18시입니다.\nC) 제출 후 확인 메일이 발송됩니다.\nD) 행사 참가 신청 안내입니다.",
      answer: "D-A-C-B",
      acceptable: ["D A C B", "DACB"],
      hint: "Sarlavha/tema → bosqich(lar) → yakunda muddat.",
      tags: ["TOPIK II", "쓰기 52"]
    },
    {
      id: "q3",
      prompt:
        "Tartibni toping.\nA) 한편, 60대 이상에서는 오프라인 선호가 여전히 높다.\nB) 조사 결과, 20대에서 모바일 결제가 가장 높게 나타났다.\nC) 본 조사는 결제 수단 선호도에 관한 것이다.\nD) 이는 다채널 전략의 필요성을 시사한다.",
      answer: "C-B-A-D",
      acceptable: ["C B A D", "CBAD"],
      hint: "Kirish (자료 소개) → asosiy topilma → kontrast → xulosa/implikatsiya.",
      tags: ["TOPIK II", "쓰기 52"]
    }
  ]
},
{
  id: "w_topik_51_grammar_mid",
  title: "TOPIK II — 51-savol uslubi (bo‘shliqni to‘ldirish)",
  category: "TOPIK",
  level: "O'rta 2",
  durationSec: 10 * 60,
  questions: [
    {
      id: "q1",
      prompt:
        "공지문: 본 행사는 우천 시 취소될 수 있으___, 사전에 홈페이지를 확인해 주시기 바랍니다.",
      answer: "므로",
      acceptable: [],
      hint: "-(으)므로: rasmiy sabab.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q2",
      prompt:
        "안내: 지원서는 이메일로 제출하시___, 문의사항은 아래 번호로 연락 주십시오.",
      answer: "고",
      acceptable: [],
      hint: "연결 어미 -고: teng bog‘lash (…하고, …).",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q3",
      prompt: "문서: 제품 하자로 인하___ 교환을 요청드립니다.",
      answer: "여",
      acceptable: [],
      hint: "인하+여 → ‘인하여’: rasmiy sabab birikmasi.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q4",
      prompt: "지시: 보고서를 작성하___ 제출하시기 바랍니다.",
      answer: "여",
      acceptable: [],
      hint: "V-아/어(서) 연쇄: ‘작성하여 제출하다’.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q5",
      prompt:
        "내부 규정: 검토가 늦어질수___ 전체 일정에 미치는 영향이 큽니다.",
      answer: "록",
      acceptable: [],
      hint: "-(으)ㄹ수록: ‘qanchalik … bo‘lsa’.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q6",
      prompt: "회의록: 회의___ 결론을 먼저 말씀드리겠습니다.",
      answer: "의",
      acceptable: [],
      hint: "N의 N: egalik/munosabat.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q7",
      prompt: "보고: 어제 받___ 자료를 검토했습니다.",
      answer: "은",
      acceptable: [],
      hint: "관형사형 과거: V-(으)ㄴ N (‘받은 자료’).",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q8",
      prompt:
        "안전수칙: 안전사고가 발생하지 않___ 각별히 주의해 주십시오.",
      answer: "도록",
      acceptable: [],
      hint: "V-도록: maqsad/natija (‘…masligi uchun’).",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q9",
      prompt: "일정: 회의는 3시___ 시작합니다.",
      answer: "에",
      acceptable: [],
      hint: "Vaqt + 에: ‘… da/soatda’.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q10",
      prompt: "공지: 김 부장님__ 직접 발표하십니다.",
      answer: "께서",
      acceptable: [],
      hint: "Hurmatli ega ko‘rsatkichi: N께서.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q11",
      prompt: "안내: 날씨가 춥___ 행사는 예정대로 진행됩니다.",
      answer: "지만",
      acceptable: [],
      hint: "-지만: qarama-qarshi mazmun.",
      tags: ["TOPIK II", "쓰기 51"]
    }
  ]
},
{
  id: "w_topik_51_grammar_mid_2",
  title: "TOPIK II — 51-savol uslubi (bo‘shliqni to‘ldirish) — qo‘shimcha",
  category: "TOPIK",
  level: "O'rta 2",
  durationSec: 10 * 60,
  questions: [
    {
      id: "q1",
      prompt: "본 설문은 익명___ 진행됩니다.",
      answer: "으로",
      acceptable: [],
      hint: "N + 으로/로: ‘… orqali/… tarzda’.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q2",
      prompt: "자료는 사전에 신청자___ 이메일로 발송됩니다.",
      answer: "에게",
      acceptable: ["께"],
      hint: "받는 사람 → 에게/께.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q3",
      prompt: "사용 중인 장비___ 점검 후 사용하십시오.",
      answer: "는",
      acceptable: [],
      hint: "화제 제시(주제) → 은/는.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q4",
      prompt: "안전을 위하___ 속도를 줄여 주십시오.",
      answer: "여",
      acceptable: [],
      hint: "위하여(= 위해): maqsad/sabab.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q5",
      prompt: "신청서가 누락되___ 접수가 취소될 수 있습니다.",
      answer: "면",
      acceptable: [],
      hint: "Shart: -(으)면.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q6",
      prompt: "피해가 발생하지 않___ 즉시 중단하십시오.",
      answer: "도록",
      acceptable: [],
      hint: "V-도록: ‘…masligi uchun’.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q7",
      prompt: "회의는 10층 대회의실___ 진행됩니다.",
      answer: "에서",
      acceptable: [],
      hint: "Joy (harakat sodir bo‘ladigan) → 에서.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q8",
      prompt: "불가피한 사유___ 일정 변경이 있을 수 있습니다.",
      answer: "로",
      acceptable: ["으로"],
      hint: "Sabab: N(으)로.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q9",
      prompt: "아래 사항을 확인하___ 협조 부탁드립니다.",
      answer: "시고",
      acceptable: [],
      hint: "V-시고: hurmat + bog‘lovchi ‘… qilib, …’.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q10",
      prompt: "회의 자료___ 첨부합니다.",
      answer: "를",
      acceptable: [],
      hint: "Tushum kelishigi: 을/를.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q11",
      prompt: "연구 결과___ 따르면 다음과 같습니다.",
      answer: "에",
      acceptable: [],
      hint: "근거: N에 따르면.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q12",
      prompt: "사용자는 약관___ 동의해야 합니다.",
      answer: "에",
      acceptable: [],
      hint: "N에 동의하다: ‘…ga rozi bo‘lmoq’.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q13",
      prompt: "1인당 2개까__ 신청할 수 있습니다.",
      answer: "지",
      acceptable: [],
      hint: "까지: ‘… gacha (limit)’.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q14",
      prompt: "필요 시 추가 서류를 제출하___ 바랍니다.",
      answer: "시기",
      acceptable: [],
      hint: "V-시기 바랍니다: rasmiy iltimos.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q15",
      prompt: "공지 사항을 숙지하___ 주시기 바랍니다.",
      answer: "여",
      acceptable: [],
      hint: "V-아/어 주시기 바랍니다: muloyim rasmiy iltimos.",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q16",
      prompt: "행사는 상황에 따___ 변경될 수 있습니다.",
      answer: "라",
      acceptable: [],
      hint: "따라: ‘…ga ko‘ra’ (qo‘shma so‘zning bo‘lagi).",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q17",
      prompt: "문의 사항은 아래 연락처___ 바랍니다.",
      answer: "로",
      acceptable: [],
      hint: "N으로/로: yo‘nalish/kanal (‘… orqali’).",
      tags: ["TOPIK II", "쓰기 51"]
    },
    {
      id: "q18",
      prompt: "오탈자___ 있을 수 있습니다. 제보해 주십시오.",
      answer: "가",
      acceptable: [],
      hint: "Ega ko‘rsatkichi: 이/가.",
      tags: ["TOPIK II", "쓰기 51"]
    }
  ]
},
{
  id: "w_topik_53_graph_mid_2_A",
  title: "TOPIK II — 53-savol uslubi (grafik/jadvalni tasvirlash) — qo‘shimcha",
  category: "TOPIK",
  level: "O'rta 2",
  durationSec: 12 * 60,
  questions: [
    {
      id: "q1",
      prompt: "2024년 대학생 교통수단 선호도: 지하철 42%, 버스 33%, 도보 15%, 자전거 10%. 이 그래프를 200자 내외로 요약하세요.",
      answer: "자료에 따르면 대학생의 주요 교통수단은 지하철(42%)로 가장 높았다. 버스가 33%로 그 뒤를 이었고, 도보(15%)와 자전거(10%)는 상대적으로 낮은 편이다. 전반적으로 대중교통 의존도가 높으며, 친환경 수단 비중은 아직 제한적이라고 해석된다.",
      acceptable: [],
      hint: "가장 높다/낮다, 그 뒤를 잇다, 전반적으로, ~로 해석된다",
      tags: ["TOPIK II", "쓰기 53", "그래프 요약"]
    },
    {
      id: "q2",
      prompt: "2023~2024 온라인 강의 만족도 변화: ‘만족’ 58%→63%, ‘보통’ 29%→25%, ‘불만족’ 13%→12%. 200자 내외로 기술.",
      answer: "2023년 대비 2024년 온라인 강의 만족도는 58%에서 63%로 소폭 상승했다. 반면 ‘보통’ 응답은 29%에서 25%로 감소했고, ‘불만족’도 13%에서 12%로 약간 줄었다. 전반적으로 만족도가 개선되는 추세이며, 수업 품질과 접근성 향상이 영향을 준 것으로 보인다.",
      acceptable: [],
      hint: "대비/반면/소폭 상승/감소/추세",
      tags: ["TOPIK II", "쓰기 53", "변화 기술"]
    },
    {
      id: "q3",
      prompt: "회사 복지 만족 요인(복수응답): 식사지원 46%, 유연근무 38%, 교육비 31%, 건강검진 28%. 200자 내외 요약.",
      answer: "복지 만족 요인으로는 식사지원이 46%로 가장 높았고, 유연근무가 38%로 뒤를 이었다. 교육비 지원(31%)과 건강검진(28%)도 일정 비중을 차지했다. 전반적으로 실질적 비용 절감과 근무 자율성을 높이는 항목이 높은 선호를 보였다.",
      acceptable: [],
      hint: "복수응답, 일정 비중, ~가장 높다, ~뒤를 잇다",
      tags: ["TOPIK II", "쓰기 53", "직장"]
    },
    {
      id: "q4",
      prompt: "카페 결제수단 비율: 카드 55%, 현금 14%, 간편결제 27%, 기타 4%. 200자 내외 서술.",
      answer: "해당 카페에서는 카드 결제가 55%로 과반을 차지했다. 간편결제는 27%로 확산 추세를 보이며, 현금은 14%에 그쳤다. 기타 수단은 4%로 미미했다. 전반적으로 비현금 결제가 보편화되고 있으며, 모바일 기반 결제 비중이 점차 확대되는 양상이다.",
      acceptable: [],
      hint: "과반, ~에 그치다, 미미하다, 보편화/확대",
      tags: ["TOPIK II", "쓰기 53", "소비"]
    },
    {
      id: "q5",
      prompt: "대학생 여가활동(주요 4개): 운동 35%, 독서 22%, 여행 20%, 게임 18%(기타 5%). 200자 내외 기술.",
      answer: "여가활동으로 운동이 35%로 가장 높았고, 독서(22%)와 여행(20%)이 비슷한 수준이었다. 게임은 18%였으며, 기타는 5%로 낮았다. 전반적으로 건강 관리와 자기계발을 중시하는 경향이 나타나며, 경험 중심 활동도 꾸준히 선호되는 것으로 보인다.",
      acceptable: [],
      hint: "경향, ~중시하다, 꾸준히",
      tags: ["TOPIK II", "쓰기 53", "생활"]
    },
    {
      id: "q6",
      prompt: "지역별 재택근무 비율(2024): 수도권 48%, 광역시 31%, 기타 지역 19%, 무응답 2%. 200자 내외 요약.",
      answer: "수도권의 재택근무 비율은 48%로 가장 높았고, 광역시는 31%로 나타났다. 기타 지역은 19%로 상대적으로 낮았으며, 무응답은 2%였다. 인프라와 직무 특성 영향으로 대도시권 중심의 재택 근무가 여전히 우세한 것으로 해석된다.",
      acceptable: [],
      hint: "상대적으로 낮다/우세하다/영향",
      tags: ["TOPIK II", "쓰기 53", "노동"]
    },
    {
      id: "q7",
      prompt: "식습관 변화(팬데믹 전→후): 집밥 28%→41%, 배달 22%→26%, 외식 40%→27%, 간편식 10%→6%. 200자 내외 기술.",
      answer: "팬데믹 이후 식습관은 집밥이 28%에서 41%로 크게 늘었고, 배달도 22%에서 26%로 증가했다. 반면 외식은 40%에서 27%로 감소했으며, 간편식은 10%에서 6%로 줄었다. 전반적으로 가정 내 섭취가 확대되는 추세가 뚜렷하다.",
      acceptable: [],
      hint: "크게 늘다/줄다, 반면, 추세가 뚜렷하다",
      tags: ["TOPIK II", "쓰기 53", "생활 변화"]
      },
    {
      id: "q8",
      prompt: "환경 캠페인 참여 동기: 사회적 책임 37%, 건강 29%, 경제적 이익 18%, 유행 9%, 기타 7%. 200자 내외로 기술.",
      answer: "참여 동기는 사회적 책임이 37%로 가장 높았고, 건강이 29%로 뒤를 이었다. 경제적 이익은 18%였으며, 유행은 9%, 기타는 7%로 낮았다. 단순 유행보다는 가치 지향적 요인이 참여를 견인하는 것으로 해석된다.",
      acceptable: [],
      hint: "가치 지향, ~견인하다, 단순 ~보다",
      tags: ["TOPIK II", "쓰기 53", "환경/사회"]
    }
  ]
},
{
  id: "w_topik_53_graph_mid_2_B",
  title: "TOPIK II — 53-savol (grafik/jadval tasviri) — qo‘shimcha 2",
  category: "TOPIK",
  level: "O'rta 2",
  durationSec: 12 * 60,
  questions: [
    {
      id: "q1",
      prompt: "신입 구직 채널 이용 비율: 채용 플랫폼 52%, 기업 홈페이지 24%, 지인 추천 18%, 오프라인 박람회 6%. 200자 내외로 요약하세요.",
      answer: "자료에 따르면 신입 구직자들은 채용 플랫폼 활용이 52%로 가장 높다. 기업 홈페이지 지원은 24%로 뒤를 잇고, 지인 추천은 18%였다. 오프라인 박람회는 6%로 낮은 편이다. 전반적으로 온라인 중심의 채용 환경이 확립된 것으로 보인다.",
      acceptable: [],
      hint: "가장 높다/뒤를 잇다/낮은 편",
      tags: ["TOPIK II", "쓰기 53", "취업"]
    },
    {
      id: "q2",
      prompt: "가정 전력 소비(계절 평균): 냉난방 46%, 주방가전 22%, 조명 12%, IT기기 15%, 기타 5%. 200자 요약.",
      answer: "가정 전력은 냉난방 비중이 46%로 가장 크다. 주방가전 22%, IT기기 15% 순이었고, 조명은 12%, 기타는 5%였다. 주요 소비가 냉난방과 필수 가전에 집중되어 에너지 효율 개선 여지가 큰 영역으로 해석된다.",
      acceptable: [],
      hint: "비중/집중/개선 여지",
      tags: ["TOPIK II", "쓰기 53", "에너지"]
    },
    {
      id: "q3",
      prompt: "전자상거래 반품 사유(복수응답): 사이즈/호환 34%, 품질 불만 28%, 배송 지연 19%, 단순 변심 15%, 기타 4%. 200자 내외.",
      answer: "반품 사유는 사이즈·호환 문제가 34%로 가장 높고 품질 불만이 28%로 뒤를 잇는다. 배송 지연은 19%, 단순 변심은 15%였으며 기타는 4%에 그쳤다. 제품 정보 고도화와 배송 관리 개선이 만족도 제고의 핵심 과제로 보인다.",
      acceptable: [],
      hint: "복수응답/제고/핵심 과제",
      tags: ["TOPIK II", "쓰기 53", "소비"]
    },
    {
      id: "q4",
      prompt: "공공도서관 이용 목적: 대출 49%, 학습 27%, 문화프로그램 14%, 휴식 10%. 200자 내외로 기술.",
      answer: "공공도서관 이용은 자료 대출이 49%로 절반에 가깝다. 학습 목적은 27%로 일정 비중을 차지하고, 문화프로그램 참여 14%, 휴식 10% 순이다. 단순 대출을 넘어 학습·문화 기능이 점차 확대되는 흐름이 관찰된다.",
      acceptable: [],
      hint: "일정 비중/확대되는 흐름",
      tags: ["TOPIK II", "쓰기 53", "문화"]
    },
    {
      id: "q5",
      prompt: "스마트폰 구매 고려 요소: 성능 33%, 배터리 26%, 카메라 21%, 가격 16%, 디자인 4%. 200자 요약.",
      answer: "구매 고려에서 성능이 33%로 가장 중요하게 나타났다. 배터리가 26%, 카메라 21%로 뒤를 잇고, 가격은 16%, 디자인은 4%로 낮다. 실사용 품질이 가격·외형보다 우선되며, 지속 사용성과 처리 성능이 핵심 기준임을 시사한다.",
      acceptable: [],
      hint: "시사하다/우선되다",
      tags: ["TOPIK II", "쓰기 53", "IT"]
    },
    {
      id: "q6",
      prompt: "재활용 분리배출 참여율(연령별): 20대 58%, 30대 64%, 40대 67%, 50대 70%. 200자 내외 요약.",
      answer: "분리배출 참여율은 연령이 높을수록 증가한다. 20대 58%에서 50대 70%로 단계적으로 상승했다. 생활습관과 주거 형태 차이가 영향을 준 것으로 보이며, 청년층 대상 교육·인센티브가 보완책이 될 수 있다.",
      acceptable: [],
      hint: "연령 상승/보완책",
      tags: ["TOPIK II", "쓰기 53", "환경"]
    },
    {
      id: "q7",
      prompt: "지역 축제 방문객 추이(3년): 2022년 18만, 2023년 24만, 2024년 29만. 200자 내외로 기술.",
      answer: "방문객은 2022년 18만에서 2024년 29만으로 꾸준히 증가했다. 특히 2023년 이후 상승 폭이 확대되며 회복세가 뚜렷하다. 프로그램 다양화와 접근성 개선이 수요를 견인한 요인으로 추정된다.",
      acceptable: [],
      hint: "꾸준히 증가/회복세/견인",
      tags: ["TOPIK II", "쓰기 53", "관광"]
    },
    {
      id: "q8",
      prompt: "대중교통 만족도(요인별): 정시성 36%, 혼잡도 25%, 청결 21%, 환승편의 18%. 200자 요약.",
      answer: "만족도에서 정시성이 36%로 가장 중요한 요인으로 꼽혔다. 혼잡도 25%, 청결 21%, 환승편의 18% 순이다. 즉, 시간 신뢰성과 혼잡 완화가 체감 품질을 좌우하며, 청결·환승 개선도 병행할 필요가 있다.",
      acceptable: [],
      hint: "좌우하다/병행",
      tags: ["TOPIK II", "쓰기 53", "교통"]
    },
    {
      id: "q9",
      prompt: "원격수업 장애 요인: 네트워크 31%, 자기관리 29%, 상호작용 부족 24%, 기기 성능 12%, 기타 4%. 200자 내외.",
      answer: "원격수업의 주요 장애는 네트워크 문제가 31%로 가장 높다. 자기관리 한계 29%, 상호작용 부족 24%가 뒤따랐고, 기기 성능은 12%였다. 학습관리 지원과 상호작용 설계 보강이 질 개선의 관건으로 보인다.",
      acceptable: [],
      hint: "관건/보강/질 개선",
      tags: ["TOPIK II", "쓰기 53", "교육"]
    },
    {
      id: "q10",
      prompt: "건강 앱 활용(성별): 남 44%, 여 55%, 미사용 1%. 200자 내외로 기술.",
      answer: "건강 앱 활용률은 여성 55%, 남성 44%로 여성의 참여가 다소 높다. 미사용은 1%에 불과해 전반적 보급률이 높다. 기능 고도화와 개인정보 보호가 지속 사용을 좌우하는 핵심 조건으로 해석된다.",
      acceptable: [],
      hint: "다소 높다/보급률/좌우",
      tags: ["TOPIK II", "쓰기 53", "건강"]
    }
  ]
},
{
  id: "w_topik_52_order_mid_2",
  title: "TOPIK II — 52-savol uslubi (문장 배열 / tartiblash) — qo‘shimcha",
  category: "TOPIK",
  level: "O'rta 2",
  durationSec: 12 * 60,
  questions: [
    {
      id: "q1",
      prompt:
        "Tartibni aniqlang.\nA) 최근 중소기업의 온라인 판매 비중이 늘었다.\nB) 이에 따라 물류 자동화 수요가 증가하고 있다.\nC) 다만, 초기 투자 비용이 부담이라는 지적도 있다.\nD) 한편 정부는 관련 지원책을 검토 중이다.",
      answer: "A-B-C-D",
      acceptable: ["ABCD", "A B C D", "A-B-C-D"],
      hint: "Fakt → oqibat → cheklov → siyosiy choralar.",
      tags: ["TOPIK II", "쓰기 52"]
    },
    {
      id: "q2",
      prompt:
        "Mantiqiy ketma-ketlikni tanlang.\nA) 올해 축제는 친환경 원칙에 따라 운영된다.\nB) 일회용품 사용을 최소화한다.\nC) 참가자에게 다회용컵을 대여한다.\nD) 따라서 쓰레기 배출량이 크게 줄 것으로 보인다.",
      answer: "A-B-C-D",
      acceptable: ["ABCD"],
      hint: "Kirish tamoyil → chora1 → chora2 → kutilgan natija.",
      tags: ["TOPIK II", "쓰기 52"]
    },
    {
      id: "q3",
      prompt:
        "Quyidagilarni tartiblash.\nA) 먼저 원인 분석이 선행되어야 한다.\nB) 불량률이 높아 생산 차질이 발생했다.\nC) 분석 결과를 바탕으로 공정을 개선한다.\nD) 이후 성과를 지표로 관리한다.",
      answer: "B-A-C-D",
      acceptable: ["B A C D", "BACD"],
      hint: "Muammo → sabab tahlili → yechim → monitoring.",
      tags: ["TOPIK II", "쓰기 52"]
    },
    {
      id: "q4",
      prompt:
        "To‘g‘ri tartib.\nA) 강연자는 10분 전에 도착해 장비를 점검한다.\nB) 청중 입장은 시작 15분 전부터 가능하다.\nC) 강연이 끝난 후 질의응답을 진행한다.\nD) 모든 일정은 사전에 공지된 시간표를 따른다.",
      answer: "D-B-A-C",
      acceptable: ["DBAC", "D B A C"],
      hint: "Umumiy qoidani berish → auditoriya → spiker → yakun bosqichi.",
      tags: ["TOPIK II", "쓰기 52"]
    },
    {
      id: "q5",
      prompt:
        "Tartibni toping.\nA) 신규 직원 교육은 직무 이해를 높인다.\nB) 특히 멘토링 프로그램이 적응에 도움을 준다.\nC) 따라서 교육의 체계화가 필요하다.\nD) 최근 이직률이 높아 기업의 부담이 커졌다.",
      answer: "D-A-B-C",
      acceptable: ["D A B C", "D-A-B-C"],
      hint: "Muammo (kontekst) → ta’sir → misol/qo‘llab-quvvat → xulosa.",
      tags: ["TOPIK II", "쓰기 52"]
    }
  ]
},
{
  id: "w_topik_53_short_writing_mid2",
  title: "TOPIK II — 53-savol uslubi (qisqa yozma) ",
  category: "TOPIK",
  level: "O'rta 2",
  durationSec: 15 * 60,
  questions: [
    {
      id: "q1",
      prompt:
        "【공지문】 엘리베이터 점검 안내를 작성하세요. (날짜·시간: 9월 21일 10:00~16:00, 이용 불가, 계단 이용 안내, 양해 요청)\n(100~150자 내외, ‘불편을 드려 죄송합니다’, ‘협조 부탁드립니다’ 포함)",
      answer:
        "9월 21일(토) 10:00~16:00 엘리베이터 점검으로 사용이 불가합니다. 계단을 이용해 주시기 바라며, 불편을 드려 죄송합니다. 안전 점검에 협조 부탁드립니다.",
      acceptable: [],
      hint: "양해 표현+대체 안내 필수: ‘계단 이용’, ‘불편을 드려 죄송합니다’, ‘협조 부탁드립니다’.",
      tags: ["TOPIK II", "쓰기 53"]
    },
    {
      id: "q2",
      prompt:
        "【이메일】 교수님께 발표 일정 변경을 정중하게 요청하세요. (이유: 조원 확진으로 준비 어려움 / 새 일정: 다음 주 수요일 15시 제안)\n(100~150자 내외, ‘죄송하지만’, ‘가능하실까요?’, ‘변경’ 포함)",
      answer:
        "교수님, 죄송하지만 조원 확진으로 발표 준비가 어려운 상황입니다. 가능하실까요? 일정을 다음 주 수요일 15시로 변경해 주시면 감사하겠습니다. 그때까지 내용을 보완하겠습니다.",
      acceptable: [],
      hint: "정중체+사유 제시+새 일정 제안. ‘죄송하지만/가능하실까요/변경’ 포함.",
      tags: ["TOPIK II", "쓰기 53"]
    },
    {
      id: "q3",
      prompt:
        "【안내문】 분실물(검은 지갑) 습득 안내를 작성하세요. (장소: 1층 카페 / 확인 절차: 학생증 확인 / 보관: 안내데스크)\n(100~150자 내외, ‘확인 후’, ‘수령 가능합니다’ 포함)",
      answer:
        "1층 카페에서 검은 지갑을 습득했습니다. 안내데스크에 보관 중이니, 소유자께서는 학생증 확인 후 수령 가능합니다. 분실자께서는 신분 확인이 가능한 증빙을 지참해 주시기 바랍니다.",
      acceptable: [],
      hint: "장소·절차·보관처를 모두 제시. ‘확인 후’, ‘수령 가능합니다’ 필수.",
      tags: ["TOPIK II", "쓰기 53"]
    },
    {
      id: "q4",
      prompt:
        "【민원/건의】 도서관 소음이 심해 집중이 어렵다는 내용을 예의 바르게 건의하세요. (대안: 안내 방송 강화, 조용 구역 지정)\n(110~160자 내외, ‘건의드립니다’, ‘조치해 주시기 바랍니다’ 포함)",
      answer:
        "최근 도서관 내 소음이 잦아 학습에 집중하기 어렵습니다. 안내 방송을 강화하고, 조용 구역을 명확히 지정해 주시면 도움이 되겠습니다. 개선을 건의드립니다. 신속한 조치해 주시기 바랍니다.",
      acceptable: [],
      hint: "문제→영향→구체적 대안→정중한 요청 순서.",
      tags: ["TOPIK II", "쓰기 53"]
    },
    {
      id: "q5",
      prompt:
        "【홍보/안내】 일회용품 줄이기 캠페인 참여 안내문을 작성하세요. (텀블러 사용 권장, 포인트 지급, 기간: 10월 한 달)\n(100~150자 내외, ‘참여해 주시면’, ‘포인트가 지급됩니다’ 포함)",
      answer:
        "10월 한 달 동안 일회용품 줄이기 캠페인을 진행합니다. 텀블러를 지참해 음료를 구매하시면 참여해 주시면 포인트가 지급됩니다. 많은 관심과 동참을 부탁드립니다.",
      acceptable: [],
      hint: "기간·행동요청·혜택(포인트) 3요소를 모두 담기.",
      tags: ["TOPIK II", "쓰기 53"]
    }
  ]
},
{
  id: "w_topik_53_short_writing_mid2_b",
  title: "TOPIK II — 53-savol uslubi (qisqa funksional yozish) #2",
  category: "TOPIK",
  level: "O'rta 2",
  durationSec: 16 * 60,
  questions: [
    {
      id: "q1",
      prompt:
        "【공지】 휴강 안내문을 작성하세요. (사유: 학과 행사 / 날짜: 9월 26일 / 보강: 10월 2일 16:00, 2강의실)\n(100~150자, ‘불편을 드려 죄송’, ‘양해 부탁’ 포함)",
      answer:
        "9월 26일(목) 학과 행사로 강의가 휴강됩니다. 보강은 10월 2일(수) 16:00에 2강의실에서 진행합니다. 불편을 드려 죄송하며 양해 부탁드립니다.",
      acceptable: [],
      hint: "휴강→보강 순서, sana/vaqt/joyni aniq yozing.",
      tags: ["TOPIK II", "쓰기 53"]
    },
    {
      id: "q2",
      prompt:
        "【이메일】 기숙사 관리자에게 방 수리를 정중히 요청하세요. (문제: 307호 에어컨 소음 / 방문 가능 시간: 오늘·내일 14~17시)\n(100~150자, ‘점검 요청’, ‘연락 부탁’ 포함)",
      answer:
        "관리자님, 안녕하세요. 307호 에어컨에서 큰 소음이 나 점검을 요청드립니다. 오늘과 내일 14~17시에 방문 가능하며, 오시기 전 연락 부탁드립니다. 감사합니다.",
      acceptable: [],
      hint: "문제→요청→가능 시간→연락 순.",
      tags: ["TOPIK II", "쓰기 53"]
    },
    {
      id: "q3",
      prompt:
        "【안내문】 분리배출 안내를 만드세요. (플라스틱·캔=파란통, 종이=노란통 / 수거: 매일 18시)\n(100~150자, ‘분리 배출’, ‘깨끗이 비운 뒤’ 포함)",
      answer:
        "캠퍼스 분리배출 안내입니다. 플라스틱과 캔은 파란통, 종이는 노란통에 배출해 주세요. 수거 시간은 매일 18시입니다. 내용물을 깨끗이 비운 뒤 버려 주시기 바랍니다.",
      acceptable: [],
      hint: "분류 규칙+수거 시간+협조 요청.",
      tags: ["TOPIK II", "쓰기 53"]
    },
    {
      id: "q4",
      prompt:
        "【모집】 도서관 자원봉사 모집 안내를 작성하세요. (일시: 10/12 09~13시 / 장소: 1층 안내데스크 / 혜택: 봉사확인서 / 마감: 10/8)\n(100~150자, ‘신청’, ‘문의’ 포함)",
      answer:
        "도서관 주말 자원봉사자를 모집합니다. 10/12(토) 09~13시, 1층 안내데스크에서 진행하며 봉사확인서가 발급됩니다. 10/8까지 신청해 주세요. 문의: 02-123-4567.",
      acceptable: [],
      hint: "언제·어디서·무엇을·혜택·마감.",
      tags: ["TOPIK II", "쓰기 53"]
    },
    {
      id: "q5",
      prompt:
        "【사과/정정】 잘못 보낸 회의 자료를 정정하는 알림을 쓰세요. (수정본 재발송, 삭제 요청)\n(100~150자, ‘혼선을 드려 죄송’, ‘삭제해 주시기 바랍니다’ 포함)",
      answer:
        "앞서 발송된 회의 자료에 오류가 있어 정정드립니다. 수정본을 다시 보내드립니다. 혼선을 드려 죄송합니다. 기존 파일은 삭제해 주시기 바랍니다.",
      acceptable: [],
      hint: "오류 통지→수정본 안내→사과→조치 요청.",
      tags: ["TOPIK II", "쓰기 53"]
    },
    {
      id: "q6",
      prompt:
        "【공지】 주차장 임시 폐쇄 안내문을 작성하세요. (공사: 10/5 07:00~12:00 / 대체: 체육관 앞 임시 주차)\n(100~150자, ‘이용이 불가’, ‘협조 부탁’ 포함)",
      answer:
        "10월 5일(토) 07:00~12:00 주차장 공사로 이용이 불가합니다. 임시 주차는 체육관 앞 공간을 이용해 주세요. 불편을 드려 죄송하며 협조 부탁드립니다.",
      acceptable: [],
      hint: "폐쇄 시간+대체 수단+사과/협조.",
      tags: ["TOPIK II", "쓰기 53"]
    }
  ]
},
{
  id: "w_topik_54_essay_high1",
  title: "TOPIK II — 54-savol uslubi (uzun esse)",
  category: "TOPIK",
  level: "Yuqori",
  durationSec: 35 * 60,
  questions: [
    {
      id: "q1",
      prompt:
        "【그래프 서론+분석+해결】\n주어진 표(온라인 강의 이용률, 5년 변화): 대학생 35%→62%, 직장인 20%→55%, 50대 8%→24%를 바탕으로 ①핵심 추세 요약 ②원인·문제점 ③개선 방안을 포함해 600~700자로 작성하세요.",
      answer:
        "제시문에 따르면 지난 5년간 온라인 강의 이용률은 대학생 35%→62%, 직장인 20%→55%, 50대 8%→24%로 고르게 상승했다. 특히 직장인의 증가 폭이 커 재교육 수요와 유연한 학습 환경의 확대를 보여 준다. 반면 고령층의 비율은 여전히 낮아 디지털 격차가 존재한다. 이러한 변화의 배경으로 코로나 경험, 플랫폼의 편의성, 기업의 역량 개발 요구를 들 수 있다. 그러나 수업의 질 관리와 학습 지속성은 과제로 남아 있다. 따라서 정부는 디지털 기초 교육을 지원하고, 플랫폼은 상호작용과 평가의 신뢰성을 강화해야 한다. 대학과 기업은 학습 시간을 제도적으로 보장함으로써 양적 확대를 질적 성장으로 연결해야 한다.",
      acceptable: [],
      hint: "서론: 수치 요약 → 본론: 비교·원인·문제 → 결론: 정책·현장 대안 제시",
      tags: ["TOPIK II", "쓰기 54"]
    },
    {
      id: "q2",
      prompt:
        "【우선순위 제안문】\n대중교통 만족 요인 비율: 시간 준수 35%, 청결 25%, 요금 22%, 환승 편의 18%. 이 자료를 근거로 ①최우선 과제와 이유 ②구체적 개선책 ③기대 효과를 600~700자로 쓰세요.",
      answer:
        "그래프는 대중교통 만족 요인 중 시간 준수 35%, 청결 25%, 요금 22%, 환승 편의 18%로 나타난다. 가장 큰 영향 요인은 시간 준수이므로 정시성 개선이 최우선 과제다. 배차 간격을 줄이고, 돌발 상황에 대한 실시간 안내를 강화하면 체감 만족도가 크게 높아질 것이다. 다음으로 청결과 요금은 서로 맞물린다. 차량·역사 청소 주기를 늘리되, 비용 부담을 최소화하려면 광고 수익과 에너지 절감으로 재원을 확보해야 한다. 환승 편의는 물리적 동선 개선뿐 아니라 통합 환승 앱, 표준화된 표지 시스템을 통해 해결할 수 있다. 결국 이용자 관점의 ‘예측 가능성’이 종합 만족을 좌우한다.",
      acceptable: [],
      hint: "데이터 인용→우선순위 판단 근거→실행 방안(비용·효과)→정리",
      tags: ["TOPIK II", "쓰기 54"]
    },
    {
      id: "q3",
      prompt:
        "【정책 평가 에세이】\n주52시간제 도입 후 변화: ‘삶의 만족도’ 62→68, ‘야근 빈도’ 41→27, ‘재택근무 경험’ 12→38. ①긍정·부정 효과 균형 설명 ②남은 과제와 해결책을 600~700자로 쓰세요.",
      answer:
        "자료에 따르면 주52시간제 도입 이후 삶의 만족도는 62→68로 상승했고, 야근 빈도는 41→27로 감소했으며, 재택근무 경험은 12→38로 크게 늘었다. 긍정적 효과는 분명하다. 휴식 시간이 늘면서 건강과 가족 관계가 개선되고, 재택은 통근 스트레스를 줄였다. 그러나 업무의 효율과 공정한 평가에 대한 우려도 존재한다. 시간은 줄었지만 일의 총량이 같아 ‘집중의 압박’이 커졌고, 재택 환경의 격차가 성과 차이로 이어질 수 있다. 앞으로는 단순한 근로시간 규제가 아니라 업무 재설계, 목표 중심 평가, 원격 협업 역량 교육이 병행되어야 한다. 그래야 제도의 취지가 현장에서 지속 가능해질 것이다.",
      acceptable: [],
      hint: "장점·단점 균형→구조적 대안(평가·협업·교육)→정리",
      tags: ["TOPIK II", "쓰기 54"]
    }
  ]
},
{
  id: "w_topik_54_essay_high2",
  title: "TOPIK II — 54-savol (ma’lumotga tayanuvchi esse)",
  category: "TOPIK",
  level: "Yuqori",
  durationSec: 35 * 60,
  questions: [
    {
      id: "q1",
      prompt:
        "【디지털 격차+교육】\n표(원격수업 이용률): 초등 22%→48%, 중등 30%→60%, 고등 35%→68%, 농촌지역 평균 18%→37%. ①핵심 추세 요약 ②격차 원인 ③정책·학교·가정 대안을 600~700자로 쓰세요.",
      answer:
        "제시 자료에 따르면 원격수업 이용률은 전 학령에서 꾸준히 상승했으나 농촌 지역 평균은 18%→37%로 가장 낮다. 이는 네트워크 인프라의 부족, 가정의 학습 공간·기기 격차, 교사의 디지털 교수역량 차이에서 비롯된다. 격차 해소를 위해 정부는 농촌 기지국 확충과 학생 1인 1기기 보급을 우선해야 하며, 학교는 혼합수업 운영 매뉴얼과 동료장학으로 수업의 질을 표준화해야 한다. 가정에는 학부모 디지털 문해 교육을 제공해 지원 역량을 높여야 한다. 단순 접속률이 아닌 학습 지속률과 성취를 지표로 삼을 때 양적 확대가 질적 성장으로 이어질 것이다.",
      acceptable: [],
      hint: "수치 인용→원인(인프라/가정/교사)→정부·학교·가정 대책",
      tags: ["TOPIK II", "쓰기 54"]
    },
    {
      id: "q2",
      prompt:
        "【도시 재생 vs 보존】\n그래프(구도심 건물 활용): 철거 후 재개발 42%, 보존형 리모델링 38%, 공공문화공간 전환 20%. ①장단점 비교 ②도시 정체성과 경제성 조화 방안을 600~700자로 쓰세요.",
      answer:
        "철거 후 재개발은 단기간 투자 유치와 고밀도 공급에 유리하지만 임대료 상승과 원주민 이탈을 초래하기 쉽다. 반면 보존형 리모델링은 도시의 기억과 경관을 지키며 관광 자원을 창출하나 수익 회수 기간이 길다. 공공문화공간 전환은 삶의 질을 높이지만 재정 지속 가능성이 과제다. 따라서 핵심 축은 혼합모델이다. 보존구역을 지정해 역사적 스카이라인을 유지하고, 주변에는 중층 재개발로 주거 공급을 확대한다. 용적률 인센티브를 문화기여와 연계해 민간 자본을 끌어들이면 경제성과 정체성을 동시에 확보할 수 있다.",
      acceptable: [],
      hint: "세 항목 장단점→혼합모델·인센티브 설계",
      tags: ["TOPIK II", "쓰기 54"]
    },
    {
      id: "q3",
      prompt:
        "【환경 정책 평가】\n일회용 플라스틱 사용량(지수): 100→82(3년), 재활용률 38%→52%. ①변화의 의미 ②현장의 한계 ③행동·시장·규제 결합 방안을 600~700자로 쓰세요.",
      answer:
        "사용량 지수가 100에서 82로 감소하고 재활용률이 38%에서 52%로 상승한 것은 정책의 방향성이 옳았음을 보여 준다. 그러나 매장별 규정 상이, 분리배출 방식 혼란, 재활용 단가 하락 등 현장의 마찰도 크다. 해결을 위해서는 표준화된 라벨링과 단일재질 전환을 의무화하고, 보증금 회수 시스템을 전국 단위로 일원화해야 한다. 동시에 소비자 인센티브(적립, 요금 차등)와 생산자책임재활용 확대를 결합하면 자발적 행동과 시장 논리를 함께 작동시킬 수 있다. 정책은 ‘줄이고, 다시 쓰고, 순환시키는’ 전체 사슬을 관리해야 한다.",
      acceptable: [],
      hint: "성과 수치→현장 문제→표준/인센티브/EPR 패키지",
      tags: ["TOPIK II", "쓰기 54"]
    }
  ]
},
{
  id: "w_topik_54_essay_high3",
  title: "TOPIK II — 54-savol (분석·제안형 esse)",
  category: "TOPIK",
  level: "Yuqori",
  durationSec: 35 * 60,
  questions: [
    {
      id: "q1",
      prompt:
        "【AI와 일자리】\n조사: ‘업무 자동화 체감’ 28%→57%, ‘재교육 참여’ 19%→44%, ‘직무 불안’ 26%→33%. ①수치 해석 ②기업·근로자·정부의 역할을 구분해 600~700자로 쓰세요.",
      answer:
        "자동화 체감이 57%로 급등했지만 재교육 참여가 44%에 그치고 직무 불안은 33%로 완만히 상승했다. 이는 변화의 속도가 학습의 속도를 앞지르고 있음을 시사한다. 기업은 채용·평가를 ‘직무 스킬 매트릭스’로 전환하고, 근로 시간의 일정 비율을 리스킬링에 배정해야 한다. 근로자는 데이터를 다루는 기본 역량을 구축하고, 인간 중심 역량(소통·문제정의)을 강화해야 한다. 정부는 훈련 바우처와 지역 거점 러닝센터로 접근성을 높이고, 이직·전직을 매개하는 안전망을 촘촘히 해야 한다. AI는 일자리를 대체하기보다 재설계하며, 성공의 관건은 학습의 제도화다.",
      acceptable: [],
      hint: "속도 격차→3주체 역할 분담→재설계 관점",
      tags: ["TOPIK II", "쓰기 54"]
    },
    {
      id: "q2",
      prompt:
        "【관광 과밀(오버투어리즘)】\n지표: 성수기 체류 인구 2.4배, 생활쓰레기 1.8배, 지역상권 매출 1.6배. ①긍정·부정 효과 균형 ②혼잡 관리와 지역 수용성 제고 방안을 600~700자로 쓰세요.",
      answer:
        "관광은 지역 매출을 1.6배 끌어올리지만 체류 인구 2.4배 증가와 쓰레기 1.8배 증가는 주민 삶의 질을 위협한다. 수용성 제고의 핵심은 ‘시간·공간·행동’의 분산이다. 성수기 차등 요금과 예약제, 체류세를 도입해 수요를 조절하고, 외곽 분산 코스를 개발하여 중심지 쏠림을 완화한다. 수익은 청결·교통에 재투자해 주민 체감 이익을 높인다. 방문객에겐 탄소·쓰레기 감축 가이드라인을 의무 고지하고, 지역사업자와의 공정계약을 통해 상생 구조를 만들어야 한다.",
      acceptable: [],
      hint: "효과 균형→3분산+재투자→행동규범",
      tags: ["TOPIK II", "쓰기 54"]
    },
    {
      id: "q3",
      prompt:
        "【공공도서관 이용 감소】\n자료: 대출 건수 -22%, 전자자료 이용 +48%, 1인당 방문 횟수 -17%. ①원인 분석 ②‘공간·콘텐츠·사람’ 관점의 혁신안을 600~700자로 쓰세요.",
      answer:
        "대출 건수와 방문이 감소한 반면 전자자료 이용은 48% 증가했다. 이는 디지털 전환과 생활권 변화가 맞물린 결과다. 도서관은 조용한 열람실을 넘어 ‘학습·협업·메이킹’이 가능한 복합공간으로 진화해야 한다. 지역 아카이브와 오디오북, 데이터베이스 구독을 확대하고, 사서는 정보 리터러시 큐레이터로 역할을 재정의한다. 이동·무인 대출과 야간 운영 등 접근성을 높이면 생활 속 이용을 회복할 수 있다. 핵심은 ‘책의 장소’에서 ‘배움의 플랫폼’으로의 전환이다.",
      acceptable: [],
      hint: "원인(디지털·생활권)→공간/콘텐츠/사람 혁신",
      tags: ["TOPIK II", "쓰기 54"]
    }
  ]
},
  {
    id: "w_topik_a1_spelling",
    title: "TOPIK A1 — Imlo va bo‘g‘inlar",
    category: "TOPIK",
    level: "O'rta 1",
    durationSec: 10 * 60,
    questions: [
      {
        id: "q1",
        prompt: "To‘g‘ri yozing: annyeonghaseyo (Korean bilan)",
        answer: "안녕하세요",
        acceptable: [],
        hint: "안녕 + 하세요",
      },
      {
        id: "q2",
        prompt: "Koreyschaga yozing: «talaba»",
        answer: "학생",
        acceptable: [],
      },
      {
        id: "q3",
        prompt: "Koreys tilida yozing: «U o‘qituvchi.»",
        answer: "그는 선생님이에요.",
        acceptable: ["그는 선생님이에요", "그는 선생님 입니다", "그는 선생님입니다"],
      },
    ],
  },
  {
    id: "w_worker_safety",
    title: "Ishchilar — Xavfsizlik belgilarini yozish",
    category: "ISHCHI",
    level: "Ishchilar",
    durationSec: 7 * 60,
    questions: [
      {
        id: "q1",
        prompt: "Koreyscha yozing: «Himoya kaskasi taqing»",
        answer: "안전모를 착용하세요.",
        acceptable: ["안전모 착용하세요.", "안전모를 착용 하세요."],
      },
      {
        id: "q2",
        prompt: "Koreyscha yozing: «Elektrni o‘chirib qo‘ying»",
        answer: "전원을 끄세요.",
        acceptable: ["전원 끄세요."],
      },
    ],
  },
];
