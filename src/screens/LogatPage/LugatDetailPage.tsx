/* eslint-disable @typescript-eslint/no-unnecessary-condition */
// pages/LugatDetailPage.tsx
"use client";
import {
  Box, Container, Heading, Text, HStack, Badge, SimpleGrid, Card, CardBody,
  Button, Icon, VStack, Divider, useToast,
} from "@chakra-ui/react";
import { FiCopy, FiVolume2, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { VOCABS } from "../../libs/dict";
import { Link } from "react-router";
import { useParams } from "react-router";



const langLabel: Record<"uz"|"ko"|"ru"|"en", string> = {
  uz: "UZBEK (UZ)",
  ko: "KOREAN (한국어)",
  ru: "RUSSIAN (RU)",
  en: "ENGLISH (EN)",
};
const ttsLang: Record<"uz"|"ko"|"ru"|"en", string> = {
  ko: "ko-KR",
  uz: "uz-UZ",   // ba’zi brauzerlarda bo‘lmasligi mumkin — fallback bo‘ladi
  ru: "ru-RU",
  en: "en-US",
};

function speak(text: string, lang: string) {
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    // voice matching (best-effort)
    const voice = speechSynthesis.getVoices().find(v => v.lang.startsWith(lang.split("-")[0]));
    if (voice) u.voice = voice;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  } catch { /* empty */ }
}

export default function LugatDetailPage() {
  const { id } = useParams();
  const toast = useToast();

  const idx = VOCABS.findIndex(v => v.id === id);
  const data = idx >= 0 ? VOCABS[idx] : undefined;

  if (!data) {
    return (
      <Container maxW="6xl" py={8}>
        <Heading size="md" mb={3}>Topilmadi</Heading>
        <Button as={Link} to="/lugat" leftIcon={<FiChevronLeft />}>Lug‘atlar ro‘yxatiga qaytish</Button>
      </Container>
    );
  }

  const prev = VOCABS[idx - 1];
  const next = VOCABS[idx + 1];

  const copy = (t: string) => {
    void navigator.clipboard.writeText(t);
    toast({ status: "success", title: "Nusxa olindi" });
  };

  return (
    <Container maxW="6xl" py={6}>
      {/* Header */}
      <HStack justify="space-between" align="start" mb={4} wrap="wrap">
        <VStack align="start" spacing={1}>
          <HStack spacing={3} align="center">
            <Heading size="lg">{data.words.ko.text}</Heading>
            <Text color="gray.400">• {data.words.en.text}</Text>
            {data.tags?.map(t => <Badge key={t} colorScheme="pink">{t}</Badge>)}
          </HStack>
          <HStack color="gray.400" fontSize="sm">
            {data.romanization && <Badge variant="subtle" colorScheme="purple">Romanizatsiya: {data.romanization}</Badge>}
            <Badge variant="outline">{data.pos}</Badge>
          </HStack>
        </VStack>

        <HStack>
          {prev && (
            <Button as={Link} to={`/lugat/${prev.id}`} leftIcon={<FiChevronLeft />}>
              Oldingi
            </Button>
          )}
          {next && (
            <Button as={Link} to={`/lugat/${next.id}`} rightIcon={<FiChevronRight />} colorScheme="red">
              Keyingi
            </Button>
          )}
        </HStack>
      </HStack>

      {/* 4 til kartalari */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={3}>
        {/** UZ / KO / RU / EN */}
        {(["uz","ko","ru","en"] as const).map(code => {
          const w = data.words[code];
          return (
            <Card key={code} borderRadius="xl">
              <CardBody>
                <Text fontSize="xs" color="gray.400" mb={1}>{langLabel[code]}</Text>
                <Heading size="md" mb={1}>{w.text}</Heading>
                <Text color="gray.500" fontSize="sm">{w.script}</Text>
                <HStack mt={3}>
                  <Button size="sm" leftIcon={<Icon as={FiCopy} />} onClick={()=>{ copy(w.text); }}>
                    Nusxa olish
                  </Button>
                  <Button size="sm" variant="ghost" leftIcon={<Icon as={FiVolume2} />} onClick={()=>{ speak(w.text, ttsLang[code]); }}>
                    O‘qib ber
                  </Button>
                </HStack>
              </CardBody>
            </Card>
          );
        })}
      </SimpleGrid>

      {/* Namuna gaplar */}
      <Box mt={5} borderRadius="xl" borderWidth="1px" p={4} bg="blackAlpha.300">
        <Heading size="sm" mb={3}>Namuna gaplar</Heading>
        <Divider mb={3} />
        <VStack align="start" spacing={3}>
          {data.samples.map((s, i) => (
            <Box key={i}>
              <VStack align="start" spacing={1}>
                <Text>🇰🇷 {s.ko}</Text>
                <Text>🇺🇿 {s.uz}</Text>
                <Text>🇷🇺 {s.ru}</Text>
                <Text>🇬🇧 {s.en}</Text>
              </VStack>
            </Box>
          ))}
        </VStack>
      </Box>
    </Container>
  );
}
