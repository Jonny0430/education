// Sidebar.tsx
"use client";
import React from "react";
import {
  Box,
  VStack,
  HStack,
  Icon as ChakraIcon,
  Text,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import type { IconType } from "react-icons";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMenuBook, MdOutlinePriceChange } from "react-icons/md";
import { LuNewspaper } from "react-icons/lu";
import { FaQuestionCircle, FaUser } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";
import { VscUnmute } from "react-icons/vsc";
import { SlUserFollowing } from "react-icons/sl";
import { IoCreate, IoDocumentText } from "react-icons/io5";
import i18n from "../../i18n";
import type { TFunction } from "i18next";

/* Konstanta: sidebar kengligi */
export const SIDEBAR_W = 280;

/* Tiplar */
type NavItem = { id: string; label: string; icon: IconType; path: string; muted?: boolean };
type NavSection = { id: string; title: string; items: NavItem[] };
type SidebarProps = { /** Navbar balandligi (offset) */ navH?: string };

/* Umumiy (public) menyu */
const GENERAL_SECTIONS: readonly NavSection[] = [
  {
    id: "general",
    title: "Asosiy",
    items: [
      { id: "home",     label: "Bosh Sahifa",                 icon: IoHomeOutline,        path: "/" },
      { id: "soulte",   label: "Seoulte Koreya",              icon: MdOutlineMenuBook,    path: "/soulte" },
      { id: "grammar",  label: "Koreys tili grammatikasi",    icon: MdOutlineMenuBook,    path: "/grammar" },
      { id: "dict",     label: "Lug‘at",                      icon: MdOutlineMenuBook,    path: "/lugat" },
      { id: "tests",    label: "Testlar",                     icon: MdOutlineMenuBook,    path: "/tests" },
      { id: "dictant",  label: "Yozma test",                  icon: MdOutlineMenuBook,    path: "/dictant" },
    ],
  },
  {
    id: "pages",
    title: "Ma’lumotlar",
    items: [
      { id: "translate", label: "Tarjima",                    icon: BsTranslate,          path: "/translate" },
      { id: "lysine",    label: "Tinglash testi",             icon: VscUnmute,            path: "/lysine" },
      { id: "news",      label: "Yangiliklar",                icon: LuNewspaper,          path: "/news" },
      { id: "pricing",   label: "Narxlar",                    icon: MdOutlinePriceChange, path: "/pricing" },
      { id: "faq",       label: "Ko‘p so‘raladigan savollar", icon: FaQuestionCircle,     path: "/faq", muted: true },
    ],
  },
] as const;

/* Admin menyu (faqat /admin ostida) */
const ADMIN_SECTIONS: readonly NavSection[] = [
  {
    id: "admin",
    title: "Admin",
    items: [
      { id: "admin-home",   label: "Bosh Sahifa",      icon: IoHomeOutline,    path: "/admin" },
      { id: "admin-user",   label: "Foydalanuvchilar", icon: FaUser,           path: "/admin/user" },
      { id: "admin-azo",    label: "Azolar",           icon: SlUserFollowing,  path: "/admin/azo" },
      { id: "curse-create", label: "Darslik Qo'shish", icon: IoCreate,         path: "/admin/curse/create" },
      { id: "curse-list",   label: "Darsliklar",       icon: IoDocumentText,   path: "/admin/curse" },
    ],
  },
] as const;

export default function Sidebar({ navH = "56px" }: SidebarProps) {
  const panel      = useColorModeValue("#f6f8fc", "#0b1220");
  const border     = useColorModeValue("blackAlpha.300", "whiteAlpha.200");
  const sectionCol = useColorModeValue("gray.600", "gray.400");
  const hoverBg    = useColorModeValue("blackAlpha.50", "whiteAlpha.100");
  const activeBg   = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const t: TFunction<"layout"> = i18n.getFixedT(null, "layout");

  // 🔎 Joriy yo‘lni tekshirib, qaysi menyuni ko‘rsatishni tanlaymiz
  const { pathname } = useLocation();
  const isAdminRoute = pathname === "/admin" || pathname.startsWith("/admin/");
  const sections: readonly NavSection[] = isAdminRoute ? ADMIN_SECTIONS : GENERAL_SECTIONS;

  // Root yo‘l uchun "end" mosligi: public’da "/" ; admin’da "/admin"
  const rootPath = isAdminRoute ? "/admin" : "/";

  return (
    <>
      {/* FIXED sidebar — scroll paytida joyida turadi */}
      <Box
        as="aside"
        position="fixed"
        left={0}
        top={navH}
        w={`${SIDEBAR_W}px`}
        h={`calc(100vh - ${navH})`}
        bg={panel}
        borderRight="1px solid"
        borderColor={border}
        px={4}
        py={6}
        overflowY="auto"
        zIndex={100}
      >
        <VStack align="stretch" spacing={8}>
          {sections.map((sec) => (
            <Box key={sec.id}>
              <Text
                fontSize="xs"
                color={sectionCol}
                textTransform="uppercase"
                letterSpacing="0.05em"
                mb={3}
                px={2}
              >
                {sec.title}
              </Text>

              <VStack align="stretch" spacing={1}>
                {sec.items.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    end={item.path === rootPath} // ✅ root bo‘lsa exact match
                    style={{ textDecoration: "none" }}
                  >
                    {({ isActive }) => (
                      <HStack
                        spacing={3}
                        px={3}
                        py={2}
                        rounded="lg"
                        _hover={{ bg: hoverBg, cursor: "pointer" }}
                        bg={isActive ? activeBg : "transparent"}
                        opacity={item.muted ? 0.7 : 1}
                      >
                        <ChakraIcon as={item.icon} boxSize={5} />
                        <Text fontSize="sm" fontWeight={isActive ? "bold" : "normal"}>
                          {t(item.label, { ns: "layout", defaultValue: item.label })}
                        </Text>
                      </HStack>
                    )}
                  </NavLink>
                ))}
              </VStack>

              {/* Faqat public bo‘limda bo‘lim ajratgichini ko‘rsatamiz */}
              {!isAdminRoute && sec.id === "general" && <Divider my={4} borderColor={border} />}
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Spacer — layoutda o‘ngdagi kontentni chapdan surib turadi */}
      <Box w={`${SIDEBAR_W}px`} flexShrink={0} />
    </>
  );
}
