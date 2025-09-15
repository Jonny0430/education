"use client"
import { Box, Flex, HStack, IconButton, Button, Text, Circle, Tooltip, useColorModeValue } from "@chakra-ui/react"
import { HamburgerIcon, QuestionIcon, SettingsIcon, BellIcon } from "@chakra-ui/icons"
import { MdImage } from "react-icons/md"
import { FiUser } from "react-icons/fi"
import ColorModeToggle from "../../libs/ColorModeToggle"

type HeaderProps = {
  notifCount?: number
  onLogin?: () => void
  onMenuClick?: () => void
}

export default function Navbar({ notifCount = 1, onLogin, onMenuClick }: HeaderProps) {
  const barBg = useColorModeValue("white", "gray.800")
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.300")
  const titleCl = useColorModeValue("gray.900", "gray.100")
  const badgeBg = useColorModeValue("red.500", "red.400")

  // Login tugmasi uchun rejimga mos ranglar
  const loginBg = useColorModeValue("orange.400", "orange.300")
  const loginHoverBg = useColorModeValue("orange.500", "orange.400")
  const loginTextCl = useColorModeValue("black", "gray.900")

  return (
    <Box position="sticky" top={0} zIndex={1000} borderBottom="1px solid" borderColor={border}>
      <Flex px={{ base: 3, md: 6 }} py={2} bg={barBg} align="center" justify="space-between">
        {/* Chap: menyu + sarlavha */}
        <HStack spacing={2}>
          <IconButton
            aria-label="Menu"
            icon={<HamburgerIcon />}
            size="sm"
            variant="ghost"
            onClick={onMenuClick}
            display={{ base: "flex", lg: "none" }}
          />
          <Text fontWeight="bold" color={titleCl}>
            Education
          </Text>
        </HStack>

        {/* O‘ng: amallar */}
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

          {/* Dark/Light toggle */}
          <ColorModeToggle />

          {/* Login */}
          <Button
            size="sm"
            leftIcon={<FiUser />}
            bg={loginBg}
            _hover={{ bg: loginHoverBg }}
            color={loginTextCl}
            rounded="md"
            onClick={onLogin}
          >
            Login
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}
