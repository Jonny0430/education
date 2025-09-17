"use client";
import {
  Box, Drawer, DrawerContent, DrawerOverlay, DrawerCloseButton, DrawerHeader,
  DrawerBody, DrawerFooter, useDisclosure, HStack, VStack, Text, Badge, Image,
  Tabs, TabList, TabPanels, Tab, TabPanel, Divider, Button, Icon, Stack, Card, CardBody
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FiShare2, FiGift, FiHeart } from "react-icons/fi";

export type Attachment = {
  id: string;
  name: string;                       // ko‘rinadigan nom
  kind: "pdf" | "zip" | "audio" | "video" | "link";
  url: string;                        // to‘g‘ridan-to‘g‘ri fayl yoki tashqi havola
  size?: string;                      // "38 MB" kabi
};

export type BookDetail = {
  id: string;
  title: string;
  authors: string[];
  rating: number;
  ratingCount: number;
  pairLang?: string;
  cover: string;
  price: number;
  oldPrice?: number;
  discountPct?: number;
  timeLeft?: string;
  overview: string;
  learnBullets: string[];
  includes: string[];
  // Yangi:
  attachments?: Attachment[];
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  book?: BookDetail | null;
};

export default function BookDetailDrawer({ isOpen, onClose, book }: Props) {
  useDisclosure();

  if (!book) return null;

  const {
    title, authors, rating, ratingCount, pairLang, cover,
    price, oldPrice, discountPct, timeLeft,
    overview, learnBullets, includes
  } = book;

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl" >
      <DrawerOverlay />
      <DrawerContent bg="gray.900" color="gray.100">
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px" fontFamily={'inter'}>
          <Text fontSize="xl" fontWeight="bold">{title}</Text>
          <Text mt={1} color="gray.400" fontSize="sm">
            Boshlang‘ich talaffuzdan kundalik nutqqacha — bosqichma-bosqich
          </Text>
          <HStack mt={3} spacing={3} wrap="wrap">
            <HStack spacing={1}>
              <Badge colorScheme="purple" variant="solid">{authors[0]}</Badge>
              {authors[1] && <Badge variant="outline">{authors[1]}</Badge>}
            </HStack>
            <HStack spacing={1}>
              <StarIcon color="yellow.400" />
              <Text>{rating.toFixed(1)}</Text>
              <Text color="gray.500">({ratingCount.toLocaleString()} rating)</Text>
            </HStack>
            {pairLang && <Badge variant="subtle">{pairLang}</Badge>}
          </HStack>
        </DrawerHeader>

        <DrawerBody>
          <Stack direction={{ base: "column", md: "row" }} spacing={6} align="start" fontFamily={'inter'}>
            {/* Chap: katta rasm + tabs */}
            <VStack align="stretch" flex="1" spacing={4}>
              <Image
                src={cover}
                alt={title}
                borderRadius="lg"
                w="100%"
                h="320px"
                objectFit="cover"
              />

              <Tabs variant="enclosed" colorScheme="orange">
                <TabList>
                  <Tab>Overview</Tab>
                  <Tab>Curriculum</Tab>
                  <Tab>Instructor</Tab>
                  <Tab>Review</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <VStack align="stretch" spacing={4}>
                      <Box>
                        <Text fontWeight="bold" mb={2}>Description</Text>
                        <Text color="gray.300">{overview}</Text>
                      </Box>
                      <Box>
                        <Text fontWeight="bold" mb={2}>What you will learn in this book</Text>
                        <VStack align="stretch" spacing={2}>
                          {learnBullets.map((b, i) => (
                            <HStack key={i} spacing={2}>
                              <Box as="span">•</Box>
                              <Text>{b}</Text>
                            </HStack>
                          ))}
                        </VStack>
                      </Box>
                    </VStack>
                  </TabPanel>
                  <TabPanel>
                    <Text color="gray.300">Curriculum bo‘limi (darslar ro‘yxati) — istasangiz keyin to‘ldiramiz.</Text>
                  </TabPanel>
                  <TabPanel>
                    <Text color="gray.300">Instruktor haqida ma’lumotlar — bio, tajriba, kurslar.</Text>
                  </TabPanel>
                  <TabPanel>
                    <Text color="gray.300">Foydalanuvchi sharhlari (stars, izohlar, sorting, pagination va h.k.).</Text>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </VStack>

            {/* O‘ng: narx kartasi */}
            <Box w={{ base: "100%", md: "360px" }} fontFamily={'inter'}>
              <Card bg="gray.800" borderRadius="xl" overflow="hidden">
                <CardBody>
                  <VStack align="stretch" spacing={3}>
                    <HStack justify="space-between" align="end">
                      <HStack align="end" spacing={2}>
                        <Text fontSize="3xl" fontWeight="bold">${price}</Text>
                        {oldPrice && (
                          <Text as="s" color="gray.500" fontSize="lg">${oldPrice}</Text>
                        )}
                        {discountPct && (
                          <Badge colorScheme="orange">{discountPct}% OFF</Badge>
                        )}
                      </HStack>
                      {timeLeft && (
                        <Text color="orange.300" fontSize="xs">{timeLeft}</Text>
                      )}
                    </HStack>

                    <Button colorScheme="orange" size="lg">Add To Cart</Button>
                    <Button variant="outline" size="lg">Buy Now</Button>
                    <HStack>
                      <Button leftIcon={<Icon as={FiHeart} />} variant="ghost" size="sm">
                        Add To Wishlist
                      </Button>
                      <Button leftIcon={<Icon as={FiGift} />} variant="ghost" size="sm">
                        Gift Book
                      </Button>
                    </HStack>

                    <Divider />

                    <VStack align="stretch" spacing={2} fontSize="sm" color="gray.300">
                      <HStack><Box as="span">◇</Box><Text>Lifetime access</Text></HStack>
                      <HStack><Box as="span">→</Box><Text>Free updates & resources</Text></HStack>
                      <HStack><Box as="span">◷</Box><Text>Self-paced study</Text></HStack>
                      <HStack><Box as="span">▤</Box><Text>Printable certificate</Text></HStack>
                    </VStack>

                    <Divider />

                    <Box>
                      <Text fontWeight="bold" mb={2}>This book includes:</Text>
                      <VStack align="stretch" spacing={1}>
                        {includes.map((i, idx) => (
                          <HStack key={idx} spacing={2}>
                            <Box as="span">•</Box>
                            <Text>{i}</Text>
                          </HStack>
                        ))}
                      </VStack>
                    </Box>

                    <Divider />

                    <VStack align="stretch" spacing={2}>
                      <Text fontWeight="bold">Share this book:</Text>
                      <HStack>
                        <Button size="sm" leftIcon={<Icon as={FiShare2} />} variant="outline">Copy link</Button>
                        <Button size="sm" variant="ghost">FB</Button>
                        <Button size="sm" variant="ghost">TW</Button>
                        <Button size="sm" variant="ghost">TG</Button>
                      </HStack>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter >
          <Text fontSize="xs" color="gray.500">© Seoulte Books</Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
