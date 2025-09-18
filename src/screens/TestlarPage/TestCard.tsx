"use client";
import {
  Card, CardBody, Heading, Text, HStack, Button, Badge, Progress, VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import type { TestPack } from "../../libs/testTypes";

function savedCount(test: TestPack) {
  const key = test.meta?.savedKey ?? `test_progress_${test.id}`;
  const raw = localStorage.getItem(key);
  if (!raw) return 0;
  try {
    const obj = JSON.parse(raw) as Record<string, string>;
    return Object.keys(obj).length;
  } catch {
    return 0;
  }
}

export default function TestCard({
  test, onStart, onContinue, onClear,
}: {
  test: TestPack;
  onStart: (id: string) => void;
  onContinue: (id: string) => void;
  onClear: (id: string) => void;
}) {
  const [saved, setSaved] = useState(0);

  useEffect(() => {
    setSaved(savedCount(test));
    const onStorage = () => { setSaved(savedCount(test)); };
    window.addEventListener("storage", onStorage);
    return () => { window.removeEventListener("storage", onStorage); };
  }, [test.id]);

  const total = test.questions.length;
  return (
    <Card variant="outline" borderRadius="2xl" fontFamily={'inter'}>
      <CardBody>
        <VStack align="start" spacing={2} mb={2}>
          <Heading as="h3" size="sm">{test.title}</Heading>
          <HStack color="gray.400" fontSize="sm">
            <Text>{test.category}</Text>
            <Text>•</Text>
            <Text>{test.topic}</Text>
            <Text>•</Text>
            <Text>{test.level}</Text>
            <Text>•</Text>
            <Text>{Math.round(test.durationSec/60)} min</Text>
          </HStack>
          <Text color="gray.400" fontSize="sm">Saqlangan: {saved}/{total}</Text>
          <Progress value={(saved/total)*100} size="xs" w="full" borderRadius="md" />
        </VStack>
        <HStack>
          <Button colorScheme="yellow" onClick={() => { onStart(test.id); }}>Boshlash</Button>
          <Button variant="outline" onClick={() => { onContinue(test.id); }}>Davom ettirish</Button>
          <Button variant="ghost" onClick={() => { onClear(test.id); }}>Tozalash</Button>
          <Badge ml="auto" colorScheme={test.category === "TOPIK" ? "blue" : "orange"}>
            {test.category === "TOPIK" ? "TOPIK" : "Ishchi"}
          </Badge>
        </HStack>
      </CardBody>
    </Card>
  );
}
