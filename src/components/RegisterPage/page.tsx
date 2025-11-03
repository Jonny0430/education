import {
  Box, Button, Container, Flex, FormControl, FormLabel, Heading, IconButton,
  Input, InputGroup, InputLeftElement, InputRightElement, Link, Stack, Text,
  useColorModeValue, Image, useToast
} from "@chakra-ui/react";
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { HiUser } from "react-icons/hi";
import { useState, type FormEvent } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { postRegister } from "../../store/register/register.action";

export default function RegisterPage() {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const pageBg = useColorModeValue("linear-gradient(180deg,#f7fbff,#eef6ff)", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const bluePane = useColorModeValue("blue.600", "blue.500");
  const muted = useColorModeValue("gray.500", "gray.400");

  const [memberNick, setMemberNick] = useState("");
  const [memberPhone, setMemberPhone] = useState("");
  const [memberPassword, setMemberPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!memberNick.trim() || !memberPhone.trim() || !memberPassword.trim()) {
      toast({ title: "Iltimos, barcha maydonlarni to'ldiring", status: "warning" });
      return;
    }
    const phoneRe = /^[0-9+\-()\s]{7,20}$/;
    if (!phoneRe.test(memberPhone.trim())) {
      toast({ title: "Telefon raqam noto‘g‘ri formatda", status: "error" });
      return;
    }

    setIsSubmitting(true);
    try {
      await dispatch(
        postRegister({ memberNick, memberPhone, memberPassword })
      ).unwrap();

      toast({ title: "Muvaffaqiyatli ro'yxatdan o'tdingiz!", status: "success" });
      // ✅ kerakli sahifaga yo'naltiring
      void navigate("/"); // masalan, login sahifasi
    } catch (err) {
      const error = err as { message?: string };
      toast({ title: error?.message ?? "Ro'yxatdan o'tishda xatolik", status: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box minH="100vh" bg={pageBg} py={{ base: 6, md: 10 }}>
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <Flex direction={{ base: "column", md: "row" }} minH={{ base: "auto", md: "80vh" }}
              borderRadius={{ md: "3xl" }} boxShadow={{ md: "lg" }} overflow="hidden">
          {/* LEFT */}
          <Flex flex="1" align="center" justify="center" bg={useColorModeValue("white", "gray.900")}
                px={{ base: 6, md: 10 }} py={{ base: 10, md: 0 }}
                borderTopLeftRadius={{ md: "3xl" }} borderBottomLeftRadius={{ md: "3xl" }}>
            <Box maxW="sm" w="full">
              <Image
                src="https://www.pngplay.com/wp-content/uploads/6/Education-Icon-Background-PNG-Image.png"
                alt="Register illustration"
                draggable={false}
                pointerEvents="none"
              />
            </Box>
          </Flex>

          {/* RIGHT */}
          <Box flex="1" bg={bluePane} position="relative" display="flex" alignItems="center" justifyContent="center"
               px={{ base: 6, md: 10 }} py={{ base: 12, md: 0 }}
               borderTopRightRadius={{ md: "3xl" }} borderBottomRightRadius={{ md: "3xl" }}>
            {/* Card */}
            <Box as="form" onSubmit={onSubmit} w="full" maxW="sm" bg={cardBg}
                 p={{ base: 6, md: 8 }} borderRadius="xl" boxShadow="xl">
              <Stack spacing={6}>
                <Box>
                  <Heading size="lg" mb={1}>Create Account</Heading>
                  <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="sm">
                    Join us to get started
                  </Text>
                </Box>

                {/* Nickname */}
                <FormControl id="memberNick" isRequired>
                  <FormLabel srOnly>User Name</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Box as={HiUser} color="gray.400" />
                    </InputLeftElement>
                    <Input
                      value={memberNick}
                      onChange={(e) => { setMemberNick(e.target.value); }}
                      placeholder="Full Name"
                      autoComplete="name"
                    />
                  </InputGroup>
                </FormControl>

                {/* Phone */}
                <FormControl id="memberPhone" isRequired>
                  <FormLabel srOnly>Phone</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      {/* Telefon ikonka qo‘yishingiz mumkin */}
                      <Box as={HiUser} color="gray.400" />
                    </InputLeftElement>
                    <Input
                      type="tel"
                      value={memberPhone}
                      onChange={(e) => { setMemberPhone(e.target.value); }}
                      placeholder="Phone Number"
                      autoComplete="tel"
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
                  loadingText="Signing up..."
                  isDisabled={isSubmitting}
                >
                  Create account
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
