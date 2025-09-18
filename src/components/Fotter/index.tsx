// src/components/Footer.tsx
"use client";

import type { JSX } from "react";
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  SiTelegram,
  SiInstagram,
  SiX,
  SiYoutube,
  SiLinkedin,
  SiFacebook,
} from "react-icons/si";

type Social = { id: string; label: string; href: string; icon: React.ElementType; brand?: string };

// Fixed footer balandligi (px) — layoutda ham ishlatamiz
export const FOOTER_HEIGHT = 64;

const SOCIALS: Social[] = [
  { id: "telegram",  label: "Telegram",   href: "#", icon: SiTelegram,  brand: "#229ED9" },
  { id: "instagram", label: "Instagram",  href: "#", icon: SiInstagram, brand: "#E1306C" },
  { id: "x",         label: "X (Twitter)",href: "#", icon: SiX },
  { id: "youtube",   label: "YouTube",    href: "#", icon: SiYoutube,   brand: "#FF0000" },
  { id: "linkedin",  label: "LinkedIn",   href: "#", icon: SiLinkedin,  brand: "#0A66C2" },
  { id: "facebook",  label: "Facebook",   href: "#", icon: SiFacebook,  brand: "#1877F2" },
];

export default function Footer({
  brand = "Olayn o'quv platforma",
}: {
  brand?: string;
}): JSX.Element {
  const year = new Date().getFullYear();

  // Light/Dark ranglar
  const bg       = useColorModeValue("whiteAlpha.900", "#121823");
  const text     = useColorModeValue("gray.700", "gray.300");
  const iconBase = useColorModeValue("gray.600", "gray.200");
  const border   = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const hoverBg  = useColorModeValue("blackAlpha.50", "whiteAlpha.100");

  return (
    <Box
      as="footer"
      position="fixed"     // ← doim pastda turadi
      left={0}
      right={0}
      bottom={0}
      zIndex={1000}
      bg={bg}
      borderTop="1px solid"
      borderColor={border}
      // iOS safe-area uchun
      pb="env(safe-area-inset-bottom)"
      // ixtiyoriy: yengil shisha effekt
      // backdropFilter="saturate(120%) blur(8px)"
    >
      <Container maxW="7xl" px={{ base: 4, md: 6 }} >
        <Flex
          h={'64px'}
          align="center"
          justify="space-between"
          gap={4}
          flexWrap="wrap"
        >
          <Text fontSize="sm" color={text}>
            {year} © {brand}. Biz bilan boshlang.
          </Text>

          <HStack spacing={3}>
            {SOCIALS.map((s) => (
              <IconButton
                key={s.id}
                as="a"
                href={s.href}
                aria-label={s.label}
                icon={<s.icon />}
                variant="ghost"
                borderRadius="full"
                minW="40px"
                h="40px"
                color={iconBase}
                _hover={{ bg: hoverBg, color: s.brand ?? iconBase }}
              />
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
