"use client";

import { Container, SimpleGrid, Box, useColorModeValue } from "@chakra-ui/react";
import { BOOKS } from "../../libs/Books";
import BookCard from "./Soulte";


export default function BooksGrid() {

 const pageBg = useColorModeValue("#f4faff", "#0b1220");

  return (
    <Box bg={pageBg} minH="calc(100vh - 64px)"  py={6}>
      <Container maxW="7xl" bg={pageBg}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
          {BOOKS.map((b) => (
            <BookCard key={b.id} b={b} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
