"use client";
import {
  Box, Card, CardBody, Heading, Text, HStack, VStack, Radio, RadioGroup,
  Button, Divider, Checkbox, useToast, Progress, Badge, Select,
} from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Question, TestPack } from "../../libs/testTypes";

type Result = {
  correct: number;
  total: number;
  wrongList: { q: Question; chosen?: string }[];
};
function mmss(sec: number) {
  const m = Math.floor(sec/60).toString().padStart(2, "0");
  const s = Math.floor(sec%60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function TestRunner({
  test, onExit,
}: { test: TestPack; onExit: (r?: Result) => void }) {
  const toast = useToast();
  const saveKey = test.meta?.savedKey ?? `test_progress_${test.id}`;

  // load saved

const saved = useMemo<Record<string, string>>(() => {
  if (typeof window === "undefined") return {}; // Next.js SSR guard
  try {
    const raw = localStorage.getItem(saveKey);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}, [saveKey]); 

  const [answers, setAnswers] = useState<Record<string,string>>(saved);
  const [idx, setIdx] = useState(0);
  const [immediate, setImmediate] = useState(false);
  const [finished, setFinished] = useState(false);
  const [duration, setDuration] = useState(test.durationSec);
  const [left, setLeft] = useState(duration);

  // Timer
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => { setLeft(duration); }, [duration]);
  useEffect(() => {
    if (finished) return;
    timerRef.current = setInterval(() => {
      setLeft((t) => {
        if (t <= 1) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          clearInterval(timerRef.current!);
          handleSubmit(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  // persist
  useEffect(() => {
    localStorage.setItem(saveKey, JSON.stringify(answers));
  }, [answers, saveKey]);

  const q: Question = test.questions[idx];
  const chosen = answers[q.id || ''];

  const selectOption = (optId: string) => {
    setAnswers((p) => ({ ...p, [q.id]: optId }));
    if (immediate) {
      const ok = optId === q.correctId;
      toast.closeAll();
      toast({
        status: ok ? "success" : "error",
        title: ok ? "To‘g‘ri!" : "Noto‘g‘ri",
        description: ok ? undefined : q.explanation ?? "Izoh mavjud emas",
        duration: 1500,
      });
    }
  };

  const handleSubmit = (auto = false) => {
    const wrongList = test.questions
      .map(qq => ({ q: qq, chosen: answers[qq.id] }))
      .filter(x => x.chosen !== x.q.correctId);

    const result: Result = {
      correct: test.questions.length - wrongList.length,
      total: test.questions.length,
      wrongList,
    };
    setFinished(true);
    if (auto) {
      toast({
        status: "warning",
        title: "Vaqt tugadi",
        description: "Javoblaringiz avtomatik topshirildi.",
      });
    }
    onExit(result);
  };

  const clearCurrent = () => {
    setAnswers((p) => {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      const c = { ...p }; delete c[q.id]; return c;
    });
  };

  const progress = (Object.keys(answers).length / test.questions.length) * 100;

  return (
    <Card variant="outline" borderRadius="2xl">
      <CardBody>
        {/* Header */}
        <HStack justify="space-between" align="start" mb={2} flexWrap="wrap" gap={2}>
          <VStack align="start" spacing={0}>
            <Heading size="sm">{test.title}</Heading>
            <HStack color="gray.400" fontSize="sm">
              <Text>{test.category}</Text><Text>•</Text>
              <Text>{test.topic}</Text><Text>•</Text>
              <Text>{test.level}</Text>
            </HStack>
          </VStack>

          <HStack>
            <Badge colorScheme="blackAlpha">⏱ {mmss(left)}</Badge>
            <Select size="sm" value={duration} onChange={(e)=>{ setDuration(Number(e.target.value)); }}>
              <option value={5*60}>5 min</option>
              <option value={7*60}>7 min</option>
              <option value={10*60}>10 min</option>
              <option value={15*60}>15 min</option>
              <option value={20*60}>20 min</option>
              <option value={30*60}>30 min</option>
            </Select>
            <Checkbox isChecked={immediate} onChange={(e)=>{ setImmediate(e.target.checked); }}>
              Darhol tekshirish
            </Checkbox>
          </HStack>
        </HStack>

        <Progress value={progress} size="xs" borderRadius="md" mb={4} />

        {/* Question */}
        <VStack align="start" spacing={3}>
          <HStack w="full" justify="space-between">
            <Text fontWeight="semibold">Savol {idx+1}/{test.questions.length}</Text>
            <Button size="xs" variant="ghost" onClick={clearCurrent}>Tanlovni tozalash</Button>
          </HStack>

          <Text>{q.stem}</Text>

          <RadioGroup value={chosen || ""} onChange={selectOption}>
            <VStack align="start">
              {q.options.map(o => {
                const isWrong = immediate && chosen === o.id && o.id !== q.correctId;
                const isRight = immediate && o.id === q.correctId && chosen === o.id;
                return (
                  <Radio key={o.id} value={o.id}>
                    <HStack>
                      <Text>{o.text}</Text>
                      {isRight && <Badge colorScheme="green">to‘g‘ri</Badge>}
                      {isWrong && <Badge colorScheme="red">xato</Badge>}
                    </HStack>
                  </Radio>
                );
              })}
            </VStack>
          </RadioGroup>

          {immediate && chosen && chosen !== q.correctId && q.explanation && (
            <Box bg="red.900" color="red.100" p={3} borderRadius="md">
              <Text fontSize="sm">Izoh: {q.explanation}</Text>
            </Box>
          )}
        </VStack>

        <Divider my={4} />

        {/* Nav */}
        <HStack justify="space-between">
          <HStack>
            <Button onClick={()=>{ setIdx(Math.max(0, idx-1)); }} isDisabled={idx===0}>← Oldingi</Button>
            <Button onClick={()=>{ setIdx(Math.min(test.questions.length-1, idx+1)); }} isDisabled={idx===test.questions.length-1}>Keyingi →</Button>
          </HStack>
          <HStack>
            <Button variant="outline" onClick={()=>{ onExit(undefined); }}>Chiqish</Button>
            <Button colorScheme="blue" onClick={()=>{ handleSubmit(false); }}>Topshirish</Button>
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
}
