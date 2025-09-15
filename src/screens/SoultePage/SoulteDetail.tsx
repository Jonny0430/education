"use client";

import {
  Modal, ModalBody, ModalContent, ModalOverlay, ModalHeader, ModalCloseButton,
  Box, HStack, VStack, Text, Badge, Tag, Divider, Tabs, TabList, Tab, TabPanels, TabPanel,
  Card, CardBody, AspectRatio, List, ListItem
} from "@chakra-ui/react";
import CourseSections from "./CourseSections";
import LessonDetailDrawer from "./LessonDetailDrawer";
import { useState } from "react";
import type { Book, Lesson } from "../../libs/Books";
import AttachmentList from "../../libs/AttachmentIcon";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  book?: Book | null;
};

export default function BookDetail({ isOpen, onClose, book }: Props) {
  const [openLesson, setOpenLesson] = useState<Lesson | null>(null);
  if (!book) return null;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="6xl" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent borderRadius="2xl" overflow="hidden">
          <ModalHeader>
            <HStack justify="space-between" align="start">
              <VStack align="start" spacing={1}>
                <HStack>
                  <Text fontSize="lg" fontWeight="bold">{book.title}</Text>
                  {book.badge && <Badge colorScheme="pink">{book.badge}</Badge>}
                </HStack>
                <HStack color="gray.600" fontSize="sm" wrap="wrap">
                  <Text>{book.series}</Text><Box as="span">•</Box>
                  <Text>{book.kind}</Text><Box as="span">•</Box>
                  <Text>{book.level}</Text><Box as="span">•</Box>
                  <Text>⭐ {book.rating.toFixed(1)}</Text><Box as="span">•</Box>
                  <Text>{book.readers.toLocaleString()} readers</Text>
                </HStack>
              </VStack>
              <Tag size="lg" variant="subtle" colorScheme="blue">${book.price}</Tag>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Tabs variant="enclosed" colorScheme="blue">
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Darsliklar</Tab>
                <Tab>Fayllar</Tab>
                <Tab>Video</Tab>
              </TabList>

              <TabPanels>
                {/* Overview */}
                <TabPanel>
                  <Card borderRadius="2xl" mb={6}>
                    <CardBody>
                      <Text color="gray.800">{book.description}</Text>
                    </CardBody>
                  </Card>
                  <Card borderRadius="2xl">
                    <CardBody>
                      <Text fontWeight="semibold" mb={2}>Lecture Notes</Text>
                      <List spacing={2}>
                        {book.lectureNotes.map((n, i) => (
                          <ListItem key={i} display="flex" gap={3}>
                            <Box mt="6px" w="6px" h="6px" borderRadius="full" bg="blue.400" />
                            <Text>{n}</Text>
                          </ListItem>
                        ))}
                      </List>
                      <Divider mt={4} />
                      <Box textAlign="right" mt={3} color="gray.500" fontSize="sm">
                        Progress: {book.course.progress}%
                      </Box>
                    </CardBody>
                  </Card>
                </TabPanel>

                {/* Darsliklar */}
                <TabPanel>
                  <CourseSections
                    sections={book.course.sections}
                    totalDuration={book.course.totalDuration}
                    onOpenLesson={(ls) => { setOpenLesson(ls); }}
                  />
                </TabPanel>

                {/* Fayllar */}
                <TabPanel>
                  <AttachmentList items={book.attachments} />
                </TabPanel>

                {/* Video */}
                <TabPanel>
                  {book.video?.url ? (
                    <Card borderRadius="2xl" overflow="hidden">
                      <CardBody>
                        <AspectRatio ratio={16 / 9} borderRadius="lg" overflow="hidden">
                          <video
                            controls
                            poster={book.video.poster}
                            src={book.video.url}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </AspectRatio>
                        <Text mt={3} color="gray.600" fontSize="sm">
                          Kitob darajasidagi demo video
                        </Text>
                      </CardBody>
                    </Card>
                  ) : (
                    <Text color="gray.500">Video mavjud emas.</Text>
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* LESSON DRAWER */}
      <LessonDetailDrawer
        isOpen={!!openLesson}
        onClose={() => { setOpenLesson(null); }}
        lesson={openLesson}
        // ixtiyoriy fallbacklar:
        fallbackVideo={book.video ?? null}
        fallbackAttachments={book.attachments}
        fallbackNotes={book.lectureNotes}
      />
    </>
  );
}
