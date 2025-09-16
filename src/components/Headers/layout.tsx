// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mysite.uz"),
  title: "Koreys tili — onlayn kurslar",
  description: "Hangul’dan TOPIKgacha — mentor ko‘magida o‘rganing.",

  openGraph: {
    type: "website",
    url: "https://mysite.uz",
    siteName: "MyKorean",
    title: "Koreys tili — onlayn kurslar",
    description: "Hangul’dan TOPIKgacha — mentor ko‘magida o‘rganing.",
    images: [
      // 🔁 Asosiy preview (1200×630)
      {
        url: "https://mysite.uz/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Koreys tili",
      },
      // 🔁 Kvadrat logo (ixtiyoriy)
      {
        url: "https://mysite.uz/og/og-square-512.png",
        width: 512,
        height: 512,
        alt: "MyKorean logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Koreys tili — onlayn kurslar",
    description: "Hangul’dan TOPIKgacha — mentor ko‘magida o‘rganing.",
    images: ["https://mysite.uz/og/og-default.jpg"],
  },

  // 🔁 Favikonlar/Apple Touch
  icons: {
    icon: [
      { url: "https://mysite.uz/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "https://mysite.uz/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "https://mysite.uz/favicon.ico" },
    ],
    apple: [
      { url: "https://mysite.uz/icons/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "mask-icon", url: "https://mysite.uz/icons/safari-pinned-tab.svg", color: "#0b1220" },
    ],
  },

  manifest: "https://mysite.uz/site.webmanifest",

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#0b1220" },
  ],
};
