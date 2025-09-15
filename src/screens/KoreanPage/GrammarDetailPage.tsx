/* eslint-disable @typescript-eslint/no-unnecessary-condition */
// pages/GrammarDetailPage.tsx
"use client";
import {
  Container, HStack, VStack, Heading, Text, Badge, Box, SimpleGrid,
  List, ListItem, Divider, Button, RadioGroup, Radio, useToast
} from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GRAMMAR } from "../../libs/grammar";
import { Link, useParams } from "react-router";


export default function GrammarDetailPage() {
  const { id } = useParams();
  const toast = useToast();

  const idx = GRAMMAR.findIndex(g => g.id === id);
  const g = idx >= 0 ? GRAMMAR[idx] : undefined;
  const prev = GRAMMAR[idx - 1];
  const next = GRAMMAR[idx + 1];

  if (!g) {
    return (
      <Container maxW="6xl" py={6}>
        <Heading size="md" mb={4}>Grammar topilmadi</Heading>
        <Button as={Link} to="/grammar" leftIcon={<FiChevronLeft />}>Ro‘yxatga qaytish</Button>
      </Container>
    );
  }

  return (
    <Container maxW="6xl" py={6}>
      {/* Header */}
      <HStack justify="space-between" align="start" mb={4} wrap="wrap" gap={2}>
        <VStack align="start" spacing={1}>
          <HStack align="center" spacing={3}>
            <Heading size="lg">{g.title}</Heading>
            <Badge>{g.level}</Badge>
            {g.tags?.map(t => <Badge key={t} colorScheme="purple" variant="subtle">{t}</Badge>)}
          </HStack>
          <Text color="gray.400">{g.meaning}</Text>
        </VStack>
        <HStack>
          {prev && <Button as={Link} to={`/grammar/${prev.id}`} leftIcon={<FiChevronLeft />}>Oldingi</Button>}
          {next && <Button as={Link} to={`/grammar/${next.id}`} rightIcon={<FiChevronRight />} colorScheme="red">Keyingi</Button>}
        </HStack>
      </HStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
        <Box borderWidth="1px" borderRadius="xl" p={4}>
          <Heading size="sm" mb={2}>Shakllar</Heading>
          <List spacing={1}>{g.forms.map(f => <ListItem key={f}>• {f}</ListItem>)}</List>
          <Divider my={3} />
          <Heading size="sm" mb={2}>Qachon ishlatiladi</Heading>
          <Text>{g.usage}</Text>
          {g.compare && (<><Divider my={3} /><Heading size="sm" mb={2}>Taqqoslash</Heading><Text>{g.compare}</Text></>)}
          {g.notes && g.notes.length>0 && (
            <>
              <Divider my={3} />
              <Heading size="sm" mb={2}>Eslatma</Heading>
              <List spacing={1}>{g.notes.map((n,i)=><ListItem key={i}>– {n}</ListItem>)}</List>
            </>
          )}
        </Box>

        <Box borderWidth="1px" borderRadius="xl" p={4}>
          <Heading size="sm" mb={2}>Misollar</Heading>
          <List spacing={3}>
            {g.examples.map((s, i) => (
              <ListItem key={i}>
                <VStack align="start" spacing={1}>
                  <Text>🇰🇷 {s.ko}</Text>
                  <Text color="gray.300">🇺🇿 {s.uz}</Text>
                  {s.ru && <Text color="gray.300">🇷🇺 {s.ru}</Text>}
                  {s.en && <Text color="gray.300">🇬🇧 {s.en}</Text>}
                </VStack>
              </ListItem>
            ))}
          </List>
        </Box>
      </SimpleGrid>

      {/* Mini-quiz */}
      {g.quiz && g.quiz.length > 0 && (
        <Box mt={5} borderWidth="1px" borderRadius="xl" p={4}>
          <Heading size="sm" mb={3}>Mini-quiz</Heading>
          {g.quiz.map((q) => (
            <Box key={q.id} mb={4}>
              <Text mb={2}>{q.question}</Text>
              <RadioGroup onChange={(val)=>{
                const ok = Number(val) === q.correctIndex;
                toast({
                  status: ok ? "success" : "error",
                  title: ok ? "To‘g‘ri!" : "Noto‘g‘ri",
                  description: ok ? undefined : q.explain ?? "Izoh mavjud emas",
                });
              }}>
                <VStack align="start">
                  {q.options.map((opt, i) => (
                    <Radio key={i} value={String(i)}>{opt}</Radio>
                  ))}
                </VStack>
              </RadioGroup>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
}
