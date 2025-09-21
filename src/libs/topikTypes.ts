// src/types/topikTypes.ts

export type Choice = { id: string; text: string };

export type TopikQuestion = {
  id: string;
  stem: string;
  options: Choice[];
  correctId: string;
  explanation?: string;
  tags?: string[];
};

export type Level = "TOPIK I" | "TOPIK II";
export type Section = "Vocabulary" | "Grammar" | "Reading" | "Listening";

export type TestPack = {
  id: string;
  title: string;
  level: Level;
  section: Section;
  durationSec: number;
  questions: TopikQuestion[];
  savedKey?: string;
};

export type Result = {
  correct: number;
  total: number;
  wrongList: { q: TopikQuestion; chosen?: string }[];
};
