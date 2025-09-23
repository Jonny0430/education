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
  FiBook, FiBriefcase, FiHeadphones, FiActivity,
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
  path: string;
};



const CATEGORIES: Category[] = [
  { id: "hangul",        title: "한글 기초 (Korean Basics)", subtitle: "자모·받침·쓰기",           count: "48강",    icon: FiBook,              accent: "blue.400", path: '/soulte'},
  { id: "beginner",      title: "초급 과정 (Beginner)",      subtitle: "생존 회화·기본 문형",       count: "72강",    icon: MdRocketLaunch,     accent: "red.400", path: '/grammar' },
  { id: "grammar",       title: "문법 완성 (Grammar)",        subtitle: "초·중·고급 문형 총정리",     count: "120강",   icon: TbPencil,           accent: "teal.400",path: '/lugat'},
  { id: "vocabulary",    title: "어휘·토픽 빈출 (Vocabulary)", subtitle: "주제별·유의어·한자어",      count: "3,000단어", icon: MdOutlineTranslate, accent: "purple.400", path: '/translate'},
  { id: "listening",     title: "듣기 훈련 (Listening)",       subtitle: "쉐도잉·딕테이션",           count: "90세트",   icon: FiHeadphones,       accent: "cyan.400", path: '/lysine' },
  { id: "speaking",      title: "말하기·회화 (Speaking)",      subtitle: "패턴·롤플레이",             count: "85세트",   icon: FiActivity,         accent: "orange.400", path: '/lysine' },
  { id: "reading",       title: "읽기 이해 (Reading)",         subtitle: "문해력·속독",               count: "70지문",   icon: FiBook,             accent: "yellow.400", path: '/soulte' },
  { id: "writing",       title: "쓰기 (Writing)",             subtitle: "문장·이메일·에세이",         count: "60과제",   icon: MdOutlineBrush,     accent: "pink.300", path: '/dictant'   },
  { id: "pronunciation", title: "발음·억양 (Pronunciation)",   subtitle: "연음·받침·억양",             count: "50강",    icon: GiHealthPotion,     accent: "green.300", path: '/grammar'  },
  { id: "business",      title: "비즈니스 한국어",             subtitle: "회의·보고·이메일",           count: "40세트",   icon: FiBriefcase,        accent: "green.400", path: '/lugat'  },
  { id: "travel",        title: "여행 한국어",                 subtitle: "공항·식당·길묻기",           count: "35세트",   icon: MdRocketLaunch,     accent: "pink.400", path: '/news'   },
  { id: "topik",         title: "TOPIK 실전",                 subtitle: "모의고사·풀이·채점",         count: "30회",     icon: FiActivity,         accent: "blue.300", path: '/tests'   },
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
  const RouterNavLink = chakra(NavLink);


  return (
    <Box py={{ base: 8, md: 12 }} bg={pageBg} fontFamily="inter">
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <SimpleGrid minChildWidth="260px" spacing={{ base: 4, md: 6 }} justifyItems="center">
          {CATEGORIES.map((c) => (
            <RouterNavLink
              key={c.id}
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              to={c.path ?? `/category/${c.id}`}  // use c.path if you added it, fallback to /category/:id
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
            href="/tests"
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