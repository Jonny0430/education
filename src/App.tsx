// App.tsx
import { ChakraProvider, Flex, Box, useColorModeValue } from "@chakra-ui/react";
import { theme } from "./libs/theme";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Suspense, useEffect } from "react";
import LoginPage from "./components/LoginPage/page";
import RegisterPage from "./components/RegisterPage/page";
import { AdminPage } from "./components/AdminPage/page";
import { hydrateFromStorage, loadAuthFromStorageSafe } from "./store/auth/auth.slice";
import { useAppDispatch } from "./hooks/hooks";
import { AdminHome } from "./components/screens/AdminHome/page";
import { AdminUser } from "./components/screens/AdminUser/page";
import { AdminAzo } from "./components/screens/AdminAzo/page";
import { AdminCursesCreate } from "./components/screens/AdminCursesCreate/page";
import { AdminCurse } from "./components/screens/AdminCurse/page";
import UserProfilePage from "./components/UserPage/page";

export function AppBootstrapper() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const saved = loadAuthFromStorageSafe();
    dispatch(hydrateFromStorage(saved));
  }, [dispatch]);
  return null;
}

function AppShell() {
  const appBg = useColorModeValue("#f4faff", "#f4faff");
  const { pathname } = useLocation();

  // ✅ ADMIN ostidagi hamma yo‘llarda public layoutni yashiramiz
  const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/");
  const hide = isAdmin || pathname === "/login" || pathname === "/register" || pathname === "/profile";

  return (
    <Flex direction="column" minH="100vh" bg={appBg}>
      {/* HEADER (faqat public) */}
      {!hide && (
        <Box as="header" position="sticky" top={0} zIndex={10}>
          <Navbar notifCount={1} />
        </Box>
      )}

      {/* CONTENT ROW */}
      <Flex as="section" flex="1" minH={0} overflow="hidden" bg={appBg}>
        {/* SIDEBAR (faqat public) */}
        {!hide && (
          <Box as="aside" zIndex={999} display={{ base: "none", md: "block" }}>
            <Sidebar />
          </Box>
        )}

        {/* MAIN */}
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
            {/* Profile (layoutsiz) */}
            <Route path="/profile" element={<UserProfilePage />} />

            {/* ADMIN sahifalar (har biri o‘z layoutini beradi) */}
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/admin/user" element={<AdminUser />} />
            <Route path="/admin/azo" element={<AdminAzo />} />
            <Route path="/admin/curse/create" element={<AdminCursesCreate />} />
            <Route path="/admin/curse" element={<AdminCurse />} /> {/* ← to‘g‘rilandi */}

            {/* Auth (layoutsiz) */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* PUBLIC sahifalar */}
            <Route path="/" element={<HomePage />} />
            <Route path="/soulte" element={<SoultePage />} />
            <Route path="/soulte/:id" element={<GrammarDetailPage />} />
            <Route path="/grammar" element={<KoreanPage />} />
            <Route path="/grammar/:id" element={<GrammarDetailPage />} />
            <Route path="/lugat" element={<LogatPage />} />
            <Route path="/lugat/:id" element={<LugatDetailPage />} />
            <Route path="/tests" element={<TestPage />} />
            <Route path="/dictant" element={<DiktantPage />} />
            <Route path="/ssugi" element={<WritingTestsPage />} />
            <Route path="/news" element={<XabarPage />} />
            <Route path="/pricing" element={<NarxPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/translate" element={<TranslateAndShare />} />
            <Route path="/lysine" element={<EshitishPage />} />
            <Route path="/courses/:id" element={<CategoryDetailPage />} />
            <Route
              path="/books/:id"
              element={<BookDetailModal isOpen={false} onClose={() => { /* empty */ }} />}
            />

            {/* Not found */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
      </Flex>

      {/* FOOTER (faqat public) */}
      {!hide && (
        <Box as="footer" mt={16}>
          <Footer />
        </Box>
      )}
    </Flex>
  );
}

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div style={{ padding: 16 }}>Loading…</div>}>
        <ChakraProvider theme={theme}>
          <AppBootstrapper />
          <AppShell />
          <HubSpotChat />
        </ChakraProvider>
      </Suspense>
    </I18nextProvider>
  );
}
