// src/layouts/AdminLayout.tsx
"use client";

import { Outlet } from "react-router-dom";
import { Box, Flex, useDisclosure, useColorModeValue } from "@chakra-ui/react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar  from "./AdminSidebar";


export default function AdminLayout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const appBg = useColorModeValue("#f4faff", "#0b1220");

  return (
    <Flex direction="column" minH="100vh" bg={appBg}>
      {/* HEADER (sticky) */}
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={1000}
        h={'64px'}
        bg="white"
        boxShadow="sm"
      >
        {/* AdminNavbar ichida position/fixed ishlatmang; sticky'ni layout beradi */}
        <AdminNavbar onMenuClick={onOpen} />
      </Box>

      <Flex as="section" flex="1" minH={0} overflow="hidden">
        {/* DESKTOP: static sidebar (md va undan katta) */}
        <Box
          display={{ base: "none", md: "block" }}
          w={'64px'}
          flexShrink={0}
          position="sticky"
          top={'64px'}
          alignSelf="flex-start"
          h={'calc(100vh - 64px'}
          overflowY="auto"
          bg="white"
          borderRight="1px solid"
          borderColor="gray.100"
          zIndex={999}
        >
          <AdminSidebar variant="static" navH={'64px'} />
        </Box>

        {/* MOBILE: drawer sidebar (base–md) */}
        <AdminSidebar variant="drawer" isOpen={isOpen} onClose={onClose} />

        {/* MAIN CONTENT */}
        <Box
          as="main"
          flex="1"
          minW={0}
          minH={0}
          overflowY="auto"
          px={{ base: 4, md: 6 }}
          py={{ base: 4, md: 6 }}
        >
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
}
