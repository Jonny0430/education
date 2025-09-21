/* eslint-disable @typescript-eslint/no-unnecessary-condition */
// src/components/RunnerModal.tsx
"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Box, Heading, Text, Card, CardBody, HStack, VStack, Button, RadioGroup, Radio,
  Progress, Badge, Divider, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,
  ModalFooter, IconButton, Tooltip, Slider, SliderTrack, SliderFilledTrack, SliderThumb
} from "@chakra-ui/react";
import { TimeIcon, RepeatIcon, TriangleDownIcon } from "@chakra-ui/icons";
import type { Result, TestPack, TopikQuestion } from "../../libs/topikTypes";
import { useSpeech } from "../../hooks/useSpeech";


export default function RunnerModal({
  pack,
  isOpen,
  onClose,
}: {
  pack: TestPack | null;
  isOpen: boolean;
  onClose: (result?: Result) => void;
}) {
  const toast = useToast();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState<number>(pack?.durationSec ?? 0);
  const [finished, setFinished] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const speech = useSpeech({ langStartsWith: "ko", preferFemale: true, googleOnly: true });

  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen || !pack) return;
    setAnswers({});
    setFinished(false);
    setResult(null);
    setTimeLeft(pack.durationSec);
  }, [isOpen, pack]);

  useEffect(() => {
    if (!isOpen || !pack) return;
    if (finished) return;
    if (timeLeft <= 0) { handleSubmit(true); return; }
    timerRef.current = window.setInterval(() => { setTimeLeft((s) => s - 1); }, 1000);
    return () => { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } };
  }, [isOpen, pack, finished, timeLeft]);

  useEffect(() => {
    if (!pack) return;
    const key = pack.savedKey ?? `test_progress_${pack.id}`;
    localStorage.setItem(key, JSON.stringify({ answers, timeLeft }));
  }, [answers, timeLeft, pack]);

  const total = pack?.questions.length ?? 0;
  const doneCount = useMemo(() => Object.keys(answers).filter(k => !!answers[k]).length, [answers]);

  const fmtTime = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const ss = (s % 60).toString().padStart(2, "0");
    return `${m}:${ss}`;
  };

  const handleSubmit = (auto = false) => {
    if (!pack) return;
    const wrongList: Result["wrongList"] = [];
    let correct = 0;
    for (const q of pack.questions) {
      const chosen = answers[q.id];
      if (chosen === q.correctId) correct++; else wrongList.push({ q, chosen });
    }
    const res: Result = { correct, total, wrongList };
    setFinished(true); setResult(res);
    toast({ title: auto ? "Vaqt tugadi" : "Topshirildi", status: auto ? "warning" : "success" });
  };

  const handleReset = () => {
    if (!pack) return;
    setAnswers({});
    setTimeLeft(pack.durationSec);
    setFinished(false);
    setResult(null);
    const key = pack.savedKey ?? `test_progress_${pack.id}`;
    localStorage.removeItem(key);
    speech.cancel();
  };

  const buildQuestionText = (q: TopikQuestion, idx: number, includeOptions = true) => {
    const stem = q.stem.replace(/\s+/g, " ").trim();
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    if (!includeOptions) return `문제 ${idx + 1}. ${stem}`;
    const opts = q.options.map((o, i) => `${String.fromCharCode(65 + i)}번, ${o.text}.`).join(" ");
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `문제 ${idx + 1}. ${stem} 선택지: ${opts}`;
  };

  const speakAll = () => {
    if (!pack) return;
    if (!speech.supported) { toast({ title: "Brauzer TTS ni qo‘llamaydi", status: "info" }); return; }
    speech.cancel();
    let i = 0;
    const speakNext = () => {
      if (!pack || i >= pack.questions.length) return;
      const text = buildQuestionText(pack.questions[i], i, true);
      i += 1; speech.speak(text, { onend: speakNext });
    };
    speakNext();
  };

  return (
    <Modal isOpen={isOpen} onClose={() => { onClose(undefined); }}  size="6xl" scrollBehavior="inside" isCentered >
      <ModalOverlay />
      <ModalContent borderRadius="2xl" overflow="hidden">
        <ModalHeader>
          <HStack justify="space-between" align="start">
            <VStack align="start" spacing={0} fontFamily={'serif'}>
              <Heading size="md">{pack?.title}</Heading>
              <HStack color="gray.500" fontSize="sm">
                <Badge>{pack?.level}</Badge>
                <Text>•</Text>
                <Badge variant="subtle" colorScheme="purple">{pack?.section}</Badge>
                <Text>•</Text>
                <Text>{Math.round((pack?.durationSec ?? 0) / 60)} min</Text>
              </HStack>
            </VStack>

            <VStack align="end" spacing={2} minW={{ base: "auto", md: "340px" }} fontFamily={'serif'}>
              <HStack>
                <Tooltip label="Qayta boshlash">
                  <IconButton aria-label="reset" icon={<RepeatIcon />} onClick={handleReset} variant="outline" size="sm" />
                </Tooltip>
                <HStack px={3} py={1.5} borderWidth="1px" borderRadius="md" spacing={2} color={timeLeft < 60 ? "red.400" : "gray.700"}>
                  <TimeIcon /><Text fontFamily="mono" fontWeight="bold">{fmtTime(timeLeft)}</Text>
                </HStack>
              </HStack>

              <HStack flexWrap="wrap" justify="flex-end">
                <Tooltip label={speech.supported ? "Barcha savollarni o‘qish (Google TTS)" : "TTS qo‘llab-quvvatlanmaydi"}>
                  <Button size="sm" onClick={speakAll}>🔊 O‘qib ber (hammasi)</Button>
                </Tooltip>
                <Button size="sm" onClick={speech.pause}  isDisabled={!speech.supported || !speech.speaking || speech.paused}>Pauza</Button>
                <Button size="sm" onClick={speech.resume} isDisabled={!speech.supported || !speech.paused}>Davom</Button>
                <Button size="sm" variant="outline" onClick={speech.cancel} isDisabled={!speech.supported || (!speech.speaking && !speech.paused)}>To‘xtatish</Button>
              </HStack>

              <HStack w={{ base: "100%", md: "340px" }}>
                <Text fontSize="sm" color="gray.500" minW="56px">Tezlik</Text>
                <Slider aria-label="speech-rate" min={0.7} max={1.3} step={0.05} value={speech.rate} onChange={speech.setRate}>
                  <SliderTrack><SliderFilledTrack /></SliderTrack>
                  <SliderThumb boxSize={4}><TriangleDownIcon /></SliderThumb>
                </Slider>
              </HStack>
            </VStack>
          </HStack>
        </ModalHeader>

        <ModalBody pb={6} fontFamily={'serif'}>
          {!pack ? <Text fontFamily={'serif'}>Test yuklanmoqda…</Text> : (
            <>
              <Progress value={(doneCount / (pack?.questions.length ?? 1)) * 100} size="sm" borderRadius="md" mb={4} />
              <Text color="gray.500" mb={4}>Belgilangani: {doneCount} / {pack?.questions.length ?? 0}</Text>

              <VStack align="stretch" spacing={4}>
                {pack.questions.map((q, idx) => (
                  <Card key={q.id} variant="outline" borderRadius="xl">
                    <CardBody>
                      <HStack justify="space-between" align="start" mb={2}>
                        <HStack spacing={2}>
                          <Badge colorScheme="blue">Q{idx + 1}</Badge>
                          {q.tags && <HStack spacing={1}>{q.tags.map(t => <Badge key={t} variant="subtle">{t}</Badge>)}</HStack>}
                        </HStack>
                        <Tooltip label="Savolni o‘qish (Google TTS)">
                          <Button
                            size="xs" variant="ghost"
                            onClick={() => { speech.cancel(); speech.speak(buildQuestionText(q, idx, true)); }}
                            isDisabled={!speech.supported}
                          >
                            🔊 O‘qish
                          </Button>
                        </Tooltip>
                      </HStack>

                      <Box whiteSpace="pre-wrap" mb={3}><Text>{q.stem}</Text></Box>

                      <RadioGroup value={answers[q.id] ?? ""} onChange={(v: string) => { setAnswers(prev => ({ ...prev, [q.id]: v })); }}>
                        <VStack align="stretch" spacing={2}>
                          {q.options.map(o => <Radio key={o.id} value={o.id}>{o.text}</Radio>)}
                        </VStack>
                      </RadioGroup>

                      {finished && q.explanation && (
                        <>
                          <Divider my={3} />
                          <Box bg="gray.800" color="gray.100" border="1px solid" borderColor="whiteAlpha.300" p={3} borderRadius="md" fontSize="sm" lineHeight="1.6">
                            <Text fontWeight="semibold" mb={1}>Izoh</Text>
                            <Text>{q.explanation}</Text>
                          </Box>
                        </>
                      )}
                    </CardBody>
                  </Card>
                ))}
              </VStack>
            </>
          )}
        </ModalBody>

        <ModalFooter>
          <HStack w="full" justify="space-between" fontFamily={'serif'}>
            <Button variant="ghost" onClick={() => { onClose(undefined); }}>Yopish</Button>
            <HStack>
              <Button variant="outline" onClick={handleReset}>Tozalash</Button>
              <Button colorScheme="blue" onClick={() => { handleSubmit(false); }}>Topshirish</Button>
            </HStack>
          </HStack>
        </ModalFooter>

        {finished && result && (
          <Box px={6} pb={6} fontFamily={'serif'}>
            <Divider mb={4} />
            <Heading size="sm" mb={2}>Natija</Heading>
            <HStack mb={2} spacing={4} align="center">
              <Text>To‘g‘ri: <b>{result.correct}</b></Text>
              <Text>Jami: <b>{result.total}</b></Text>
            </HStack>
            <Progress value={(result.correct/result.total)*100} size="sm" borderRadius="md" colorScheme={(result.correct/result.total)>=0.6?"green":"red"} />
            <Box mt={4}>
              <Heading size="xs" mb={2}>Xatolar</Heading>
              {result.wrongList.length === 0 ? (
                <Text color="green.400">Ajoyib! Xato yo‘q.</Text>
              ) : (
                <VStack align="stretch" spacing={2}>
                  {result.wrongList.map((w,i)=>{
                    const correct = w.q.options.find(o=>o.id===w.q.correctId)?.text ?? "";
                    const chosen  = w.q.options.find(o=>o.id===w.chosen)?.text ?? "—";
                    const first   = w.q.stem.split("\n")[0];
                    return (
                      <Box key={w.q.id} p={2} borderWidth="1px" borderRadius="md">
                        <Text><b>{i+1}.</b> {first.slice(0,80)}{first.length>80?"…":""}</Text>
                        <HStack mt={1} spacing={4}>
                          <Text color="red.300">Sizning javobingiz: {chosen}</Text>
                          <Text color="green.300">To‘g‘ri: {correct}</Text>
                        </HStack>
                      </Box>
                    );
                  })}
                </VStack>
              )}
            </Box>
          </Box>
        )}
      </ModalContent>
    </Modal>
  );
}
