// HubSpotChat.tsx
"use client";
import { useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    hsConversationsSettings?: Record<string, unknown>;
    HubSpotConversations?: unknown;
  }
}

export const HubSpotChat = () => {
  const { colorMode } = useColorMode();

  // 1) Skriptni faqat bir marta ulash
  useEffect(() => {
    // HubSpot tavsiya qilgan sozlama – skriptdan OLDIN
    window.hsConversationsSettings = {
      loadImmediately: true,
      // bu yerda til, welcome-message va h.k. sozlashingiz mumkin
      // language: "uz", // kerak bo‘lsa
    };

    // Guard: ikkinchi marta qo‘shilmasin (React 18 StrictMode’da ham)
    if (document.getElementById("hs-script-loader")) return;

    const s = document.createElement("script");
    s.id = "hs-script-loader";
    s.src = "https://js-na2.hs-scripts.com/243152650.js";
    s.async = true;
    document.body.appendChild(s);

    // Skriptni odatda olib tashlamaymiz — sessiya saqlanadi
  }, []);

  // 2) Dark rejimda oq fonni yo‘qotish (container tashqarida, styling mumkin)
  useEffect(() => {
    const style = document.createElement("style");
    style.setAttribute("data-hs-darkfix", "true");
    style.innerHTML = `
      /* Chakra dark kontekstida HubSpot container'ini shaffof qilish */
      .chakra-ui-dark #hubspot-messages-iframe-container {
        background: transparent !important;
        box-shadow: none !important;
      }
      /* Agar light’da ham kvadrat ko‘rinsa, pastdagini oching */
      /* #hubspot-messages-iframe-container { background: transparent !important; } */
    `;
    document.head.appendChild(style);
    return () => {
      // cleanup: sahifa almashtirilganda ko‘payib ketmasin
      document.head.removeChild(style);
    };
  }, [colorMode]);

  return null;
};
