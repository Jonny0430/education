// pages/LugatListPage.tsx
"use client";
import {
  Box, Container, SimpleGrid, Input, InputGroup, InputLeftElement, Select, HStack, Text, VStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useMemo, useState } from "react";
import VocabCard from "./VocabCard";
import { VOCABS } from "../../libs/dict";


export default function LugatListPage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<"ALL" | "TOPIK A1" | "Common" | "Greeting">("ALL");

  const list = useMemo(() => {
    return VOCABS.filter(v => {
      if (tag !== "ALL" && !(v.tags ?? []).includes(tag)) return false;
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const hay = `${v.words.ko.text} ${v.words.en.text} ${v.words.uz.text} ${v.romanization}`.toLowerCase();
      return hay.includes(q.toLowerCase());
    });
  }, [q, tag]);

  return (
    <Container maxW="6xl" py={6}>
      <VStack align="stretch" spacing={4} mb={2}>
        <HStack spacing={3} align="center" wrap="wrap">
          <InputGroup maxW="420px">
            <InputLeftElement pointerEvents="none"><SearchIcon color="gray.400" /></InputLeftElement>
            <Input placeholder="Qidirish: 책 / book / kitob / chaek"
                   value={q} onChange={e=>{ setQ(e.target.value); }} />
          </InputGroup>
          <Select value={tag} onChange={e=>{ setTag(e.target.value as never); }} maxW="220px">
            <option value="ALL">Teg: barchasi</option>
            <option value="TOPIK A1">TOPIK A1</option>
            <option value="Common">Common</option>
            <option value="Greeting">Greeting</option>
          </Select>
          <Box flex="1" />
          <Text color="gray.500" fontSize="sm">{list.length} ta natija</Text>
        </HStack>
      </VStack>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={4}>
        {list.map(v => <VocabCard key={v.id} v={v} />)}
      </SimpleGrid>
    </Container>
  );
}
