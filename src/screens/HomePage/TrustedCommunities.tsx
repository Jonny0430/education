"use client";

import type { JSX } from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  chakra,
  Container,            // ✅ qo'shildi
} from "@chakra-ui/react";
import {
  SiFacebook, SiInstagram, SiYoutube, SiX, SiTiktok, SiLinkedin,
  SiTelegram, SiWhatsapp, SiSnapchat, SiReddit, SiGithub, SiPinterest,
} from "react-icons/si";

type Network = {
  id: string;
  icon: React.ElementType;
  color: string;
  label: string;
};

const NETWORKS: Network[] = [
  { id: "facebook",  icon: SiFacebook,  color: "#1877F2", label: "Facebook" },
  { id: "instagram", icon: SiInstagram, color: "#E1306C", label: "Instagram" },
  { id: "youtube",   icon: SiYoutube,   color: "#FF0000", label: "YouTube" },
  { id: "x",         icon: SiX,         color: "#FFFFFF", label: "X" },
  { id: "tiktok",    icon: SiTiktok,    color: "#69C9D0", label: "TikTok" },
  { id: "linkedin",  icon: SiLinkedin,  color: "#0A66C2", label: "LinkedIn" },
  { id: "telegram",  icon: SiTelegram,  color: "#229ED9", label: "Telegram" },
  { id: "whatsapp",  icon: SiWhatsapp,  color: "#25D366", label: "WhatsApp" },
  { id: "snapchat",  icon: SiSnapchat,  color: "#FFFC00", label: "Snapchat" },
  { id: "reddit",    icon: SiReddit,    color: "#FF4500", label: "Reddit" },
  { id: "github",    icon: SiGithub,    color: "#FFFFFF", label: "GitHub" },
  { id: "pinterest", icon: SiPinterest, color: "#BD081C", label: "Pinterest" },
];

export default function TrustedCommunities(): JSX.Element {
  const panelBg = useColorModeValue("white", "whiteAlpha.100");
  const tileBg  = useColorModeValue("blackAlpha.50", "whiteAlpha.100");
  const tileHv  = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const border  = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const titleCl = useColorModeValue("gray.900", "white");
  const textCl  = useColorModeValue("gray.700", "gray.300");
  const linkCl  = useColorModeValue("blue.700", "blue.300");

  return (
    <Box
     fontFamily={'inter'}
      p={{ base: 4, md: 6 }}
      mt={12}
    >
      {/* ✅ Container bilan markazga oldik */}
      <Container maxW="7xl" mx="auto">
        <Grid
          gap={4}
          templateColumns={{ base: "1fr", md: "1.1fr 1fr 1fr 1fr" }}
          templateRows={{ base: "auto", md: "repeat(3, 1fr)" }}
          alignItems="stretch"
        >
          {/* Chap panel */}
          <GridItem
            rowSpan={{ base: 1, md: 3 }}
            colSpan={{ base: 1, md: 1 }}
            bg={panelBg}
            border="1px solid"
            borderColor={border}
            borderRadius="xl"
            p={{ base: 4, md: 6 }}
            boxShadow={useColorModeValue(
              "0 10px 24px rgba(0,0,0,.08)",
              "0 10px 30px rgba(0,0,0,.35)"
            )}
          >
            <VStack align="start" spacing={3}>
              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="extrabold" color={titleCl}>
                6.3k trusted communities
              </Text>
              <Text fontSize="sm" color={textCl} lineHeight={1.7}>
                Bizning platformamizga minglab ijtimoiy hamjamiyatlar ishonch bildirgan.
                Quyida eng mashhur tarmoqlardan ayrimlarini ko‘rasiz.
              </Text>
            </VStack>
          </GridItem>

          {/* Brand tile’lar */}
          {NETWORKS.map((n) => (
            <GridItem key={n.id}>
              <HStack
                as="button"
                w="100%"
                h="72px"
                justify="center"
                align="center"
                bg={tileBg}
                border="1px solid"
                borderColor={border}
                borderRadius="xl"
                _hover={{ bg: tileHv, transform: "translateY(-2px)" }}
                transition="all .18s ease"
                aria-label={n.label}
              >
                <Icon as={n.icon} boxSize={6} color={n.color} />
              </HStack>
            </GridItem>
          ))}

          {/* Pastki o‘ng matn */}
          <GridItem
            colStart={{ md: 2 }}
            colEnd={{ md: 5 }}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            pt={2}
          >
            <Text fontSize="sm" color={textCl}>
              More networks coming soon.&nbsp;
              <chakra.a href="#" color={linkCl} fontWeight="bold" _hover={{ textDecoration: "underline" }}>
                See all →
              </chakra.a>
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
