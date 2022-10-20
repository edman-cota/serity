import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  fontWeight: 400,
  bg: "transparent",
  resize: "none",
  caretColor: "#2175e2",

  _focusVisible: {
    boxShadow: "none",
    border: "none",
    outline: "none",
  },
  _focus: {
    boxShadow: "none",
    border: "none",
    outline: "none",
  },
  _focusWithin: {
    boxShadow: "none",
    border: "none",
    outline: "none",
  },
  _target: {
    boxShadow: "none",
    border: "none",
    outline: "none",
  },
});

export const textareaTheme = defineStyleConfig({ baseStyle });
