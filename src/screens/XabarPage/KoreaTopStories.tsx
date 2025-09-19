// src/components/KoreaTopStories.tsx
"use client";
import type { FC } from "react";
import {
  Box, Container, Grid, GridItem, Heading, Text, Image, AspectRatio,
  HStack, VStack, Badge, useColorModeValue, Link as ChakraLink,
  LinkBox, LinkOverlay, Divider, Icon, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Button
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsPlayFill } from "react-icons/bs";
import { MdPlayCircleOutline } from "react-icons/md";
import React from "react";

type MediaKind = "image" | "video" | "youtube";

type Story = {
  id: string;
  title: string;
  excerpt?: string;
  category: string;
  image: string;        // thumbnail/poster
  href?: string;        // maqola linki
  datetime: string;     // ISO
  mediaKind?: MediaKind;
  videoSrc?: string;    // HTML5 .mp4 manzili (mediaKind="video")
  youtubeId?: string;   // YouTube ID (mediaKind="youtube")
};

const STORIES: Story[] = [
  {
    id: "s1",
    title:
      "Seulda AI siyosati: yarimo‘tkazgich va 6G loyihalariga yangi impuls",
    excerpt:
      "Koreyada chiplar, 6G va AI infratuzilmaga qo‘shimcha dasturlar e’lon qilindi. Universitetlar va sanoat o‘rtasida hamkorlik kengaymoqda.",
    category: "Texnologiya",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    datetime: "2025-09-15T18:47:00",
    mediaKind: "youtube",
    youtubeId: "dQw4w9WgXcQ", // misol uchun
  },
  {
    id: "s2",
    title:
      "Fransiya–Koreya strategik muloqoti: xavfsizlik va zanjirlar muhokamada",
    category: "Diplomatiya",
    image:
      "https://images.unsplash.com/photo-1542541864-4abf21a55761?q=80&w=800&auto=format&fit=crop",
    href: "#",
    datetime: "2025-09-15T09:53:00",
    mediaKind: "image",
  },
  {
    id: "s3",
    title:
      "Koreya Prezidenti Amerika prezidenti bilan uchrashdi",
    category: "Ekologiya",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BizaJJupfAAAJTK9OHUinjAaPltvbn6Ydg&s",
    href: "#",
    datetime: "2025-09-15T15:11:00",
    mediaKind: "video",
    videoSrc:
      "https://youtu.be/sbMGK8E1sco?t=3", // demo mp4
  },
  {
    id: "s4",
    title:
      "Boks bo‘yicha JCh: Koreya sportchilari reytingda yuqoriga ko‘tarildi",
    category: "Sport",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800&auto=format&fit=crop",
    href: "#",
    datetime: "2025-09-15T01:09:00",
    mediaKind: "image",
  },
  {
    id: "s5",
    title:
      "TOPIK tayyorgarligi: Hangul va akademik yozuv bo‘yicha bepul resurslar",
    category: "Ta’lim",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
    href: "#",
    datetime: "2025-09-14T11:51:00",
    mediaKind: "image",
  },
];

function meta(dateISO: string) {
  const d = new Date(dateISO);
  const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const date = d.toLocaleDateString();
  return { time, date };
}

