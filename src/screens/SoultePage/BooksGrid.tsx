"use client";

import { useState } from "react";
import { Container, SimpleGrid, Heading, Text, VStack } from "@chakra-ui/react";
import { BOOKS, type Book } from "../../libs/Books";
import BookCard from "./Soulte";
import BookDetailModal from "./SoulteDetail";


export default function BooksPage() {
  const [openBook, setOpenBook] = useState<Book | null>(null);

  return (
    <Container maxW="6xl" py={10}>
      <VStack align="start" spacing={2} mb={6}>
        <Heading>Koreys tili kitoblari</Heading>
        <Text color="gray.600">Kartaga bosib, kitob tafsilotlarini ko‘ring.</Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6}>
        {BOOKS.map((b) => (
          <BookCard key={b.id} book={b} onOpen={setOpenBook} />
        ))}
      </SimpleGrid>

      <BookDetailModal
        isOpen={!!openBook}
        onClose={() => { setOpenBook(null); }}
        book={openBook}
      />
    </Container>
  );
}
