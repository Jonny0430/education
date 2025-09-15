"use client";

import { useCallback } from "react";
import type { JSX } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Button,
  chakra,
  Container, // ✅ qo'shildi
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import useEmblaCarousel from "embla-carousel-react";

type Person = {
  id: string;
  name: string;
  role: string;
  rating: number;
  students: string;
  avatar: string;
};

const PEOPLE: Person[] = [
  { id: "p1", name: "Devon Lane", role: "Senior Developer", rating: 4.6, students: "854 students",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop" },
  { id: "p2", name: "Darrell Steward", role: "Digital Product Designer", rating: 4.9, students: "451,444 students",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop" },
  { id: "p3", name: "Jane Cooper", role: "UI/UX Designer", rating: 4.8, students: "435,671 students",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop" },
  { id: "p4", name: "Albert Flores", role: "Adobe Instructor", rating: 4.7, students: "511,123 students",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop" },
  { id: "p5", name: "Kathryn Murphy", role: "Lead Developer", rating: 4.2, students: "2,711 students",
    avatar: "https://images.unsplash.com/photo-1504826260979-242151ee45b7?q=80&w=1200&auto=format&fit=crop" },
    { id: "p6", name: "Kathryn Murphy", role: "Lead Developer", rating: 4.2, students: "2,711 students",
    avatar: "https://images.unsplash.com/photo-1504826260979-242151ee45b7?q=80&w=1200&auto=format&fit=crop" },
    { id: "p7", name: "Kathryn Murphy", role: "Lead Developer", rating: 4.2, students: "2,711 students",
    avatar: "https://images.unsplash.com/photo-1504826260979-242151ee45b7?q=80&w=1200&auto=format&fit=crop" },
     { id: "p8", name: "Kathryn Murphy", role: "Lead Developer", rating: 4.2, students: "2,711 students",
    avatar: "https://images.unsplash.com/photo-1504826260979-242151ee45b7?q=80&w=1200&auto=format&fit=crop" },
     { id: "p9", name: "Kathryn Murphy", role: "Lead Developer", rating: 4.2, students: "2,711 students",
    avatar: "https://images.unsplash.com/photo-1504826260979-242151ee45b7?q=80&w=1200&auto=format&fit=crop" },
];

function UserCard({ person }: { person: Person }) {
  const cardBg  = useColorModeValue("white", "gray.800");
  const border  = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const nameCl  = useColorModeValue("gray.900", "gray.100");
  const roleCl  = useColorModeValue("gray.600", "gray.300");
  const shadow  = useColorModeValue("0 6px 18px rgba(0,0,0,.08)", "0 8px 24px rgba(0,0,0,.35)");
  const overlay = useColorModeValue(
    "linear(to-t, rgba(0,0,0,0.15), rgba(0,0,0,0.05), transparent)",
    "linear(to-t, rgba(0,0,0,0.45), rgba(0,0,0,0.15), transparent)"
  );
  const metaCl  = useColorModeValue("gray.700", "gray.300");

  return (
    <Box
     fontFamily={'inter'}
      overflow="hidden"
      bg={cardBg}
      border="1px solid"
      borderColor={border}
      borderRadius="2xl"
      boxShadow={shadow}
      _hover={{ transform: "translateY(-4px)" }}
      transition="transform .18s ease, box-shadow .18s ease"
    >
      <Box position="relative" h="180px" overflow="hidden">
        <Image src={person.avatar} alt={person.name} w="100%" h="100%" objectFit="cover" />
        <Box position="absolute" inset={0} bgGradient={overlay} />
      </Box>

      <VStack align="start" spacing={1} p={4}>
        <Text fontWeight="bold" color={nameCl} noOfLines={1}>{person.name}</Text>
        <Text fontSize="sm" color={roleCl} noOfLines={1}>{person.role}</Text>
        <HStack spacing={2} pt={1} color={metaCl}>
          <HStack spacing={1}>
            <Icon as={AiFillStar} color="yellow.400" />
            <Text fontSize="sm">{person.rating.toFixed(1)}</Text>
          </HStack>
          <Text fontSize="sm">· {person.students}</Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default function TopUsersCarousel(): JSX.Element {
  // const shellBorder = useColorModeValue("purple.500", "purple.500");
  const titleCl     = useColorModeValue("gray.900", "white");
  const btnHoverBg  = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const btnColor    = useColorModeValue("gray.800", "white");
  const subCl       = useColorModeValue("gray.700", "gray.300");
  const linkCl      = useColorModeValue("blue.700", "blue.300");

  const [viewportRef, embla] = useEmblaCarousel({ align: "start", loop: false, dragFree: true });
  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <Box  fontFamily={'inter'}  px={{ base: 3, md: 6 }} py={{ base: 6, md: 8 }}
        >
      {/* ✅ Container ichiga oldik va markazga joylashtirdik */}
      <Container maxW="7xl" px={{ base: 0, md: 2 }}>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="extrabold"
          textAlign="center"
          color={titleCl}
          mb={{ base: 4, md: 6 }}
        >
          Top User of the month
        </Text>

        <Flex align="center" gap={3} justify="center">
          <Button
            onClick={scrollPrev}
            variant="ghost"
            aria-label="Prev"
            minW="unset"
            w="40px"
            h="40px"
            borderRadius="full"
            _hover={{ bg: btnHoverBg }}
            color={btnColor}
          >
            <Icon as={IoChevronBack} boxSize={6} />
          </Button>

          <Box ref={viewportRef} overflow="hidden" flex="1" maxW="100%">
            {/* Embla track */}
            <Flex willChange="transform">
              {PEOPLE.map((p) => (
                <Box
                  key={p.id}
                  flex={{ base: "0 0 80%", sm: "0 0 50%", md: "0 0 33.33%", lg: "0 0 20%" }}
                  pr={{ base: 3, md: 4 }}
                >
                  <UserCard person={p} />
                </Box>
              ))}
            </Flex>
          </Box>

          <Button
            onClick={scrollNext}
            variant="ghost"
            aria-label="Next"
            minW="unset"
            w="40px"
            h="40px"
            borderRadius="full"
            _hover={{ bg: btnHoverBg }}
            color={btnColor}
          >
            <Icon as={IoChevronForward} boxSize={6} />
          </Button>
        </Flex>

        <Text mt={{ base: 5, md: 6 }} textAlign="center" color={subCl} fontSize={{ base: "sm", md: "md" }}>
          Thousands of students waiting for an instructor. Start teaching & earning now.&nbsp;
          <chakra.a href="#" color={linkCl} fontWeight="bold" _hover={{ textDecoration: "underline" }}>
            Become Instructor →
          </chakra.a>
        </Text>
      </Container>
    </Box>
  );
}
