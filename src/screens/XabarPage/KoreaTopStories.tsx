// src/components/KoreaTopStories.tsx
"use client";
import type { FC } from "react";
import React from "react";
import {
  Box, Container, Grid, GridItem, Heading, Text, Image, AspectRatio,
  HStack, VStack, Badge, useColorModeValue, Link as ChakraLink,
  LinkBox, LinkOverlay, Divider, Icon, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Button
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsPlayFill } from "react-icons/bs";
import { MdPlayCircleOutline } from "react-icons/md";

/* ---------------- Types ---------------- */
type MediaKind = "image" | "video" | "youtube";

export type Story = {
  id: string;
  title: string;
  excerpt?: string;
  category: string;
  image: string;        // thumbnail/poster
  href?: string;        // maqola linki yoki YT link bo‘lishi ham mumkin
  datetime: string;     // ISO
  mediaKind?: MediaKind;
  videoSrc?: string;    // HTML5 .mp4/.webm/.ogg yoki YouTube link bo‘lishi ham mumkin
  youtubeId?: string;   // YouTube ID yoki to‘liq URL (yt.be / watch?v=...)
};

/* ---------------- Demo data ---------------- */
const STORIES: Story[] = [
  {
    id: "s1",
    title: "Seulda AI siyosati: yarimo‘tkazgich va 6G loyihalariga yangi impuls",
    excerpt:
      "Koreyada chiplar, 6G va AI infratuzilmaga qo‘shimcha dasturlar e’lon qilindi. Universitetlar va sanoat o‘rtasida hamkorlik kengaymoqda.",
    category: "Texnologiya",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    datetime: "2025-09-15T18:47:00",
    mediaKind: "youtube",
    youtubeId: "https://youtu.be/eCkuazw-DNU?t=2", // ID yoki to‘liq YT link bo‘lishi mumkin
  },
  {
    id: "s2",
    title: "Fransiya–Koreya strategik muloqoti: xavfsizlik va zanjirlar muhokamada",
    category: "Diplomatiya",
    image:
      "https://images.unsplash.com/photo-1542541864-4abf21a55761?q=80&w=800&auto=format&fit=crop",
    href: "#",
    datetime: "2025-09-15T09:53:00",
    mediaKind: "image",
  },
  {
    id: "s3",
    title: "Koreyaning yangi prezidenti kim bo’ladi?",
    category: "Ekologiya",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQT33q01U0ziIZXr9cUx0BLy6TZMnneips5rdURZpe0IoO-BPZxcm-mccdJi7-9I1xXd0&usqp=CAU",
    href: "#",
    datetime: "2025-09-15T15:11:00",
    mediaKind: "video",
    videoSrc: "https://youtu.be/N_zpkUdD-Co?t=4", // bu YT link bo‘lsa ham aniqlab beradi
  },
  {
    id: "s4",
    title: "Boks bo‘yicha JCh: Koreya sportchilari reytingda yuqoriga ko‘tarildi",
    category: "Sport",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800&auto=format&fit=crop",
    href: "#",
    datetime: "2025-09-15T01:09:00",
    mediaKind: "image",
  },
  {
    id: "s5",
    title: "TOPIK tayyorgarligi: Hangul va akademik yozuv bo‘yicha bepul resurslar",
    category: "Ta’lim",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
    href: "#",
    datetime: "2025-09-14T11:51:00",
    mediaKind: "image",
  },
];

/* ---------------- Helpers: time meta ---------------- */
function meta(dateISO: string) {
  const d = new Date(dateISO);
  const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const date = d.toLocaleDateString();
  return { time, date };
}

/* ---------------- Helpers: YouTube utils ---------------- */
// 1) URL yoki 11 belgili ID dan real ID ni topish
function getYouTubeId(input?: string): string | null {
  if (!input) return null;
  // already an ID
  if (/^[\w-]{11}$/.test(input)) return input;

  try {
    const u = new URL(input);
    // youtu.be/<id>
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.slice(1).split("/")[0];
      return /^[\w-]{11}$/.test(id) ? id : null;
    }
    // youtube.com/watch?v=<id>
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v && /^[\w-]{11}$/.test(v)) return v;
    }
  } catch {
    /* ignore */
  }
  return null;
}

