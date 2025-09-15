"use client";

import type { JSX } from "react";
import type React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Icon,
  useColorModeValue,
  chakra,
  Container,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  FiBook, FiBriefcase, FiCode, FiHeadphones, FiActivity,
} from "react-icons/fi";
import { MdRocketLaunch, MdOutlineTranslate, MdOutlineBrush } from "react-icons/md";
import { GiHealthPotion } from "react-icons/gi";
import { TbPencil } from "react-icons/tb";

type Category = {
  id: string;
  title: string;
  subtitle: string;
  count: string;
  icon: React.ElementType;
  accent: string;
};

const RouterNavLink = chakra(NavLink);


const CATEGORIES: Category[] = [
  { id: "hangul",     title: "한글 기초 (Hangul Basics)", subtitle: "자모 학습/쓰기 교본", count: "63,476권", icon: FiBook,              accent: "blue.400"  },
  { id: "business",   title: "비즈니스 한국어",            subtitle: "회화/이메일/회의 표현", count: "52,822권", icon: FiBriefcase,         accent: "green.400" },
  { id: "grammar",    title: "문법 (Grammar)",             subtitle: "초·중·고급 문법서",     count: "33,841권", icon: TbPencil,           accent: "teal.400"  },
  { id: "it",         title: "IT 한국어",                  subtitle: "개발/디자인 용어",       count: "22,649권", icon: FiCode,             accent: "pink.400"  },
  { id: "personal",   title: "자기계발 (Personal Dev.)",   subtitle: "습관/학습전략",         count: "20,126권", icon: MdRocketLaunch,     accent: "red.400"   },
  { id: "vocabulary", title: "어휘 (Vocabulary)",          subtitle: "토픽 빈출 단어",         count: "13,932권", icon: MdOutlineTranslate, accent: "purple.400" },
  { id: "marketing",  title: "마케팅 한국어",               subtitle: "광고/콘텐츠 표현",       count: "12,086권", icon: FiBriefcase,         accent: "orange.400"},
  { id: "listening",  title: "듣기·말하기",                 subtitle: "회화/발음 훈련",         count: "6,186권",  icon: FiHeadphones,       accent: "cyan.400"  },
  { id: "lifestyle",  title: "라이프스타일",               subtitle: "여행/요리/일상 회화",    count: "2,736권",  icon: FiBook,             accent: "yellow.400"},
  { id: "design",     title: "디자인 한국어",               subtitle: "UI/UX 용어",            count: "2,690권",  icon: MdOutlineBrush,     accent: "pink.300"  },
  { id: "health",     title: "건강 · 피트니스",             subtitle: "운동/식단 한국어",       count: "1,678권",  icon: GiHealthPotion,     accent: "green.300" },
  { id: "topik",      title: "TOPIK 준비",                 subtitle: "모의고사/학설",          count: "959권",    icon: FiActivity,         accent: "blue.300"  },
];

// ——— Card ———
const CategoryCard: React.FC<{ data: Category }> = ({ data }) => {
  const surface = useColorModeValue("whiteAlpha.800", "whiteAlpha.100");
  const border  = useColorModeValue("whiteAlpha.700", "whiteAlpha.200");
  const textPri = useColorModeValue("gray.900", "gray.100");
  const textSec = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      w="full"
      maxW="320px"
      mx="auto"
      position="relative"
      borderRadius="xl"
      fontFamily={'inter'}
      p={5}
      bg={surface}
      backdropFilter="auto"
      backdropBlur="8px"
      boxShadow="0 10px 25px rgba(0,0,0,0.25)"
      transition="transform .18s ease, box-shadow .18s ease"
      _hover={{ transform: "translateY(-4px)", boxShadow: "0 16px 36px rgba(0,0,0,0.35)" }}
      sx={{
        "&::before": {
          content: '""', position: "absolute", inset: 0, p: "1px", borderRadius: "inherit",
          background:
            "linear-gradient(120deg, rgba(255,255,255,.25), rgba(255,255,255,0) 30%), radial-gradient(1200px 200px at -20% -50%, rgba(59,130,246,.35), rgba(236,72,153,.0))",
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor", maskComposite: "exclude",
        },
        "&:hover::after": {
          opacity: 1,
        },
        "&::after": {
          content: '""', position: "absolute", inset: -4, borderRadius: "inherit",
          background: "radial-gradient(200px 60px at 10% -10%, rgba(255,255,255,.07), transparent)",
          filter: "blur(12px)", opacity: 0, transition: "opacity .18s ease", zIndex: -1,
        },
      }}
      border="1px solid"
      borderColor={border}
      h="full"
    >
      <Flex align="center" gap={4}>
        <Flex
          w={12} h={12} align="center" justify="center" borderRadius="lg"
          bgGradient={`linear(to-br, ${data.accent}, whiteAlpha.300)`}
          boxShadow="inset 0 0 0 1px rgba(255,255,255,0.25), 0 8px 16px rgba(0,0,0,0.25)"
        >
          <Icon as={data.icon} color="white" boxSize={6} />
        </Flex>

        <Box>
          <Text fontWeight="bold" color={textPri} noOfLines={1}>{data.title}</Text>
          <Text fontSize="sm" color={textSec} noOfLines={1}>
            {data.count} · {data.subtitle}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

// ——— Grid ———
export default function CategoryGrid(): JSX.Element {
  const pageBg = useColorModeValue(
    "linear-gradient(180deg, #f7fafc 0%, #edf2f7 60%, #e9efff 100%)",
    "radial-gradient(1200px 400px at 20% -10%, rgba(59,130,246,.15), transparent), radial-gradient(800px 300px at 80% -20%, rgba(236,72,153,.16), transparent), linear-gradient(180deg, #0B1220 0%, #0A0F1A 60%, #0A0E18 100%)"
  );

  return (
    <Box py={{ base: 8, md: 12 }} bg={pageBg}  fontFamily={'inter'}>
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <SimpleGrid
          minChildWidth="260px"
          spacing={{ base: 4, md: 6 }}
          justifyItems="center"
        >
          {CATEGORIES.map((c) => (
            <RouterNavLink
              key={c.id}
              to={`/category/${c.id}`}
              w="full"
              maxW="320px"
              _hover={{ textDecoration: "none" }}
              display="block"
            >
              <CategoryCard data={c} />
            </RouterNavLink>
          ))}
        </SimpleGrid>
        <Flex justify="center" mt={6}>
          <chakra.a
            href="#"
            fontWeight="medium"
            color={useColorModeValue("blue.600", "blue.300")}
            _hover={{ textDecoration: "underline" }}
          >
            더 많은 카테고리와 세부 주제가 있어요. Browse All →
          </chakra.a>
        </Flex>
      </Container>
    </Box>
  );
}
