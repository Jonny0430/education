// Tiplar — testlar uchun

import type { Level } from "./Books";

export type TestCategory = "TOPIK" | "ISHCHI";
export type TestTopic = "Vocabulary" | "Grammar" | "Reading" | "Safety";

export type Option = { id: string; text: string };
export type Question = {
  id: string;
  stem: string;
  options: Option[];
  correctId: string;
  explanation?: string;
  tags?: string[];
};

export type TestPack = {
  savedKey: string;
  id: string;
  title: string;
  category: TestCategory;
  topic: TestTopic;
  level: Level | "Ishchilar";
  durationSec: number;          // default vaqt (sekund)
  questions: Question[];
  meta?: {
    lang?: "uz" | "ko" | "en";
    savedKey?: string;          // localStorage kaliti (agar bermasang ham id bo‘yicha avtomatik)
  };
};
