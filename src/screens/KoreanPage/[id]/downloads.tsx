/* eslint-disable @typescript-eslint/no-misused-promises */
// pages/books/[id]/downloads.tsx
"use client";
import {
  Container, VStack, Heading, Text, HStack, Badge, SimpleGrid,
  Card, CardHeader, CardBody, Button
} from "@chakra-ui/react";
import { DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { useMemo } from "react";
import { useRouter } from "next/router";
import { BOOK_FILES, BOOKS } from "../../../libs/Books";

export default function BookDownloadsPage() {
  const router = useRouter();
  const idParam = router.query.id;
  const bookId = Array.isArray(idParam) ? idParam[0] : idParam ?? "";

  const book = useMemo(() => BOOKS.find(b => b.id === bookId), [bookId]);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const files = BOOK_FILES[bookId] || [];

  return (
    <Container maxW="5xl" py={8}>
      <VStack align="stretch" spacing={4}>
        <HStack justify="space-between" wrap="wrap" gap={3}>
          <Heading size="lg">Yuklab olishlar</Heading>
          {book && (
            <HStack>
              <Badge colorScheme="purple">{book.series}</Badge>
              <Badge colorScheme="blue">{book.level}</Badge>
            </HStack>
          )}
        </HStack>

        {book ? (
          <Text color="gray.600">
            <b>{book.title}</b> uchun mavjud fayllar ({files.length} ta).
          </Text>
        ) : (
          <Text color="red.500">
            Kitob topilmadi. Manzil to‘g‘riligini tekshiring: <code>/books/&lt;bookId&gt;/downloads</code>
          </Text>
        )}

        <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4} mt={2}>
          {files.map(f => (
            <Card key={f.id} variant="outline">
              <CardHeader pb={1}>
                <HStack justify="space-between">
                  <Text fontWeight="semibold">{f.name}</Text>
                  <Badge variant="subtle">
                    {f.kind.toUpperCase()}{f.size ? ` · ${f.size}` : ""}
                  </Badge>
                </HStack>
              </CardHeader>
              <CardBody pt={0}>
                <HStack>
                  <Button
                    as="a"
                    href={f.url}
                    target={f.kind === "link" ? "_blank" : undefined}
                    rel={f.kind === "link" ? "noopener noreferrer" : undefined}
                    download={f.kind !== "link" ? "" : undefined}
                    colorScheme="teal"
                    leftIcon={f.kind === "link" ? <ExternalLinkIcon /> : <DownloadIcon />}
                    size="sm"
                  >
                    {f.kind === "link" ? "Sahifaga o‘tish" : "Yuklab olish"}
                  </Button>

                  <Button variant="ghost" size="sm" onClick={() => router.push("/books")}>
                    Kitoblarga qaytish
                  </Button>
                </HStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        {book && files.length === 0 && (
          <Text color="gray.500">Hozircha fayl biriktirilmagan.</Text>
        )}
      </VStack>
    </Container>
  );
}
