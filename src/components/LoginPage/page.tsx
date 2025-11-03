// src/components/LoginPage/page.tsx
import {
  Box, Button, Container, Flex, FormControl, FormLabel, Heading,
  IconButton, Input, InputGroup, InputLeftElement, InputRightElement,
  Stack, Text, useColorModeValue, Image, useToast, Link, Checkbox,
} from "@chakra-ui/react";
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { HiUser } from "react-icons/hi";
import { useState, type FormEvent } from "react";
import { Link as RouterLink, useNavigate  } from "react-router-dom";
import { postLogin } from "../../store/register/register.action";
import { useAppDispatch } from "../../hooks/hooks";


const LoginPage = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  

  // UI ranglar
  const pageBg   = useColorModeValue("linear-gradient(180deg,#f7fbff,#eef6ff)", "gray.900");
  const cardBg   = useColorModeValue("white", "gray.800");
  const bluePane = useColorModeValue("blue.600", "blue.500");
  const muted    = useColorModeValue("gray.500", "gray.400");

  // Form holatlari 
  const [memberPassword, setMemberPassword] = useState("");
  const [memberNick, setMemberNick] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
 

  const performSubmit = async () => {
    if (!memberNick.trim() || !memberPassword.trim()) {
      toast({ title: "Iltimos, login va parolni kiriting", status: "warning" });
      return;
    }
    try {
      setIsSubmitting(true);
      // ✅ unwrap: success bo‘lsa payload qaytaradi, xato bo‘lsa throw qiladi
      await dispatch(postLogin({ memberNick, memberPassword: memberPassword })).unwrap();

      // optional: remember me ni localStorage/cookie’da saqlash
      if (remember) localStorage.setItem("remember_nick", memberNick);

      toast({ title: "Kirish muvaffaqiyatli!", status: "success" });
      void navigate('/')
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "string"
          ? err
          : "Login xatosi. Qayta urinib ko‘ring";
      toast({ title: message, status: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void performSubmit();
  };

  return (
    <Box minH="100vh" bg={pageBg} py={{ base: 6, md: 10 }}>
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <Flex direction={{ base: "column", md: "row" }} w="100%" minH={{ base: "auto", md: "80vh" }}
              bg="transparent" overflow="hidden" borderRadius={{ md: "3xl" }} boxShadow={{ md: "lg" }}>
          {/* LEFT — Illustration */}
          <Flex flex="1" align="center" justify="center" bg={useColorModeValue("white", "gray.900")}
                px={{ base: 6, md: 10 }} py={{ base: 10, md: 0 }}
                borderTopLeftRadius={{ md: "3xl" }} borderBottomLeftRadius={{ md: "3xl" }}>
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
          <Box flex="1" bg={bluePane} position="relative" display="flex" alignItems="center" justifyContent="center"
               px={{ base: 6, md: 10 }} py={{ base: 12, md: 0 }}
               borderTopRightRadius={{ md: "3xl" }} borderBottomRightRadius={{ md: "3xl" }}>
            {/* Card */}
            <Box as="form" onSubmit={onSubmit} w="full" maxW="sm" bg={cardBg}
                 p={{ base: 6, md: 8 }} borderRadius="xl" boxShadow="xl">
              <Stack spacing={6}>
                <Box>
                  <Heading size="lg" mb={1}>Welcome back</Heading>
                  <Text color={muted} fontSize="sm">Sign in to continue</Text>
                </Box>

                {/* Username */}
                <FormControl id="memberNick" isRequired>
                  <FormLabel srOnly>Username</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Box as={HiUser} color="gray.400" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      value={memberNick}
                      onChange={(e) => { setMemberNick(e.target.value); }}
                      placeholder="Username"
                      autoComplete="username"
                    />
                  </InputGroup>
                </FormControl>

                {/* Password */}
                <FormControl id="memberPassword" isRequired>
                  <FormLabel srOnly>Password</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <LockIcon color="gray.400" />
                    </InputLeftElement>
                    <Input
                      type={showPw ? "text" : "password"}
                      value={memberPassword}
                      onChange={(e) => { setMemberPassword(e.target.value); }}
                      placeholder="Password"
                      autoComplete="member-password"
                    />
                    <InputRightElement>
                      <IconButton
                        aria-label={showPw ? "Hide password" : "Show password"}
                        size="sm"
                        variant="ghost"
                        icon={showPw ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={() => { setShowPw(v => !v); }}
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

                  <Link as={RouterLink} to="/forgot-password" color="whiteAlpha.900"
                        textDecor="underline" fontSize="sm">
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
                  loadingText='isLoading....'
                  isDisabled={isSubmitting}
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
};

export default LoginPage;
