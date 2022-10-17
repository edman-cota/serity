/* eslint-disable comma-dangle */
import { extendTheme } from "@chakra-ui/react";
// import { createBreakpoints } from "@chakra-ui/theme-tools";
// import { styles } from "./styles";
// import buttonStyles from "./components/button";
// import linkStyles from "./components/link";
// import { textareaStyles } from "./components/textarea";
import { inputTheme } from "./components/input.ts";
import { menuTheme } from "./components/menu.ts";
import { tooltipTheme } from "./components/tooltip.ts";
import { buttonTheme } from "./components/button.ts";

// const config = {
//   initialColorMode: "light",
//   useSystemColorMode: false,
// };

// const breakpoints = createBreakpoints({
//   sm: "414px",
//   md: "768px",
//   lg: "960px",
//   xl: "1050px",
//   "2xl": "1200px",
//   "3xl": "1536px",
// });

// const $arrowBg = cssVar("popper-arrow-bg");
// const $arrowShadowColor = cssVar("popper-arrow-shadow-color");
// const components = {
//   Popover: {
//     parts: ["arrow", "content"],
//     baseStyle: {
//       content: {
//         bg: "black",
//         boxShadow: "none",
//         border: "none",
//         _focus: {
//           boxShadow: "none",
//         },
//         [$arrowBg.variable]: "black",
//         [$arrowShadowColor.variable]: "1px 1px black",
//       },
//     },
//   },

//   Input: {
//     variants: {
//       filled: {
//         field: {
//           color: "white",
//           opacity: "0.8",
//           mt: "15px",
//           h: "42px",
//           border: "none",
//           bg: "whiteAlpha.700",
//           _focus: {
//             zIndex: 1,
//             bg: "rgba(255, 255, 255, 0.08)",
//             borderColor: "#63b3ed",
//             boxShadow: "0 0 0 1px #63b3ed",
//           },
//         },
//       },
//     },
//   },
//   Checkbox: {
//     baseStyle: {
//       control: {
//         borderRadius: "4px",
//         bg: "rgba(255, 255, 255, 0.08)",
//         border: "none",
//         color: "white",
//         _focus: {
//           ring: 0,
//         },
//       },
//     },
//   },

const theme = extendTheme({
  colors: {
    gray: {
      700: "#1f2733",
    },
  },
  components: {
    Input: inputTheme,
    Menu: menuTheme,
    Tooltip: tooltipTheme,
    Button: buttonTheme,
  },

  // { config, breakpoints, components },
  // globalStyles,
  // buttonStyles,
  // menuStyles,
  // linkStyles,
  // textareaStyles,
  // withDefaultColorScheme({
  //   colorScheme: "brand",
  //   components: ["Checkbox"],
  // })
});

export default theme;
