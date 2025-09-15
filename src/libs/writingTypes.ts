import type { Level } from "./Books";

export type WritingQuestion = {
  id: string;
  prompt: string;        // Ko'rsatma: "Koreyschaga tarjima qiling: book"
  answer: string;        // Asosiy to'g'ri javob (masalan: "책")
  acceptable?: string[]; // Qo'shimcha qabul qilinadigan variantlar
  hint?: string;         // Ixtiyoriy ishora
  tags?: string[];       // masalan: ["TOPIK I", "Spelling"]
};

export type WritingPack = {
  id: string;
  title: string;
  category: "TOPIK" | "ISHCHI" | "GENERAL";
  level: Level | "Ishchilar";
  durationSec: number;
  questions: WritingQuestion[];
  meta?: { savedKey?: string };
};
