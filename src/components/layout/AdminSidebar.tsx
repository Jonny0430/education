// AdminSidebar.tsx
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
import { IoHomeOutline, IoCreate, IoDocumentText } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { SlUserFollowing } from "react-icons/sl";
import i18n from "../../i18n";
import type { TFunction } from "i18next";

/* ====== Public API ====== */
export const SIDEBAR_W = 280;

type NavItem = {
  id: string;
  label: string;
  icon: IconType;
  path: string;
  muted?: boolean;
};
type NavSection = { id: string; title: string; items: NavItem[] };

type SidebarProps =
  | { variant: "static"; navH?: string }
  | { variant: "drawer"; isOpen: boolean; onClose: () => void };

const sections: readonly NavSection[] = [
  {
    id: "admin",
    title: "Admin",
    items: [
      { id: "home", label: "Bosh Sahifa", icon: IoHomeOutline, path: "/admin/home" },
      { id: "user", label: "Foydalanuvchilar", icon: FaUser, path: "/admin/user" },
      { id: "azo", label: "Azolar", icon: SlUserFollowing, path: "/admin/azo" },
      { id: "curse-create", label: "Darslik Qo'shish", icon: IoCreate, path: "/admin/curse/create" },
      { id: "curse-list", label: "Darsliklar", icon: IoDocumentText, path: "/admin/curse" },
    ],
  },
] as const;

/* ====== Inner content ====== */
function SidebarContent() {
  const hoverBg = useColorModeValue("blackAlpha.50", "whiteAlpha.100");
  const activeBg = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const sectionCol = useColorModeValue("gray.600", "gray.400");
  const border = useColorModeValue("blackAlpha.300", "whiteAlpha.200");
  const t: TFunction<"layout"> = i18n.getFixedT(null, "layout");

  return (
    <VStack align="stretch" spacing={8} px={4} py={6}>
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
                // agar bosh sahifa aniq /admin/home bo‘lsa, end shartini moslang
                end={item.path === "/admin/home"}
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

          {/* boshqa bo‘limlar bo‘lsa divider qo‘llang */}
          {sec.id === "general" && <Divider my={4} borderColor={border} />}
        </Box>
      ))}
    </VStack>
  );
}

/* ====== Main component (2 variant) ====== */
export default function AdminSidebar(props: SidebarProps) {
  const panel = useColorModeValue("#f6f8fc", "#0b1220");
  const border = useColorModeValue("blackAlpha.300", "whiteAlpha.200");

  if (props.variant === "drawer") {
    return (
      <Drawer isOpen={props.isOpen} onClose={props.onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent maxW={`${SIDEBAR_W}px`}>
          <DrawerCloseButton />
          <DrawerBody p={0}>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  // static (desktop)
  const navH = props.navH ?? "56px";
  return (
    <>
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
        overflowY="auto"
        zIndex={100}
      >
        <SidebarContent />
      </Box>

      {/* Spacer — layout kontentini o‘ngga suradi (agar flex layout ishlatsangiz) */}
      <Box w={`${SIDEBAR_W}px`} flexShrink={0} />
    </>
  );
}
