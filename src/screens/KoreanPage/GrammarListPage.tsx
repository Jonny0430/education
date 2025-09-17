// pages/GrammarListPage.tsx
"use client";
import {
  Container, VStack, HStack, Heading, Text, SimpleGrid,
  Select, Input, InputGroup, InputLeftElement, Button, Center
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useMemo, useState } from "react";
import { GRAMMAR, type GLevel } from "../../libs/grammar";
import GrammarCard from "./GrammarCard";

const PAGE_SIZE = 6; // har bosishda nechta karta qo‘shilsin

export default function GrammarListPage() {
  const [q, setQ] = useState("");
  const [level, setLevel] = useState<"Barchasi" | GLevel>("Barchasi");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const list = useMemo(() => {
    return GRAMMAR.filter((g) => {
      if (level !== "Barchasi" && g.level !== level) return false;
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const hay = `${g.title} ${g.meaning} ${g.tags?.join(" ")}`.toLowerCase();
      return hay.includes(q.toLowerCase());
    });
  }, [q, level]);

  // Qidiruv/daraja o‘zgarsa, qayta bosqichlash
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [q, level]);

  const canLoadMore = visible < list.length;

  return (
    <Container maxW="6xl" py={6} fontFamily={'inter'}>
      <VStack align="stretch" spacing={4} mb={2}>
        <HStack justify="space-between" wrap="wrap" gap={3}>
          <Heading size="lg" fontFamily={'inter'}>Korean Grammar</Heading>
          <Text color="gray.500">{list.length} ta punkt</Text>
        </HStack>
        <HStack gap={3} wrap="wrap">
          <InputGroup maxW="420px">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Qidirish: 은/는, 싶다, 해요..."
              value={q}
              onChange={(e) => { setQ(e.target.value); }}
            />
          </InputGroup>

          <Select
            maxW="220px"
            value={level}
            onChange={(e) => { setLevel(e.target.value as never); }}
          >
            <option value="Barchasi">Daraja: barchasi</option>
            <option value="Boshlang'ich">Boshlang‘ich</option>
            <option value="O'rta 1">O‘rta 1</option>
            <option value="O'rta 2">O‘rta 2</option>
            <option value="Yuqori">Yuqori</option>
          </Select>
        </HStack>
      </VStack>

      {/* Kartalar */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={4}>
        {list.slice(0, visible).map((g) => (
          <GrammarCard key={g.id} g={g} />
        ))}
      </SimpleGrid>

      {/* Load more / Show all tugmalari */}
      <Center mt={6} gap={3}>
        {canLoadMore && (
          <>
            <Button onClick={() => { setVisible((v) => v + PAGE_SIZE); }} variant="solid" colorScheme="blue">
              더 보기 (Load more)
            </Button>
            <Button onClick={() => { setVisible(list.length); }} variant="ghost">
              Hammasini ko‘rsatish
            </Button>
          </>
        )}
        {!canLoadMore && list.length > PAGE_SIZE && (
          <Button onClick={() => { setVisible(PAGE_SIZE); }} variant="outline">
            Qisqartirish
          </Button>
        )}
      </Center>
    </Container>
  );
}
