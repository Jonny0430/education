/* eslint-disable @typescript-eslint/no-misused-promises */
// components/grammar/GrammarCard.tsx
"use client";
import { Card, CardBody, Heading, Text, HStack, Badge, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import type { GrammarPoint } from "../../libs/grammar";

export default function GrammarCard({ g }: { g: GrammarPoint }) {
  const nav = useNavigate();
  return (
    <Card
      borderRadius="xl"
      cursor="pointer"
      _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
      transition=".2s"
      onClick={() => nav(`/grammar/${g.id}`)}
    >
      <CardBody>
        <VStack align="start" spacing={1}>
          <Heading size="sm">{g.title}</Heading>
          <Text color="gray.400" fontSize="sm">{g.meaning}</Text>
          <HStack pt={1} spacing={2} wrap="wrap">
            <Badge variant="subtle">{g.level}</Badge>
            {g.tags?.slice(0, 2).map(t => (
              <Badge key={t} colorScheme="purple" variant="outline">{t}</Badge>
            ))}
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
}
