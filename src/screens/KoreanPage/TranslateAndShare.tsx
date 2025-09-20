/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import { useEffect, useMemo, useState } from "react";
import {
  Box, Card, CardHeader, CardBody, Heading, VStack, HStack, Stack, Grid, GridItem,
  Textarea, Select, Button, Input, useToast, Tooltip, Badge, Divider, IconButton,
  Kbd, useColorModeValue, Spinner, Text, chakra
} from "@chakra-ui/react";
import {
  RepeatIcon, CopyIcon, ExternalLinkIcon, LinkIcon, SmallCloseIcon
} from "@chakra-ui/icons";

// ---------- Config ----------
const LANGS = [
  { code: "auto", label: "Auto-detect" },
  { code: "uz", label: "O‘zbekcha (uz)" },
  { code: "ko", label: "Koreyscha (ko)" },
  { code: "en", label: "Inglizcha (en)" },
  { code: "ru", label: "Ruscha (ru)" },
];

// Emojili flag (oddiy)
const flag = (code: string) =>
  ({ uz: "🇺🇿", ko: "🇰🇷", en: "🇺🇸", ru: "🇷🇺", auto: "🌐" } as Record<string, string>)[code] ?? "🌐";

// ---------- Types for APIs ----------
type MyMemoryResponse = {
  responseData?: { translatedText?: string };
};

type LibreTranslateRequest = {
  q: string;
  target: string;
  format: "text";
  source?: string;
};

type LibreTranslateResponse = {
  translatedText?: string;
};

function isLibreTranslateResponse(x: unknown): x is LibreTranslateResponse {
  return !!x && typeof x === "object" && typeof (x as Record<string, unknown>).translatedText === "string";
}

