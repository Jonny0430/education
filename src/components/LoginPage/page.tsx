// src/components/LoginPage/page.tsx
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
  Stack,
  Text,
  useColorModeValue,
  Image,
  useToast,
  Link,
  Checkbox,
} from "@chakra-ui/react";
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { HiUser } from "react-icons/hi";
import { useState, type FormEvent } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function LoginPage() {
  const toast = useToast();

  // UI ranglar
  const pageBg = useColorModeValue("linear-gradient(180deg,#f7fbff,#eef6ff)", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const bluePane = useColorModeValue("blue.600", "blue.500");
  const muted = useColorModeValue("gray.500", "gray.400");

  // Form holatlari
  const [fullName, setFullName] = useState("");
  const [pw, setPw] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !pw.trim()) {
      toast({ title: "Iltimos, ism-familya va parolni kiriting", status: "warning" });
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: haqiqiy login API'ni shu yerda chaqiring:
      // await api.post('/auth/login', { username: fullName, password: pw, remember });

      toast({ title: "Kirish muvaffaqiyatli!", status: "success" });
      // navigate('/') // kerak bo'lsa redirect
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast({ title: "Login xatosi. Qayta urinib ko‘ring", status: "error" });
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
          bg="transparent"
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
                alt="Work illustration"
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
                    Welcome back
                  </Heading>
                  <Text color={muted} fontSize="sm">
                    Sign in to continue
                  </Text>
                </Box>

                {/* Full Name */}
                <FormControl id="fullName" isRequired>
                  <FormLabel srOnly>Full Name</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Box as={HiUser} color="gray.400" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      value={fullName}
                      onChange={(e) => { setFullName(e.target.value); }}
                      placeholder="Full Name"
                      autoComplete="username" // yoki "name"
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
                      autoComplete="current-password"
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

                {/* Remember + Links */}
                <Flex align="center" justify="space-between">
                  <Checkbox
                    colorScheme="blue"
                    isChecked={remember}
                    onChange={(e) => { setRemember(e.target.checked); }}
                  >
                    Remember me
                  </Checkbox>

                  <Link
                    as={RouterLink}
                    to="/forgot-password"
                    color="whiteAlpha.900"
                    textDecor="underline"
                    fontSize="sm"
                  >
                    Forgot Password?
                  </Link>
                </Flex>

                {/* Submit */}
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
                  Login
                </Button>

                {/* Register link */}
                <Text color={muted} fontSize="sm" textAlign="center">
                  Don’t have an account?{" "}
                  <Link as={RouterLink} to="/register" color="blue.100" textDecor="underline">
                    Create account
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
