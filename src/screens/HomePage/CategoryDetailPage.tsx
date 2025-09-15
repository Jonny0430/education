// screens/CategoryDetailPage.tsx
import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router";

export default function CategoryDetailPage() {
  const { id } = useParams<{ id: string }>();
  return (
    <Box>
      <Heading size="lg">Category: {id}</Heading>
      <Text mt={2}>Bu yerda {id} uchun kitoblar/bo‘limlar ro‘yxati chiqadi.</Text>
    </Box>
  );
}