// ---------- Public translation endpoints ----------
async function translateMyMemory(text: string, source: string, target: string): Promise<string> {
  const src = source === "auto" ? "auto" : source;
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${src}|${target}`;
  const r = await fetch(url, { headers: { Accept: "application/json" } });
  if (!r.ok) throw new Error("Translate API error");
  const data = (await r.json()) as MyMemoryResponse;
  const out = data.responseData?.translatedText;
  if (!out) throw new Error("Translate response empty");
  return out;
}

async function translateLibre(text: string, source: string, target: string): Promise<string> {
  const endpoint = "https://libretranslate.com/translate";
  const body: LibreTranslateRequest = {
    q: text,
    target,
    format: "text",
    ...(source !== "auto" ? { source } : {}),
  };
  const r = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  if (!r.ok) {
    const t = await r.text().catch(() => "");
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new Error(`LibreTranslate error: ${r.status} ${t}`);
  }
  const json = (await r.json()) as unknown;
  if (!isLibreTranslateResponse(json)) {
    throw new Error("LibreTranslate response shape is invalid");
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return json.translatedText!;
}

// ---------- Component ----------
export default function TranslateAndShare() {
  const toast = useToast();

  // Theming
  const cardBg = useColorModeValue("white", "gray.800");
  const borderCol = useColorModeValue("gray.200", "gray.700");
  const fieldBg = useColorModeValue("gray.50", "gray.700");
  const muted = useColorModeValue("gray.600", "gray.400");
  const gradient = useColorModeValue(
    "linear(to-b, blue.50, white)",
    "linear(to-b, gray.900, gray.800)"
  );

  const [source, setSource] = useState("auto");
  const [target, setTarget] = useState("ko");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  const inputLen = input.trim().length;
  const outputLen = output.trim().length;

  const swap = () => {
    setSource(target);
    setTarget(source);
    if (output) setInput(output);
  };

  const translate = async () => {
    if (!input.trim()) {
      toast({ status: "warning", title: "Matn kiriting" });
      return;
    }
    if (source !== "auto" && source === target) {
      toast({ status: "info", title: "Manba va maqsad tili bir xil" });
      return;
    }
    setLoading(true);
    setOutput("");
    try {
      const t1 = await translateMyMemory(input.trim(), source, target);
      setOutput(t1);
    } catch {
      try {
        const t2 = await translateLibre(input.trim(), source, target);
        setOutput(t2);
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : "API ishlamadi";
        toast({ status: "error", title: "Tarjima xatosi", description: msg });
      }
    } finally {
      setLoading(false);
    }
  };

  const openTelegramShare = () => {
    const text = output || input;
    if (!text.trim()) {
      toast({ status: "warning", title: "Avval matn yozing yoki tarjima qiling" });
      return;
    }
    const url = `https://t.me/share/url?text=${encodeURIComponent(text)}${
      shareUrl ? `&url=${encodeURIComponent(shareUrl)}` : ""
    }`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copyResult = async () => {
    const text = output || input;
    if (!text.trim()) return;
    await navigator.clipboard.writeText(text);
    toast({ status: "success", title: "Nusxa olindi" });
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setShareUrl("");
  };

  // Ctrl/Cmd + Enter → Tarjima
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      if ((isMac ? e.metaKey : e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        void translate();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); };
  }, [input, source, target]);

  const SourceSelect = useMemo(() => (
    <Select
      value={source}
      onChange={(e) => { setSource(e.target.value); }}
      bg={fieldBg}
      borderColor={borderCol}
      icon={<span />}
      _focusVisible={{ borderColor: "blue.400", boxShadow: "0 0 0 1px var(--chakra-colors-blue-400)" }}
      aria-label="Manba tili"
    >
      {LANGS.map(l => (
        <option key={l.code} value={l.code}>
          {flag(l.code)} {l.label}
        </option>
      ))}
    </Select>
  ), [source, fieldBg, borderCol]);

  const TargetSelect = useMemo(() => (
    <Select
      value={target}
      onChange={(e) => { setTarget(e.target.value); }}
      bg={fieldBg}
      borderColor={borderCol}
      icon={<span />}
      _focusVisible={{ borderColor: "blue.400", boxShadow: "0 0 0 1px var(--chakra-colors-blue-400)" }}
      aria-label="Maqsad tili"
    >
      {LANGS.filter(l => l.code !== "auto").map(l => (
        <option key={l.code} value={l.code}>
          {flag(l.code)} {l.label}
        </option>
      ))}
    </Select>
  ), [target, fieldBg, borderCol]);

  return (
    <Box minH="100dvh" bgGradient={gradient} py={{ base: 6, md: 10 }} px={4} fontFamily="inter">
      <Box maxW="1100px" mx="auto" >
        <HStack justify="space-between" mb={4} flexWrap="wrap" gap={3}>
          <Heading size="lg" fontFamily="inter">Siz bilmagan so'zlarni tarjima qiling</Heading>
          <HStack fontSize="sm" color={muted}>
            <Badge colorScheme="blue" variant="subtle">Ingilis tili</Badge>
            <Badge colorScheme="purple" variant="subtle">Kores tili</Badge>
            <Badge colorScheme="teal" variant="subtle">Rus tili</Badge>
          </HStack>
        </HStack>

        <Card bg={cardBg} border="1px solid" borderColor={borderCol} borderRadius="2xl" shadow="xl" overflow="hidden">
          <CardHeader pb={0} >
            <VStack align="stretch" spacing={3}>
              <Heading size="md" fontFamily="inter">Tezkor tarjima qilish</Heading>
              <Text color={muted}>
                <b>Auto-detect</b> manba tilini aniqlaydi. <Kbd>Ctrl</Kbd>/<Kbd>⌘</Kbd> + <Kbd>Enter</Kbd> — tarjima.
              </Text>
            </VStack>
          </CardHeader>

          <CardBody>
            <VStack align="stretch" spacing={5}>
              {/* Language Row */}
              <HStack gap={3} flexWrap="wrap" align="center" justify="center">
                <Box flex="1" minW="230px">
                  <Text mb={2} fontSize="sm" color={muted} fontFamily="inter">Tanlagan tili</Text>
                  {SourceSelect}
                </Box>

                <Tooltip label="Manba ↔ Maqsad" hasArrow>
                  <IconButton
                    aria-label="Tillarni almashtirish"
                    icon={<RepeatIcon />}
                    onClick={swap}
                    variant="outline"
                    colorScheme="blue"
                    size="md"
                    borderRadius="full"
                  />
                </Tooltip>

                <Box flex="1" minW="230px" fontFamily="inter">
                  <Text mb={2} fontSize="sm" color={muted}>Tanlagan tili</Text>
                  {TargetSelect}
                </Box>
              </HStack>

              {/* Editor Grid */}
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                <GridItem>
                  <VStack align="stretch" spacing={2} fontFamily="inter">
                    <HStack justify="space-between">
                      <Text fontWeight="semibold">Kiritma</Text>
                      <Text fontSize="sm" color={muted}>{inputLen} belgi</Text>
                    </HStack>
                    <Textarea
                      placeholder="Matn kiriting..."
                      value={input}
                      onChange={(e) => { setInput(e.target.value); }}
                      bg={fieldBg}
                      borderColor={borderCol}
                      minH="180px"
                      resize="vertical"
                    />
                    <HStack justify="flex-end" gap={2}>
                      <Tooltip label="Tozalash">
                        <IconButton
                          aria-label="Tozalash"
                          icon={<SmallCloseIcon />}
                          onClick={() => { setInput(""); }}
                          size="sm"
                          variant="ghost"
                        />
                      </Tooltip>
                      <Button colorScheme="blue" onClick={translate} isLoading={loading}>
                        Tarjima qil
                      </Button>
                    </HStack>
                  </VStack>
                </GridItem>

                <GridItem>
                  <VStack align="stretch" spacing={2} position="relative" fontFamily="inter">
                    <HStack justify="space-between">
                      <Text fontWeight="semibold">Natija</Text>
                      <Text fontSize="sm" color={muted}>{outputLen} belgi</Text>
                    </HStack>

                    <Box position="relative">
                      {/* Loading overlay */}
                      {loading && (
                        <HStack
                          position="absolute"
                          inset={0}
                          bg="blackAlpha.400"
                          backdropFilter="blur(2px)"
                          zIndex={1}
                          justify="center"
                        >
                          <Spinner size="lg" color="blue.400" />
                        </HStack>
                      )}
                      <Textarea
                        placeholder="Tarjima natijasi…"
                        value={output}
                        onChange={(e) => { setOutput(e.target.value); }}
                        bg={fieldBg}
                        borderColor={borderCol}
                        minH="180px"
                        resize="vertical"
                      />
                    </Box>

                    <HStack justify="space-between" flexWrap="wrap" gap={2}>
                      <HStack gap={2}>
                        <Tooltip label="Natijani nusxalash">
                          <Button leftIcon={<CopyIcon />} variant="outline" onClick={copyResult}>
                            Copy
                          </Button>
                        </Tooltip>
                        <Tooltip label="t.me/share orqali ulashish">
                          <Button leftIcon={<ExternalLinkIcon />} fontFamily="inter" colorScheme="telegram" onClick={openTelegramShare}>
                            Share
                          </Button>
                        </Tooltip>
                      </HStack>

                      <HStack gap={2}>
                        <Input
                          placeholder="(Ixtiyoriy) URL — ulashishda qo‘shilsin"
                          value={shareUrl}
                          onChange={(e) => { setShareUrl(e.target.value); }}
                          bg={fieldBg}
                          borderColor={borderCol}
                          minW="260px"
                        />
                        {shareUrl && (
                          <Tooltip label="URL’ni tozalash">
                            <IconButton
                              aria-label="URL’ni tozalash"
                              icon={<SmallCloseIcon />}
                              onClick={() => { setShareUrl(""); }}
                              variant="ghost"
                            />
                          </Tooltip>
                        )}
                      </HStack>
                    </HStack>
                  </VStack>
                </GridItem>
              </Grid>

              <Divider />

              {/* Action Footer */}
              <Stack
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align="center"
                spacing={3}
              >
                <Text fontSize="sm" color={muted} fontFamily="inter">
                  Faqat bizning platformamizda 
                  <chakra.code px="1" py="0.5" bg={fieldBg} borderRadius="md">t.me/share</chakra.code> ishlatiladi.
                </Text>
                <HStack>
                  <Button leftIcon={<SmallCloseIcon />} fontFamily="inter" variant="ghost" onClick={clearAll}>
                    Hammasini tozalash
                  </Button>
                  <Button leftIcon={<LinkIcon />} fontFamily="inter" variant="outline" onClick={() => window.open("https://core.telegram.org/widgets/share", "_blank")}>
                    Ulashis
                  </Button>
                </HStack>
              </Stack>
            </VStack>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
}
