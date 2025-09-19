// components/StudentsFeedback.tsx
"use client";
import * as React from "react";
import {
  Avatar, Badge, Box, Button, Container, Divider, HStack, Heading, Icon,
  Menu, MenuButton, MenuItem, MenuList, Stack, Text, VStack,
  useColorModeValue
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Review = {
  id: string;
  name: string;
  avatar: string;
  rating: number;        // 0..5
  ago: string;           // e.g., "1 week ago"
  text: string;
};

const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Samar Aliyev",
    avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=256&auto=format&fit=crop",
    rating: 5,
    ago: "1 kun oldin",
    text:
      "Bu Paltformada mustaqil Kores tilini o'rganishim oson bo'ldi.",
  },
  {
    id: "r2",
    name: "Diyorbek Akramov",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=256&auto=format&fit=crop",
    rating: 5,
    ago: "1 hafta oldin",
    text:
      "Kurs mazmuni kutganimdan ham yaxshi bo‘ldi. Real hayotga asoslangan, tavsiya qilaman.",
  },
  {
    id: "r3",
    name: "Abdulaziz Rahimov",
    avatar: "https://entrepreneurgulf.com/wp-content/uploads/2024/03/Abdulaziz-Al-Saud.png",
    rating: 4,
    ago: "3 kun oldin",
    text:
      "Kurs juda foydali, lekin ba’zi mavzular tez o‘tildi. Umuman olganda super.",
  },
  {
    id: "r4",
    name: "Mohinur Akramova",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    rating: 3,
    ago: "1 hafta oldin",
    text:
      "O‘rtacha. Ba’zi bo‘limlar chuqurroq tushuntirilsa yaxshi bo‘lardi.",
  },
];

function GlassCard(props: React.ComponentProps<typeof Box>) {
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const bg = useColorModeValue("whiteAlpha.700", "blackAlpha.400");
  return (
    <Box
      border="1px solid"
      borderColor={border}
      bg={bg}
      backdropFilter="blur(10px)"
      borderRadius="2xl"
      boxShadow="0 16px 40px rgba(0,0,0,.25)"
      {...props}
    />
  );
}

function Stars({ value, size = 18 }: { value: number; size?: number }) {
  const items = Array.from({ length: 5 }, (_, i) => i < Math.round(value));
  return (
    <HStack spacing={0.5}>
      {items.map((filled, i) => (
        <Icon
          key={i}
          as={filled ? AiFillStar : AiOutlineStar}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          color={filled ? "yellow.400" : useColorModeValue("gray.400", "gray.500")}
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          boxSize={`${size}px`}
        />
      ))}
    </HStack>
  );
}

function ReviewItem({ r }: { r: Review }) {
  const sub = useColorModeValue("gray.600", "gray.300");
  return (
    <GlassCard p={{ base: 4, md: 5 }}>
      <HStack align="start" spacing={4}>
        <Avatar name={r.name} src={r.avatar} size="lg" />
        <VStack align="start" spacing={1} w="full">
          <HStack spacing={3} wrap="wrap">
            <Heading size="sm">{r.name}</Heading>
            <Stars value={r.rating} />
            {r.rating >= 5 && (
              <Badge colorScheme="purple" borderRadius="full">Top</Badge>
            )}
          </HStack>
          <Text fontSize="sm" color={sub}>{r.ago}</Text>
          <Text mt={2} color={sub}>{r.text}</Text>
        </VStack>
      </HStack>
    </GlassCard>
  );
}

type Filter = "ALL" | 5 | 4 | 3 | 2;

export default function StudentsFeedback(): React.JSX.Element {
  const [filter, setFilter] = React.useState<Filter>("ALL");
  const label =
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    filter === "ALL" ? "All Ratings" : filter === 2 ? "≤ 2 Stars" : `${filter} Stars`;

  const filtered = React.useMemo(() => {
    if (filter === "ALL") return REVIEWS;
    if (filter === 2) return REVIEWS.filter((r) => r.rating <= 2);
    return REVIEWS.filter((r) => Math.floor(r.rating) === filter);
  }, [filter]);

  const head = useColorModeValue("gray.900", "gray.100");

  return (
    <Container maxW="5xl" py={8}>
      <GlassCard p={{ base: 4, md: 6 }}>
        {/* Header */}
        <HStack justify="space-between" align="center" mb={4}>
          <Heading size="lg" color={head}>Students Feedback</Heading>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="outline" borderRadius="xl">
              {label}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => { setFilter("ALL"); }}>All Ratings</MenuItem>
              <MenuItem onClick={() => { setFilter(5); }}>5 Stars</MenuItem>
              <MenuItem onClick={() => {setFilter(4)}}>4 Stars</MenuItem>
              <MenuItem onClick={() => {setFilter(3)}}>3 Stars</MenuItem>
              <MenuItem onClick={() => {setFilter(2)}}>≤ 2 Stars</MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        {/* List */}
        <Stack spacing={4}>
          {filtered.map((r, idx) => (
            <React.Fragment key={r.id}>
              <ReviewItem r={r} />
              {idx < filtered.length - 1 && (
                <Divider opacity={0.2} borderStyle="dashed" />
              )}
            </React.Fragment>
          ))}
          {filtered.length === 0 && (
            // eslint-disable-next-line react-hooks/rules-of-hooks
            <Box p={6} textAlign="center" color={useColorModeValue("gray.600", "gray.300")}>
              Bu filtr bo‘yicha izoh topilmadi.
            </Box>
          )}
        </Stack>
      </GlassCard>
    </Container>
  );
}
