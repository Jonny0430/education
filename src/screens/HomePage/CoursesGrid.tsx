"use client";

import type { JSX } from "react";
import type React from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  HStack,
  VStack,
  Badge,
  Icon,
  useColorModeValue,
  Flex,
  AspectRatio,
  chakra,
  Container, // 👈 qo‘shildi
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const RouterNavLink = chakra(NavLink);

type Course = {
  id: string;
  title: string;
  category: string;
  price: string;
  rating: number;
  students: string;
  image: string;
  categoryColor?: string;
};

const COURSES: Course[] = [
  {
    id: "c1",
    title: "Machine Learning A–Z™: Hands-On Python & R",
    category: "DESIGN",
    price: "$57",
    rating: 5.0,
    students: "205.7K students",
    image:
      "https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1200&auto=format&fit=crop",
    categoryColor: "orange.400",
  },
  {
    id: "c2",
    title: "Machine Learning A–Z™: Hands-On Python & R",
    category: "DESIGN",
    price: "$57",
    rating: 5.0,
    students: "205.7K students",
    image:
      "https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1200&auto=format&fit=crop",
    categoryColor: "orange.400",
  },
  {
    id: "c3",
    title: "Machine Learning A–Z™: Hands-On Python & R",
    category: "DESIGN",
    price: "$57",
    rating: 5.0,
    students: "205.7K students",
    image:
      "https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1200&auto=format&fit=crop",
    categoryColor: "orange.400",
  },
  {
    id: "c4",
    title: "Machine Learning A–Z™: Hands-On Python & R",
    category: "DESIGN",
    price: "$57",
    rating: 5.0,
    students: "205.7K students",
    image:
      "https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1200&auto=format&fit=crop",
    categoryColor: "orange.400",
  },
  {
    id: "c5",
    title: "Machine Learning A–Z™: Hands-On Python & R",
    category: "DESIGN",
    price: "$57",
    rating: 5.0,
    students: "205.7K students",
    image:
      "https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1200&auto=format&fit=crop",
    categoryColor: "orange.400",
  },
  {
    id: "c6",
    title: "Machine Learning A–Z™: Hands-On Python & R",
    category: "DESIGN",
    price: "$57",
    rating: 5.0,
    students: "205.7K students",
    image:
      "https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1200&auto=format&fit=crop",
    categoryColor: "orange.400",
  },
  {
    id: "c7",
    title: "Machine Learning A–Z™: Hands-On Python & R",
    category: "DESIGN",
    price: "$57",
    rating: 5.0,
    students: "205.7K students",
    image:
      "https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1200&auto=format&fit=crop",
    categoryColor: "orange.400",
  },
  // ... qolgan kurslar ...
];

const CourseCard: React.FC<{ data: Course }> = ({ data }) => {
  const cardSurface = useColorModeValue("whiteAlpha.900", "whiteAlpha.100");
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const title = useColorModeValue("gray.900", "gray.100");
  const meta = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
     fontFamily={'inter'}
      role="group"
      position="relative"
      overflow="hidden"
      borderRadius="2xl"
      bg={cardSurface}
      border="1px solid"
      borderColor={border}
      boxShadow="0 10px 25px rgba(0,0,0,.25)"
      transition="transform .18s ease, box-shadow .18s ease"
      _groupHover={{
        transform: "translateY(-6px)",
        boxShadow: "0 18px 36px rgba(0,0,0,.35)",
      }}
    >
      {/* Rasm va overlay */}
      <Box position="relative">
        <AspectRatio ratio={16 / 9}>
          <Image src={data.image} alt={data.title} objectFit="cover" />
        </AspectRatio>

        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-t, rgba(0,0,0,0.45), rgba(0,0,0,0.15), transparent)"
          opacity={0.85}
          pointerEvents="none"
        />

        {/* Kategoriya badge */}
        <Badge
          position="absolute"
          top="12px"
          left="12px"
          px="2.5"
          py="1"
          borderRadius="md"
          bg={data.categoryColor ?? "blue.400"}
          color="white"
          fontSize="xs"
          boxShadow="0 6px 14px rgba(0,0,0,.25)"
        >
          {data.category}
        </Badge>

        {/* Narx ribbon */}
        <Box position="absolute" top="-6px" right="-42px" transform="rotate(45deg)">
          <Box
            bg="red.500"
            color="white"
            px={8}
            py={1.5}
            fontSize="xs"
            fontWeight="bold"
            boxShadow="0 6px 14px rgba(0,0,0,.35)"
          >
            {data.price}
          </Box>
        </Box>
      </Box>

      {/* Text qismi */}
      <VStack align="start" spacing={2} p={4}>
        <Text fontWeight="bold" color={title} noOfLines={2}>
          {data.title}
        </Text>
        <HStack spacing={2} color={meta}>
          <HStack spacing={1}>
            <Icon as={AiFillStar} />
            <Text fontSize="sm">{data.rating.toFixed(1)}</Text>
          </HStack>
          <Text fontSize="sm">• {data.students}</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default function CoursesGridPro(): JSX.Element {
  return (
    <Box py={{ base: 8, md: 10 }} px={{ base: 4, md: 6 }}  fontFamily={'inter'}>
      <Container maxW="7xl"> {/* 👈 gridni container ichiga oldik */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
          {COURSES.map((c) => (
            <RouterNavLink
              key={c.id}
              to={`/courses/${c.id}`}
              _hover={{ textDecoration: "none" }}
              display="block"
              borderRadius="2xl"
              role="group"
            >
              <CourseCard data={c} />
            </RouterNavLink>
          ))}
        </SimpleGrid>

        <Flex justify="center" mt={6}>
          <chakra.a
            href="#"
            color={useColorModeValue("blue.600", "blue.300")}
            fontWeight="semibold"
            _hover={{ textDecoration: "underline" }}
          >
            Browse all courses →
          </chakra.a>
        </Flex>
      </Container>
    </Box>
  );
}
