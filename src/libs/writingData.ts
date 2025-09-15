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
    id: "w_topik_a1_spelling",
    title: "TOPIK A1 — Imlo va bo‘g‘inlar",
    category: "TOPIK",
    level: "O'rta 1",
    durationSec: 10 * 60,
    questions: [
      {
        id: "q1",
        prompt: "To‘g‘ri yozing: annyeonghaseyo (Hangul bilan)",
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
