"use client";
import { useMemo, useState } from "react";
import {
  Box, Container, Heading, Text, Card, CardBody, HStack, VStack, Button,
  Progress, Badge, Select, Grid, GridItem, Input, InputGroup, InputLeftElement,
  Tabs, TabList, Tab, TabPanels, TabPanel
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
// import type { Level, Section, TestPack } from "../types/topikTypes";
// import { ALL_PACKS } from "../data/topikPacks";
// import RunnerModal from "../components/RunnerModal";
import { useDisclosure } from "@chakra-ui/react";
import type { Level, Section, TestPack } from "../../libs/topikTypes";
import { ALL_PACKS } from "../../data/topikPacks";
import RunnerModal from "./RunnerModal";

export default function TopikSuiteTTS() {
  const [level, setLevel] = useState<"ALL" | Level>("ALL");
  const [section, setSection] = useState<"ALL" | Section>("ALL");
  const [q, setQ] = useState("");
  const [active, setActive] = useState<TestPack | null>(null);
  const run = useDisclosure();

  const filtered = useMemo(() => {
    return ALL_PACKS.filter(p => {
      if (level !== "ALL" && p.level !== level) return false;
      if (section !== "ALL" && p.section !== section) return false;
      if (q) {
        const hay = `${p.title} ${p.level} ${p.section}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [level, section, q]);

  const bySection = useMemo(() => {
    const m: Record<Section, TestPack[]> = { Vocabulary: [], Grammar: [], Reading: [], Listening: [] };
    for (const p of filtered) m[p.section].push(p);
    return m;
  }, [filtered]);

  const onStart = (id: string) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const pack = ALL_PACKS.find(x => x.id === id)!;
    setActive(pack);
    run.onOpen();
  };

  const onCloseRunner = () => {
    run.onClose();
    setActive(null);
  };

  return (
    <Container maxW="7xl" py={6} fontFamily={'serif'} >
      <VStack align="start" spacing={1} mb={4}>
        <Heading size="lg" fontFamily={'serif'}>TOPIK testlar — bo‘limlarga ajratilgan</Heading>
        <Text color="gray.500">TOPIK I/II | Vocabulary • Grammar • Reading • Listening | Google TTS bilan o‘qib berish.</Text>
      </VStack>

      <HStack spacing={3} mb={4} flexWrap="wrap" fontFamily={'serif'}>
        <Select value={level} onChange={e=>{ setLevel(e.target.value as never); }} w="200px">
          <option value="ALL">Daraja: hammasi</option>
          <option value="TOPIK I">TOPIK I</option>
          <option value="TOPIK II">TOPIK II</option>
        </Select>
        <Select value={section} onChange={e=>{ setSection(e.target.value as never); }} w="220px">
          <option value="ALL">Bo‘lim: hammasi</option>
          <option value="Vocabulary">Vocabulary</option>
          <option value="Grammar">Grammar</option>
          <option value="Reading">Reading</option>
          <option value="Listening">Listening</option>
        </Select>
        <InputGroup maxW="320px">
          <InputLeftElement pointerEvents="none"><SearchIcon color="gray.400" /></InputLeftElement>
          <Input placeholder="Qidirish…" value={q} onChange={e=>{ setQ(e.target.value); }} />
        </InputGroup>
        <Box flex="1" />
        <Text color="gray.500" fontSize="sm">{filtered.length} ta to‘plam</Text>
      </HStack>

      <Tabs colorScheme="blue" variant="enclosed" fontFamily={'serif'}>
        <TabList>
          <Tab>Vocabulary</Tab>
          <Tab>Grammar</Tab>
          <Tab>Reading</Tab>
          <Tab>Listening</Tab>
        </TabList>
        <TabPanels>
          {(["Vocabulary","Grammar","Reading","Listening"] as Section[]).map(sec => (
            <TabPanel key={sec}>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" , lg: "repeat(3, 1fr)"}} gap={4}>
                {bySection[sec].map(p => (
                  <GridItem key={p.id}>
                    <Card variant="outline" borderRadius="2xl">
                      <CardBody>
                        <VStack align="start" spacing={2} mb={2}>
                          <Heading as="h3" size="sm">{p.title}</Heading>
                          <HStack color="gray.500" fontSize="sm">
                            <Badge>{p.level}</Badge>
                            <Text>•</Text>
                            <Badge variant="subtle" colorScheme="purple">{p.section}</Badge>
                            <Text>•</Text>
                            <Text>{Math.round(p.durationSec/60)} min</Text>
                          </HStack>
                          <Text color="gray.500" fontSize="sm">
                            Saqlangan: {(() => {
                              try {
                                const raw = localStorage.getItem(p.savedKey ?? `test_progress_${p.id}`);
                                if (!raw) return 0;
                                const obj = JSON.parse(raw) as Record<string, unknown>;
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
                                const ans = (obj as any).answers as Record<string,string> | undefined;
                                return ans ? Object.keys(ans).length : 0;
                              } catch { return 0; }
                            })()}/{p.questions.length}
                          </Text>
                          <Progress
                            value={(() => {
                              try {
                                const raw = localStorage.getItem(p.savedKey ?? `test_progress_${p.id}`);
                                if (!raw) return 0;
                                const obj = JSON.parse(raw) as Record<string, unknown>;
                                 // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
                                const ans = (obj as any).answers as Record<string,string> | undefined;
                                const count = ans ? Object.keys(ans).length : 0;
                                return (count / p.questions.length) * 100;
                              } catch { return 0; }
                            })()}
                            size="xs" w="full" borderRadius="md"
                          />
                        </VStack>
                        <HStack>
                          <Button colorScheme="yellow" onClick={() => { onStart(p.id); }}>Boshlash</Button>
                          <Button variant="outline" onClick={() => { onStart(p.id); }}>Davom ettirish</Button>
                          <Button variant="ghost" onClick={()=>{
                            const key = p.savedKey ?? `test_progress_${p.id}`;
                            localStorage.removeItem(key);
                          }}>
                            Tozalash
                          </Button>
                        </HStack>
                      </CardBody>
                    </Card>
                  </GridItem>
                ))}
              </Grid>
              {bySection[sec].length === 0 && (
                <Box p={6} textAlign="center" color="gray.500">Bu bo‘limda hozircha to‘plam yo‘q.</Box>
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>

      <RunnerModal pack={active} isOpen={run.isOpen} onClose={()=>{ onCloseRunner(); }} />
    </Container>
  );
}
