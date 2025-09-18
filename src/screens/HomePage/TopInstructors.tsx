"use client";

import type { JSX } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Avatar,
  Icon,
  Tag,
  TagLabel,
  Button,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

type Instructor = {
  id: string;
  name: string;
  role: string;
  rating: number;
  students: string;
  avatar: string;
  tags: string[];
  rank: 1 | 2 | 3 | 4;
};

const INSTRUCTORS: Instructor[] = [
  {
    id: "i1",
    name: "Devon Lane",
    role: "Senior Developer",
    rating: 4.8,
    students: "854 students",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Node", "System Design"],
    rank: 1,
  },
  {
    id: "i2",
    name: "Darrell Steward",
    role: "Digital Product Designer",
    rating: 4.9,
    students: "451,444 students",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    tags: ["Figma", "UX", "Design System"],
    rank: 2,
  },
  {
    id: "i3",
    name: "Jane Cooper",
    role: "UI/UX Designer",
    rating: 4.8,
    students: "435,671 students",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    tags: ["UI", "Animation", "Accessibility"],
    rank: 3,
  },
  {
    id: "i4",
    name: "Albert Flores",
    role: "Adobe Instructor",
    rating: 4.7,
    students: "511,123 students",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop",
    tags: ["Photoshop", "Illustrator"],
    rank: 4,
  },
];

function rankBadgeColor(rank: Instructor["rank"]) {
  switch (rank) {
    case 1:
      return { bg: "orange.400", label: "#1" };
    case 2:
      return { bg: "blue.400", label: "#2" };
    case 3:
      return { bg: "green.400", label: "#3" };
    default:
      return { bg: "purple.400", label: "#4" };
  }
}

function InstructorCard({ data }: { data: Instructor }) {
  const rank = rankBadgeColor(data.rank);

  // Light/Dark mos ranglar
  const surface = useColorModeValue("white", "#0E1624");
  const borderColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const nameColor = useColorModeValue("gray.900", "white");
  const roleColor = useColorModeValue("gray.600", "whiteAlpha.800");
  const tagBg = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const tagBorder = useColorModeValue("blackAlpha.200", "whiteAlpha.300");
  const tagColor = useColorModeValue("gray.800", "white");
  const cardShadow = useColorModeValue("0 8px 20px rgba(0,0,0,.08)", "0 12px 28px rgba(0,0,0,.55)");
  const ringBeforeLight =
    "radial-gradient(800px 220px at -10% -20%, rgba(59,130,246,.12), rgba(236,72,153,0)), linear-gradient(120deg, rgba(0,0,0,.04), rgba(0,0,0,0) 30%)";
  const ringBeforeDark =
    "radial-gradient(800px 220px at -10% -20%, rgba(59,130,246,.28), rgba(236,72,153,0)), linear-gradient(120deg, rgba(255,255,255,.08), rgba(255,255,255,0) 30%)";
  const ringBefore = useColorModeValue(ringBeforeLight, ringBeforeDark);

  return (
    <Box
     fontFamily={'inter'}
      role="group"
      position="relative"
      bg={surface}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="2xl"
      p={{ base: 4, md: 5 }}
      boxShadow={cardShadow}
      transition="transform .18s ease, box-shadow .18s ease"
      _hover={{ transform: "translateY(-6px)" }}
      sx={{
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "1px",
          background: ringBefore,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
      }}
    >
      {/* rank badge */}
      <Badge
        position="absolute"
        top="10px"
        right="12px"
        bg={rank.bg}
        color="white"
        fontWeight="bold"
        borderRadius="md"
        px={2.5}
        py={1}
        boxShadow="0 6px 14px rgba(0,0,0,.25)"
        zIndex={1}
      >
        {rank.label}
      </Badge>

      {/* header */}
      <HStack align="center" spacing={4}>
        <Avatar
          name={data.name}
          src={data.avatar}
          boxSize="56px"
          border="2px solid"
          borderColor={useColorModeValue("blackAlpha.200", "whiteAlpha.400")}
        />
        <VStack align="start" spacing={0}>
          <Text color={nameColor} fontWeight="extrabold" lineHeight={1.2}>
            {data.name}
          </Text>
          <Text color={roleColor} fontSize="sm">
            {data.role}
          </Text>
        </VStack>
      </HStack>

      {/* tags */}
      <HStack spacing={2} mt={4} flexWrap="wrap">
        {data.tags.map((t) => (
          <Tag
            key={t}
            size="sm"
            variant="subtle"
            color={tagColor}
            bg={tagBg}
            border="1px solid"
            borderColor={tagBorder}
            borderRadius="md"
          >
            <TagLabel>{t}</TagLabel>
          </Tag>
        ))}
      </HStack>

      {/* footer meta + follow */}
      <HStack mt={4} justify="space-between" align="center">
        <HStack
          px={3}
          py={1.5}
          borderRadius="md"
          bg={useColorModeValue("yellow.300", "yellow.400")}
          color="black"
          spacing={2}
        >
          <Icon as={AiFillStar} />
          <Text fontWeight="bold" fontSize="sm">
            {data.rating.toFixed(1)}
          </Text>
          <Text fontSize="sm" color="blackAlpha.800">
            {data.students}
          </Text>
        </HStack>

        <Button
          size="sm"
          color="white"
          fontWeight="bold"
          borderRadius="md"
          px={5}
          boxShadow={useColorModeValue(
            "0 6px 14px rgba(0,0,0,.16)",
            "0 8px 20px rgba(0,0,0,.45)"
          )}
          bgGradient={useColorModeValue(
            "linear(to-r, #7C3AED, #06B6D4)", // light: violet-600 → cyan-500
            "linear(to-r, #6366F1, #22D3EE)"  // dark: indigo-500 → cyan-400
          )}
          _hover={{ filter: "brightness(1.06)" }}
          _active={{ transform: "translateY(1px)" }}
        >
          Follow
        </Button>
      </HStack>
    </Box>
  );
}

export default function TopInstructors(): JSX.Element {
  const sectionBg = useColorModeValue(
    "linear-gradient(180deg, #F7FAFC 0%, #EEF2FF 100%)", // light
    "linear-gradient(180deg, #0B1220 0%, #0B1220 60%, #0A0F1A 100%)" // dark
  );
  const titleColor = useColorModeValue("gray.900", "white");

  return (
    <Box
     fontFamily={'inter'}
      bg={sectionBg}
      marginTop={-12}
      py={{ base: 8, md: 10 }}
      px={{ base: 4, md: 6 }}
       mt={12}
    >
      <Container maxW="7xl">
        <Text
          textAlign="center"
          color={titleColor}
          fontWeight="extrabold"
          fontSize={{ base: "xl", md: "3xl" }}
          mb={{ base: 4, md: 6 }}
        >
          Eng yaxshi Ustozlar
        </Text>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={4} mt={12}>
          {INSTRUCTORS.map((ins) => (
            <InstructorCard key={ins.id} data={ins} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
