// libs/Books.ts
export type Level = "Boshlang'ich" | "O'rta 1" | "O'rta 2" | "Yuqori";
export type Series = "SNU" | "Integrated" | "GrammarInUse" | "TOPIK";
export type Kind = "Textbook" | "Workbook" | "Reference";

export type AttachmentKind = "pdf" | "zip" | "audio" | "video" | "link";
export type Attachment = {
  id: string;
  name: string;            // ko‘rinadigan nom
  kind: AttachmentKind;    // fayl turi
  size?: string;           // ixtiyoriy: masalan "2.3 MB"
  url: string;             // to‘g‘ridan-to‘g‘ri link yoki tashqi link
};

export type Book = {
  id: string;
  title: string;
  series: Series;
  level: Level;
  kind: Kind;
  cover?: string;
  // Yangi:
  attachments?: Attachment[];
};

// ---- NAMUNA MA'LUMOT ----
export const BOOKS: Book[] = [
  {
    id: "snu-1a-tb",
    title: "SNU Korean 1A (Textbook)",
    series: "SNU",
    level: "Boshlang'ich",
    kind: "Textbook",
    cover: "/covers/snu-1a.jpg",
    attachments: [
      { id: "pdf",  name: "Textbook PDF", kind: "pdf",  size: "38 MB", url: "https://your-cdn.com/snu-1a.pdf" },
      { id: "zip",  name: "Audio ZIP",    kind: "zip",  size: "120 MB", url: "https://your-cdn.com/snu-1a-audio.zip" },
      { id: "link", name: "Online video", kind: "link",               url: "https://youtu.be/xxxx" },
    ],
  },
  // ...
];
