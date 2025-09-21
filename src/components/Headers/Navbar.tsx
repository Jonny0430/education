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
  Switch,
  FormControl,
  FormLabel,
  Stack,
  RadioGroup,
  Radio,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { QuestionIcon, SettingsIcon, BellIcon } from "@chakra-ui/icons";
import { MdImage, MdOutlineMenuBook, MdOutlinePriceChange } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";
import { FaQuestionCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import type { IconType } from "react-icons";

/* === Sidebar bo‘limlari === */
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

type HeaderProps = {
  notifCount?: number;
};

export default function Navbar({ notifCount = 1 }: HeaderProps) {
  const barBg   = useColorModeValue("white", "gray.800");
  const border  = useColorModeValue("blackAlpha.200", "whiteAlpha.300");
  const titleCl = useColorModeValue("gray.900", "gray.100");
  const badgeBg = useColorModeValue("red.500", "red.400");
  const hoverBg = useColorModeValue("blackAlpha.50", "whiteAlpha.100");
  const activeBg= useColorModeValue("blackAlpha.100", "whiteAlpha.200");

  // Main menu drawer (hamburger)
  const menu = useDisclosure();

  // Extra panels
  const settings = useDisclosure();
  const notifications = useDisclosure();
  const media = useDisclosure();
  const language = useDisclosure();
  const help = useDisclosure();

  // Sidebar ro‘yxati
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
        {/* Chap: hamburger + sarlavha */}
        <HStack spacing={2}>
          <IconButton
            aria-label="Menyu"
            icon={<FiMenu />}
            colorScheme="blue"
            variant="solid"
            borderRadius="full"
            onClick={menu.isOpen ? menu.onClose : menu.onOpen}
            display={{ base: "inline-flex", lg: "none" }}
          />
          <a href="/"><Text fontWeight="bold" color={titleCl}>Education</Text></a>
        </HStack>

        {/* O‘ng: amallar */}
        <HStack spacing={1}>
          <Tooltip label="Help">
            <IconButton aria-label="Help" icon={<QuestionIcon />} size="sm" variant="ghost" onClick={help.onOpen} />
          </Tooltip>

          <Tooltip label="Media">
            <IconButton aria-label="Media" icon={<MdImage />} size="sm" variant="ghost" onClick={media.onOpen} />
          </Tooltip>

          <Button size="sm" variant="ghost" rounded="md" onClick={language.onOpen}>
            En
          </Button>

          <Box position="relative">
            <Tooltip label="Notifications">
              <IconButton aria-label="Notifications" icon={<BellIcon />} size="sm" variant="ghost" onClick={notifications.onOpen} />
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
            <IconButton aria-label="Settings" icon={<SettingsIcon />} size="sm" variant="ghost" onClick={settings.onOpen} />
          </Tooltip>
        </HStack>
      </Flex>

      {/* Mobil Drawer menyu */}
      <Drawer placement="left" isOpen={menu.isOpen} onClose={menu.onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigator</DrawerHeader>
          <DrawerBody>{renderNavList(menu.onClose)}</DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* SETTINGS — Right Drawer */}
      <Drawer placement="right" isOpen={settings.isOpen} onClose={settings.onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Sozlamalar</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4}>
              <FormControl display="flex" alignItems="center" justifyContent="space-between">
                <FormLabel mb="0">Qorong‘i rejim</FormLabel>
                <Switch />
              </FormControl>
              <Divider />
              <FormControl display="flex" alignItems="center" justifyContent="space-between">
                <FormLabel mb="0">Avto-saqlash</FormLabel>
                <Switch defaultChecked />
              </FormControl>
              <Divider />
              <FormControl display="flex" alignItems="center" justifyContent="space-between">
                <FormLabel mb="0">Notification sound</FormLabel>
                <Switch />
              </FormControl>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* NOTIFICATIONS — Right Drawer */}
      <Drawer placement="right" isOpen={notifications.isOpen} onClose={notifications.onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Xabarnomalar</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={3}>
              <Text fontSize="sm" color="gray.500">Bugungi yangiliklar:</Text>
              <Stack spacing={2}>
                <Box p={3} borderWidth="1px" rounded="md">
                  <Text fontWeight="semibold">TOPIK II yangi test qo‘shildi</Text>
                  <Text fontSize="sm" color="gray.500">5 daqiqa oldin</Text>
                </Box>
                <Box p={3} borderWidth="1px" rounded="md">
                  <Text fontWeight="semibold">Grammatika: -(으)려고 하다 darsi yangilandi</Text>
                  <Text fontSize="sm" color="gray.500">1 soat oldin</Text>
                </Box>
              </Stack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* MEDIA — Right Drawer */}
      <Drawer placement="right" isOpen={media.isOpen} onClose={media.onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Media</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4}>
              <Text color="gray.500" fontSize="sm">Rasmlar va videolarni boshqaring.</Text>
              <Divider />
              <Stack spacing={2}>
                <Button colorScheme="blue" variant="solid">Yangi video qo‘shish</Button>
                <Button variant="outline">Rasm yuklash</Button>
                <Button variant="ghost">Galereyani ochish</Button>
              </Stack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* LANGUAGE (En) — Modal */}
      <Modal isOpen={language.isOpen} onClose={language.onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tilni tanlang</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <RadioGroup defaultValue="en">
              <VStack align="stretch" spacing={3}>
                <Radio value="en">English</Radio>
                <Radio value="uz">O‘zbekcha</Radio>
                <Radio value="ru">Русский</Radio>
                <Radio value="ko">한국어</Radio>
              </VStack>
            </RadioGroup>
            <Divider my={4} />
            <Button colorScheme="blue" w="full" onClick={language.onClose}>Saqlash</Button>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* HELP — Modal */}
      <Modal isOpen={help.isOpen} onClose={help.onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Yordam</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack align="stretch" spacing={3}>
              <Text><b>FAQ</b> bo‘limidan tez-tez so‘raladigan savollarga javob topasiz.</Text>
              <Text>Muammo bo‘lsa: support@example.com</Text>
              <Divider />
              <Button onClick={help.onClose} colorScheme="blue">Tushunarli</Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
