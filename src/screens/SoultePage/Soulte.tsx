// src/components/Soulte.tsx
"use client";

import {
  VStack, HStack, Image, Text, Badge, Button, Icon, useColorModeValue,
  LinkBox, LinkOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router";
import { AiFillStar } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import type { Book } from "../../libs/Books";

type BookCardProps = { b: Book };

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
const money = (n: number) => `$${n}`;
// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
const readersText = (n: number) => (n >= 1000 ? `${(n/1000).toFixed(1)}k readers` : `${n} readers`);

export default function BookCard({ b }: BookCardProps) {
 const pageBg = useColorModeValue("#f4faff", "#0b1220");
  const border = useColorModeValue("whiteAlpha.200", "whiteAlpha.200");

  return (
    <LinkBox
      as="article"
      bg={pageBg}
      border="1px solid"
      borderColor={border}
      rounded="2xl"
      overflow="hidden"
      shadow="md"
      position="relative"
      _hover={{ transform: "translateY(-2px)", transition: "0.15s" }}
    >
      <Badge position="absolute" top={3} right={3} rounded="full" px={3} py={1} bg="orange.400" color="black">
        {money(b.price)}
      </Badge>

      {/* Rasmning o‘zi ham klik bo‘lishi uchun LinkOverlay yetarli */}
      <Image src={b.cover} alt={b.title} h="150px" w="100%" objectFit="cover" />

      <VStack align="stretch" spacing={3} p={4}>
        <HStack spacing={2}>
          <Badge colorScheme="purple">{b.kind}</Badge>
          <Badge colorScheme="teal">{b.level}</Badge>
        </HStack>

        {/* 👉 Barcha ma’lumotni state orqali yuboramiz */}
        <LinkOverlay as={Link} to={`/books/${b.id}`} state={{ book: b }}>
          <Text noOfLines={2} fontWeight="semibold" color="whiteAlpha.900">
            {b.title}
          </Text>
        </LinkOverlay>

        <HStack spacing={3} color="whiteAlpha.800">
          <HStack spacing={1}>
            <Icon as={AiFillStar} />
            <Text>{b.rating.toFixed(1)}</Text>
          </HStack>
          <Text fontSize="sm" color="whiteAlpha.700">· {readersText(b.readers)}</Text>
        </HStack>

        <HStack pt={1} spacing={3}>
          <Button
            as={Link}
            to={`/books/${b.id}`}
            state={{ book: b }}
            size="sm"
            variant="outline"
            colorScheme="whiteAlpha"
          >
            Batafsil
          </Button>
          <Button size="sm" colorScheme="orange" leftIcon={<BsBookmarkPlus />}>
            Savatchaga
          </Button>
        </HStack>
      </VStack>
    </LinkBox>
  );
}
