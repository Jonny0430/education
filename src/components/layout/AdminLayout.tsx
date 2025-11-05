// AdminLayout.tsx
import { Box, Flex, Show, useDisclosure } from '@chakra-ui/react';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';        // <-- bitta sidebarni ishlatamiz
// Agar alohida "Headers/Sidebar" bo'lsa, uni olib tashlang yoki AdminSidebar'ga birlashtiring

const HEADER_H = 64;
const SIDEBAR_W = 264;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // Mobil drawer nazorati
  const { isOpen, onOpen, onClose } = useDisclosure();
const menu = useDisclosure();
  return (
    <Flex direction="column" minH="100vh" bg="#f4faff">
      {/* HEADER */}
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={1000}
        h={`${HEADER_H}px`}
        bg="white"
        boxShadow="sm"
      >
        {/* Navbar ichida "menu" tugma bo'ladi va onOpen ni chaqiradi */}
        <AdminNavbar onMenuClick={onOpen} />
      </Box>

      <Flex as="section" flex="1" minH={0} overflow="hidden">
        {/* DESKTOP: statik sidebar */}
        <Box
          display={{ base: 'none', md: 'block' }}
          w={`${SIDEBAR_W}px`}
          flexShrink={0}
          position="sticky"
          top={`${HEADER_H}px`}
          alignSelf="flex-start"
          h={`calc(100vh - ${HEADER_H}px)`}
          overflowY="auto"
          bg="white"
          borderRight="1px solid"
          borderColor="gray.100"
          zIndex={999}
        >
         <AdminSidebar variant="static" navH={`${HEADER_H}px`} />
        </Box>

       
         <Show below="md">
          <AdminSidebar variant="drawer" isOpen={menu.isOpen} onClose={menu.onClose} />
        </Show>
        {/* MAIN */}
        <Box
          as="main"
          flex="1"
          minW={0}
          minH={0}
          overflowY="auto"
          px={{ base: 4, md: 6 }}
          py={{ base: 4, md: 6 }}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
