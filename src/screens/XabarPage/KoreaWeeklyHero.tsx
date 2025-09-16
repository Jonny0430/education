// src/components/KoreaWeeklyHero.tsx
"use client";
import type { FC } from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
  useColorModeValue,
  AspectRatio,
  Image,
  HStack,
  Badge,
} from "@chakra-ui/react";

export type HeroArticle = {
  title: string;
  excerpt: string;
  image: string;
  href?: string;
  tag?: string;
  date?: string;
};

const DEFAULT_ARTICLE: HeroArticle = {
  title:
    "Koreya yarimoroli: texnologiyalar, K-madaniyat va tarixiy meros – haftalik dayjest",
  excerpt:
    "Janubiy Koreya bugun yarimo‘tkazgichlar, 5G/6G hamda elektromobil batareyalari bo‘yicha yetakchilardan biridir. K-pop va K-dramalarning global ommalashuvi bilan birga, Hangul yozuvi va koreys tili o‘rganishga bo‘lgan qiziqish ham oshmoqda. Shu bilan birga, qadimiy Silla hamda Joseon sulolalari davridan qolgan me’moriy yodgorliklar zamonaviy Seul manzarasi bilan uyg‘unlashgan.",
  image:
    "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1400&auto=format&fit=crop",
  href: "#",
  tag: "Koreya",
  date: "2025-09-14",
};

const KoreaWeeklyHero: FC<{ article?: HeroArticle }> = ({ article = DEFAULT_ARTICLE }) => {
  const titleColor = useColorModeValue("blue.700", "blue.300");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const panelBg = useColorModeValue("gray.50", "gray.800");
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const btnBg = useColorModeValue("blue.600", "blue.400");
  const btnHover = useColorModeValue("blue.700", "blue.500");
  const tagScheme = useColorModeValue("blue", "purple");

  return (
    <Box bg={panelBg} borderTop="1px solid" borderColor={border}>
      <Container maxW="7xl" py={{ base: 6, md: 10 }}>
        <Grid
          templateColumns={{ base: "1fr", md: "1.1fr 0.9fr" }}
          gap={{ base: 6, md: 8 }}
          alignItems="center"
        >
          {/* Chap tomonda – matn */}
          <GridItem>
            <HStack spacing={3} mb={3}>
              {article.tag && (
                <Badge colorScheme={tagScheme} variant="subtle">
                  {article.tag}
                </Badge>
              )}
              {article.date && (
                <Text fontSize="sm" color="gray.500">
                  {new Date(article.date).toLocaleDateString()}
                </Text>
              )}
            </HStack>

            <Heading
              as="h1"
              color={titleColor}
              lineHeight="1.15"
              fontWeight="extrabold"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              mb={3}
            >
              {article.title}
            </Heading>

            <Text
              color={textColor}
              fontSize={{ base: "md", md: "lg" }}
              noOfLines={{ base: 5, md: 7 }}
              mb={6}
            >
              {article.excerpt}
            </Text>

            <HStack spacing={4}>
              <Button
                as={ChakraLink}
                href={article.href ?? "#"}
                bg={btnBg}
                _hover={{ bg: btnHover }}
                color="white"
                rounded="lg"
                px={6}
              >
                Batafsil o‘qish
              </Button>
              <Button
                as={ChakraLink}
                href="#korea-topics"
                variant="outline"
                rounded="lg"
              >
                Barcha mavzular
              </Button>
            </HStack>
          </GridItem>

          {/* O‘ng tomonda – rasm */}
          <GridItem>
            <AspectRatio ratio={16 / 9}>
              <Box
                overflow="hidden"
                borderRadius="xl"
                border="1px solid"
                borderColor={border}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>
            </AspectRatio>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default KoreaWeeklyHero;
