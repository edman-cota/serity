/* eslint-disable comma-dangle */
import { extendTheme, cssVar, withDefaultColorScheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { globalStyles } from "./styles";
import buttonStyles from "./components/button";
import menuStyles from "./components/menu";
import linkStyles from "./components/link";
import { textareaStyles } from "./components/textarea";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: "414px",
  md: "768px",
  lg: "960px",
  xl: "1050px",
  "2xl": "1200px",
  "3xl": "1536px",
});

const $arrowBg = cssVar("popper-arrow-bg");
const $arrowShadowColor = cssVar("popper-arrow-shadow-color");
const components = {
  Popover: {
    parts: ["arrow", "content"],
    baseStyle: {
      content: {
        bg: "black",
        boxShadow: "none",
        border: "none",
        _focus: {
          boxShadow: "none",
        },
        [$arrowBg.variable]: "black",
        [$arrowShadowColor.variable]: "1px 1px black",
      },
    },
  },

  Input: {
    variants: {
      filled: {
        field: {
          color: "white",
          opacity: "0.8",
          mt: "15px",
          h: "42px",
          border: "none",
          bg: "rgba(255, 255, 255, 0.08)",
          _focus: {
            zIndex: 1,
            bg: "rgba(255, 255, 255, 0.08)",
            borderColor: "#63b3ed",
            boxShadow: "0 0 0 1px #63b3ed",
          },
        },
      },
    },
  },
  Checkbox: {
    baseStyle: {
      control: {
        borderRadius: "4px",
        bg: "rgba(255, 255, 255, 0.08)",
        border: "none",
        color: "white",
        _focus: {
          ring: 0,
        },
      },
    },
  },
  Tooltip: {
    baseStyle: {
      px: "4",
      py: "2",
      borderRadius: "base",
      fontWeight: "normal",
      bg: "rgba(0, 5, 11, 0.9)",
      color: "rgba(255, 255, 255, 1)",
    },
  },
};

const theme = extendTheme(
  { config, breakpoints, components },
  globalStyles,
  buttonStyles,
  menuStyles,
  linkStyles,
  textareaStyles,
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  })
);

export default theme;

// sm: 480px
// md: 768px
// lg: 992px
// xl: 1280px
// 2xl: 1536px
