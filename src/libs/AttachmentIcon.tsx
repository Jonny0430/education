"use client";

import {
  HStack, Wrap, WrapItem, Link as ChakraLink, Text, Box,
} from "@chakra-ui/react";
import { FiFileText, FiLink, FiMusic, FiVideo, FiArchive } from "react-icons/fi";
import type { Attachment, AttachmentKind } from "./Books";
import type { IconType } from "react-icons/lib";

function iconByKind(kind: AttachmentKind): IconType {
  switch (kind) {
    case "pdf": return FiFileText;
    case "audio": return FiMusic;
    case "video": return FiVideo;
    case "zip": return FiArchive;
    default: return FiLink;
  }
}

export default function AttachmentList({ items }: { items: Attachment[] }) {
  return (
    <Wrap spacing={3}>
      {items.map((a) => {
        const Icon = iconByKind(a.kind);
        return (
          <WrapItem key={a.id}>
            <ChakraLink
              href={a.url}
              isExternal
              _hover={{ textDecoration: "none" }}
              title={a.name}
            >
              <HStack
                borderWidth="1px"
                p={2.5}
                borderRadius="lg"
                minW="240px"
                justify="space-between"
                _hover={{ bg: "blackAlpha.50" }}
              >
                <HStack>
                  <Box as={Icon} aria-hidden fontSize="20px" />
                  <Box>
                    <Text noOfLines={1} fontWeight="medium">{a.name}</Text>
                    <HStack fontSize="xs" color="gray.500">
                      <Text textTransform="uppercase">{a.kind}</Text>
                      {a.size && (<><Box as="span">•</Box><Text>{a.size}</Text></>)}
                    </HStack>
                  </Box>
                </HStack>
                <Text fontSize="xs" color="blue.500">ochish</Text>
              </HStack>
            </ChakraLink>
          </WrapItem>
        );
      })}
    </Wrap>
  );
}
