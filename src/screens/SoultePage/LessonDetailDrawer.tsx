"use client";

import {
  Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton,
  Tabs, TabList, Tab, TabPanels, TabPanel,
  Text, List, ListItem, Box, HStack, Wrap, WrapItem, Link as ChakraLink, Badge
} from "@chakra-ui/react";
import { FiFileText, FiLink, FiMusic, FiVideo, FiArchive } from "react-icons/fi";
import type { IconType } from "react-icons";
import type { Attachment, Lesson } from "../../libs/Books";

function iconByKind(kind: Attachment["kind"]): IconType {
  switch (kind) {
    case "pdf": return FiFileText;
    case "audio": return FiMusic;
    case "video": return FiVideo;
    case "zip": return FiArchive;
    default: return FiLink;
  }
}

type Props = {
  isOpen: boolean;
  onClose: () => void;
  lesson?: Lesson | null;
  // ixtiyoriy fallback: agar darsda material bo‘lmasa, kitob darajasini ko‘rsatish uchun
  fallbackVideo?: { url: string; poster?: string } | null;
  fallbackAttachments?: Attachment[];
  fallbackNotes?: string[];
};

export default function LessonDetailDrawer({
  isOpen, onClose, lesson,
  fallbackVideo, fallbackAttachments = [], fallbackNotes = []
}: Props) {
  if (!lesson) return null;

  const lessonVideo = lesson.video ?? fallbackVideo ?? null;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const lessonAttachments = lesson.attachments ?? fallbackAttachments ?? [];
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const lessonNotes = lesson.notes ?? fallbackNotes ?? [];
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const hasAnything = Boolean((lessonVideo ?? (lessonAttachments.length) ?? lessonNotes.length) ?? lesson.description);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="xl">
      <DrawerOverlay />
      <DrawerContent borderRadius="xl" overflow="hidden">
        <DrawerCloseButton />
        <DrawerHeader>
          <HStack justify="space-between" align="start">
            <Box>
              <Text fontSize="lg" fontWeight="bold">{lesson.title}</Text>
              <Text color="gray.500" fontSize="sm">{lesson.dur}</Text>
            </Box>
            {lesson.playing && <Badge colorScheme="green">playing</Badge>}
          </HStack>
        </DrawerHeader>
        <DrawerBody pb={8}>
          {hasAnything ? (
            <Tabs variant="enclosed" colorScheme="blue">
              <TabList>
                <Tab>Overview</Tab>
                {/* <Tab>Video</Tab> */}
                <Tab>Fayllar</Tab>
                <Tab>Notes</Tab>
              </TabList>
              <TabPanels>
                {/* Overview */}
                <TabPanel>
                  {lesson.description ? (
                    <Text>{lesson.description}</Text>
                  ) : (
                    <Text color="gray.500">Ushbu dars uchun Overview kiritilmagan.</Text>
                  )}
                </TabPanel>

                {/* Video */}
                {/* <TabPanel>
                  {lessonVideo ? (
                    <Card borderRadius="2xl" overflow="hidden">
                      <CardBody>
                        <AspectRatio ratio={16 / 9} borderRadius="lg" overflow="hidden">
                          <video
                            controls
                            poster={lessonVideo.poster}
                            src={lessonVideo.url}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </AspectRatio>
                        <Text mt={3} color="gray.600" fontSize="sm">
                          Dars videosi
                        </Text>
                      </CardBody>
                    </Card>
                  ) : (
                    <Text color="gray.500">Video mavjud emas.</Text>
                  )}
                </TabPanel> */}

                {/* Files */}
                <TabPanel>
                  {lessonAttachments.length ? (
                    <Wrap spacing={3}>
                      {lessonAttachments.map((a) => {
                        const Icon = iconByKind(a.kind);
                        return (
                          <WrapItem key={a.id}>
                            <ChakraLink href={a.url} isExternal _hover={{ textDecoration: "none" }}>
                              <HStack
                                borderWidth="1px"
                                p={2.5}
                                borderRadius="lg"
                                minW="240px"
                                justify="space-between"
                                _hover={{ bg: "blackAlpha.50" }}
                              >
                                <HStack>
                                  <Box as={Icon} aria-hidden fontSize="20px" />
                                  <Box>
                                    <Text noOfLines={1} fontWeight="medium">{a.name}</Text>
                                    <HStack fontSize="xs" color="gray.500">
                                      <Text textTransform="uppercase">{a.kind}</Text>
                                      {a.size && (<><Box as="span">•</Box><Text>{a.size}</Text></>)}
                                    </HStack>
                                  </Box>
                                </HStack>
                                <Text fontSize="xs" color="blue.500">ochish</Text>
                              </HStack>
                            </ChakraLink>
                          </WrapItem>
                        );
                      })}
                    </Wrap>
                  ) : (
                    <Text color="gray.500">Fayllar mavjud emas.</Text>
                  )}
                </TabPanel>

                {/* Notes */}
                <TabPanel>
                  {lessonNotes.length ? (
                    <List spacing={2}>
                      {lessonNotes.map((n, i) => (
                        <ListItem key={i} display="flex" gap={3}>
                          <Box mt="6px" w="6px" h="6px" borderRadius="full" bg="blue.400" />
                          <Text>{n}</Text>
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Text color="gray.500">Izohlar kiritilmagan.</Text>
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          ) : (
            <Text color="gray.500">Bu dars uchun materiallar hozircha qo‘shilmagan.</Text>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
