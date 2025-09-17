"use client";
import {
  Container, SimpleGrid, Heading, VStack
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
// import BookCard from "@/components/BookCard";
import type { BookDetail } from "./BookDetailDrawer";
import BookDetailDrawer from "./BookDetailDrawer";
import BookCards from "./BookCards";
import { BOOKS } from "../../libs/BooksDetail";
// import BookDetailDrawer, { type BookDetail } from "@/components/BookDetailDrawer";


export default function BooksPage() {
  const [selected, setSelected] = useState<BookDetail | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDetail = (b: BookDetail) => {
    setSelected(b);
    setIsOpen(true);
  };
  const onCloseDetail = () => {
    setIsOpen(false);
    setSelected(null);
  };

  const list = useMemo(() => BOOKS, []);

  return (
    <Container maxW="7xl" py={8}>
      <VStack align="stretch" spacing={6}>
        <Heading size="lg">Koreys kitoblar</Heading>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={5}>
          {list.map((b) => (
            <BookCards key={b.id} b={b} onOpenDetail={onOpenDetail} />
          ))}
        </SimpleGrid>
      </VStack>

      <BookDetailDrawer isOpen={isOpen} onClose={onCloseDetail} book={selected} />
    </Container>
  );
}
