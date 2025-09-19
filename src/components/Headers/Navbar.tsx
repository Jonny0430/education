"use client";
import {
  Box,
  Flex,
  HStack,
  Icon as ChakraIcon,
  IconButton,
  Button,
  Text,
  Circle,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { QuestionIcon, SettingsIcon, BellIcon } from "@chakra-ui/icons";
import { MdImage, MdOutlineMenuBook, MdOutlinePriceChange } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";
import { FaQuestionCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import type { IconType } from "react-icons";
// import ColorModeToggle from "../../libs/ColorModeToggle";

/* === Sidebar'dagi bo'limlar (Navbar menusi uchun ham ishlatamiz) === */
type NavItem = { id: string; label: string; icon: IconType; path: string; muted?: boolean };
type NavSection = { id: string; title: string; items: NavItem[] };

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

/* === Navbar === */
type HeaderProps = {
  notifCount?: number;
  onLogin?: () => void;
  onMenuClick?: () => void;
};

export default function Navbar({ notifCount = 1 }: HeaderProps) {
  const barBg   = useColorModeValue("white", "gray.800");
  const border  = useColorModeValue("blackAlpha.200", "whiteAlpha.300");
  const titleCl = useColorModeValue("gray.900", "gray.100");
  const badgeBg = useColorModeValue("red.500", "red.400");


  const hoverBg  = useColorModeValue("blackAlpha.50", "whiteAlpha.100");
  const activeBg = useColorModeValue("blackAlpha.100", "whiteAlpha.200");

  const { isOpen, onOpen, onClose } = useDisclosure();

  // Sidebar ro'yxatini Navbar Drawer'ida ham ishlatamiz
  const renderNavList = (onItemClick?: () => void) => (
    <VStack align="stretch" spacing={8}>
      {sections.map((sec) => (
        <Box key={sec.id}>
          <Text
            fontSize="xs"
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.600", "gray.400")}
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
                end={item.path === "/"}
                style={{ textDecoration: "none" }}
                onClick={onItemClick}
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
  );

  return (
    <Box position="sticky" top={0} zIndex={1000} borderBottom="1px solid" borderColor={border}>
      <Flex px={{ base: 3, md: 6 }} py={2} bg={barBg} align="center" justify="space-between">
        {/* Chap tomonda: hamburger + sarlavha */}
        <HStack spacing={2}>
          {/* Mobil hamburger: <lg (≈<992px) ko'rinadi */}
          <IconButton
            aria-label="Menyu"
            icon={<FiMenu />}
            colorScheme="blue"
            variant="solid"
            borderRadius="full"
            onClick={isOpen ? onClose : onOpen}
            display={{ base: "inline-flex", lg: "none" }}
          />
          <a href="/">
          <Text fontWeight="bold" color={titleCl}>
               Education
          </Text>
          {/* </Button> */}
          </a>
        </HStack>

        {/* O‘ng tomonda: amallar */}
        <HStack spacing={1}>
          <Tooltip label="Help">
            <IconButton aria-label="Help" icon={<QuestionIcon />} size="sm" variant="ghost" />
          </Tooltip>
          <Tooltip label="Media">
            <IconButton aria-label="Media" icon={<MdImage />} size="sm" variant="ghost" />
          </Tooltip>
          <Button size="sm" variant="ghost" rounded="md">
            En
          </Button>

          {/* Notification + badge */}
          <Box position="relative">
            <Tooltip label="Notifications">
              <IconButton aria-label="Notifications" icon={<BellIcon />} size="sm" variant="ghost" />
            </Tooltip>
            {notifCount > 0 && (
              <Circle
                size="16px"
                bg={badgeBg}
                color="white"
                fontSize="10px"
                fontWeight="bold"
                position="absolute"
                top="-4px"
                right="-4px"
              >
                {notifCount}
              </Circle>
            )}
          </Box>

          <Tooltip label="Settings">
            <IconButton aria-label="Settings" icon={<SettingsIcon />} size="sm" variant="ghost" />
          </Tooltip>

          {/* <ColorModeToggle /> */}
        </HStack>
      </Flex>

      {/* Mobil Drawer menyu (hamburger bosilganda) */}
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigator</DrawerHeader>
          <DrawerBody>{renderNavList(onClose)}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
