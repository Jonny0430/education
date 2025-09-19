/* eslint-disable @typescript-eslint/restrict-template-expressions */
// components/CourseMetaNeo.tsx
"use client";
import type { JSX } from "react";
import {
  Box, Container, Stack, Heading, Text, HStack, VStack, Avatar, Tag, Badge,
  useColorModeValue, Progress, SimpleGrid, CircularProgress,
  CircularProgressLabel, Icon, Tooltip
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { FiAward, FiUsers, FiFilm } from "react-icons/fi";

type Instructor = {
  name: string;
  title: string;
  meta: { rating: number; students: number; courses: number };
  bio: string;
  avatar: string;
};

type RatingRow = { stars: 1|2|3|4|5; percent: number };

const formatNum = (n: number) =>
  n >= 1000 ? `${(n/1000).toFixed(n%1000===0?0:1)}K` : String(n);

function GlassCard(props: React.ComponentProps<typeof Box>) {
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const bg = useColorModeValue("whiteAlpha.700", "blackAlpha.400");
  return (
    <Box
      border="1px solid" borderColor={border} bg={bg} backdropFilter="blur(10px)"
      borderRadius="2xl" boxShadow="0 16px 40px rgba(0,0,0,.25)" {...props}
    />
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  const grad = useColorModeValue(
    "linear(to-r, teal.500, blue.500)",
    "linear(to-r, teal.300, blue.300)"
  );
  return (
    <HStack mb={4}>
      <Box w="10px" h="10px" borderRadius="full" bgGradient={grad} />
      <Heading size="lg">{children}</Heading>
    </HStack>
  );
}

function InstructorTile({ i }: { i: Instructor }) {
  const sub = useColorModeValue("gray.600", "gray.300");
  return (
    <GlassCard p={5}>
      <HStack align="start" spacing={4}>
        <Avatar name={i.name} src={i.avatar} size="xl" />
        <VStack align="start" spacing={1} w="full">
          <HStack spacing={3} align="center">
            <Heading size="md">{i.name}</Heading>
            <Tag colorScheme="green" borderRadius="full">Verified</Tag>
          </HStack>
          <Text fontWeight="semibold">{i.title}</Text>

          <HStack spacing={4} color={sub} fontSize="sm" wrap="wrap">
            <HStack><Icon as={AiFillStar} color="yellow.400" /><Text>{i.meta.rating.toFixed(1)}</Text></HStack>
            <HStack><Icon as={FiUsers} /><Text>{formatNum(i.meta.students)} Students</Text></HStack>
            <HStack><Icon as={FiFilm} /><Text>{i.meta.courses} Courses</Text></HStack>
          </HStack>

          <Text mt={2} color={sub}>{i.bio}</Text>
        </VStack>
      </HStack>
    </GlassCard>
  );
}

function Bar({ item }: { item: RatingRow }) {
   
  const label = `${item.stars} Star`;
  return (
    <HStack w="full" spacing={4} align="center" fontFamily={'serif'}>
      <Box minW="84px">
        <HStack>
          <Text fontWeight="semibold">{label}</Text>
          <Icon as={AiFillStar} color="yellow.400" />
        </HStack>
      </Box>
      <Tooltip label={`${item.percent}%`}>
        <Progress value={item.percent} flex="1" h="10px" borderRadius="full" colorScheme="orange" />
      </Tooltip>
      <Text w="52px" textAlign="right" fontWeight="semibold">{item.percent}%</Text>
    </HStack>
  );
}

export default function CourseMetaNeo(): JSX.Element {
  const instructors: Instructor[] = [
    {
      name: "Abdullayev Ibrohimjon",
      title: "Kores tili bo'yicha Ustoz Ishlagani ketmoqchi bo'lganlar uchun Ishchi imtixonlaridan dars o'tadi",
      meta: { rating: 4.8, students: 86, courses: 60 },
      bio: "Koreyada 5yilik tajribaga ega bo'lganlar va sizlar uchun ham tajribasini ulashmoqchi",
      avatar: "https://nevomusic.net/wp-content/uploads/2021/12/Sardor-Safarov.jpg",
    },
    {
      name: "Salimjonov Sardor",
      title: "Kores tilidan Ustoz hozirda Topik 5 darajasi bor",
      meta: { rating: 4.8, students: 70, courses: 11 },
      bio: "Koreyaga bormoqchi bo'lganlar uchun juda malakalik Ustoz",
      avatar: "https://viberate-upload.ams3.cdn.digitaloceanspaces.com/prod/entity/artist/sardor-gafurov-CWrC3",
    },
  ];

  const avg = 4.8;                   // 5 balldan
  const avgPct = (avg / 5) * 100;    // CircularProgress uchun
  const rows: RatingRow[] = [
    { stars: 5, percent: 75 },
    { stars: 4, percent: 21 },
    { stars: 3, percent: 3 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 0.6 as never },
  ];

  const frameBorder = useColorModeValue("blackAlpha.300", "whiteAlpha.300");
  const headerGrad = useColorModeValue(
    "linear(to-r, #111827, #0b1220)",
    "linear(to-r, #0b1220, #111827)"
  );

  return (
    <Container maxW="6xl" py={8} fontFamily={'serif'}>
      {/* Instructors */}
      <GlassCard p={6} mb={8} border="1px solid" borderColor={frameBorder}>
        <HStack justify="space-between" mb={3}>
          <SectionTitle>Bizning Ustozlar({String(instructors.length).padStart(2, "0")})</SectionTitle>
          <Badge bgGradient="linear(to-r, cyan.400, purple.400)" color="white" px={3} py={1} borderRadius="lg">
            <HStack><Icon as={FiAward} /><Text>Malumotlari</Text></HStack>
          </Badge>
        </HStack>
        <Stack spacing={4}>
          {instructors.map((i) => <InstructorTile key={i.name} i={i} />)}
        </Stack>
      </GlassCard>

      {/* Rating */}
      <GlassCard p={0} overflow="hidden" border="1px solid" borderColor={frameBorder}>
        <Box bgGradient={headerGrad} px={6} py={5}>
          <Heading size="lg" color="white">Kurslar Darajasi</Heading>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 5 }} gap={6} p={6} alignItems="center">
          {/* Left: circular avg */}
          <VStack gridColumn={{ base: "1", lg: "span 1" }} spacing={4}>
            <CircularProgress
              value={avgPct}
              color="orange.400"
              size="140px"
              thickness="10px"
              trackColor={useColorModeValue("blackAlpha.200", "whiteAlpha.200")}
            >
              <CircularProgressLabel fontSize="3xl" fontWeight="bold">
                {avg.toFixed(1)}
              </CircularProgressLabel>
            </CircularProgress>
            <HStack color={useColorModeValue("gray.700", "gray.300")}>
              <Icon as={AiFillStar} color="yellow.400" />
              <Text>Kurslar Darajasi</Text>
            </HStack>
          </VStack>

          {/* Right: bars */}
          <Box gridColumn={{ base: "1", lg: "span 4" }}>
            <Stack spacing={4}>
              {rows.map((r) => <Bar key={r.stars} item={r} />)}
            </Stack>
          </Box>
        </SimpleGrid>
      </GlassCard>
    </Container>
  );
}
