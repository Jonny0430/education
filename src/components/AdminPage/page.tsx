import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import AdminNavbar from "../layout/AdminNavbar";
import AdminSidebar from "../layout/AdminSidebar";

export const AdminPage = () => {
  const appBg   = useColorModeValue("#f4faff", "#f4faff");
  const headerBg = useColorModeValue("white", "gray.800");
  const borderCl = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

  return (
    <Flex direction="column" minH="100vh" bg={appBg} /* overflow bo‘lmasin */>
      {/* HEADER */}
      <Box
        as="header"
        position="sticky"
        top={0}                          // ✅ yopishish nuqtasi
        zIndex={1000}                    // ✅ nav ustida bo‘lsin
        bg={headerBg}                    // ✅ orqa fon
        borderBottom="1px solid"
        borderColor={borderCl}
      >
        <AdminNavbar notifCount={1} />
      </Box>

      {/* SIDEBAR (desktop) */}
      <Box as="aside" zIndex={1} display={{ base: "none", md: "block" }}>
        <AdminSidebar />
      </Box>

      {/* PAGE CONTENT */}
      <Box flex="1" />
    </Flex>
  );
};