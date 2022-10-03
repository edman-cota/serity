/* eslint-disable import/prefer-default-export */
import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f7fafc",
      100: "#EDF2F7",
      200: "#e9ecef",
      500: "rgba(255, 255, 255, 0.08)", // hover bg secondary
      600: "#383D5B", // hover bg primary
      700: "#1f2733", // main
      800: "#1A202C",
      900: "#171923",
    },
    brand: {
      50: "#f7fafc",
      100: "#00B8D9",
      200: "#2e85ec",
      500: "rgba(255, 255, 255, 0.08)", // hover bg secondary
      600: "#383D5B", // hover bg primary
      700: "#1f2733", // main
      800: "#1A202C",
      900: "#171923",
    },
    blue: {
      200: "#00B8D9",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        // bg: mode("gray.50", "gray.800")(props),
        bg: mode("white", "gray.800")(props), // 1
        fontFamily: "Segoe UI, Hind, Open Sans, Roboto, Helvetica, sans-serif",
      },
    }),
  },
};
