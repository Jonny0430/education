import { ChakraProvider, Flex, Box, useColorModeValue } from "@chakra-ui/react";
import { theme } from "./libs/theme";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Headers/Navbar";
import Sidebar from "./components/Headers/Sidebar";
import Footer from "./components/Fotter";

import HomePage from "./screens/HomePage";
import SoultePage from "./screens/SoultePage";
import KoreanPage from "./screens/KoreanPage";
import LogatPage from "./screens/LogatPage";
import TestPage from "./screens/TestlarPage";
import DiktantPage from "./screens/DiktantPage";
import XabarPage from "./screens/XabarPage";
import NarxPage from "./screens/NarxPage";
import FaqPage from "./screens/KopSalvolPage";
import CategoryDetailPage from "./screens/HomePage/CategoryDetailPage";
import BookDetailModal from "./screens/SoultePage/SoulteDetail";
import LugatDetailPage from "./screens/LogatPage/LugatDetailPage";
import WritingTestsPage from "./screens/DiktantPage/WritingTestsPage";
import GrammarDetailPage from "./screens/KoreanPage/GrammarDetailPage";
import { HubSpotChat } from "./hooks/HubSpotScript";
import TranslateAndShare from "./screens/TranslatePage/TranslatePage";
import EshitishPage from "./screens/EshitishTestPage";

function AppLayout() {
  const appBg = useColorModeValue("#f4faff", "#0b1220");

  return (
    <Flex direction="column" minH="100vh" bg={appBg}>
      {/* HEADER — joyida turadi */}
      <Box as="header" position="sticky" top={0} zIndex={10}>
        <Navbar notifCount={1} />
      </Box>

      {/* MIDDLE ROW — faqat MAIN scroll bo‘ladi */}
      <Flex as="section" flex="1" minH={0} overflow="hidden" bg={appBg}>
        {/* SIDEBAR — joyida turadi */}
        <Box as="aside" zIndex={999} display={{ base: "none", md: "block" }}>
          {/* (Mobile’da Drawer ochiladigan versiyangiz bo‘lsa, u Navbar ichida ochiladi) */}
          <Sidebar  />
        </Box>

        {/* MAIN — faqat shu scroll */}
        <Box
          as="main"
          flex="1"
          minH={0}
          overflowY="auto"
          bg={appBg}
          px={{ base: 4, md: 6 }}
          py={{ base: 4, md: 6 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/soulte" element={<SoultePage />} />
              <Route path="/soulte/:id" element={<GrammarDetailPage />} />
            <Route path="/grammar" element={<KoreanPage />} />
            <Route path="/lugat" element={<LogatPage />} />
            <Route path="/tests" element={<TestPage />} />
            <Route path="/dictant" element={<DiktantPage />} />
            <Route path="/news" element={<XabarPage />} />
            <Route path="/pricing" element={<NarxPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/translate" element={<TranslateAndShare />} />
            <Route path="/lysine" element={<EshitishPage />} />
            <Route path="/courses/:id" element={<CategoryDetailPage />} />
            <Route path="/books/:id" element={<BookDetailModal isOpen={false} onClose={function (): void {
              throw new Error("Function not implemented.");
            } } />} />
            <Route path="/lugat/:id" element={<LugatDetailPage />} />
            <Route path="/ssugi" element={<WritingTestsPage />} />
              <Route path="/grammar/:id" element={<GrammarDetailPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
      </Flex>

      {/* FOOTER — doim pastda, qimirlamaydi */}
      <Box as="footer" mt={16}>
        <Footer />
      </Box>
    </Flex>
  );
}



export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppLayout />
       <HubSpotChat  />
    </ChakraProvider>
  );
}
