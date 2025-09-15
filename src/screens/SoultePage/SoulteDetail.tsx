// src/pages/BookDetail.tsx
"use client";

import { useParams } from "react-router";
import { Link } from "react-router";
import {
  Box, Container, Text, HStack, VStack, Badge, Button, Icon,
  useColorModeValue, Tabs, TabList, TabPanels, Tab, TabPanel,
  Progress, Divider, Stack, Flex, Image,
} from "@chakra-ui/react";
import { useLocation } from 'react-router'
import { AiFillStar } from "react-icons/ai";
import { FiPlay, FiPaperclip, FiFileText, FiMusic, FiVideo, FiLink } from "react-icons/fi";
import { BOOKS, type Book, type Attachment } from "../../libs/Books";

type LocState = { book?: Book };

const iconFor = (a: Attachment) => {
  switch (a.kind) {
    case "pdf":   return FiFileText;
    case "zip":   return FiPaperclip;
    case "audio": return FiMusic;
    case "video": return FiVideo;
    case "link":  return FiLink;
    default:      return FiPaperclip;
  }
};

export default function BookDetail() {

  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const bookFromState = (location.state as LocState | undefined)?.book;
  const book = bookFromState ?? BOOKS.find((b) => b.id === id);

  const pageBg = useColorModeValue("#f4faff", "#0b1220");
  const cardBg   = useColorModeValue("#101823", "#0e1726");
  const border   = useColorModeValue("whiteAlpha.200", "whiteAlpha.200");
  const softTxt  = useColorModeValue("whiteAlpha.800", "whiteAlpha.800");
  const titleCol = useColorModeValue("whiteAlpha.900", "whiteAlpha.900");
  const tabBarBg = useColorModeValue("#0f1626", "#0f1626");

  if (!book) {
    return (
      <Container maxW="6xl" py={10}>
        <Text color="red.300">Book not found.</Text>
        <Button as={Link} to="/" mt={4} colorScheme="orange">Back</Button>
      </Container>
    );
  }

  return (
    <Box bg={pageBg} minH="calc(100vh - 64px)" py={6}>
      <Container maxW="7xl">
        <Flex align="center" justify="space-between" mb={4} gap={3}>
          <Button as={Link} to="/" variant="outline" colorScheme="whiteAlpha">
            ← Back
          </Button>
          <Badge rounded="full" px={3} py={1} bg="orange.400" color="black" fontWeight="bold">
            ${book.price}
          </Badge>
        </Flex>

        <Flex gap={6} align="start" flexWrap="wrap">
          {/* Chap: video + info + tabs */}
          <Box flex="1 1 640px" minW={{ base: "100%", md: "620px" }}>
            <Box
              bg={cardBg}
              border="1px solid"
              borderColor={border}
              rounded="2xl"
              overflow="hidden"
              h={{ base: "220px", md: "360px" }}
              mb={4}
              position="relative"
            >
              {book.video?.poster ? (
                <Image src={book.video.poster} alt="poster" w="100%" h="100%" objectFit="cover" />
              ) : (
                <Flex h="full" align="center" justify="center" color={softTxt} gap={2}>
                  <FiPlay /><Text>Video player (embed here)</Text>
                </Flex>
              )}
            </Box>

            <Box bg={cardBg} border="1px solid" borderColor={border} rounded="2xl" overflow="hidden">
              <Box px={5} pt={4} pb={3}>
                <Text fontSize="lg" fontWeight="bold" color={titleCol} noOfLines={2}>
                  {book.title}
                </Text>
                <HStack mt={3} spacing={2} flexWrap="wrap">
                  <Badge colorScheme="purple">{book.kind}</Badge>
                  <Badge colorScheme="teal">{book.level}</Badge>
                  <Badge>{book.series}</Badge>
                  {book.badge && <Badge colorScheme="blue">{book.badge}</Badge>}
                </HStack>

                <HStack mt={3} spacing={4} color={softTxt}>
                  <HStack spacing={1}><Icon as={AiFillStar} /><Text>{book.rating.toFixed(1)}</Text></HStack>
                  <Text fontSize="sm" color="whiteAlpha.700">{book.readers.toLocaleString()} readers</Text>
                </HStack>
              </Box>

              <Tabs variant="unstyled" isFitted>
                <TabList bg={tabBarBg} borderTop="1px solid" borderColor={border} px={2}>
                  <Tab _selected={{ bg: "whiteAlpha.200", color: "white" }} mx={1} my={2} px={4} py={2}>Description</Tab>
                  <Tab _selected={{ bg: "whiteAlpha.200", color: "white" }} mx={1} my={2} px={4} py={2}>Lecture Notes</Tab>
                  <Tab _selected={{ bg: "whiteAlpha.200", color: "white" }} mx={1} my={2} px={4} py={2}>
                    Attach File ({book.attachments.length})
                  </Tab>
                  <Tab _selected={{ bg: "whiteAlpha.200", color: "white" }} mx={1} my={2} px={4} py={2}>Comments</Tab>
                </TabList>

                <TabPanels p={4}>
                  <TabPanel>
                    <Text color={softTxt}>{book.description}</Text>
                  </TabPanel>

                  <TabPanel>
                    <VStack align="stretch" spacing={2} color={softTxt}>
                      {book.lectureNotes.map((t, i) => <Text key={i}>• {t}</Text>)}
                    </VStack>
                  </TabPanel>

                  <TabPanel>
                    <VStack align="stretch" spacing={2}>
                      {book.attachments.map((a) => (
                        <Flex
                          key={a.id}
                          align="center"
                          justify="space-between"
                          bg="whiteAlpha.100"
                          border="1px solid"
                          borderColor={border}
                          rounded="md"
                          px={3}
                          py={2}
                        >
                          <HStack>
                            <Icon as={iconFor(a)} />
                            <Text color={titleCol}>{a.name}</Text>
                            {a.size && <Badge>{a.size}</Badge>}
                          </HStack>
                          <Button as="a" href={a.url ?? "#"} size="sm" colorScheme="orange">Open</Button>
                        </Flex>
                      ))}
                    </VStack>
                  </TabPanel>

                  <TabPanel>
                    <Text color={softTxt}>Izohlar uchun joy (demo).</Text>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>

          {/* O‘ng: Course Contents */}
          <Box as="aside" flex="0 0 340px" w={{ base: "100%", lg: "340px" }} position="sticky" top="80px">
            <Box bg={cardBg} border="1px solid" borderColor={border} rounded="2xl" p={4}>
              <Text fontWeight="bold" color={titleCol} mb={2}>Course Contents</Text>
              <HStack justify="space-between" mb={2}>
                <Text fontSize="sm" color={softTxt}>{book.course.progress}% Completed</Text>
                <Text fontSize="sm" color={softTxt}>{book.course.totalDuration}</Text>
              </HStack>
              <Progress value={book.course.progress} colorScheme="green" rounded="full" />
              <Stack mt={4} spacing={4} divider={<Divider borderColor={border} />}>
                {book.course.sections.map((sec) => (
                  <Box key={sec.id}>
                    <Text fontSize="sm" color="whiteAlpha.700" mb={2}>{sec.title}</Text>
                    <VStack align="stretch" spacing={2}>
                      {sec.lessons.map((l) => (
                        <Flex
                          key={l.id}
                          align="center"
                          justify="space-between"
                          bg={l.playing ? "whiteAlpha.200" : "transparent"}
                          border="1px solid"
                          borderColor={border}
                          rounded="lg"
                          px={3}
                          py={2}
                        >
                          <VStack align="start" spacing={0}>
                            <Text color={titleCol} fontSize="sm" noOfLines={1}>{l.title}</Text>
                            <Text color="whiteAlpha.700" fontSize="xs">{l.dur}</Text>
                          </VStack>
                          <Button size="xs" colorScheme="orange">Open</Button>
                        </Flex>
                      ))}
                    </VStack>
                    {sec.total && <Text mt={2} fontSize="xs" color="whiteAlpha.600">{sec.total}</Text>}
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
