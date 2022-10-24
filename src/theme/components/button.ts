import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  fontWeight: "normal",
  borderRadius: "base",
  _focusVisible: {
    boxShadow:
      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
  },

  _dark: {
    color: "gray.400",

    _hover: {
      color: "white",
    },
  },
});

const ghost = defineStyle({
  color: "rgba(24, 29, 37, .6)",

  _hover: {
    color: "black",
  },
});

const solid = defineStyle({
  bg: "whiteAlpha.200",
  fontSize: "14px",
  color: "white",

  _hover: {
    bg: "whiteAlpha.300",
  },

  _dark: {
    color: "white",
  },
});

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: { ghost, solid },
  defaultProps: {
    variant: "ghost",
  },
});