/* ——— Video Modal ——— */
const VideoModal: FC<{
  story: Story | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ story, isOpen, onClose }) => {
  const title = story?.title ?? "Video";

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay />
      <ModalContent bg="black" color="white">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {story?.mediaKind === "youtube" && story.youtubeId && (
            <AspectRatio ratio={16 / 9}>
              <iframe
                src={`https://youtu.be/FLZXRUOAIKE?t=1/${story.youtubeId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ border: 0 }}
              />
            </AspectRatio>
          )}

          {story?.mediaKind === "video" && story.videoSrc && (
            <AspectRatio ratio={16 / 9}>
              <video src={story.videoSrc} controls autoPlay style={{ width: "100%", height: "100%" }} />
            </AspectRatio>
          )}

          {(!story || story.mediaKind === "image") && (
            <Box textAlign="center" py={8}>
              <Text>Video mavjud emas.</Text>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

/* ——— O‘ngdagi element ——— */
const RightItem: FC<{
  s: Story;
  onPlay: (s: Story) => void;
}> = ({ s, onPlay }) => {
  const metaClr = useColorModeValue("gray.500", "gray.400");
  const titleClr = useColorModeValue("gray.900", "gray.100");
  const { time, date } = meta(s.datetime);

  const isPlayable = s.mediaKind === "video" || s.mediaKind === "youtube";

  return (
    <LinkBox as={HStack} spacing={4} align="start">
      <Box position="relative">
        <AspectRatio ratio={1} w="72px" minW="72px" borderRadius="md" overflow="hidden">
          <Image src={s.image} alt={s.title} objectFit="cover" />
        </AspectRatio>
        {isPlayable && (
          <Icon
            as={MdPlayCircleOutline}
            position="absolute"
            inset="0"
            m="auto"
            boxSize="22px"
            color="white"
            filter="drop-shadow(0 2px 6px rgba(0,0,0,.6))"
            pointerEvents="none"
          />
        )}
      </Box>

      <VStack align="start" spacing={1} flex="1">
        <HStack spacing={2} color={metaClr} fontSize="xs">
          {isPlayable ? <Icon as={BsPlayFill} /> : null}
          <Text>
            {time} / {date}
          </Text>
        </HStack>

        {isPlayable ? (
          <Button variant="link" p={0} onClick={() => { onPlay(s); }}>
            <Text color={titleClr} fontWeight="semibold" lineHeight="1.25" textAlign="left">
              {s.title}
            </Text>
          </Button>
        ) : (
          <LinkOverlay as={ChakraLink} href={s.href ?? "#"} _hover={{ textDecoration: "none" }}>
            <Text color={titleClr} fontWeight="semibold" lineHeight="1.25">
              {s.title}
            </Text>
          </LinkOverlay>
        )}
      </VStack>
    </LinkBox>
  );
};

/* ——— Asosiy blok ——— */
const KoreaTopStories: FC = () => {
  const titleClr = useColorModeValue("gray.900", "gray.100");
  const leadClr = useColorModeValue("gray.700", "gray.200");
  const metaClr = useColorModeValue("gray.500", "gray.400");
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const badgeScheme = useColorModeValue("blue", "purple");

  const [lead, ...rest] = STORIES;

  const { time, date } = meta(lead.datetime);

  const video = useDisclosure();
  const [active, setActive] = React.useState<Story | null>(null);

  const openVideo = (s: Story) => {
    setActive(s);
    video.onOpen();
  };

  const isLeadPlayable = lead.mediaKind === "video" || lead.mediaKind === "youtube";

  return (
    <Box>
      <Container maxW="7xl" py={{ base: 6, md: 8 }} fontFamily={'serif'}>
        {/* Header */}
        <HStack justify="space-between" mb={4}>
          <HStack spacing={2}>
            <Heading as="h2" size="xl">
              Dolzarb xabarlar
            </Heading>
            <ExternalLinkIcon />
          </HStack>

          <HStack
            spacing={6}
            display={{ base: "none", md: "flex" }}
            color={useColorModeValue("gray.600", "gray.300")}
            fontWeight="medium"
          >
            <ChakraLink href="#hayot">hayot</ChakraLink>
            <ChakraLink href="#mulk">mulk</ChakraLink>
            <ChakraLink href="#dunyosi">dunyosi</ChakraLink>
          </HStack>
        </HStack>

        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={{ base: 6, lg: 10 }}>
          {/* Left – Lead story */}
          <GridItem>
            <Box as="article" position="relative">
              <AspectRatio ratio={16 / 9} mb={4} borderRadius="xl" overflow="hidden">
                <Box as={isLeadPlayable ? "button" : "div"} onClick={isLeadPlayable ? () => { openVideo(lead); } : undefined}>
                  <Image src={lead.image} alt={lead.title} objectFit="cover" w="100%" h="100%" />
                </Box>
              </AspectRatio>

              {/* Play badge overlay (lead) */}
              {isLeadPlayable && (
                <Icon
                  as={MdPlayCircleOutline}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  boxSize={{ base: "56px", md: "68px" }}
                  color="white"
                  filter="drop-shadow(0 6px 18px rgba(0,0,0,.6))"
                  pointerEvents="none"
                />
              )}

              <HStack spacing={3} color={metaClr} fontSize="sm" mb={2}>
                <Badge colorScheme={badgeScheme} variant="subtle">
                  {lead.category}
                </Badge>
                <Text>
                  {time} / {date}
                </Text>
              </HStack>

              <Heading as="h3" size={{ base: "lg", md: "xl" }} color={titleClr} mb={3}>
                {isLeadPlayable ? (
                  <Button variant="link" p={0} onClick={() => { openVideo(lead); }}>
                    {lead.title}
                  </Button>
                ) : (
                  <ChakraLink href={lead.href ?? "#"} _hover={{ textDecoration: "none" }}>
                    {lead.title}
                  </ChakraLink>
                )}
              </Heading>

              {lead.excerpt && (
                <Text color={leadClr} fontSize={{ base: "md", md: "lg" }}>
                  {lead.excerpt}
                </Text>
              )}
            </Box>
          </GridItem>

          {/* Right – list */}
          <GridItem>
            <VStack align="stretch" spacing={5} divider={<Divider borderColor={border} />}>
              {rest.map((s) => (
                <RightItem key={s.id} s={s} onPlay={openVideo} />
              ))}
            </VStack>
          </GridItem>
        </Grid>
      </Container>

      {/* Video modal */}
      <VideoModal story={active} isOpen={video.isOpen} onClose={video.onClose} />
    </Box>
  );
};

export default KoreaTopStories;
