import { Box, useColorModeValue } from "@chakra-ui/react";
import HomeNavbar from "./HomeNavbar";
import CategoryGrid from "./CategoryGrid";
import CoursesGrid from "./CoursesGrid";
import TopUsersCarousel from "./TopUsersCarousel";
import TrustedCommunities from "./TrustedCommunities";
import TopInstructors from "./TopInstructors";

export default function HomePage() {
  // Light/Dark fon – theme bilan mos
  const pageBg = useColorModeValue("#f4faff", "#0b1220");

  

  return (
    <Box bg={pageBg} minH="calc(100vh - 64px)"> 
      {/* HomeNavbar faqat home sahifaga xos bo‘lsa */}
      <HomeNavbar />
      <CategoryGrid />
      <CoursesGrid />
      <TopUsersCarousel />
      <TrustedCommunities />
      <TopInstructors />
    </Box>
  );
}

export const NAV_HEIGHT = "64px";
export const SIDEBAR_WIDTH = "280px";
