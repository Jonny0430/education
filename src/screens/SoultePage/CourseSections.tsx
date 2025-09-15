"use client";

import {
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
  Box, HStack, Text, List, ListItem, ListIcon, Tag, VStack, Badge
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import type { Lesson, Section } from "../../libs/Books";

type Props = {
  sections: Section[];
  totalDuration?: string;
  onOpenLesson?: (lesson: Lesson) => void; // NEW
};

export default function CourseSections({ sections, totalDuration, onOpenLesson }: Props) {
  return (
    <Accordion allowMultiple borderRadius="xl" borderWidth="1px" overflow="hidden">
      {sections.map((sec) => (
        <AccordionItem key={sec.id} borderTopWidth="0">
          <h2>
            <AccordionButton _expanded={{ bg: "blackAlpha.50" }}>
              <Box as="span" flex="1" textAlign="left">
                <VStack align="start" spacing={0}>
                  <HStack>
                    <Text fontWeight="semibold">{sec.title}</Text>
                    {totalDuration && <Tag size="sm" variant="subtle">{totalDuration}</Tag>}
                  </HStack>
                  {sec.total && <Text fontSize="sm" color="gray.500">{sec.total}</Text>}
                </VStack>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List spacing={2}>
              {sec.lessons.map((ls) => (
                <ListItem
                  key={ls.id}
                  display="flex"
                  alignItems="center"
                  gap={3}
                  cursor={onOpenLesson ? "pointer" : "default"}
                  _hover={onOpenLesson ? { bg: "blackAlpha.50" } : undefined}
                  p={2}
                  borderRadius="md"
                  onClick={() => onOpenLesson?.(ls)}
                >
                  <ListIcon as={CheckCircleIcon} color={ls.playing ? "green.400" : "gray.300"} />
                  <HStack justify="space-between" w="full">
                    <HStack>
                      <Text fontWeight={ls.playing ? "semibold" : "normal"}>{ls.title}</Text>
                      {ls.playing && <Badge colorScheme="green">playing</Badge>}
                    </HStack>
                    <Text color="gray.500" fontSize="sm">{ls.dur}</Text>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