// 2) t= yoki start= dan start sekundni ajratish (90 yoki 1m30s formatlari)
function getStartSecondsFromUrl(input?: string): number | null {
  if (!input) return null;
  try {
    const u = new URL(input);
    const t = u.searchParams.get("t") ?? u.searchParams.get("start");
    if (!t) return null;
    if (/^\d+$/.test(t)) return parseInt(t, 10);
    const m = /(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/i.exec(t);
    if (!m) return null;
    const h = parseInt(m[1] || "0", 10);
    const mm = parseInt(m[2] || "0", 10);
    const s = parseInt(m[3] || "0", 10);
    return h * 3600 + mm * 60 + s;
  } catch {
    return null;
  }
}

// 3) YT embed SRC qurish
function buildYouTubeEmbedSrc(idOrUrl?: string, opts?: { autoplay?: 0 | 1 }) {
  const id = getYouTubeId(idOrUrl);
  if (!id) return null;
  const start = getStartSecondsFromUrl(idOrUrl ?? "");
  const params = new URLSearchParams({
    autoplay: String(opts?.autoplay ?? 1),
    rel: "0",
    modestbranding: "1",
    // controls, playsinline, cc_lang_pref, hl kabi paramlarni xohlasangiz qo‘shishingiz mumkin
  });
  if (start) params.set("start", String(start));
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

// 4) HTML5 video ekanligini tekshirish (faqat to‘g‘ridan-to‘g‘ri media URL)
function isHtml5VideoUrl(u?: string): boolean {
  if (!u) return false;
  return /\.(mp4|webm|ogg)(\?|#|$)/i.test(u);
}

/* ---------------- Video Modal ---------------- */
const VideoModal: FC<{
  story: Story | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ story, isOpen, onClose }) => {
  const title = story?.title ?? "Video";

  // YouTube uchun: youtubeId, videoSrc yoki href ichida link bo‘lishi mumkin
  const ytSrc =
    (buildYouTubeEmbedSrc(story?.youtubeId) ??
    buildYouTubeEmbedSrc(story?.videoSrc)) ??
    buildYouTubeEmbedSrc(story?.href);

  const isYouTube = story?.mediaKind === "youtube" && !!ytSrc;
  const isHtml5   = story?.mediaKind === "video" && (isHtml5VideoUrl(story.videoSrc) || !(ytSrc));

  // Agar mediaKind "video" bo‘lsa-yu, videoSrc YouTube bo‘lsa, yuqoridagi ytSrc orqali baribir YT ko‘rsatamiz.
  const forceYT = story?.mediaKind === "video" && !!ytSrc;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl"  isCentered>
      <ModalOverlay />
      <ModalContent bg="black" color="white" fontFamily={'serif'}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6} fontFamily={'serif'}>
          {(isYouTube || forceYT) && ytSrc && (
            <AspectRatio ratio={16 / 9}>
              <iframe
                src={ytSrc}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ border: 0 }}
              />
            </AspectRatio>
          )}

          {isHtml5 && !forceYT && story.videoSrc && (
            <AspectRatio ratio={16 / 9}>
              <video
                src={story.videoSrc}
                controls
                autoPlay
                style={{ width: "100%", height: "100%" }}
              />
            </AspectRatio>
          )}

          {!ytSrc && !isHtml5 && (
            <Box textAlign="center" py={8} fontFamily={'serif'}>
              <Text>Video mavjud emas yoki YouTube havolasi noto‘g‘ri.</Text>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

/* ---------------- Right list item ---------------- */
const RightItem: FC<{
  s: Story;
  onPlay: (s: Story) => void;
}> = ({ s, onPlay }) => {
  const metaClr = useColorModeValue("gray.500", "gray.400");
  const titleClr = useColorModeValue("gray.900", "gray.100");
  const { time, date } = meta(s.datetime);

  const isPlayable =
    s.mediaKind === "video" ||
    s.mediaKind === "youtube" ||
    !!getYouTubeId((s.youtubeId ?? (s.videoSrc) ?? s.href) ?? "");

  return (
    <LinkBox as={HStack} spacing={4} align="start" fontFamily={'serif'}>
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

      <VStack align="start" spacing={1} flex="1" fontFamily={'serif'}>
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

/* ---------------- Main block ---------------- */
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

  const isLeadPlayable =
    lead.mediaKind === "video" ||
    lead.mediaKind === "youtube" ||
    !!getYouTubeId((lead.youtubeId ?? (lead.videoSrc) ?? lead.href) ?? "");

  return (
    <Box>
      <Container maxW="7xl" py={{ base: 6, md: 8 }} fontFamily={'serif'}>
        {/* Header */}
        <HStack justify="space-between" mb={4}>
          <HStack spacing={2}>
            <Heading as="h2" size="xl" fontFamily={'serif'}>
              Dolzarb xabarlar
            </Heading>
            <ExternalLinkIcon />
          </HStack>

          <HStack
            spacing={6}
            display={{ base: "none", md: "flex" }}
            color={useColorModeValue("gray.600", "gray.300")}
            fontWeight="medium"
            fontFamily={'serif'}
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
                <Box
                  as={isLeadPlayable ? "button" : "div"}
                  onClick={isLeadPlayable ? () => { openVideo(lead); } : undefined}
                >
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
