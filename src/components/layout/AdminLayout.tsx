import { Box, Flex} from '@chakra-ui/react';
import AdminNavbar from './AdminNavbar';
import Sidebar from '../Headers/Sidebar';


const HEADER_H = 64;
const SIDEBAR_W = 264;

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  return (
    <Flex direction="column" minH="100vh" bg="#f4faff">
      <Box as="header" position="sticky" top={0} zIndex={1000} h={`${HEADER_H}px`} bg="white" boxShadow="sm">
        <AdminNavbar /> {/* <- mobil tugma shu yerda */}
      </Box>

      <Flex as="section" flex="1" minH={0} overflow="hidden">
        {/* Desktop sidebar */}
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
          <Sidebar />
        </Box>

        {/* Mobile drawer sidebar */}
          <Sidebar /> {/* aynan shu komponentni ichiga qo'yasiz */}


        {/* Main content */}
        <Box as="main" flex="1" minW={0} minH={0} overflowY="auto" px={{ base: 4, md: 6 }} py={{ base: 4, md: 6 }}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
