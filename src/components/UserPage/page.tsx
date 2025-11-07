"use client";
import React, { useMemo, useRef, useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Icon,
  IconButton,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { FiCamera, FiCheck, FiX, FiUploadCloud } from "react-icons/fi";

type ProfileForm = {
  username: string;
  email: string;
  password: string;
  fullName: string;
  title: string;
  language: "en" | "ko" | "uz" | "ru";
  about?: string;
};

type Props = {
  initial?: Partial<ProfileForm> & { avatarUrl?: string; role?: string };
  onSubmit?: (data: ProfileForm & { avatarFile?: File | null }) => Promise<void> | void;
};

export default function UserProfilePro({ initial, onSubmit }: Props) {
  /* ====== Tokens / Colors ====== */
  const pageBg   = useColorModeValue("#f5f7fb", "#0b1220");
  const cardBg   = useColorModeValue("white", "gray.800");
  const subtle   = useColorModeValue("gray.600", "gray.300");
  const hint     = useColorModeValue("gray.500", "gray.400");
  const border   = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const ring     = useColorModeValue("blue.500", "blue.300");
  const zoneBg   = useColorModeValue("gray.50", "whiteAlpha.50");
  const zoneBd   = useColorModeValue("blackAlpha.300", "whiteAlpha.300");
  const stickyBg = useColorModeValue("rgba(255,255,255,.85)", "rgba(26,32,44,.85)");

  /* ====== State ====== */
  const toast = useToast();
  const [form, setForm] = useState<ProfileForm>({
    username: initial?.username ?? "",
    email:    initial?.email ?? "",
    password: "",
    fullName: initial?.fullName ?? "",
    title:    initial?.title ?? "",
    language: (initial?.language as ProfileForm["language"]) ?? "en",
    about:    initial?.about ?? "",
  });
  const [avatarUrl, setAvatarUrl]   = useState<string | undefined>(initial?.avatarUrl);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [saving, setSaving]         = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);

  /* ====== Validation ====== */
  const emailInvalid = useMemo(() => !/^\S+@\S+\.\S+$/.test(form.email), [form.email]);
  const requiredInvalid = useMemo(
    () => !form.username.trim() || !form.fullName.trim(),
    [form.username, form.fullName]
  );

  /* ====== Avatar Upload ====== */
  const openPicker = () => fileRef.current?.click();
  const onPick = (files: FileList | null) => {
    const f = files?.[0]; if (!f) return;
    if (!f.type.startsWith("image/")) {
      toast({ status: "error", title: "Faqat rasm fayl yuklang (PNG/JPG)" });
      return;
    }
    setAvatarFile(f);
    const reader = new FileReader();
    reader.onload = () => setAvatarUrl(reader.result as string);
    reader.readAsDataURL(f);
  };

  /* ====== Submit ====== */
  const submit = async () => {
    if (emailInvalid || requiredInvalid) {
      toast({ status: "warning", title: "Iltimos, majburiy maydonlarni to‘g‘ri to‘ldiring." });
      return;
    }
    try {
      setSaving(true);
      await onSubmit?.({ ...form, avatarFile });
      toast({ status: "success", title: "Profil saqlandi" });
    } catch (e: any) {
      toast({ status: "error", title: "Saqlashda xatolik", description: e?.message ?? "Noma’lum xatolik" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box bg={pageBg} minH="100vh" pb={28}>
      <Container maxW="6xl" pt={{ base: 4, md: 8 }}>
        {/* ===== Header Card ===== */}
        <Box
          bg={cardBg}
          borderWidth="1px"
          borderColor={border}
          rounded="2xl"
          boxShadow="sm"
          px={{ base: 5, md: 10 }}
          py={{ base: 6, md: 8 }}
        >
          <SimpleGrid columns={{ base: 1, md: 12 }} spacing={8} alignItems="center">
            {/* Avatar block */}
            <Box gridColumn={{ md: "1 / span 3" }}>
              <Box position="relative" w="180px" h="180px" mx="auto">
                <Avatar
                  src={avatarUrl}
                  name={form.fullName}
                  w="180px"
                  h="180px"
                  shadow="md"
                  borderWidth="3px"
                  borderColor={useColorModeValue("white", "gray.700")}
                />
                <IconButton
                  aria-label="Change avatar"
                  icon={<FiCamera />}
                  size="sm"
                  colorScheme="blue"
                  rounded="full"
                  position="absolute"
                  bottom="8px"
                  right="8px"
                  onClick={openPicker}
                />
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => onPick(e.target.files)}
                />
              </Box>
            </Box>

            {/* Title block */}
            <Box gridColumn={{ md: "4 / span 9" }}>
              <Stack spacing={2} textAlign={{ base: "center", md: "left" }}>
                <HStack justify={{ base: "center", md: "flex-start" }} spacing={3}>
                  <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
                    {form.fullName || "John Doe"}
                  </Text>
                  {initial?.role && (
                    <Badge colorScheme="purple" rounded="md">
                      {initial.role}
                    </Badge>
                  )}
                </HStack>
                <HStack justify={{ base: "center", md: "flex-start" }} spacing={2} wrap="wrap">
                  <Text color="blue.500">{form.email || "name@example.com"}</Text>
                  <Text color={subtle}>— {form.title || "User"}</Text>
                </HStack>
                <Text color={hint} fontSize="sm">
                  Avatar by <b>gravatar.com</b>. Yoki o‘zingiz yuklang…
                </Text>
              </Stack>
            </Box>
          </SimpleGrid>

          {/* Dropzone */}
          <Box
            mt={8}
            border="2px dashed"
            borderColor={zoneBd}
            bg={zoneBg}
            rounded="xl"
            py={{ base: 6, md: 10 }}
            px={{ base: 4, md: 8 }}
            textAlign="center"
            _hover={{ borderColor: ring }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              onPick(e.dataTransfer.files);
            }}
          >
            <Icon as={FiUploadCloud} boxSize={8} mb={2} color={hint} />
            <Text color={hint}>
              Drop your files here or{" "}
              <Text as="span" color="blue.500" fontWeight="semibold" cursor="pointer" onClick={openPicker}>
                click to upload
              </Text>
            </Text>
          </Box>
        </Box>

        {/* ===== Form Card ===== */}
        <Box
          mt={6}
          bg={cardBg}
          borderWidth="1px"
          borderColor={border}
          rounded="2xl"
          boxShadow="sm"
          px={{ base: 5, md: 10 }}
          py={{ base: 6, md: 8 }}
        >
          <Stack spacing={6}>
            <SectionTitle title="Account" desc="Profil ma’lumotlarini yangilang." />

            {/* 2-column grid */}
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
              <FormControl isRequired isInvalid={!form.username.trim()}>
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder="your_username"
                  value={form.username}
                  onChange={(e) => setForm((s) => ({ ...s, username: e.target.value }))}
                  _focusVisible={{ ring: 2, ringColor: ring }}
                />
                <FormErrorMessage>Username majburiy</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={emailInvalid}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  _focusVisible={{ ring: 2, ringColor: ring }}
                />
                <FormErrorMessage>Email noto‘g‘ri formatda</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>Full name</FormLabel>
                <Input
                  placeholder="John Doe"
                  value={form.fullName}
                  onChange={(e) => setForm((s) => ({ ...s, fullName: e.target.value }))}
                  _focusVisible={{ ring: 2, ringColor: ring }}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  placeholder="Administrator"
                  value={form.title}
                  onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))}
                  _focusVisible={{ ring: 2, ringColor: ring }}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))}
                  _focusVisible={{ ring: 2, ringColor: ring }}
                />
                <FormHelperText color={hint}>
                  Xavfsizlik uchun kuchli parol kiriting.
                </FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Language</FormLabel>
                <Select
                  value={form.language}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, language: e.target.value as ProfileForm["language"] }))
                  }
                  _focusVisible={{ ring: 2, ringColor: ring }}
                >
                  <option value="en">English</option>
                  <option value="ko">한국어</option>
                  <option value="uz">O‘zbekcha</option>
                  <option value="ru">Русский</option>
                </Select>
              </FormControl>
            </Grid>

            <Divider />

            <SectionTitle title="About" desc="Qisqacha bio yoki izoh qoldiring." />
            <FormControl>
              <Textarea
                rows={5}
                placeholder="Short bio..."
                value={form.about}
                onChange={(e) => setForm((s) => ({ ...s, about: e.target.value }))}
                _focusVisible={{ ring: 2, ringColor: ring }}
              />
            </FormControl>
          </Stack>
        </Box>

        {/* ===== Sticky Action Bar ===== */}
        <Box
          position="fixed"
          left={0}
          right={0}
          bottom={0}
          bg={stickyBg}
          backdropFilter="saturate(180%) blur(6px)"
          borderTop="1px solid"
          borderColor={border}
          py={3}
          zIndex={1000}
        >
          <Container maxW="6xl">
            <Flex align="center" justify="space-between">
              <Text fontSize="sm" color={hint}>
                O‘zgartirishlar saqlanmagandi…
              </Text>
              <HStack>
                <Button leftIcon={<FiX />} variant="ghost" onClick={() => window.history.back()}>
                  Bekor qilish
                </Button>
                <Button
                  colorScheme="blue"
                  leftIcon={<FiCheck />}
                  isLoading={saving}
                  onClick={submit}
                >
                  Saqlash
                </Button>
              </HStack>
            </Flex>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}

function SectionTitle({ title, desc }: { title: string; desc?: string }) {
  const hint = useColorModeValue("gray.500", "gray.400");
  return (
    <Stack spacing={0}>
      <Text fontSize="lg" fontWeight="semibold">{title}</Text>
      {desc && <Text color={hint} fontSize="sm">{desc}</Text>}
    </Stack>
  );
}
