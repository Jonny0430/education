// src/components/RegisterPage/page.tsx
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Image,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { HiUser } from "react-icons/hi";
import { useState, type FormEvent } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function RegisterPage() {
  const toast = useToast();

  const pageBg = useColorModeValue("linear-gradient(180deg,#f7fbff,#eef6ff)", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const bluePane = useColorModeValue("blue.600", "blue.500");
  const muted = useColorModeValue("gray.500", "gray.400");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !pw.trim()) {
      toast({ title: "Iltimos, barcha maydonlarni to'ldiring", status: "warning" });
      return;
    }

    // oddiy phone format tekshiruvi (ustiga kerak bo'lsa kuchaytiring)
    const phoneRe = /^[0-9+\-()\s]{7,20}$/;
    if (!phoneRe.test(phone.trim())) {
      toast({ title: "Iltimos, telefon raqamni to'g'ri kiriting", status: "error" });
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: real API chaqiruvi shu yerda bo'ladi, masalan:
      // await api.post('/auth/register', { name, phone, password: pw });

      // Simulyatsiya — muvaffaqiyat
      toast({ title: "Muvaffaqiyatli ro'yxatdan o'tdingiz!", status: "success" });

      // agar kerak bo'lsa, redirect yoki form reset:
      // setName(''); setPhone(''); setPw('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast({ title: "Ro'yxatdan o'tishda xatolik", status: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box minH="100vh" bg={pageBg} py={{ base: 6, md: 10 }}>
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          w="100%"
          minH={{ base: "auto", md: "80vh" }}
          overflow="hidden"
          borderRadius={{ md: "3xl" }}
          boxShadow={{ md: "lg" }}
        >
          {/* LEFT — Illustration */}
          <Flex
            flex="1"
            align="center"
            justify="center"
            bg={useColorModeValue("white", "gray.900")}
            px={{ base: 6, md: 10 }}
            py={{ base: 10, md: 0 }}
            borderTopLeftRadius={{ md: "3xl" }}
            borderBottomLeftRadius={{ md: "3xl" }}
          >
            <Box maxW="sm" w="full">
              <Image
                src="https://www.pngplay.com/wp-content/uploads/6/Education-Icon-Background-PNG-Image.png"
                alt="Register illustration"
                draggable={false}
                pointerEvents="none"
              />
            </Box>
          </Flex>

          {/* RIGHT — Blue panel */}
          <Box
            flex="1"
            bg={bluePane}
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={{ base: 6, md: 10 }}
            py={{ base: 12, md: 0 }}
            borderTopRightRadius={{ md: "3xl" }}
            borderBottomRightRadius={{ md: "3xl" }}
          >
            {/* Decorative rings */}
            <Box
              position="absolute"
              right={{ base: "-80px", md: "-120px" }}
              bottom={{ base: "-80px", md: "-120px" }}
              w={{ base: "240px", md: "360px" }}
              h={{ base: "240px", md: "360px" }}
              borderRadius="50%"
              border="2px solid rgba(255,255,255,0.25)"
            />
            <Box
              position="absolute"
              right={{ base: "-40px", md: "-60px" }}
              bottom={{ base: "-40px", md: "-60px" }}
              w={{ base: "160px", md: "240px" }}
              h={{ base: "160px", md: "240px" }}
              borderRadius="50%"
              border="2px solid rgba(255,255,255,0.25)"
            />

            {/* Card */}
            <Box
              as="form"
              onSubmit={onSubmit}
              w="full"
              maxW="sm"
              bg={cardBg}
              p={{ base: 6, md: 8 }}
              borderRadius="xl"
              boxShadow="xl"
            >
              <Stack spacing={6}>
                <Box>
                  <Heading size="lg" mb={1}>
                    Create Account
                  </Heading>
                  <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="sm">
                    Join us to get started
                  </Text>
                </Box>

                {/* Full Name */}
                <FormControl id="name" isRequired>
                  <FormLabel srOnly>Full Name</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<Box as={HiUser} color="gray.400" />} />
                    <Input
                      value={name}
                      onChange={(e) => { setName(e.target.value); }}
                      placeholder="Full Name"
                      autoComplete="name"
                    />
                  </InputGroup>
                </FormControl>

                {/* Phone */}
                <FormControl id="phone" isRequired>
                  <FormLabel srOnly>Phone</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <EmailIcon color="gray.400" />
                    </InputLeftElement>
                    <Input
                      type="tel"
                      value={phone}
                      onChange={(e) => { setPhone(e.target.value); }}
                      placeholder="Phone Number"
                      autoComplete="tel"
                    />
                  </InputGroup>
                </FormControl>

                {/* Password */}
                <FormControl id="password" isRequired>
                  <FormLabel srOnly>Password</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <LockIcon color="gray.400" />
                    </InputLeftElement>
                    <Input
                      type={showPw ? "text" : "password"}
                      value={pw}
                      onChange={(e) => { setPw(e.target.value); }}
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                    <InputRightElement>
                      <IconButton
                        aria-label={showPw ? "Hide password" : "Show password"}
                        size="sm"
                        variant="ghost"
                        icon={showPw ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={() => { setShowPw((v) => !v); }}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Button
                  type="submit"
                  size="md"
                  py={6}
                  borderRadius="full"
                  bg="blue.600"
                  _hover={{ bg: "blue.700" }}
                  color="white"
                  isLoading={isSubmitting}
                >
                  Sign Up
                </Button>

                <Text color={muted} fontSize="sm" textAlign="center">
                  Already have an account?{" "}
                  <Link as={RouterLink} to="/login" color="blue.100" textDecor="underline">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
