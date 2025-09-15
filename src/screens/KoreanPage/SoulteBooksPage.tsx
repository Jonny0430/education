// pages/SoulteBooksPage.tsx
"use client";
import {
  Container, VStack, Heading, Text, HStack, Select, Input, InputGroup, InputLeftElement,
  SimpleGrid
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useMemo, useState } from "react";
import { BOOKS, type Level, type Series } from "../../libs/Books";
import BookCard from "./BookCard";


export default function SoulteBooksPage() {
  const [series, setSeries] = useState<"ALL" | Series>("ALL");
  const [level, setLevel] = useState<"ALL" | Level>("ALL");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return BOOKS.filter(b => {
      if (series !== "ALL" && b.series !== series) return false;
      if (level !== "ALL" && b.level !== level) return false;
      if (q) {
        const hay = `${b.title} ${b.series} ${b.kind} ${b.level}`.toLowerCase();
        return hay.includes(q.toLowerCase());
      }
      return true;
    });
  }, [series, level, q]);

  return (
    <Container maxW="6xl" py={6}>
      <VStack align="stretch" spacing={4} mb={2}>
        <HStack justify="space-between" wrap="wrap" gap={3}>
          <Heading size="lg">Koreys kitoblar</Heading>
          <Text color="gray.500">{list.length} ta kitob</Text>
        </HStack>
        <HStack gap={3} wrap="wrap">
          <Select maxW="220px" value={series} onChange={(e)=>{ setSeries(e.target.value as never); }}>
            <option value="ALL">Seriya: barchasi</option>
            <option value="SNU">SNU</option>
            <option value="Integrated">Integrated</option>
            <option value="GrammarInUse">GrammarInUse</option>
            <option value="TOPIK">TOPIK</option>
          </Select>
          <Select maxW="220px" value={level} onChange={(e)=>{ setLevel(e.target.value as never); }}>
            <option value="ALL">Daraja: barchasi</option>
            <option value="Boshlang'ich">Boshlang‘ich</option>
            <option value="O'rta 1">O‘rta 1</option>
            <option value="O'rta 2">O‘rta 2</option>
            <option value="Yuqori">Yuqori</option>
          </Select>
          <InputGroup maxW="360px">
            <InputLeftElement pointerEvents="none"><SearchIcon color="gray.400" /></InputLeftElement>
            <Input placeholder="Qidirish: sarlavha/seriya..."
                   value={q} onChange={(e)=>{ setQ(e.target.value); }} />
          </InputGroup>
        </HStack>
      </VStack>

      <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
        {list.map(b => <BookCard key={b.id} b={b} />)}
      </SimpleGrid>
    </Container>
  );
}
