/* eslint-disable @typescript-eslint/no-non-null-assertion */
"use client";
import {
  Box, Container, Grid, GridItem, Heading, Text, VStack, Stack, Card, CardBody,
  HStack, Progress, Button, List, ListItem, Badge,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import type { FilterState } from "./Test";
import type { TestPack } from "../../libs/testTypes";
import TestRunner from "./TestRunner";
import TestCard from "./TestCard";
import TestFilters from "./Test";
import { TESTS } from "../../libs/testData";

type Result = {
  correct: number;
  total: number;
  wrongList: { q: { id: string; stem: string; options: { id: string; text: string }[]; correctId: string; explanation?: string }; chosen?: string }[];
} | undefined;

export default function TestsPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: "HAMMASI",
    level: "HAMMASI",
    query: "",
  });

  const [active, setActive] = useState<TestPack | null>(null);
  const [result, setResult] = useState<Result>(undefined);

  const filtered = useMemo(() => {
    return TESTS.filter(t => {
      if (filters.category !== "HAMMASI" && t.category !== filters.category) return false;
      if (filters.level !== "HAMMASI" && t.level !== filters.level) return false;
      if (filters.query) {
        const q = filters.query.toLowerCase();
        const hay = `${t.title} ${t.category} ${t.topic} ${t.level}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [filters]);

  const start = (id: string) => {
    const pack = TESTS.find(x => x.id === id)!;
    setActive(pack);
    setResult(undefined);
  };
  const cont = start;

  const clear = (id: string) => {
    const pack = TESTS.find(x => x.id === id)!;
    const key = pack.meta?.savedKey ?? `test_progress_${pack.id}`;
    localStorage.removeItem(key);
    // force refresh natija/progress ko‘rsatkichlari uchun — hech narsa qilmasak ham (TestCard o‘zi storage eventni tinglaydi)
  };

  return (
    <Container maxW="7xl" py={6} fontFamily={'inter'}>
      <VStack align="start" spacing={1} mb={4}>
        <Heading size="lg">Koreys tili — Ilk testlar to‘plami</Heading>
        <Text color="gray.400">TOPIK va Ishchilarga mo‘ljallangan bo‘limlar. Daraja va qidiruv bo‘yicha filtrlash mumkin.</Text>
      </VStack>

      {/* Filters */}
      <Box mb={4}>
        <TestFilters value={filters} onChange={setFilters} />
      </Box>

      <Grid templateColumns={{ base: "1fr", lg: "360px 1fr" }} gap={4}>
        {/* LEFT — test to‘plamlari */}
        <GridItem>
          <Stack spacing={3}>
            {filtered.map(t => (
              <TestCard
                key={t.id}
                test={t}
                onStart={start}
                onContinue={cont}
                onClear={clear}
              />
            ))}
          </Stack>
        </GridItem>

        {/* RIGHT — aktiv test / natija */}
        <GridItem>
          <VStack align="stretch" spacing={4}>
            {/* Aktiv test paneli */}
            {active ? (
              <TestRunner
                test={active}
                onExit={(r) => { setResult(r); setActive(null); }}
              />
            ) : (
              <Card variant="outline" borderRadius="2xl">
                <CardBody>
                  <Text color="gray.400">Test tanlang yoki davom ettiring.</Text>
                </CardBody>
              </Card>
            )}

            {/* Natija paneli */}
            {result && (
              <Card variant="outline" borderRadius="2xl" fontFamily={'inter'}>
                <CardBody>
                  <Heading size="sm" mb={2}>Natija</Heading>
                  <HStack mb={2} spacing={4} align="center">
                    <Text>To‘g‘ri javoblar: <b>{result.correct}</b></Text>
                    <Text>Umumiy savollar: <b>{result.total}</b></Text>
                    <Text>Foiz:</Text>
                    <Box flex="1">
                      <Progress
                        value={(result.correct / result.total) * 100}
                        size="sm" borderRadius="md"
                        colorScheme={(result.correct / result.total) >= 0.6 ? "green" : "red"}
                      />
                    </Box>
                  </HStack>

                  {/* Xatolar ro‘yxati */}
                  <Box mt={4}>
                    <Heading size="xs" mb={2}>Xatolar</Heading>
                    {result.wrongList.length === 0 ? (
                      <Text color="green.300">Ajoyib! Xato yo‘q.</Text>
                    ) : (
                      <List spacing={3}>
                        {result.wrongList.map((w, i) => {
                          const correctText = w.q.options.find(o => o.id === w.q.correctId)?.text;
                          const chosenText = w.q.options.find(o => o.id === w.chosen)?.text;
                          return (
                            <ListItem key={w.q.id}>
                              <VStack align="start" spacing={1}>
                                <Text><b>{i+1}.</b> {w.q.stem}</Text>
                                <HStack color="red.300">
                                  <Badge colorScheme="red">Sizning javobingiz:</Badge>
                                  <Text>{chosenText ?? "—"}</Text>
                                </HStack>
                                <HStack color="green.300">
                                  <Badge colorScheme="green">To‘g‘ri javob:</Badge>
                                  <Text>{correctText}</Text>
                                </HStack>
                                {w.q.explanation && (
                                  <Box bg="blackAlpha.400" p={2} borderRadius="md">
                                    <Text fontSize="sm" color="gray.200">
                                      Izoh: {w.q.explanation}
                                    </Text>
                                  </Box>
                                )}
                              </VStack>
                            </ListItem>
                          );
                        })}
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
