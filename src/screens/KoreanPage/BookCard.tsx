/* eslint-disable @typescript-eslint/no-misused-promises */
// components/books/BookCard.tsx
"use client";
import { Card, CardBody, HStack, VStack, Image, Heading, Text, Badge } from "@chakra-ui/react";
import type { Book } from "../../libs/Books";
import { useNavigate } from "react-router";
import type { JSX } from "react";


export default function BookCard({ b }: { b: Book }): JSX.Element {
  const nav = useNavigate();
  return (
    <Card borderRadius="xl" overflow="hidden" cursor="pointer" onClick={() => nav(`/soulte/${b.id}`)}
      _hover={{ shadow: "lg", transform: "translateY(-2px)" }} transition=".2s">
      <HStack align="stretch">
        <Image src={b.cover} alt={b.title} w="110px" h="110px" objectFit="cover" />
        <CardBody>
          <VStack align="start" spacing={1}>
            <Heading size="sm">{b.title}</Heading>
            <Text color="gray.400" fontSize="sm">{b.series} · {b.kind} · {b.level}</Text>
            <HStack><Badge colorScheme="yellow">${b.price}</Badge>{b.badge && <Badge>{b.badge}</Badge>}</HStack>
          </VStack>
        </CardBody>
      </HStack>
    </Card>
  );
}
