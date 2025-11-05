"use client";
import React from "react";
import {
  Box,
  Flex,
  HStack,
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
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Spinner,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { QuestionIcon, BellIcon } from "@chakra-ui/icons";
import { FiMenu } from "react-icons/fi";
import { SiGoogletranslate } from "react-icons/si";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { logout } from "../../store/auth/auth.slice";
import { MemberType } from "../../lib/enum.member";

type AdminNavbarProps = {
  /** Mobil sidebar (Drawer) ochuvchi tugma uchun handler */
  onMenuClick: () => void;
  /** Xabarnoma badji */
  notifCount?: number;
};

export default function AdminNavbar({ onMenuClick, notifCount = 0 }: AdminNavbarProps) {
  const barBg   = useColorModeValue("white", "gray.800");
  const border  = useColorModeValue("blackAlpha.200", "whiteAlpha.300");
  const titleCl = useColorModeValue("gray.900", "gray.100");
  const badgeBg = useColorModeValue("red.500", "red.400");

  // ⚠️ RootState dagi dilim nomi sizda boshqacha bo‘lsa, shu joyni moslang
  const { status, data } =
    useSelector((s: RootState) => (s as any).auth ?? (s as any).reducer ?? { status: "idle", data: null });

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isLoading = status === "loading";
  const isAuthed  = !!data;
  const isAdmin   = data?.memberType === MemberType.ADMIN;

  // Ichki panellar
  const notifications = useDisclosure();
  const help          = useDisclosure();

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      borderBottom="1px solid"
      borderColor={border}
      bg={barBg}
      boxShadow="sm"
    >
      <Flex px={{ base: 3, md: 6 }} py={2} bg={barBg} align="center" justify="space-between">
        {/* Chap: hamburger + sarlavha */}
        <HStack spacing={2}>
          <IconButton
            aria-label="Menyu"
            icon={<FiMenu />}
            colorScheme="blue"
            variant="solid"
            borderRadius="full"
            onClick={onMenuClick}
            display={{ base: "inline-flex", lg: "none" }}
          />
          <Text
            as={RouterLink}
            to="/"
            fontWeight="bold"
            color={titleCl}
            _hover={{ textDecoration: "none", opacity: 0.9 }}
          >
            Education
          </Text>
        </HStack>

        {/* O‘ng: amallar */}
        <HStack spacing={{ base: 0, md: 1 }}>
          <Tooltip label="Help">
            <IconButton
              aria-label="Help"
              icon={<QuestionIcon />}
              size="sm"
              variant="ghost"
              onClick={help.onOpen}
            />
          </Tooltip>

          <Box position="relative">
            <Tooltip label="Notifications">
              <IconButton
                aria-label="Notifications"
                icon={<BellIcon />}
                size="sm"
                variant="ghost"
                onClick={notifications.onOpen}
              />
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

          <Tooltip label="Translate">
            <IconButton
              as={RouterLink}
              to="/translate"
              aria-label="Translate"
              icon={<SiGoogletranslate />}
              size="sm"
              variant="ghost"
            />
          </Tooltip>

          {isLoading ? (
            <Spinner size="sm" ml={2} />
          ) : isAuthed ? (
            <Menu>
              <MenuButton>
                <Avatar
                  size="sm"
                  name={data?.memberNick ?? ""}
                  src={data?.memberImage ?? undefined}
                />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
                {isAdmin && <MenuItem onClick={() => navigate("/admin")}>Admin Panel</MenuItem>}
                <MenuItem
                  onClick={() => {
                    dispatch(logout());
                    navigate("/login");
                  }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <HStack>
              <Button as={RouterLink} to="/login" colorScheme="blue" variant="solid" size="sm">
                Kirish
              </Button>
            </HStack>
          )}
        </HStack>
      </Flex>

      {/* NOTIFICATIONS — Right Drawer */}
      <Drawer placement="right" isOpen={notifications.isOpen} onClose={notifications.onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontFamily="inter">Xabarnomalar</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={3} fontFamily="inter">
              <Text fontSize="sm" color="gray.500">
                Bugungi yangiliklar:
              </Text>
              <Stack spacing={2}>
                <Box p={3} borderWidth="1px" rounded="md">
                  <Text fontWeight="semibold">TOPIK II yangi test qo‘shildi</Text>
                  <Text fontSize="sm" color="gray.500">
                    5 daqiqa oldin
                  </Text>
                </Box>
                <Box p={3} borderWidth="1px" rounded="md">
                  <Text fontWeight="semibold">Grammatika: -(으)려고 하다 darsi yangilandi</Text>
                  <Text fontSize="sm" color="gray.500">
                    1 soat oldin
                  </Text>
                </Box>
              </Stack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* HELP — Modal */}
      <Modal isOpen={help.isOpen} onClose={help.onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily="inter">Yordam</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} fontFamily="inter">
            <VStack align="stretch" spacing={3}>
              <Text>
                <b>FAQ</b> bo‘limidan tez-tez so‘raladigan savollarga javob topasiz.
              </Text>
              <Text>Muammo bo‘lsa: jonny89pi@gmail.com ga murojat qiling</Text>
              <Divider />
              <Button onClick={help.onClose} colorScheme="blue">
                Tushunarli
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
