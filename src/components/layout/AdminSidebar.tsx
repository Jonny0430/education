// src/layouts/AdminSidebar.tsx
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
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import type { IconType } from "react-icons";
import { IoHomeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { SlUserFollowing } from "react-icons/sl";
import { IoCreate, IoDocumentText } from "react-icons/io5";
import i18n from "../../i18n";
import type { TFunction } from "i18next";

/* ===== Public API ===== */
export const SIDEBAR_W = 280 as const;

type NavItem = {
  id: string;
  label: string;
  icon: IconType;
  path: string;
  muted?: boolean;
};
type NavSection = { id: string; title: string; items: NavItem[] };

type SidebarBaseProps = {
  /** ixtiyoriy: aktiv itemni tashqaridan boshqarish kerak bo‘lsa */
  activeId?: string;
};

type SidebarProps =
  | ({ variant: "static"; navH?: string } & SidebarBaseProps)
  | ({ variant: "drawer"; isOpen: boolean; onClose: () => void } & SidebarBaseProps);

/* ===== Config ===== */
const sections: readonly NavSection[] = [
  {
    id: "admin",
    title: "ADMIN",
    items: [
      { id: "home",         label: "Bosh Sahifa",        icon: IoHomeOutline,     path: "/admin/home" },
      { id: "user",         label: "Foydalanuvchilar",   icon: FaUser,            path: "/admin/user" },
      { id: "azo",          label: "Azolar",             icon: SlUserFollowing,   path: "/admin/azo" },
      { id: "curse-create", label: "Darslik Qo'shish",   icon: IoCreate,          path: "/admin/curse/create" },
      { id: "curse-list",   label: "Darsliklar",         icon: IoDocumentText,    path: "/admin/curse" },
    ],
  },
] as const;

/* ===== Inner content ===== */
function SidebarContent({ activeId }: SidebarBaseProps) {
  const hoverBg   = useColorModeValue("blackAlpha.50", "whiteAlpha.100");
  const activeBg  = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const sectionCl = useColorModeValue("gray.600", "gray.400");
  const borderCl  = useColorModeValue("blackAlpha.300", "whiteAlpha.200");
  const t: TFunction<"layout"> = i18n.getFixedT(null, "layout");

  return (
    <VStack align="stretch" spacing={8} px={4} py={6}>
      {sections.map((sec) => (
        <Box key={sec.id}>
          <Text
            fontSize="xs"
            color={sectionCl}
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
                end={item.path === "/admin/home"} // faqat home'da end
                style={{ textDecoration: "none" }}
              >
                {({ isActive }) => {
                  const active = isActive || activeId === item.id;
                  return (
                    <HStack
                      spacing={3}
                      px={3}
                      py={2}
                      rounded="lg"
                      _hover={{ bg: hoverBg, cursor: "pointer" }}
                      bg={active ? activeBg : "transparent"}
                      opacity={item.muted ? 0.7 : 1}
                    >
                      <ChakraIcon as={item.icon} boxSize={5} />
                      <Text fontSize="sm" fontWeight={active ? "bold" : "normal"}>
                        {t(item.label, { ns: "layout", defaultValue: item.label })}
                      </Text>
                    </HStack>
                  );
                }}
              </NavLink>
            ))}
          </VStack>

          {/* bo‘lim ajratgich (agar boshqa bo‘limlar qo‘shsangiz foydali) */}
          {sec.id === "admin" && <Divider my={4} borderColor={borderCl} />}
        </Box>
      ))}
    </VStack>
  );
}

/* ===== Main component ===== */
export default function AdminSidebar(props: SidebarProps) {
  const panelBg = useColorModeValue("#f6f8fc", "#0b1220");
  const border  = useColorModeValue("blackAlpha.300", "whiteAlpha.200");

  if (props.variant === "drawer") {
    const { isOpen, onClose, activeId } = props;
    return (
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent maxW={`${SIDEBAR_W}px`}>
          <DrawerCloseButton />
          <DrawerBody p={0}>
            <SidebarContent activeId={activeId} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  // static (desktop)
  const navH = props.navH ?? "64px";
  return (
    <>
      <Box
        as="aside"
        position="fixed"
        left={0}
        top={navH}
        w={`${SIDEBAR_W}px`}
        h={`calc(100vh - ${navH})`}
        bg={panelBg}
        borderRight="1px solid"
        borderColor={border}
        overflowY="auto"
        zIndex={100}
      >
        <SidebarContent activeId={props.activeId} />
      </Box>

      {/* spacer: kontentni o‘ngga surish uchun */}
      <Box w={`${SIDEBAR_W}px`} flexShrink={0} />
    </>
  );
}
