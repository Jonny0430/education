/* eslint-disable @typescript-eslint/no-unnecessary-condition */
"use client";

import {
  Modal, ModalBody, ModalContent, ModalOverlay, ModalHeader, ModalCloseButton,
  Box, HStack, VStack, Text, Badge, Tag, Tabs, TabList, Tab, TabPanels, TabPanel,
  Card, CardBody, Divider, List, ListItem
} from "@chakra-ui/react";
import { useState } from "react";
import CourseSections from "./CourseSections";
import LessonDetailDrawer from "./LessonDetailDrawer";
import AttachmentList from "../../libs/AttachmentIcon";
import type { Book, Lesson } from "../../libs/Books";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  book?: Book | null;
};

/** YouTube URL -> EMBED URL (shorts/live/playlist/m.youtube.com/no-cookie ni qo‘llab-quvvatlaydi) */
// function toYouTubeEmbed(raw: string) {
//   try {
//     const u = new URL(raw.trim());
//     const host = u.hostname.replace(/^m\./, ""); // m.youtube.com -> youtube.com
//     const path = u.pathname;

//     // youtu.be/<id>
//     if (host.includes("youtu.be")) {
//       const id = path.slice(1);
//       return id ? `https://www.youtube.com/embed/${id}` : null;
//     }

//     // youtube.com / youtube-nocookie.com
//     if (host.includes("youtube.com") || host.includes("youtube-nocookie.com")) {
//       // Agar allaqachon /embed/<id> bo‘lsa — to‘g‘ridan ishlatamiz
//       if (path.startsWith("/embed/")) {
//         return `https://www.youtube.com${path}`;
//       }

//       // /shorts/<id>
//       if (path.startsWith("/shorts/")) {
//         const id = path.split("/")[2];
//         return id ? `https://www.youtube.com/embed/${id}` : null;
//       }

//       // /live/<id>
//       if (path.startsWith("/live/")) {
//         const id = path.split("/")[2];
//         return id ? `https://www.youtube.com/embed/${id}` : null;
//       }

//       // watch?v=<id>
//       const v = u.searchParams.get("v");
//       if (v) return `https://www.youtube.com/embed/${v}`;

//       // playlist: ?list=<LIST_ID>
//       const list = u.searchParams.get("list");
//       if (list) return `https://www.youtube.com/embed/videoseries?list=${list}`;
//     }
//   } catch {
//     // ignore parse errors
//   }
//   return null;
// }

/** Bir joyda DRY qilish uchun video renderer */
// function VideoBlock({
//   url,
//   poster,
//   caption = "Kitob darajasidagi demo video",
// }: {
//   url: string;
//   poster?: string;
//   caption?: string;
// }) {
//   const yt = toYouTubeEmbed(url);

//   return (
//     <Card borderRadius="2xl" overflow="hidden">
//       <CardBody>
//         {yt ? (
//           <AspectRatio ratio={16 / 9} borderRadius="lg" overflow="hidden">
//             <iframe
//               src={`${yt}?rel=0`}
//               title="YouTube video player"
//               loading="lazy"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               allowFullScreen
//               referrerPolicy="origin-when-cross-origin"
//               style={{ width: "100%", height: "100%", border: 0 }}
//             />
//           </AspectRatio>
//         ) : (
//           <AspectRatio ratio={16 / 9} borderRadius="lg" overflow="hidden">
//             {/* YouTube to‘g‘ridan-to‘g‘ri video emas — <video> bilan ijro etilmaydi.
//                 Shuning uchun bu blok faqat .mp4/.webm kabi to‘g‘ridan media URL bo‘lsa ishlaydi. */}
//             <video
//               controls
//               poster={poster}
//               src={url}
//               style={{ width: "100%", height: "100%" }}
//             />
//           </AspectRatio>
//         )}
//         <Text mt={3} color="gray.600" fontSize="sm">
//           {caption}
//         </Text>

//         {!yt && url.includes("youtube") && (
//           <Text mt={2} color="red.500" fontSize="sm">
//             YouTube havolasini o‘qiy olmadik. Iltimos, to‘g‘ri link yuboring (watch?v=..., youtu.be/..., shorts/... yoki playlist list=...).
//           </Text>
//         )}
//       </CardBody>
//     </Card>
//   );
// }

export default function BookDetailModal({ isOpen, onClose, book }: Props) {
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
                {/* <Tab>Video</Tab> */}
              </TabList>

              <TabPanels>
                {/* OVERVIEW */}
                <TabPanel>
                  <Card borderRadius="2xl" mb={6}>
                    <CardBody>
                      <Text color="gray.800">{book.description}</Text>
                    </CardBody>
                  </Card>

                  {/* ixtiyoriy: Lecture Notes / Progress */}
                  {Array.isArray(book.lectureNotes) && book.lectureNotes.length > 0 && (
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
                        {book.course.progress != null && (
                          <Box textAlign="right" mt={3} color="gray.500" fontSize="sm">
                            Progress: {book.course.progress}%
                          </Box>
                        )}
                      </CardBody>
                    </Card>
                  )}
                </TabPanel>

                {/* DARSLIKLAR */}
                <TabPanel>
                  <CourseSections
                    sections={book.course.sections}
                    totalDuration={book.course.totalDuration}
                    onOpenLesson={(ls) => { setOpenLesson(ls); }}
                  />
                </TabPanel>

                {/* FAYLLAR */}
                <TabPanel>
                  <AttachmentList items={book.attachments} />
                </TabPanel>

                {/* VIDEO */}
                {/* <TabPanel>
                  {book.video?.url ? (
                    <VideoBlock
                      url={book.video.url}
                      poster={book.video.poster}
                      caption="Kitob darajasidagi demo video"
                    />
                  ) : (
                    <Text color="gray.500">Video mavjud emas.</Text>
                  )}
                </TabPanel> */}
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
        // fallbackVideo={book.video ?? null}
        fallbackAttachments={book.attachments}
        fallbackNotes={book.lectureNotes}
      />
    </>
  );
}
