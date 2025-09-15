import {
  Box,
  Container,
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

const Hero: React.FC = () => {
  // 🔸 Dark/Light ranglar
  // const panelGrad = useColorModeValue(
  //   // "linear(135deg, #ffffff 0%, #f7fbff 60%, #ffffff 100%)",
  //   // "linear(135deg, #051124ff 0%, #0b1220 60%, #0d1117 100%)"
  // );
  // const vignette = useColorModeValue(
  //   "radial(800px 300px at 40% 40%, rgba(0,0,0,0.04), transparent)",
  //   "radial(800px 300px at 40% 40%, rgba(255,255,255,0.06), transparent)"
  // );

  const cardBg     = useColorModeValue("white", "rgba(255,255,255,0.06)");
  const cardBorder = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const shadow     = useColorModeValue("lg", "dark-lg");

  const headingGrad = useColorModeValue(
    "linear(to-r, purple.600, pink.600)",
    "linear(to-r, orange.300, red.400)"
  );
  const textColor  = useColorModeValue("gray.700", "whiteAlpha.800");
  const btnBg      = useColorModeValue("purple.600", "pink.400");
  const btnHover   = useColorModeValue("purple.700", "pink.500");
  const accentBar  = useColorModeValue("purple.600", "pink.400");

  return (
    <Box
      position="relative"
      overflow="hidden"
      borderRadius="2xl"
      // bgGradient={panelGrad}
      py={{ base: 10, md: 16 }}
      px={{ base: 3, md: 6 }}
      fontFamily={'serif'}
    >
      {/* yumshoq vignette */}
      <Box pointerEvents="none" position="absolute" inset={0}  />

      <Container maxW="6xl" position="relative">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 16 }}
          align="center"
          justify="space-between"
        >
          {/* Chap: matnlar */}
          <VStack align="flex-start" spacing={5} maxW={{ md: "lg" }} >
            <Heading lineHeight="1.1" fontWeight="extrabold" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Box as="span" bgGradient={headingGrad} fontFamily={'inter'} bgClip="text" display="block">
                Bizning platformamizda
              </Box>
              <Box as="span" bgGradient={headingGrad} bgClip="text" fontFamily={'inter'} display="block">
                siz Tillarni oson o‘rganasiz
              </Box>
            </Heading>

            <Text color={textColor} fontFamily={'inter'} fontSize={{ base: "sm", md: "md" }}>
              Bizning platformamiz orqali siz o‘zingiz xohlagan tilni juda oson o‘rganasiz.
            </Text>

            <Button
              as={Link}
              size="md"
              px={6}
              rounded="xl"
              bg={btnBg}
              _hover={{ bg: btnHover }}
              color="white"
              boxShadow="0 8px 24px rgba(0,0,0,0.18)"
              fontFamily={'inter'}
            >
              Create Account
            </Button>
          </VStack>

          {/* O‘ng: rasm kartasi */}
          <Box
            bg={cardBg}
            border="1px solid"
            borderColor={cardBorder}
            p={{ base: 1.5, md: 2 }}
            rounded="xl"
            boxShadow={shadow}
          >
            <Image
              src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop"
              alt="Learning"
              objectFit="cover"
              rounded="lg"
              w={{ base: "320px", md: "420px" }}
              h={{ base: "200px", md: "260px" }}
            />
          </Box>
        </Stack>
      </Container>

      {/* Pastdagi aksent chiziq (screenshottagi binafsha chiziqqa o‘xshash) */}
      <Box mt={{ base: 8, md: 10 }} h="3px" w="full" bg={accentBar} />
    </Box>
  );
};

export default Hero;
