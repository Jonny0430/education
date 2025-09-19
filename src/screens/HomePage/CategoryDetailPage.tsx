// pages/CourseDetailPage.tsx
"use client";
import {
  Box, Container, Heading, Text, HStack, Badge, Image, VStack,
  useColorModeValue, AspectRatio, Icon, Button, Stack, Divider,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { useLocation, useParams, Link as RouterLink, Link } from "react-router-dom";
import { getCourseById, type Course } from "../../libs/courses";
import CourseMetaNeo from "./CourseMetaPanels";
import StudentsFeedback from "./StudentsFeedback";

type LocationState = { course?: Course };

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation() as { state?: LocationState };
  

  // 1) avval location.state’dan olamiz (tezroq)
  // 2) bo‘lmasa, id bo‘yicha global ro‘yxatdan topamiz (refresh/back direct uchun)
  const course = state?.course ?? getCourseById(id);

  const panel = useColorModeValue("white", "whiteAlpha.100");
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const meta = useColorModeValue("gray.600", "gray.300");

  if (!course) {
    return (
      <Container maxW="6xl" py={10} fontFamily={'inter'}>
        <Heading size="md" mb={4}>Kurs topilmadi</Heading>
        <Text color={meta} mb={6}>
          So‘ralgan kurs ID: <b>{id}</b>. Balki ro‘yxat yangilangan bo‘lishi mumkin.
        </Text>
        <Button as={RouterLink} to="/courses" colorScheme="blue">Kurslar sahifasiga qaytish</Button>
      </Container>
    );
  }

  return (
    <Container maxW="6xl" py={8} fontFamily={'"inter'}>
      <Stack direction={{ base: "column", md: "row" }} spacing={6}>
        <Box flex="1" bg={panel} border="1px solid" borderColor={border} borderRadius="2xl" overflow="hidden">
          <AspectRatio ratio={16/9}>
            <Image src={course.image} alt={course.title} objectFit="cover" />
          </AspectRatio>
        </Box>

        <VStack flex="1" align="start" spacing={4}>
          <Badge colorScheme="orange">{course.category}</Badge>
          <Heading size="lg" lineHeight="1.2">{course.title}</Heading>

          <HStack spacing={4} color={meta}>
            <HStack spacing={1}><Icon as={AiFillStar} /><Text>{course.rating.toFixed(1)}</Text></HStack>
            <Text>• {course.students}</Text>
          </HStack>

          <Divider />

          <HStack spacing={4}>
            <Heading size="md">{course.price}</Heading>
            <Link to={'/soulte'}>
            <Button colorScheme="orange">Ko'rishni bo'shlash</Button>
            </Link>
            <Button variant="outline" as={RouterLink} to="/checkout" state={{ courseId: course.id }}>
              Bosh saxifaga o'tish
            </Button>
          </HStack>

          <Text color={meta}>
            ID: <b>{course.id}</b> • Bu sahifa <i>Dars bo'limi</i> ({id}) va orqali ma’lumot oldi.
          </Text>
        </VStack>
      </Stack>

      <Box mt={10} p={6} bg={panel} border="1px solid" borderColor={border} borderRadius="xl">
        <Heading size="md" mb={3}>Kurs tavsifi</Heading>
        <CourseMetaNeo />
        <StudentsFeedback />
        <Text color={meta}>
          Bu yerda real tavsif, syllabus, mualliflar, darslar ro‘yxati va h.k. bo‘ladi. Hozircha demo.
        </Text>
      </Box>
    </Container>
  );
}
