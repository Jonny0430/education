import { Box, Flex, Hide, Show, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import AdminNavbar from "../layout/AdminNavbar";
import AdminSidebar from "../layout/AdminSidebar";

export const AdminPage = () => {
  const appBg   = useColorModeValue("#f4faff", "#f4faff");
  const headerBg = useColorModeValue("white", "gray.800");
  const borderCl = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

    const menu = useDisclosure();
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
        <AdminNavbar notifCount={1} onMenuClick={function (): void {
          throw new Error("Function not implemented.");
        } } />
      </Box>

      {/* SIDEBAR (desktop) */}

         <Hide below="md">
          <AdminSidebar variant="static" navH={'64px'} />
        </Hide>
       <Show below="md">
          <AdminSidebar variant="drawer" isOpen={menu.isOpen} onClose={menu.onClose} />
        </Show>

      {/* PAGE CONTENT */}
      <Box flex="1" />
    </Flex>
  );
};