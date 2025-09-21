// Sidebar.tsx
import {
  Box,
  VStack,
  HStack,
  Icon as ChakraIcon,
  Text,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import type { IconType } from "react-icons";
import { MdOutlineMenuBook, MdOutlinePriceChange } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";
import { FaQuestionCircle } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";
import { VscUnmute } from "react-icons/vsc";



/* Konstanta: sidebar kengligi */
export const SIDEBAR_W = 280;

/* Tiplar */
type NavItem = { id: string; label: string; icon: IconType; path: string; muted?: boolean };
type NavSection = { id: string; title: string; items: NavItem[] };
type SidebarProps = { /** Navbar balandligi (offset) */ navH?: string };

/* Ma'lumotlar */
const sections: readonly NavSection[] = [
  {
    id: "general",
    title: "Asosiy",
    items: [
      { id: "home",    label: "Bosh Sahifa",        icon: IoHomeOutline,        path: "/" },
      { id: "soulte",  label: "Soulte Kitoblar",    icon: MdOutlineMenuBook,    path: "/soulte" },
      { id: "grammar", label: "Korean Grammar",     icon: MdOutlineMenuBook,    path: "/grammar" },
      { id: "dict",    label: "Lo'g'at",            icon: MdOutlineMenuBook,    path: "/lugat" },
      { id: "tests",   label: "Testlar",            icon: MdOutlineMenuBook,    path: "/tests" },
      { id: "dictant", label: "Diktant Testlar",    icon: MdOutlineMenuBook,    path: "/dictant" },
      { id: "translate", label: "Translate",    icon: BsTranslate ,    path: "/translate" },
      { id: "translate", label: "lysine",    icon: VscUnmute ,    path: "/lysine" },
    ],
  },
  {
    id: "pages",
    title: "Ma’lumotlar",
    items: [
      { id: "news",    label: "Xabarlar",           icon: LuNewspaper,          path: "/news" },
      { id: "pricing", label: "Narxlar",            icon: MdOutlinePriceChange, path: "/pricing" },
      { id: "faq",     label: "Ko‘p so‘raladigan savollar", icon: FaQuestionCircle, path: "/faq", muted: true },
    ],
  },
] as const;

export default function Sidebar({ navH = "56px" }: SidebarProps) {
  const panel      = useColorModeValue("#f6f8fc", "#0b1220");
  const border     = useColorModeValue("blackAlpha.300", "whiteAlpha.200");
  const sectionCol = useColorModeValue("gray.600", "gray.400");
  const hoverBg    = useColorModeValue("blackAlpha.50", "whiteAlpha.100");
  const activeBg   = useColorModeValue("blackAlpha.100", "whiteAlpha.200");

  return (
    <>
      {/* FIXED sidebar — scroll paytida joyida turadi */}
      <Box
        as="aside"
        position="fixed"
        left={0}
        top={navH}
        w={'280px'}
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
                  <NavLink key={item.id} to={item.path} end={item.path === "/"} style={{ textDecoration: "none" }}>
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
                          {item.label}
                        </Text>
                      </HStack>
                    )}
                  </NavLink>
                ))}
              </VStack>

              {sec.id === "general" && <Divider my={4} borderColor={border} />}
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Spacer — layoutda o‘ngdagi kontentni chapdan surib turadi */}
      <Box w={'280px'} flexShrink={0} />
    </>
  );
}
