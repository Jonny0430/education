/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import { Card, CardBody, Heading, Text, HStack, Badge, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import type { Vocab } from "../../libs/dict";

export default function VocabCard({ v }: { v: Vocab }) {
  const nav = useNavigate();
  return (
    <Card
      borderRadius="xl"
      overflow="hidden"
      cursor="pointer"
      _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
      transition="0.2s"
      onClick={() => nav(`/lugat/${v.id}`)}
    >
      <CardBody>
        <VStack align="start" spacing={1}>
          <Heading size="sm">{v.words.ko.text}</Heading>
          <Text color="gray.400" fontSize="sm">{v.words.en.text}</Text>
          <HStack pt={1} spacing={2} wrap="wrap">
            <Badge variant="subtle" colorScheme="purple">{v.romanization}</Badge>
            <Badge>{v.pos}</Badge>
            {v.tags?.slice(0,2).map(t => <Badge key={t} colorScheme="pink" variant="outline">{t}</Badge>)}
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
}
