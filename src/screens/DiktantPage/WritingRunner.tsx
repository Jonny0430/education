"use client";
import {
  Box, Card, CardBody, Heading, Text, HStack, VStack, Textarea, Button, Divider,
  Checkbox, useToast, Progress, Badge, Select
} from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { WritingPack, WritingQuestion } from "../../libs/writingTypes";

type Result = {
  correct: number; total: number;
  wrongList: { q: WritingQuestion; typed?: string }[];
};

const norm = (s: string) => s.normalize("NFC").replace(/\s+/g, "").trim().toLowerCase();
const isRight = (typed: string | undefined, q: WritingQuestion) => {
  if (!typed) return false;
  const cand = [q.answer, ...(q.acceptable ?? [])];
  const t = norm(typed);
  return cand.some(a => norm(a) === t);
};

export default function WritingRunner({ pack, onExit }: {
  pack: WritingPack; onExit: (r?: Result) => void;
}) {
  const toast = useToast();
  const saveKey = pack.meta?.savedKey ?? `writing_progress_${pack.id}`;

  const saved = useMemo<Record<string, string>>(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    try { return JSON.parse(localStorage.getItem(saveKey) ?? "{}"); } catch { return {}; }
  }, [saveKey]);

  const [answers, setAnswers] = useState<Record<string,string>>(saved);
  const [idx, setIdx] = useState(0);
  const [immediate, setImmediate] = useState(false);
  const [duration, setDuration] = useState(pack.durationSec);
  const [left, setLeft] = useState(duration);
  const [finished, setFinished] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(()=>{ setLeft(duration); },[duration]);
  useEffect(() => {
    if (finished) return;
    timerRef.current = setInterval(() => {
      setLeft(t => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (t <= 1) { clearInterval(timerRef.current!); submit(true); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  useEffect(() => {
    localStorage.setItem(saveKey, JSON.stringify(answers));
  }, [answers, saveKey]);

  const q = pack.questions[idx];
  const typed = answers[q.id] ?? "";

  const setTyped = (val: string) => {
    setAnswers(p => ({ ...p, [q.id]: val }));
  };

  const submit = (auto=false) => {
    const wrongList = pack.questions
      .map(qq => ({ q: qq, typed: answers[qq.id] }))
      .filter(x => !isRight(x.typed, x.q));

    const r: Result = {
      correct: pack.questions.length - wrongList.length,
      total: pack.questions.length,
      wrongList,
    };
    setFinished(true);
    if (auto) toast({ status: "warning", title: "Vaqt tugadi", description: "Javoblar topshirildi." });
    onExit(r);
  };

  const clearCurrent = () => { setTyped(""); };

  const progress = (Object.keys(answers).length / pack.questions.length) * 100;
  const mmss = (sec: number) => `${String(Math.floor(sec/60)).padStart(2,"0")}:${String(sec%60).padStart(2,"0")}`;

  const next = () => { setIdx(Math.min(pack.questions.length-1, idx+1)); };
  const prev = () => { setIdx(Math.max(0, idx-1)); };

  const showImmediate = immediate && typed.length > 0;
  const ok = isRight(typed, q);

  return (
    <Card variant="outline" borderRadius="2xl" fontFamily={'inter'}>
      <CardBody>
        {/* Header */}
        <HStack justify="space-between" align="start" mb={2} flexWrap="wrap" gap={2}>
          <VStack align="start" spacing={0}>
            <Heading size="sm">{pack.title}</Heading>
            <HStack color="gray.400" fontSize="sm">
              <Text>{pack.category}</Text><Text>•</Text>
              <Text>{pack.level}</Text>
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
            <Text fontWeight="semibold">Savol {idx+1}/{pack.questions.length}</Text>
            <Button size="xs" variant="ghost" onClick={clearCurrent}>O‘chirish</Button>
          </HStack>

          <Text>{q.prompt}</Text>
          {q.hint && <Badge colorScheme="purple" variant="subtle">Ishora: {q.hint}</Badge>}

          <Textarea
            value={typed}
            onChange={(e)=>{ setTyped(e.target.value); }}
            placeholder="Javobni shu yerga yozing…"
            rows={3}
          />

          {showImmediate && (
            ok ? (
              <Box bg="green.900" color="green.100" p={2} borderRadius="md" fontSize="sm">To‘g‘ri!</Box>
            ) : (
              <Box bg="red.900" color="red.100" p={2} borderRadius="md" fontSize="sm">
                Noto‘g‘ri. To‘g‘ri javob: {q.answer}
              </Box>
            )
          )}
        </VStack>

        <Divider my={4} />

        {/* Nav */}
        <HStack justify="space-between" fontFamily={'inter'}>
          <HStack>
            <Button onClick={prev} isDisabled={idx===0}>← Oldingi</Button>
            <Button onClick={next} isDisabled={idx===pack.questions.length-1}>Keyingi →</Button>
          </HStack>
          <HStack>
            <Button variant="outline" onClick={()=>{ onExit(undefined); }}>Chiqish</Button>
            <Button colorScheme="blue" onClick={()=>{ submit(false); }}>Topshirish</Button>
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
}
