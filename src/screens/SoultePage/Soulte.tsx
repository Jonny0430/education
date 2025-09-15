"use client";

import {
  Card, CardBody, Image, Heading, Text, HStack, Badge, Stack, Box,
} from "@chakra-ui/react";
import type { Book } from "../../libs/Books";

type Props = {
  book: Book;
  onOpen: (b: Book) => void;
};

export default function BookCard({ book, onOpen }: Props) {
  return (
    <Card
      overflow="hidden"
      borderRadius="2xl"
      cursor="pointer"
      _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
      transition="0.2s"
      onClick={() => { onOpen(book); }}
    >
      <Image src={book.cover} alt={book.title} h="220px" w="100%" objectFit="cover" />
      <CardBody>
        <Stack spacing={2}>
          <HStack justify="space-between" align="start">
            <Heading size="md">{book.title}</Heading>
            {book.badge && <Badge colorScheme="pink">{book.badge}</Badge>}
          </HStack>

          <HStack fontSize="sm" color="gray.500" wrap="wrap">
            <Text>{book.series}</Text>
            <Box as="span">•</Box>
            <Text>{book.kind}</Text>
            <Box as="span">•</Box>
            <Text>{book.level}</Text>
          </HStack>

          <HStack fontSize="sm" color="gray.600">
            <Text>⭐ {book.rating.toFixed(1)}</Text>
            <Box as="span">•</Box>
            <Text>{book.readers.toLocaleString()} readers</Text>
          </HStack>

          <Text fontWeight="bold">${book.price}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
