// src/components/KoreaCardsGrid.tsx
"use client";
import type { FC } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Text,
  Image,
  AspectRatio,
  useColorModeValue,
  Link as ChakraLink,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

export type NewsCard = {
  id: string;
  title: string;
  datetime: string; // ISO
  image: string;
  href?: string;
  /** sarlavhani ko'k (link-styled) qilish */
  emphasize?: boolean;
};

const ITEMS: NewsCard[] = [
  {
    id: "n1",
    title:
      "Seul marafonida yangi rekord: xalqaro ishtirokchilar soni 40 mingdan oshdi",
    datetime: "2025-09-15T22:03:00",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "n2",
    title:
      "K-League: «Ulsan» g‘alabani qo‘ldan boy bermadi, «Pohang» esa so‘nggi daqiqalarda tenglashtirdi",
    datetime: "2025-09-15T12:30:00",
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1200&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "n3",
    title:
      "Koreya basketbol terma jamoasi Osiyo chempionatida yarim finalga chiqdi",
    datetime: "2025-09-15T11:40:00",
    image:
      "https://images.unsplash.com/photo-1518066000714-58c45f1a2fff?q=80&w=1200&auto=format&fit=crop",
    href: "#",
    emphasize: true,
  },
  {
    id: "n4",
    title:
      "Taekwondo Gran-pri: koreyalik sportchilar umumiy hisobda yetakchilikni saqlab qoldi",
    datetime: "2025-09-15T01:09:00",
    image:
      "https://images.unsplash.com/photo-1602080858428-57174f9431e2?q=80&w=1200&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "n5",
    title:
      "Dzyudo: Seuldagi yoshlar turnirida mezbonlar 5 oltin medal qo‘lga kiritdi",
    datetime: "2025-09-14T23:41:00",
    image:
      "https://images.unsplash.com/photo-1544918527-0f575c8a6c46?q=80&w=1200&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "n6",
    title:
      "Boks bo‘yicha Jahon kubogi: koreyalik bokschilar final bosqichiga yo‘l oldi",
    datetime: "2025-09-14T19:39:00",
    image:
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop",
    href: "#",
  },
];

function formatMeta(iso: string) {
  const d = new Date(iso);
  const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const date = d.toLocaleDateString();
  return `${time} / ${date}`;
}

const Card: FC<{ item: NewsCard }> = ({ item }) => {
  const meta = formatMeta(item.datetime);
  const titleClr = useColorModeValue("gray.900", "gray.100");
  const linkClr = useColorModeValue("blue.700", "blue.300");
  const metaClr = useColorModeValue("gray.500", "gray.400");
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const surface = useColorModeValue("white", "gray.800");

  return (
    <LinkBox
      as={VStack}
      align="stretch"
      spacing={2}
      bg={surface}
      border="1px solid"
      borderColor={border}
      rounded="xl"
      p={2}
      _hover={{ shadow: "md" }}
      transition="box-shadow .15s ease"
    >
      <AspectRatio ratio={16 / 9} rounded="lg" overflow="hidden">
        <Image src={item.image} alt={item.title} objectFit="cover" />
      </AspectRatio>

      <Text fontSize="xs" color={metaClr} px={1}>
        {meta}
      </Text>

      <LinkOverlay as={ChakraLink} href={item.href ?? "#"} _hover={{ textDecoration: "none" }}>
        <Text
          px={1}
          fontWeight="extrabold"
          lineHeight="1.25"
          color={item.emphasize ? linkClr : titleClr}
        >
          {item.title}
        </Text>
      </LinkOverlay>
    </LinkBox>
  );
};

const KoreaCardsGrid: FC<{ items?: NewsCard[] }> = ({ items = ITEMS }) => {
  return (
    <Box>
      <Container maxW="7xl" py={{ base: 4, md: 6 }}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: 4, md: 6 }}
        >
          {items.map((it) => (
            <Card key={it.id} item={it} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default KoreaCardsGrid;
