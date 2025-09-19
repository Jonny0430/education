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
  { id: "p1", name: "Davron", role: "Kores tilidan", rating: 4.6, students: "12 students",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop" },
  { id: "p2", name: "Alisher", role: "Ingilis tilidan", rating: 4.9, students: "45 students",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop" },
  { id: "p3", name: "Johon", role: "Matematika", rating: 4.8, students: "43 students",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop" },
  { id: "p4", name: "Abdulaziz", role: "Ingilis Tili", rating: 4.7, students: "51,students",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop" },
  { id: "p5", name: "Asadbek", role: "Kores tili", rating: 4.2, students: "43 students",
    avatar: "data:image/jpeg;base64,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" },
    { id: "p6", name: "A'zamjon", role: "Kores tili", rating: 4.2, students: "12 students",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0amZ6JYcXM__iA-qeenidfFtXyfeIPaZMw&s" },
    { id: "p7", name: "Muhammad", role: "Kores tili", rating: 4.2, students: "23 students",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-n3DOhhJI9XoAQbRzsNA_LifkUisdbVYsw&s" },
     { id: "p8", name: "Aziza", role: "Ona Tilidan", rating: 4.2, students: "22 students",
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
          Eng yaxshi O'quvchilar
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
          Minglab talabalar o'qituvchi kutishmoqda. Hoziroq o‘rgatish va pul ishlashni boshlang.&nbsp;
          <chakra.a href="#" color={linkCl} fontWeight="bold" _hover={{ textDecoration: "underline" }}>
            O'qituvchi bo'l →
          </chakra.a>
        </Text>
      </Container>
    </Box>
  );
}
