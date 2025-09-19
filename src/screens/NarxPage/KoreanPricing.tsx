// src/components/KoreanPricing.tsx
"use client";
import type { FC } from "react";
import {
  Box, Container, Grid, GridItem, Heading, Text,
  Stack, HStack, VStack, Divider, Button, Badge, useColorModeValue,
} from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";

type Plan = {
  id: string;
  name: string;
  price: number; // USD / oy
  features: string[];
  recommended?: boolean;
  href?: string;
};

const PLANS: Plan[] = [
  {
    id: "standard",
    name: "Standard",
    price: 20,
    features: [
      "Hangul (alifbo) — yozish/oyalish",
      "A1–A2 grammatika darslari (video)",
      "Haftalik uy vazifa",
      "Monthly Updates",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 32,
    recommended: true,
    features: [
      "Barchasi: Standard",
      "TOPIK I tayyorgarlik (test + tahlil)",
      "Speaking Club (haftasiga 1 marta)",
      "Mentor feedback (oyiga 2 marta)",
    ],
  },
  {
    id: "business",
    name: "Business",
    price: 50,
    features: [
      "Barchasi: Premium",
      "1:1 mentor sessiyasi (oyiga 2 marta)",
      "Ish yozishmalari & intervyu tayyorlov",
      "TOPIK II (yo‘naltirilgan reja)",
    ],
  },
];

const FeatureLine: FC<{ text: string }> = ({ text }) => {
  const checkClr = useColorModeValue("green.500", "green.400");
  const metaClr  = useColorModeValue("gray.700", "gray.300");
  return (
    <HStack align="start" spacing={3} fontFamily={'serif'}>
      <Box as={BsCheckCircleFill} color={checkClr} mt="3px" />
      <Text color={metaClr} fontSize={{ base: "sm", md: "md" }}>{text}</Text>
    </HStack>
  );
};

const PlanRow: FC<{ plan: Plan }> = ({ plan }) => {
  const priceClr  = useColorModeValue("#0b1220", "gray.100");
  const nameClr   = useColorModeValue("#0b1220", "#e2e2e2ff");
  const mutedName = useColorModeValue("gray.900", "#0b1220");
  const btnBg     = useColorModeValue("red.500", "red.400");
  const btnHover  = useColorModeValue("red.600", "red.500");

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      align={{ base: "stretch", md: "center" }}
      justify="space-between"
      py={{ base: 5, md: 6 }}
      spacing={{ base: 4, md: 6 }}
      fontFamily={'serif'}
    >
      <VStack align="stretch" spacing={3} flex="1">
        <HStack spacing={3}>
          <Heading
            as="h3"
            size="md"
            color={{ base: mutedName, md: nameClr }}
            fontWeight="extrabold"
            minW="8rem"
          >
            {plan.name}
          </Heading>
          {plan.recommended && (
            <Badge colorScheme="green" variant="solid" borderRadius="md">
              Tavsiya etiladi
            </Badge>
          )}
        </HStack>

        <VStack align="stretch" spacing={2}>
          {plan.features.map((f, i) => <FeatureLine key={i} text={f} />)}
        </VStack>
      </VStack>

      <Stack direction="row" align="center" justify="flex-end" spacing={4}>
        <Heading as="div" size="lg" color={priceClr} whiteSpace="nowrap">
          ${plan.price.toFixed(2)}
        </Heading>
        <Button
          size="md"
          bg={btnBg}
          _hover={{ bg: btnHover }}
          color="white"
          borderRadius="md"
          px={5}
          as="a"
          href={plan.href ?? "#"}
        >
          Boshlash
        </Button>
      </Stack>
    </Stack>
  );
};

const KoreanPricing: FC = () => {
 const pagelBg = useColorModeValue("#f4faff", "#0b1220");
  const border  = useColorModeValue("#0b1220", "whiteAlpha.200");
  const leadClr = useColorModeValue("#0b1220", "gray.300");
  const accent  = useColorModeValue("#0b1220", "green.400");

  return (
    <Box bg={pagelBg} py={{ base: 8, md: 12 }} borderTop="1px solid" borderColor={border}>
      {/* ✅ hammasi Container ichida, markazda */}
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1.2fr" }}
          gap={{ base: 8, md: 12 }}
          alignItems="center"
          mb={{ base: 6, md: 8 }}
        >
          <GridItem textAlign={{ base: "center", md: "left" }}>
            <Heading
              as="h2"
              lineHeight="1.1"
              fontWeight="extrabold"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              color={accent}
            >
              To‘g‘ri reja{" "}
              <Box as="span" display="block" color={accent}>
                Koreys tili kursi
              </Box>
              <Box as="span" display="block" color={accent}>
                darajangiz uchun
              </Box>
            </Heading>
          </GridItem>

          <GridItem textAlign={{ base: "center", md: "left" }}>
            <Text color={leadClr} fontSize={{ base: "sm", md: "md" }}>
              O‘zingizga mos rejani tanlab, <strong>Hangul</strong>dan boshlab
              <strong> TOPIK</strong>gacha tizimli yo‘l xaritasi bilan o‘qing.
              Rejaga kiradi: video darslar, speaking klublar, testlar,
              uy vazifalariga izohlar va 24/7 qo‘llab-quvvatlash.
            </Text>
          </GridItem>
        </Grid>

        <Divider borderColor={border} />

        {PLANS.map((p, i) => (
          <Box key={p.id}>
            <PlanRow plan={p} />
            {i < PLANS.length - 1 && <Divider borderColor={border} />}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default KoreanPricing;
