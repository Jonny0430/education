// theme.ts
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: `'Figtree', sans-serif`,
    body: `'Figtree', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "#f4faff", // Light mode background
        color: "gray.800",
        _dark: {
          bg: "gray.900", // Dark mode background
          color: "gray.100",
        },
      },
    },
  },
});
