"use client";
import {
  Box, Container, Grid, GridItem, Heading, Text, VStack, Stack, Card, CardBody,
  HStack, Progress, Button, List, ListItem, Badge, Select, Input, InputGroup, InputLeftElement
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useMemo, useState } from "react";
import type { WritingPack } from "../../libs/writingTypes";
import  { WRITING_TESTS } from "../../libs/writingData";
import WritingRunner from "./WritingRunner";


type Result = {
  correct: number; total: number;
  wrongList: { q: { id: string; prompt: string; answer: string; acceptable?: string[] }; typed?: string }[];
} | undefined;

function savedCount(pack: WritingPack) {
  const key = pack.meta?.savedKey ?? `writing_progress_${pack.id}`;
  try {
    const obj = JSON.parse(localStorage.getItem(key) ?? "{}") as Record<string,string>;
    return Object.keys(obj).length;
  } catch { return 0; }
}

function PackCard({ pack, onStart, onContinue, onClear }:{
  pack: WritingPack;
  onStart: (id:string)=>void;
  onContinue: (id:string)=>void;
  onClear: (id:string)=>void;
}) {
  const saved = savedCount(pack);
  const total = pack.questions.length;
  return (
    <Card variant="outline" borderRadius="2xl" fontFamily={'inter'}>
      <CardBody>
        <VStack align="start" spacing={2} mb={2}>
          <Heading as="h3" size="sm">{pack.title}</Heading>
          <HStack color="gray.400" fontSize="sm">
            <Text>{pack.category}</Text><Text>•</Text>
            <Text>{pack.level}</Text><Text>•</Text>
            <Text>{Math.round(pack.durationSec/60)} min</Text>
          </HStack>
          <Text color="gray.400" fontSize="sm">Saqlangan: {saved}/{total}</Text>
          <Progress value={(saved/total)*100} size="xs" w="full" borderRadius="md" />
        </VStack>
        <HStack>
          <Button colorScheme="yellow" onClick={()=>{ onStart(pack.id); }}>Boshlash</Button>
          <Button variant="outline" onClick={()=>{ onContinue(pack.id); }}>Davom ettirish</Button>
          <Button variant="ghost" onClick={()=>{ onClear(pack.id); }}>Tozalash</Button>
          <Badge ml="auto" colorScheme={pack.category === "TOPIK" ? "blue" : (pack.category==="ISHCHI"?"orange":"gray")}>
            {pack.category}
          </Badge>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default function WritingTestsPage() {
  const [cat, setCat] = useState<"ALL"|"TOPIK"|"ISHCHI"|"GENERAL">("ALL");
  const [level, setLevel] = useState<"ALL"|"Boshlang'ich"|"O'rta 1"|"O'rta 2"|"Yuqori"|"Ishchilar">("ALL");
  const [q, setQ] = useState("");
  const [active, setActive] = useState<WritingPack | null>(null);
  const [result, setResult] = useState<Result>(undefined);

  const filtered = useMemo(() => {
    return WRITING_TESTS.filter(p => {
      if (cat !== "ALL" && p.category !== cat) return false;
      if (level !== "ALL" && p.level !== level) return false;
      if (q) {
        const hay = `${p.title} ${p.category} ${p.level}`.toLowerCase();
        return hay.includes(q.toLowerCase());
      }
      return true;
    });
  }, [cat, level, q]);

  const start = (id:string) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const pack = WRITING_TESTS.find(x=>x.id===id)!;
    setActive(pack); setResult(undefined);
  };
  const cont = start;
  const clear = (id:string) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const pack = WRITING_TESTS.find(x=>x.id===id)!;
    const key = pack.meta?.savedKey ?? `writing_progress_${pack.id}`;
    localStorage.removeItem(key);
  };

  return (
    <Container maxW="7xl" py={6} fontFamily={'inter'}>
      <VStack align="start" spacing={1} mb={4}>
        <Heading size="lg">쓰기 — yozma testlar</Heading>
        <Text color="gray.400">So‘z/gapni koreyscha yozish, imlo va qoidalar.</Text>
      </VStack>

      {/* Filtrlar */}
      <HStack mb={4} spacing={3} flexWrap="wrap">
        <Select value={cat} onChange={e=>{ setCat(e.target.value as never); }} w="220px">
          <option value="ALL">Bo‘lim: hammasi</option>
          <option value="TOPIK">TOPIK</option>
          <option value="ISHCHI">Ishchilar</option>
          <option value="GENERAL">General</option>
        </Select>
        <Select value={level} onChange={e=>{ setLevel(e.target.value as never); }} w="240px">
          <option value="ALL">Daraja: barchasi</option>
          <option value="Boshlang'ich">Boshlang‘ich</option>
          <option value="O'rta 1">O‘rta 1</option>
          <option value="O'rta 2">O‘rta 2</option>
          <option value="Yuqori">Yuqori</option>
          <option value="Ishchilar">Ishchilar</option>
        </Select>
        <InputGroup maxW="320px">
          <InputLeftElement pointerEvents="none"><SearchIcon color="gray.400" /></InputLeftElement>
          <Input value={q} onChange={e=>{ setQ(e.target.value); }} placeholder="Qidirish…" />
        </InputGroup>
        <Box flex="1" />
        <Text color="gray.500" fontSize="sm">{filtered.length} ta to‘plam</Text>
      </HStack>

      <Grid templateColumns={{ base: "1fr", lg: "360px 1fr" }} gap={4}>
        {/* CHAP — ro‘yxat */}
        <GridItem>
          <Stack spacing={3}>
            {filtered.map(p => (
              <PackCard key={p.id} pack={p} onStart={start} onContinue={cont} onClear={clear} />
            ))}
          </Stack>
        </GridItem>

        {/* O‘NG — aktiv test / natija */}
        <GridItem>
          <VStack align="stretch" spacing={4}>
            {active ? (
              <WritingRunner
                pack={active}
                onExit={(r)=>{ setResult(r); setActive(null); }}
              />
            ) : (
              <Card variant="outline" borderRadius="2xl">
                <CardBody><Text color="gray.400">Yozma testni tanlang yoki davom ettiring.</Text></CardBody>
              </Card>
            )}

            {result && (
              <Card variant="outline" borderRadius="2xl">
                <CardBody>
                  <Heading size="sm" mb={2}>Natija</Heading>
                  <HStack mb={2} spacing={4} align="center">
                    <Text>To‘g‘ri: <b>{result.correct}</b></Text>
                    <Text>Jami: <b>{result.total}</b></Text>
                    <Text>Foiz:</Text>
                    <Box flex="1">
                      <Progress
                        value={(result.correct/result.total)*100}
                        size="sm"
                        borderRadius="md"
                        colorScheme={(result.correct/result.total)>=0.6?"green":"red"}
                      />
                    </Box>
                  </HStack>

                  <Box mt={4}>
                    <Heading size="xs" mb={2}>Xatolar</Heading>
                    {result.wrongList.length===0 ? (
                      <Text color="green.300">Zo‘r! Xato yo‘q.</Text>
                    ) : (
                      <List spacing={3}>
                        {result.wrongList.map((w,i)=>(
                          <ListItem key={w.q.id}>
                            <VStack align="start" spacing={1}>
                              <Text><b>{i+1}.</b> {w.q.prompt}</Text>
                              <HStack color="red.300"><Badge colorScheme="red">Siz yozdingiz:</Badge><Text>{w.typed ?? "—"}</Text></HStack>
                              <HStack color="green.300"><Badge colorScheme="green">To‘g‘ri:</Badge><Text>{w.q.answer}</Text></HStack>
                            </VStack>
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </Box>

                  <HStack mt={4} justify="flex-end">
                    <Button onClick={()=>{ setResult(undefined); }} variant="outline">Review rejimi</Button>
                    <Button onClick={()=>{ setResult(undefined); }} colorScheme="blue">Qayta boshlash</Button>
                  </HStack>
                </CardBody>
              </Card>
            )}
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
}
